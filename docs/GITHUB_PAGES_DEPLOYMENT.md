# GitHub Pages deployment — AEON Media

## Hosting architecture
GitHub Pages serves static files only. The site is a Next.js app built with `output: "export"`, so `npm run build` writes plain HTML, CSS, JS, fonts and assets to `out/`. No Node server runs in production.

Why static export: every page (Home, Work, project pages, Services, About, Contact, 404) is known at build time. Project pages come from `generateStaticParams` over `src/data/projects.ts` with `dynamicParams = false`. Nothing needs request-time rendering, API routes, middleware, cookies or server image optimisation, so none are used.

Key settings live in `next.config.ts`: `output: "export"`, `trailingSlash: true` (each route becomes `route/index.html`, so refreshing a nested URL works), `images.unoptimized: true`, and `basePath`/`assetPrefix`.

## Build
```bash
npm ci
npm run lint && npm run typecheck
npm run build        # writes ./out
```
Preview exactly as Pages will serve it (project site under `/aeon-media`):
```bash
NEXT_PUBLIC_BASE_PATH=/aeon-media npm run build
mkdir -p /tmp/pages && ln -sfn "$PWD/out" /tmp/pages/aeon-media
(cd /tmp/pages && python3 -m http.server 3200)   # http://localhost:3200/aeon-media/
```
`out/404.html` is served by GitHub Pages for unknown URLs; a local Python server shows its own 404 instead.

## Base path (repository URL vs root vs custom domain)
Resolved in `next.config.ts`, first match wins:
1. `NEXT_PUBLIC_BASE_PATH` — explicit. `""` for the root, `"/repo-name"` for a project site.
2. In GitHub Actions: derived from `GITHUB_REPOSITORY`. A repo named `<owner>.github.io` gets `""`; any other repo gets `/<repo>`.
3. Otherwise `""` (local development).

Next's `<Link>`, `_next` assets and fonts are prefixed automatically. The repo name is never hardcoded. In the workflow, `actions/configure-pages` supplies `base_path` and `origin` from your Pages settings.

## GitHub Actions
`.github/workflows/deploy.yml` runs on push to `main` and manually (`workflow_dispatch`). Jobs:
- **build**: checkout → Node (`.nvmrc`, 22) → configure-pages → `npm ci` → lint → typecheck → `npm run build` → verify `out/index.html`, `404.html`, `.nojekyll`, `work/` and `contact/` exist → `upload-pages-artifact` (`out`).
- **deploy**: `actions/deploy-pages` to the `github-pages` environment.

Permissions are the minimum: `contents: read`, `pages: write`, `id-token: write`. Generated output is not committed.

### One-time repository setup (you do this)
1. Push the project to GitHub (default branch `main`).
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow manually). The URL appears in the deploy job.

## Custom domain
1. Settings → Pages → Custom domain → enter it (GitHub then serves from the root).
2. Add the DNS records GitHub lists at your DNS provider. Do this yourself; nothing here changes DNS.
3. No config change is normally needed: `configure-pages` reports an empty `base_path` for custom domains. If a build ever uses the wrong path, set `NEXT_PUBLIC_BASE_PATH: ""` in the workflow's build step.
4. Optionally add `public/CNAME` containing the domain.


## Asset optimisation guidelines
`next/image` optimisation is off on static hosts, so optimise files before committing.
- Export images as WebP (or AVIF), at most ~2000px on the long edge, ideally under 300 KB each. Provide width/height to avoid layout shift; lazy-load below the fold.
- Keep sources in `public/images/` (reference with Next's `<Image>` or `src/lib` helpers so the base path applies; never hardcode `/images/...` in a plain `<img>`).
- Video: prefer external embeds (YouTube/Vimeo) behind a compressed poster image loaded on click; do not autoplay on mobile and do not commit raw footage.
- Keep the published site well under the Pages limit (1 GB site, 100 GB/month bandwidth).

## Troubleshooting
- **Blank page / missing CSS or JS**: base path mismatch. Check `NEXT_PUBLIC_BASE_PATH` and that the URL matches `/<repo>/`.
- **404 on refresh of a nested page**: ensure `trailingSlash: true` is still set and the route exists in `out/`.
- **Assets 404 only on GitHub**: confirm `public/.nojekyll` exists (Pages must not run Jekyll over `_next/`).
- **Workflow fails at "Verify static output"**: the build did not produce `out/`; check the build step log.
- **Pages deploy fails with permissions**: set Settings → Pages → Source to *GitHub Actions*.
- **New project route 404s**: add it to `src/data/projects.ts`; routes are generated at build time.

## Manual publishing (no Actions)
Build locally, then publish the contents of `out/` to a `gh-pages` branch (and set Pages source to that branch). Make sure `out/.nojekyll` is included. The Actions route above is preferred.

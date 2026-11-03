# AEON Media — Portfolio Website

Premium creative-company portfolio for AEON Media. Brand rules, palette and page specs live in `plan/` (source of truth) and `CLAUDE.md`.

## Stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · `motion` (reveals, hero, mobile menu) · `lucide-react` (icons) · fonts via `next/font` (Cormorant Garamond, Manrope).

## Run
```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npm run typecheck
npm run build        # static export -> ./out (GitHub Pages ready)
```
Hosting is **GitHub Pages** (static export, no server). Base path, workflow, custom domain, form integration and troubleshooting are in [`docs/GITHUB_PAGES_DEPLOYMENT.md`](docs/GITHUB_PAGES_DEPLOYMENT.md). Environment options are in `.env.example`.

## Structure
- `src/app` — pages: `/`, `/work`, `/work/[slug]`, `/services`, `/about`, `/contact`, plus `sitemap.ts`, `robots.ts`
- `src/components/ui` — `AeonWordmark` (ON ME highlight, live text), `Button`, `Container/Section`, `Reveal`, `ImagePlaceholder`
- `src/components/{layout,sections,portfolio}` — header/footer, hero, CTA, process, contact form, project cards/filters
- `src/data` — typed content: `projects.ts`, `content.ts`; `src/lib/site.ts` — contact details & socials
- Design tokens: `src/app/globals.css` (CSS variables, single source of truth)

## What is real vs. placeholder
| Item | Status |
|---|---|
| Pages, navigation, mobile menu, filters, project template, motion, SEO metadata, sitemap/robots | Functional |
| Contact | Direct WhatsApp / call for Kimaya and Yashodhan (no form, by design) |
| Portfolio | Nine supplied Instagram brands. Category/summary come from public bios; no AEON-produced posts are showcased until confirmed (see `docs/portfolio/instagram-portfolio-integration.md`) |
| Contact email/phone/socials | **Not supplied** — hidden until set in `src/lib/site.ts` |
| Testimonials, metrics, client logos | None shown (none supplied) |

## Pending from the owner
Real projects, images and permissions · contact details and social links  · final domain · approved wordmark source (current one is recreated in HTML/CSS) · deployment target.

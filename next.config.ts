import type { NextConfig } from "next";

/**
 * GitHub Pages static export.
 *
 * Base path resolution (first match wins):
 *  1. NEXT_PUBLIC_BASE_PATH        — explicit override ("" for root / custom domain, "/name" for a project site)
 *  2. GITHUB_ACTIONS + GITHUB_REPOSITORY — derived from the repo name; "" when the repo is "<owner>.github.io"
 *  3. ""                           — local development
 * A custom domain serves from the root, so set NEXT_PUBLIC_BASE_PATH="" for it (see docs/GITHUB_PAGES_DEPLOYMENT.md).
 */
function resolveBasePath(): string {
  const explicit = process.env.NEXT_PUBLIC_BASE_PATH;
  if (explicit !== undefined) return explicit === "/" ? "" : explicit.replace(/\/$/, "");
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (process.env.GITHUB_ACTIONS && repo && !repo.toLowerCase().endsWith(".github.io")) return `/${repo}`;
  return "";
}

const basePath = resolveBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

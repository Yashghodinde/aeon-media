import type { MetadataRoute } from "next";
import { hasMedia, projects } from "@/data/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = ["", "/work", "/services", "/about", "/contact", ...projects.filter(hasMedia).map((p) => `/work/${p.slug}`)];
  return routes.map((r) => ({ url: `${base}${r}/` }));
}

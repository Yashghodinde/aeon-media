import type { MetadataRoute } from "next";
import { clientHref, clients } from "@/data/clients";
import { serviceList } from "@/data/services";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = ["", "/work", "/work/clients", "/services", "/packages", ...serviceList.map((x) => `/services/${x.slug}`), "/about", "/contact", ...clients.map((c) => clientHref(c.slug))];
  return routes.map((r) => ({ url: `${base}${r}/` }));
}

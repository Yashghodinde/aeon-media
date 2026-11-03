import type { Service } from "./services";

/**
 * Packages are built from services. Rates are intentionally NOT set: add `rate` (e.g. "₹XX,XXX / month")
 * to a package when ready. Without it the page says "Rates shared on enquiry".
 * Quantities (posts, reels, shoot days) are not stated; they are agreed with each client.
 */
export type Package = {
  slug: string;
  name: string;
  tagline: string;
  idealFor: string;
  /** Service slugs included by this package itself. */
  services: Service["slug"][];
  /** Slug of a package this one builds on ("Everything in …, plus"). */
  includes?: string;
  rate?: string;
  highlight?: boolean;
};

export const RATE_NOTE = "Rates may change from time to time.";

export const packages: Package[] = [
  {
    slug: "foundation",
    name: "Foundation",
    tagline: "A clear look and a clear direction.",
    idealFor: "Brands that are starting out, or refreshing how they look and what they say.",
    services: ["design-brand-identity", "creative-direction"],
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "Consistent, well-made content, month after month.",
    idealFor: "Brands ready to show up regularly with content made with care.",
    includes: "foundation",
    services: ["social-media-management", "video-editing", "shoots-production"],
    highlight: true,
  },
  {
    slug: "signature",
    name: "Signature",
    tagline: "Everything, with reach built in.",
    idealFor: "Brands that want a complete creative partner, including promotion and creator collaborations.",
    includes: "growth",
    services: ["meta-advertising", "influencer-marketing"],
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
/** All service slugs a package covers, including those inherited. */
export function allServices(p: Package): Service["slug"][] {
  const base = p.includes ? allServices(getPackage(p.includes)!) : [];
  return [...base, ...p.services];
}

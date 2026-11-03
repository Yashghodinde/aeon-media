import type { Industry } from "./content";

/**
 * Portfolio data. Keep content here, not in components.
 *
 * Source: the nine Instagram accounts supplied by AEON Media. Category and summary come from each
 * account's PUBLIC bio (see docs/portfolio/instagram-portfolio-integration.md for the evidence).
 *
 * `media` is deliberately empty: Instagram does not show which posts AEON produced, so nothing is
 * showcased as AEON's work until its URL is confirmed. To add work, append to a project's `media`:
 *   { id: "reel-1", type: "instagram-embed", postUrl: "https://www.instagram.com/reel/XXXX/", aspectRatio: "9:16", title: "..." }
 * or { id, type: "image", assetPath: "/images/x.webp", aspectRatio: "4:5", title, alt }.
 * No other code changes are needed.
 */
export type PortfolioMedia = {
  id: string;
  type: "instagram-embed" | "image" | "video";
  /** Public Instagram post or Reel URL (https://www.instagram.com/p/… or /reel/…). */
  postUrl?: string;
  /** Path under /public for local image/video assets. */
  assetPath?: string;
  aspectRatio?: "9:16" | "4:5" | "1:1" | "16:9";
  title?: string;
  alt?: string;
};

export type PortfolioProject = {
  slug: string;
  name: string;
  /** Instagram handle without "@", exactly as supplied. */
  handle: string;
  profileUrl: string;
  category: Industry;
  /** Factual line paraphrased from the account's public bio. Not a claim about AEON's deliverables. */
  summary: string;
  coverImage?: string;
  media: PortfolioMedia[];
};

const ig = (handle: string) => `https://www.instagram.com/${handle}/`;

export const projects: PortfolioProject[] = [
  { slug: "msttudio", name: "MSTTUDIO", handle: "msttudio_", profileUrl: ig("msttudio_"), category: "architecture-interiors", summary: "Luxury design studio in Mumbai offering interior design, styling and Vastu consultancy.", media: [] },
  { slug: "kavish-shah-architects", name: "Kavish Shah Architects", handle: "kavish_shah_architects", profileUrl: ig("kavish_shah_architects"), category: "architecture-interiors", summary: "Mumbai practice working across architecture, interior design and consultancy.", media: [] },
  { slug: "de-sifr-studio", name: "De.Sifr Studio", handle: "de.sifrstudio", profileUrl: ig("de.sifrstudio"), category: "architecture-interiors", summary: "Design studio crafting offbeat architectural and design solutions.", media: [] },
  { slug: "modern-ceramics", name: "Modern Ceramics", handle: "modernceramics", profileUrl: ig("modernceramics"), category: "architecture-interiors", summary: "Wall coverings, tiles, mosaics, bath fittings, sanitaryware and wellness products.", media: [] },
  { slug: "roopshree-jewellery", name: "Roopshree Jewellery", handle: "roopshreejewellery", profileUrl: ig("roopshreejewellery"), category: "jewellery", summary: "Navi Mumbai jeweller known as a destination for polki jewellery.", media: [] },
  { slug: "vedas-homes", name: "Vedas Homes", handle: "vedashomes", profileUrl: ig("vedashomes"), category: "lifestyle", summary: "Handcrafted home décor inspired by ancient times and made by modern artisans.", media: [] },
  { slug: "derma-villa", name: "Derma Villa", handle: "dermavilla01", profileUrl: ig("dermavilla01"), category: "healthcare-wellness", summary: "Luxury skin and hair clinic in Chembur covering skin, hair, slimming and IV therapy.", media: [] },
  { slug: "two-brothers-india-farms", name: "Two Brothers India Farms", handle: "twobrothersindiafarms", profileUrl: ig("twobrothersindiafarms"), category: "food-agriculture", summary: "A soil-first, farmer-led food company.", media: [] },
  { slug: "capapie-sports-equipment", name: "Capapie Sports Equipment", handle: "capapiesportsequipmentpvtltd", profileUrl: ig("capapiesportsequipmentpvtltd"), category: "sports-equipment", summary: "Equipment engineered for Olympic rifle and pistol shooting.", media: [] },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const hasMedia = (p: PortfolioProject) => p.media.length > 0;

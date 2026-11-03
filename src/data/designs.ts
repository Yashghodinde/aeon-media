/**
 * Design work migrated from the YOT Productions site (the company's own work).
 * Originals are untouched in "yot old website reference"; these are 1600px-wide WebP exports (see docs/yot-productions-migration).
 * Labels come from the YOT repo (Designing.jsx) or from what is visible in the artwork itself.
 */
export type DesignCategory = "brand" | "social";

export type DesignItem = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  client?: string;
  type: string;
  category: DesignCategory;
  /** Slug of the client this design belongs to (see clients.ts). */
  clientSlug: string;
  alt: string;
};

export const designCategoryLabels: Record<DesignCategory, string> = {
  brand: "Brand & Identity",
  social: "Social Media Designs",
};

const w = 1600;
export const designs: DesignItem[] = [
  { id: "dd1", src: "/images/designs/dd1.webp", width: w, height: 900, title: "Logo & stationery", client: "Jan Bima", type: "Logo & Stationery Design", category: "brand", clientSlug: "jan-bima", alt: "Jan Bima logo and stationery design" },
  { id: "dd2", src: "/images/designs/dd2.webp", width: w, height: 6300, title: "Logistics park route map", client: "LODHA", type: "Map illustration case study", category: "brand", clientSlug: "lodha", alt: "Illustrated route map for the LODHA Industrial and Logistics Park, with process notes" },
  { id: "dd5", src: "/images/designs/dd5.webp", width: w, height: 900, title: "Industrial park map", client: "LODHA", type: "Industrial Park Map", category: "brand", clientSlug: "lodha", alt: "Illustrated map of the LODHA industrial park and surrounding routes" },
  { id: "dd4", src: "/images/designs/dd4.webp", width: w, height: 900, title: "Paint Ezzy Bot", client: "Asian Paints", type: "Paint Ezzy Bot", category: "brand", clientSlug: "asian-paints", alt: "Paint Ezzy Bot design for Asian Paints" },
  { id: "dd6", src: "/images/designs/dd6.webp", width: w, height: 900, title: "Ezzy Bot design", client: "Asian Paints", type: "Ezzy Bot Design", category: "brand", clientSlug: "asian-paints", alt: "Ezzy Bot design for Asian Paints" },
  ...([
    ["d1", "Adani Ports and Logistics — “Enough power??” (#11/30)", "Social creative for Adani Ports and Logistics, part of the 30 day 30 video series, with the @moneypandits handle"],
    ["d2", "DMart — “Up by 15%, why??”", "Social creative about DMart’s share rise, with the @moneypandits handle"],
    ["d3", "DALL·E and DeepSeek — “In danger!!!!”", "Social creative about DALL·E, Janus Pro and DeepSeek, with the @moneypandits handle"],
    ["d4", "Zomato and Blinkit — “Worth the hype??” (#1/30)", "Social creative comparing Zomato and Blinkit, part of the 30 day 30 video series, with the @moneypandits handle"],
    ["d5", "NTPC Green — “Strong again? Really!!”", "Social creative about NTPC Green with wind-turbine imagery and the @moneypandits handle"],
    ["d6", "NTPC — “Enough power??” (#11/30)", "Social creative about NTPC, part of the 30 day 30 video series, with the @moneypandits handle"],
    ["d7", "Wipro vs Tech Mahindra — “Change in IT sector?” (#28/30)", "Social creative comparing Wipro and Tech Mahindra, part of the 30 day 30 video series, with the @moneypandits handle"],
    ["d8", "Adani Group — “Reasons Adani Group fall”", "Social creative about the Adani Group, with the @moneypandits handle"],
  ] as const).map(([id, title, alt]): DesignItem => ({
    id,
    src: `/images/designs/${id}.webp`,
    width: w,
    height: 2845,
    title,
    type: "Social Media Design",
    category: "social",
    clientSlug: "money-pandits",
    alt,
  })),
];

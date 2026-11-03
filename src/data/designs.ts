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
  alt: string;
};

export const designCategoryLabels: Record<DesignCategory, string> = {
  brand: "Brand & Identity",
  social: "Social Media Designs",
};

const w = 1600;
export const designs: DesignItem[] = [
  { id: "dd1", src: "/images/designs/dd1.webp", width: w, height: 900, title: "Logo & stationery", client: "Jan Bima", type: "Logo & Stationery Design", category: "brand", alt: "Jan Bima logo and stationery design" },
  { id: "dd2", src: "/images/designs/dd2.webp", width: w, height: 6300, title: "Logistics park route map", client: "LODHA", type: "Map illustration case study", category: "brand", alt: "Illustrated route map for the LODHA Industrial and Logistics Park, with process notes" },
  { id: "dd5", src: "/images/designs/dd5.webp", width: w, height: 900, title: "Industrial park map", client: "LODHA", type: "Industrial Park Map", category: "brand", alt: "Illustrated map of the LODHA industrial park and surrounding routes" },
  { id: "dd4", src: "/images/designs/dd4.webp", width: w, height: 900, title: "Paint Ezzy Bot", client: "Asian Paints", type: "Paint Ezzy Bot", category: "brand", alt: "Paint Ezzy Bot design for Asian Paints" },
  { id: "dd6", src: "/images/designs/dd6.webp", width: w, height: 900, title: "Ezzy Bot design", client: "Asian Paints", type: "Ezzy Bot Design", category: "brand", alt: "Ezzy Bot design for Asian Paints" },
  ...["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"].map((id, i): DesignItem => ({
    id,
    src: `/images/designs/${id}.webp`,
    width: w,
    height: 2845,
    title: `Social creative ${i + 1}`,
    type: "Social Media Design",
    category: "social",
    alt: `Social media creative ${i + 1} (vertical 9:16 design)`,
  })),
];

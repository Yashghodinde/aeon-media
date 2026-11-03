import { industryLabels } from "./content";
import { projects } from "./projects";

/**
 * Every client shown on the site. Instagram brands come from projects.ts; the rest come from the YOT Productions
 * repo (design client names in Designing.jsx, and the three YouTube channels in the video data).
 */
export type Client = { name: string; detail: string; href: string };

const brands: Client[] = projects.map((p) => ({ name: p.name, detail: industryLabels[p.category], href: `/work/${p.slug}` }));

const yot: Client[] = [
  { name: "LODHA", detail: "Map illustration", href: "/work#design" },
  { name: "Asian Paints", detail: "Paint Ezzy Bot design", href: "/work#design" },
  { name: "Jan Bima", detail: "Logo & stationery", href: "/work#design" },
  { name: "Money Pandits", detail: "Reels, videos & social design", href: "/work#video" },
  { name: "Kropbook", detail: "Reels & videos", href: "/work#video" },
  { name: "Big Jaws", detail: "Music video", href: "/work#video" },
];

export const clients: Client[] = [...brands, ...yot];

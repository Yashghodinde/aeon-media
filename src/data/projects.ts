import type { Industry } from "./content";

/**
 * PLACEHOLDER PROJECTS — NOT REAL CLIENT WORK.
 * Every entry below is a labelled stand-in so the layout can be reviewed.
 * Replace with real projects (set isPlaceholder: false, permissionConfirmed: true)
 * once asset rights and client permission are confirmed. The UI always shows a
 * "Placeholder" marker while isPlaceholder is true, and never shows outcome or
 * testimonial text unless the evidence fields are filled in.
 */
export type PortfolioProject = {
  slug: string;
  title: string;
  clientName?: string;
  industry: Industry;
  summary: string;
  clientObjective: string;
  creativeDirection: string;
  deliverables: string[];
  coverImage?: string;
  gallery: string[];
  aspect: "portrait" | "landscape" | "square";
  isPlaceholder: boolean;
  permissionConfirmed: boolean;
  outcome?: string;
  outcomeEvidence?: string;
};

const pending = "Project details to be supplied.";

export const projects: PortfolioProject[] = [
  { slug: "clothing-project-one", title: "Clothing project", industry: "clothing", summary: "Apparel visuals and content, to be replaced with a real project.", clientObjective: pending, creativeDirection: pending, deliverables: [], gallery: [], aspect: "portrait", isPlaceholder: true, permissionConfirmed: false },
  { slug: "jewellery-project-one", title: "Jewellery project", industry: "jewellery", summary: "Jewellery photography and video, to be replaced with a real project.", clientObjective: pending, creativeDirection: pending, deliverables: [], gallery: [], aspect: "landscape", isPlaceholder: true, permissionConfirmed: false },
  { slug: "interiors-project-one", title: "Interiors project", industry: "interiors", summary: "Interior design content, to be replaced with a real project.", clientObjective: pending, creativeDirection: pending, deliverables: [], gallery: [], aspect: "portrait", isPlaceholder: true, permissionConfirmed: false },
  { slug: "clothing-project-two", title: "Clothing project", industry: "clothing", summary: "A second apparel slot, to be replaced with a real project.", clientObjective: pending, creativeDirection: pending, deliverables: [], gallery: [], aspect: "square", isPlaceholder: true, permissionConfirmed: false },
  { slug: "jewellery-project-two", title: "Jewellery project", industry: "jewellery", summary: "A second jewellery slot, to be replaced with a real project.", clientObjective: pending, creativeDirection: pending, deliverables: [], gallery: [], aspect: "portrait", isPlaceholder: true, permissionConfirmed: false },
  { slug: "interiors-project-two", title: "Interiors project", industry: "interiors", summary: "A second interiors slot, to be replaced with a real project.", clientObjective: pending, creativeDirection: pending, deliverables: [], gallery: [], aspect: "landscape", isPlaceholder: true, permissionConfirmed: false },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

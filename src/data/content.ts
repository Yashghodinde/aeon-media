export type Industry = "architecture-interiors" | "jewellery" | "lifestyle" | "food-agriculture" | "healthcare-wellness" | "sports-equipment";

export const industryLabels: Record<Industry, string> = {
  "architecture-interiors": "Architecture & Interiors",
  jewellery: "Jewellery",
  lifestyle: "Fashion & Lifestyle",
  "food-agriculture": "Food & Agriculture",
  "healthcare-wellness": "Healthcare & Wellness",
  "sports-equipment": "Sports & Equipment",
};

export const valuePillars = [
  {
    title: "A stronger brand presence",
    body: "A coherent, recognisable look across everything you publish, so people remember your brand and not just a single post.",
  },
  {
    title: "Products shown with care",
    body: "Considered visuals that help your products make the impression they deserve.",
  },
  {
    title: "Know what comes next",
    body: "A clear content plan, so you always understand what is being published, when, and why.",
  },
  {
    title: "Less to coordinate",
    body: "Planning, production and publishing support handled together, so you can focus on your business.",
  },
] as const;

export const process = [
  { title: "Understand", body: "We start with your brand, audience, products and the vision you already have." },
  { title: "Explore", body: "We study your references and shape creative directions that fit your identity." },
  { title: "Plan", body: "Approved ideas become a content calendar with clear production needs." },
  { title: "Create", body: "We coordinate the agreed shoots and content production with the plan in view." },
  { title: "Refine", body: "Editing and post-production prepare each piece for the platforms it is meant for." },
  { title: "Review", body: "We look at the work against your objective and let real feedback guide what follows." },
] as const;

export const gains = [
  "A more consistent way of communicating your brand",
  "Products presented with greater care",
  "Fewer creative tasks for you to manage personally",
  "A planned, organised content pipeline",
  "Clearer creative direction",
  "More opportunities to reach relevant audiences",
] as const;

export const services = [
  {
    id: "presence",
    benefit: "A more consistent brand presence",
    why: "A brand that shows up with one clear voice is easier to recognise and easier to trust.",
    challenge: "Posting feels irregular and the look changes from one post to the next.",
    outcome: "A digital presence that is managed with care and feels like one brand.",
    contribution: "Social media management, creative direction and publishing support.",
    capabilities: ["Social media management", "Visual consistency", "Publishing support"],
  },
  {
    id: "direction",
    benefit: "A clear direction for what comes next",
    why: "Knowing what to publish, and why, removes guesswork and last-minute decisions.",
    challenge: "You have ideas and references but no plan that connects them.",
    outcome: "A content calendar and creative direction you understand and have shaped.",
    contribution: "Reference research, concept development and content planning.",
    capabilities: ["Content strategy & planning", "Reference research", "Content calendars"],
  },
  {
    id: "products",
    benefit: "Products presented with greater care",
    why: "How a product looks shapes how its quality is understood.",
    challenge: "Product visuals do not yet reflect the quality of what you make.",
    outcome: "Photography and video made with a plan, not improvised on the day.",
    contribution: "Shoot preparation, creative direction, editing and post-production.",
    capabilities: ["Photoshoots & video shoots", "Video editing", "Post-production"],
  },
  {
    id: "reach",
    benefit: "More opportunities to reach relevant audiences",
    why: "Good content can travel further when it is promoted thoughtfully.",
    challenge: "Strong content is published but reaches few new people.",
    outcome: "A considered way to extend selected content to relevant viewers.",
    contribution: "Meta and Instagram advertising support, where it suits the brand.",
    capabilities: ["Meta advertising", "Instagram promotion"],
  },
] as const;

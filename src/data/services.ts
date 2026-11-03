/**
 * Service detail content. Source: AEON Media project documentation (sections 5.1–5.5) and, for design,
 * the YOT Productions Designing page (verified work exists). Scope, pricing, turnaround, revisions and
 * reporting are deliberately NOT stated: they are agreed with each client. No result is promised.
 */
export type Service = {
  slug: string;
  short: string;
  benefit: string;
  intro: string;
  goodFit: string;
  involved: string[];
  steps: { title: string; body: string }[];
  agreed: string[];
  /** Verified work to show on the page. */
  work?: { videos?: "shorts" | "long" | "both"; designIds?: string[]; label: string; href: string };
  related: string[];
};

export const serviceList: Service[] = [
  {
    slug: "social-media-management",
    short: "Social media management",
    benefit: "A more consistent, thoughtfully managed digital presence.",
    intro: "A brand that shows up with one clear voice is easier to recognise and easier to trust. We look after the day-to-day content side so you do not have to coordinate every detail yourself.",
    goodFit: "Posting feels irregular and the look changes from one post to the next.",
    involved: [
      "Understanding your brand, goals, audience and preferences",
      "Discussing your references and creative direction with you",
      "Researching suitable content references on Instagram and Pinterest",
      "Preparing a content calendar",
      "Planning content requirements and shoot needs",
      "Coordinating content preparation and publishing support",
      "Advising on posting cadence and consistency",
    ],
    steps: [
      { title: "Understand", body: "We start with your brand, your audience and what you want to be known for." },
      { title: "Plan", body: "References and ideas become a content calendar you have seen and approved." },
      { title: "Prepare", body: "We work out what each piece needs, including any shoots or edits." },
      { title: "Publish", body: "We coordinate preparation and publishing support so the calendar is followed." },
    ],
    agreed: ["Posting frequency", "Community-management scope", "Reporting"],
    work: { designIds: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"], label: "Social creatives", href: "/work#design" },
    related: ["creative-direction", "design-brand-identity", "video-editing"],
  },
  {
    slug: "creative-direction",
    short: "Creative direction & planning",
    benefit: "A clearer idea of what to publish, and why.",
    intro: "Knowing what to publish removes guesswork and last-minute decisions. We begin with your vision and your examples, then shape directions that stay true to your brand.",
    goodFit: "You have ideas and references, but no plan that connects them.",
    involved: [
      "Studying the references and ideas you share",
      "Considering your niche and audience",
      "Developing content directions for the calendar and production plan",
      "Adapting a concept you like to your own brand, rather than copying another creator",
    ],
    steps: [
      { title: "Share", body: "You tell us your vision and show us what inspires you." },
      { title: "Study", body: "We look closely at the references, your niche and your audience." },
      { title: "Shape", body: "We develop directions that fit your identity and explain our thinking." },
      { title: "Agree", body: "The directions you approve feed the content calendar and production plan." },
    ],
    agreed: ["The number of directions explored", "How references are adapted and credited"],
    related: ["social-media-management", "shoots-production", "design-brand-identity"],
  },
  {
    slug: "shoots-production",
    short: "Shoots & production",
    benefit: "Product and brand visuals made with a plan, not improvised on the day.",
    intro: "How a product looks shapes how its quality is understood. The content calendar and agreed references guide each shoot so the day is focused.",
    goodFit: "Product visuals do not yet reflect the quality of what you make.",
    involved: [
      "Shoot preparation guided by the content calendar and references",
      "Creative direction for the agreed content",
      "Coordination of the agreed shoots",
      "Hand-off to editing and post-production",
    ],
    steps: [
      { title: "Brief", body: "We confirm what needs to be captured and why." },
      { title: "Prepare", body: "References, calendar and requirements become a clear shoot plan." },
      { title: "Shoot", body: "We coordinate the agreed shoot with the plan in view." },
      { title: "Hand over", body: "Footage and images move into editing and post-production." },
    ],
    agreed: ["Location", "Crew and equipment", "Styling", "Number of deliverables", "Revisions"],
    related: ["video-editing", "creative-direction", "social-media-management"],
  },
  {
    slug: "video-editing",
    short: "Video editing & post-production",
    benefit: "Finished content that presents your brand professionally and says what you mean.",
    intro: "Editing and post-production prepare each piece for the platform it is meant for, whether that is a vertical Reel or a longer horizontal video.",
    goodFit: "You have footage or ideas, but not the time to turn them into polished content.",
    involved: [
      "Short-form editing for Reels and Shorts (9:16)",
      "Longer videos (16:9)",
      "Music-video editing",
      "Post-production to prepare each piece for its platform",
    ],
    steps: [
      { title: "Receive", body: "We review your footage, references and the message to communicate." },
      { title: "Edit", body: "We cut the piece for its platform and format." },
      { title: "Refine", body: "We polish and prepare it for publishing." },
      { title: "Review", body: "We look at the result against your objective." },
    ],
    agreed: ["Turnaround time", "Revision rounds", "Formats and quantity"],
    work: { videos: "both", label: "Reels and videos", href: "/work#video" },
    related: ["shoots-production", "social-media-management", "design-brand-identity"],
  },
  {
    slug: "design-brand-identity",
    short: "Design & brand identity",
    benefit: "Design with a clear point of view, from a logo to a daily social post.",
    intro: "Consistent visual work helps people recognise a brand and remember it. Our design work spans identity, print, illustrated maps and social creatives.",
    goodFit: "Your visuals vary from piece to piece, or you need a clear identity to build on.",
    involved: [
      "Logo design",
      "Brand identity",
      "Social media graphics",
      "Thumbnails",
      "Print and stationery",
      "Maps and technical visual documents",
    ],
    steps: [
      { title: "Brief", body: "We learn about the brand and what the design needs to do." },
      { title: "Design", body: "We develop the work with your direction in view." },
      { title: "Refine", body: "We adjust with your feedback." },
      { title: "Deliver", body: "You receive final files ready for their use." },
    ],
    agreed: ["Scope and number of pieces", "Revisions", "File formats"],
    work: { designIds: ["dd1", "dd2", "dd5", "dd4", "dd6", "d1", "d3", "d6"], label: "Design work", href: "/work#design" },
    related: ["social-media-management", "creative-direction", "video-editing"],
  },
  {
    slug: "meta-advertising",
    short: "Meta & Instagram advertising",
    benefit: "A considered way to extend suitable content to relevant viewers.",
    intro: "Good content can travel further when it is promoted thoughtfully. We help you choose what is worth promoting, and review it against your own objective.",
    goodFit: "Strong content is published but reaches few new people.",
    involved: [
      "Building a usable content library",
      "Reviewing content and selecting pieces suited to promotion",
      "Boosting or advertising selected content through Meta tools, where it suits the brand",
      "Reviewing performance against your agreed objective",
    ],
    steps: [
      { title: "Build", body: "We make sure there is a usable library of content to draw from." },
      { title: "Select", body: "We choose the pieces that suit promotion. Not every post needs boosting." },
      { title: "Promote", body: "Selected content is promoted through Meta advertising tools where appropriate." },
      { title: "Review", body: "We look at results against the objective you set." },
    ],
    agreed: ["Ad spend", "Management fees", "Account ownership", "Tracking set-up", "Reporting"],
    related: ["video-editing", "social-media-management", "creative-direction", "influencer-marketing"],
  },
  {
    slug: "influencer-marketing",
    short: "Influencer & creator marketing",
    benefit: "Your brand introduced through voices people already trust.",
    intro: "Creators have audiences who listen to them. We help connect your brand with creators whose audience fits yours, and coordinate the collaboration.",
    goodFit: "You want your brand seen by relevant audiences through creators, but not the time to find and manage them.",
    involved: [
      "Understanding your brand and the audience you want to reach",
      "Matching your brand with suitable creators",
      "Coordinating the collaboration between you and the creator",
      "Reviewing the collaboration against your objective",
    ],
    steps: [
      { title: "Brief", body: "We learn about your brand, audience and objective." },
      { title: "Match", body: "We look for creators whose audience and style fit your brand." },
      { title: "Coordinate", body: "We help organise the collaboration between you and the creator." },
      { title: "Review", body: "We look at how it went against what you set out to do." },
    ],
    agreed: ["Creator fees", "Deliverables", "Usage rights", "Timelines"],
    related: ["meta-advertising", "social-media-management", "video-editing"],
  },
];

export const getService = (slug: string) => serviceList.find((s) => s.slug === slug);

import { industryLabels, type Industry } from "./content";

/**
 * Central client database. Pages and filters are generated from this file only.
 *
 * attributionStatus on a post:
 *  - "verified-aeon-work": confirmed as our work (source site, project files or owner statement)
 *  - "client-reference":   the client's own public content, shown for context, NOT claimed as our work
 *  - "unverified":         ownership unclear; never displayed
 *
 * Instagram brands (kind "instagram-brand") currently have only "client-reference" posts: the YOT source
 * contains no link to them. To promote a post, set attributionStatus to "verified-aeon-work".
 * Video/design work for YOT clients is attached via `videoChannel` (video-portfolio.json) and `designIds` (designs.ts).
 * Research sources and dates: docs/client-portfolio/.
 */
export type Attribution = "verified-aeon-work" | "client-reference" | "unverified";

export type ClientPost = {
  id: string;
  postUrl: string;
  mediaType: "reel" | "video" | "image" | "carousel";
  title?: string;
  description?: string;
  publishedAt?: string;
  aspectRatio?: "9:16" | "4:5" | "1:1" | "16:9";
  attributionStatus: Attribution;
  embedAvailable?: boolean;
};

export type ClientProfile = {
  slug: string;
  name: string;
  kind: "instagram-brand" | "yot-client";
  industries: Industry[];
  description: string;
  /** What the brand itself offers (from its public bio/site) — not what we delivered. */
  offerings?: string[];
  /** What we delivered, only where verified. */
  servicesProvided?: string[];
  instagram?: { handle: string; url: string };
  websiteUrl?: string;
  videoChannel?: string;
  designIds?: string[];
  posts: ClientPost[];
  sources: string[];
};

const ig = (h: string) => ({ handle: h, url: `https://www.instagram.com/${h}/` });

/** Parses "type/code|Month DD, YYYY;…" (public profile grid, collected 2026-11-04) into posts. */
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const CAPTIONS: Record<string, string> = {
 "DegwA5Aov72": "Your dream home starts with a conversation, and sometimes a well-timed scroll.",
 "DeQgIxToehk": "When your passion becomes your profession, every day feels a little lighter.",
 "Dd82w7tiFaH": "Good design isn’t just what you see. It’s what you feel every day.",
 "DeCC7-JoJBf": "A render shouldn’t just show a space. It should make you experience it.",
 "DcyYlLIt9v8": "An interior designer’s camera roll, a little too obsessed with details.",
 "DcoDW1MhPtS": "Annaśaktiḥ — a 52” x 48” wooden frame.",
 "DfHFO6eDZ3o": "By night, the facade comes alive with warm light against cool grey stone and timber accents.",
 "DeHNsGIvjQt": "A well-designed staircase sets the tone for the entire home.",
 "DeRuik3DDNB": "Designed to feel open, warm and timeless, with subtle details that bring character to the everyday.",
 "DfO3QchO7JU": "A beautiful view deserves a beautiful frame.",
 "DfJq0n_uwxO": "Pick your favourite speckled mosaic and give your space a fresh look.",
 "DfHDdVpF0t_": "Where every wall tells a story. Soft neutrals, subtle texture and a touch of luxury.",
 "DfPiNt9O0vu": "The kind of jewellery that turns a simple look into something unforgettable.",
 "DfH1m87OjMZ": "Where ideas become jewellery — a little imagination, a steady hand, and a lot of love for the details.",
 "DfE2Hn-DroC": "Say it with polki. Say it with Roopshree Jewellery.",
 "De85yZwyGet": "The Diwali Edit, all in one place.",
 "De1YXuVSzwl": "Ganpati ji deserve the best place in your home — Siddhi Aura Ganesha, hand-painted.",
 "Dedw_bLiPI6": "Console table looking bare? A two-step styling formula.",
 "DfCbN2bo0Uq": "Fine lines, acne, skin and hair concerns finding their match.",
 "De824BBxtNO": "Reset your skin before the festive season.",
 "DewU2o8ILyF": "Zoom in on your skin goals — book your skin appointment.",
 "DeyhIcvKXqH": "This year, let’s bring back #PehleWaliDiwali — five families on how Diwali used to be.",
 "De3lGmgKqbT": "Think of the last time a gift made you pause.",
 "DewCA75KOlu": "Do you miss Diwali as it used to be? We spoke to five families.",
 "DfPnuMcI66q": "Day 1 at the Doha Shooting Championship.",
 "DfL_AKzDBUs": "A champion, a legacy of determination — this month’s Capapie Sports calendar.",
 "DfG1b04EcPz": "25 years of trust, a legacy of shooting excellence."
};
const RAW: Record<string, string> = {
 "msttudio_": "reel/DegwA5Aov72|October 15, 2026;reel/DeQgIxToehk|October 08, 2026;reel/DeHNDJEB9uT|October 05, 2026;p/Dd82w7tiFaH|October 01, 2026;reel/Dd37z0bhCgT|September 29, 2026;reel/Ddq1dYNNwsc|September 24, 2026;reel/DdjMPv0Jk2P|September 21, 2026;reel/DdZDX4cNbKU|September 17, 2026;reel/DdJw1dStb1H|September 11, 2026;reel/DdER028o1qr|September 09, 2026;p/Dc_BruwCAha|September 07, 2026;reel/Dc3gkwtokIf|September 04, 2026",
 "kavish_shah_architects": "reel/DeCC7-JoJBf|October 03, 2026;reel/DcyYlLIt9v8|September 02, 2026;p/DcoDW1MhPtS|August 29, 2026;p/Dck2jnsIZoc|August 28, 2026;p/DcjAadHiG3r|August 27, 2026;p/DcfxTTRoUPp|August 26, 2026;p/DcdS9KUIaHY|August 25, 2026;p/DcbEUS-CGfE|August 24, 2026;p/DbGHm-lhZ5y|July 22, 2026;p/Da5THjgCONc|July 17, 2026;reel/DaxfqrzqqgR|July 14, 2026;p/DZced3rCOlk|June 11, 2026",
 "de.sifrstudio": "p/DfR8BrQozAY|November 03, 2026;p/DfHFO6eDZ3o|October 30, 2026;p/DeRuik3DDNB|October 09, 2026;p/DeMWmrgsc0Z|October 07, 2026;reel/DeHNsGIvjQt|October 05, 2026;reel/Dd5wC1kM6dv|September 30, 2026;p/Dd0ovbEP5uD|September 28, 2026;p/Ddq2GZoDPp0|September 24, 2026;p/DdlXHO2M7F-|September 22, 2026;p/Ddbb00NMdZI|September 18, 2026;p/DYjwewLCTb0|May 20, 2026",
 "modernceramics": "reel/DfO3QchO7JU|November 02, 2026;reel/DfJq0n_uwxO|October 31, 2026;p/DfHDdVpF0t_|October 30, 2026;reel/DfEbP2SBEZ4|October 29, 2026;p/DfB9LepFwuc|October 28, 2026;p/De8_7LIFy7C|October 26, 2026;reel/De1S4U0hEqz|October 23, 2026;p/DewKYyaFydy|October 21, 2026;reel/DeqyPLbhqHU|October 19, 2026;p/Demcwgil2Zw|October 17, 2026;reel/DegyuxTgfiU|October 15, 2026;p/Debdv--FwkC|October 13, 2026",
 "roopshreejewellery": "reel/DfPiNt9O0vu|November 02, 2026;reel/DfH1m87OjMZ|October 30, 2026;p/DfE2Hn-DroC|October 29, 2026;reel/DfBsX20Od29|October 27, 2026;reel/De9dZfXzwtv|October 26, 2026;reel/DezKk3rOQFn|October 22, 2026;p/DertoapuICz|October 19, 2026;reel/Den9kTaNohn|October 17, 2026;reel/DeenvaFNysW|October 14, 2026;reel/DecE6TntsGa|October 13, 2026;p/DeWHuQ7O3x2|October 11, 2026;reel/DeR1hBzNbLl|October 09, 2026",
 "vedashomes": "reel/De85yZwyGet|October 26, 2026;reel/De1YXuVSzwl|October 23, 2026;reel/Dedw_bLiPI6|October 13, 2026;reel/DebJBDIAdpb|October 12, 2026;reel/DeYfJMnljGO|October 11, 2026;reel/DeV6XD5HAeL|October 10, 2026;reel/DeTVlZblvPY|October 09, 2026;reel/DeQ3rAmDFv4|October 08, 2026;reel/DeORoqPD7c1|October 07, 2026;reel/DeJJSYKkcCD|October 05, 2026;reel/DeGkeewElQH|October 04, 2026",
 "dermavilla01": "reel/DfCbN2bo0Uq|October 28, 2026;reel/De824BBxtNO|October 26, 2026;p/DewU2o8ILyF|October 21, 2026;reel/DerBuzIIb9t|October 19, 2026;p/DemDH36o-eK|October 17, 2026;reel/Deg5yACINke|October 16, 2026;reel/Ded_yTiR6Kj|October 14, 2026;reel/DeXHEWjICjF|October 11, 2026;p/DeRRTVpIVXB|October 09, 2026;reel/DeOYxK7xQAA|October 08, 2026",
 "twobrothersindiafarms": "reel/DfPKLIUKKKt|November 02, 2026;reel/DfMWNZpKTyD|November 01, 2026;p/DfKC0zyClBG|October 31, 2026;reel/DfHOkWXKaYn|October 30, 2026;reel/DfJSSigKneg|October 30, 2026;reel/DfG65Diq5Xf|October 29, 2026;reel/DfFHoFhq95V|October 29, 2026;reel/De3lGmgKqbT|October 24, 2026;reel/DeyhIcvKXqH|October 22, 2026;reel/DewCA75KOlu|October 21, 2026",
 "capapiesportsequipmentpvtltd": "p/DfPnuMcI66q|November 02, 2026;p/DfL_AKzDBUs|October 31, 2026;reel/DfG1b04EcPz|October 29, 2026;reel/DfEQprOj7tC|October 28, 2026;p/De1jrv3DczI|October 23, 2026;reel/De1jQYGlLui|October 23, 2026;reel/DevqSX-EbBa|October 20, 2026;p/DetFeMikTTQ|October 19, 2026;reel/DerJ3l3kSzT|October 19, 2026;p/DerJcVRDXsO|October 19, 2026;p/Deqh7NuDRER|October 18, 2026"
};
function igPosts(handle: string, raw: string): ClientPost[] {
  return raw.split(";").map((row) => {
    const [path, date] = row.split("|");
    const [mo, d, y] = date.replace(",", "").split(" ");
    const iso = `${y}-${String(MONTHS.indexOf(mo) + 1).padStart(2, "0")}-${d.padStart(2, "0")}`;
    const code = path.split("/")[1];
    const reel = path.startsWith("reel/");
    return {
      id: `${handle}-${code}`,
      postUrl: `https://www.instagram.com/${path}/`,
      mediaType: reel ? "reel" : "image",
      title: reel ? "Reel" : "Post",
      description: CAPTIONS[code],
      publishedAt: iso,
      aspectRatio: reel ? "9:16" : "4:5",
      attributionStatus: "client-reference",
      embedAvailable: true,
    };
  });
}

export const clients: ClientProfile[] = [
  {
    slug: "msttudio", name: "MSTTUDIO", kind: "instagram-brand", industries: ["architecture-interiors"],
    description: "M Studio is a Mumbai interior design studio creating modern interiors for homes, offices, salons and restaurants. Its profile also lists styling and Vastu consultancy.",
    offerings: ["Interior design", "Styling", "Vastu consultancy"],
    instagram: ig("msttudio_"), websiteUrl: "https://msttudio.com",
    posts: igPosts("msttudio_", RAW["msttudio_"]),
    sources: ["https://www.instagram.com/msttudio_/", "https://msttudio.com"],
  },
  {
    slug: "kavish-shah-architects", name: "Kavish Shah Architects", kind: "instagram-brand", industries: ["architecture-interiors"],
    description: "A Mumbai practice working across architecture, interior design and consultancy.",
    offerings: ["Architecture", "Interior design", "Consultancy"],
    instagram: ig("kavish_shah_architects"),
    posts: igPosts("kavish_shah_architects", RAW["kavish_shah_architects"]),
    sources: ["https://www.instagram.com/kavish_shah_architects/"],
  },
  {
    slug: "de-sifr-studio", name: "De.Sifr Studio", kind: "instagram-brand", industries: ["architecture-interiors"],
    description: "Desifr Studio is a multidisciplinary architecture and interior design firm based in Mumbai and Nepal, creating thoughtful, functional spaces.",
    offerings: ["Architecture", "Interior design"],
    instagram: ig("de.sifrstudio"), websiteUrl: "https://www.desifrstudio.com",
    posts: igPosts("de.sifrstudio", RAW["de.sifrstudio"]),
    sources: ["https://www.instagram.com/de.sifrstudio/", "https://www.desifrstudio.com"],
  },
  {
    slug: "modern-ceramics", name: "Modern Ceramics", kind: "instagram-brand", industries: ["architecture-interiors", "home-living"],
    description: "Modern Ceramics presents wall coverings, tiles, mosaics, bath fittings, sanitaryware and wellness and spa products from around the world.",
    offerings: ["Wall coverings", "Tiles & mosaics", "Bath fittings & sanitaryware", "Wellness & spa"],
    instagram: ig("modernceramics"),
    posts: igPosts("modernceramics", RAW["modernceramics"]),
    sources: ["https://www.instagram.com/modernceramics/"],
  },
  {
    slug: "roopshree-jewellery", name: "Roopshree Jewellery", kind: "instagram-brand", industries: ["jewellery"],
    description: "A Navi Mumbai jeweller known as “the polki destination”, with festive and everyday polki collections.",
    offerings: ["Polki jewellery", "Festive collections", "Everyday wear"],
    instagram: ig("roopshreejewellery"),
    posts: igPosts("roopshreejewellery", RAW["roopshreejewellery"]),
    sources: ["https://www.instagram.com/roopshreejewellery/"],
  },
  {
    slug: "vedas-homes", name: "Vedas Homes", kind: "instagram-brand", industries: ["home-living", "lifestyle"],
    description: "Vedas Homes (a unit of Vedas Exports Pvt Ltd) offers home décor, spiritual essentials and functional art, handcrafted by artisans.",
    offerings: ["Home décor", "Spiritual essentials", "Functional art"],
    instagram: ig("vedashomes"), websiteUrl: "https://vedashomes.com",
    posts: igPosts("vedashomes", RAW["vedashomes"]),
    sources: ["https://www.instagram.com/vedashomes/", "https://vedashomes.com"],
  },
  {
    slug: "derma-villa", name: "Derma Villa", kind: "instagram-brand", industries: ["healthcare-wellness"],
    description: "Dermavilla is a luxury skin and hair clinic in Chembur, Mumbai, covering skin, hair, slimming and IV therapy.",
    offerings: ["Skin", "Hair", "Slimming", "IV therapy"],
    instagram: ig("dermavilla01"), websiteUrl: "https://www.dermavilla.com",
    posts: igPosts("dermavilla01", RAW["dermavilla01"]),
    sources: ["https://www.instagram.com/dermavilla01/", "https://www.dermavilla.com (returned HTTP 503 when checked)"],
  },
  {
    slug: "two-brothers-india-farms", name: "Two Brothers India Farms", kind: "instagram-brand", industries: ["food-agriculture"],
    description: "A soil-first, farmer-led food company selling traditionally grown, source-traceable food such as atta, oil, ghee and jaggery.",
    offerings: ["Traditionally grown staples", "Oils, atta, jaggery and ghee", "Farm visits and events"],
    instagram: ig("twobrothersindiafarms"), websiteUrl: "https://twobrothersindiashop.com",
    posts: igPosts("twobrothersindiafarms", RAW["twobrothersindiafarms"]),
    sources: ["https://www.instagram.com/twobrothersindiafarms/", "https://twobrothersindiashop.com"],
  },
  {
    slug: "capapie-sports-equipment", name: "Capapie Sports Equipment", kind: "instagram-brand", industries: ["sports-equipment"],
    description: "Capapie Sports Equipment makes equipment engineered for Olympic rifle and pistol shooting.",
    offerings: ["Rifle and pistol shooting equipment"],
    instagram: ig("capapiesportsequipmentpvtltd"), websiteUrl: "https://www.capapiesports.com",
    posts: igPosts("capapiesportsequipmentpvtltd", RAW["capapiesportsequipmentpvtltd"]),
    sources: ["https://www.instagram.com/capapiesportsequipmentpvtltd/", "https://www.capapiesports.com"],
  },

  // — Clients from the YOT Productions source (the company's own work) —
  {
    slug: "lodha", name: "LODHA", kind: "yot-client", industries: ["other"],
    description: "An illustrated route map created for the LODHA Industrial and Logistics Park, helping clients see the routes, airports, railway stations and residential areas around the park.",
    servicesProvided: ["Map illustration"], designIds: ["dd2", "dd5"], posts: [],
    sources: ["YOT repo: Designing.jsx, public/assets/design/dd2.png, dd5.png"],
  },
  {
    slug: "asian-paints", name: "Asian Paints", kind: "yot-client", industries: ["home-living"],
    description: "Design work for Paint Ezzy Bot, an Asian Paints project.",
    servicesProvided: ["Bot interface design"], designIds: ["dd4", "dd6"], posts: [],
    sources: ["YOT repo: Designing.jsx (listed as “Asian Paint”), public/assets/design/dd4.png, dd6.png"],
  },
  {
    slug: "jan-bima", name: "Jan Bima", kind: "yot-client", industries: ["other"],
    description: "Logo and stationery design for Jan Bima.",
    servicesProvided: ["Logo design", "Stationery design"], designIds: ["dd1"], posts: [],
    sources: ["YOT repo: Designing.jsx, public/assets/design/dd1.png"],
  },
  {
    slug: "money-pandits", name: "Money Pandits", kind: "yot-client", industries: ["other"],
    description: "A finance and business explainer channel. Reels, longer videos and social creatives, including the “30 day 30 video” series.",
    servicesProvided: ["Short-form video editing", "Long-form video", "Social media design"],
    videoChannel: "money pandits", designIds: ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"], posts: [],
    sources: ["YOT repo: youtube-portfolio-links.json (channel @MoneyPandits), public/assets/design/d1–d8.png (carry the @moneypandits handle)"],
  },
  {
    slug: "kropbook", name: "Kropbook", kind: "yot-client", industries: ["food-agriculture"],
    description: "Farming and soil-science videos and Shorts for Kropbook.",
    servicesProvided: ["Short-form video", "Long-form video"], videoChannel: "Kropbook", posts: [],
    sources: ["YOT repo: youtube-portfolio-links.json (channel @Kropbook)"],
  },
  {
    slug: "big-jaws", name: "Big Jaws", kind: "yot-client", industries: ["other"],
    description: "Music videos for the artist Big Jaws.",
    servicesProvided: ["Music video"], videoChannel: "Big Jaws", posts: [],
    sources: ["YOT repo: youtube-portfolio-links.json (channel @big_jaws)"],
  },
];

export const getClient = (slug: string) => clients.find((c) => c.slug === slug);
export const clientHref = (slug: string) => `/work/clients/${slug}`;
export const industryNames = (c: ClientProfile) => c.industries.map((i) => industryLabels[i]);
export const verifiedPosts = (c: ClientProfile) => c.posts.filter((p) => p.attributionStatus === "verified-aeon-work");
export const referencePosts = (c: ClientProfile) => c.posts.filter((p) => p.attributionStatus === "client-reference");
export const usedIndustries = () => (Object.keys(industryLabels) as Industry[]).filter((k) => clients.some((c) => c.industries.includes(k)));

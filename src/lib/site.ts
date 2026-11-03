/**
 * Site-wide configuration.
 * PENDING: contact details and social links have not been supplied.
 * Leave `email`, `phone` and `socials` empty until the user confirms them —
 * the UI hides anything that is not set.
 */
const siteOrigin = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
const siteUrl = siteOrigin ? `${siteOrigin}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}` : "";

export const site = {
  name: "AEON Media",
  wordmark: "AEON MEDIA",
  tagline: "Your vision, brought to life with purpose.",
  description:
    "AEON Media is a creative company that helps brands build a more considered, consistent and compelling digital presence — shaped around your vision.",
  /** Full public URL including any base path, e.g. https://owner.github.io/aeon-media (no trailing slash). */
  url: siteUrl,
  email: "" as string,
  phone: "" as string,
  socials: [] as { label: string; href: string }[],
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

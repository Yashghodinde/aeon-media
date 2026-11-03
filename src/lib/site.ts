/**
 * Site-wide configuration.
 * PENDING: contact details and social links have not been supplied.
 * Leave `email`, `phone` and `socials` empty until the user confirms them —
 * the UI hides anything that is not set.
 */
// Always https for public hosts (GitHub Pages reports http until HTTPS is enforced).
const siteOrigin = (process.env.NEXT_PUBLIC_SITE_URL ?? "")
  .replace(/\/$/, "")
  .replace(/^http:\/\/(?!localhost|127\.)/, "https://");
const siteUrl = siteOrigin ? `${siteOrigin}${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}` : "";

/** Direct WhatsApp contacts. `wa` is the international number, digits only. */
export const contacts = [
  { name: "Kimaya", display: "+91 91526 59725", tel: "+919152659725", wa: "919152659725" },
  { name: "Yashodhan", display: "+91 97572 71093", tel: "+919757271093", wa: "919757271093" },
] as const;

export const whatsappLink = (wa: string, text = "Hi AEON Media, I'd like to talk about my brand.") =>
  `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;

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

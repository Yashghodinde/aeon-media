import Link from "next/link";
import { AeonWordmark } from "@/components/ui/AeonWordmark";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-charcoal pb-28 pt-14 text-ivory md:py-20">
      <div className="mx-auto grid w-full max-w-[var(--aeon-content-max)] grid-cols-2 gap-x-6 gap-y-10 px-[var(--aeon-gutter)] md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
        <div className="col-span-2 md:col-span-1">
          <AeonWordmark onDark />
          <p className="mt-6 max-w-sm text-[0.9375rem] text-ivory/70 md:mt-8 md:text-base">
            A creative partner for brands. We understand your vision, take ownership of the creative work, and work with you to bring it to life.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-4 text-taupe md:mb-6">Explore</p>
          <ul className="space-y-1">
            {[{ label: "Home", href: "/" }, ...nav].map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="inline-block py-2 text-ivory/85 transition-colors hover:text-ivory">{i.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-4 text-taupe md:mb-6">Get in touch</p>
          <ul className="space-y-1 text-ivory/85 [&_a]:inline-block [&_a]:py-2">
            {site.email && <li><a href={`mailto:${site.email}`}>{site.email}</a></li>}
            {site.phone && <li><a href={`tel:${site.phone}`}>{site.phone}</a></li>}
            {site.socials.map((s) => (
              <li key={s.href}><a href={s.href} rel="noopener noreferrer" target="_blank">{s.label}</a></li>
            ))}
            <li><Link href="/contact" className="underline decoration-taupe underline-offset-4">Tell us about your brand</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[var(--aeon-content-max)] border-t border-ivory/15 px-[var(--aeon-gutter)] pt-6 md:mt-16 md:pt-8 text-sm text-ivory/55">
        © 2026 AEON Media. All rights reserved.
      </div>
    </footer>
  );
}

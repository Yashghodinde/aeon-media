import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contacts, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Talk to AEON Media directly on WhatsApp or by phone.", alternates: { canonical: "/contact/" } };

export default function ContactPage() {
  return (
    <Section labelledBy="contact-h1">
      <Container>
        <SectionHeading as="h1" id="contact-h1" eyebrow="Contact" title="Talk to us directly." intro="Message or call the team. We will take the time to understand your brand, your goals and the support you are looking for." />
        <ul className="mt-10 grid gap-4 md:mt-16 md:max-w-3xl md:grid-cols-2">
          {contacts.map((c) => (
            <li key={c.wa} className="rounded-2xl border border-taupe/40 p-5 md:p-6">
              <p className="display-md text-[1.5rem]">{c.name}</p>
              <p className="mt-1 text-muted">{c.display}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={whatsappLink(c.wa)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-charcoal px-5 text-sm font-semibold text-ivory">
                  <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
                </a>
                <a href={`tel:${c.tel}`} aria-label={`Call ${c.name}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-taupe px-5 text-sm font-semibold">
                  <Phone aria-hidden="true" className="size-4" /> Call
                </a>
              </div>
            </li>
          ))}
        </ul>
        {site.email && <p className="mt-8"><a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a></p>}
      </Container>
    </Section>
  );
}

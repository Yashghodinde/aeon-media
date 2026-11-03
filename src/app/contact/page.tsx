import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { site, contacts, whatsappLink } from "@/lib/site";
import { MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Contact", description: "Tell AEON Media about your brand and the support you are looking for." };

export default function ContactPage() {
  return (
    <Section labelledBy="contact-h1">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div>
          <SectionHeading as="h1" id="contact-h1" eyebrow="Contact" title="Tell us what you're building." intro="We will take the time to understand your brand, your goals and the support you're looking for." />
          <div className="mt-10 space-y-3" aria-label="Talk to us directly">
            <p className="eyebrow text-taupe">Talk to us directly</p>
            {contacts.map((c) => (
              <div key={c.wa} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-taupe/40 p-4">
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-charcoal/70">{c.display}</p>
                </div>
                <div className="flex gap-2">
                  <a href={whatsappLink(c.wa)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-charcoal px-5 text-sm font-semibold text-ivory">
                    <MessageCircle aria-hidden="true" className="size-4" /> WhatsApp
                  </a>
                  <a href={`tel:${c.tel}`} aria-label={`Call ${c.name}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-taupe px-5 text-sm font-semibold">
                    <Phone aria-hidden="true" className="size-4" /> Call
                  </a>
                </div>
              </div>
            ))}
          </div>
          {(site.email || site.phone) && (
            <ul className="mt-12 space-y-2">
              {site.email && <li><a href={`mailto:${site.email}`}>{site.email}</a></li>}
              {site.phone && <li><a href={`tel:${site.phone}`}>{site.phone}</a></li>}
            </ul>
          )}
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}

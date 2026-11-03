import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Tell AEON Media about your brand and the support you are looking for." };

export default function ContactPage() {
  return (
    <Section labelledBy="contact-h1">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div>
          <SectionHeading as="h1" id="contact-h1" eyebrow="Contact" title="Tell us what you're building." intro="We will take the time to understand your brand, your goals and the support you're looking for." />
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

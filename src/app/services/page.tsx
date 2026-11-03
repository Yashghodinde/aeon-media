import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { serviceList } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "How AEON Media helps your brand: social media management, creative direction, shoots, video editing, design and Meta advertising support.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <Section labelledBy="services-h1">
        <Container>
          <SectionHeading as="h1" id="services-h1" eyebrow="Services" title="What you gain, and how we deliver it." intro="Every brand needs something different. Choose a service to see what is involved, how we work with you, and the work behind it." />
        </Container>
      </Section>

      <Section tone="champagne" labelledBy="all-services" compact>
        <Container>
          <h2 id="all-services" className="sr-only">All services</h2>
          <ul className="border-t border-taupe">
            {serviceList.map((s, i) => (
              <Reveal as="li" key={s.slug} className="border-b border-taupe">
                <Link href={`/services/${s.slug}`} className="group grid gap-3 py-7 md:grid-cols-[4rem_1fr_1.2fr_2rem] md:items-center md:gap-8 md:py-10">
                  <span className="font-display text-2xl text-taupe md:text-3xl">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display-md text-[1.625rem] transition-transform duration-300 group-hover:translate-x-1 md:text-[2rem]">{s.short}</h3>
                  <p className="max-w-md text-[0.9375rem] text-muted md:text-base">{s.benefit}</p>
                  <ArrowUpRight aria-hidden="true" className="hidden size-5 text-charcoal/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:block" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="how-we-work">
        <Container>
          <Reveal><SectionHeading id="how-we-work" eyebrow="How we work" title="Understood first. Then planned, made and refined." intro="The same careful path sits behind every service, so you always know where things stand." /></Reveal>
          <div className="mt-10 md:mt-20"><ProcessSteps /></div>
        </Container>
      </Section>
      <Section tone="champagne" compact>
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="display-md text-[1.5rem]">Prefer a ready-made starting point?</p>
          <Link href="/packages" className="inline-flex min-h-12 items-center rounded-full bg-charcoal px-6 text-sm font-semibold text-ivory">See packages</Link>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

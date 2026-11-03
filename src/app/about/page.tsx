import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "About", description: "AEON Media is a creative company that starts with your vision and takes ownership of the creative work." };

const beliefs = [
  { h: "Your vision is the starting point", t: "We learn how you see your brand before we suggest anything. Ideas are shaped with you, not imposed on you." },
  { h: "We take ownership", t: "Once the work is agreed, we handle it with care and keep you informed along the way." },
  { h: "Creative, and organised", t: "Good ideas need a clear plan. We bring both, so the work stays consistent from concept to publishing." },
];

export default function AboutPage() {
  return (
    <>
      <Section labelledBy="about-h1">
        <Container>
          <SectionHeading as="h1" id="about-h1" eyebrow="About AEON Media" title="A creative partner that starts with your vision." intro="AEON Media works with product-led brands, including clothing, jewellery and interior design, to help them communicate their value clearly and consistently." />
        </Container>
      </Section>
      <Section tone="champagne">
        <Container>
          <ul className="grid gap-8 md:grid-cols-3 md:gap-12">
            {beliefs.map((b, i) => (
              <Reveal as="li" key={b.h} delay={i * 0.1} className="border-t border-taupe pt-5 md:pt-6">
                <h2 className="display-md text-[1.5rem] md:text-[1.875rem]">{b.h}</h2>
                <p className="mt-3 text-[0.9375rem] text-muted md:mt-4 md:text-base">{b.t}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
      <Section tone="paper" labelledBy="how-title">
        <Container>
          <Reveal><SectionHeading id="how-title" eyebrow="How we work" title="A process you can follow." /></Reveal>
          <div className="mt-10 md:mt-20"><ProcessSteps /></div>
        </Container>
      </Section>
      <CTASection title="Let's create something meaningful for your brand." />
    </>
  );
}

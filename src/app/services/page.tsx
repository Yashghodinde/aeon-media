import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/content";

export const metadata: Metadata = { title: "What You Gain", description: "The outcomes AEON Media works towards for your brand, and the creative capabilities behind them." };

export default function ServicesPage() {
  return (
    <>
      <Section labelledBy="services-h1">
        <Container>
          <SectionHeading as="h1" id="services-h1" eyebrow="What you gain" title="Outcomes first. Capabilities to back them up." intro="Every brand needs something different. Here is what we work towards with you, and how." />
        </Container>
      </Section>
      {services.map((s, i) => (
        <Section key={s.id} tone={i % 2 === 0 ? "champagne" : "ivory"} compact>
          <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <Reveal>
              <p className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="display-lg mt-3 sm:mt-4">{s.benefit}</h2>
              <p className="lead mt-4 sm:mt-6">{s.why}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="divide-y divide-taupe border-y border-taupe">
                {[["The challenge", s.challenge], ["What you can expect", s.outcome], ["How we contribute", s.contribution]].map(([k, v]) => (
                  <div key={k} className="grid gap-1 py-4 text-[0.9375rem] sm:grid-cols-[10rem_1fr] sm:gap-2 sm:py-6 sm:text-base">
                    <dt className="eyebrow text-muted">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                {s.capabilities.map((c) => <li key={c} className="rounded-full border border-taupe px-3.5 py-1 text-[0.8125rem] sm:px-4 sm:py-1.5 sm:text-sm">{c}</li>)}
              </ul>
              <div className="mt-8"><TextLink href="/work">See related work</TextLink></div>
            </Reveal>
          </Container>
        </Section>
      ))}
      <CTASection />
    </>
  );
}

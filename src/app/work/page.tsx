import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkBrowser } from "@/components/portfolio/WorkBrowser";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Our Work", description: "Selected AEON Media work across clothing, jewellery and interiors." };

export default function WorkPage() {
  return (
    <>
      <Section labelledBy="work-h1">
        <Container>
          <SectionHeading as="h1" id="work-h1" eyebrow="Our work" title="See how your brand could look." intro="A look at the way we present products and build a consistent digital presence." />
          <p className="mt-6 rounded border border-taupe bg-champagne px-4 py-3 text-[0.8125rem] text-muted md:px-5 md:py-4 md:text-sm">
            Placeholder content: the projects below are layout stand-ins, not real client work. Real projects will be added once assets and permissions are confirmed.
          </p>
          <div className="mt-10 md:mt-20"><WorkBrowser projects={projects} /></div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

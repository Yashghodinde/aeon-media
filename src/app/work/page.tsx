import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkBrowser } from "@/components/portfolio/WorkBrowser";
import { CTASection } from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Our Work", description: "Brands AEON Media has worked with across architecture and interiors, jewellery, lifestyle, food, healthcare and sports equipment." };

export default function WorkPage() {
  return (
    <>
      <Section labelledBy="work-h1">
        <Container>
          <SectionHeading as="h1" id="work-h1" eyebrow="Our work" title="Selected Work" intro="A collection of brands, ideas and creative projects brought to life through thoughtful collaboration and execution." />
          <div className="mt-10 md:mt-20"><WorkBrowser projects={projects} /></div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { valuePillars } from "@/data/content";
import { ReelsRail } from "@/components/portfolio/ReelsRail";
import { DesignGallery } from "@/components/portfolio/DesignGallery";
import { designs } from "@/data/designs";
import { ClientsWall } from "@/components/portfolio/ClientsWall";
import { clients } from "@/data/clients";
import { mixShorts } from "@/data/videos";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section tone="champagne" labelledBy="reels-title">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <Reveal><SectionHeading id="reels-title" eyebrow="Video & Film" title="Reels that hold attention." /></Reveal>
            <TextLink href="/work#video">All videos</TextLink>
          </div>
          <div className="mt-8 md:mt-12"><ReelsRail items={mixShorts(20)} label="Selected reels" /></div>
        </Container>
      </Section>

      <Section labelledBy="design-title">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <Reveal><SectionHeading id="design-title" eyebrow="Design & Creative" title="Design with a clear point of view." /></Reveal>
            <TextLink href="/work#design">All design</TextLink>
          </div>
          <div className="mt-8 md:mt-12"><DesignGallery items={designs.filter((d) => ["dd1", "dd5", "dd4", "d1", "d3", "d6"].includes(d.id))} /></div>
        </Container>
      </Section>

      <Section tone="champagne" labelledBy="clients-title">
        <Container>
          <Reveal><SectionHeading id="clients-title" eyebrow="Clients" title="Brands and clients we have worked with." intro={`${clients.length} clients across ${new Set(clients.map((c) => c.industries[0]).filter((k) => k !== "other")).size} industries. Open any name to see their page.`} /></Reveal>
          <div className="mt-8 md:mt-12"><ClientsWall /></div>
        </Container>
      </Section>

      <Section labelledBy="value-title">
        <Container>
          <Reveal><SectionHeading id="value-title" eyebrow="What you gain" title="A brand people recognise, connect with and remember." /></Reveal>
          <ul className="mt-10 grid gap-x-12 gap-y-8 md:mt-20 md:grid-cols-2 md:gap-y-14">
            {valuePillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={(i % 2) * 0.1} className="border-t border-taupe pt-5 md:pt-6">
                <h3 className="display-md text-[1.375rem] md:text-[1.875rem]">{p.title}</h3>
                <p className="mt-2 max-w-md text-[0.9375rem] text-muted md:mt-4 md:text-base">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="paper" labelledBy="approach-title">
        <Container>
          <Reveal><SectionHeading id="approach-title" eyebrow="The AEON approach" title="Understood first. Then planned, made and refined." intro="A clear path from your idea to finished content, so you always know where things stand." /></Reveal>
          <div className="mt-10 md:mt-20"><ProcessSteps /></div>
        </Container>
      </Section>

      <Section tone="champagne" labelledBy="packages-teaser" compact>
        <Container className="flex flex-wrap items-end justify-between gap-6">
          <Reveal><SectionHeading id="packages-teaser" eyebrow="Packages" title="Start where you are. Grow from there." intro="Foundation, Growth and Signature, built from our services." /></Reveal>
          <TextLink href="/packages">See packages</TextLink>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

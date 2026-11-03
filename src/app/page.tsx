import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { gains, industryLabels, valuePillars } from "@/data/content";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featured = [projects[0], projects[1], projects[2]];
  return (
    <>
      <Hero />

      <Section tone="champagne" labelledBy="value-title">
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

      <Section labelledBy="work-title">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <Reveal><SectionHeading id="work-title" eyebrow="Selected work" title="Work that shows how your brand can look." /></Reveal>
            <TextLink href="/work">See all work</TextLink>
          </div>
          <p className="mt-5 text-sm text-muted md:mt-6">Placeholders shown — real projects will replace these once supplied.</p>
        </Container>
        <div className="mx-auto w-full max-w-[var(--aeon-content-max)] md:px-[var(--aeon-gutter)]">
          <ul aria-label="Selected projects" className="scroll-row mt-8 flex scroll-px-[var(--aeon-gutter)] snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--aeon-gutter)] pb-2 md:mt-16 md:grid md:snap-none md:grid-cols-3 md:gap-x-10 md:gap-y-16 md:overflow-visible md:px-0">
            {featured.map((p, i) => (<Reveal as="li" key={p.slug} delay={i * 0.1} className="w-[72%] max-w-[20rem] shrink-0 snap-start md:w-auto md:max-w-none"><ProjectCard project={p} imageClassName="max-md:aspect-square" /></Reveal>))}
          </ul>
        </div>
        <Container>
          <p className="mt-4 text-xs text-muted md:hidden" aria-hidden="true">Swipe to see more →</p>
        </Container>
      </Section>

      <Section tone="paper" labelledBy="approach-title">
        <Container>
          <Reveal><SectionHeading id="approach-title" eyebrow="The AEON approach" title="Understood first. Then planned, made and refined." intro="A clear path from your idea to finished content, so you always know where things stand." /></Reveal>
          <div className="mt-10 md:mt-20"><ProcessSteps /></div>
        </Container>
      </Section>

      <Section labelledBy="gain-title">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal><SectionHeading id="gain-title" eyebrow="Practical benefits" title="Less to coordinate. More that feels like your brand." /></Reveal>
          <ul className="divide-y divide-line self-end border-y border-line">
            {gains.map((g, i) => (<Reveal as="li" key={g} delay={i * 0.05} className="py-4 text-base md:py-5 md:text-lg">{g}</Reveal>))}
          </ul>
        </Container>
      </Section>

      <Section tone="champagne" labelledBy="industries-title">
        <Container>
          <Reveal><SectionHeading id="industries-title" eyebrow="Industries" title="Brands where presentation matters." /></Reveal>
          <ul className="mt-8 divide-y divide-taupe border-y border-taupe md:mt-16 md:grid md:grid-cols-3 md:gap-px md:divide-y-0 md:border md:bg-taupe">
            {Object.values(industryLabels).map((label) => (
              <li key={label} className="flex items-center justify-between bg-champagne py-6 font-display text-[1.625rem] md:block md:px-8 md:py-14 md:text-4xl">{label}</li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

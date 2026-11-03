import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientDirectory } from "@/components/portfolio/ClientDirectory";
import { ReelsRail } from "@/components/portfolio/ReelsRail";
import { LongVideoGrid } from "@/components/portfolio/LongVideoGrid";
import { DesignGallery } from "@/components/portfolio/DesignGallery";
import { CTASection } from "@/components/sections/CTASection";
import { designs } from "@/data/designs";
import { clients } from "@/data/clients";
import { longVideos, shorts } from "@/data/videos";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Selected AEON Media work: reels and videos, design and creative, and the brands we have worked with.",
  alternates: { canonical: "/work/" },
};

const tabs = [
  { href: "#video", label: "Video & Film" },
  { href: "#design", label: "Design & Creative" },
  { href: "#clients", label: "Clients" },
];

export default function WorkPage() {
  return (
    <>
      <Section labelledBy="work-h1" compact>
        <Container>
          <SectionHeading as="h1" id="work-h1" eyebrow="Our work" title="Selected Work" intro="A collection of brands, ideas and creative projects brought to life through thoughtful collaboration and execution." />
          <nav aria-label="Work sections" className="scroll-row sticky top-16 z-30 md:top-20 -mx-[var(--aeon-gutter)] mt-8 flex gap-2 overflow-x-auto bg-ivory/95 px-[var(--aeon-gutter)] py-3 backdrop-blur sm:mx-0 sm:px-0">
            {tabs.map((t) => (
              <a key={t.href} href={t.href} className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-taupe px-5 text-sm font-medium hover:bg-champagne">{t.label}</a>
            ))}
          </nav>
        </Container>
      </Section>

      <Section id="video" labelledBy="video-h" tone="champagne" className="scroll-mt-20">
        <Container>
          <SectionHeading id="video-h" eyebrow="Video & Film" title="Reels and short-form video." intro={`${shorts.length} reels and Shorts. Swipe through them and press play to watch here.`} />
          <div className="mt-8 md:mt-12"><ReelsRail items={shorts} filterable /></div>
          <p className="mt-8 text-sm text-muted">How we work: <Link href="/services/video-editing" className="underline underline-offset-4">video editing &amp; post-production</Link>.</p>
          <h3 className="display-md mt-16 md:mt-24">Longer videos</h3>
          <div className="mt-8"><LongVideoGrid items={longVideos} /></div>
        </Container>
      </Section>

      <Section id="design" labelledBy="design-h" className="scroll-mt-20">
        <Container>
          <SectionHeading id="design-h" eyebrow="Design & Creative" title="Brand and social design." intro="Identity, maps and social creatives. Tap any piece to see it full size." />
          <div className="mt-8 md:mt-12"><DesignGallery items={designs} filterable /></div>
          <p className="mt-8 text-sm text-muted">How we work: <Link href="/services/design-brand-identity" className="underline underline-offset-4">design &amp; brand identity</Link>.</p>
        </Container>
      </Section>

      <Section id="clients" labelledBy="clients-h" tone="champagne" className="scroll-mt-20">
        <Container>
          <SectionHeading id="clients-h" eyebrow="Clients" title={`${clients.length} clients, by industry.`} intro="Open a client to see the work behind it." />
          <div className="mt-8 md:mt-16"><ClientDirectory /></div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ReelsRail } from "@/components/portfolio/ReelsRail";
import { LongVideoGrid } from "@/components/portfolio/LongVideoGrid";
import { DesignGallery } from "@/components/portfolio/DesignGallery";
import { CTASection } from "@/components/sections/CTASection";
import { designs } from "@/data/designs";
import { getService, serviceList } from "@/data/services";
import { longVideos, mixShorts } from "@/data/videos";

export const dynamicParams = false;
export const generateStaticParams = () => serviceList.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? { title: s.short, description: `${s.benefit} ${s.intro}`.slice(0, 200), alternates: { canonical: `/services/${s.slug}/` } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const i = serviceList.indexOf(service);
  const prev = serviceList[(i - 1 + serviceList.length) % serviceList.length];
  const next = serviceList[(i + 1) % serviceList.length];
  const related = service.related.map((r) => getService(r)!).filter(Boolean);
  const w = service.work;
  const showDesigns = w?.designIds ? designs.filter((d) => w.designIds!.includes(d.id)) : [];

  return (
    <>
      <Section>
        <Container>
          <TextLink href="/services">All services</TextLink>
          <p className="eyebrow mt-8 text-muted md:mt-12">{String(i + 1).padStart(2, "0")} · Service</p>
          <h1 className="display-xl mt-4">{service.short}</h1>
          <p className="lead mt-6 max-w-2xl md:mt-10">{service.benefit}</p>
          <p className="mt-6 max-w-2xl text-muted">{service.intro}</p>
          <p className="mt-8 max-w-2xl border-l-2 border-taupe pl-4 text-[0.9375rem]"><span className="eyebrow mr-2 text-muted">A good fit if</span>{service.goodFit}</p>
        </Container>
      </Section>

      <Section tone="champagne" labelledBy="involved-h" compact>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal><h2 id="involved-h" className="display-lg">What is involved</h2></Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-taupe border-y border-taupe">
              {service.involved.map((x) => (
                <li key={x} className="flex gap-3 py-4 text-[0.9375rem] md:py-5 md:text-base">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-taupe" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section labelledBy="how-h">
        <Container>
          <Reveal><h2 id="how-h" className="display-lg">How it works with you</h2></Reveal>
          <ol className="mt-10 grid gap-x-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 md:mt-16">
            {service.steps.map((s, n) => (
              <Reveal as="li" key={s.title} delay={n * 0.08} className="border-t border-taupe pt-5">
                <span className="font-display text-3xl text-taupe">{String(n + 1).padStart(2, "0")}</span>
                <h3 className="display-md mt-3 text-[1.5rem]">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted">{s.body}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 rounded-2xl bg-champagne p-6 md:mt-20 md:p-10">
            <h3 className="display-md text-[1.5rem]">Agreed with you, not assumed</h3>
            <p className="mt-2 max-w-xl text-[0.9375rem] text-muted">These depend on your brand and goals, so we agree them with you before work begins:</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.agreed.map((a) => <li key={a} className="rounded-full border border-taupe px-4 py-1.5 text-sm">{a}</li>)}
            </ul>
          </div>
        </Container>
      </Section>

      {w && (
        <Section tone="champagne" labelledBy="work-h">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="work-h" className="display-lg">{w.label}</h2>
              <TextLink href={w.href}>See all</TextLink>
            </div>
            {w.videos && (
              <div className="mt-8 md:mt-12">
                <ReelsRail items={mixShorts(14)} label="Selected reels" />
                {w.videos === "both" && <div className="mt-12"><LongVideoGrid items={longVideos.slice(0, 6)} step={3} /></div>}
              </div>
            )}
            {showDesigns.length > 0 && <div className="mt-8 md:mt-12"><DesignGallery items={showDesigns} /></div>}
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <h2 className="display-md">Related services</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}`} className="group flex min-h-24 items-start justify-between gap-3 rounded-2xl border border-taupe/50 p-5 transition-colors hover:bg-champagne">
                  <span>
                    <span className="display-md block text-[1.375rem]">{r.short}</span>
                    <span className="mt-1 block text-sm text-muted">{r.benefit}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-charcoal/50" />
                </Link>
              </li>
            ))}
          </ul>
          <nav aria-label="Service navigation" className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-2">
            <Link href={`/services/${prev.slug}`} className="block min-h-11"><span className="eyebrow text-muted">Previous</span><span className="display-md mt-1 block text-[1.375rem]">{prev.short}</span></Link>
            <Link href={`/services/${next.slug}`} className="block min-h-11 sm:text-right"><span className="eyebrow text-muted">Next</span><span className="display-md mt-1 block text-[1.375rem]">{next.short}</span></Link>
          </nav>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { InstagramEmbed } from "@/components/portfolio/InstagramEmbed";
import { CTASection } from "@/components/sections/CTASection";
import { industryLabels } from "@/data/content";
import { getProject, hasMedia, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${industryLabels[p.category]}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}/` },
    // Pages with no confirmed AEON media would be thin content, so keep them out of search until media is added.
    robots: hasMedia(p) ? undefined : { index: false, follow: true },
  };
}

const mediaWidth = { "9:16": "sm:max-w-[22rem]", "4:5": "sm:max-w-[26rem]", "1:1": "sm:max-w-[28rem]", "16:9": "sm:col-span-2 lg:col-span-3" } as const;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);

  return (
    <>
      <Section>
        <Container>
          <TextLink href="/work">All work</TextLink>
          <p className="eyebrow mt-8 text-muted md:mt-12">{industryLabels[project.category]}</p>
          <h1 className="display-xl mt-4">{project.name}</h1>
          <p className="mt-3 text-muted">@{project.handle}</p>
          <p className="mt-8 max-w-xl text-lg md:mt-10">{project.summary}</p>
          <p className="mt-2 text-xs text-muted">Summary based on the brand&rsquo;s public Instagram profile.</p>
          <a href={project.profileUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-charcoal px-6 text-sm font-semibold text-ivory">
            Visit @{project.handle} <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </Container>
      </Section>

      <Section tone="champagne" labelledBy="media-title">
        <Container>
          <h2 id="media-title" className="display-md">Creative work</h2>
          {hasMedia(project) ? (
            <ul className="mt-8 grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {project.media.map((m) => (
                <li key={m.id} className={mediaWidth[m.aspectRatio ?? "9:16"]}>
                  {m.type === "instagram-embed" ? (
                    <InstagramEmbed media={m} brand={project.name} />
                  ) : m.type === "image" && m.assetPath ? (
                    <figure>
                      <Image src={m.assetPath} alt={m.alt ?? m.title ?? project.name} width={1200} height={m.aspectRatio === "4:5" ? 1500 : 1200} className="h-auto w-full rounded-2xl" />
                      {m.title && <figcaption className="mt-3 text-sm text-muted">{m.title}</figcaption>}
                    </figure>
                  ) : m.type === "video" && m.assetPath ? (
                    <video src={m.assetPath} controls preload="metadata" playsInline className="h-auto w-full rounded-2xl" />
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 max-w-xl">
              <p className="text-muted">See this brand&rsquo;s latest photos, Reels and videos on its Instagram profile.</p>
              <a href={project.profileUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-taupe pb-1 text-sm font-semibold">
                Explore on Instagram <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          )}
        </Container>
      </Section>

      <Section>
        <Container>
          <nav aria-label="Project navigation" className="grid gap-6 border-y border-line py-6 sm:grid-cols-2">
            <Link href={`/work/${prev.slug}`} className="block min-h-11">
              <span className="eyebrow text-muted">Previous</span>
              <span className="display-md mt-1 block text-[1.375rem]">{prev.name}</span>
            </Link>
            <Link href={`/work/${next.slug}`} className="block min-h-11 sm:text-right">
              <span className="eyebrow text-muted">Next</span>
              <span className="display-md mt-1 block text-[1.375rem]">{next.name}</span>
            </Link>
          </nav>
          <p className="mt-8 text-sm text-muted">Explore our <Link href="/services" className="underline underline-offset-4">services</Link>.</p>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="champagne">
          <Container>
            <h2 className="display-md">More in {industryLabels[project.category]}</h2>
            <ul className="mt-8 grid gap-10 md:mt-12 md:grid-cols-2">{related.map((p, n) => <li key={p.slug}><ProjectCard project={p} index={n} /></li>)}</ul>
          </Container>
        </Section>
      )}
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { TextLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { industryLabels } from "@/data/content";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = projects.filter((p) => p.slug !== project.slug && p.industry === project.industry).slice(0, 2);
  const blocks = [
    { h: "The brief", t: project.clientObjective },
    { h: "Creative direction", t: project.creativeDirection },
  ];

  return (
    <>
      <Section>
        <Container>
          <TextLink href="/work">All work</TextLink>
          <p className="eyebrow mt-8 text-muted md:mt-12">{industryLabels[project.industry]}</p>
          <h1 className="display-xl mt-4">{project.title}</h1>
          {project.isPlaceholder && <p className="mt-6 inline-block rounded-full border border-taupe px-4 py-1.5 text-sm text-muted">Placeholder — not real client work</p>}
          <div className="mt-8 md:mt-16"><ImagePlaceholder ratio="wide" compact label="Placeholder · hero visual to be supplied" /></div>
          <div className="mt-12 grid gap-8 md:mt-24 md:grid-cols-2 md:gap-16">
            {blocks.map((b) => (
              <div key={b.h} className="border-t border-taupe pt-6">
                <h2 className="display-md">{b.h}</h2>
                <p className="mt-4 text-muted">{b.t}</p>
              </div>
            ))}
            {project.deliverables.length > 0 && (
              <div className="border-t border-taupe pt-6">
                <h2 className="display-md">Work completed</h2>
                <ul className="mt-4 list-disc pl-5 text-muted">{project.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            )}
            {project.outcome && project.outcomeEvidence && !project.isPlaceholder && (
              <div className="border-t border-taupe pt-6">
                <h2 className="display-md">Outcome</h2>
                <p className="mt-4 text-muted">{project.outcome}</p>
              </div>
            )}
          </div>
        </Container>
      </Section>
      {related.length > 0 && (
        <Section tone="champagne">
          <Container>
            <h2 className="display-md">More work</h2>
            <ul className="mt-8 grid gap-10 md:mt-12 md:grid-cols-2">{related.map((p) => <li key={p.slug}><ProjectCard project={p} /></li>)}</ul>
          </Container>
        </Section>
      )}
      <CTASection />
    </>
  );
}

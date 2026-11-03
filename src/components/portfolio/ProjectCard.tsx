import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industryLabels } from "@/data/content";
import type { PortfolioProject } from "@/data/projects";
import { cn } from "@/lib/cn";

const tones = ["bg-champagne", "bg-[#d9ccb8]", "bg-paper"] as const;

/** Typographic cover (no stock or invented imagery). Swap in `coverImage` once approved assets exist. */
export function ProjectCard({ project, index = 0, wide = false }: { project: PortfolioProject; index?: number; wide?: boolean }) {
  return (
    <article className="group">
      <Link href={`/work/${project.slug}`} className="block" aria-label={`${project.name} — ${industryLabels[project.category]}`}>
        <div className="overflow-hidden rounded-2xl">
          <div
            className={cn(
              "relative flex flex-col justify-between p-5 transition-transform duration-700 ease-[var(--aeon-ease)] group-hover:scale-[1.03] sm:p-7",
              wide ? "aspect-[5/4] lg:aspect-[16/9]" : "aspect-[5/4] sm:aspect-[4/5]",
              tones[index % tones.length],
            )}
          >
            <span className="eyebrow text-[0.6875rem] text-charcoal/60">{industryLabels[project.category]}</span>
            <div>
              <h3 className="display-md text-[1.75rem] leading-tight sm:text-[2rem]">{project.name}</h3>
              <span className="mt-2 inline-block text-sm text-charcoal/70">@{project.handle}</span>
            </div>
            <ArrowUpRight aria-hidden="true" className="absolute right-5 top-5 size-5 text-charcoal/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:right-7 sm:top-7" />
          </div>
        </div>
        <p className="mt-4 max-w-md text-sm text-muted md:mt-5">{project.summary}</p>
      </Link>
      <a href={project.profileUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">
        View on Instagram <ArrowUpRight aria-hidden="true" className="size-4" />
      </a>
    </article>
  );
}

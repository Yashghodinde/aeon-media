import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { industryLabels } from "@/data/content";
import type { PortfolioProject } from "@/data/projects";

export function ProjectCard({ project, compact = false, imageClassName }: { project: PortfolioProject; compact?: boolean; imageClassName?: string }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-[var(--aeon-ease)] group-hover:scale-[1.04]">
          <ImagePlaceholder ratio={project.aspect} compact={compact} label={project.isPlaceholder ? "Placeholder image" : project.title} className={imageClassName} tone={project.industry === "jewellery" ? "taupe" : "champagne"} />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1 border-b border-line pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3 md:mt-5 md:gap-4 md:pb-4">
        <h3 className="display-md text-[1.375rem] md:text-[1.625rem]">{project.title}</h3>
        <span className="eyebrow shrink-0 text-[0.6875rem] text-muted md:text-xs">{industryLabels[project.industry]}</span>
      </div>
      <p className="mt-2 max-w-sm text-sm text-muted md:mt-3">{project.summary}</p>
    </Link>
  );
}

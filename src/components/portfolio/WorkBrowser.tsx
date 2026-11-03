"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { industryLabels, type Industry } from "@/data/content";
import type { PortfolioProject } from "@/data/projects";
import { cn } from "@/lib/cn";

type Filter = "all" | Industry;

export function WorkBrowser({ projects }: { projects: PortfolioProject[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  // Only categories that actually have projects.
  const used = (Object.keys(industryLabels) as Industry[]).filter((k) => projects.some((p) => p.category === k));
  const options: { value: Filter; label: string }[] = [
    { value: "all", label: "All work" },
    ...used.map((k) => ({ value: k, label: industryLabels[k] })),
  ];
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="scroll-row -mx-[var(--aeon-gutter)] flex gap-2 overflow-x-auto px-[var(--aeon-gutter)] pb-1 sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={filter === o.value}
            onClick={() => setFilter(o.value)}
            className={cn(
              "min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors sm:px-5",
              filter === o.value ? "border-charcoal bg-charcoal text-ivory" : "border-taupe hover:bg-champagne",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} brands shown</p>
      <motion.ul layout className="mt-10 grid gap-x-10 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.li key={p.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className={filter === "all" && i === 0 ? "lg:col-span-2" : undefined}>
              <ProjectCard project={p} index={i} wide={filter === "all" && i === 0} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

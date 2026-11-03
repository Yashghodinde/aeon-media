"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ClientRow } from "./ClientRow";
import { industryLabels, type Industry } from "@/data/content";
import { clients, usedIndustries } from "@/data/clients";
import { cn } from "@/lib/cn";

type Filter = "all" | Industry;

/** Client directory with industry filters (only industries that have clients). A client may match several. */
export function ClientDirectory() {
  const [filter, setFilter] = useState<Filter>("all");
  const options: { value: Filter; label: string }[] = [{ value: "all", label: "All clients" }, ...usedIndustries().map((k) => ({ value: k, label: industryLabels[k] }))];
  const shown = filter === "all" ? clients : clients.filter((c) => c.industries.includes(filter));
  return (
    <div>
      <div role="group" aria-label="Filter clients" className="scroll-row -mx-[var(--aeon-gutter)] flex gap-2 overflow-x-auto px-[var(--aeon-gutter)] pb-1 sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0">
        {options.map((o) => (
          <button key={o.value} type="button" aria-pressed={filter === o.value} onClick={() => setFilter(o.value)} className={cn("min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors sm:px-5", filter === o.value ? "border-charcoal bg-charcoal text-ivory" : "border-taupe hover:bg-champagne")}>
            {o.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} clients shown</p>
      <motion.ul layout className="mt-8 grid gap-x-14 border-t border-line sm:mt-12 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((c) => (
            <motion.li key={c.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <ClientRow client={c} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { asset } from "@/lib/asset";
import { designCategoryLabels, type DesignCategory, type DesignItem } from "@/data/designs";
import { cn } from "@/lib/cn";

/** Design gallery with filter and a native <dialog> lightbox (Esc to close, arrows to move, long artwork scrolls). */
export function DesignGallery({ items, filterable = false }: { items: DesignItem[]; filterable?: boolean }) {
  const [cat, setCat] = useState<DesignCategory | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const shown = cat === "all" ? items : items.filter((d) => d.category === cat);
  const cats = Object.keys(designCategoryLabels) as DesignCategory[];

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % shown.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + shown.length) % shown.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, shown.length]);

  const cur = open !== null ? shown[open] : null;
  return (
    <div>
      {filterable && (
        <div role="group" aria-label="Filter designs" className="mb-8 flex flex-wrap gap-2">
          {(["all", ...cats] as const).map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={cn("min-h-11 rounded-full border px-4 text-sm font-medium transition-colors", cat === c ? "border-charcoal bg-charcoal text-ivory" : "border-taupe hover:bg-champagne")}>
              {c === "all" ? "All designs" : designCategoryLabels[c]}
            </button>
          ))}
        </div>
      )}
      <ul className="columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
        {shown.map((d, i) => (
          <li key={d.id} className="mb-4 break-inside-avoid md:mb-6">
            <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left" aria-label={`Enlarge: ${d.title}${d.client ? ` — ${d.client}` : ""}`}>
              <div className="overflow-hidden rounded-2xl bg-champagne">
                {/* Tall artwork is cropped to a preview; the lightbox shows it in full. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(d.src)} alt={d.alt} width={d.width} height={d.height} loading="lazy" decoding="async" className={cn("w-full object-cover object-top transition-transform duration-700 ease-[var(--aeon-ease)] group-hover:scale-[1.03]", d.height / d.width > 2 ? "aspect-[3/4]" : "h-auto")} />
              </div>
              <p className="mt-2 text-sm font-medium leading-snug">{d.client ?? d.title}</p>
              <p className="text-xs text-muted">{d.client ? d.type : designCategoryLabels[d.category]}</p>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dlg} onClose={() => setOpen(null)} onClick={(e) => e.target === dlg.current && setOpen(null)} aria-label="Design preview" className="m-auto max-h-[92dvh] w-[min(96vw,64rem)] overflow-hidden rounded-2xl bg-ivory p-0 text-charcoal backdrop:bg-charcoal/80">
        {cur && (
          <div className="flex max-h-[92dvh] flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <p className="truncate text-sm font-semibold">{cur.client ? `${cur.client} · ` : ""}{cur.title}</p>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => setOpen((open! - 1 + shown.length) % shown.length)} aria-label="Previous design" className="inline-flex size-11 items-center justify-center rounded-full hover:bg-champagne"><ChevronLeft aria-hidden="true" className="size-5" /></button>
                <button type="button" onClick={() => setOpen((open! + 1) % shown.length)} aria-label="Next design" className="inline-flex size-11 items-center justify-center rounded-full hover:bg-champagne"><ChevronRight aria-hidden="true" className="size-5" /></button>
                <button type="button" onClick={() => setOpen(null)} aria-label="Close preview" className="inline-flex size-11 items-center justify-center rounded-full hover:bg-champagne"><X aria-hidden="true" className="size-5" /></button>
              </div>
            </div>
            <div className="overflow-y-auto bg-champagne">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(cur.src)} alt={cur.alt} width={cur.width} height={cur.height} className="mx-auto h-auto w-full max-w-full" style={{ maxWidth: cur.height > cur.width ? "min(100%, 34rem)" : "100%" }} />
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

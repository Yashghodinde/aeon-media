"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramEmbed } from "./InstagramEmbed";
import type { ClientPost } from "@/data/clients";

const fmt = (iso?: string) => (iso ? new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "");

/** Side-scrolling rail of a brand's own public Instagram posts. Each loads only when played. */
export function PostRail({ posts, brand }: { posts: ClientPost[]; brand: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (d: 1 | -1) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <div>
      <ul ref={ref} aria-label={`${brand} on Instagram`} className="scroll-row -mx-[var(--aeon-gutter)] flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-[var(--aeon-gutter)] pb-3 [scroll-padding-inline:var(--aeon-gutter)] md:mx-0 md:px-0">
        {posts.map((p) => (
          <li key={p.id} className={`shrink-0 snap-start ${p.aspectRatio === "9:16" ? "w-[58%] max-w-[15rem] sm:w-56" : "w-[72%] max-w-[18rem] sm:w-64"}`}>
            <InstagramEmbed media={p} brand={brand} caption={[p.description, fmt(p.publishedAt)].filter(Boolean).join(" · ")} />
          </li>
        ))}
      </ul>
      <div className="mt-3 hidden items-center justify-between md:flex">
        <p className="text-sm text-muted">{posts.length} public posts · swipe or use the arrows</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} aria-label="Scroll posts left" className="inline-flex size-11 items-center justify-center rounded-full border border-taupe hover:bg-champagne"><ChevronLeft aria-hidden="true" className="size-5" /></button>
          <button type="button" onClick={() => go(1)} aria-label="Scroll posts right" className="inline-flex size-11 items-center justify-center rounded-full border border-taupe hover:bg-champagne"><ChevronRight aria-hidden="true" className="size-5" /></button>
        </div>
      </div>
      <p className="mt-2 text-xs text-muted md:hidden" aria-hidden="true">{posts.length} public posts · swipe →</p>
    </div>
  );
}

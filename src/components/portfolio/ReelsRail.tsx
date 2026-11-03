"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { YouTubeCard } from "./YouTubeCard";
import { channels, type VideoItem } from "@/data/videos";
import { cn } from "@/lib/cn";

/** Side-scrolling reels rail: touch swipe + snap, arrow buttons on larger screens, optional channel filter. */
export function ReelsRail({ items, filterable = false, label = "Reels and Shorts" }: { items: VideoItem[]; filterable?: boolean; label?: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [channel, setChannel] = useState<string>("all");
  const shown = channel === "all" ? items : items.filter((v) => v.channel === channel);
  const go = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <div>
      {filterable && (
        <div role="group" aria-label="Filter reels by channel" className="scroll-row -mx-[var(--aeon-gutter)] mb-6 flex gap-2 overflow-x-auto px-[var(--aeon-gutter)] sm:mx-0 sm:flex-wrap sm:px-0">
          {["all", ...channels].map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={channel === c}
              onClick={() => { setChannel(c); ref.current?.scrollTo({ left: 0 }); }}
              className={cn("min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors", channel === c ? "border-charcoal bg-charcoal text-ivory" : "border-taupe hover:bg-champagne")}
            >
              {c === "all" ? "All" : c}
            </button>
          ))}
        </div>
      )}
      <div className="relative">
        <ul ref={ref} aria-label={label} className="scroll-row -mx-[var(--aeon-gutter)] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--aeon-gutter)] pb-3 [scroll-padding-inline:var(--aeon-gutter)] md:mx-0 md:px-0">
          {shown.map((v) => (
            <li key={v.id} className="w-[58%] max-w-[15rem] shrink-0 snap-start sm:w-56">
              <YouTubeCard video={v} />
            </li>
          ))}
        </ul>
        <div className="mt-3 hidden items-center justify-between md:flex">
          <p className="text-sm text-muted">{shown.length} reels · swipe or use the arrows</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Scroll reels left" className="inline-flex size-11 items-center justify-center rounded-full border border-taupe hover:bg-champagne"><ChevronLeft aria-hidden="true" className="size-5" /></button>
            <button type="button" onClick={() => go(1)} aria-label="Scroll reels right" className="inline-flex size-11 items-center justify-center rounded-full border border-taupe hover:bg-champagne"><ChevronRight aria-hidden="true" className="size-5" /></button>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted md:hidden" aria-hidden="true">{shown.length} reels · swipe →</p>
      </div>
    </div>
  );
}

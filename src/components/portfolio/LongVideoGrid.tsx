"use client";

import { useState } from "react";
import { YouTubeCard } from "./YouTubeCard";
import type { VideoItem } from "@/data/videos";

export function LongVideoGrid({ items, step = 6 }: { items: VideoItem[]; step?: number }) {
  const [n, setN] = useState(step);
  return (
    <div>
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, n).map((v) => (<li key={v.id}><YouTubeCard video={v} ratio="16/9" /></li>))}
      </ul>
      {n < items.length && (
        <button type="button" onClick={() => setN((x) => x + step)} className="mt-10 inline-flex min-h-12 items-center rounded-full border border-taupe px-6 text-sm font-semibold hover:bg-champagne">
          Show more videos ({items.length - n} more)
        </button>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { fallbackThumb, type VideoItem } from "@/data/videos";
import { cn } from "@/lib/cn";

/** Thumbnail-first YouTube player. The iframe (youtube-nocookie) is only created after the visitor presses play. */
export function YouTubeCard({ video, ratio = "9/16", className }: { video: VideoItem; ratio?: "9/16" | "16/9"; className?: string }) {
  const [active, setActive] = useState(false);
  const [thumb, setThumb] = useState(video.thumb);
  return (
    <figure className={cn("w-full", className)}>
      <div className={cn("relative w-full overflow-hidden rounded-2xl bg-champagne", ratio === "9/16" ? "aspect-[9/16]" : "aspect-video")}>
        {active ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button type="button" onClick={() => setActive(true)} aria-label={`Play: ${video.title}`} className="group absolute inset-0 block h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt=""
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => thumb !== fallbackThumb(video.id) && setThumb(fallbackThumb(video.id))}
              className="h-full w-full object-cover transition-transform duration-700 ease-[var(--aeon-ease)] group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-charcoal/10 transition-colors group-hover:bg-charcoal/25" />
            <span className="absolute bottom-3 left-3 inline-flex size-11 items-center justify-center rounded-full bg-ivory/95 text-charcoal">
              <Play aria-hidden="true" className="size-4 translate-x-px" />
            </span>
            {video.duration && <span className="absolute bottom-3 right-3 rounded-full bg-charcoal/75 px-2.5 py-1 text-[0.6875rem] font-semibold text-ivory">{video.duration}</span>}
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <p className="line-clamp-2 text-sm font-medium leading-snug">{video.title}</p>
        <p className="mt-1 flex items-center justify-between gap-2 text-xs text-muted">
          <span className="truncate">{video.channel}</span>
          <a href={video.watch} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-1 font-semibold text-charcoal" aria-label={`Watch on YouTube: ${video.title}`}>
            YouTube <ExternalLink aria-hidden="true" className="size-3" />
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

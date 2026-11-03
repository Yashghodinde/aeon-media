"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/cn";

const frames = {
  "9:16": "aspect-[9/16] max-w-[22rem]",
  "4:5": "aspect-[4/5] max-w-[26rem]",
  "1:1": "aspect-square max-w-[28rem]",
  "16:9": "aspect-video max-w-3xl",
} as const;

/** https://www.instagram.com/(p|reel|tv)/CODE/ -> official embed iframe URL. Returns null if not a valid post URL. */
export function toEmbedUrl(postUrl: string): string | null {
  const m = postUrl.match(/^https:\/\/www\.instagram\.com\/(?:[A-Za-z0-9._]+\/)?(p|reel|tv)\/([A-Za-z0-9_-]+)\/?/);
  return m ? `https://www.instagram.com/${m[1]}/${m[2]}/embed/` : null;
}

/**
 * Thumbnail-first Instagram player. Nothing from Instagram loads until the visitor presses play,
 * so pages stay fast and no third-party script is needed. Uses Instagram's official /embed/ iframe
 * (native controls, attribution preserved). Falls back to a link to the original post.
 */
export type EmbedPost = { postUrl: string; aspectRatio?: keyof typeof frames; title?: string };

export function InstagramEmbed({ media, brand, caption }: { media: EmbedPost; brand: string; caption?: string }) {
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  const embed = media.postUrl ? toEmbedUrl(media.postUrl) : null;
  const ratio = frames[media.aspectRatio ?? "9:16"];
  const title = media.title ?? `${brand} on Instagram`;

  return (
    <figure className="w-full">
      <div className={cn("relative w-full overflow-hidden rounded-2xl bg-champagne", ratio)}>
        {active && embed && !failed ? (
          <iframe
            src={embed}
            title={title}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            scrolling="no"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="display-md text-[1.25rem]">{brand}</p>
            {embed && !failed ? (
              <button
                type="button"
                onClick={() => setActive(true)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-charcoal px-6 text-sm font-semibold text-ivory"
                aria-label={`Play: ${title}`}
              >
                <Play aria-hidden="true" className="size-4" /> Play here
              </button>
            ) : (
              <p className="text-sm text-muted">This post can&rsquo;t be shown here.</p>
            )}
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm text-muted">
        <span className="line-clamp-2">{caption ?? media.title ?? "Instagram"}</span>
        {media.postUrl && (
          <a href={media.postUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-1 font-semibold text-charcoal">
            View on Instagram <ExternalLink aria-hidden="true" className="size-3.5" />
          </a>
        )}
      </figcaption>
    </figure>
  );
}

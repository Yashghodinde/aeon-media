import raw from "./video-portfolio.json";

/**
 * Video work migrated from the YOT Productions site: public YouTube videos and Shorts
 * (list scraped from the channels' public tabs; see docs/yot-productions-migration/video-portfolio.md).
 * Videos stay on YouTube and are embedded; nothing is downloaded or re-hosted.
 */
export type VideoItem = {
  id: string;
  type: "short" | "long";
  title: string;
  channel: string;
  clientType: string;
  duration: string;
  views: string;
  thumb: string;
  watch: string;
};

/** Shown first, in this order, wherever Money Pandits videos appear (owner request). */
const PINNED = ["41gEWC2sL5Y", "AIx9HQwKnwU", "9zN0W9UKzSU", "apf9s7Y7K-E", "D-BdpP7TgD8"];
const all = raw as VideoItem[];
const rank = (v: VideoItem) => { const i = PINNED.indexOf(v.id); return i === -1 ? PINNED.length : i; };
export const videos: VideoItem[] = [...all].sort((a, b) => rank(a) - rank(b));
export const shorts = videos.filter((v) => v.type === "short");
export const longVideos = videos.filter((v) => v.type === "long");
export const channels = [...new Set(videos.map((v) => v.channel))];

/** Round-robin across channels so a short list isn't dominated by one channel. */
export function mixShorts(n: number): VideoItem[] {
  const by = channels.map((c) => shorts.filter((s) => s.channel === c));
  const out: VideoItem[] = [];
  // pinned Money Pandits shorts lead the mix
  for (const id of PINNED) { const v = shorts.find((x) => x.id === id); if (v && out.length < n) out.push(v); }
  for (let i = 0; out.length < n && i < 1000; i++) for (const list of by) if (list[i] && !out.includes(list[i]) && out.length < n) out.push(list[i]);
  return out;
}

export const fallbackThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

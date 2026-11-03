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

export const videos = raw as VideoItem[];
export const shorts = videos.filter((v) => v.type === "short");
export const longVideos = videos.filter((v) => v.type === "long");
export const channels = [...new Set(videos.map((v) => v.channel))];

/** Round-robin across channels so a short list isn't dominated by one channel. */
export function mixShorts(n: number): VideoItem[] {
  const by = channels.map((c) => shorts.filter((s) => s.channel === c));
  const out: VideoItem[] = [];
  for (let i = 0; out.length < n && i < 1000; i++) for (const list of by) if (list[i] && out.length < n) out.push(list[i]);
  return out;
}

export const fallbackThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

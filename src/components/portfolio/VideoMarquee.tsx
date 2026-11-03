import { asset } from "@/lib/asset";
import { designs } from "@/data/designs";
import { mixShorts } from "@/data/videos";

type Thumb = { key: string; src: string; w: string };

function Row({ items, reverse }: { items: Thumb[]; reverse?: boolean }) {
  return (
    <div className={`marquee overflow-hidden ${reverse ? "marquee-reverse" : ""}`}>
      <div className="marquee-track">
        {[...items, ...items].map((it, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={`${it.key}-${i}`} src={it.src} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" className={`h-44 shrink-0 rounded-xl bg-champagne object-cover ${it.w}`} />
        ))}
      </div>
    </div>
  );
}

/** Two slowly moving rows (video thumbnails / designs). Decorative; pauses on hover and stops for reduced motion. */
export function VideoMarquee() {
  const videoThumbs = mixShorts(14).map((v) => ({ key: v.id, src: v.thumb, w: "w-28" }));
  const designThumbs = designs.filter((d) => d.id !== "dd2").map((d) => ({ key: d.id, src: asset(d.src), w: d.height > d.width ? "w-28" : "w-64" }));
  return (
    <div aria-hidden="true" className="grid gap-4">
      <Row items={videoThumbs} />
      <Row items={designThumbs} reverse />
    </div>
  );
}

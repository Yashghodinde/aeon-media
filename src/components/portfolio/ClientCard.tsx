import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clientHref, industryNames, type ClientProfile } from "@/data/clients";
import { designs } from "@/data/designs";
import { videos } from "@/data/videos";
import { cn } from "@/lib/cn";

const tones = ["bg-champagne", "bg-[#d9ccb8]", "bg-paper"] as const;

/** What we can honestly count for a client. */
export function workCounts(c: ClientProfile) {
  const v = c.videoChannel ? videos.filter((x) => x.channel === c.videoChannel).length : 0;
  const d = c.designIds ? designs.filter((x) => c.designIds!.includes(x.id)).length : 0;
  return { videos: v, designs: d, posts: c.posts.length };
}

/** Typographic cover (no stock or invented imagery). */
export function ClientCard({ client, index = 0, wide = false }: { client: ClientProfile; index?: number; wide?: boolean }) {
  const n = workCounts(client);
  const meta = [n.videos && `${n.videos} ${n.videos === 1 ? "video" : "videos"}`, n.designs && `${n.designs} ${n.designs === 1 ? "design" : "designs"}`, n.posts && `${n.posts} Instagram posts`].filter(Boolean).join(" · ");
  return (
    <article className="group">
      <Link href={clientHref(client.slug)} className="block" aria-label={`${client.name} — ${industryNames(client).join(", ")}`}>
        <div className="overflow-hidden rounded-2xl">
          <div className={cn("relative flex flex-col justify-between p-5 transition-transform duration-700 ease-[var(--aeon-ease)] group-hover:scale-[1.03] sm:p-7", wide ? "aspect-[5/4] lg:aspect-[16/9]" : "aspect-[5/4] sm:aspect-[4/5]", tones[index % tones.length])}>
            <span className="eyebrow text-[0.6875rem] text-charcoal/60">{industryNames(client).join(" · ")}</span>
            <div>
              <h3 className="display-md text-[1.75rem] leading-tight sm:text-[2rem]">{client.name}</h3>
              {client.instagram && <span className="mt-2 inline-block text-sm text-charcoal/70">@{client.instagram.handle}</span>}
            </div>
            <ArrowUpRight aria-hidden="true" className="absolute right-5 top-5 size-5 text-charcoal/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:right-7 sm:top-7" />
          </div>
        </div>
        <p className="mt-4 max-w-md text-sm text-muted md:mt-5">{client.description}</p>
        {meta && <p className="mt-2 text-xs font-semibold text-charcoal/70">{meta}</p>}
      </Link>
    </article>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clientHref, industryNames, type ClientProfile } from "@/data/clients";
import { workCounts } from "./ClientCard";

/** Compact, scannable client row for directories. */
export function ClientRow({ client }: { client: ClientProfile }) {
  const n = workCounts(client);
  const meta = [n.videos && `${n.videos} ${n.videos === 1 ? "video" : "videos"}`, n.designs && `${n.designs} ${n.designs === 1 ? "design" : "designs"}`, n.posts && `${n.posts} Instagram posts`].filter(Boolean).join(" · ");
  return (
    <Link href={clientHref(client.slug)} className="group grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1 border-b border-line py-5 md:py-6">
      <div className="min-w-0">
        <p className="eyebrow text-[0.6875rem] text-muted">{industryNames(client).join(" · ")}</p>
        <h3 className="display-md mt-1 text-[1.5rem] leading-tight transition-transform duration-300 group-hover:translate-x-1 md:text-[1.75rem]">{client.name}</h3>
        <p className="mt-2 line-clamp-2 max-w-xl text-[0.9375rem] text-muted">{client.description}</p>
        {meta && <p className="mt-2 text-xs font-semibold text-charcoal/70">{meta}</p>}
      </div>
      <ArrowUpRight aria-hidden="true" className="mt-1 size-5 shrink-0 text-charcoal/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-charcoal" />
    </Link>
  );
}

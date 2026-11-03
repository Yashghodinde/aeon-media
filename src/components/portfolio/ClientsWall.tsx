import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industryLabels } from "@/data/content";
import { clientHref, clients, usedIndustries } from "@/data/clients";

/** Editorial client index: names grouped by primary industry. Every client is visible and links to its page. */
export function ClientsWall() {
  const groups = usedIndustries()
    .map((k) => ({ key: k, label: industryLabels[k], items: clients.filter((c) => c.industries[0] === k) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-14">
      {groups.map((g) => (
        <section key={g.key} aria-label={g.label}>
          <h3 className="eyebrow flex items-center justify-between border-b border-taupe pb-3 text-muted">
            <span>{g.label}</span>
            <span aria-hidden="true">{String(g.items.length).padStart(2, "0")}</span>
          </h3>
          <ul>
            {g.items.map((c) => (
              <li key={c.slug}>
                <Link href={clientHref(c.slug)} className="group flex min-h-14 items-center justify-between gap-4 border-b border-line py-3">
                  <span className="display-md text-[1.375rem] leading-tight transition-transform duration-300 group-hover:translate-x-1 md:text-[1.5rem]">{c.name}</span>
                  <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-charcoal/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-charcoal" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

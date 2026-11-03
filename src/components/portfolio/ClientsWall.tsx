import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/data/clients";

/** All clients, visible by name (not just links), each leading to its work. */
export function ClientsWall() {
  return (
    <ul className="grid grid-cols-1 border-t border-taupe/60 sm:grid-cols-2 lg:grid-cols-3">
      {clients.map((c) => (
        <li key={c.name} className="border-b border-taupe/60">
          <Link href={c.href} className="group flex min-h-20 items-center justify-between gap-4 py-4 sm:px-2">
            <span>
              <span className="display-md block text-[1.375rem] leading-tight md:text-[1.625rem]">{c.name}</span>
              <span className="mt-1 block text-sm text-muted">{c.detail}</span>
            </span>
            <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-charcoal/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

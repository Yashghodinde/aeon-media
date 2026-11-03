"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { AeonWordmark } from "@/components/ui/AeonWordmark";
import { nav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  // Menu is "open" only for the path it was opened on, so navigating closes it without an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(open) : v;
    setOpenPath(next ? pathname : null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full md:h-20 max-w-[var(--aeon-content-max)] items-center justify-between px-[var(--aeon-gutter)]">
        <Link href="/" aria-label="AEON MEDIA — home" className="-my-3 shrink-0 py-3">
          <AeonWordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative text-sm font-medium tracking-wide after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-charcoal after:transition-transform after:duration-300",
                isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-charcoal px-6 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-[#3d3a33]">
            Start a conversation
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-12 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 overflow-hidden bg-ivory md:hidden"
          >
            <nav aria-label="Mobile" className="pb-safe flex h-full flex-col justify-end px-[var(--aeon-gutter)] pt-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="display-md border-b border-line py-4 text-[1.75rem]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-6 flex items-center gap-3">
                <Link href="/contact" className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-charcoal px-6 text-sm font-semibold text-ivory">
                  Start a conversation
                </Link>
                <button type="button" onClick={() => setOpen(false)} className="inline-flex min-h-12 items-center justify-center rounded-full border border-taupe px-6 text-sm font-semibold">
                  Close
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

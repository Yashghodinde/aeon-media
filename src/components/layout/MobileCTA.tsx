"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** Thumb-reach enquiry pill, mobile only. Appears after the hero; hidden on /contact. */
export function MobileCTA() {
  const pathname = usePathname();
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/contact")) return null;
  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-500 md:hidden ${past ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      <Link
        href="/contact"
        tabIndex={past ? 0 : -1}
        className="pointer-events-auto inline-flex min-h-12 items-center rounded-full bg-charcoal px-7 text-sm font-semibold text-ivory shadow-[0_6px_20px_rgba(41,39,34,0.22)]"
      >
        Start a conversation
      </Link>
    </div>
  );
}

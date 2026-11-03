"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button, TextLink } from "@/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden pb-[var(--aeon-section)] pt-14 md:pt-32">
      <div className="mx-auto grid w-full max-w-[var(--aeon-content-max)] px-[var(--aeon-gutter)]">
        <div className="max-w-4xl">
          <motion.p {...item(0)} className="eyebrow mb-5 text-muted md:mb-8">A creative partner for brands</motion.p>
          <motion.h1 {...item(1)} id="hero-title" className="display-xl">
            Your vision, <em className="italic">brought to life</em> with&nbsp;purpose.
          </motion.h1>
          <motion.p {...item(2)} className="lead mt-6 md:mt-10">
            Creative direction, content and social media support shaped around your brand — so your digital presence feels more considered, consistent and true to what you are building.
          </motion.p>
          <motion.div {...item(3)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-12 md:gap-4">
            <Button href="/work">Explore our work</Button>
            <span className="hidden sm:block"><Button href="/contact" variant="secondary">Tell us about your brand</Button></span>
            <span className="sm:hidden"><TextLink href="/contact">Tell us about your brand</TextLink></span>
          </motion.div>
          <motion.nav {...item(4)} aria-label="Quick links" className="mt-10 flex flex-wrap gap-2 md:mt-14">
            {[["Video & Film", "/work#video"], ["Design & Creative", "/work#design"], ["Clients", "/work/clients"], ["Services", "/services"], ["Packages", "/packages"]].map(([l, h]) => (
              <Link key={h} href={h} className="inline-flex min-h-11 items-center rounded-full border border-taupe/70 px-4 text-sm text-charcoal/80 transition-colors hover:bg-champagne">{l}</Link>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { RATE_NOTE, getPackage, packages } from "@/data/packages";
import { getService } from "@/data/services";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Packages",
  description: "AEON Media packages: Foundation, Growth and Signature, built from our services and shaped around your brand.",
  alternates: { canonical: "/packages/" },
};

export default function PackagesPage() {
  return (
    <>
      <Section labelledBy="packages-h1">
        <Container>
          <SectionHeading as="h1" id="packages-h1" eyebrow="Packages" title="Start where you are. Grow from there." intro="Three ways to work with us, each built from the services you can read about in detail. Every package is shaped around your brand, so quantities and scope are agreed with you." />
        </Container>
      </Section>

      <Section tone="champagne" labelledBy="package-list" compact>
        <Container>
          <h2 id="package-list" className="sr-only">Packages</h2>
          <ul className="grid gap-5 lg:grid-cols-3">
            {packages.map((p, i) => {
              const base = p.includes ? getPackage(p.includes) : undefined;
              return (
                <Reveal as="li" key={p.slug} delay={i * 0.08} className={cn("flex flex-col rounded-2xl p-6 md:p-8", p.highlight ? "bg-charcoal text-ivory" : "bg-ivory")}>
                  <p className={cn("eyebrow", p.highlight ? "text-taupe" : "text-muted")}>{String(i + 1).padStart(2, "0")}{p.highlight ? " · Most chosen" : ""}</p>
                  <h3 className="display-lg mt-3 text-[2.25rem]">{p.name}</h3>
                  <p className="mt-3 text-[1.0625rem]">{p.tagline}</p>
                  <p className={cn("mt-3 text-sm", p.highlight ? "text-ivory/70" : "text-muted")}>{p.idealFor}</p>

                  <div className={cn("mt-6 border-y py-4", p.highlight ? "border-ivory/20" : "border-taupe")}>
                    <p className="font-display text-2xl">{p.rate ?? "Rates shared on enquiry"}</p>
                    <p className={cn("mt-1 text-[0.6875rem]", p.highlight ? "text-ivory/60" : "text-muted")}>{RATE_NOTE}</p>
                  </div>

                  <div className="mt-6 flex-1">
                    {base && <p className="mb-3 text-sm font-semibold">Everything in {base.name}, plus:</p>}
                    <ul className="space-y-2.5">
                      {p.services.map((slug) => {
                        const s = getService(slug)!;
                        return (
                          <li key={slug} className="flex gap-3 text-[0.9375rem]">
                            <Check aria-hidden="true" className={cn("mt-1 size-4 shrink-0", p.highlight ? "text-taupe" : "text-charcoal/50")} />
                            <Link href={`/services/${slug}`} className="underline decoration-taupe/60 underline-offset-4 hover:decoration-current">{s.short}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Link href="/contact" className={cn("mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold", p.highlight ? "bg-ivory text-charcoal" : "bg-charcoal text-ivory")}>
                    Talk to us about {p.name}
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="custom-h">
        <Container className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <h2 id="custom-h" className="display-lg">Need something different?</h2>
            <p className="mt-4 max-w-md text-muted">Packages are a starting point. Pick the services you need and we will shape a plan around them.</p>
            <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center rounded-full border border-taupe px-6 text-sm font-semibold hover:bg-champagne">Build your own</Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="eyebrow text-muted">What is always agreed with you</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line text-[0.9375rem]">
              {["Scope and quantities for each deliverable", "Timelines and revision rounds", "Ad spend and fees, where advertising is included", "How results are reviewed against your objective"].map((x) => <li key={x} className="py-3">{x}</li>)}
            </ul>
            <p className="mt-4 text-xs text-muted">{RATE_NOTE}</p>
          </Reveal>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

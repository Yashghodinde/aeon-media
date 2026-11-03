import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/Button";
import { ClientRow } from "@/components/portfolio/ClientRow";
import { PostRail } from "@/components/portfolio/PostRail";
import { ReelsRail } from "@/components/portfolio/ReelsRail";
import { LongVideoGrid } from "@/components/portfolio/LongVideoGrid";
import { DesignGallery } from "@/components/portfolio/DesignGallery";
import { CTASection } from "@/components/sections/CTASection";
import { clientHref, clients, getClient, industryNames, referencePosts, verifiedPosts } from "@/data/clients";
import { designs } from "@/data/designs";
import { longVideos, shorts } from "@/data/videos";
import { site } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => clients.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getClient(slug);
  if (!c) return {};
  return {
    title: `${c.name} — ${industryNames(c).join(", ")}`,
    description: c.description,
    alternates: { canonical: `${clientHref(c.slug)}/` },
  };
}

export default async function ClientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  const i = clients.indexOf(client);
  const prev = clients[(i - 1 + clients.length) % clients.length];
  const next = clients[(i + 1) % clients.length];
  const related = clients.filter((c) => c.slug !== client.slug && c.industries.some((x) => client.industries.includes(x))).slice(0, 3);

  const clientShorts = client.videoChannel ? shorts.filter((v) => v.channel === client.videoChannel) : [];
  const clientLong = client.videoChannel ? longVideos.filter((v) => v.channel === client.videoChannel) : [];
  const clientDesigns = designs.filter((d) => client.designIds?.includes(d.id));
  const verified = verifiedPosts(client);
  const reference = referencePosts(client);
  const hasOurWork = clientShorts.length + clientLong.length + clientDesigns.length + verified.length > 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${client.name} — AEON Media`,
    description: client.description,
    about: { "@type": "Organization", name: client.name, url: client.websiteUrl, sameAs: client.instagram ? [client.instagram.url] : undefined },
    url: site.url ? `${site.url}${clientHref(client.slug)}/` : undefined,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section>
        <Container>
          <TextLink href="/work/clients">All clients</TextLink>
          <p className="eyebrow mt-8 text-muted md:mt-12">{industryNames(client).join(" · ")}</p>
          <h1 className="display-xl mt-4">{client.name}</h1>
          {client.instagram && <p className="mt-3 text-muted">@{client.instagram.handle}</p>}
          <p className="mt-8 max-w-2xl text-lg md:mt-10">{client.description}</p>
          {(client.offerings || client.servicesProvided) && (
            <dl className="mt-8 grid max-w-2xl gap-6 sm:grid-cols-2">
              {client.servicesProvided && (
                <div><dt className="eyebrow text-muted">What we handled</dt><dd className="mt-2">{client.servicesProvided.join(" · ")}</dd></div>
              )}
              {client.offerings && (
                <div><dt className="eyebrow text-muted">What the brand offers</dt><dd className="mt-2">{client.offerings.join(" · ")}</dd></div>
              )}
            </dl>
          )}
        </Container>
      </Section>

      {hasOurWork && (
        <Section tone="champagne" labelledBy="work-done">
          <Container>
            <h2 id="work-done" className="display-lg">Creative work we handled</h2>
            {clientShorts.length > 0 && (
              <div className="mt-10 md:mt-14">
                <h3 className="display-md">Reels &amp; short-form video</h3>
                <p className="mt-2 text-sm text-muted">{clientShorts.length} Shorts · press play to watch here</p>
                <div className="mt-6"><ReelsRail items={clientShorts} label={`${client.name} Shorts`} /></div>
              </div>
            )}
            {clientLong.length > 0 && (
              <div className="mt-14 md:mt-20">
                <h3 className="display-md">Videos</h3>
                <div className="mt-6"><LongVideoGrid items={clientLong} /></div>
              </div>
            )}
            {clientDesigns.length > 0 && (
              <div className="mt-14 md:mt-20">
                <h3 className="display-md">Design</h3>
                <p className="mt-2 text-sm text-muted">Tap any piece to see it full size.</p>
                <div className="mt-6"><DesignGallery items={clientDesigns} /></div>
              </div>
            )}
          </Container>
        </Section>
      )}

      {reference.length > 0 && (
        <Section labelledBy="brand-content">
          <Container>
            <h2 id="brand-content" className="display-lg">From the brand&rsquo;s Instagram</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {client.name}&rsquo;s own recent public posts, shown so you can see the brand. This is the client&rsquo;s content and is not presented as AEON Media&rsquo;s work.
            </p>
            <div className="mt-8"><PostRail posts={reference} brand={client.name} /></div>
          </Container>
        </Section>
      )}

      {(client.instagram || client.websiteUrl) && (
        <Section tone={hasOurWork ? "ivory" : "champagne"} labelledBy="explore">
          <Container>
            <h2 id="explore" className="display-md">Explore the brand</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {client.instagram && (
                <a href={client.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-charcoal px-6 text-sm font-semibold text-ivory">
                  Instagram @{client.instagram.handle} <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              )}
              {client.websiteUrl && (
                <a href={client.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-taupe px-6 text-sm font-semibold hover:bg-champagne">
                  Official website <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              )}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <nav aria-label="Client navigation" className="grid gap-6 border-y border-line py-6 sm:grid-cols-2">
            <Link href={clientHref(prev.slug)} className="block min-h-11">
              <span className="eyebrow text-muted">Previous</span>
              <span className="display-md mt-1 block text-[1.375rem]">{prev.name}</span>
            </Link>
            <Link href={clientHref(next.slug)} className="block min-h-11 sm:text-right">
              <span className="eyebrow text-muted">Next</span>
              <span className="display-md mt-1 block text-[1.375rem]">{next.name}</span>
            </Link>
          </nav>
          <p className="mt-8 text-sm text-muted">See how we can help your brand: <Link href="/services" className="underline underline-offset-4">our services</Link>.</p>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="champagne">
          <Container>
            <h2 className="display-md">More in {industryNames(client)[0]}</h2>
            <ul className="mt-6 grid gap-x-14 border-t border-line md:grid-cols-2">{related.map((c) => <li key={c.slug}><ClientRow client={c} /></li>)}</ul>
          </Container>
        </Section>
      )}
      <CTASection title="Have a similar project in mind? Let’s bring your vision to life." />
    </>
  );
}

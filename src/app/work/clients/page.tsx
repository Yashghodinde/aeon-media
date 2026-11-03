import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientDirectory } from "@/components/portfolio/ClientDirectory";
import { CTASection } from "@/components/sections/CTASection";
import { clients } from "@/data/clients";

export const metadata: Metadata = {
  title: "Clients",
  description: "The brands and clients AEON Media has worked with, by industry.",
  alternates: { canonical: "/work/clients/" },
};

export default function ClientsPage() {
  return (
    <>
      <Section labelledBy="clients-h1">
        <Container>
          <SectionHeading as="h1" id="clients-h1" eyebrow="Clients" title={`${clients.length} clients, by industry.`} intro="Open a client to see who they are and the creative work behind them." />
          <div className="mt-10 md:mt-16"><ClientDirectory /></div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

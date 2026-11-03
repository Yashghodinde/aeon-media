import { Section, Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({ title = "Ready to bring your vision to life?" }: { title?: string }) {
  return (
    <Section tone="charcoal" labelledBy="cta-title">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 id="cta-title" className="display-lg">{title}</h2>
          <p className="mt-5 max-w-xl text-base text-ivory/70 md:mt-8 md:text-lg">Tell us what you are building. We will take the time to understand your brand, your goals and the support you are looking for.</p>
          <div className="mt-8 md:mt-12"><Button href="/contact" variant="light">Start a conversation</Button></div>
        </Reveal>
      </Container>
    </Section>
  );
}

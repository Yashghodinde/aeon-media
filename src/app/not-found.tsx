import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <p className="eyebrow mb-4 text-muted">Page not found</p>
        <h1 className="display-lg max-w-2xl">This page isn&apos;t here — but your next idea can be.</h1>
        <p className="lead mt-5">The link may be out of date. Head back home or see what we&apos;ve been working on.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/work" variant="secondary">Explore our work</Button>
        </div>
      </Container>
    </Section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/data/content";

export function ProcessSteps() {
  return (
    <ol className="grid gap-x-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3">
      {process.map((s, i) => (
        <Reveal as="li" key={s.title} delay={(i % 3) * 0.08} className="grid grid-cols-[3rem_1fr] border-t border-taupe py-5 sm:block sm:py-0 sm:pt-6">
          <span className="font-display text-3xl leading-none text-taupe sm:text-5xl">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="display-md text-[1.375rem] sm:mt-4 sm:text-[1.75rem]">{s.title}</h3>
          <p className="col-start-2 mt-1.5 max-w-xs text-[0.9375rem] text-muted sm:mt-3 sm:text-base">{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

import { cn } from "@/lib/cn";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[var(--aeon-content-max)] px-[var(--aeon-gutter)]", className)}>{children}</div>;
}

export function Section({
  tone = "ivory",
  className,
  children,
  id,
  labelledBy,
  compact,
}: {
  tone?: "ivory" | "champagne" | "charcoal" | "paper";
  className?: string;
  children: React.ReactNode;
  id?: string;
  labelledBy?: string;
  compact?: boolean;
}) {
  const tones = {
    ivory: "bg-ivory",
    champagne: "bg-champagne",
    paper: "bg-paper",
    charcoal: "bg-charcoal text-ivory on-dark",
  } as const;
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(compact ? "py-[calc(var(--aeon-section)*0.8)]" : "py-[var(--aeon-section)]", tones[tone], className)}>
      {children}
    </section>
  );
}

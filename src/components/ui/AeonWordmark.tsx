import { cn } from "@/lib/cn";

type Props = {
  /** "dark" = charcoal pill + ivory letters (default). "soft" = champagne pill + charcoal letters. */
  variant?: "dark" | "soft";
  /** Use on charcoal backgrounds: outer letters turn ivory and the pill inverts to ivory. */
  onDark?: boolean;
  className?: string;
};

/**
 * AEON MEDIA wordmark. One continuous rounded highlight sits behind the exact
 * sequence "ON ME" (the inter-word space is inside it). All letters share one
 * baseline, size and tracking. Rendered as live text so it stays crisp.
 */
export function AeonWordmark({ variant = "dark", onDark = false, className }: Props) {
  const pill = onDark
    ? "bg-ivory text-charcoal"
    : variant === "soft"
      ? "bg-champagne text-charcoal"
      : "bg-charcoal text-ivory";

  return (
    <span
      role="img"
      aria-label="AEON MEDIA"
      className={cn(
        "inline-flex items-center whitespace-nowrap font-sans font-bold uppercase leading-none tracking-[0.16em]",
        "text-[clamp(0.95rem,4.4vw,1.25rem)]",
        onDark ? "text-ivory" : "text-charcoal",
        className,
      )}
    >
      <span aria-hidden="true">AE</span>
      <span
        aria-hidden="true"
        className={cn(
          "mx-0 inline-block rounded-[0.32em] py-[0.42em] pl-[0.5em] pr-[0.34em]",
          pill,
        )}
      >
        ON ME
      </span>
      <span aria-hidden="true" className="pl-[0.16em]">DIA</span>
    </span>
  );
}

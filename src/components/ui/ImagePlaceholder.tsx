import { cn } from "@/lib/cn";

const compactRatios = { portrait: "aspect-[5/4] sm:aspect-[4/5]", landscape: "aspect-[5/4] sm:aspect-[4/3]", square: "aspect-[5/4] sm:aspect-square", wide: "aspect-[4/3] sm:aspect-[16/10]" } as const;
const ratios = { portrait: "aspect-[4/5]", landscape: "aspect-[4/3]", square: "aspect-square", wide: "aspect-[16/10]" } as const;

/**
 * Clearly labelled stand-in for real project media. Never presented as client work.
 * Swap for <Image> once approved assets exist.
 */
export function ImagePlaceholder({
  ratio = "portrait",
  compact = false,
  label = "Placeholder · project image to be supplied",
  tone = "champagne",
  className,
}: {
  ratio?: keyof typeof ratios;
  /** Mobile: use a shorter crop so the image does not dominate the screen. */
  compact?: boolean;
  label?: string;
  tone?: "champagne" | "taupe" | "paper";
  className?: string;
}) {
  const tones = { champagne: "bg-champagne", taupe: "bg-[#d9ccb8]", paper: "bg-paper" } as const;
  return (
    <div className={cn("relative flex w-full items-end overflow-hidden", (compact ? compactRatios : ratios)[ratio], tones[tone], className)} role="img" aria-label={label}>
      <span className="m-4 text-[0.625rem] sm:m-5 sm:text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-charcoal/60">{label}</span>
    </div>
  );
}

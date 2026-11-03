import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  variant?: "primary" | "secondary" | "light";
  children: React.ReactNode;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 min-h-11 md:min-h-12 md:px-7 md:py-3.5";
const variants = {
  primary: "bg-charcoal text-ivory hover:bg-[#3d3a33]",
  secondary: "border border-taupe text-charcoal hover:bg-champagne",
  light: "bg-ivory text-charcoal hover:bg-champagne",
} as const;

export function Button({ href, variant = "primary", children, className }: Props) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn("group relative inline-flex items-center gap-2 border-b border-taupe pb-1 text-sm before:absolute before:-inset-x-1 before:-inset-y-3 before:content-['']  font-semibold tracking-wide transition-colors hover:border-charcoal", className)}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

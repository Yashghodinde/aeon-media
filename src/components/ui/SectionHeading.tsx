import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <p className="eyebrow mb-4 text-muted md:mb-6">{eyebrow}</p>}
      <Tag id={id} className={Tag === "h1" ? "display-xl" : "display-lg"}>
        {title}
      </Tag>
      {intro && <p className="lead mt-5 md:mt-8">{intro}</p>}
    </div>
  );
}

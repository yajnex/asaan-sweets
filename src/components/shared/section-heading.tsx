import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-6",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p
        className={cn(
          "text-[10px] font-semibold uppercase tracking-[0.32em]",
          light ? "text-cream/70" : "text-clay",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-balance font-serif text-[40px] font-semibold leading-[1] md:text-[56px]",
          light ? "text-cream" : "text-brown",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-balance text-base leading-8 md:text-[18px]",
          light ? "text-cream/78" : "text-clay",
        )}
      >
        {description}
      </p>
    </div>
  );
}

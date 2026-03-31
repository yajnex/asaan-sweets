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
        "max-w-[680px] space-y-3 md:space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p
        className={cn(
          "text-[10px] font-semibold uppercase tracking-[0.3em] md:text-[11px]",
          light ? "text-cream/70" : "text-clay",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-balance font-serif text-[32px] font-semibold leading-[0.96] md:text-[52px]",
          light ? "text-cream" : "text-brown",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-balance text-[15px] leading-6 md:text-[17px] md:leading-7",
          light ? "text-cream/78" : "text-clay",
        )}
      >
        {description}
      </p>
    </div>
  );
}

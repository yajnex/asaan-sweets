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
        "max-w-[720px] space-y-4 md:space-y-6",
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
          "text-balance font-serif text-[36px] font-semibold leading-[0.96] md:text-[64px]",
          light ? "text-cream" : "text-brown",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-balance text-[15px] leading-7 md:text-[18px] md:leading-8",
          light ? "text-cream/78" : "text-clay",
        )}
      >
        {description}
      </p>
    </div>
  );
}

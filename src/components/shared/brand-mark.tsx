import Image from "next/image";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: "nav" | "hero" | "footer";
  centered?: boolean;
  className?: string;
};

const sizeClasses = {
  nav: "h-14 w-14 md:h-[72px] md:w-[72px]",
  hero: "h-32 w-32 md:h-40 md:w-40",
  footer: "h-24 w-24 md:h-28 md:w-28",
} as const;

export function BrandMark({
  size = "nav",
  centered = false,
  className,
}: BrandMarkProps) {
  return (
    <div className={cn("flex", centered && "justify-center", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-full border border-gold/30 bg-[#fff8ea] shadow-[0_20px_48px_rgba(44,27,18,0.16)]",
          sizeClasses[size],
        )}
      >
        <Image
          src={site.logoImage}
          alt={`${site.name} logo`}
          fill
          priority={size === "hero"}
          sizes={
            size === "hero"
              ? "(min-width: 768px) 160px, 128px"
              : size === "footer"
                ? "(min-width: 768px) 112px, 96px"
                : "(min-width: 768px) 80px, 64px"
          }
          className="object-cover"
        />
      </div>
    </div>
  );
}

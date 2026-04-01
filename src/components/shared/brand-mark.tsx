import Image from "next/image";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  size?: "nav" | "hero" | "footer";
  centered?: boolean;
  className?: string;
};

const sizeClasses = {
  nav: "h-20 w-20 md:h-24 md:w-24",
  hero: "h-48 w-48 md:h-64 md:w-64 lg:h-[19rem] lg:w-[19rem]",
  footer: "h-24 w-24 md:h-28 md:w-28",
} as const;

const frameClasses = {
  nav: "border-[#b8891d]/45 bg-[linear-gradient(180deg,#fffaf0,#f5e7c8)] ring-4 ring-white/85 shadow-[0_28px_60px_rgba(44,27,18,0.2)]",
  hero: "border-[#b8891d]/40 bg-[linear-gradient(180deg,#fff9ef,#f6e8c8)] ring-4 ring-white/80 shadow-[0_40px_96px_rgba(44,27,18,0.24)]",
  footer: "border-gold/30 bg-[#fff8ea] shadow-[0_20px_48px_rgba(44,27,18,0.16)]",
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
          "relative overflow-hidden rounded-full border",
          frameClasses[size],
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
              ? "(min-width: 1024px) 304px, (min-width: 768px) 256px, 192px"
              : size === "footer"
                ? "(min-width: 768px) 112px, 96px"
                : "(min-width: 768px) 96px, 80px"
          }
          className="object-cover"
        />
      </div>
    </div>
  );
}

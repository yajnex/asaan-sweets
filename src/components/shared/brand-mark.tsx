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
  hero: "h-32 w-32 md:h-40 md:w-40",
  footer: "h-24 w-24 md:h-28 md:w-28",
} as const;

const frameClasses = {
  nav: "border-[#b8891d]/45 bg-[linear-gradient(180deg,#fffaf0,#f5e7c8)] ring-4 ring-white/85 shadow-[0_28px_60px_rgba(44,27,18,0.2)]",
  hero: "border-gold/30 bg-[#fff8ea] shadow-[0_20px_48px_rgba(44,27,18,0.16)]",
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
              ? "(min-width: 768px) 160px, 128px"
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

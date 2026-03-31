import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const sizeClasses = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  standard: "",
} as const;

export function GallerySection() {
  return (
    <section className="section-space bg-[#f4ecde]">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A feed of craft, colour, and celebration-ready sweets"
            description="The gallery is designed like an Instagram edit, but grounded in the real rituals of prep, finishing, plating, and gifting."
            align="center"
          />
        </Reveal>

        <div className="grid auto-rows-[224px] gap-6 md:grid-cols-3">
          {site.gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-[32px] border border-brown/8 bg-brown shadow-[0_18px_40px_rgba(44,27,18,0.1)]",
                  sizeClasses[item.size],
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(24,14,10,0.84))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-[32px] font-semibold leading-none text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-cream/78">
                    {item.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

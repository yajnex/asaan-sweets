"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/shared/reveal";
import { SafeImage } from "@/components/shared/safe-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const railCardClasses = {
  wide: "h-[220px] w-[280px] sm:w-[360px] md:h-[280px] md:w-[440px]",
  tall: "h-[280px] w-[220px] sm:w-[260px] md:h-[340px] md:w-[300px]",
  standard: "h-[220px] w-[220px] sm:w-[300px] md:h-[280px] md:w-[340px]",
} as const;

const gridCardClasses = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  standard: "",
} as const;

type GalleryItem = (typeof site.gallery)[number];

function GalleryRail({
  items,
  reverse = false,
  duration = 32,
}: {
  items: GalleryItem[];
  reverse?: boolean;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }
        }
        className="flex w-max gap-5"
      >
        {track.map((item, index) => (
          <motion.article
            key={`${item.title}-${index}`}
            whileHover={shouldReduceMotion ? undefined : { y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "group relative overflow-hidden rounded-[32px] border border-brown/8 bg-brown shadow-[0_18px_40px_rgba(44,27,18,0.1)]",
              railCardClasses[item.size],
            )}
          >
            <SafeImage
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 85vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(24,14,10,0.86))]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <h3 className="font-serif text-[28px] font-semibold leading-[0.98] text-cream md:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-cream/78">
                {item.caption}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

export function GallerySection() {
  const shouldReduceMotion = useReducedMotion();
  const firstRow = site.gallery.slice(0, 3);
  const secondRow = site.gallery.slice(3);

  return (
    <section className="section-space-tight bg-sand/30">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A moving edit of craft, colour, and celebration-ready trays"
            align="center"
          />
        </Reveal>

        {shouldReduceMotion ? (
          <div className="grid auto-rows-[200px] gap-4 md:grid-cols-3">
            {site.gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-[32px] border border-brown/8 bg-brown shadow-[0_18px_40px_rgba(44,27,18,0.1)]",
                    gridCardClasses[item.size],
                  )}
                >
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(24,14,10,0.84))]" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="font-serif text-[24px] font-semibold leading-none text-cream md:text-[28px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-5 text-cream/78">
                      {item.caption}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="relative space-y-4 overflow-hidden rounded-[32px] border border-brown/10 bg-[linear-gradient(180deg,rgba(255,250,243,0.7),rgba(248,244,236,0.35))] p-3 shadow-[0_28px_56px_rgba(44,27,18,0.08)] md:p-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f4ecde] via-[#f4ecde]/82 to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f4ecde] via-[#f4ecde]/82 to-transparent md:w-24" />
            <GalleryRail items={firstRow} duration={34} />
            <GalleryRail items={secondRow} reverse duration={38} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

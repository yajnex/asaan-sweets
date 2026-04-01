import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandMark } from "@/components/shared/brand-mark";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function AboutPreviewSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <Reveal>
          <div className="surface-panel gold-sheen relative overflow-hidden rounded-[40px] px-6 py-7 sm:px-8 sm:py-8 md:px-10 md:py-10">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_62%)]" />
            <div className="relative space-y-8">
              <div className="flex items-center gap-4">
                <BrandMark size="footer" />
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-[linear-gradient(135deg,rgba(250,235,188,0.82),rgba(212,175,55,0.28))] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#7b5c39]">
                    Since 1987
                  </span>
                  <p className="max-w-sm font-serif text-[30px] leading-[1.02] text-brown md:text-[38px]">
                    Slow-cooked batches, hand-finished fresh each day.
                  </p>
                </div>
              </div>

              <p className="max-w-xl text-[15px] leading-7 text-clay md:text-[17px]">
                Every tray is built for the family table first: familiar flavour,
                careful roasting, and the kind of finish people return for by name.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[22px] border border-brown/8 bg-white/72 px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">
                    Fresh
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brown">
                    Prepared daily in small batches.
                  </p>
                </div>
                <div className="rounded-[22px] border border-brown/8 bg-white/72 px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">
                    Traditional
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brown">
                    Recipes kept familiar and consistent.
                  </p>
                </div>
                <div className="rounded-[22px] border border-brown/8 bg-white/72 px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">
                    Trusted
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brown">
                    Made for repeat orders and gifting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Our Story"
              title="Crafted with the warmth of a neighbourhood mithai house"
              description={site.story}
            />
            <div className="space-y-3">
              {site.craftPoints.map((point) => (
                <div
                  key={point}
                  className="luxury-panel flex items-center gap-3 rounded-[22px] px-5 py-3.5 text-sm text-clay"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(250,235,188,0.7),rgba(212,175,55,0.24))] text-gold">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                  </span>
                  {point}
                </div>
              ))}
            </div>
            <div className="grid gap-4 border-t border-brown/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="font-serif text-[34px] font-semibold leading-none text-brown">1987</p>
                <p className="mt-1.5 text-sm leading-6 text-clay">
                  First recipes served across the neighbourhood counter.
                </p>
              </div>
              <div>
                <p className="font-serif text-[34px] font-semibold leading-none text-brown">Daily</p>
                <p className="mt-1.5 text-sm leading-6 text-clay">
                  Fresh production from the first batch of the morning.
                </p>
              </div>
              <div>
                <p className="font-serif text-[34px] font-semibold leading-none text-brown">Pure</p>
                <p className="mt-1.5 text-sm leading-6 text-clay">
                  Ingredients chosen for trust, flavour, and gifting confidence.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function AboutPreviewSection() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-brown/8 bg-sand/55 shadow-[0_28px_72px_rgba(44,27,18,0.12)]">
            <Image
              src="/images/craft-atelier.svg"
              alt="Asaan Sweets craft and preparation"
              width={960}
              height={1080}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,27,18,0.02),transparent_35%,rgba(44,27,18,0.34))]" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <div className="rounded-[24px] border border-white/12 bg-brown/34 px-5 py-4 backdrop-blur-sm md:max-w-[68%]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/70">
                  Since 1987
                </p>
                <p className="mt-2 font-serif text-[28px] font-semibold leading-[1] text-cream md:text-[34px]">
                  The kitchen still runs on patience, not shortcuts.
                </p>
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

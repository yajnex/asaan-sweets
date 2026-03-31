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
      <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#efe4d2] shadow-[0_28px_72px_rgba(44,27,18,0.12)]">
            <Image
              src="/images/craft-atelier.svg"
              alt="Asaan Sweets craft and preparation"
              width={960}
              height={1080}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Our Story"
              title="Crafted with the patience of a heritage kitchen"
              description={site.story}
            />
            <div className="space-y-4">
              {site.craftPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-4 rounded-[24px] border border-brown/10 bg-white/64 px-6 py-4 text-sm text-clay"
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {point}
                </div>
              ))}
            </div>
            <div className="grid gap-6 border-t border-brown/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-serif text-[40px] font-semibold leading-none text-brown">1987</p>
                <p className="mt-2 text-sm leading-6 text-clay">
                  First recipes served across the neighbourhood counter.
                </p>
              </div>
              <div>
                <p className="font-serif text-[40px] font-semibold leading-none text-brown">Daily</p>
                <p className="mt-2 text-sm leading-6 text-clay">
                  Fresh production from the first batch of the morning.
                </p>
              </div>
              <div>
                <p className="font-serif text-[40px] font-semibold leading-none text-brown">Pure</p>
                <p className="mt-2 text-sm leading-6 text-clay">
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

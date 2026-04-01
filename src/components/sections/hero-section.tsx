import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { BrandMark } from "@/components/shared/brand-mark";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="bg-[#f8f4ec] pt-24 sm:pt-28">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-12">
          <Reveal className="max-w-2xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8a6a26]">
                  Since 1987
                </p>
                <h1 className="max-w-xl font-serif text-4xl leading-[1.02] text-[#2c1b12] text-balance sm:text-5xl lg:text-6xl">
                  38 Years of Sweet Legacy
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[#4d3a2d] sm:text-xl">
                  Authentic handmade sweets since 1987
                </p>
                <p className="text-base font-medium tracking-[0.08em] text-[#7b5c39] uppercase">
                  Fresh. Traditional. Trusted.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
                  <a href={getWhatsAppLink()} aria-label="Order on WhatsApp">
                    <MessageCircle className="h-5 w-5" />
                    Order on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/menu">
                    View Menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-last lg:order-none">
            <div className="relative mx-auto flex min-h-[360px] w-full max-w-[520px] items-center justify-center lg:min-h-[460px] lg:justify-end">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,249,235,0.98)_0%,rgba(245,233,205,0.54)_40%,rgba(248,244,236,0)_72%)]" />
              <div className="absolute inset-[11%] rounded-full border border-[#d4af37]/16" />
              <div className="absolute inset-[19%] rounded-full border border-white/58" />
              <div className="absolute inset-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.06)_48%,transparent_76%)] blur-2xl" />
              <div className="absolute left-2 top-[14%] hidden rounded-full border border-[#d4af37]/24 bg-white/76 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7b5c39] shadow-[0_14px_28px_rgba(44,27,18,0.08)] md:block">
                Fresh Daily
              </div>
              <div className="absolute right-0 top-[26%] hidden rounded-full border border-[#d4af37]/24 bg-white/76 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7b5c39] shadow-[0_14px_28px_rgba(44,27,18,0.08)] md:block">
                Heritage Recipes
              </div>
              <div className="absolute bottom-[12%] left-1/2 hidden -translate-x-1/2 rounded-full border border-[#d4af37]/24 bg-white/76 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7b5c39] shadow-[0_14px_28px_rgba(44,27,18,0.08)] md:block">
                Trusted Since 1987
              </div>
              <div className="relative z-10">
                <span className="pointer-events-none absolute inset-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.34)_0%,rgba(212,175,55,0.12)_48%,transparent_74%)] blur-3xl md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]" />
                <BrandMark size="hero" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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
            <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center lg:justify-end">
              <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(255,251,243,0.98)_0%,rgba(249,238,211,0.88)_44%,rgba(244,226,182,0.34)_66%,rgba(248,244,236,0)_84%)]" />
              <div className="absolute inset-[4%] rounded-full border border-[#d4af37]/18" />
              <div className="absolute inset-[14%] rounded-full border border-[#b8891d]/14" />
              <div className="absolute inset-[23%] rounded-full border border-[#2c1b12]/7" />
              <div className="absolute left-1/2 top-[18%] h-24 w-24 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,243,203,0.5),transparent_72%)] blur-2xl md:h-32 md:w-32" />
              <div className="absolute bottom-[16%] left-[14%] h-16 w-16 rounded-full border border-[#d4af37]/20 bg-white/35 blur-[1px]" />
              <div className="absolute right-[12%] top-[22%] h-12 w-12 rounded-full border border-[#2c1b12]/8 bg-[#fffaf0]/40 blur-[1px]" />
              <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-[#d4af37]/30 bg-white/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7b5c39] shadow-[0_14px_30px_rgba(44,27,18,0.08)] backdrop-blur-md md:px-5">
                Heritage Seal
              </div>
              <div className="relative z-10">
                <span className="pointer-events-none absolute inset-1/2 -z-10 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.42)_0%,rgba(212,175,55,0.18)_42%,transparent_72%)] blur-3xl md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem]" />
                <span className="pointer-events-none absolute inset-1/2 -z-10 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70" />
                <BrandMark size="hero" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

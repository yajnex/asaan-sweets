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
            <div className="relative mx-auto flex aspect-[1/1.08] w-full max-w-[560px] items-center justify-center lg:justify-end">
              <div className="absolute inset-x-[10%] inset-y-[6%] rounded-t-[999px] rounded-b-[40px] border border-[#d4af37]/18 bg-[linear-gradient(180deg,rgba(255,251,243,0.96),rgba(248,236,208,0.82)_56%,rgba(247,239,225,0.44))] shadow-[0_34px_80px_rgba(44,27,18,0.12)]" />
              <div className="absolute inset-x-[14%] inset-y-[10%] rounded-t-[999px] rounded-b-[34px] border border-white/70" />
              <div className="absolute inset-x-[22%] top-[17%] bottom-[19%] rounded-full bg-[radial-gradient(circle,rgba(255,248,226,1)_0%,rgba(243,225,175,0.58)_46%,rgba(248,244,236,0)_74%)]" />
              <div className="absolute inset-x-[27%] top-[24%] h-[32%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.32),transparent_72%)] blur-3xl" />
              <div className="absolute inset-x-[22%] top-[16%] h-[52%] rounded-full border border-[#d4af37]/16" />
              <div className="absolute inset-x-[26%] top-[20%] h-[44%] rounded-full border border-white/60" />
              <div className="absolute bottom-[15%] left-1/2 h-px w-40 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.86),transparent)] md:w-52" />
              <div className="absolute bottom-[9.5%] left-1/2 -translate-x-1/2 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b5c39]">
                Trusted Since 1987
              </div>
              <div className="relative z-10">
                <span className="pointer-events-none absolute inset-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.38)_0%,rgba(212,175,55,0.14)_46%,transparent_74%)] blur-3xl md:h-[26rem] md:w-[26rem] lg:h-[30rem] lg:w-[30rem]" />
                <BrandMark size="hero" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

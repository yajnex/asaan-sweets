import Image from "next/image";
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
        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,440px)] lg:gap-12">
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
            <div className="relative flex flex-col items-center gap-4 lg:items-end lg:gap-6">
              <div className="relative z-10">
                <span className="pointer-events-none absolute inset-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.32)_0%,rgba(212,175,55,0.16)_42%,transparent_72%)] blur-3xl md:h-64 md:w-64 lg:h-72 lg:w-72" />
                <BrandMark size="hero" />
              </div>

              <div className="relative w-full max-w-[460px] overflow-hidden rounded-[28px] border border-[#d4af37]/20 bg-white/80 shadow-[0_28px_64px_rgba(44,27,18,0.14)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_36%)]" />
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/products/motichoor-laddu.svg"
                    alt="Freshly prepared motichoor laddu from Asaan Sweets"
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, (min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/shared/brand-mark";
import { SafeImage } from "@/components/shared/safe-image";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-brown pt-24 text-cream md:pt-28">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-platter.svg"
          alt="Assorted traditional Indian sweets from Asaan Sweets"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_22%),linear-gradient(115deg,rgba(20,12,8,0.78),rgba(20,12,8,0.48),rgba(20,12,8,0.74))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#f8f4ec]" />
      </div>

      <div className="container-shell relative flex min-h-[70vh] items-center py-10 md:py-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 1, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[640px] space-y-6 md:space-y-7"
          >
            <div className="flex items-center gap-3">
              <BrandMark size="nav" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/76 md:text-[11px]">
                Heritage Mithai House
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h1 className="text-balance font-serif text-[40px] font-semibold leading-[0.92] sm:text-[52px] md:text-[72px]">
                38 Years of Sweet Legacy
              </h1>
              <p className="max-w-[520px] text-balance text-[16px] leading-7 text-cream/90 md:text-[19px] md:leading-8">
                Authentic handmade sweets since 1987
              </p>
              <p className="max-w-[620px] text-balance text-[15px] leading-6 text-cream/78 md:text-[17px] md:leading-7">
                Fresh mithai, savouries, and gifting favourites prepared with
                familiar recipes and packed for direct, fast WhatsApp ordering.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gold" className="w-full sm:w-auto">
                <a href={getWhatsAppLink()}>
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white/18 bg-white/12 text-cream hover:border-white/28 hover:bg-white/16 hover:text-cream sm:w-auto"
              >
                <Link href="/menu">
                  View Menu
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid max-w-[560px] gap-2.5 sm:grid-cols-2">
              {site.heroBadges.map((badge) => (
                <Badge key={badge} variant="outline" className="justify-center sm:justify-start">
                  <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                  {badge}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 1, y: 14, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="hidden lg:block"
          >
            <div className="overflow-hidden rounded-[32px] border border-white/16 bg-white/8 p-3 shadow-[0_28px_64px_rgba(0,0,0,0.22)] backdrop-blur-sm">
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-[24px]">
                <SafeImage
                  src="/images/hero-platter.svg"
                  alt="Asaan Sweets signature assortment"
                  fill
                  priority
                  sizes="400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,27,18,0.04),transparent_42%,rgba(20,12,8,0.76))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/70">
                    Fresh Today
                  </p>
                  <p className="mt-2 font-serif text-[28px] font-semibold leading-[1] text-cream">
                    Traditional sweets, savouries, and celebration boxes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

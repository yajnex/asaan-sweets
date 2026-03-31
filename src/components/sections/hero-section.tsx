"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/shared/brand-mark";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brown text-cream">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-platter.svg"
          alt="Assorted traditional Indian sweets from Asaan Sweets"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.24),transparent_24%),linear-gradient(115deg,rgba(20,12,8,0.94),rgba(20,12,8,0.64),rgba(20,12,8,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#2c1b12]/34 to-[#f8f4ec]" />
      </div>

      <div className="container-shell relative flex min-h-[100svh] w-full items-center justify-center pb-24 pt-28 md:pb-28 md:pt-32">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-[840px] flex-col items-center gap-8 text-center md:gap-10"
        >
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <BrandMark size="hero" centered />
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/72 md:text-[11px]">
              Heritage Mithai House
            </p>
            <h1 className="text-balance font-serif text-[44px] font-semibold leading-[0.9] sm:text-[56px] md:text-[96px]">
              38 Years of Sweet Legacy
            </h1>
            <p className="mx-auto max-w-[560px] text-balance text-[16px] leading-7 text-cream/84 md:text-[20px] md:leading-8">
              Authentic handmade sweets since 1987
            </p>
            <p className="mx-auto max-w-[640px] text-balance text-[15px] leading-7 text-cream/72 md:text-[18px] md:leading-8">
              Fresh mithai, savouries, and gifting favourites prepared with
              familiar recipes and packed for modern ordering on WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
          >
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
              className="w-full border-white/16 bg-white/10 text-cream hover:border-white/24 hover:bg-white/14 hover:text-cream sm:w-auto"
            >
              <Link href="/menu">
                View Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="grid w-full max-w-[720px] gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {site.heroBadges.map((badge) => (
              <Badge key={badge} variant="outline" className="justify-center">
                <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

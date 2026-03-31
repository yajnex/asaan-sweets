"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/shared/brand-mark";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_24%),linear-gradient(115deg,rgba(20,12,8,0.92),rgba(20,12,8,0.58),rgba(20,12,8,0.8))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#2c1b12]/34 to-[#f8f4ec]" />
      </div>

      <div className="container-shell relative flex min-h-[100svh] w-full items-center justify-center pb-24 pt-28 md:pb-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-[760px] flex-col items-center gap-8 text-center md:gap-10"
        >
          <BrandMark size="hero" centered />

          <div className="space-y-4 md:space-y-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/72 md:text-[11px]">
              Heritage Mithai Since 1987
            </p>
            <h1 className="text-balance font-serif text-[44px] font-semibold leading-[0.92] sm:text-[52px] md:text-[88px]">
              38 Years of Sweet Legacy
            </h1>
            <p className="text-balance max-w-[620px] text-[15px] leading-7 text-cream/82 md:text-[18px] md:leading-8">
              Handcrafted Indian sweets and savouries, prepared fresh daily and
              delivered with gift-ready care. Order in seconds on WhatsApp.
            </p>
          </div>

          <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Button asChild size="lg" variant="gold" className="w-full sm:w-auto">
              <a href={getWhatsAppLink()}>
                <MessageCircle className="h-4 w-4" />
                Start WhatsApp Order
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/menu">
                Browse Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid w-full max-w-[560px] gap-3 sm:grid-cols-2">
            {site.heroBadges.map((badge) => (
              <Badge key={badge} variant="outline" className="justify-center">
                <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

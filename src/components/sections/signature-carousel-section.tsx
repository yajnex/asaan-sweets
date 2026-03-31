"use client";

import Link from "next/link";
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import type { Product } from "@/data/products";
import { Reveal } from "@/components/shared/reveal";
import { SafeImage } from "@/components/shared/safe-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type SignatureCarouselSectionProps = {
  products: Product[];
};

export function SignatureCarouselSection({
  products,
}: SignatureCarouselSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeProduct = products[activeIndex] ?? products[0];
  const progress = products.length > 0 ? ((activeIndex + 1) / products.length) * 100 : 0;

  const advanceSlide = useEffectEvent(() => {
    if (products.length === 0) {
      return;
    }

    startTransition(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    });
  });

  useEffect(() => {
    if (shouldReduceMotion || isPaused || products.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      advanceSlide();
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused, products.length, shouldReduceMotion]);

  if (!activeProduct) {
    return null;
  }

  const setSlide = (index: number) => {
    const nextIndex = (index + products.length) % products.length;
    startTransition(() => {
      setActiveIndex(nextIndex);
    });
  };

  return (
    <section className="section-space-tight">
      <div className="container-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.94fr,1.06fr] lg:items-center">
            <div className="order-2 space-y-8 lg:order-1">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Signature Showcase"
                  title="A moving shelf of the house signatures"
                  description="A curated carousel of sweets customers ask for by name. Browse the favourites, then move straight into WhatsApp ordering."
                />
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="/menu">
                    View Full Menu
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-brown/10 bg-white/70 p-6 shadow-[0_28px_70px_rgba(44,27,18,0.08)] md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.id}
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, y: 24, scale: 0.985 }
                    }
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 1, y: 0, scale: 1 }
                    }
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, y: -16, scale: 0.992 }
                    }
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="gold">{activeProduct.badge}</Badge>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-clay">
                        {activeProduct.price}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-serif text-[36px] font-semibold leading-[0.96] text-brown md:text-[48px]">
                        {activeProduct.name}
                      </h3>
                      <p className="max-w-xl text-[15px] leading-7 text-clay md:text-base md:leading-8">
                        {activeProduct.description}
                      </p>
                    </div>

                    <div className="grid gap-4 border-y border-brown/10 py-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-clay">
                          Signature Notes
                        </p>
                        <p className="text-sm leading-7 text-clay">
                          {activeProduct.accent}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-clay">
                          Shelf Life
                        </p>
                        <p className="flex items-center gap-2 text-sm leading-7 text-clay">
                          <Clock3 className="h-4 w-4 text-gold" />
                          {activeProduct.shelfLife}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {activeProduct.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-[24px] border border-brown/8 bg-[#fbf7f0] px-4 py-4 text-sm leading-6 text-clay"
                        >
                          <Sparkles className="mb-3 h-4 w-4 text-gold" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                      <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
                        <a href={getWhatsAppLink(activeProduct.name)}>
                          <MessageCircle className="h-4 w-4" />
                          Order {activeProduct.name}
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                        <Link href={`/product/${activeProduct.id}`}>
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Previous featured sweet"
                    onClick={() => setSlide(activeIndex - 1)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Next featured sweet"
                    onClick={() => setSlide(activeIndex + 1)}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-brown/8">
                    <motion.div
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[linear-gradient(90deg,#e8cf7b,#d4af37,#b98219)]"
                    />
                  </div>
                  <p className="min-w-[52px] text-right text-[11px] font-semibold uppercase tracking-[0.22em] text-clay">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(products.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {products.map((product, index) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => setSlide(index)}
                      className={cn(
                        "rounded-[24px] border px-5 py-4 text-left transition-all",
                        index === activeIndex
                          ? "border-gold/40 bg-[linear-gradient(135deg,rgba(250,235,188,0.46),rgba(255,255,255,0.94))] shadow-[0_18px_38px_rgba(44,27,18,0.08)]"
                          : "border-brown/8 bg-white/56 hover:-translate-y-0.5 hover:border-brown/16 hover:bg-white/72",
                      )}
                      aria-pressed={index === activeIndex}
                    >
                      <p className="font-serif text-[24px] font-semibold leading-none text-brown">
                        {product.name}
                      </p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-clay">
                        {product.badge}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div
                className="relative isolate overflow-hidden rounded-[40px] border border-white/28 bg-[linear-gradient(140deg,#362217,#2c1b12_45%,#20120b)] p-3 shadow-[0_36px_88px_rgba(44,27,18,0.2)] md:p-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="absolute inset-0 heritage-grid opacity-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />

                <div className="relative min-h-[460px] overflow-hidden rounded-[30px] bg-[#4a3022] md:min-h-[620px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProduct.id}
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, scale: 1.04, x: 24 }
                      }
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 1, scale: 1, x: 0 }
                      }
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : { opacity: 0, scale: 0.985, x: -20 }
                      }
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <SafeImage
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        fill
                        priority
                        sizes="(min-width: 1024px) 52vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,27,18,0.04),rgba(44,27,18,0.18)_42%,rgba(20,12,8,0.82))]" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="rounded-[28px] border border-white/10 bg-black/18 p-5 backdrop-blur-sm md:max-w-[75%] md:p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/70">
                        House Recommendation
                      </p>
                      <p className="mt-3 font-serif text-[32px] font-semibold leading-[0.96] text-cream md:text-[40px]">
                        {activeProduct.shortDescription}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-cream/76">
                        Crafted to look festive on the tray and feel familiar from the first bite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

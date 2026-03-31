import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brown text-cream">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_22%),linear-gradient(115deg,rgba(20,12,8,0.74),rgba(20,12,8,0.56),rgba(20,12,8,0.72))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f8f4ec]" />
      </div>

      <div className="container-shell relative flex min-h-[70vh] items-center py-12 md:py-16">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/78 md:text-[11px]">
              Asaan Sweets | Est. 1987
            </p>
            <h1 className="text-balance font-serif text-[40px] font-semibold leading-[0.92] sm:text-[52px] md:text-[72px]">
              38 Years of Sweet Legacy
            </h1>
            <p className="max-w-[560px] text-balance text-[16px] leading-7 text-cream/90 md:text-[19px] md:leading-8">
              Authentic handmade sweets since 1987
            </p>
            <p className="max-w-[620px] text-balance text-[15px] leading-6 text-cream/78 md:text-[17px] md:leading-7">
              Fresh mithai, savouries, and gifting favourites prepared with
              familiar recipes and ready for fast WhatsApp ordering.
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

          <div className="grid max-w-[640px] gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {site.heroBadges.map((badge) => (
              <Badge key={badge} variant="outline" className="justify-center sm:justify-start">
                <ShieldCheck className="mr-2 h-3.5 w-3.5" />
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

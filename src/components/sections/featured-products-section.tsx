import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import type { Product } from "@/data/products";
import { ProductCard } from "@/components/shared/product-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

type FeaturedProductsSectionProps = {
  products: Product[];
};

export function FeaturedProductsSection({
  products,
}: FeaturedProductsSectionProps) {
  const featuredProducts = products.slice(0, 8);

  return (
    <section id="featured" className="section-space bg-sand/26">
      <div className="container-shell space-y-8 md:space-y-10">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
          <SectionHeading
            eyebrow="Featured Products"
            title="The sweets people message for by name"
            description="A premium edit of celebration favourites, gifting staples, and house classics. Every card leads directly to a WhatsApp order so browsing turns into action quickly."
          />

          <div className="luxury-panel rounded-[28px] p-5 md:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
              Order Faster
            </p>
            <p className="mt-3 font-serif text-[28px] font-semibold leading-[1] text-brown md:text-[32px]">
              Need the full assortment or a festive mix box?
            </p>
            <p className="mt-3 text-sm leading-6 text-clay">
              Skip the back-and-forth. Start on WhatsApp for availability,
              gifting quantities, and same-day confirmation.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild variant="gold" className="w-full">
                <a href={getWhatsAppLink()}>
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/menu">
                  View Full Menu
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06}>
              <ProductCard product={product} priority={index < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

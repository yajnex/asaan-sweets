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
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="section-space bg-sand/26">
      <div className="container-shell space-y-12 md:space-y-14">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
          <SectionHeading
            eyebrow="Featured Products"
            title="The sweets people message for by name"
            description="A premium edit of celebration favourites, gifting staples, and house classics. Every card leads directly to a WhatsApp order so browsing turns into action quickly."
          />

          <div className="luxury-panel rounded-[32px] p-6 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
              Order Faster
            </p>
            <p className="mt-4 font-serif text-[30px] font-semibold leading-[1] text-brown md:text-[36px]">
              Need the full assortment or a festive mix box?
            </p>
            <p className="mt-4 text-sm leading-7 text-clay">
              Skip the back-and-forth. Start on WhatsApp for availability,
              gifting quantities, and same-day confirmation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

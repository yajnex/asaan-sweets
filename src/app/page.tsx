import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { CTASection } from "@/components/sections/cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductCard } from "@/components/shared/product-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustCard } from "@/components/shared/trust-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  description:
    "A heritage sweets house since 1987. Browse handcrafted mithai and savouries, then place an order instantly on WhatsApp.",
  path: "/",
});

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <>
      <HeroSection />

      <section className="relative z-10 -mt-10 md:-mt-14">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {site.trustCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <TrustCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="featured" className="section-space">
        <div className="container-shell space-y-12">
          <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured Products"
              title="The signatures customers ask for by name"
              description="A curated selection of best-sellers and gifting favourites. Tap a sweet, confirm availability, and place your order on WhatsApp."
            />
            <Button asChild variant="outline" size="lg">
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
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

      <AboutPreviewSection />
      <GallerySection />
      <CTASection />
    </>
  );
}

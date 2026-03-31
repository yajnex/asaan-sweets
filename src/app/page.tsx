import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { CTASection } from "@/components/sections/cta-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustCard } from "@/components/shared/trust-card";
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

      <section className="section-space-tight bg-cream">
        <div className="container-shell space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="Why Families Trust Us"
              title="Traditional craft, clearer service, and a sweets counter built on repeat orders"
              description="Every section of the experience is designed to build confidence quickly: familiar recipes, fresh daily production, and fast order confirmation on WhatsApp."
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {site.trustCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <TrustCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="featured">
        <FeaturedProductsSection products={featuredProducts} />
      </section>

      <AboutPreviewSection />
      <GallerySection />
      <CTASection />
    </>
  );
}

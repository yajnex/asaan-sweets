import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { CTASection } from "@/components/sections/cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SignatureCarouselSection } from "@/components/sections/signature-carousel-section";
import { Reveal } from "@/components/shared/reveal";
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

      <section className="relative z-10 -mt-10 md:-mt-14">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {site.trustCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <TrustCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="featured">
        <SignatureCarouselSection products={featuredProducts} />
      </section>

      <AboutPreviewSection />
      <GallerySection />
      <CTASection />
    </>
  );
}

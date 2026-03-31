import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { MenuBrowser } from "@/components/shared/menu-browser";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Menu",
  description:
    "Browse signature sweets, milk classics, and savory snacks from Asaan Sweets. Filter the menu and order directly on WhatsApp.",
  path: "/menu",
  image: "/images/hero-platter.svg",
});

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Full Menu"
        title="Browse the sweets and snacks worth ordering twice"
        description="Filter the menu by signature mithai, milk classics, and savoury favourites, then move straight into WhatsApp ordering."
        image="/images/hero-platter.svg"
      />
      <section className="section-space-tight">
        <div className="container-shell">
          <MenuBrowser />
        </div>
      </section>
      <CTASection
        title="Need a gifting box or bulk festive order?"
        description="Message the store for curated assortments, quantity support, and the quickest route to confirming availability."
      />
    </>
  );
}

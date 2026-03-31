import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/sections/cta-section";
import { ProductCard } from "@/components/shared/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return createMetadata({
      title: "Product Not Found",
      description: "The requested product could not be found.",
      path: "/menu",
    });
  }

  return createMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/product/${product.id}`,
    image: product.image,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  return (
    <>
      <section className="pt-24 md:pt-28">
        <div className="container-shell grid gap-8 py-8 md:py-10 lg:grid-cols-[0.98fr,1.02fr] lg:items-start">
          <div className="overflow-hidden rounded-[28px] border border-brown/8 bg-[#efe4d3] shadow-[0_24px_48px_rgba(44,27,18,0.1)]">
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={1350}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <Button asChild variant="link">
              <Link href="/menu">
                <ArrowLeft className="h-4 w-4" />
                Back to Menu
              </Link>
            </Button>

            <div className="space-y-4">
              <Badge variant="gold" className="w-fit">
                {product.badge}
              </Badge>
              <h1 className="text-balance font-serif text-[38px] font-semibold leading-[0.96] text-brown md:text-[56px]">
                {product.name}
              </h1>
              <p className="text-[15px] leading-6 text-clay md:text-[17px] md:leading-7">
                {product.description}
              </p>
            </div>

            <div className="grid gap-4 border-y border-brown/10 py-6 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-clay">Price</p>
                <p className="mt-2 font-serif text-[28px] font-semibold leading-none text-brown">
                  {product.price}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-clay">
                  Best Known For
                </p>
                <p className="mt-2 text-sm leading-6 text-clay">{product.accent}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="luxury-panel rounded-[28px] p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-clay">
                  Highlights
                </p>
                <div className="mt-3 space-y-3">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 text-sm leading-6 text-clay">
                      <Check className="mt-1 h-4 w-4 flex-none text-gold" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="luxury-panel rounded-[28px] p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-clay">
                  Ingredients & Storage
                </p>
                <div className="mt-3 space-y-3 text-sm leading-6 text-clay">
                  <p>{product.ingredients.join(", ")}</p>
                  <p className="border-t border-brown/10 pt-4">
                    Shelf life: {product.shelfLife}
                  </p>
                </div>
              </div>
            </div>

            <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
              <a href={getWhatsAppLink(product.name)}>
                <MessageCircle className="h-4 w-4" />
                Order {product.name} on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-space-tight bg-[#f4ecde]">
        <div className="container-shell space-y-8">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-clay">
              You May Also Like
            </p>
            <h2 className="font-serif text-[32px] font-semibold leading-none text-brown md:text-[42px]">
              More from the counter
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to order ${product.name}?`}
        description="Tap WhatsApp to confirm quantity, freshness, and delivery or pick-up details directly with the store."
        productName={product.name}
      />
    </>
  );
}

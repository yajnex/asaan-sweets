"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import type { Product } from "@/data/products";
import { SafeImage } from "@/components/shared/safe-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group gold-sheen luxury-panel flex h-full flex-col overflow-hidden rounded-[28px] hover:border-gold/24 hover:shadow-[0_28px_52px_rgba(44,27,18,0.12)]"
    >
      <Link href={`/product/${product.id}`} className="relative block">
        <div className="absolute right-3 top-3 z-10 rounded-full border border-white/28 bg-brown/68 px-3 py-1.5 text-[10px] font-medium tracking-[0.06em] text-cream backdrop-blur-sm">
          {product.price}
        </div>
        <div className="relative aspect-[4/4.15] overflow-hidden bg-sand/60">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 24vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,27,18,0.02),transparent_36%,rgba(44,27,18,0.08))]" />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-4 md:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="gold" className="w-fit">
            {product.badge}
          </Badge>
          <p className="text-[10px] uppercase tracking-[0.18em] text-clay">
            Handmade fresh
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="line-clamp-2 font-serif text-[21px] font-semibold leading-[0.98] text-brown md:text-[24px]">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-xs leading-5 text-clay md:text-sm md:leading-6">
            {product.shortDescription}
          </p>
        </div>
        <div className="gold-divider" />
        <div className="mt-auto flex flex-col gap-2 pt-0.5">
          <Button asChild size="sm" variant="gold" className="w-full">
            <a href={getWhatsAppLink(product.name)}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp Order
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="w-full justify-between px-0">
            <Link href={`/product/${product.id}`}>
              View details
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

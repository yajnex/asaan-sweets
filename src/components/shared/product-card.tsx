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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group gold-sheen luxury-panel flex h-full flex-col overflow-hidden rounded-[32px] hover:border-gold/24 hover:shadow-[0_32px_72px_rgba(44,27,18,0.14)]"
    >
      <Link href={`/product/${product.id}`} className="relative block">
        <div className="absolute right-4 top-4 z-10 rounded-full border border-white/28 bg-brown/68 px-4 py-2 text-[11px] font-medium tracking-[0.08em] text-cream backdrop-blur-sm">
          {product.price}
        </div>
        <div className="relative aspect-[4/4.3] overflow-hidden bg-sand/60">
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
      <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="gold" className="w-fit">
            {product.badge}
          </Badge>
          <p className="text-[11px] uppercase tracking-[0.24em] text-clay">
            Handmade fresh
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-serif text-[30px] font-semibold leading-[0.98] text-brown md:text-[34px]">
            {product.name}
          </h3>
          <p className="text-sm leading-7 text-clay">{product.shortDescription}</p>
        </div>
        <div className="gold-divider" />
        <div className="mt-auto flex flex-col gap-3 pt-1">
          <Button asChild size="sm" variant="gold" className="w-full">
            <a href={getWhatsAppLink(product.name)}>
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="w-full justify-between">
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

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
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group gold-sheen overflow-hidden rounded-[32px] border border-brown/8 bg-white/78 shadow-[0_24px_55px_rgba(44,27,18,0.08)] hover:border-gold/24 hover:shadow-[0_32px_72px_rgba(44,27,18,0.14)]"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/4.5] overflow-hidden bg-[#f4ebdd]">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 24vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>
      </Link>
      <div className="space-y-6 p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Badge variant="gold" className="w-fit">
            {product.badge}
          </Badge>
          <p className="text-[11px] uppercase tracking-[0.28em] text-clay">
            {product.price}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-serif text-[32px] font-semibold leading-none text-brown">
            {product.name}
          </h3>
          <p className="text-sm leading-7 text-clay">{product.shortDescription}</p>
        </div>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
          <Button asChild size="sm" className="w-full sm:w-auto">
            <a href={getWhatsAppLink(product.name)}>
              <MessageCircle className="h-4 w-4" />
              Order
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href={`/product/${product.id}`}>
              Details
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

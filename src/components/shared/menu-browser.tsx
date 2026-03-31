"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { productFilters, products } from "@/data/products";

type FilterId = (typeof productFilters)[number]["id"];

export function MenuBrowser() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="luxury-panel rounded-[28px] p-3 md:p-4">
        <div className="-mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
          {productFilters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className="shrink-0 snap-start"
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-brown/10 pt-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1.5">
          <p className="text-sm uppercase tracking-[0.24em] text-clay">
            {filteredProducts.length} items ready to order
          </p>
          <p className="font-serif text-[26px] font-semibold leading-none text-brown md:text-[30px]">
            Fresh sweets, savouries, and gifting favourites
          </p>
        </div>
        <p className="max-w-md text-sm leading-6 text-clay md:text-right">
          WhatsApp to confirm availability, gifting packs, and bulk orders.
        </p>
      </div>

      <motion.div layout className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </div>
  );
}

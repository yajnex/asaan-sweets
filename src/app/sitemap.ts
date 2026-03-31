import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/about", "/contact"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${site.url}/product/${product.id}`,
    lastModified: new Date(),
  }));

  return [...routes, ...productRoutes];
}

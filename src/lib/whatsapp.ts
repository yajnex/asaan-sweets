import { site } from "@/data/site";

export function getWhatsAppLink(productName?: string) {
  const text = productName
    ? `Hi, I want to order ${productName}`
    : `Hi, I want to place an order from ${site.name}.`;

  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

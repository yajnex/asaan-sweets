"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.96 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Button
        asChild
        variant="gold"
        size="lg"
        className="h-14 rounded-full pl-5 pr-6 shadow-[0_28px_72px_rgba(212,175,55,0.28)] hover:shadow-[0_36px_88px_rgba(212,175,55,0.34)] focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
      >
        <a href={getWhatsAppLink()} aria-label="Order on WhatsApp">
          <MessageCircle className="h-5 w-5" />
          WhatsApp Order
        </a>
      </Button>
    </motion.div>
  );
}

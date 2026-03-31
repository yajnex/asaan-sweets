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
      className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5"
    >
      <Button
        asChild
        variant="gold"
        size="lg"
        className="h-12 rounded-full px-4 text-sm shadow-[0_28px_72px_rgba(212,175,55,0.28)] hover:shadow-[0_36px_88px_rgba(212,175,55,0.34)] focus-visible:ring-2 focus-visible:ring-[var(--ring)] sm:h-14 sm:pl-5 sm:pr-6"
      >
        <a href={getWhatsAppLink()} aria-label="Order on WhatsApp">
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">WhatsApp Order</span>
          <span className="sm:hidden">Order</span>
        </a>
      </Button>
    </motion.div>
  );
}

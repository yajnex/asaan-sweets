"use client";

import { Clock3, ShieldCheck, Sparkles, SunMedium } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  clock: Clock3,
  sun: SunMedium,
  sparkles: Sparkles,
  shield: ShieldCheck,
} as const;

type TrustCardProps = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
};

export function TrustCard({ title, description, icon }: TrustCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="luxury-panel gold-sheen rounded-[28px] p-6 text-center sm:text-left hover:shadow-[0_34px_72px_rgba(44,27,18,0.14)]"
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#342016,#24140d)] text-cream shadow-[0_18px_35px_rgba(44,27,18,0.18)] sm:mx-0">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-serif text-[24px] font-semibold leading-[1.02] text-brown md:text-[28px]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-clay">{description}</p>
    </motion.article>
  );
}

import Link from "next/link";
import { Camera, MessageCircle, Phone, Users } from "lucide-react";

import { BrandMark } from "@/components/shared/brand-mark";
import { site } from "@/data/site";

const socialIcons = {
  Instagram: Camera,
  Facebook: Users,
  WhatsApp: MessageCircle,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-brown/8 bg-[#f4ede1]">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.3fr,0.7fr,0.8fr]">
        <div className="space-y-5 text-center md:text-left">
          <BrandMark size="footer" centered className="md:justify-start" />
          <p className="max-w-md text-sm leading-7 text-clay md:max-w-none">
            Traditional Indian sweets and snacks made with patience, familiar
            methods, and a service experience designed for trust.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-clay md:justify-start">
            <Phone className="h-4 w-4 text-gold" />
            <a href={site.phoneHref} className="hover:text-brown">
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
            Quick Links
          </p>
          <div className="flex flex-col gap-3 text-sm text-clay">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brown">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
            Visit & Order
          </p>
          <div className="space-y-2 text-sm leading-7 text-clay">
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-2">
            {site.socials.map((social) => {
              const Icon =
                socialIcons[social.label as keyof typeof socialIcons] ?? Camera;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brown/10 bg-white/60 text-brown hover:-translate-y-0.5 hover:bg-white"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-brown/8">
        <div className="container-shell flex flex-col gap-3 py-5 text-xs uppercase tracking-[0.2em] text-clay/80 md:flex-row md:items-center md:justify-between">
          <p>{site.name} | Handcrafted since {site.established}</p>
          <p>WhatsApp-first ordering for fast enquiries and repeat orders.</p>
        </div>
      </div>
    </footer>
  );
}

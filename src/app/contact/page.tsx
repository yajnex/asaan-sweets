import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";

import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Asaan Sweets for WhatsApp orders, phone support, store details, and visit information.",
  path: "/contact",
  image: "/images/craft-atelier.svg",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Order quickly, visit confidently, and reach a real person"
        description="For today's availability, gifting support, or a store visit, reach us directly. WhatsApp is the fastest way to confirm and order."
        image="/images/craft-atelier.svg"
      />

      <section className="section-space-tight">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <Reveal>
            <div className="space-y-4">
              <div className="surface-panel gold-sheen rounded-[28px] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#342016,#24140d)] text-cream">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-clay">
                      WhatsApp
                    </p>
                    <h2 className="font-serif text-[28px] font-semibold leading-none text-brown">
                      Fastest way to order
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-clay">
                  Send your selection and quantity on WhatsApp. We will confirm
                  availability, price, and packaging quickly.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button asChild variant="gold" className="w-full">
                    <a href={getWhatsAppLink()}>Message to Order</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={site.phoneHref}>
                      <Phone className="h-4 w-4" />
                      Call {site.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="luxury-panel rounded-[28px] p-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-gold" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-clay">
                      Address
                    </p>
                  </div>
                  <div className="mt-3 space-y-1.5 text-sm leading-6 text-clay">
                    {site.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="luxury-panel rounded-[28px] p-6">
                  <div className="flex items-center gap-4">
                    <Clock3 className="h-5 w-5 text-gold" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-clay">
                      Hours
                    </p>
                  </div>
                  <div className="mt-3 space-y-1.5 text-sm leading-6 text-clay">
                    {site.hours.map((slot) => (
                      <p key={slot}>{slot}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[28px] border border-brown/8 bg-white shadow-[0_24px_48px_rgba(44,27,18,0.1)]">
              <iframe
                title="Asaan Sweets map"
                src={site.mapEmbedUrl}
                className="h-[360px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Have a date, guest count, or gifting list in mind?"
        description="Send it on WhatsApp and we will suggest the right mix of sweets, savouries, and packaging for your occasion."
      />
    </>
  );
}

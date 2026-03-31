import { MessageCircle, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

type CTASectionProps = {
  title?: string;
  description?: string;
  productName?: string;
};

export function CTASection({
  title = "Ready for something sweet?",
  description = "Message us on WhatsApp for today's availability, gifting boxes, and quick order support.",
  productName,
}: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.24),transparent_28%),linear-gradient(135deg,#2c1b12,#41281c_55%,#2c1b12)] px-8 py-16 text-cream shadow-[0_36px_88px_rgba(44,27,18,0.2)] md:px-12 md:py-20">
          <div className="absolute inset-0 heritage-grid opacity-15" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/62">
              WhatsApp Ordering
            </p>
            <h2 className="mt-6 text-balance font-serif text-[40px] font-semibold leading-[1] md:text-[56px]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-cream/78 md:text-[18px]">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
                <a href={getWhatsAppLink(productName)}>
                  <MessageCircle className="h-4 w-4" />
                  Message to Order
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={site.phoneHref}>
                  <PhoneCall className="h-4 w-4" />
                  Call {site.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

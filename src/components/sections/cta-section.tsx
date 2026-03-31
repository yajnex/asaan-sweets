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
        <div className="relative overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.24),transparent_28%),linear-gradient(135deg,#2c1b12,#41281c_55%,#2c1b12)] px-8 py-12 text-cream shadow-[0_36px_88px_rgba(44,27,18,0.2)] md:px-12 md:py-14">
          <div className="absolute inset-0 heritage-grid opacity-15" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/62">
                WhatsApp Ordering
              </p>
              <h2 className="mt-5 text-balance font-serif text-[36px] font-semibold leading-[0.96] md:text-[60px]">
                {title}
              </h2>
              <p className="mt-5 max-w-2xl text-balance text-[15px] leading-7 text-cream/78 md:text-[18px] md:leading-8">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-cream/70">
                <span>Fresh batch confirmation</span>
                <span className="hidden h-1 w-1 self-center rounded-full bg-gold sm:inline-block" />
                <span>Quick gifting support</span>
                <span className="hidden h-1 w-1 self-center rounded-full bg-gold sm:inline-block" />
                <span>Direct store response</span>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/62">
                Start Here
              </p>
              <p className="mt-4 font-serif text-[28px] font-semibold leading-[1] text-cream md:text-[34px]">
                The fastest route to ordering is still a direct message.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild variant="gold" size="lg" className="w-full">
                <a href={getWhatsAppLink(productName)}>
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={site.phoneHref}>
                    <PhoneCall className="h-4 w-4" />
                    Call {site.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn the story behind Asaan Sweets, a heritage Indian sweets brand built on authenticity, freshness, and family trust since 1987.",
  path: "/about",
  image: "/images/craft-atelier.svg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A legacy sweets house with trust built into every batch"
        description="Asaan Sweets blends the warmth of an old neighbourhood mithai counter with the polish and consistency expected from a premium gifting brand."
        image="/images/craft-atelier.svg"
      />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[32px] bg-[#efe3d2] shadow-[0_28px_72px_rgba(44,27,18,0.12)]">
              <Image
                src="/images/kitchen-prep.svg"
                alt="Ingredients and preparation at Asaan Sweets"
                width={1000}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Legacy & Craft"
                title="The recipes may be traditional, but the experience is intentionally refined"
                description={site.story}
              />
              <div className="gold-divider" />
              <div className="grid gap-6 sm:grid-cols-2">
                {site.values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-[32px] border border-brown/8 bg-white/62 p-8"
                  >
                    <h3 className="font-serif text-[32px] font-semibold leading-none text-brown">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-clay">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-[#f4ecde]">
        <div className="container-shell space-y-12">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="Built slowly, remembered easily, trusted across generations"
              description="The timeline is less about expansion and more about consistency: keeping the familiar taste intact while making ordering and gifting easier for modern customers."
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {site.timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <article className="surface-panel gold-sheen rounded-[32px] p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-clay">
                    {item.year}
                  </p>
                  <h3 className="mt-6 font-serif text-[32px] font-semibold leading-none text-brown">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-clay">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring the legacy to your next celebration"
        description="From family trays to premium gifting boxes, the fastest way to plan an order is still a direct WhatsApp message."
      />
    </>
  );
}

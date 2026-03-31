import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brown pt-28 text-cream md:pt-32">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_26%),linear-gradient(120deg,rgba(24,14,10,0.92),rgba(24,14,10,0.64),rgba(24,14,10,0.84))]" />
      </div>
      <div className="container-shell relative py-16 md:py-24">
        <div className="max-w-[720px] space-y-4 md:space-y-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/70">
            {eyebrow}
          </p>
          <h1 className="text-balance font-serif text-[36px] font-semibold leading-[0.98] md:text-[64px]">
            {title}
          </h1>
          <p className="text-balance max-w-[640px] text-[15px] leading-7 text-cream/78 md:text-[18px] md:leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

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
          className="object-cover object-center opacity-52"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_26%),linear-gradient(120deg,rgba(24,14,10,0.94),rgba(24,14,10,0.68),rgba(24,14,10,0.86))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f8f4ec]" />
      </div>
      <div className="container-shell relative py-20 md:py-28">
        <div className="max-w-[760px] space-y-4 md:space-y-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cream/70">
            {eyebrow}
          </p>
          <h1 className="text-balance font-serif text-[38px] font-semibold leading-[0.96] md:text-[68px]">
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

import type { Metadata } from "next";
import { site } from "@/data/site";

type MetadataInput = {
  title?: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/images/hero-platter.svg",
}: MetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.name;
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

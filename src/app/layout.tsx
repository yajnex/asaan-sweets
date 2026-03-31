import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FloatingWhatsAppButton } from "@/components/shared/floating-whatsapp";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Indian sweets",
    "mithai",
    "traditional sweets",
    "snacks",
    "WhatsApp ordering",
    "Asaan Sweets",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-platter.svg",
        alt: "Asaan Sweets heritage mithai spread",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/hero-platter.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Navbar />
        <main className="flex flex-col">{children}</main>
        <FloatingWhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}

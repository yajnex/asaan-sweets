"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/shared/brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
      <div
        className={cn(
          "mx-auto grid max-w-[1280px] grid-cols-[48px_1fr_48px] items-center rounded-full border px-3 py-2 transition-all md:grid-cols-[56px_1fr_56px] md:px-5 lg:grid-cols-[1fr_auto_1fr]",
          scrolled || pathname !== "/"
            ? "border-brown/10 bg-[#fbf7f0]/86 shadow-[0_18px_45px_rgba(44,27,18,0.12)] backdrop-blur-xl"
            : "border-white/15 bg-white/8 shadow-[0_18px_45px_rgba(44,27,18,0.08)] backdrop-blur-xl",
        )}
      >
        <div className="flex items-center justify-start">
          <nav className="hidden items-center gap-8 lg:flex">
            {site.navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium tracking-[0.02em]",
                    active
                      ? "text-brown"
                      : scrolled || pathname !== "/"
                        ? "text-clay hover:text-brown"
                        : "text-cream/82 hover:text-cream",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className={
                  scrolled || pathname !== "/"
                    ? undefined
                    : "border-white/15 bg-white/10 text-cream hover:bg-white/15"
                }
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <BrandMark size="footer" centered />
                <SheetTitle className="text-center">Asaan Sweets</SheetTitle>
                <SheetDescription className="text-center">
                  Handmade sweets, savouries, and WhatsApp ordering in one place.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-10 flex flex-col gap-3">
                {site.navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-[24px] border border-brown/8 px-6 py-4 text-sm font-semibold text-brown hover:bg-brown/4"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <SheetClose asChild>
                  <Button asChild variant="gold" className="w-full">
                    <a href={getWhatsAppLink()}>
                      <MessageCircle className="h-4 w-4" />
                      Order on WhatsApp
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link
          href="/"
          aria-label="Asaan Sweets home"
          className="justify-self-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <BrandMark size="nav" />
        </Link>

        <div className="flex items-center justify-end">
          <Button asChild variant="gold" size="sm" className="hidden lg:inline-flex">
            <a href={getWhatsAppLink()} aria-label="Order on WhatsApp">
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </Button>
          <Button asChild variant="gold" size="icon" className="lg:hidden">
            <a href={getWhatsAppLink()} aria-label="Order on WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

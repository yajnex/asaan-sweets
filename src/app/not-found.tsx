import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32 md:pt-36">
      <div className="container-shell">
        <div className="surface-panel gold-sheen mx-auto max-w-2xl rounded-[40px] px-8 py-16 text-center md:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-clay">
            Page Not Found
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold text-brown">
            The sweet you are looking for is not on this tray.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-clay">
            Head back to the menu or message the store directly if you are trying
            to find a specific item or festive order.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/menu">Browse Menu</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={getWhatsAppLink()}>Order on WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingMenu() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brown pt-32 text-cream md:pt-36">
        <div className="container-shell relative py-20 md:py-28">
          <div className="max-w-[720px] space-y-6">
            <Skeleton className="h-5 w-44 rounded-full border-white/15 bg-white/10" />
            <Skeleton className="h-16 w-full max-w-[560px] rounded-[24px] border-white/10 bg-white/10" />
            <Skeleton className="h-10 w-full max-w-[520px] rounded-[18px] border-white/10 bg-white/10" />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-10">
          <div className="-mx-6 flex gap-4 overflow-hidden px-6 sm:mx-0 sm:px-0">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-12 w-40 shrink-0 rounded-full" />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[32px] border border-brown/8 bg-white/70 shadow-[0_24px_55px_rgba(44,27,18,0.08)]"
              >
                <Skeleton className="aspect-[4/4.5] w-full rounded-none border-0 bg-[#f1e5d4]" />
                <div className="space-y-6 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <Skeleton className="h-8 w-32 rounded-full" />
                    <Skeleton className="h-5 w-28 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                  </div>
                  <div className="flex gap-4">
                    <Skeleton className="h-10 w-28 rounded-full" />
                    <Skeleton className="h-10 w-28 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

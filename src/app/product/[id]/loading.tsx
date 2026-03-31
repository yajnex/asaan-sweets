import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProduct() {
  return (
    <section className="pt-32 md:pt-36">
      <div className="container-shell grid gap-12 py-12 lg:grid-cols-[0.98fr,1.02fr] lg:items-center">
        <div className="overflow-hidden rounded-[32px] border border-brown/8 bg-[#efe4d3] shadow-[0_32px_72px_rgba(44,27,18,0.12)]">
          <Skeleton className="aspect-[4/4.5] w-full rounded-none border-0 bg-[#e8dccb]" />
        </div>

        <div className="space-y-8">
          <Skeleton className="h-6 w-32 rounded-full" />
          <div className="space-y-6">
            <Skeleton className="h-8 w-40 rounded-full" />
            <Skeleton className="h-16 w-full max-w-[520px] rounded-[22px]" />
            <Skeleton className="h-6 w-full max-w-[620px]" />
            <Skeleton className="h-6 w-5/6 max-w-[560px]" />
          </div>

          <div className="grid gap-6 border-y border-brown/10 py-8 sm:grid-cols-2">
            <div className="space-y-3">
              <Skeleton className="h-5 w-24 rounded-full" />
              <Skeleton className="h-10 w-48 rounded-[18px]" />
            </div>
            <div className="space-y-3">
              <Skeleton className="h-5 w-40 rounded-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Skeleton className="h-56 rounded-[32px]" />
            <Skeleton className="h-56 rounded-[32px]" />
          </div>

          <Skeleton className="h-14 w-full rounded-full sm:w-80" />
        </div>
      </div>
    </section>
  );
}

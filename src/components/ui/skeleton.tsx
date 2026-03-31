import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[18px] border border-brown/8 bg-white/65 shadow-[0_18px_40px_rgba(44,27,18,0.06)]",
        className,
      )}
    />
  );
}

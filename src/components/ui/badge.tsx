import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em]",
  {
    variants: {
      variant: {
        default: "bg-brown/90 text-cream",
        outline: "border border-white/24 bg-white/10 text-cream backdrop-blur-sm",
        subtle: "border border-brown/10 bg-white/64 text-clay",
        gold: "border border-gold/28 bg-[linear-gradient(135deg,rgba(250,235,188,0.58),rgba(212,175,55,0.18))] text-brown",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

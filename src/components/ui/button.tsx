import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "tap-highlight-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-0",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,#342016,#24140d)] text-cream shadow-[0_20px_44px_rgba(44,27,18,0.18)] hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(44,27,18,0.24)] active:scale-[0.99]",
        outline:
          "border border-brown/12 bg-white/68 text-brown shadow-[0_12px_32px_rgba(44,27,18,0.06)] hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-[0_22px_48px_rgba(44,27,18,0.12)] active:scale-[0.99]",
        ghost:
          "text-brown hover:-translate-y-0.5 hover:bg-brown/5 active:scale-[0.99]",
        gold: "bg-[linear-gradient(135deg,#f3dd93,#d4af37_48%,#b98319)] text-brown shadow-[0_20px_44px_rgba(212,175,55,0.32)] hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(212,175,55,0.38)] active:scale-[0.99]",
        link: "h-auto rounded-none p-0 text-brown underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-[15px]",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

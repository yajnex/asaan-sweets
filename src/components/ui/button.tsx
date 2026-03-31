import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "tap-highlight-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-0",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,#342016,#24140d)] text-cream shadow-[0_18px_40px_rgba(44,27,18,0.16)] hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(44,27,18,0.22)] active:scale-[0.99]",
        outline:
          "border border-brown/12 bg-white/72 text-brown shadow-[0_12px_28px_rgba(44,27,18,0.05)] hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-[0_20px_44px_rgba(44,27,18,0.1)] active:scale-[0.99]",
        ghost:
          "text-brown hover:-translate-y-0.5 hover:bg-brown/5 active:scale-[0.99]",
        gold: "bg-[linear-gradient(135deg,#f4e19b,#d4af37_48%,#b98319)] text-brown shadow-[0_20px_44px_rgba(212,175,55,0.28)] hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(212,175,55,0.36)] active:scale-[0.99]",
        link: "h-auto rounded-none p-0 text-brown underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-11 px-4 text-sm",
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

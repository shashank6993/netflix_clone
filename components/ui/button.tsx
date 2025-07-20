"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      // Only pass valid HTML attributes to Slot
      const { onClick, ...rest } =
        props as React.HTMLAttributes<HTMLButtonElement>;
      const slotRef =
        typeof ref === "function" || (typeof ref === "object" && ref !== null)
          ? ref
          : undefined;
      return (
        <Slot
          className={cn(
            buttonVariants({ variant, size, className }),
            variant === "default" &&
              "bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white shadow-lg backdrop-blur-md bg-opacity-80 border border-white/20 hover:from-pink-500 hover:to-red-500 hover:shadow-xl"
          )}
          ref={slotRef}
          onClick={onClick}
          {...rest}
        />
      );
    }
    // Only pass valid motion props to motion.button
    const motionRef =
      typeof ref === "function" || (typeof ref === "object" && ref !== null)
        ? ref
        : undefined;
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={cn(
          buttonVariants({ variant, size, className }),
          variant === "default" &&
            "bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white shadow-lg backdrop-blur-md bg-opacity-80 border border-white/20 hover:from-pink-500 hover:to-red-500 hover:shadow-xl"
        )}
        ref={motionRef}
        {...(props as HTMLMotionProps<"button">)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[1.15rem] text-sm font-medium ring-offset-background transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default: "electric-button",
        destructive:
          "border border-rose-300/25 bg-rose-400/10 text-rose-100 shadow-lg shadow-rose-500/10 hover:bg-rose-400/15",
        outline:
          "border border-cyan-200/15 bg-white/[0.045] text-slate-100 shadow-lg shadow-blue-950/20 backdrop-blur-xl hover:border-cyan-200/35 hover:bg-cyan-300/10 hover:text-white",
        secondary:
          "border border-white/10 bg-white/[0.075] text-slate-100 shadow-lg shadow-blue-950/20 backdrop-blur-xl hover:bg-white/[0.12]",
        ghost: "text-slate-200 hover:bg-white/[0.08] hover:text-white",
        link: "text-cyan-200 underline-offset-4 hover:text-white hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[1rem] px-3",
        lg: "h-12 rounded-[1.35rem] px-8",
        icon: "h-10 w-10 rounded-[1rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

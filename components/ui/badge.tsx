import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:ring-offset-0",
  {
    variants: {
      variant: {
        default:
          "border-cyan-200/20 bg-cyan-300/10 text-cyan-100 shadow-sm shadow-cyan-400/10 hover:bg-cyan-300/15",
        secondary:
          "border-white/10 bg-white/[0.07] text-slate-200 hover:bg-white/[0.1]",
        destructive:
          "border-rose-300/20 bg-rose-400/10 text-rose-100 hover:bg-rose-400/15",
        outline: "border-cyan-200/15 bg-white/[0.035] text-slate-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

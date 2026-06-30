import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[1.15rem] border border-cyan-200/15 bg-white/[0.045] px-4 py-2 text-base text-slate-100 shadow-inner shadow-blue-950/30 backdrop-blur-xl file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-slate-400/70 focus-visible:border-cyan-200/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

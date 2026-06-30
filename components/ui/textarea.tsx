import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-[1.25rem] border border-cyan-200/15 bg-white/[0.045] px-4 py-3 text-base text-slate-100 shadow-inner shadow-blue-950/30 backdrop-blur-xl placeholder:text-slate-400/70 focus-visible:border-cyan-200/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

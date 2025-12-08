import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "neon"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_-3px_hsl(var(--primary)/0.6)]":
              variant === "default",
            "border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground backdrop-blur-sm":
              variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "bg-transparent border border-primary text-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] hover:bg-primary hover:text-white hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300":
              variant === "neon",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

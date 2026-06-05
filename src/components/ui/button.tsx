import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary/20 text-primary border border-primary/35 backdrop-blur-md shadow-[0_0_12px_rgba(0,229,160,0.1)] hover:bg-primary/30 hover:text-primary hover:border-primary/60 hover:shadow-[0_0_20px_rgba(0,229,160,0.25)] hover:-translate-y-[2px] active:translate-y-px duration-200",
        outline:
          "border-border bg-card/20 backdrop-blur-sm hover:bg-muted/50 hover:text-foreground hover:-translate-y-[2px] active:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/20 dark:hover:bg-input/40 duration-200",
        secondary:
          "bg-secondary/20 text-secondary border border-secondary/35 backdrop-blur-md shadow-[0_0_12px_rgba(0,150,255,0.1)] hover:bg-secondary/30 hover:text-secondary hover:border-secondary/60 hover:shadow-[0_0_20px_rgba(0,150,255,0.25)] hover:-translate-y-[2px] active:translate-y-px duration-200",
        ghost:
          "hover:bg-muted hover:text-foreground hover:-translate-y-[1px] active:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/30 duration-200",
        destructive:
          "bg-destructive/15 text-destructive border border-destructive/30 backdrop-blur-md hover:bg-destructive/25 hover:border-destructive/50 hover:shadow-[0_0_15px_rgba(255,0,0,0.1)] hover:-translate-y-[2px] active:translate-y-px duration-200",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 duration-200",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

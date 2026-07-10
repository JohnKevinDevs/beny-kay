import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "ink" | "blush";

const variants: Record<BadgeVariant, string> = {
  default: "bg-rose-gold text-ivory",
  ink: "bg-charcoal text-ivory",
  blush: "bg-blush-deep text-charcoal",
};

export function Badge({
  variant = "default",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap rounded-full px-[.95em] py-[.42em] font-sans text-[.64rem] font-medium uppercase tracking-[.18em]",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

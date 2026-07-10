import { cn } from "@/lib/cn";

export function Eyebrow({
  noRule = false,
  className,
  children,
}: {
  noRule?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-[.7em] font-sans text-[.72rem] font-medium uppercase tracking-[.34em] text-rose-gold",
        !noRule && "before:block before:h-px before:w-[26px] before:bg-current before:opacity-60",
        className
      )}
    >
      {children}
    </div>
  );
}

import { SparkleIcon } from "@/lib/icons";
import { cn } from "@/lib/cn";

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3.5 text-rose-gold", className)}>
      <span className="h-px w-[54px] bg-[linear-gradient(90deg,transparent,var(--color-rose-gold))]" />
      <SparkleIcon className="h-[14px] w-[14px]" />
      <span className="h-px w-[54px] bg-[linear-gradient(90deg,var(--color-rose-gold),transparent)]" />
    </div>
  );
}

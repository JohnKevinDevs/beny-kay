import { StarIcon } from "@/lib/icons";
import { cn } from "@/lib/cn";

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("inline-flex gap-0.5 text-rose-gold", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="h-[14px] w-[14px]" />
      ))}
    </div>
  );
}

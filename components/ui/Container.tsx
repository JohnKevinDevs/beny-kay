import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-[1240px] px-[clamp(20px,5vw,88px)]", className)}>
      {children}
    </div>
  );
}

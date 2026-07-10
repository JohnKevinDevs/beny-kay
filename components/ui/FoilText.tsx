import { cn } from "@/lib/cn";

export function FoilText({
  as: Tag = "span",
  className,
  children,
}: {
  as?: "span" | "em";
  className?: string;
  children: React.ReactNode;
}) {
  return <Tag className={cn("foil-text font-display italic", className)}>{children}</Tag>;
}

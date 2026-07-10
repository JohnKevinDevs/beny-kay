import { cn } from "@/lib/cn";
import type { CSSProperties } from "react";

interface ImagePlaceholderProps {
  label?: string;
  icon?: React.ReactNode;
  variant?: "default" | "ink";
  from?: string;
  to?: string;
  className?: string;
}

export function ImagePlaceholder({ label, icon, variant = "default", from, to, className }: ImagePlaceholderProps) {
  const style: CSSProperties & Record<string, string | undefined> = {};
  if (from) style["--ph-from"] = from;
  if (to) style["--ph-to"] = to;

  return (
    <div className={cn("ph", variant === "ink" && "ph--ink", className)} style={style}>
      {icon && <div className="ph-ico">{icon}</div>}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}

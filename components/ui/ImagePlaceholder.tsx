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

  // The .ph class carries no positioning; ensure exactly one position utility
  // so a caller's `absolute inset-0` is never doubled up with a default.
  const hasPosition = /(?:^|\s)(?:absolute|fixed|relative|sticky)(?:\s|$)/.test(className ?? "");

  return (
    <div
      className={cn("ph", !hasPosition && "relative", variant === "ink" && "ph--ink", className)}
      style={style}
    >
      {icon && <div className="ph-ico">{icon}</div>}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}

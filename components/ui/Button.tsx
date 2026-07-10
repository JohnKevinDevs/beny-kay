import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "rose" | "ghost" | "light" | "wa";
type ButtonSize = "default" | "sm";

const base =
  "inline-flex items-center justify-center gap-[.7em] whitespace-nowrap rounded-full border border-transparent " +
  "font-sans font-medium text-[.82rem] uppercase tracking-[.16em] " +
  "transition-[transform,box-shadow,background-color,color,border-color] duration-[350ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] " +
  "[&_svg]:h-[1.15em] [&_svg]:w-[1.15em]";

const sizes: Record<ButtonSize, string> = {
  default: "px-[2.1em] py-[1.05em]",
  sm: "px-[1.4em] py-[.78em] text-[.72rem]",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-charcoal text-ivory shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  rose: "bg-rose-gold text-ivory shadow-[0_10px_26px_-12px_rgba(174,110,92,0.7)] hover:bg-rose-gold-dp hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-charcoal border-[rgba(44,40,38,.12)] hover:border-charcoal hover:bg-[rgba(44,40,38,.03)]",
  light: "bg-ivory text-charcoal hover:-translate-y-0.5 hover:shadow-md",
  wa:
    "bg-white text-charcoal border-[rgba(44,40,38,.12)] [&_svg]:h-[1.25em] [&_svg]:w-[1.25em] [&_svg]:text-[#3FAE62] " +
    "hover:border-[#3FAE62] hover:text-[#2C8A4A] hover:-translate-y-0.5 hover:shadow-sm",
};

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsAnchor = ButtonOwnProps &
  { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;

type ButtonAsButton = ButtonOwnProps &
  { href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

export function Button({ variant = "primary", size = "default", className, children, ...props }: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

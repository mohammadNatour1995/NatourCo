import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "outline-light" | "outline";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-900/10",
  secondary:
    "bg-gold-400 text-ink-950 hover:bg-gold-300 shadow-lg shadow-gold-900/10",
  ghost: "bg-transparent text-brand-700 hover:bg-brand-50",
  "outline-light":
    "bg-white/0 text-white border border-white/40 hover:bg-white/10",
  outline: "bg-transparent text-brand-700 border border-brand-200 hover:bg-brand-50",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({
  href,
  variant = "primary",
  children,
  icon,
  className,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200",
    VARIANT_CLASSES[variant],
    className,
  );

  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}

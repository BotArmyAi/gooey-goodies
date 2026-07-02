import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold px-7 py-3.5 text-base transition-all duration-300 will-change-transform active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink/30";

const variants = {
  primary:
    "bg-pink text-white shadow-soft hover:-translate-y-0.5 hover:bg-pink-soft hover:shadow-[0_22px_60px_-18px_rgba(241,33,181,0.55)]",
  secondary:
    "bg-white text-ink border-2 border-blush-deep hover:border-pink hover:text-pink hover:-translate-y-0.5",
  ghost: "text-ink hover:text-pink",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-pink shadow-sm ring-1 ring-blush-deep/60 backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}

/** Section wrapper with consistent horizontal gutters and max width. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

import { Container, Pill } from "./ui";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  pill,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  pill?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-blush-deep/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-sunny/25 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-50" />
      <Container className="py-14 text-center sm:py-20">
        {pill && <div className="mb-5 flex justify-center">{pill}</div>}
        {eyebrow && !pill && (
          <div className="mb-5 flex justify-center">
            <Pill>{eyebrow}</Pill>
          </div>
        )}
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

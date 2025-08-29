import React from "react";

interface HeroProps {
  /** Main headline for the hero section */
  title: string;
  /** Optional sub headline displayed below the title */
  subtitle?: string;
  /** Optional call to action or extra content */
  children?: React.ReactNode;
}

/**
 * A generic hero section that centers content and can display a title,
 * subtitle and arbitrary children such as buttons.
 */
export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="px-4 py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mb-8 text-lg text-muted-foreground">{subtitle}</p>
      )}
      {children}
    </section>
  );
}

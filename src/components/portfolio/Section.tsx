import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
            <span className="h-px w-8 bg-gradient-brand" />
            {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-lg">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
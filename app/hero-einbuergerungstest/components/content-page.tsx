import type { ReactNode } from "react";
import { AppShell } from "./app-shell";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function ContentPage({ eyebrow, title, children }: ContentPageProps) {
  return (
    <AppShell narrow>
      <article>
        <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
          {title}
        </h1>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-600 md:text-[0.95rem]">
          {children}
        </div>
      </article>
    </AppShell>
  );
}

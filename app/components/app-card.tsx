import type { LucideIcon } from "lucide-react";
import { Apple } from "lucide-react";

export type AppCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  accentClassName?: string;
};

export function AppCard({
  icon: Icon,
  title,
  subtitle,
  description,
  accentClassName = "bg-neutral-900",
}: AppCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:p-10">
      <div className="mb-8 flex items-start justify-between gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accentClassName}`}
        >
          <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
        </span>
        <span className="rounded-full border border-neutral-200 px-3 py-1 text-[10px] font-medium tracking-widest text-neutral-400 uppercase">
          iOS
        </span>
      </div>

      <p className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase">
        {subtitle}
      </p>
      <h2 className="mt-2 text-2xl font-medium tracking-tight text-neutral-900 md:text-[1.65rem]">
        {title}
      </h2>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-500 md:text-[0.95rem]">
        {description}
      </p>

      <a
        href="#"
        className="mt-10 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto"
        aria-label={`Download ${title} on the App Store`}
      >
        <Apple className="h-4 w-4" strokeWidth={1.5} />
        <span>App Store</span>
      </a>
    </article>
  );
}

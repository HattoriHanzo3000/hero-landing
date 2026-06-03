import Image from "next/image";

export type AppCardProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
};

export function AppCard({
  iconSrc,
  iconAlt,
  title,
  titleAccent,
  subtitle,
  description,
  ctaLabel,
}: AppCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] md:p-10">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-[22%] shadow-sm"
          />
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="min-h-[4.5rem]">
              <h2 className="text-xl font-medium tracking-tight text-neutral-900 md:text-[1.35rem]">
                {title}
                <span className="mt-0.5 block text-lg leading-snug font-normal text-neutral-900 md:text-xl">
                  {titleAccent}
                </span>
              </h2>
            </div>
            <p className="text-sm leading-snug text-neutral-500">
              {subtitle}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-medium tracking-widest text-neutral-400 uppercase">
          iOS
        </span>
      </div>

      <p className="min-h-[4.25rem] flex-1 text-sm leading-relaxed text-neutral-500 md:min-h-[4.5rem] md:text-[0.95rem]">
        {description}
      </p>

      <span className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-colors group-hover:bg-neutral-800 sm:w-auto">
        {ctaLabel}
      </span>
    </article>
  );
}

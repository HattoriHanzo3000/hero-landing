import Image from "next/image";
import Link from "next/link";

export type AppIntroProps = {
  href: string;
  mascotSrc: string;
  mascotAlt: string;
  goalTitle: string;
  appName: string;
  description: string;
  ctaLabel: string;
  isReversed?: boolean;
};

export function AppIntro({
  href,
  mascotSrc,
  mascotAlt,
  goalTitle,
  appName,
  description,
  ctaLabel,
  isReversed = false,
}: AppIntroProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <article
        className={`flex flex-col items-center gap-12 md:gap-16 lg:gap-24 ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex shrink-0 justify-center md:w-2/5 lg:w-1/2">
          <Image
            src={mascotSrc}
            alt={mascotAlt}
            width={400}
            height={400}
            className="h-auto w-64 max-w-sm object-contain md:w-full"
            priority={!isReversed}
          />
        </div>

        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <h3 className="mb-3 text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {goalTitle}
          </h3>
          <p className="mb-6 text-xl font-normal text-neutral-800 md:text-2xl">
            {appName}
          </p>
          <p className="mb-12 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
            {description}
          </p>

          <Link
            href={href}
            aria-label={`${ctaLabel}: ${appName}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-neutral-800 active:scale-[0.98] sm:w-auto"
          >
            {ctaLabel}
          </Link>
        </div>
      </article>
    </div>
  );
}

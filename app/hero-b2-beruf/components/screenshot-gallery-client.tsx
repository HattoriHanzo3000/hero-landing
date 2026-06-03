"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

export type ScreenshotItem = {
  src: string;
  alt: string;
};

type ScreenshotGalleryClientProps = {
  heading: string;
  expandHint: string;
  closeLabel: string;
  screenshots: readonly ScreenshotItem[];
};

export function ScreenshotGalleryClient({
  heading,
  expandHint,
  closeLabel,
  screenshots,
}: ScreenshotGalleryClientProps) {
  const [active, setActive] = useState<ScreenshotItem | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  return (
    <section className="mt-20 md:mt-28" aria-labelledby="b2-screenshots-heading">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h2
          id="b2-screenshots-heading"
          className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase"
        >
          {heading}
        </h2>
        <p className="text-xs text-neutral-400">{expandHint}</p>
      </div>

      <div
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 md:-mx-10 md:gap-5 md:px-10 [scrollbar-width:thin] [scrollbar-color:rgb(212_212_212)_transparent]"
        tabIndex={0}
        role="region"
        aria-label={heading}
      >
        {screenshots.map((screenshot, index) => (
          <figure
            key={screenshot.src}
            className="w-[260px] shrink-0 snap-center snap-always"
          >
            <button
              type="button"
              onClick={() => setActive(screenshot)}
              className="group w-full cursor-zoom-in overflow-hidden rounded-2xl border border-neutral-200/80 bg-white text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-neutral-300/80 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              aria-label={`${expandHint}: ${screenshot.alt}`}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={500}
                height={1125}
                className="h-auto w-full"
                loading={index === 0 ? "eager" : "lazy"}
                sizes="260px"
              />
            </button>
          </figure>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/80 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:top-6 md:right-6"
            aria-label={closeLabel}
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[min(100%,28rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={500}
              height={1125}
              className="h-auto max-h-[90vh] w-auto max-w-full rounded-2xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 448px"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

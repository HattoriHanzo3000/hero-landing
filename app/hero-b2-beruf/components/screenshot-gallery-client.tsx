"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type ScreenshotItem = {
  src: string;
  alt: string;
};

type ScreenshotGalleryClientProps = {
  heading: string;
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
  screenshots: readonly ScreenshotItem[];
};

export function ScreenshotGalleryClient({
  heading,
  closeLabel,
  prevLabel,
  nextLabel,
  screenshots,
}: ScreenshotGalleryClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active =
    activeIndex !== null ? screenshots[activeIndex] ?? null : null;

  const close = useCallback(() => setActiveIndex(null), []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((index) => {
      if (index === null) {
        return null;
      }
      return (index - 1 + screenshots.length) % screenshots.length;
    });
  }, [screenshots.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((index) => {
      if (index === null) {
        return null;
      }
      return (index + 1) % screenshots.length;
    });
  }, [screenshots.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, goToPrevious, goToNext]);

  return (
    <section className="mt-20 md:mt-28" aria-labelledby="b2-screenshots-heading">
      <h2
        id="b2-screenshots-heading"
        className="mb-8 text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase"
      >
        {heading}
      </h2>

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
              onClick={() => setActiveIndex(index)}
              className="group w-full cursor-zoom-in overflow-hidden rounded-2xl border border-neutral-200/80 bg-white text-left shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-neutral-300/80 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              aria-label={screenshot.alt}
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

      {active && activeIndex !== null ? (
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

          {screenshots.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToPrevious();
                }}
                className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-4 md:h-12 md:w-12"
                aria-label={prevLabel}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToNext();
                }}
                className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-4 md:h-12 md:w-12"
                aria-label={nextLabel}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </button>
            </>
          ) : null}

          <div
            className="relative max-h-[90vh] max-w-[min(100%,28rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={active.src}
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

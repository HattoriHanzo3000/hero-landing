import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-2 md:px-10 md:pb-28 md:pt-4">
      <div className="max-w-3xl">
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
          Mobile learning · Germany
        </p>
        <h1 className="text-4xl leading-[1.1] font-light tracking-tight text-neutral-900 md:text-6xl md:leading-[1.05]">
          Clarity for every
          <span className="mt-1 block font-normal text-neutral-500">
            milestone ahead.
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
          Hero builds focused iOS experiences for people navigating German
          citizenship and professional language—designed with restraint,
          precision, and respect for your time.
        </p>
      </div>

      <div className="mt-16 flex items-center gap-6">
        <span className="hidden h-px flex-1 max-w-[120px] bg-neutral-200 md:block" />
        <a
          href="#apps"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-neutral-400 transition-colors hover:text-neutral-700"
        >
          Explore apps
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

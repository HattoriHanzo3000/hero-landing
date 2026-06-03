import { ContentPage } from "../components/content-page";

export default function FaqPage() {
  return (
    <ContentPage eyebrow="Help" title="Frequently asked questions">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-white px-8 py-16 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
          Coming soon
        </p>
        <p className="mt-4 text-2xl font-light tracking-tight text-neutral-900">
          FAQ coming soon
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
          We&apos;re preparing clear answers to the questions we hear most often.
          Until then, reach us via{" "}
          <a
            href="mailto:support@gizatech.de"
            className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
          >
            support@gizatech.de
          </a>
          .
        </p>
      </div>
    </ContentPage>
  );
}

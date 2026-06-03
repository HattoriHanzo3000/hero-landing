import { ContentPage } from "../components/content-page";

export default function ImpressumPage() {
  return (
    <ContentPage eyebrow="Legal" title="Impressum">
      <p className="text-neutral-500">
        Legal disclosure content for Hero-Deutsch B2 Beruf will be published
        here. This page is a placeholder aligned with App Store requirements.
      </p>
      <section className="rounded-2xl border border-dashed border-neutral-200 bg-white/60 px-6 py-8 text-neutral-400">
        <p className="text-xs font-medium tracking-[0.2em] uppercase">
          Placeholder
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          Company name, address, registration details, and responsible contact
          will appear in this section.
        </p>
      </section>
    </ContentPage>
  );
}

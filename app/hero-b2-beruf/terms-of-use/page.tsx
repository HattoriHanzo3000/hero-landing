import { ContentPage } from "../components/content-page";

export default function TermsOfUsePage() {
  return (
    <ContentPage eyebrow="Legal" title="Terms of Use">
      <p className="text-neutral-500">
        The full terms governing use of Hero-Deutsch B2 Beruf will be published
        here. This page is a placeholder for your App Store Terms of Use (EULA)
        URL.
      </p>
      <section className="space-y-4 rounded-2xl border border-dashed border-neutral-200 bg-white/60 px-6 py-8 text-neutral-400">
        <p className="text-xs font-medium tracking-[0.2em] uppercase">
          Placeholder sections
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm">
          <li>Acceptance of terms</li>
          <li>License and permitted use</li>
          <li>Subscriptions and billing</li>
          <li>Disclaimer and limitation of liability</li>
          <li>Governing law</li>
        </ul>
      </section>
    </ContentPage>
  );
}

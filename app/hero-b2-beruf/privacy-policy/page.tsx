import { ContentPage } from "../components/content-page";

export default function PrivacyPolicyPage() {
  return (
    <ContentPage eyebrow="Legal" title="Privacy Policy">
      <p className="text-neutral-500">
        Our privacy policy for Hero-Deutsch B2 Beruf will be published here.
        This page is a placeholder for your App Store Privacy Policy URL.
      </p>
      <section className="space-y-4 rounded-2xl border border-dashed border-neutral-200 bg-white/60 px-6 py-8 text-neutral-400">
        <p className="text-xs font-medium tracking-[0.2em] uppercase">
          Placeholder sections
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm">
          <li>Data we collect</li>
          <li>How we use your information</li>
          <li>Third-party services</li>
          <li>Your rights (including GDPR)</li>
          <li>Contact for privacy requests</li>
        </ul>
      </section>
    </ContentPage>
  );
}

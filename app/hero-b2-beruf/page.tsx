import { Apple, Briefcase } from "lucide-react";
import Link from "next/link";
import { AppShell } from "./components/app-shell";

const FEATURES = [
  "Profession-specific vocabulary for your field—not generic lists",
  "Realistic workplace dialogues and structured learning paths",
  "B2-level focus designed for career milestones in Germany",
] as const;

export default function HeroB2BerufPage() {
  return (
    <AppShell>
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div className="max-w-xl lg:max-w-none">
          <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
            Professional German · Germany
          </p>
          <h1 className="mt-6 text-4xl leading-[1.1] font-light tracking-tight text-neutral-900 md:text-5xl md:leading-[1.08]">
            Hero-Deutsch
            <span className="mt-1 block font-normal text-neutral-500">
              B2 Beruf
            </span>
          </h1>
          <p className="mt-8 text-base leading-relaxed text-neutral-500 md:text-lg">
            Build workplace-ready German at B2 level. Profession-specific
            vocabulary, realistic dialogues, and structured paths—for your
            career, not another generic textbook.
          </p>

          <ul className="mt-10 space-y-4 border-t border-neutral-200/80 pt-10">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-relaxed text-neutral-600"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              aria-label="Download Hero-Deutsch B2 Beruf on the App Store"
            >
              <Apple className="h-4 w-4" strokeWidth={1.5} />
              Download on the App Store
            </a>
            <Link
              href="/hero-b2-beruf/support"
              className="text-center text-sm tracking-wide text-neutral-400 transition-colors hover:text-neutral-700 sm:text-left"
            >
              Need help? Contact support
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200/80 bg-white p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-600 shadow-sm">
            <Briefcase className="h-6 w-6 text-white" strokeWidth={1.5} />
          </span>
          <p className="mt-8 text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase">
            iOS · Career-focused
          </p>
          <p className="mt-3 text-lg leading-relaxed text-neutral-600">
            Language learning shaped around how you actually work—calm
            interface, clear progress, and content that respects your time.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/hero-b2-beruf/faq"
              className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium tracking-wide text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700"
            >
              FAQ
            </Link>
            <Link
              href="/hero-b2-beruf/privacy-policy"
              className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium tracking-wide text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

import { AppCard } from "../components/app-card";
import { HeroSection } from "../components/hero-section";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { BookOpen, Briefcase } from "lucide-react";

const APPS = [
  {
    icon: BookOpen,
    title: "Hero: Einbürgerungstest 2026",
    subtitle: "Citizenship",
    description:
      "Prepare with confidence for Germany's official naturalization test. Curated question banks, focused practice sessions, and clear progress—aligned for the 2026 exam cycle.",
    accentClassName: "bg-neutral-800",
  },
  {
    icon: Briefcase,
    title: "Hero-Deutsch B2 Beruf",
    subtitle: "Professional German",
    description:
      "Build workplace-ready German at B2 level. Profession-specific vocabulary, realistic dialogues, and structured paths designed for your career—not generic textbooks.",
    accentClassName: "bg-neutral-600",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#f7f7f5] font-sans text-neutral-900">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <section
          id="apps"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10 md:pb-32"
        >
          <div className="mb-12 max-w-xl md:mb-16">
            <h2 className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
              Our apps
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-neutral-600 md:text-xl">
              Two focused experiences. One standard of craft.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {APPS.map((app) => (
              <AppCard key={app.title} {...app} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

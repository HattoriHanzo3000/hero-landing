import type { Metadata } from "next";
import { AppIntro } from "./components/app-intro";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { getHomeAppIntros } from "@/lib/apps/home-apps";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildSocialMetadata } from "@/lib/seo/build-social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getDictionary(locale).home.metadata;

  return buildSocialMetadata({
    title: meta.title,
    description: meta.description,
    path: "/",
    locale,
    image: {
      path: "/images/og-home.jpg",
      alt: "Hero Apps Preview",
    },
  });
}

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const appIntros = getHomeAppIntros(dict, locale);

  return (
    <div className="flex w-full flex-1 flex-col bg-[#f7f7f5] font-sans text-neutral-900">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              {dict.home.title}
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-neutral-500 md:text-2xl">
              {dict.home.subtitle}
            </p>
          </div>
        </section>

        <section id="apps" className="w-full">
          {appIntros.map((app, index) => (
            <section key={app.href} className={`w-full ${app.bgColor}`}>
              <AppIntro
                href={app.href}
                mascotSrc={app.mascotSrc}
                mascotAlt={app.mascotAlt}
                goalTitle={app.goalTitle}
                appName={app.appName}
                description={app.description}
                ctaLabel={dict.home.viewApp}
                isReversed={index % 2 !== 0}
              />
            </section>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

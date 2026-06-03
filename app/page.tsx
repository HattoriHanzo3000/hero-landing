import Link from "next/link";
import { AppCard } from "./components/app-card";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { getHomeApps } from "@/lib/apps/home-apps";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const apps = getHomeApps(dict);

  return (
    <div className="flex w-full flex-1 flex-col bg-[#f7f7f5] font-sans text-neutral-900">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:px-10 md:pt-28 md:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              {dict.home.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-500 md:text-2xl">
              {dict.home.subtitle}
            </p>
          </div>
        </section>

        <section
          id="apps"
          className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10 md:pb-32"
        >
          <div className="mb-10">
            <h2 className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase">
              {dict.home.projectsHeading}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {apps.map(
              ({
                href,
                iconSrc,
                iconAlt,
                title,
                titleAccent,
                subtitle,
                description,
              }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex h-full transition-transform active:scale-[0.99]"
                >
                  <AppCard
                    iconSrc={iconSrc}
                    iconAlt={iconAlt}
                    title={title}
                    titleAccent={titleAccent}
                    subtitle={subtitle}
                    description={description}
                    ctaLabel={dict.home.viewApp}
                  />
                </Link>
              ),
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

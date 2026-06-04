import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function SiteFooter() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <footer className="mt-auto w-full border-t border-neutral-200/60 bg-[#f7f7f5] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-sm text-neutral-500 md:flex-row md:px-10">
        <div className="text-center md:text-left">
          {dict.common.footerCopyright}
        </div>

        <a
          href="mailto:support@gizatech.de"
          className="font-medium transition-colors hover:text-neutral-900"
          aria-label="Contact Support"
        >
          support@gizatech.de
        </a>
      </div>
    </footer>
  );
}

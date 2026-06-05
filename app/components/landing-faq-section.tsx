import { FaqContent } from "@/app/components/faq-content";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import type { ProductKey } from "@/lib/i18n/dictionaries/types";

type LandingFaqSectionProps = {
  product: ProductKey;
};

export async function LandingFaqSection({ product }: LandingFaqSectionProps) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict[product].faq;

  return (
    <section
      id="faq"
      className="mt-20 scroll-mt-10 md:mt-28"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase"
      >
        {t.heading}
      </h2>

      <div className="mt-10">
        <FaqContent
          product={product}
          faq={t}
          comingSoonLabel={dict.common.comingSoon}
        />
      </div>
    </section>
  );
}

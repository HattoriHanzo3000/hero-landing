import { FaqContent } from "@/app/components/faq-content";
import { ContentPage } from "../components/content-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function FaqPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.b2Beruf.faq;

  return (
    <ContentPage eyebrow={dict.common.helpEyebrow} title={t.heading}>
      <FaqContent
        product="b2Beruf"
        faq={t}
        comingSoonLabel={dict.common.comingSoon}
        mode="page"
      />
    </ContentPage>
  );
}

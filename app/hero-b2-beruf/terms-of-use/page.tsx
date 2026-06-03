import { TermsBody } from "@/app/components/terms-body";
import { ContentPage } from "../components/content-page";
import { getB2BerufTerms } from "@/lib/legal/b2-beruf-terms";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function TermsOfUsePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const terms = getB2BerufTerms(locale);

  return (
    <ContentPage
      eyebrow={dict.common.legalEyebrow}
      title={dict.b2Beruf.terms.title}
    >
      <TermsBody
        sections={terms.sections}
        languageNotice={dict.b2Beruf.terms.languageNotice}
      />
    </ContentPage>
  );
}

import { TermsBody } from "@/app/components/terms-body";
import { ContentPage } from "../components/content-page";
import { getCitizenshipTerms } from "@/lib/legal/citizenship-terms";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function TermsOfUsePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const terms = getCitizenshipTerms(locale);

  return (
    <ContentPage
      eyebrow={dict.common.legalEyebrow}
      title={dict.citizenship.terms.title}
    >
      <TermsBody
        sections={terms.sections}
        languageNotice={dict.citizenship.terms.languageNotice}
      />
    </ContentPage>
  );
}

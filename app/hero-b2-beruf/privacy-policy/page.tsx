import { TermsBody } from "@/app/components/terms-body";
import { ContentPage } from "../components/content-page";
import { getB2BerufPrivacy } from "@/lib/legal/b2-beruf-privacy";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const privacy = getB2BerufPrivacy(locale);

  return (
    <ContentPage
      eyebrow={dict.common.legalEyebrow}
      title={dict.b2Beruf.privacy.title}
    >
      <TermsBody
        sections={privacy.sections}
        languageNotice={dict.b2Beruf.privacy.languageNotice}
      />
    </ContentPage>
  );
}

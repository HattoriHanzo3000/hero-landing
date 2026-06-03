import { TermsBody } from "@/app/components/terms-body";
import { ContentPage } from "../components/content-page";
import { getCitizenshipPrivacy } from "@/lib/legal/citizenship-privacy";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const privacy = getCitizenshipPrivacy(locale);

  return (
    <ContentPage
      eyebrow={dict.common.legalEyebrow}
      title={dict.citizenship.privacy.title}
    >
      <TermsBody
        sections={privacy.sections}
        languageNotice={dict.citizenship.privacy.languageNotice}
      />
    </ContentPage>
  );
}

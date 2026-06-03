import { ImpressumBody } from "@/app/components/impressum-body";
import { ContentPage } from "../components/content-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function ImpressumPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <ContentPage
      eyebrow={dict.common.legalEyebrow}
      title={dict.common.impressum.title}
    >
      <ImpressumBody impressum={dict.common.impressum} />
    </ContentPage>
  );
}

import type { Locale } from "@/lib/i18n/config";
import { citizenshipPrivacyEn } from "./en";
import type { CitizenshipPrivacyDocument } from "./types";

export function getCitizenshipPrivacy(
  _locale: Locale,
): CitizenshipPrivacyDocument {
  return citizenshipPrivacyEn;
}

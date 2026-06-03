import type { Locale } from "@/lib/i18n/config";
import { citizenshipTermsEn } from "./en";
import type { CitizenshipTermsDocument } from "./types";

export function getCitizenshipTerms(_locale: Locale): CitizenshipTermsDocument {
  return citizenshipTermsEn;
}

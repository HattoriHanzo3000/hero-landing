import type { Locale } from "@/lib/i18n/config";
import { b2BerufTermsEn } from "./en";
import type { B2BerufTermsDocument } from "./types";

export function getB2BerufTerms(_locale: Locale): B2BerufTermsDocument {
  return b2BerufTermsEn;
}

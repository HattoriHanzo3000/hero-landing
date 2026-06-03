import type { Locale } from "@/lib/i18n/config";
import { b2BerufPrivacyEn } from "./en";
import type { B2BerufPrivacyDocument } from "./types";

export function getB2BerufPrivacy(_locale: Locale): B2BerufPrivacyDocument {
  return b2BerufPrivacyEn;
}

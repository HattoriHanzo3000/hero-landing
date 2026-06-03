import type { Locale } from "./config";
import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import type { Dictionary } from "./dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

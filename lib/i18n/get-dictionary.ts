import type { Locale } from "./config";
import { de } from "./dictionaries/de";
import { en } from "./dictionaries/en";
import { ru } from "./dictionaries/ru";
import type { Dictionary } from "./dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = { en, de, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

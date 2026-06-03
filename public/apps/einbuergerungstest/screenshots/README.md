# Einbürgerungstest screenshots (English + German)

Export **two complete sets** of screenshots—one per app UI language. Place **6** WebP files in each folder (~500×1125 px), numbered **02** through **07**.

When a visitor switches the site language (EN / DE footer switcher), the gallery loads from the matching folder automatically (`getLocale()` → `en/` or `de/`).

## English

```
public/apps/einbuergerungstest/screenshots/en/02.webp
public/apps/einbuergerungstest/screenshots/en/03.webp
… through 07.webp
```

## German

```
public/apps/einbuergerungstest/screenshots/de/02.webp
public/apps/einbuergerungstest/screenshots/de/03.webp
… through 07.webp
```

Use the **same screen order** in both folders (e.g. 02 = topic overview, 03 = question list, …).

Alt text: `lib/i18n/dictionaries/en.ts` and `de.ts` → `citizenship.landing.screenshotAlts` (six entries, in gallery order).

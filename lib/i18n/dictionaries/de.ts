import { APP_NAMES } from "@/lib/apps/app-names";
import type { Dictionary } from "./types";

export const de: Dictionary = {
  language: {
    switcherLabel: "Sprache",
    en: "Englisch",
    de: "Deutsch",
    ru: "Russisch",
  },
  common: {
    nav: {
      support: "Support",
      faq: "FAQ",
      impressum: "Impressum",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
    },
    emailLabel: "E-Mail",
    legalEyebrow: "Rechtliches",
    helpEyebrow: "Hilfe",
    placeholder: "Platzhalter",
    placeholderSections: "Platzhalter-Abschnitte",
    comingSoon: "Demnächst",
    footerCopyright: "© 2025–2026 Ildar Gizatullin. Alle Rechte vorbehalten.",
    headerNavAria: "App-Seiten",
    screenshotPrevLabel: "Vorheriger Screenshot",
    screenshotNextLabel: "Nächster Screenshot",
    impressum: {
      title: "Impressum",
      tmgHeading: "Angaben gemäß § 5 TMG",
      name: "Ildar Gizatullin",
      street: "Friedrichstr. 155",
      city: "10117 Berlin",
      country: "Deutschland",
      contactHeading: "Kontakt",
      emailLabel: "E-Mail",
      email: "info@gizatech.de",
      contentHeading:
        "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
      contentName: "Ildar Gizatullin",
      contentStreet: "Friedrichstr. 155",
      contentCity: "10117 Berlin",
    },
  },
  home: {
    title: "Smarte Apps für dein Leben in Deutschland.",
    subtitle:
      "Ich habe die Hero-App-Reihe basierend auf meinen eigenen Erfahrungen nach dem Umzug nach Deutschland entwickelt. Dies sind hochwertige iOS-Tools, die dir helfen, deine Prüfungen zu bestehen, die Sprache zu meistern und dich sicher zu integrieren.",
    viewApp: "App ansehen",
    apps: {
      citizenship: {
        goalTitle: "Werde deutscher Staatsbürger",
        appName: APP_NAMES.citizenship.full,
        subtitle: "Einbürgerungstest-Simulator",
        description:
          "Nicht nur auswendig lernen, sondern verstehen. 310 BAMF-Fragen in logischen Themen, Smart Learning und Unterstützung in 4 Sprachen für deine Prüfung.",
      },
      b2Beruf: {
        goalTitle: "Meistere Deutsch für den Beruf",
        appName: APP_NAMES.b2Beruf.full,
        subtitle: "Vokabeln für telc DTB B2",
        description:
          "Der perfekte digitale Begleiter für deinen Sprachkurs. Lerne 1.881 wichtige Wörter, trage eigene Übersetzungen ein und bereite dich gezielt auf den telc-Test vor.",
      },
    },
  },
  b2Beruf: {
    appName: APP_NAMES.b2Beruf.full,
    metadata: {
      title: APP_NAMES.b2Beruf.full,
      description:
        "Vokabeln für telc DTB B2—1881 Wörter nach Fokus Deutsch B2, eigene Übersetzungen, Karteikarten und mehr.",
    },
    shell: {
      productNav: APP_NAMES.b2Beruf.full,
    },
    landing: {
      eyebrow: "Vokabeln für telc DTB B2",
      title: APP_NAMES.b2Beruf.title,
      titleAccent: APP_NAMES.b2Beruf.accent,
      description:
        "Baue praktischen deutschen Wortschatz für Alltag und Beruf auf und bereite dich auf den telc Deutsch-Test für den Beruf B2 vor. Orientiert an Fokus Deutsch B2—1881 Wörter in 12 Kapiteln.",
      features: [
        "1881 Wörter in 12 Kapiteln – orientiert an Fokus Deutsch B2",
        "Eigene Übersetzungen, Erklärungen und Beispiele zu jedem Wort",
        "Karteikarten, eigene Vokabeln, Widgets und PDF-Export",
      ],
      downloadCta: "Im App Store laden",
      downloadAria: `${APP_NAMES.b2Beruf.full} im App Store laden`,
      supportLink: "Hilfe nötig? Support kontaktieren",
      screenshotsHeading: "In der App",
      screenshotCloseLabel: "Schließen",
      screenshotAlts: [
        "Kapitelübersicht mit Lernfortschritt",
        "Wortliste eines Fokus Deutsch B2 Kapitels",
        "Wortdetail mit Übersetzung und Beispielen",
        "Karteikarten-Übungsansicht",
        "Eigene Vokabeln im Bereich Meine Wörter",
        "Weiterer App-Bildschirm",
      ],
    },
    support: {
      title: "Wir helfen dir gern",
      intro:
        `Fragen zu ${APP_NAMES.b2Beruf.full}, deinem Konto oder der App? Schreib uns direkt – in der Regel antworten wir innerhalb eines Werktags.`,
      deviceHint:
        "Bitte gib Gerätemodell und iOS-Version an, wenn du ein technisches Problem meldest – so können wir schneller helfen.",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      heading: "FAQ folgt in Kürze",
      bodyBefore:
        "Wir bereiten klare Antworten auf die häufigsten Fragen vor. Bis dahin erreichst du uns unter ",
      bodyAfter: ".",
    },
    privacy: {
      title: "Datenschutzerklärung",
      languageNotice:
        "Die Datenschutzerklärung ist derzeit nur auf Englisch verfügbar.",
    },
    terms: {
      title: "Nutzungsbedingungen",
      languageNotice:
        "Die Nutzungsbedingungen sind derzeit nur auf Englisch verfügbar.",
    },
  },
  citizenship: {
    appName: APP_NAMES.citizenship.full,
    metadata: {
      title: APP_NAMES.citizenship.full,
      description:
        "Vorbereitung auf „Leben in Deutschland“ – 310 BAMF-Fragen in 9 Themen, Spaced Repetition, 4 Sprachen und Prüfungssimulation.",
    },
    shell: {
      productNav: APP_NAMES.citizenship.full,
    },
    landing: {
      eyebrow: "Einbürgerungstest-Simulator",
      title: APP_NAMES.citizenship.title,
      titleAccent: APP_NAMES.citizenship.accent,
      description:
        "Nicht nur auswendig lernen, sondern verstehen. Hero verwandelt den offiziellen Fragenkatalog in ein smartes, wunderschönes Lernerlebnis, das sich deinem Tempo anpasst.",
      features: [
        "9 logische Themen: Alle 310 BAMF-Fragen perfekt portioniert.",
        "Sprachbarrieren überwinden: Sofortige Übersetzungen in 4 Sprachen.",
        "Spaced Repetition: Der Algorithmus wiederholt Schwächen zum perfekten Zeitpunkt.",
      ],
      downloadCta: "Im App Store laden",
      downloadAria: `${APP_NAMES.citizenship.full} im App Store laden`,
      supportLink: "Hilfe nötig? Support kontaktieren",
      screenshotsHeading: "In der App",
      screenshotCloseLabel: "Schließen",
      screenshotAlts: [
        "Themenübersicht mit Lernfortschritt",
        "Fragenliste zu einem Leben-in-Deutschland-Thema",
        "Fragendetail mit Erklärung",
        "Übungsansicht mit Spaced Repetition",
        "Einrichtung der Prüfungssimulation",
        "Weiterer App-Bildschirm",
      ],
    },
    support: {
      title: "Wir helfen dir gern",
      intro:
        `Fragen zu ${APP_NAMES.citizenship.full}, deinem Konto oder der App? Schreib uns direkt – in der Regel antworten wir innerhalb eines Werktags.`,
      deviceHint:
        "Bitte gib Gerätemodell und iOS-Version an, wenn du ein technisches Problem meldest – so können wir schneller helfen.",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      heading: "FAQ folgt in Kürze",
      bodyBefore:
        "Wir bereiten klare Antworten auf die häufigsten Fragen vor. Bis dahin erreichst du uns unter ",
      bodyAfter: ".",
    },
    privacy: {
      title: "Datenschutzerklärung",
      languageNotice:
        "Die Datenschutzerklärung ist derzeit nur auf Englisch verfügbar.",
    },
    terms: {
      title: "Nutzungsbedingungen",
      languageNotice:
        "Die Nutzungsbedingungen sind derzeit nur auf Englisch verfügbar.",
    },
  },
};

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
      heading: "FAQ folgt in Kürze",
      items: [],
      moreQuestions: "Noch Fragen?",
      pageContactPrompt: "Noch Fragen oder brauchst du Hilfe?",
      fullFaqLink: "Lies unsere vollständigen FAQ",
      or: "oder",
      contactSupport: "Kontaktiere den Support",
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
      heading: "Häufig gestellte Fragen",
      items: [
        {
          question: "Sind die Fragen in der App offiziell?",
          answer:
            "Ja, die App enthält alle 310 offiziellen Prüfungsfragen (300 bundesweite + 10 landesspezifische). Bitte beachte, dass Hero eine unabhängige Lern-App ist und nicht in Verbindung mit dem BAMF steht.",
        },
        {
          question: "Ist die App kostenlos?",
          answer:
            "Du kannst Themen erkunden, Prüfungssimulationen durchführen und das Smart Learning System völlig kostenlos testen. Wenn es dir gefällt, kannst du mit Hero Pro den vollen, unbegrenzten Zugang freischalten (als Abo oder einmaliger Lebenszeit-Kauf).",
        },
        {
          question: "Welche Sprachen unterstützt die App?",
          answer:
            "Du kannst die Benutzeroberfläche und die Übersetzungen auf Deutsch, Englisch, Russisch oder Türkisch einstellen. Die Übersetzungssprache lässt sich jederzeit wechseln, sodass komplexe Begriffe leicht verständlich sind.",
        },
        {
          question: "Sind Fragen für mein spezifisches Bundesland enthalten?",
          answer:
            "Ja. Beim ersten Start wählst du dein Bundesland aus. Die App integriert deine 10 landesspezifischen Fragen automatisch in deine Übungseinheiten und Prüfungssimulationen.",
        },
        {
          question: "Wie funktioniert das Smart Learning System?",
          answer:
            "Es nutzt 'Spaced Repetition' – einen bewährten Algorithmus, der schwierige Fragen zum perfekten Zeitpunkt wiederholt, damit du dir mehr mit weniger Aufwand merkst. Kombiniert mit unserem Echtzeit-Prüfungssimulator weißt du genau, wann du bereit für die Prüfung bist.",
        },
      ],
      moreQuestions: "Noch Fragen?",
      pageContactPrompt: "Noch Fragen oder brauchst du Hilfe?",
      fullFaqLink: "Lies unsere vollständigen FAQ",
      or: "oder",
      contactSupport: "Kontaktiere den Support",
      pageItems: [
        {
          question: "Was ist Hero und für wen ist es gedacht?",
          answer:
            "Hero ist eine iOS-App, die dir hilft, dich auf den deutschen Test „Leben in Deutschland“ / Einbürgerungstest vorzubereiten. Du kannst mit dem offiziellen Fragenkatalog üben, deinen Fortschritt verfolgen und die echte Prüfung simulieren — in deinem eigenen Tempo und in deiner bevorzugten Sprache.",
        },
        {
          question: "Sind die Fragen in der App offiziell?",
          answer:
            "Die App enthält alle 310 offiziellen Prüfungsfragen (300 bundesweite Fragen plus 10 zu deinem gewählten Bundesland). Hero ist eine unabhängige Lern-App und ist nicht mit dem BAMF (Bundesamt für Migration und Flüchtlinge) verbunden, von diesem autorisiert oder unterstützt. Der offizielle Test wird vom BAMF durchgeführt.",
        },
        {
          question: "Was kann ich kostenlos nutzen?",
          answer:
            "Du kannst die App erkunden, ohne zu bezahlen: Fragen durchsuchen und ansehen, eine Themenkategorie kostenlos lernen, bis zu 5 Favoriten speichern, bis zu 30 Smart Learning-Fragen beantworten und bis zu 3 Prüfungssimulationen durchführen. Das Cockpit (Fortschritts-Dashboard), die Bundeslandauswahl und die Übersetzungsfunktion stehen im kostenlosen Tarif ebenfalls zur Verfügung.",
        },
        {
          question: "Was ist Hero Pro und was wird damit freigeschaltet?",
          answer:
            "Hero Pro hebt die kostenlosen Limits auf und schaltet jedes Lernthema frei. Mit Pro erhältst du unbegrenztes Smart Learning, unbegrenzte Prüfungssimulationen, unbegrenzte Favoriten und vollen Zugriff auf das „Lernen nach Themen“. Pro unterstützt außerdem die kontinuierliche Weiterentwicklung und Inhaltsupdates der App.",
        },
        {
          question: "Welche Abo-Optionen gibt es?",
          answer:
            "Hero Pro ist über den App Store erhältlich. Die Tarife umfassen in der Regel Monats- und Jahresabos sowie einen einmaligen Lebenszeit-Kauf (Lifetime). Viele Tarife beinhalten eine 3-tägige kostenlose Testversion — du kannst jederzeit vor Ablauf der Testphase kündigen, um Kosten zu vermeiden. Genaue Preise und Tarife werden in der App angezeigt und können je nach Region variieren.",
        },
        {
          question: "Wie stelle ich einen Kauf wieder her oder verwalte mein Abo?",
          answer:
            "Wenn du bereits mit dieser Apple-ID ein Abo abgeschlossen hast, öffne in der App Einstellungen → Hero Pro und tippe auf „Käufe wiederherstellen“. Um ein Abo zu ändern oder zu kündigen, gehe zu Einstellungen → Hero Pro → „Abo verwalten“ oder öffne die Einstellungen deines App Store-Kontos auf deinem iPhone. Abonnements verlängern sich automatisch, wenn du nicht mindestens 24 Stunden vor Ablauf des aktuellen Zeitraums kündigst.",
        },
        {
          question: "Wie funktioniert die Prüfungssimulation?",
          answer:
            "Die Prüfungssimulation spiegelt den offiziellen Test wider: 33 Fragen (30 bundesweit + 3 aus deinem Bundesland), 60 Minuten Zeit und ein einziger Versuch ohne Hinweise oder Übersetzungen während des Tests. Du benötigst mindestens 17 richtige Antworten, um zu bestehen. Dein Ergebnis beeinflusst deinen Bereitschafts-Score (Readiness Score) im Cockpit.",
        },
        {
          question: "Was ist Smart Learning?",
          answer:
            "Smart Learning nutzt „Spaced Repetition“ — eine bewährte Methode, die Fragen zur richtigen Zeit wiederholt, damit du dir mit weniger Aufwand mehr merkst. Deine Antworten aktualisieren deinen Fortschritt und deinen Bereitschafts-Score. Kostenlose Nutzer können bis zu 30 Smart Learning-Fragen beantworten; für Pro-Nutzer gibt es kein Limit.",
        },
        {
          question: "Warum muss ich ein Bundesland auswählen?",
          answer:
            "Die echte Prüfung enthält Fragen zu dem Bundesland, in dem du den Test ablegst. In Hero sind die Fragen 301–310 spezifisch für dein gewähltes Bundesland. Wähle dein Bundesland beim Onboarding oder in den Einstellungen. Wenn du dein Bundesland später änderst, wird dein gesamter Fortschritt zurückgesetzt, da sich der Fragenkatalog ändert.",
        },
        {
          question: "Welche Sprachen unterstützt die App?",
          answer:
            "Du kannst die Sprache der Benutzeroberfläche und eine separate Übersetzungssprache für Fragen und Antworten einstellen. Unterstützte Sprachen sind Deutsch, Englisch, Russisch und Türkisch. Du kannst beide jederzeit in den Einstellungen ändern.",
        },
        {
          question: "Wo wird mein Fortschritt gespeichert?",
          answer:
            "Dein Lernfortschritt, deine Favoriten und Statistiken werden lokal auf deinem Gerät gespeichert. Sie werden nicht mit der Cloud synchronisiert. Wenn du die App löschst, in den Einstellungen zurücksetzt oder dein Bundesland änderst, kann dein Fortschritt verloren gehen — stelle also sicher, dass dein Bundesland und dein Prüfungsdatum richtig eingestellt sind, bevor du ernsthaft mit dem Lernen beginnst.",
        },
        {
          question: "Wie wird mein Bereitschafts-Score berechnet?",
          answer:
            "Dein Bereitschafts-Score (Readiness Score) spiegelt wider, wie gut du den Stoff beherrschst, basierend auf deiner Übung in den Modi, die zum Fortschritt zählen (Smart Learning und Prüfungssimulation). Das Cockpit zeigt detaillierte Statistiken, damit du genau siehst, wie nah du der Prüfungsreife bist. Das „Lernen nach Themen“ und „Alle Fragen“ dienen nur der Übung und beeinflussen den Score nicht auf die gleiche Weise.",
        },
      ],
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

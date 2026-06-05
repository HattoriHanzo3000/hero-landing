import { APP_NAMES } from "@/lib/apps/app-names";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  language: {
    switcherLabel: "Language",
    en: "English",
    de: "German",
    ru: "Russian",
  },
  common: {
    nav: {
      support: "Support",
      faq: "FAQ",
      impressum: "Impressum",
      privacy: "Privacy",
      terms: "Terms",
    },
    emailLabel: "Email",
    legalEyebrow: "Legal",
    helpEyebrow: "Help",
    placeholder: "Placeholder",
    placeholderSections: "Placeholder sections",
    comingSoon: "Coming soon",
    footerCopyright: "© 2025–2026 Ildar Gizatullin. All rights reserved.",
    headerNavAria: "App pages",
    screenshotPrevLabel: "Previous screenshot",
    screenshotNextLabel: "Next screenshot",
    impressum: {
      title: "Impressum",
      tmgHeading: "Information pursuant to § 5 TMG",
      name: "Ildar Gizatullin",
      street: "Friedrichstr. 155",
      city: "10117 Berlin",
      country: "Germany",
      contactHeading: "Contact",
      emailLabel: "Email",
      email: "info@gizatech.de",
      contentHeading:
        "Responsible for content pursuant to § 55 (2) RStV",
      contentName: "Ildar Gizatullin",
      contentStreet: "Friedrichstr. 155",
      contentCity: "10117 Berlin",
    },
  },
  home: {
    title: "Focused apps for your life in Germany.",
    subtitle:
      "I built the Hero app series based on my own experience of moving to Germany. These are high-craft iOS tools designed to help you pass your exams, master the language, and integrate with confidence.",
    viewApp: "View app",
    apps: {
      citizenship: {
        goalTitle: "Become a German Citizen",
        appName: APP_NAMES.citizenship.full,
        subtitle: "Citizenship test simulator",
        description:
          "Don't just memorize—master the 'Life in Germany' test. Features 310 official questions logically grouped, smart repetition, and support in 4 languages.",
      },
      b2Beruf: {
        goalTitle: "Master Professional German",
        appName: APP_NAMES.b2Beruf.full,
        subtitle: "Vocabulary for telc DTB B2",
        description:
          "The perfect digital companion for your language course. Learn 1,881 essential words, add your own translations, and prepare confidently for the telc exam.",
      },
    },
  },
  b2Beruf: {
    appName: APP_NAMES.b2Beruf.full,
    metadata: {
      title: APP_NAMES.b2Beruf.full,
      description:
        "Vocabulary for telc DTB B2—1,881 words aligned with Fokus Deutsch B2, your own translations, flashcards, and more.",
    },
    shell: {
      productNav: APP_NAMES.b2Beruf.full,
    },
    landing: {
      eyebrow: "Vocabulary for telc DTB B2",
      title: APP_NAMES.b2Beruf.title,
      titleAccent: APP_NAMES.b2Beruf.accent,
      description:
        "Build practical German vocabulary for everyday life and work—and prepare for the telc Deutsch-Test für den Beruf B2. Structured around Fokus Deutsch B2, with 1,881 words across 12 chapters.",
      features: [
        "1,881 words in 12 chapters—aligned with Fokus Deutsch B2",
        "Your own translations, explanations, and examples for every word",
        "Flashcards, custom vocabulary, widgets, and PDF export",
      ],
      downloadCta: "Download on the App Store",
      downloadAria: `Download ${APP_NAMES.b2Beruf.full} on the App Store`,
      supportLink: "Need help? Contact support",
      screenshotsHeading: "Inside the app",
      screenshotCloseLabel: "Close",
      screenshotAlts: [
        "Chapter overview with vocabulary progress",
        "Word list for a Fokus Deutsch B2 chapter",
        "Word detail with translation and examples",
        "Flashcard practice screen",
        "My Words custom vocabulary section",
        "Additional app screen",
      ],
    },
    support: {
      title: "We're here to help",
      intro:
        `Questions about ${APP_NAMES.b2Beruf.full}, your account, or the app? Reach our team directly—we typically respond within one business day.`,
      deviceHint:
        "Please include your device model and iOS version if you're reporting a technical issue—it helps us resolve things faster.",
    },
    faq: {
      title: "Frequently asked questions",
      heading: "FAQ coming soon",
      bodyBefore:
        "We're preparing clear answers to the questions we hear most often. Until then, reach us via ",
      bodyAfter: ".",
    },
    privacy: {
      title: "Privacy Policy",
    },
    terms: {
      title: "Terms of Use",
    },
  },
  citizenship: {
    appName: APP_NAMES.citizenship.full,
    metadata: {
      title: APP_NAMES.citizenship.full,
      description:
        "Prepare for the Life in Germany test—310 BAMF questions in 9 themes, spaced repetition, 4 languages, and exam simulation.",
    },
    shell: {
      productNav: APP_NAMES.citizenship.full,
    },
    landing: {
      eyebrow: "Citizenship test simulator",
      title: APP_NAMES.citizenship.title,
      titleAccent: APP_NAMES.citizenship.accent,
      description:
        "Don't just memorize—understand. Hero transforms the chaotic official catalog into a smart, beautifully designed learning experience that adapts to your pace.",
      features: [
        "9 logical themes: All 310 BAMF questions broken down for easy studying.",
        "Overcome language barriers: Instant translations in 4 languages.",
        "Spaced Repetition: The algorithm repeats your weak spots at the perfect time.",
      ],
      downloadCta: "Download on the App Store",
      downloadAria: `Download ${APP_NAMES.citizenship.full} on the App Store`,
      supportLink: "Need help? Contact support",
      screenshotsHeading: "Inside the app",
      screenshotCloseLabel: "Close",
      screenshotAlts: [
        "Topic overview with learning progress",
        "Question list for a Life in Germany theme",
        "Question detail with explanation",
        "Spaced repetition practice screen",
        "Exam simulation setup",
        "Additional app screen",
      ],
    },
    support: {
      title: "We're here to help",
      intro:
        `Questions about ${APP_NAMES.citizenship.full}, your account, or the app? Reach our team directly—we typically respond within one business day.`,
      deviceHint:
        "Please include your device model and iOS version if you're reporting a technical issue—it helps us resolve things faster.",
    },
    faq: {
      title: "Frequently asked questions",
      heading: "FAQ coming soon",
      bodyBefore:
        "We're preparing clear answers to the questions we hear most often. Until then, reach us via ",
      bodyAfter: ".",
    },
    privacy: {
      title: "Privacy Policy",
    },
    terms: {
      title: "Terms of Use",
    },
  },
};

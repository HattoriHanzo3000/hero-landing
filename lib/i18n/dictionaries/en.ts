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
      heading: "FAQ coming soon",
      items: [],
      moreQuestions: "More questions?",
      pageContactPrompt: "Still have questions or need help?",
      fullFaqLink: "Read our full FAQ",
      or: "or",
      contactSupport: "Contact support",
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
      heading: "Frequently asked questions",
      items: [
        {
          question: "Are the questions in the app official?",
          answer:
            "Yes, the app contains all 310 official exam questions (300 federal + 10 state-specific). Please note that Hero is an independent learning app and is not affiliated with BAMF.",
        },
        {
          question: "Is the app free?",
          answer:
            "You can explore topics, run exam simulations, and try the Smart Learning system completely free. If you like it, you can unlock full unlimited access with Hero Pro (subscription or one-time lifetime purchase).",
        },
        {
          question: "What languages does the app support?",
          answer:
            "You can set the interface and translations to German, English, Russian, or Turkish. You can switch the translation language anytime so complex terms are easy to understand.",
        },
        {
          question: "Are questions for my specific federal state included?",
          answer:
            "Yes. On first launch you select your Bundesland. The app automatically integrates your 10 state-specific questions into practice sessions and exam simulations.",
        },
        {
          question: "How does the Smart Learning system work?",
          answer:
            "It uses spaced repetition—a proven algorithm that repeats difficult questions at the perfect time so you remember more with less effort. Combined with our real-time exam simulator, you'll know exactly when you're ready for the test.",
        },
      ],
      moreQuestions: "More questions?",
      pageContactPrompt: "Still have questions or need help?",
      fullFaqLink: "Read our full FAQ",
      or: "or",
      contactSupport: "Contact support",
      pageItems: [
        {
          question: "What is Hero and who is it for?",
          answer:
            "Hero is an iOS app that helps you prepare for the German Leben in Deutschland / Einbürgerungstest (citizenship test). You can practice with the official question catalog, track your progress, and simulate the real exam — at your own pace, in your preferred language.",
        },
        {
          question: "Are the questions in the app official?",
          answer:
            "The app includes all 310 official exam questions (300 federal questions plus 10 about your chosen federal state). Hero is an independent learning app and is not affiliated with, authorized by, or endorsed by BAMF (Bundesamt für Migration und Flüchtlinge). The official test is administered by BAMF.",
        },
        {
          question: "What can I use for free?",
          answer:
            "You can explore the app without paying: browse and search questions, study one topic category for free, save up to 5 favorites, answer up to 30 Smart Learning questions, and run up to 3 test simulations. The Cockpit (progress dashboard), federal state selection, and translation support are also available on the free plan.",
        },
        {
          question: "What is Hero Pro and what does it unlock?",
          answer:
            "Hero Pro removes the free limits and opens every learning topic. With Pro you get unlimited Smart Learning, unlimited test simulations, unlimited favorites, and full access to Learn by Topics. Pro also supports the app's continued development and content updates.",
        },
        {
          question: "What subscription options are available?",
          answer:
            "Hero Pro is available through the App Store. Plans typically include monthly and yearly subscriptions, as well as a one-time lifetime purchase. Many plans include a 3-day free trial — you can cancel anytime before the trial ends to avoid being charged. Exact prices and plans are shown in the app and may vary by region.",
        },
        {
          question: "How do I restore a purchase or manage my subscription?",
          answer:
            'If you already subscribed on this Apple ID, open Settings → Hero Pro in the app and tap "Restore Purchases." To change or cancel a subscription, go to Settings → Hero Pro → "Manage Subscription," or open your App Store account settings on your iPhone. Subscriptions renew automatically unless you cancel at least 24 hours before the end of the current period.',
        },
        {
          question: "How does the test simulation work?",
          answer:
            "Test Simulation mirrors the official exam: 33 questions (30 federal + 3 from your federal state), 60 minutes, and a single attempt with no hints or translations during the test. You need at least 17 correct answers to pass. Your result affects your readiness score in the Cockpit.",
        },
        {
          question: "What is Smart Learning?",
          answer:
            "Smart Learning uses spaced repetition — a proven method that brings questions back at the right time so you remember more with less effort. Your answers update your progress and readiness score. Free users can answer up to 30 Smart Learning questions; Pro users have no limit.",
        },
        {
          question: "Why do I need to choose a federal state?",
          answer:
            "The real exam includes questions about the state where you take the test. In Hero, questions 301–310 are specific to your chosen Bundesland. Pick your state during onboarding or in Settings. If you change your federal state later, all progress is reset because the question set changes.",
        },
        {
          question: "Which languages does the app support?",
          answer:
            "You can set the app interface language and a separate translation language for questions and answers. Supported languages are German, English, Russian, and Turkish. You can change both at any time in Settings.",
        },
        {
          question: "Where is my progress stored?",
          answer:
            "Your learning progress, favorites, and statistics are stored locally on your device. They are not synced to the cloud. If you delete the app, reset it in Settings, or change your federal state, your progress may be lost — so make sure your state and test date are set correctly before you start studying seriously.",
        },
        {
          question: "How is my readiness score calculated?",
          answer:
            "Your readiness score reflects how well you know the material based on your practice across modes that count toward progress (Smart Learning and Test Simulation). The Cockpit shows detailed stats so you can see how close you are to being exam-ready. Learn by Topics and All Questions are for practice and do not affect the score in the same way.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
    },
    terms: {
      title: "Terms of Use",
    },
  },
};

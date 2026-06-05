import type { Locale } from "../config";

export type Dictionary = {
  language: {
    switcherLabel: string;
    en: string;
    de: string;
    ru: string;
  };
  common: {
    nav: {
      support: string;
      faq: string;
      impressum: string;
      privacy: string;
      terms: string;
    };
    emailLabel: string;
    legalEyebrow: string;
    helpEyebrow: string;
    comingSoon: string;
    footerCopyright: string;
    headerNavAria: string;
    screenshotPrevLabel: string;
    screenshotNextLabel: string;
    impressum: {
      title: string;
      tmgHeading: string;
      name: string;
      street: string;
      city: string;
      country: string;
      contactHeading: string;
      emailLabel: string;
      email: string;
      contentHeading: string;
      contentName: string;
      contentStreet: string;
      contentCity: string;
    };
  };
  home: {
    metadata: {
      title: string;
      description: string;
    };
    title: string;
    subtitle: string;
    viewApp: string;
    apps: {
      citizenship: {
        goalTitle: string;
        appName: string;
        subtitle: string;
        description: string;
      };
      b2Beruf: {
        goalTitle: string;
        appName: string;
        subtitle: string;
        description: string;
      };
    };
  };
  b2Beruf: {
    appName: string;
    metadata: {
      title: string;
      description: string;
    };
    shell: {
      productNav: string;
    };
    landing: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      features: readonly [string, string, string];
      downloadCta: string;
      downloadAria: string;
      supportLink: string;
      screenshotsHeading: string;
      screenshotCloseLabel: string;
      screenshotAlts: readonly [
        string,
        string,
        string,
        string,
        string,
        string,
      ];
    };
    support: {
      title: string;
      intro: string;
      deviceHint: string;
    };
    faq: {
      heading: string;
      items: readonly { question: string; answer: string }[];
      pageItems?: readonly { question: string; answer: string }[];
      pageLanguageNotice?: string;
      moreQuestions: string;
      pageContactPrompt: string;
      fullFaqLink: string;
      or: string;
      contactSupport: string;
      bodyBefore?: string;
      bodyAfter?: string;
    };
    privacy: {
      title: string;
      languageNotice?: string;
    };
    terms: {
      title: string;
      languageNotice?: string;
    };
  };
  citizenship: {
    appName: string;
    metadata: {
      title: string;
      description: string;
    };
    shell: {
      productNav: string;
    };
    landing: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      description: string;
      features: readonly [string, string, string];
      downloadCta: string;
      downloadAria: string;
      supportLink: string;
      screenshotsHeading: string;
      screenshotCloseLabel: string;
      screenshotAlts: readonly [
        string,
        string,
        string,
        string,
        string,
        string,
      ];
    };
    support: {
      title: string;
      intro: string;
      deviceHint: string;
    };
    faq: {
      heading: string;
      items: readonly { question: string; answer: string }[];
      pageItems?: readonly { question: string; answer: string }[];
      pageLanguageNotice?: string;
      moreQuestions: string;
      pageContactPrompt: string;
      fullFaqLink: string;
      or: string;
      contactSupport: string;
      bodyBefore?: string;
      bodyAfter?: string;
    };
    privacy: {
      title: string;
      languageNotice?: string;
    };
    terms: {
      title: string;
      languageNotice?: string;
    };
  };
};


export type ProductKey = "b2Beruf" | "citizenship";

export type Dictionaries = Record<Locale, Dictionary>;

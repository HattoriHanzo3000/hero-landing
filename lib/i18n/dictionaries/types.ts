import type { Locale } from "../config";

export type Dictionary = {
  language: {
    switcherLabel: string;
    en: string;
    de: string;
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
    placeholder: string;
    placeholderSections: string;
    comingSoon: string;
    footerCopyright: string;
    headerNavAria: string;
  };
  home: {
    title: string;
    subtitle: string;
    projectsHeading: string;
    viewApp: string;
    apps: {
      citizenship: {
        title: string;
        titleAccent: string;
        subtitle: string;
        description: string;
      };
      b2Beruf: {
        title: string;
        titleAccent: string;
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
      screenshotExpandHint: string;
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
      title: string;
      heading: string;
      bodyBefore: string;
      bodyAfter: string;
    };
    impressum: {
      title: string;
      intro: string;
      placeholderBody: string;
    };
    privacy: {
      title: string;
      intro: string;
      sections: readonly [string, string, string, string, string];
    };
    terms: {
      title: string;
      intro: string;
      sections: readonly [string, string, string, string, string];
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
      cardEyebrow: string;
      cardBody: string;
    };
    support: {
      title: string;
      intro: string;
      deviceHint: string;
    };
    faq: {
      title: string;
      heading: string;
      bodyBefore: string;
      bodyAfter: string;
    };
    impressum: {
      title: string;
      intro: string;
      placeholderBody: string;
    };
    privacy: {
      title: string;
      intro: string;
      sections: readonly [string, string, string, string, string];
    };
    terms: {
      title: string;
      intro: string;
      sections: readonly [string, string, string, string, string];
    };
  };
};

export type ProductKey = "b2Beruf" | "citizenship";

export type Dictionaries = Record<Locale, Dictionary>;

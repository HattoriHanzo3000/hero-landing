import type { Dictionary } from "./types";

export const ru: Dictionary = {
  language: {
    switcherLabel: "Язык",
    en: "Английский",
    de: "Немецкий",
    ru: "Русский",
  },
  common: {
    nav: {
      support: "Поддержка",
      faq: "FAQ",
      impressum: "Impressum",
      privacy: "Конфиденциальность",
      terms: "Условия",
    },
    emailLabel: "Email",
    legalEyebrow: "Правовая информация",
    helpEyebrow: "Помощь",
    placeholder: "Заглушка",
    placeholderSections: "Разделы-заглушки",
    comingSoon: "Скоро",
    footerCopyright: "© 2025–2026 Ildar Gizatullin. Все права защищены.",
    headerNavAria: "Страницы приложений",
    impressum: {
      title: "Impressum",
      tmgHeading: "Сведения согласно § 5 TMG",
      name: "Ildar Gizatullin",
      street: "Friedrichstr. 155",
      city: "10117 Berlin",
      country: "Германия",
      contactHeading: "Контакты",
      emailLabel: "Email",
      email: "info@gizatech.de",
      contentHeading:
        "Ответственный за контент согласно § 55 Abs. 2 RStV",
      contentName: "Ildar Gizatullin",
      contentStreet: "Friedrichstr. 155",
      contentCity: "10117 Berlin",
    },
  },
  home: {
    title: "Продуманные приложения для жизни в Германии.",
    subtitle:
      "Я создал серию приложений Hero, опираясь на собственный опыт переезда в Германию. Это качественные iOS-инструменты, которые помогут тебе сдать экзамены, освоить язык и уверенно интегрироваться.",
    viewApp: "Смотреть приложение",
    apps: {
      citizenship: {
        goalTitle: "Стань гражданином Германии",
        appName: "Hero: Einbürgerungstest 2026",
        subtitle: "Симулятор теста на гражданство",
        description:
          "Не просто зубри — понимай. 310 официальных вопросов с логической разбивкой, умное повторение (SRS) и переводы на 4 языка для уверенной сдачи.",
      },
      b2Beruf: {
        goalTitle: "Освой профессиональный немецкий",
        appName: "Hero: B2 Beruf Vokabeln",
        subtitle: "Словарь для telc DTB B2",
        description:
          "Идеальный цифровой компаньон для твоего языкового курса. 1881 важное слово, возможность добавлять свои переводы и фокус на успешную сдачу telc.",
      },
    },
  },
  b2Beruf: {
    appName: "Hero: Немецкий словарь B2",
    metadata: {
      title: "Hero: Немецкий словарь B2",
      description:
        "Словарь для telc DTB B2—1 881 слово по Fokus Deutsch B2, свои переводы, карточки и многое другое.",
    },
    shell: {
      productNav: "Hero: Немецкий словарь B2",
    },
    landing: {
      eyebrow: "Словарь для telc DTB B2",
      title: "Hero:",
      titleAccent: "Немецкий словарь B2",
      description:
        "Практичный немецкий для жизни и работы и подготовка к telc Deutsch-Test für den Beruf B2. По структуре Fokus Deutsch B2: 1 881 слово в 12 главах.",
      features: [
        "1 881 слово в 12 главах—по программе Fokus Deutsch B2",
        "Свои переводы, пояснения и примеры для каждого слова",
        "Карточки, свой словарь, виджеты и экспорт в PDF",
      ],
      downloadCta: "Скачать в App Store",
      downloadAria: "Скачать Hero: Немецкий словарь B2 в App Store",
      supportLink: "Нужна помощь? Напишите в поддержку",
      screenshotsHeading: "Внутри приложения",
      screenshotExpandHint: "Нажмите, чтобы увеличить",
      screenshotCloseLabel: "Закрыть",
      screenshotAlts: [
        "Обзор глав с прогрессом по словарю",
        "Список слов главы Fokus Deutsch B2",
        "Карточка слова с переводом и примерами",
        "Экран тренировки с карточками",
        "Раздел «Мои слова»",
        "Дополнительный экран приложения",
      ],
    },
    support: {
      title: "Мы готовы помочь",
      intro:
        "Вопросы по Hero: Немецкий словарь B2, аккаунту или приложению? Напишите нам напрямую—обычно отвечаем в течение одного рабочего дня.",
      deviceHint:
        "При технической проблеме укажите модель устройства и версию iOS—так мы быстрее разберёмся.",
    },
    faq: {
      title: "Частые вопросы",
      heading: "FAQ скоро появится",
      bodyBefore:
        "Готовим понятные ответы на самые частые вопросы. Пока что напишите нам на ",
      bodyAfter: ".",
    },
    privacy: {
      title: "Политика конфиденциальности",
      languageNotice:
        "Полный текст политики конфиденциальности доступен на английском.",
    },
    terms: {
      title: "Условия использования",
      languageNotice:
        "Полный текст условий использования доступен на английском.",
    },
  },
  citizenship: {
    appName: "Hero: Немецкое гражданство 2026",
    metadata: {
      title: "Hero: Немецкое гражданство 2026",
      description:
        "Подготовка к тесту «Leben in Deutschland»—310 вопросов BAMF в 9 темах, интервальные повторения, 4 языка и симуляция экзамена.",
    },
    shell: {
      productNav: "Hero: Немецкое гражданство 2026",
    },
    landing: {
      eyebrow: "Симулятор теста на гражданство",
      title: "Hero:",
      titleAccent: "Немецкое гражданство 2026",
      description:
        "Не зубрите—освойте тест «Leben in Deutschland». Hero 2.0 собирает все 310 официальных вопросов в систему обучения. На немецком, английском, русском и турецком.",
      features: [
        "9 тем: все 310 официальных вопросов, структурированно, а не хаотичные списки",
        "Smart Learning (SRS): слабые места повторяются вовремя",
        "Реальная симуляция экзамена: 33 вопроса, 60 минут, с учётом вашей земли",
      ],
      downloadCta: "Скачать в App Store",
      downloadAria: "Скачать Hero: Немецкое гражданство 2026 в App Store",
      supportLink: "Нужна помощь? Напишите в поддержку",
      screenshotsHeading: "Внутри приложения",
      screenshotExpandHint: "Нажмите, чтобы увеличить",
      screenshotCloseLabel: "Закрыть",
      screenshotAlts: [
        "Обзор тем с прогрессом обучения",
        "Список вопросов темы «Leben in Deutschland»",
        "Вопрос с пояснением",
        "Экран интервальных повторений",
        "Настройка симуляции экзамена",
        "Дополнительный экран приложения",
      ],
    },
    support: {
      title: "Мы готовы помочь",
      intro:
        "Вопросы по Hero: Немецкое гражданство 2026, аккаунту или приложению? Напишите нам напрямую—обычно отвечаем в течение одного рабочего дня.",
      deviceHint:
        "При технической проблеме укажите модель устройства и версию iOS—так мы быстрее разберёмся.",
    },
    faq: {
      title: "Частые вопросы",
      heading: "FAQ скоро появится",
      bodyBefore:
        "Готовим понятные ответы на самые частые вопросы. Пока что напишите нам на ",
      bodyAfter: ".",
    },
    privacy: {
      title: "Политика конфиденциальности",
      languageNotice:
        "Полный текст политики конфиденциальности доступен на английском.",
    },
    terms: {
      title: "Условия использования",
      languageNotice:
        "Полный текст условий использования доступен на английском.",
    },
  },
};

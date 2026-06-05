import { APP_NAMES } from "@/lib/apps/app-names";
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
    screenshotPrevLabel: "Предыдущий скриншот",
    screenshotNextLabel: "Следующий скриншот",
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
        appName: APP_NAMES.citizenship.full,
        subtitle: "Симулятор теста на гражданство",
        description:
          "Не просто зубри — понимай. 310 официальных вопросов с логической разбивкой, умное повторение (SRS) и переводы на 4 языка для уверенной сдачи.",
      },
      b2Beruf: {
        goalTitle: "Освой профессиональный немецкий",
        appName: APP_NAMES.b2Beruf.full,
        subtitle: "Словарь для telc DTB B2",
        description:
          "Идеальный цифровой компаньон для твоего языкового курса. 1881 важное слово, возможность добавлять свои переводы и фокус на успешную сдачу telc.",
      },
    },
  },
  b2Beruf: {
    appName: APP_NAMES.b2Beruf.full,
    metadata: {
      title: APP_NAMES.b2Beruf.full,
      description:
        "Словарь для telc DTB B2—1 881 слово по Fokus Deutsch B2, свои переводы, карточки и многое другое.",
    },
    shell: {
      productNav: APP_NAMES.b2Beruf.full,
    },
    landing: {
      eyebrow: "Словарь для telc DTB B2",
      title: APP_NAMES.b2Beruf.title,
      titleAccent: APP_NAMES.b2Beruf.accent,
      description:
        "Практичный немецкий для жизни и работы и подготовка к telc Deutsch-Test für den Beruf B2. По структуре Fokus Deutsch B2: 1 881 слово в 12 главах.",
      features: [
        "1 881 слово в 12 главах—по программе Fokus Deutsch B2",
        "Свои переводы, пояснения и примеры для каждого слова",
        "Карточки, свой словарь, виджеты и экспорт в PDF",
      ],
      downloadCta: "Скачать в App Store",
      downloadAria: `Скачать ${APP_NAMES.b2Beruf.full} в App Store`,
      supportLink: "Нужна помощь? Напишите в поддержку",
      screenshotsHeading: "Внутри приложения",
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
        `Вопросы по ${APP_NAMES.b2Beruf.full}, аккаунту или приложению? Напишите нам напрямую—обычно отвечаем в течение одного рабочего дня.`,
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
    appName: APP_NAMES.citizenship.full,
    metadata: {
      title: APP_NAMES.citizenship.full,
      description:
        "Подготовка к тесту «Leben in Deutschland»—310 вопросов BAMF в 9 темах, интервальные повторения, 4 языка и симуляция экзамена.",
    },
    shell: {
      productNav: APP_NAMES.citizenship.full,
    },
    landing: {
      eyebrow: "Симулятор теста на гражданство",
      title: APP_NAMES.citizenship.title,
      titleAccent: APP_NAMES.citizenship.accent,
      description:
        "Не просто зубри — понимай. Hero превращает хаотичный официальный каталог в умную и красивую систему обучения, которая подстраивается под твой темп.",
      features: [
        "9 логических тем: все 310 вопросов BAMF разбиты для легкого изучения.",
        "Без языковых барьеров: моментальные переводы на 4 языка.",
        "Умные повторения (SRS): алгоритм повторяет сложные вопросы в идеальное время.",
      ],
      downloadCta: "Скачать в App Store",
      downloadAria: `Скачать ${APP_NAMES.citizenship.full} в App Store`,
      supportLink: "Нужна помощь? Напишите в поддержку",
      screenshotsHeading: "Внутри приложения",
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
        `Вопросы по ${APP_NAMES.citizenship.full}, аккаунту или приложению? Напишите нам напрямую—обычно отвечаем в течение одного рабочего дня.`,
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

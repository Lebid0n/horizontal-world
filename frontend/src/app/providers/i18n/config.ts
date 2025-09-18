import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enShared from '@/shared/lib/i18n/en.json'
import ruShared from '@/shared/lib/i18n/ru.json'

export const i18nConfig = {
  debug: import.meta.env.DEV,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        ...enShared,
      },
    },
    ru: {
      translation: {
        ...ruShared,
      },
    },
  },
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
}

export const initializeI18n = () => {
  return i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig)
}

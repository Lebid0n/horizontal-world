import { useTranslation as useOriginalTranslation } from 'react-i18next'

export const useTranslation = () => {
  return useOriginalTranslation()
}

export const useLanguage = () => {
  const { i18n } = useTranslation()

  return {
    language: i18n.language,
    changeLanguage: i18n.changeLanguage,
    languages: ['en', 'ru'],
  }
}

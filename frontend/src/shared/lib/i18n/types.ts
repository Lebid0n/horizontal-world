export interface TranslationResources {
  [key: string]: {
    translation: Record<string, string>
  }
}

export type Language = 'en' | 'ru'

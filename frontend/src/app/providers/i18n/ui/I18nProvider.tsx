import { useEffect } from 'react'
import { initializeI18n } from '../config'

interface I18nProviderProps {
  children: React.ReactNode
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  useEffect(() => {
    initializeI18n()
  }, [])

  return <>{children}</>
}

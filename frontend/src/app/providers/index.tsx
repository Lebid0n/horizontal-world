import { I18nProvider } from './i18n'

interface AppProviderProps {
  children: React.ReactNode
}

export default function AppProviders({ children }: AppProviderProps) {
  return <I18nProvider>{children}</I18nProvider>
}

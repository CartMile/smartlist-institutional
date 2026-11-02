import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  HOME_PATH,
  localeFromPath,
  messages,
  PRELAUNCH_PATH,
  type Locale,
} from './messages'

type LocaleContextValue = {
  locale: Locale
  t: (typeof messages)['pt']
  setLocale: (next: Locale) => void
  homePath: string
  prelaunchPath: string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function isPrelaunchPath(pathname: string) {
  const path = pathname.toLowerCase().replace(/\/+$/, '') || '/'
  return path === '/prelancamento' || path === '/pre-launch' || path === '/prelanzamiento'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const locale = localeFromPath(location.pathname) ?? 'en'

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: messages[locale],
      homePath: HOME_PATH[locale],
      prelaunchPath: PRELAUNCH_PATH[locale],
      setLocale: (next) => {
        const target = isPrelaunchPath(location.pathname) ? PRELAUNCH_PATH[next] : HOME_PATH[next]
        if (location.pathname !== target) {
          navigate(target)
        }
      },
    }),
    [locale, location.pathname, navigate],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleContext'
import { LanguageSwitcher } from './LanguageSwitcher'

type Props = {
  variant?: 'light' | 'dark'
}

export function SiteHeader({ variant = 'dark' }: Props) {
  const { t, homePath, prelaunchPath } = useLocale()
  const light = variant === 'light'

  return (
    <header className={light ? 'border-b border-line bg-canvas/90 backdrop-blur' : 'absolute inset-x-0 top-0 z-20'}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link to={homePath} className={`inline-flex items-center gap-3 ${light ? 'text-ink' : 'text-white'}`}>
          <img src="/logo.png?v=3" alt="" className="h-10 w-auto object-contain sm:h-12" />
          <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">SmartList</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher variant={variant} />
          <Link
            to={prelaunchPath}
            className={
              light
                ? 'hidden text-sm font-semibold text-ink underline-offset-4 hover:underline sm:inline'
                : 'hidden text-sm font-medium text-white/85 underline-offset-4 hover:text-white hover:underline sm:inline'
            }
          >
            {t.nav.prelaunch}
          </Link>
        </div>
      </div>
    </header>
  )
}

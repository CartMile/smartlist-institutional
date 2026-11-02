import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleContext'
import { PoweredByCartMile } from './PoweredByCartMile'

export function SiteFooter() {
  const { t, prelaunchPath } = useLocale()

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-8 text-sm text-soft sm:px-6">
        <PoweredByCartMile />
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p>{t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
          <Link to={prelaunchPath} className="hover:text-ink">
            {t.footer.prelaunch}
          </Link>
        </div>
      </div>
    </footer>
  )
}

import { LOCALES, type Locale } from '../i18n/messages'
import { useLocale } from '../i18n/LocaleContext'

type Props = {
  variant?: 'light' | 'dark'
}

export function LanguageSwitcher({ variant = 'dark' }: Props) {
  const { locale, setLocale } = useLocale()
  const light = variant === 'light'

  return (
    <div
      className={`inline-flex rounded-lg p-0.5 text-xs font-semibold ${
        light ? 'bg-black/5 text-soft' : 'bg-white/10 text-white/70'
      }`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((code: Locale) => {
        const active = code === locale
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`min-w-9 rounded-md px-2.5 py-1.5 uppercase transition ${
              active
                ? light
                  ? 'bg-white text-ink shadow-sm'
                  : 'bg-white text-ink'
                : light
                  ? 'hover:text-ink'
                  : 'hover:text-white'
            }`}
            aria-pressed={active}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}

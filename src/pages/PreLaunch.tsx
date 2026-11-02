import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { LaunchCountdown } from '../components/LaunchCountdown'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { defaultCountryCode, regionFromLocale } from '../i18n/messages'
import { useLocale } from '../i18n/LocaleContext'
import { trackEvent } from '../lib/analytics'
import { registerPreLaunchInterest } from '../lib/api'

function onlyDigits(value: string) {
  return value.replace(/\D/g, '')
}

export function PreLaunch() {
  const { locale, t, homePath } = useLocale()
  const p = t.prelaunch

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState(defaultCountryCode(locale))
  const [phone, setPhone] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [consentLaunchNotice, setConsentLaunchNotice] = useState(false)
  const [consentPromoEmail, setConsentPromoEmail] = useState(false)
  const [consentPromoWhatsApp, setConsentPromoWhatsApp] = useState(false)
  const [consentPromoSms, setConsentPromoSms] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setCountryCode(defaultCountryCode(locale))
  }, [locale])

  const phoneNumber = useMemo(() => `${onlyDigits(countryCode)}${onlyDigits(phone)}`, [countryCode, phone])

  const countryOptions = [
    { code: '+55', label: p.countryBrazil },
    { code: '+51', label: p.countryPeru },
    { code: '+1', label: p.countryUs },
  ] as const

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)

    if (!zipCode.trim()) {
      setError(p.zipCodeRequired)
      return
    }

    setLoading(true)
    try {
      await registerPreLaunchInterest({
        name: name.trim(),
        email: email.trim(),
        phoneNumber,
        zipCode: zipCode.trim(),
        locale,
        region: regionFromLocale(locale),
        source: 'institutional-web',
        consentLaunchNotice,
        consentPromoEmail,
        consentPromoWhatsApp,
        consentPromoSms,
      })
      trackEvent('prelaunch_submit', {
        locale,
        region: regionFromLocale(locale),
        consent_launch_notice: consentLaunchNotice,
        consent_promo_email: consentPromoEmail,
        consent_promo_whatsapp: consentPromoWhatsApp,
        consent_promo_sms: consentPromoSms,
      })
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : p.failed)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader variant="light" />

      <main className="mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-14">
        {submitted ? (
          <div className="rounded-2xl border border-line bg-white p-6 text-center sm:p-8">
            <img src="/logo.png?v=3" alt="" className="mx-auto mb-4 h-28 w-auto max-w-[14rem] object-contain" />
            <h1 className="font-display text-3xl font-semibold tracking-tight">{p.successTitle}</h1>
            <p className="mt-4 text-base leading-relaxed text-mute">{p.successMessage}</p>
            <Link
              to={homePath}
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-ink px-5 text-sm font-semibold text-white"
            >
              {p.backHome}
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-line bg-white p-5 sm:p-8">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
              {p.badge}
            </span>
            <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight">{p.title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{p.description}</p>

            <LaunchCountdown variant="light" />

            <ul className="mt-5 space-y-2 text-sm text-ink">
              <li>• {p.benefit1}</li>
              <li>• {p.benefit2}</li>
              <li>• {p.benefit3}</li>
            </ul>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold">{p.formTitle}</h2>

              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">{p.name}</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 w-full rounded-xl border border-line bg-canvas px-3 outline-none ring-lime focus:ring-2"
                  placeholder={p.namePlaceholder}
                  autoComplete="name"
                />
              </label>

              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">{p.email}</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 w-full rounded-xl border border-line bg-canvas px-3 outline-none ring-lime focus:ring-2"
                  placeholder={p.emailPlaceholder}
                  autoComplete="email"
                />
              </label>

              <div className="space-y-1.5 text-sm">
                <span className="font-medium">{p.phone}</span>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value as typeof countryCode)}
                    className="h-11 w-[8.5rem] rounded-xl border border-line bg-canvas px-2 outline-none"
                    aria-label={p.countryCode}
                  >
                    {countryOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 min-w-0 flex-1 rounded-xl border border-line bg-canvas px-3 outline-none ring-lime focus:ring-2"
                    placeholder="(11) 91234-5678"
                    autoComplete="tel-national"
                  />
                </div>
              </div>

              <label className="block space-y-1.5 text-sm">
                <span className="font-medium">{p.zipCode}</span>
                <input
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="h-11 w-full rounded-xl border border-line bg-canvas px-3 outline-none ring-lime focus:ring-2"
                  placeholder={p.zipCodePlaceholder}
                  autoComplete="postal-code"
                />
              </label>

              <div className="space-y-3 border-t border-line pt-4">
                <label className="flex items-start gap-3 text-sm leading-relaxed">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={consentLaunchNotice}
                    onChange={(e) => setConsentLaunchNotice(e.target.checked)}
                  />
                  <span>{p.consentLaunchNotice}</span>
                </label>

                <div className="space-y-3 rounded-xl bg-canvas p-3">
                  <p className="text-xs text-soft">{p.consentChannelsNote}</p>
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={consentPromoEmail}
                      onChange={(e) => setConsentPromoEmail(e.target.checked)}
                    />
                    <span>{p.consentPromoEmail}</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={consentPromoWhatsApp}
                      onChange={(e) => setConsentPromoWhatsApp(e.target.checked)}
                    />
                    <span>{p.consentPromoWhatsApp}</span>
                  </label>
                  <label className="flex items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={consentPromoSms}
                      onChange={(e) => setConsentPromoSms(e.target.checked)}
                    />
                    <span>{p.consentPromoSms}</span>
                  </label>
                </div>
              </div>

              {error ? (
                <p className="text-sm text-red-700" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-lime px-6 text-base font-semibold text-ink transition hover:bg-lime-hover disabled:opacity-60"
              >
                {loading ? p.loading : p.submit}
              </button>
            </form>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}

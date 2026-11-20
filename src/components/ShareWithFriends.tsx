import { useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import { trackEvent } from '../lib/analytics'

type Props = {
  align?: 'start' | 'center'
}

function shareUrl(homePath: string) {
  return new URL(homePath, window.location.origin).href
}

function shareBody(text: string, homePath: string) {
  return `${text}\n${shareUrl(homePath)}`
}

export function ShareWithFriends({ align = 'start' }: Props) {
  const { locale, t, homePath } = useLocale()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const body = () => shareBody(t.share.text, homePath)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(body())
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
      trackEvent('share_copy', { locale })
      return true
    } catch {
      window.prompt(t.share.copy, body())
      return false
    }
  }

  async function onShare() {
    trackEvent('share_click', { locale })
    document.title = t.share.pageTitle

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: t.share.pageTitle, text: body() })
        setOpen(false)
        return
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
      }
    }

    setOpen((current) => !current)
    void copyLink()
  }

  function openWhatsApp() {
    const href = `https://wa.me/?text=${encodeURIComponent(body())}`
    window.open(href, '_blank', 'noopener,noreferrer')
    trackEvent('share_whatsapp', { locale })
    setOpen(false)
  }

  return (
    <div className={`relative ${align === 'center' ? 'mx-auto w-fit' : 'w-fit'}`}>
      <button
        type="button"
        onClick={() => void onShare()}
        aria-expanded={open}
        className="share-friends relative inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-lime/80 bg-lime/10 px-5 text-sm font-semibold text-lime transition hover:bg-lime/20"
      >
        <span className="share-friends-ring pointer-events-none absolute inset-0 rounded-xl border border-lime" aria-hidden />
        <svg
          viewBox="0 0 24 24"
          className="share-friends-icon h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M14 5h5v5" />
          <path d="M19 5 10 14" />
          <path d="M17 13.5V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4.5" />
        </svg>
        <span>{t.share.button}</span>
      </button>

      {open ? (
        <div className="absolute top-full left-0 z-30 mt-2 w-72 rounded-xl border border-white/15 bg-night p-2 text-left shadow-xl">
          <p className="px-3 py-2 text-xs leading-relaxed text-white/75">{t.share.text}</p>
          <button
            type="button"
            onClick={openWhatsApp}
            className="flex min-h-10 w-full items-center rounded-lg px-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.share.whatsapp}
          </button>
          <button
            type="button"
            onClick={() => void copyLink()}
            className="flex min-h-10 w-full items-center rounded-lg px-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            <span aria-live="polite">{copied ? t.share.copied : t.share.copy}</span>
          </button>
        </div>
      ) : null}
    </div>
  )
}

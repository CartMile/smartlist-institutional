declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GTM_ID = (import.meta.env.VITE_GTM_ID as string | undefined)?.trim() || ''
const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() || ''

export function hasAnalytics() {
  return Boolean(GTM_ID || GA_ID)
}

export function initAnalytics() {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []

  if (GTM_ID && !document.getElementById('gtm-script')) {
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    const script = document.createElement('script')
    script.id = 'gtm-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`
    document.head.appendChild(script)

    if (!document.getElementById('gtm-noscript')) {
      const noscript = document.createElement('noscript')
      noscript.id = 'gtm-noscript'
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(
        GTM_ID,
      )}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      document.body.insertBefore(noscript, document.body.firstChild)
    }
  }

  if (GA_ID && !document.getElementById('ga-script')) {
    const script = document.createElement('script')
    script.id = 'ga-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
    document.head.appendChild(script)

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, { send_page_view: false })
  }
}

export function trackPageView(path: string, title?: string) {
  if (!hasAnalytics()) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'page_view',
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  })

  if (GA_ID && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    })
  }
}

export function trackEvent(event: string, params?: Record<string, string | number | boolean>) {
  if (!hasAnalytics()) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })

  if (GA_ID && typeof window.gtag === 'function') {
    window.gtag('event', event, params)
  }
}

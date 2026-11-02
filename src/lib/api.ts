const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://api-smartlist-dev.azurewebsites.net/api'

export type PreLaunchInterestRequest = {
  name: string
  email: string
  phoneNumber?: string
  zipCode?: string
  locale?: string
  region?: string
  source?: string
  consentLaunchNotice: boolean
  consentPromoEmail: boolean
  consentPromoWhatsApp: boolean
  consentPromoSms: boolean
}

type ApiResponse<T> = {
  success: boolean
  data?: T
  errors?: unknown[]
}

function firstError(errors: unknown): string {
  if (!Array.isArray(errors) || errors.length === 0) return ''
  const first = errors[0]
  if (typeof first === 'string') return first
  if (first && typeof first === 'object' && 'message' in first) {
    return String((first as { message: unknown }).message ?? '')
  }
  return ''
}

export async function registerPreLaunchInterest(payload: PreLaunchInterestRequest) {
  const response = await fetch(`${API_BASE_URL}/prelaunch-interest`, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const body = (await response.json().catch(() => ({}))) as ApiResponse<{ id: string; message: string }>
  if (!response.ok || !body.success) {
    throw new Error(firstError(body.errors) || 'Não foi possível registrar seu interesse.')
  }

  return body.data
}

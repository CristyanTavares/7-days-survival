/**
 * Utilitário de redirecionamento com preservação forçada de parâmetros de URL (UTMs, SRC, etc.)
 */

export function buildUrlWithCurrentParams(targetUrl: string): string {
  if (!targetUrl) return targetUrl
  if (targetUrl.startsWith('#')) return targetUrl

  const search = typeof window !== 'undefined' ? window.location.search : ''
  if (!search) return targetUrl

  try {
    const isAbsolute = targetUrl.startsWith('http://') || targetUrl.startsWith('https://')
    const parsed = isAbsolute
      ? new URL(targetUrl)
      : new URL(targetUrl, window.location.origin)

    const currentParams = new URLSearchParams(search)
    currentParams.forEach((value, key) => {
      parsed.searchParams.set(key, value)
    })

    return parsed.toString()
  } catch {
    const cleanSearch = search.startsWith('?') ? search.substring(1) : search
    const separator = targetUrl.includes('?') ? '&' : '?'
    return `${targetUrl}${separator}${cleanSearch}`
  }
}

export function redirectTo(targetUrl: string): void {
  if (typeof window === 'undefined') return

  if (targetUrl.startsWith('#')) {
    const el = document.querySelector(targetUrl)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    window.location.href = targetUrl
    return
  }

  // Dispara evento InitiateCheckout no Meta Pixel antes de redirecionar para o checkout
  try {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void }
    if (typeof w.fbq === 'function') {
      w.fbq('track', 'InitiateCheckout')
    }
  } catch {
    // ignore pixel errors
  }

  const finalUrl = buildUrlWithCurrentParams(targetUrl)
  window.location.href = finalUrl
}

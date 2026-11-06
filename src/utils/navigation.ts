/**
 * Utilitário de redirecionamento com preservação forçada de parâmetros de URL (UTMs, SRC, etc.)
 * e rastreamento de origem do clique (Hotmart `sck` / `src` + Meta Pixel `InitiateCheckout`).
 */

export function buildUrlWithCurrentParams(targetUrl: string, source?: string): string {
  if (!targetUrl) return targetUrl
  if (targetUrl.startsWith('#')) return targetUrl

  const search = typeof window !== 'undefined' ? window.location.search : ''

  try {
    const isAbsolute = targetUrl.startsWith('http://') || targetUrl.startsWith('https://')
    const parsed = isAbsolute
      ? new URL(targetUrl)
      : new URL(targetUrl, typeof window !== 'undefined' ? window.location.origin : 'https://localhost')

    if (search) {
      const currentParams = new URLSearchParams(search)
      currentParams.forEach((value, key) => {
        parsed.searchParams.set(key, value)
      })
    }

    if (source) {
      // Hotmart SCK (Source Checkout) identifica exatamente qual botão gerou a venda
      parsed.searchParams.set('sck', source)
      // Se não veio um `src` da campanha de anúncio, preenche `src` também com a origem do botão
      if (!parsed.searchParams.has('src')) {
        parsed.searchParams.set('src', source)
      }
    }

    return parsed.toString()
  } catch {
    const cleanSearch = search.startsWith('?') ? search.substring(1) : search
    const parts: string[] = []
    if (cleanSearch) parts.push(cleanSearch)
    if (source) parts.push(`sck=${encodeURIComponent(source)}`)
    if (parts.length === 0) return targetUrl
    const separator = targetUrl.includes('?') ? '&' : '?'
    return `${targetUrl}${separator}${parts.join('&')}`
  }
}

export function redirectTo(targetUrl: string, source?: string): void {
  if (typeof window === 'undefined') return

  if (targetUrl.startsWith('#')) {
    const el = document.querySelector(targetUrl)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    window.location.href = targetUrl
    return
  }

  // Dispara evento InitiateCheckout no Meta Pixel identificando o botão clicado (content_name)
  try {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void }
    if (typeof w.fbq === 'function') {
      if (source) {
        w.fbq('track', 'InitiateCheckout', { content_name: source })
      } else {
        w.fbq('track', 'InitiateCheckout')
      }
    }
  } catch {
    // ignore pixel errors
  }

  const finalUrl = buildUrlWithCurrentParams(targetUrl, source)
  window.location.href = finalUrl
}

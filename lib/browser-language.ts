// Use the highest-priority browser language; English is the fallback.
export function browserLanguage(header: string | null): 'cs' | 'en' {
  const languages = (header ?? '').split(',').map((part, order) => {
    const [tag, ...parameters] = part.trim().toLowerCase().split(';')
    const quality = parameters.find((parameter) => parameter.trim().startsWith('q='))
    const q = quality ? Number(quality.trim().slice(2)) : 1
    return { tag, q: Number.isFinite(q) && q >= 0 && q <= 1 ? q : 0, order }
  }).filter(({ tag, q }) => tag && q > 0)
    .sort((a, b) => b.q - a.q || a.order - b.order)
  return /^cs(?:-|$)/.test(languages[0]?.tag ?? '') ? 'cs' : 'en'
}

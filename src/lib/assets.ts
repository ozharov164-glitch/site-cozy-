/** Публичные файлы с учётом base (GitHub Pages: /site-cozy-/) */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const p = path.startsWith('/') ? path.slice(1) : path
  return `${base}${p}`
}

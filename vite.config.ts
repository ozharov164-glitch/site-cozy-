import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/** GitHub Pages project URL: /<repo>/ ; локально — '/' */
function basePath(): string {
  const raw = (process.env.VITE_BASE || '').trim()
  if (!raw) return '/'
  return raw.endsWith('/') ? raw : `${raw}/`
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: basePath(),
})

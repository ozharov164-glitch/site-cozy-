import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const BOT = 'https://t.me/CozyReset_bot'

const nav = [
  { href: '#idea', label: 'Идея' },
  { href: '#bot', label: 'Бот' },
  { href: '#path', label: 'Путь' },
  { href: '#plans', label: 'Тарифы' },
]

export function SiteChrome() {
  const { scrollY, scrollYProgress } = useScroll()
  const [narrow, setNarrow] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    mass: 0.35,
  })

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 24))
  }, [scrollY])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const fn = () => setNarrow(mq.matches)
    fn()
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left bg-gradient-to-r from-gold/25 via-gold to-gold-light/90 shadow-[0_0_12px_rgba(201,169,98,0.35)]"
        style={{ scaleX }}
      />

      <header
        className={`fixed left-0 right-0 top-0 z-[70] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ${
          scrolled
            ? 'border-b border-white/[0.08] bg-[#08080a]/92 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.65)] backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent bg-[#08080a]/55 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-[3.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 md:px-10 lg:px-12">
          <a
            href="#top"
            className="group flex shrink-0 items-baseline gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080a]"
          >
            <span className="font-display text-lg font-medium tracking-tight text-gradient-gold sm:text-xl">ВключиСебя</span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-zinc-600 sm:inline">CozyReset</span>
          </a>

          {!narrow && (
            <nav className="flex items-center gap-0.5 md:gap-1" aria-label="Разделы страницы">
              {nav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-3 py-2 text-[0.8125rem] font-medium text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 md:px-4"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          )}

          <a
            href={BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav-cta group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full px-4 py-2 text-[0.8125rem] font-semibold text-[#0c0c0e] shadow-[0_0_24px_-6px_rgba(201,169,98,0.45)] sm:px-5 sm:text-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-[#f4ebd4] via-[#d4b76e] to-[#9a7b3c] transition-transform duration-300 group-hover:scale-105" />
            <span className="relative">В Telegram</span>
          </a>
        </div>
      </header>
    </>
  )
}

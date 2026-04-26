import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { assetUrl } from '../lib/assets'

const SLIDES = [
  {
    id: 'venus',
    src: 'path-app/slide-01.webp',
    alt: 'ИИ-Венера в приложении «Путь к Себе»: коуч с учётом ваших тестов и практик',
  },
  {
    id: 'features',
    src: 'path-app/slide-02.webp',
    alt: 'Голосовая поддержка, «Ритм сердца» и «Самореализация» в одном интерфейсе',
  },
  {
    id: 'neuro',
    src: 'path-app/slide-03.webp',
    alt: 'Нейро-Арена: короткие тренировки внимания в спокойном формате',
  },
  {
    id: 'pdf',
    src: 'path-app/slide-04.webp',
    alt: '«К специалисту» и «Карта терапии»: анкеты и PDF для визита к психологу',
  },
  {
    id: 'tests',
    src: 'path-app/slide-05.webp',
    alt: 'Каталог тестов: новые диагностики и история прохождений',
  },
] as const

const INTERVAL_MS = 5500

export function PathAppShowcase() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const dirRef = useRef(1)
  const touchResumeRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const go = useCallback(
    (delta: number) => {
      dirRef.current = delta
      setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length)
    },
    [],
  )

  useEffect(() => {
    if (reduce || paused) return
    const t = window.setInterval(() => {
      dirRef.current = 1
      setIndex((i) => (i + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(t)
  }, [reduce, paused])

  useEffect(
    () => () => {
      if (touchResumeRef.current) window.clearTimeout(touchResumeRef.current)
    },
    [],
  )

  const slide = SLIDES[index]

  const pauseTouch = useCallback(() => {
    setPaused(true)
    if (touchResumeRef.current) window.clearTimeout(touchResumeRef.current)
    touchResumeRef.current = window.setTimeout(() => setPaused(false), 3200)
  }, [])

  return (
    <div
      className="mx-auto mt-12 w-full max-w-md md:mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={pauseTouch}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <p className="mb-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-teal-200/75">
        Интерфейс приложения
      </p>
      <div className="relative rounded-[1.35rem] border border-white/[0.08] bg-gradient-to-b from-zinc-900/90 to-[#07070d] p-2 shadow-[0_24px_56px_-28px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.04] sm:p-2.5">
        <div className="relative mx-auto aspect-[10/16] w-full max-w-[280px] overflow-hidden rounded-2xl bg-[#0a0a12] sm:max-w-[300px]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={slide.id}
              className="absolute inset-0 flex items-center justify-center p-1.5 sm:p-2"
              initial={{ opacity: 0, x: reduce ? 0 : dirRef.current * 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : dirRef.current * -10 }}
              transition={{ type: 'spring', stiffness: 380, damping: 34, mass: 0.6 }}
            >
              <img
                src={assetUrl(slide.src)}
                alt={slide.alt}
                width={800}
                height={1200}
                sizes="(max-width: 640px) 85vw, 300px"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 px-1">
          <button
            type="button"
            aria-label="Предыдущий слайд"
            onClick={() => go(-1)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-zinc-300 transition-colors hover:border-teal-300/25 hover:bg-teal-500/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
          </button>
          <div className="flex flex-1 justify-center gap-1.5 px-1">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Слайд ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => {
                  dirRef.current = i > index ? 1 : -1
                  setIndex(i)
                }}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/45 ${
                  i === index ? 'w-6 bg-teal-400/85' : 'w-2 bg-zinc-600 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Следующий слайд"
            onClick={() => go(1)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-zinc-300 transition-colors hover:border-teal-300/25 hover:bg-teal-500/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50"
          >
            <span aria-hidden className="text-lg leading-none">
              ›
            </span>
          </button>
        </div>
        {!reduce && (
          <p className="mt-2 text-center text-[0.65rem] font-medium text-zinc-600">
            {paused ? 'Автопрокрутка на паузе' : 'Слайды меняются автоматически'}
          </p>
        )}
      </div>
    </div>
  )
}

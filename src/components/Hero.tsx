import { motion, useReducedMotion } from 'framer-motion'
import { assetUrl } from '../lib/assets'

const BOT_URL = 'https://t.me/CozyReset_bot'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col md:min-h-[92vh]"
    >
      <div className="pointer-events-none absolute inset-0 hero-vignette" aria-hidden />
      <div className="pointer-events-none absolute inset-0 gradient-mesh" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 hero-grid opacity-[0.26] md:opacity-[0.32]"
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute right-[8%] top-28 h-[min(440px,55vw)] w-[min(440px,55vw)] rounded-full bg-[var(--color-glow)] blur-[110px]"
        animate={
          reduce
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.5, 0.35],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[12%] left-[3%] h-[min(340px,50vw)] w-[min(340px,50vw)] rounded-full bg-teal-400/[0.07] blur-[100px]"
        animate={
          reduce
            ? {}
            : {
                scale: [1.04, 1, 1.04],
                opacity: [0.2, 0.36, 0.2],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[min(200px,40vw)] w-[min(200px,40vw)] -translate-x-1/2 rounded-full bg-violet-400/[0.06] blur-[80px]"
        animate={reduce ? {} : { opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/88 to-transparent md:hidden"
        aria-hidden
      />

      {/* Контент по центру экрана; «Листайте» — отдельная строка внизу (без absolute → нет наслоения с подписью под иконкой) */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-[calc(4.5rem+1.25rem)] md:pt-[calc(5rem+2rem)]">
        <div className="flex min-h-0 flex-1 flex-col justify-center px-6 pb-6 md:px-12 md:pb-10 lg:px-20">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,280px)] lg:items-center lg:gap-16">
            <div>
              <motion.div
                className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28, mass: 0.85, delay: 0.05 }}
              >
                <div className="bot-icon-frame h-9 w-9 shrink-0 shadow-lg ring-2 ring-teal-300/25">
                  <img src={assetUrl('brand-bot-icon.png')} alt="" width={72} height={72} decoding="async" />
                </div>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">ВключиСебя в Telegram</span>
              </motion.div>

              <motion.p
                className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-teal-200/75 md:text-base md:tracking-[0.24em]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26, mass: 0.9, delay: 0.12 }}
              >
                Психология · ИИ · забота о себе
              </motion.p>
              <motion.h1
                className="mb-7 font-display text-[2.55rem] font-medium leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-[5.1rem] lg:leading-[1.02]"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.95, delay: 0.2 }}
              >
                <span className="text-gradient-gold">ВключиСебя</span>
                <span className="mt-4 block max-w-2xl font-display text-[1.5rem] font-normal leading-snug tracking-normal text-zinc-300 sm:text-3xl md:mt-5 md:text-[2.05rem] lg:text-[2.25rem]">
                  место, где утихает внутренний шум, — вы остаётесь собой, только чуть яснее
                </span>
              </motion.h1>
              <motion.p
                className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl md:leading-relaxed"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.9, delay: 0.42 }}
              >
                Бот с ИИ-поддержкой, чек-инами и мини-приложением <strong className="font-medium text-zinc-300">«Путь к Себе»</strong> — с
                тестами, практиками и <strong className="font-medium text-zinc-300">ИИ-Венерой</strong>, которая сопровождает вас шаг за шагом
                без спешки и оценок.
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.85, delay: 0.58 }}
              >
                <a
                  href={BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-[#0c0c0e] shadow-[0_0_48px_-10px_rgba(126,201,184,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070d]"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-[#d4f5ee] via-[#7ec9b8] to-[#3d7a6c] transition-transform duration-300 group-hover:scale-[1.03]" />
                  <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute -left-1/2 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[220%]" />
                  </span>
                  <span className="relative">Открыть в Telegram</span>
                  <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="#venus"
                  className="group inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-base font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-violet-300/30 hover:bg-violet-500/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/45"
                >
                  Познакомиться с Венерой
                  <span className="ml-1.5 text-teal-300/80 transition-transform group-hover:translate-y-0.5">↓</span>
                </a>
              </motion.div>
            </div>

            <motion.div
              className="mx-auto flex w-full max-w-[280px] flex-col items-center justify-center lg:mx-0 lg:max-w-none"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 1, delay: 0.35 }}
            >
              <div className="relative w-full max-w-[260px] overflow-hidden pb-1 sm:max-w-[280px] md:overflow-visible md:pb-0">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-b from-teal-300/18 via-violet-500/12 to-transparent blur-3xl md:-inset-10"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-full border border-white/12 bg-gradient-to-b from-white/[0.07] to-zinc-950/95 p-1 shadow-[0_28px_56px_-22px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/10">
                  <div className="bot-icon-frame aspect-square w-full">
                    <img
                      src={assetUrl('brand-bot-icon.png')}
                      alt="Иконка бота «ВключиСебя»: сердце и росток"
                      width={512}
                      height={512}
                      decoding="async"
                      fetchPriority="high"
                    />
                  </div>
                </div>
                <p className="relative z-10 mt-5 text-center text-xs font-light leading-relaxed text-zinc-500 md:text-[0.8125rem]">
                  Символ бота — забота о вас и бережный рост в одном знаке.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative z-20 flex shrink-0 flex-col items-center gap-2 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 text-zinc-600 md:px-12 md:pb-8 lg:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em]">Листайте</span>
          <motion.span
            className="block h-12 w-px bg-gradient-to-b from-teal-300/50 via-violet-300/30 to-transparent md:h-14"
            animate={reduce ? {} : { y: [0, 5, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
          />
        </motion.div>
      </div>
    </header>
  )
}

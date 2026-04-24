import { motion, useReducedMotion } from 'framer-motion'

const BOT_URL = 'https://t.me/CozyReset_bot'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <header
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pb-20 pt-[calc(4.5rem+2rem)] md:min-h-[92vh] md:px-12 md:pb-24 md:pt-[calc(5rem+3rem)] lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 hero-vignette" aria-hidden />
      <div className="pointer-events-none absolute inset-0 gradient-mesh" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.35]" aria-hidden />

      <motion.div
        className="pointer-events-none absolute right-[8%] top-28 h-[min(440px,55vw)] w-[min(440px,55vw)] rounded-full bg-[var(--color-glow)] blur-[110px]"
        animate={
          reduce
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.38, 0.52, 0.38],
              }
        }
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[12%] left-[3%] h-[min(340px,50vw)] w-[min(340px,50vw)] rounded-full bg-violet-500/[0.09] blur-[100px]"
        animate={
          reduce
            ? {}
            : {
                scale: [1.04, 1, 1.04],
                opacity: [0.22, 0.38, 0.22],
              }
        }
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[min(200px,40vw)] w-[min(200px,40vw)] -translate-x-1/2 rounded-full bg-amber-200/[0.04] blur-[80px]"
        animate={reduce ? {} : { opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/90" />
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Доступно в Telegram
          </span>
        </motion.div>

        <motion.p
          className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-gold-light/85 md:text-base md:tracking-[0.25em]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          ИИ · чек-ины · «Путь к Себе»
        </motion.p>
        <motion.h1
          className="mb-8 font-display text-[2.65rem] font-medium leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.02]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <span className="text-gradient-gold">ВключиСебя</span>
          <span className="mt-4 block max-w-xl font-display text-[1.55rem] font-normal leading-snug tracking-normal text-zinc-300 sm:text-3xl md:mt-5 md:text-[2.1rem] lg:text-[2.35rem]">
            спокойная самоподдержка рядом с вами — в чате и в приложении
          </span>
        </motion.h1>
        <motion.p
          className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl md:leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.42 }}
        >
          Бот с ИИ-поддержкой, утренними и вечерними чек-инами и мини-приложением «Путь к Себе». Для тех, кому важны
          ясность, мягкость и уважение к своему темпу.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.58 }}
        >
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-[#0c0c0e] shadow-[0_0_48px_-10px_rgba(201,169,98,0.55)]"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-[#faf3e4] via-[#d9bc6e] to-[#8f7030] transition-transform duration-300 group-hover:scale-[1.03]" />
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute -left-1/2 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[220%]" />
            </span>
            <span className="relative">Открыть в Telegram</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#path"
            className="group inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.02] px-8 py-4 text-base font-medium text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-gold/35 hover:bg-white/[0.05] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/45"
          >
            «Путь к Себе»
            <span className="ml-1.5 text-gold/70 transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35, duration: 0.8 }}
        aria-hidden
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em]">Листайте</span>
        <motion.span
          className="block h-14 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent"
          animate={reduce ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </header>
  )
}

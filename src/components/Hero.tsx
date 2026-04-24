import { motion, useReducedMotion } from 'framer-motion'

const BOT_URL = 'https://t.me/CozyReset_bot'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <header className="relative min-h-[92vh] flex flex-col justify-center px-6 pt-24 pb-16 md:px-12 lg:px-20">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <motion.div
        className="absolute top-24 right-[10%] w-[min(420px,50vw)] h-[min(420px,50vw)] rounded-full bg-[var(--color-glow)] blur-[100px] pointer-events-none"
        animate={
          reduce
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.55, 0.4],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-[min(300px,45vw)] h-[min(300px,45vw)] rounded-full bg-purple-500/10 blur-[90px] pointer-events-none"
        animate={
          reduce
            ? {}
            : {
                scale: [1.05, 1, 1.05],
                opacity: [0.25, 0.4, 0.25],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          className="text-gold-light/90 text-sm md:text-base tracking-[0.25em] uppercase font-medium mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Telegram · ИИ · забота о себе
        </motion.p>
        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-white mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <span className="text-gradient-gold">ВключиСебя</span>
          <br />
          <span className="text-zinc-200 font-normal text-[0.55em] md:text-[0.5em] block mt-3 md:mt-4">
            спокойная самоподдержка, которая живёт рядом с вами
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Бот с ИИ-поддержкой, утренними и вечерними чек-инами и мини-приложением «Путь к Себе» — для тех,
          кому важны ясность, мягкость и уважение к своему темпу.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-[#e8dcc4] via-[#c9a962] to-[#9a7b3c] text-[#0c0c0e] font-semibold text-base shadow-[0_0_40px_-8px_rgba(201,169,98,0.5)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Открыть в Telegram
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#path"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 text-zinc-200 hover:border-gold/40 hover:bg-white/[0.03] transition-colors"
          >
            Узнать о «Пути к Себе»
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden
      >
        <motion.span
          className="block w-px h-12 mx-auto bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </motion.div>
    </header>
  )
}

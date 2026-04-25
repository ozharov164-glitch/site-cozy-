import { motion, useReducedMotion } from 'framer-motion'
import { assetUrl } from '../lib/assets'
import { SectionLabel } from './SectionLabel'

export function CreatorSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="creator"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.05] bg-gradient-to-b from-[#080810] via-[#0a0812] to-[#07070d] px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_30%,rgba(126,201,184,0.08),transparent_55%),radial-gradient(ellipse_55%_45%_at_90%_70%,rgba(110,85,150,0.1),transparent_50%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <motion.div
              className="relative w-full max-w-[min(100%,400px)]"
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 24, mass: 0.95 }}
            >
              <div
                className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-teal-400/12 via-violet-500/10 to-gold/10 blur-3xl md:-inset-8"
                aria-hidden
              />
              <div className="creator-portrait-shell relative mx-auto max-w-[320px] lg:mx-0">
                <div className="creator-portrait-inner relative aspect-[4/5] w-full md:max-w-none">
                  <img
                    src={assetUrl('creator-dmitry.png')}
                    alt="Дмитрий — студент медицинского университета, автор идеи «ВключиСебя»"
                    width={800}
                    height={1000}
                    className="creator-portrait-img h-full w-full"
                    decoding="async"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[calc(1.75rem-2px)] shadow-[inset_0_0_60px_28px_rgba(4,3,10,0.88),inset_0_0_120px_56px_rgba(4,3,10,0.35)]"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[calc(1.75rem-2px)] bg-gradient-to-t from-[#06050c]/90 via-transparent to-[#06050c]/25" />
                </div>
              </div>
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute -bottom-6 left-1/2 h-28 w-[75%] -translate-x-1/2 rounded-full bg-teal-400/12 blur-3xl"
                  animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.04, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                />
              )}
            </motion.div>
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <SectionLabel>Создатель</SectionLabel>
            <h2 className="mt-3 font-display text-[2rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-[3.15rem]">
              Здравый смысл, тепло и ответственность — не маркетинг ради маркетинга
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-zinc-300 lg:mx-0 lg:max-w-none">
              Меня зовут <strong className="font-medium text-zinc-200">Дмитрий</strong>. Я студент медицинского университета и давно увлекаюсь
              психологией — прежде всего тем, как <strong className="font-medium text-zinc-200">на деле</strong>, а не на слайдах, поддержать
              человека в тревоге, усталости и поиске опоры.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-400 lg:mx-0 lg:max-w-none md:text-lg">
              «ВключиСебя» я развиваю из простого убеждения: помощь не должна ощущаться очередным маркетинговым ходом. Хочется сервиса{' '}
              <strong className="font-medium text-zinc-300">честного по духу</strong> — с понятными границами (я не врач и не психотерапевт,
              это прямо сказано в дисклеймере), с уважением к вашему темпу и без обещаний «стать счастливым за выходные».
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-400 lg:mx-0 lg:max-w-none md:text-lg">
              Медицинская школа напоминает об ответственности за формулировки; психология учит тёплой ясности. Именно между этими двумя
              полюсами я и стараюсь держать продукт — чтобы вам было спокойнее заходить в бот и мини-приложение.
            </p>
            <p className="mx-auto mt-8 max-w-xl border-t border-white/[0.08] pt-6 text-sm font-medium uppercase tracking-[0.18em] text-teal-200/75 lg:mx-0">
              Студент медицинского университета · автор идеи CozyReset / «ВключиСебя»
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { assetUrl } from '../lib/assets'
import { SectionLabel } from './SectionLabel'

export function VenusSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="venus"
      className="cosmic-section relative scroll-mt-28 overflow-hidden py-24 md:scroll-mt-32 md:py-32 lg:py-36"
    >
      <div className="stars-dust" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_100%,rgba(126,201,184,0.08),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <SectionLabel variant="twilight">ИИ-Венера</SectionLabel>
            <h2 className="mt-3 font-display text-[2rem] font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              <span className="text-gradient-ethereal">Венера</span> — ваш коуч, после разговора с которой{' '}
              <span className="text-white">легче сделать вдох</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-zinc-300 lg:mx-0 lg:max-w-none lg:text-xl lg:leading-relaxed">
              Венера — не сухой чатбот и не безликая «модель». Это образ{' '}
              <strong className="font-medium text-zinc-200">мягкой ясности</strong>: она помнит ваши тесты, практики и шаги в «Пути к Себе»,
              говорит тепло и по делу — без морали, без эзотерики и без давления «успеть к дедлайну по саморазвитию».
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-400 lg:mx-0 lg:max-w-none lg:text-lg">
              Она подхватывает вас после диагностик, помогает разложить по полочкам то, что крутится в голове, и предлагает{' '}
              <span className="text-teal-200/90">следующий маленький шаг</span> — такой, который реально сделать сегодня. В диалоге можно
              говорить от души о страхах, усталости, отношениях с собой и с близкими — и чувствовать, что вас не оценивают, а слышат.
            </p>

            <blockquote className="glass-quote quote-reading mx-auto mt-10 max-w-xl rounded-r-2xl px-6 py-5 text-left lg:mx-0">
              <p className="text-xl font-normal italic leading-snug text-zinc-200 md:text-2xl">
                «Как будто наконец можно выдохнуть вслух — и не бояться, что ответят шаблоном.»
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Так откликаются пользователи</p>
            </blockquote>

            <ul className="mx-auto mt-10 max-w-xl space-y-3 text-left text-sm font-light leading-relaxed text-zinc-400 lg:mx-0 lg:text-[0.95rem]">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-teal-300 to-violet-400" aria-hidden />
                <span>
                  <strong className="font-medium text-zinc-300">Контекст, а не пустой лист.</strong> Венера помнит, что вы уже делали в
                  приложении: тесты, треки, практики — и не притворяется, будто вы только что «появились из ниоткуда».
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-teal-300 to-violet-400" aria-hidden />
                <span>
                  <strong className="font-medium text-zinc-300">Тон опоры, а не «учителя».</strong> Без назиданий и панибратства — только
                  спокойная уверенность рядом.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-teal-300 to-violet-400" aria-hidden />
                <span>
                  <strong className="font-medium text-zinc-300">Мост в практики.</strong> Из разговора можно перейти к тестам, голосу,
                  «Ритму сердца» и другим разделам — без потери нити.
                </span>
              </li>
            </ul>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <motion.div
              className="relative w-full max-w-[min(100%,380px)]"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 0.95 }}
            >
              <div
                className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-b from-violet-500/25 via-teal-400/10 to-transparent blur-3xl"
                aria-hidden
              />
              <div className="venus-halo relative mx-auto aspect-square w-full max-w-[min(100%,360px)] overflow-hidden rounded-full border border-white/12 bg-zinc-950 p-[3px] shadow-2xl lg:mx-0 lg:ml-auto">
                <div className="relative aspect-square h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-zinc-900 to-[#06050c]">
                  <img
                    src={assetUrl('ai-venus.png')}
                    alt="ИИ-Венера — персональный коуч в мини-приложении «Путь к Себе»"
                    width={760}
                    height={760}
                    className="absolute left-1/2 top-1/2 h-[120%] w-[120%] max-w-none -translate-x-1/2 -translate-y-[50.5%] object-cover object-[center_12%]"
                    decoding="async"
                    loading="lazy"
                  />
                  {/* гасим белый «ореол» по углам исходника */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_48px_22px_rgba(5,4,12,0.88),inset_0_0_96px_40px_rgba(5,4,12,0.45)]"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#06050c]/95 via-transparent to-[#06050c]/35" />
                </div>
              </div>
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute -bottom-4 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-teal-400/15 blur-3xl"
                  animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

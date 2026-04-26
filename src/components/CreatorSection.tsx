import { motion, useReducedMotion } from 'framer-motion'
import { assetUrl } from '../lib/assets'
import { SectionLabel } from './SectionLabel'

const BOT = 'https://t.me/CozyReset_bot'

export function CreatorSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="creator"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#07070d] px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(12,10,22,0.4)] via-transparent to-[rgba(6,6,12,0.35)]"
        aria-hidden
      />
      <div className="creator-section-atmosphere" aria-hidden />
      <div className="creator-section-edge-fade" aria-hidden />
      <div className="creator-section-vignette" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="order-2 flex justify-center px-2 pb-4 pt-2 md:px-0 md:pb-6 md:pt-0 lg:order-1 lg:justify-start">
            <motion.div
              className="relative isolate w-full max-w-[min(100%,400px)]"
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 24, mass: 0.95 }}
            >
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-400/12 via-violet-500/10 to-gold/10 blur-3xl md:-inset-8"
                aria-hidden
              />
              <div className="creator-portrait-shell relative z-0 mx-auto max-w-[300px] sm:max-w-[320px] lg:mx-0">
                <div className="creator-portrait-inner relative aspect-[4/5] w-full">
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
                    className="pointer-events-none absolute inset-0 rounded-[calc(2rem-1px)] shadow-[inset_0_0_64px_36px_rgba(7,7,13,0.94),inset_0_0_120px_56px_rgba(7,7,13,0.38)]"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[calc(2rem-1px)] bg-gradient-to-t from-[#07070d]/94 via-transparent to-[#07070d]/28" />
                </div>
              </div>
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute -bottom-4 left-1/2 z-0 h-20 w-[70%] -translate-x-1/2 rounded-full bg-teal-400/14 blur-3xl md:-bottom-6 md:h-28 md:w-[75%]"
                  animate={{ opacity: [0.3, 0.48, 0.3], scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                />
              )}
            </motion.div>
          </div>

          <div className="relative z-10 order-1 text-center lg:order-2 lg:text-left">
            <SectionLabel>Создатель</SectionLabel>
            <h2 className="mx-auto mt-3 max-w-xl font-display text-[1.85rem] font-medium leading-[1.12] tracking-tight text-white sm:text-4xl md:max-w-none md:text-[2.65rem] md:leading-[1.1] lg:text-[3rem]">
              Честность, тепло и ответственность — не маркетинг ради маркетинга
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-zinc-300 lg:mx-0 lg:max-w-none">
              Меня зовут <strong className="font-medium text-zinc-200">Дмитрий</strong>. Я студент медицинского университета и давно увлекаюсь
              психологией, прежде всего тем, как <strong className="font-medium text-zinc-200">на деле</strong>, а не на слайдах, поддерживать
              человека в тревоге, усталости и в поиске опоры.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-400 lg:mx-0 lg:max-w-none md:text-lg">
              «ВключиСебя» я развиваю из простого убеждения: помощь не должна ощущаться очередным маркетинговым ходом. Хочется сервиса{' '}
              <strong className="font-medium text-zinc-300">честного по духу</strong> — с понятными границами (я не врач и не психотерапевт;
              это прямо сказано в дисклеймере), с уважением к вашему темпу и без обещаний «стать счастливым за выходные».
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-zinc-400 lg:mx-0 lg:max-w-none md:text-lg">
              Медицинская школа напоминает об ответственности за формулировки, а психология — о тёплой ясности. Между этими двумя полюсами я и
              стараюсь держать продукт.
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.06] via-zinc-950/55 to-violet-950/[0.12] p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_48px_-28px_rgba(0,0,0,0.65)] backdrop-blur-md md:mt-9 md:rounded-[1.35rem] md:p-7 lg:mx-0">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-teal-200/85">Дальше — в боте</p>
              <p className="mt-3 text-base font-light leading-relaxed text-zinc-300 md:text-[1.05rem] md:leading-relaxed">
                Если вам откликнулось то, что вы прочитали выше, — загляните в бота: первый чек-ин или знакомство с меню займут считанные
                минуты, без давления и «обязательной покупки». По ссылке откроется{' '}
                <strong className="font-medium text-zinc-200">@CozyReset_bot</strong> — зайдите, когда будете готовы: пусть решение будет
                вашим и спокойным.
              </p>
              <a
                href={BOT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-gradient-to-br from-[#d4f5ee] via-[#7ec9b8] to-[#3d6b5f] px-6 py-3.5 text-sm font-semibold text-[#0a1210] shadow-[0_0_40px_-10px_rgba(126,201,184,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a12] sm:w-auto"
              >
                Открыть бота в Telegram
                <span aria-hidden>↗</span>
              </a>
            </div>

            <p className="mx-auto mt-8 max-w-xl border-t border-white/[0.08] pt-6 text-[0.7rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-teal-200/70 md:text-xs md:tracking-[0.18em] lg:mx-0">
              Студент медицинского университета · автор идеи CozyReset / «ВключиСебя»
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

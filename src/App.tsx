import type { ReactNode } from 'react'
import { SiteChrome } from './components/SiteChrome'
import { Hero } from './components/Hero'
import { SectionLabel } from './components/SectionLabel'
import { FeatureCard, type FeatureItem } from './components/FeatureCard'
import { Footer } from './components/Footer'
import { IconCheck } from './components/icons'

const BOT = 'https://t.me/CozyReset_bot'
const UPDATES = 'https://t.me/updatecozy'

const botFeatures: FeatureItem[] = [
  {
    title: 'Чек-ины',
    text: 'Утро и вечер: короткая остановка «как я сейчас», настроение и мягкое завершение ритуалом.',
    icon: 'checkin',
  },
  {
    title: 'ИИ-поддержка',
    text: 'Диалог в чате — бережно, без давления. В бесплатном режиме — с разумными дневными лимитами.',
    icon: 'chat',
  },
  {
    title: 'Голосовая поддержка',
    text: 'Напишите запрос — получите ответ голосом с тихим фоном. Расширенные сценарии — в Премиуме.',
    icon: 'voice',
  },
  {
    title: 'Тест состояния',
    text: 'Замеры по шкалам, сохранение результата и сравнение с прошлым прохождением — чтобы видеть динамику.',
    icon: 'chart',
  },
  {
    title: 'Вдохновение',
    text: 'Аффирмация дня с учётом контекста; понравившиеся фразы можно сохранять.',
    icon: 'spark',
  },
  {
    title: 'Тарифы и Премиум',
    text: 'Понятный статус подписки, оплата картой, СБП или через Telegram Stars — как удобнее.',
    icon: 'card',
  },
]

const pathFeatures: FeatureItem[] = [
  {
    title: 'Тесты и история',
    text: 'Расширенная библиотека диагностик и история прохождений — в одном месте с ботом.',
    icon: 'chart',
  },
  {
    title: '«Путь к Себе» и Венера',
    text: 'ИИ-коуч в приложении помнит ваш прогресс и предлагает следующий шаг без спешки.',
    icon: 'path',
  },
  {
    title: 'Ритм сердца',
    text: 'Спокойная телесно-дыхательная практика в интерфейсе приложения.',
    icon: 'heart',
  },
  {
    title: 'Самореализация',
    text: 'Пошаговый трек: задания, фиксация прогресса, вопросы «на потом».',
    icon: 'steps',
  },
  {
    title: 'К специалисту',
    text: 'Структурированная подготовка к приёму — текст или PDF, с чем вы приходите к живому специалисту.',
    icon: 'doc',
  },
  {
    title: 'Карта терапии',
    text: 'Не про симптомы, а про предпочтения в работе: темп, границы, обратная связь.',
    icon: 'map',
  },
]

function SectionDivider() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-6 md:py-8 md:px-10 lg:px-12">
      <div className="divider-ornament" />
    </div>
  )
}

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3.5 text-sm leading-relaxed text-zinc-400 md:text-[0.95rem]">
      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold/55" />
      <span className="font-light">{children}</span>
    </li>
  )
}

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <SiteChrome />

      <a href="#main" className="skip-to-main">
        К основному содержанию
      </a>

      <Hero />

      <main id="main" className="relative z-10">
        <section
          id="idea"
          className="scroll-mt-28 border-t border-white/[0.05] px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Идея</SectionLabel>
            <h2 className="font-display text-[2.1rem] font-medium leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.08]">
              Не «исправить себя за неделю», а{' '}
              <span className="text-gradient-gold italic">услышать</span> и опереться
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:mt-10 md:text-xl md:leading-relaxed">
              ВключиСебя — это инструмент психологической и эмоциональной самоподдержки на базе ИИ, с чек-инами, тестами
              и образовательным контентом. Он не заменяет очную или онлайн-консультацию специалиста, особенно при острых
              состояниях и риске для себя или других.
            </p>
          </div>
        </section>

        <SectionDivider />

        <section
          id="bot"
          className="scroll-mt-28 border-t border-white/[0.04] bg-gradient-to-b from-white/[0.015] via-transparent to-transparent px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between lg:mb-20">
              <div className="max-w-xl">
                <SectionLabel>В боте</SectionLabel>
                <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                  Что умеет Telegram-бот
                </h2>
              </div>
              <p className="max-w-md text-sm font-light leading-relaxed text-zinc-500 md:text-base">
                Главное меню собрано так, чтобы каждый день можно было начать с малого — без перегруза опциями и без
                чувства вины за «недоделанное».
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {botFeatures.map((item, i) => (
                <FeatureCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="path" className="scroll-mt-28 px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="path-spotlight path-spotlight-glow relative mb-16 rounded-[1.75rem] border border-white/[0.06] bg-gradient-to-br from-zinc-900/80 via-[#0c0c10] to-zinc-950/90 p-px md:mb-20 md:rounded-[2rem]">
              <div className="relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-gold/[0.09] via-transparent to-violet-950/[0.12] px-8 py-12 md:rounded-[1.95rem] md:px-12 md:py-14 lg:p-16">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl"
                  aria-hidden
                />
                <p className="relative text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-gold-light/90 md:text-xs">
                  Премиум · мини-приложение
                </p>
                <h2 className="relative mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                  «Путь к Себе» — пространство для регулярной работы
                </h2>
                <p className="relative mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:mt-8 md:text-xl">
                  Отдельный веб-интерфейс внутри Telegram, синхронизированный с вашим аккаунтом. Полный доступ — при
                  активной подписке Премиум; без неё вы увидите описание возможностей и сможете оформить доступ.
                </p>
                <a
                  href={BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-8 inline-flex items-center gap-2 text-base font-semibold text-gold transition-colors hover:text-gold-light md:mt-10"
                >
                  <span className="border-b border-gold/40 pb-0.5 transition-[border-color] hover:border-gold-light/60">
                    Открыть бота и перейти к приложению
                  </span>
                  <span className="text-lg" aria-hidden>
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {pathFeatures.map((item, i) => (
                <FeatureCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <section
          id="plans"
          className="scroll-mt-28 border-t border-white/[0.05] bg-white/[0.012] px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12"
        >
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Доступ</SectionLabel>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
              Два уровня
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm font-light text-zinc-500 md:text-base">
              Начните бесплатно — расширьте возможности, когда будете готовы.
            </p>

            <div className="mt-14 grid gap-6 text-left md:mt-16 md:grid-cols-2 md:gap-8">
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/50 p-8 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.75)] transition-colors duration-500 hover:border-white/[0.12] md:rounded-3xl md:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="relative font-display text-2xl font-medium text-zinc-200 md:text-3xl">Бесплатно</h3>
                <p className="relative mt-2 text-sm text-zinc-600">Базовый набор для ежедневной опоры</p>
                <ul className="relative mt-8 space-y-4">
                  <ListItem>Чек-ины и базовые ритуалы</ListItem>
                  <ListItem>ИИ-поддержка с дневными лимитами</ListItem>
                  <ListItem>Тест состояния, вдохновение, отзывы</ListItem>
                  <ListItem>Ограниченная голосовая поддержка в боте</ListItem>
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-b from-gold/[0.07] via-zinc-950/40 to-zinc-950 p-8 shadow-[0_28px_64px_-24px_rgba(201,169,98,0.18)] transition-shadow duration-500 hover:shadow-[0_32px_72px_-20px_rgba(201,169,98,0.22)] md:rounded-3xl md:p-10">
                <div className="absolute right-6 top-6 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-light">
                  Премиум
                </div>
                <h3 className="relative font-display text-2xl font-medium text-gradient-gold md:text-3xl">Полный доступ</h3>
                <p className="relative mt-2 text-sm text-zinc-500">Для тех, кто хочет углубиться без ограничений по чату</p>
                <ul className="relative mt-8 space-y-4">
                  <ListItem>Безлимитная ИИ-поддержка в чате</ListItem>
                  <ListItem>Полный доступ к «Пути к Себе»</ListItem>
                  <ListItem>Персонализированные ритуалы в чек-инах</ListItem>
                  <ListItem>Реферальная программа для подписчиков</ListItem>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10 md:py-28 lg:px-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-b from-zinc-900/60 via-[#0a0a0e] to-zinc-950/90 px-8 py-16 text-center shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)] md:rounded-[2rem] md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(201,169,98,0.12),transparent_55%)]" />
            <h2 className="relative font-display text-3xl font-medium tracking-tight text-white md:text-5xl md:leading-tight">
              Начните с одного нажатия
            </h2>
            <p className="relative mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-zinc-400 md:text-lg">
              Бот откроется в Telegram — дальше подскажем онбординг и подберём комфортный темп.
            </p>
            <a
              href={BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-10 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-11 py-4 text-lg font-semibold text-[#0c0c0e] shadow-[0_0_56px_-12px_rgba(201,169,98,0.5)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-[#faf3e4] via-[#d4b76e] to-[#8f7030]" />
              <span className="relative">@CozyReset_bot</span>
            </a>
            <p className="relative mt-10 text-sm text-zinc-600">
              Новости и обновления —{' '}
              <a
                href={UPDATES}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold/85 underline decoration-gold/30 underline-offset-4 transition-colors hover:text-gold-light"
              >
                @updatecozy
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

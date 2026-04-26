import type { ReactNode } from 'react'
import { SiteChrome } from './components/SiteChrome'
import { Hero } from './components/Hero'
import { SectionLabel } from './components/SectionLabel'
import { FeatureCard, type FeatureItem } from './components/FeatureCard'
import { Footer } from './components/Footer'
import { VenusSection } from './components/VenusSection'
import { CreatorSection } from './components/CreatorSection'
import { PathAppShowcase } from './components/PathAppShowcase'
import { IconCheck } from './components/icons'

const BOT = 'https://t.me/CozyReset_bot'
const UPDATES = 'https://t.me/updatecozy'

const botFeatures: FeatureItem[] = [
  {
    title: 'Чек-ины',
    text: 'Утро и вечер: короткая остановка «как я сейчас», настроение и мягкое завершение ритуалом — якорь в суете дня.',
    icon: 'checkin',
  },
  {
    title: 'ИИ-поддержка',
    text: 'Диалог в чате с ИИ: бережно, без давления и без оценки. В бесплатном режиме действуют разумные дневные лимиты — так формат остаётся устойчивым и не перегружает вас.',
    icon: 'chat',
  },
  {
    title: 'Голосовая поддержка',
    text: 'Опишите запрос текстом — получите ответ голосом с тихим музыкальным фоном. В Премиуме доступны расширенные сценарии и дополнительные настройки в мини-приложении.',
    icon: 'voice',
  },
  {
    title: 'Тест состояния',
    text: 'Короткий замер по шкалам, сохранение результата и сравнение с прошлым прохождением — чтобы замечать динамику, а не застревать на мысли: «сегодня всё плохо».',
    icon: 'chart',
  },
  {
    title: 'Вдохновение',
    text: 'Аффирмация дня с учётом контекста; понравившиеся формулировки можно сохранять и собирать вашу коллекцию опорных фраз.',
    icon: 'spark',
  },
  {
    title: 'Тарифы и Премиум',
    text: 'Понятный статус подписки: оплата картой, через СБП или Telegram Stars — выберите тот способ, который вам спокойнее.',
    icon: 'card',
  },
]

const pathFeatures: FeatureItem[] = [
  {
    title: 'Тесты и история',
    text: 'Расширенная библиотека диагностик: тревога, выгорание, самооценка и другие темы. Каждый проход сохраняется — можно вернуться к формулировкам и сравнить результат с прошлым прохождением.',
    icon: 'chart',
    tone: 'twilight',
  },
  {
    title: 'Нейро-Арена',
    text: 'Лёгкие тренажёры внимания и быстрой интерпретации сигналов в игровом формате: не «ещё работа», а короткая пауза для мозга с ощущением маленькой победы.',
    icon: 'spark',
    tone: 'twilight',
  },
  {
    title: 'Ритм сердца',
    text: 'Телесно-дыхательная практика в спокойном интерфейсе: ритм касаний, дыхание, замедление. После сессии разбор можно продолжить с Венерой в приложении.',
    icon: 'heart',
    tone: 'twilight',
  },
  {
    title: 'Самореализация',
    text: 'Пошаговый трек с заданиями и фиксацией прогресса: не бесконечный чат, а маршрут с вопросами «на потом» и ИИ, который подстраивает формулировки под ваш контекст.',
    icon: 'steps',
    tone: 'twilight',
  },
  {
    title: 'К специалисту',
    text: 'Структурированная подготовка к приёму у живого психолога или коуча: с каким запросом вы приходите, что для вас важно и какие у вас ожидания. На выходе — аккуратный текст или PDF, чтобы не начинать разговор в кабинете «с чистого листа».',
    icon: 'doc',
    tone: 'twilight',
  },
  {
    title: 'Карта терапии',
    text: 'Документ не про симптомы, а про то, как вам комфортно в терапии: темп, границы, обратная связь. Помогает специалисту быстрее настроиться под вас — и вам чувствовать себя в безопасности.',
    icon: 'map',
    tone: 'twilight',
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
      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold/50" />
      <span className="font-light">{children}</span>
    </li>
  )
}

function PathNarrative() {
  return (
    <div className="relative mb-16 md:mb-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight text-white md:text-3xl">Что такое «Путь к Себе»</h3>
          <p className="mt-5 text-base font-light leading-relaxed text-zinc-400 md:text-lg">
            Это <strong className="font-medium text-zinc-200">отдельное мини-приложение</strong> внутри Telegram — не «ещё один чат», а
            целостное пространство: тесты, практики, голос, треки и документы для работы с собой и с живым специалистом. Всё синхронизировано
            с вашим аккаунтом в боте: данные не теряются при переходе из бота в приложение и обратно.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-zinc-400 md:text-lg">
            Здесь удобно возвращаться к себе <strong className="font-medium text-zinc-200">регулярно</strong>: не раз в месяц «вспомнить
            про заботу о себе», а понемногу и в своём темпе — вы открываете приложение, отмечаете настроение, делаете практику, фиксируете
            инсайт, чтобы потом обсудить его с Венерой или взять его с собой на приём к психологу.
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-teal-950/30 via-zinc-950/50 to-violet-950/25 p-8 shadow-inner md:rounded-3xl md:p-10">
          <p className="quote-reading text-xl font-medium italic leading-relaxed text-teal-100/95 md:text-2xl">
            «Путь к Себе» — это когда технологии не отвлекают от жизни, а помогают не потерять себя в шуме.
          </p>
          <ul className="mt-8 space-y-4 text-sm font-light leading-relaxed text-zinc-400 md:text-base">
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400/80" aria-hidden />
              <span>
                <strong className="font-medium text-zinc-300">Премиум</strong> открывает полный функционал приложения; без подписки вы
                увидите описание и сможете оформить доступ, когда будете готовы.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/70" aria-hidden />
              <span>
                ИИ-Венера в приложении опирается на <strong className="font-medium text-zinc-300">вашу историю</strong>: тесты, треки и
                практики — и не подменяет её шаблонными фразами «из интернета».
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
              <span className="text-gradient-ethereal italic">услышать себя</span> и обрести опору
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:mt-10 md:text-xl md:leading-relaxed">
              ВключиСебя — инструмент психологической и эмоциональной <strong className="font-medium text-zinc-300">самоподдержки</strong>{' '}
              на базе ИИ: чек-ины, тесты и бережные формулировки рядом с вами в телефоне. Сервис{' '}
              <strong className="font-medium text-zinc-300">не заменяет</strong> очную или онлайн-консультацию специалиста — особенно при
              острых состояниях и риске для себя или других. Он даёт структуру и тепло в повседневности, чтобы между сессиями с психологом
              вам было чуть легче дышать и яснее ориентироваться в себе.
            </p>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/[0.07] bg-gradient-to-br from-teal-950/[0.12] via-zinc-950/40 to-violet-950/[0.1] px-6 py-8 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:mt-14 md:rounded-3xl md:px-8 md:py-9">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-teal-200/80">Вам может откликнуться, если</p>
              <ul className="mt-5 space-y-3.5 text-base font-light leading-relaxed text-zinc-400 md:text-lg">
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" aria-hidden />
                  <span>
                    Вы устали от навязчивой «мотивации» и громких обещаний — и ищете{' '}
                    <strong className="font-medium text-zinc-300">спокойный тон</strong>, в котором вам можно быть неидеальным.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400/70" aria-hidden />
                  <span>
                    Вам хочется <strong className="font-medium text-zinc-300">регулярно возвращаться к себе</strong> маленькими шагами:
                    заметить настроение, пройти тест, сделать практику — без чувства вины за «недоделанное».
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/65" aria-hidden />
                  <span>
                    Вы уже ходите к психологу или только присматриваетесь к терапии — и хотите{' '}
                    <strong className="font-medium text-zinc-300">бережно подготовиться</strong>, собрать мысли и прийти на разговор с более
                    ясным запросом.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section
          id="bot"
          className="scroll-mt-28 border-t border-white/[0.04] bg-gradient-to-b from-white/[0.02] via-transparent to-transparent px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12"
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
                Меню собрано так, чтобы вы каждый день могли начать с малого: без перегруза опциями и без чувства вины за «недоделанное».
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

        <VenusSection />

        <SectionDivider />

        <section id="path" className="scroll-mt-28 px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center md:mb-16">
              <SectionLabel variant="twilight">Мини-приложение</SectionLabel>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
                «Путь к Себе»
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base font-light text-zinc-500 md:text-lg">
                Пространство для вашей регулярной работы с собой: глубже, чем один чат, но по-прежнему в привычном вам Telegram.
              </p>
            </div>

            <PathNarrative />

            <PathAppShowcase />

            <div className="path-spotlight path-spotlight-glow relative mb-16 rounded-[1.75rem] border border-white/[0.06] bg-gradient-to-br from-zinc-900/75 via-[#07070d] to-zinc-950/88 p-px md:mb-20 md:rounded-[2rem]">
              <div className="relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-teal-900/[0.12] via-transparent to-violet-950/[0.14] px-8 py-12 md:rounded-[1.95rem] md:px-12 md:py-14 lg:p-16">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" aria-hidden />
                <div
                  className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"
                  aria-hidden
                />
                <p className="relative text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-teal-200/85 md:text-xs">
                  Венера + практики + документы
                </p>
                <h3 className="relative mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                  Один вход — разные глубины: от короткой паузы до подготовки к терапии
                </h3>
                <p className="relative mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:mt-8 md:text-xl">
                  Откройте бота, при необходимости оформите Премиум — и попадёте в интерфейс, где сочетаются диагностические тесты по
                  проверенным методикам, телесные практики и ИИ-Венера, которая помнит ваш контекст. Это не волшебная таблетка, а{' '}
                  <strong className="font-medium text-zinc-300">набор инструментов</strong>, который остаётся с вами между встречами с
                  психологом.
                </p>
                <a
                  href={BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-8 inline-flex items-center gap-2 text-base font-semibold text-teal-200/95 transition-colors hover:text-teal-100 md:mt-10"
                >
                  <span className="border-b border-teal-400/40 pb-0.5 transition-[border-color] hover:border-teal-200/60">
                    Открыть бота и зайти в приложение
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
          className="scroll-mt-28 border-t border-white/[0.05] bg-white/[0.015] px-6 py-24 md:scroll-mt-32 md:px-10 md:py-28 lg:px-12"
        >
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Доступ</SectionLabel>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
              Два уровня
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm font-light text-zinc-500 md:text-base">
              Начните бесплатно и расширьте возможности, когда почувствуете, что готовы углубиться.
            </p>

            <div className="mt-14 grid gap-6 text-left md:mt-16 md:grid-cols-2 md:gap-8">
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/50 p-8 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.75)] transition-colors duration-500 hover:border-teal-300/15 md:rounded-3xl md:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="relative font-display text-2xl font-medium text-zinc-200 md:text-3xl">Бесплатно</h3>
                <p className="relative mt-2 text-sm text-zinc-600">Базовый набор для ежедневной опоры</p>
                <ul className="relative mt-8 space-y-4">
                  <ListItem>Чек-ины и базовые ритуалы</ListItem>
                  <ListItem>ИИ-поддержка с дневными лимитами</ListItem>
                  <ListItem>Тест состояния, вдохновение, отзывы</ListItem>
                  <ListItem>Ограниченная голосовая поддержка в боте</ListItem>
                </ul>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-teal-300/20 bg-gradient-to-b from-teal-950/[0.15] via-zinc-950/50 to-zinc-950 p-8 shadow-[0_28px_64px_-24px_rgba(126,201,184,0.15)] transition-shadow duration-500 hover:shadow-[0_32px_72px_-20px_rgba(184,169,217,0.18)] md:rounded-3xl md:p-10">
                <div className="absolute right-6 top-6 rounded-full border border-teal-300/25 bg-teal-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-teal-100">
                  Премиум
                </div>
                <h3 className="relative font-display text-2xl font-medium text-gradient-ethereal md:text-3xl">Полный доступ</h3>
                <p className="relative mt-2 text-sm text-zinc-500">
                  Если вы хотите углубиться: без лимитов в чате и с полным доступом к мини-приложению.
                </p>
                <ul className="relative mt-8 space-y-4">
                  <ListItem>Безлимитная ИИ-поддержка в чате</ListItem>
                  <ListItem>Полный доступ к «Пути к Себе» и ИИ-Венере</ListItem>
                  <ListItem>Персональные ритуалы в чек-инах</ListItem>
                  <ListItem>Реферальная программа для подписчиков</ListItem>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <CreatorSection />

        <SectionDivider />

        <section className="px-6 py-24 md:px-10 md:py-28 lg:px-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-b from-violet-950/30 via-[#07070d] to-zinc-950/95 px-8 py-16 text-center shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)] md:rounded-[2rem] md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(126,201,184,0.12),transparent_50%)]" />
            <h2 className="relative font-display text-3xl font-medium tracking-tight text-white md:text-5xl md:leading-tight">
              Шаг в сторону заботы о себе
            </h2>
            <p className="relative mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-zinc-400 md:text-lg">
              Бот откроется в Telegram: мы подскажем вам первые шаги и поможем вам выбрать комфортный темп. Венера и «Путь к Себе» рядом — в
              том же мессенджере, без лишних приложений и новых паролей.
            </p>
            <a
              href={BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-10 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-11 py-4 text-lg font-semibold text-[#0a1210] shadow-[0_0_56px_-12px_rgba(126,201,184,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a10]"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-[#d4f5ee] via-[#7ec9b8] to-[#355a50]" />
              <span className="relative">@CozyReset_bot</span>
            </a>
            <p className="relative mt-10 text-sm text-zinc-600">
              Новости и обновления —{' '}
              <a
                href={UPDATES}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-300/90 underline decoration-teal-500/30 underline-offset-4 transition-colors hover:text-teal-200"
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

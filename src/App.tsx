import { Hero } from './components/Hero'
import { Reveal } from './components/Reveal'

const BOT = 'https://t.me/CozyReset_bot'
const UPDATES = 'https://t.me/updatecozy'

const botFeatures = [
  {
    title: 'Чек-ины',
    text: 'Утро и вечер: короткая остановка «как я сейчас», настроение и мягкое завершение ритуалом.',
  },
  {
    title: 'ИИ-поддержка',
    text: 'Диалог в чате — бережно, без давления. В бесплатном режиме — с разумными дневными лимитами.',
  },
  {
    title: 'Голосовая поддержка',
    text: 'Напишите запрос — получите ответ голосом с тихим фоном. Расширенные сценарии — в Премиуме.',
  },
  {
    title: 'Тест состояния',
    text: 'Замеры по шкалам, сохранение результата и сравнение с прошлым прохождением — чтобы видеть динамику.',
  },
  {
    title: 'Вдохновение',
    text: 'Аффирмация дня с учётом контекста; понравившиеся фразы можно сохранять.',
  },
  {
    title: 'Тарифы и Премиум',
    text: 'Понятный статус подписки, оплата картой, СБП или через Telegram Stars — как удобнее.',
  },
]

const pathFeatures = [
  {
    title: 'Тесты и история',
    text: 'Расширенная библиотека диагностик и история прохождений — в одном месте с ботом.',
  },
  {
    title: '«Путь к Себе» и Венера',
    text: 'ИИ-коуч в приложении помнит ваш прогресс и предлагает следующий шаг без спешки.',
  },
  {
    title: 'Ритм сердца',
    text: 'Спокойная телесно-дыхательная практика в интерфейсе приложения.',
  },
  {
    title: 'Самореализация',
    text: 'Пошаговый трек: задания, фиксация прогресса, вопросы «на потом».',
  },
  {
    title: 'К специалисту',
    text: 'Структурированная подготовка к приёму — текст или PDF, с чем вы приходите к живому специалисту.',
  },
  {
    title: 'Карта терапии',
    text: 'Не про симптомы, а про предпочтения в работе: темп, границы, обратная связь.',
  },
]

function FeatureCard({
  title,
  text,
  index,
}: {
  title: string
  text: string
  index: number
}) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group relative h-full rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-6 md:p-8 transition-colors duration-500 hover:border-gold/25 hover:from-white/[0.09]">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,0%),rgba(201,169,98,0.06),transparent_40%)] pointer-events-none" />
        <h3 className="font-display text-2xl md:text-[1.65rem] text-gold-light/95 mb-3 relative">{title}</h3>
        <p className="text-zinc-400 text-[0.95rem] md:text-base leading-relaxed font-light relative">{text}</p>
      </article>
    </Reveal>
  )
}

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <a
        href="#main"
        className="skip-to-main"
      >
        К основному содержанию
      </a>

      <Hero />

      <main id="main" className="relative z-10">
        <section className="px-6 py-24 md:px-12 lg:px-20 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <Reveal>
              <p className="text-gold/90 text-xs tracking-[0.2em] uppercase mb-4">Идея</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
                Не «исправить себя за неделю», а <span className="text-gradient-gold italic">услышать</span> и опереться
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
                ВключиСебя — это инструмент психологической и эмоциональной самоподдержки на базе ИИ, с чек-инами,
                тестами и образовательным контентом. Он не заменяет очную или онлайн-консультацию специалиста,
                особенно при острых состояниях и риске для себя или других.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 lg:px-20 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
                <div>
                  <p className="text-gold/90 text-xs tracking-[0.2em] uppercase mb-3">В боте</p>
                  <h2 className="font-display text-4xl md:text-5xl text-white font-medium">Что умеет Telegram-бот</h2>
                </div>
                <p className="text-zinc-500 max-w-md text-sm md:text-base leading-relaxed">
                  Главное меню собрано так, чтобы каждый день можно было начать с малого — без перегруза опциями.
                </p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {botFeatures.map((f, i) => (
                <FeatureCard key={f.title} {...f} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="path" className="px-6 py-24 md:px-12 lg:px-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.07] via-transparent to-purple-500/[0.05] p-8 md:p-12 lg:p-16 mb-16 md:mb-20">
                <p className="text-gold-light text-xs tracking-[0.2em] uppercase mb-4">Премиум · мини-приложение</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-6 max-w-3xl">
                  «Путь к Себе» — пространство для регулярной работы
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light mb-8">
                  Отдельный веб-интерфейс внутри Telegram, синхронизированный с вашим аккаунтом. Полный доступ — при
                  активной подписке Премиум; без неё вы увидите описание возможностей и сможете оформить доступ.
                </p>
                <a
                  href={BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light underline underline-offset-4 decoration-gold/40 text-base font-medium"
                >
                  Открыть бота и перейти к приложению
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {pathFeatures.map((f, i) => (
                <FeatureCard key={f.title} {...f} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 lg:px-20 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl text-white font-medium mb-6">Два уровня доступа</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
                <div className="rounded-2xl border border-white/10 p-8 bg-white/[0.02]">
                  <h3 className="font-display text-2xl text-zinc-200 mb-4">Бесплатно</h3>
                  <ul className="text-zinc-400 space-y-3 text-sm md:text-base leading-relaxed font-light">
                    <li>· Чек-ины и базовые ритуалы</li>
                    <li>· ИИ-поддержка с дневными лимитами</li>
                    <li>· Тест состояния, вдохновение, отзывы</li>
                    <li>· Ограниченная голосовая поддержка в боте</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gold/30 p-8 bg-gradient-to-b from-gold/[0.08] to-transparent">
                  <h3 className="font-display text-2xl text-gradient-gold mb-4">Премиум</h3>
                  <ul className="text-zinc-300 space-y-3 text-sm md:text-base leading-relaxed font-light">
                    <li>· Безлимитная ИИ-поддержка в чате</li>
                    <li>· Полный доступ к «Пути к Себе»</li>
                    <li>· Персонализированные ритуалы в чек-инах</li>
                    <li>· Реферальная программа для подписчиков</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12 lg:px-20">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-surface/80 backdrop-blur-sm px-8 py-16 md:py-20">
              <h2 className="font-display text-3xl md:text-5xl text-white font-medium mb-6">Начните с одного нажатия</h2>
              <p className="text-zinc-400 mb-10 text-lg font-light">
                Бот откроется в Telegram — дальше подскажем онбординг и подберём комфортный темп.
              </p>
              <a
                href={BOT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-br from-[#e8dcc4] via-[#c9a962] to-[#9a7b3c] text-[#0c0c0e] font-semibold text-lg shadow-[0_0_48px_-10px_rgba(201,169,98,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                @CozyReset_bot
              </a>
              <p className="mt-8 text-zinc-600 text-sm">
                Новости и обновления — в канале{' '}
                <a href={UPDATES} target="_blank" rel="noopener noreferrer" className="text-gold/80 hover:text-gold underline underline-offset-2">
                  @updatecozy
                </a>
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 px-6 py-16 md:px-12 border-t border-white/[0.06] text-center text-zinc-600 text-sm leading-relaxed font-light">
        <p className="max-w-2xl mx-auto mb-6">
          Продукт не является медицинским изделием и не заменяет помощь психолога, психотерапевта или врача. При кризисе
          обращайтесь к специалистам и в экстренные службы вашего региона.
        </p>
        <p className="text-zinc-700">© {new Date().getFullYear()} ВключиСебя · CozyReset</p>
      </footer>
    </>
  )
}

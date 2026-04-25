import { assetUrl } from '../lib/assets'

const BOT = 'https://t.me/CozyReset_bot'
const UPDATES = 'https://t.me/updatecozy'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-[#050508]/95">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:flex md:items-start md:justify-between md:gap-12 md:px-10 md:py-20 lg:px-12">
        <div className="mb-12 flex max-w-md gap-4 md:mb-0">
          <div className="bot-icon-frame h-14 w-14 shrink-0 ring-2 ring-teal-300/25">
            <img src={assetUrl('brand-bot-icon.png')} alt="" width={112} height={112} decoding="async" />
          </div>
          <div>
            <p className="font-display text-2xl font-medium text-gradient-gold">ВключиСебя</p>
            <p className="mt-2 text-sm font-light leading-relaxed text-zinc-500">
              Самоподдержка и структура для саморефлексии в Telegram — с Венерой, практиками и уважением к вашему ритму.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:gap-16">
          <div>
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">Ссылки</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href={BOT} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-teal-200">
                  Бот в Telegram
                </a>
              </li>
              <li>
                <a href={UPDATES} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-teal-200">
                  Канал обновлений
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">На странице</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#idea" className="transition-colors hover:text-teal-200">
                  Идея продукта
                </a>
              </li>
              <li>
                <a href="#venus" className="transition-colors hover:text-teal-200">
                  ИИ-Венера
                </a>
              </li>
              <li>
                <a href="#path" className="transition-colors hover:text-teal-200">
                  Путь к Себе
                </a>
              </li>
              <li>
                <a href="#creator" className="transition-colors hover:text-teal-200">
                  О создателе
                </a>
              </li>
              <li>
                <a href="#plans" className="transition-colors hover:text-teal-200">
                  Тарифы
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-6 py-8 text-center md:px-10">
        <div className="mx-auto max-w-3xl space-y-4 text-xs font-light leading-relaxed text-zinc-600 md:text-sm">
          <p>
            Сервис носит информационно-просветительский характер, не является медицинским изделием, программой лечения или дистанционным
            приёмом специалиста и <strong className="font-medium text-zinc-500">не заменяет</strong> очную или онлайн-консультацию
            психолога, психотерапевта или врача. Ответы ИИ и материалы в боте не являются медицинским диагнозом, заключением о состоянии
            здоровья или юридической рекомендацией; решения о вашем здоровье и терапии вы принимаете самостоятельно.
          </p>
          <p>
            Продукт <strong className="font-medium text-zinc-500">не предназначен</strong> для оказания неотложной помощи. При кризисном
            состоянии, угрозе для вас или других людей, суицидальных мыслях или планах, а также при острых психотических симптомах{' '}
            <strong className="font-medium text-zinc-500">немедленно</strong> обратитесь в экстренные и кризисные службы вашего региона или к
            очному специалисту.
          </p>
        </div>
        <p className="mt-6 text-[0.7rem] font-medium tracking-wide text-zinc-700">© {new Date().getFullYear()} ВключиСебя · CozyReset</p>
      </div>
    </footer>
  )
}

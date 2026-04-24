const BOT = 'https://t.me/CozyReset_bot'
const UPDATES = 'https://t.me/updatecozy'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.07] bg-[#060608]/90">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-16 md:flex md:items-start md:justify-between md:gap-12 md:px-10 md:py-20 lg:px-12">
        <div className="mb-12 max-w-md md:mb-0">
          <p className="font-display text-2xl font-medium text-gradient-gold">ВключиСебя</p>
          <p className="mt-2 text-sm font-light leading-relaxed text-zinc-500">
            Самоподдержка и структура для рефлексии в Telegram. С заботой о формулировках и о вашем ритме.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:gap-16">
          <div>
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">Ссылки</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  href={BOT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  Бот в Telegram
                </a>
              </li>
              <li>
                <a
                  href={UPDATES}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  Канал обновлений
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">На странице</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#idea" className="transition-colors hover:text-gold-light">
                  Идея продукта
                </a>
              </li>
              <li>
                <a href="#path" className="transition-colors hover:text-gold-light">
                  Путь к Себе
                </a>
              </li>
              <li>
                <a href="#plans" className="transition-colors hover:text-gold-light">
                  Тарифы
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.05] px-6 py-8 text-center md:px-10">
        <p className="mx-auto max-w-2xl text-xs font-light leading-relaxed text-zinc-600 md:text-sm">
          Продукт не является медицинским изделием и не заменяет помощь психолога, психотерапевта или врача. При кризисе
          обращайтесь к специалистам и в экстренные службы вашего региона.
        </p>
        <p className="mt-6 text-[0.7rem] font-medium tracking-wide text-zinc-700">© {new Date().getFullYear()} ВключиСебя · CozyReset</p>
      </div>
    </footer>
  )
}

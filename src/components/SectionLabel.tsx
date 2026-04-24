import type { ReactNode } from 'react'

type SectionLabelProps = {
  children: ReactNode
  /** twilight — бирюзово-сиреневые акценты для космических секций */
  variant?: 'warm' | 'twilight'
}

export function SectionLabel({ children, variant = 'warm' }: SectionLabelProps) {
  const line =
    variant === 'twilight'
      ? 'from-transparent via-teal-300/35 to-transparent'
      : 'from-transparent to-gold/40'
  const lineL = variant === 'twilight' ? `bg-gradient-to-r ${line}` : 'bg-gradient-to-r from-transparent to-gold/40'
  const lineR = variant === 'twilight' ? `bg-gradient-to-l ${line}` : 'bg-gradient-to-l from-transparent to-gold/40'
  const text = variant === 'twilight' ? 'text-teal-200/90' : 'text-gold/85'

  return (
    <div className="mb-5 flex items-center justify-center gap-3 md:mb-6">
      <span className={`h-px w-10 md:w-14 ${lineL}`} aria-hidden />
      <p className={`text-[0.65rem] font-semibold uppercase tracking-[0.28em] md:text-xs ${text}`}>{children}</p>
      <span className={`h-px w-10 md:w-14 ${lineR}`} aria-hidden />
    </div>
  )
}

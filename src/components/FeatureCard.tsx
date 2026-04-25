import { type MouseEvent, useCallback, useRef } from 'react'
import { Reveal } from './Reveal'
import { FeatureIcon, type FeatureIconName } from './icons'

export type FeatureTone = 'warm' | 'twilight'

export type FeatureItem = {
  title: string
  text: string
  icon: FeatureIconName
  tone?: FeatureTone
}

export function FeatureCard({ item, index }: { item: FeatureItem; index: number }) {
  const tone = item.tone ?? 'warm'
  const ref = useRef<HTMLElement>(null)

  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--y', `${((e.clientY - r.top) / r.height) * 100}%`)
  }, [])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--x', '50%')
    el.style.setProperty('--y', '0%')
  }, [])

  const spotlight =
    tone === 'twilight'
      ? `radial-gradient(520px circle at var(--x, 50%) var(--y, 0%), rgba(126,201,184,0.12), transparent 42%), radial-gradient(400px circle at var(--x, 50%) var(--y, 0%), rgba(184,169,217,0.1), transparent 40%)`
      : `radial-gradient(520px circle at var(--x, 50%) var(--y, 0%), rgba(201,169,98,0.14), transparent 45%)`

  const iconWrap =
    tone === 'twilight'
      ? 'border-teal-300/15 bg-teal-400/[0.06] text-teal-200/90 group-hover:border-teal-200/25 group-hover:bg-teal-300/[0.1] group-hover:text-teal-100'
      : 'border-gold/15 bg-gold/[0.06] text-gold/90 group-hover:border-gold/30 group-hover:bg-gold/[0.1] group-hover:text-gold-light'

  const numClass =
    tone === 'twilight'
      ? 'text-white/[0.05] group-hover:text-teal-200/15'
      : 'text-white/[0.06] group-hover:text-gold/20'

  const titleClass = tone === 'twilight' ? 'text-teal-100/95' : 'text-gold-light/95'

  const borderOuter =
    tone === 'twilight'
      ? 'border-violet-400/10 hover:shadow-[0_32px_64px_-24px_rgba(110,85,150,0.18)]'
      : 'border-white/[0.07] hover:shadow-[0_32px_64px_-24px_rgba(201,169,98,0.12)]'

  return (
    <Reveal delay={index * 0.05}>
      <article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`group relative h-full overflow-hidden rounded-2xl border bg-zinc-950/40 p-px shadow-[0_24px_48px_-28px_rgba(0,0,0,0.85)] transition-[transform,box-shadow] duration-500 ease-out will-change-transform md:rounded-3xl md:hover:-translate-y-1 ${borderOuter}`}
      >
        <div className="relative h-full overflow-hidden rounded-[0.9rem] bg-gradient-to-b from-white/[0.06] via-zinc-950/60 to-zinc-950/90 p-6 md:rounded-[1.35rem] md:p-8">
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: spotlight }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.04]" />

          <div className="relative mb-5 flex items-start justify-between gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-inner transition-colors duration-300 md:h-12 md:w-12 md:rounded-2xl ${iconWrap}`}
            >
              <FeatureIcon name={item.icon} className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" />
            </div>
            <span className={`font-display text-3xl font-medium leading-none transition-colors duration-300 md:text-4xl ${numClass}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className={`font-display relative mb-3 text-xl font-medium tracking-tight md:text-2xl ${titleClass}`}>{item.title}</h3>
          <p className="relative text-[0.9375rem] font-light leading-relaxed text-zinc-400 md:text-base">{item.text}</p>
        </div>
      </article>
    </Reveal>
  )
}

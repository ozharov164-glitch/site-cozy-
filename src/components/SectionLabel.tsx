export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-3 md:mb-6">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/40 md:w-14" aria-hidden />
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold/85 md:text-xs">{children}</p>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/40 md:w-14" aria-hidden />
    </div>
  )
}

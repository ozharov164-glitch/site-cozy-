import type { ReactNode, SVGProps } from 'react'

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden
    >
      {props.children}
    </svg>
  )
}

export function IconCheckin(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </IconBase>
  )
}

export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </IconBase>
  )
}

export function IconVoice(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8" />
    </IconBase>
  )
}

export function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </IconBase>
  )
}

export function IconSpark(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    </IconBase>
  )
}

export function IconCard(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </IconBase>
  )
}

export function IconPath(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </IconBase>
  )
}

export function IconHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </IconBase>
  )
}

export function IconSteps(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 19h16M4 15l4-4 4 4 8-8" />
      <circle cx="8" cy="11" r="1.5" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function IconDoc(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h6" />
    </IconBase>
  )
}

export function IconMap(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </IconBase>
  )
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  )
}

export type FeatureIconName =
  | 'checkin'
  | 'chat'
  | 'voice'
  | 'chart'
  | 'spark'
  | 'card'
  | 'path'
  | 'heart'
  | 'steps'
  | 'doc'
  | 'map'

const map: Record<FeatureIconName, (p: SVGProps<SVGSVGElement>) => ReactNode> = {
  checkin: IconCheckin,
  chat: IconChat,
  voice: IconVoice,
  chart: IconChart,
  spark: IconSpark,
  card: IconCard,
  path: IconPath,
  heart: IconHeart,
  steps: IconSteps,
  doc: IconDoc,
  map: IconMap,
}

export function FeatureIcon({ name, className }: { name: FeatureIconName; className?: string }) {
  const Cmp = map[name]
  return <Cmp className={className} />
}

/** Упрощённая форма одного кардиоцикла в нормированной фазе [0, 1). */

function smoothstep(t: number): number {
  const s = Math.max(0, Math.min(1, t))
  return s * s * (3 - 2 * s)
}

export function ecgRadialBump(phase: number): number {
  const x = phase - Math.floor(phase)
  if (x < 0.07) return 0
  if (x < 0.13) return 0.32 * smoothstep((x - 0.07) / 0.06)
  if (x < 0.19) return 0.32 * (1 - smoothstep((x - 0.13) / 0.06))
  if (x < 0.215) return -0.14
  if (x < 0.235) return 1
  if (x < 0.265) return -0.44
  if (x < 0.3) return 0
  if (x < 0.52) return 0.4 * Math.sin(((x - 0.3) / 0.22) * Math.PI)
  return 0
}

export function buildCircularEcgPath(opts: {
  cx: number
  cy: number
  baseR: number
  amplitude: number
  samples: number
  beatsPerTurn: number
  thetaOffset?: number
}): string {
  const { cx, cy, baseR, amplitude, samples, beatsPerTurn, thetaOffset = -Math.PI / 2 } = opts
  const parts: string[] = []
  for (let i = 0; i <= samples; i++) {
    const t = i / samples
    const theta = t * Math.PI * 2 + thetaOffset
    const bump = ecgRadialBump(t * beatsPerTurn)
    const r = baseR + bump * amplitude
    const x = cx + r * Math.cos(theta)
    const y = cy + r * Math.sin(theta)
    parts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
  }
  return parts.join(' ')
}

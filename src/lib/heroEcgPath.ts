/**
 * Классическая угловатая ЭКГ «как на мониторе»: изолиния, P, QRS (Q–R–S), ST, T.
 * Вершины — ломаная в фазе одного удара [0, 1]; амплитуда нормирована (пик R ≈ 1).
 */
const CLASSIC_BEAT_POLYLINE: ReadonlyArray<readonly [number, number]> = [
  [0.0, 0.0],
  [0.065, 0.0],
  [0.088, 0.13],
  [0.112, 0.0],
  [0.165, 0.0],
  [0.184, -0.045],
  [0.198, 1.0],
  [0.214, -0.52],
  [0.232, 0.0],
  [0.265, 0.0],
  [0.318, 0.34],
  [0.375, 0.0],
  [0.465, 0.0],
  [1.0, 0.0],
]

export function sampleClassicBeatAmplitude(phase01: number): number {
  const x = ((phase01 % 1) + 1) % 1
  const pts = CLASSIC_BEAT_POLYLINE
  for (let i = 0; i < pts.length - 1; i++) {
    const [p0, a0] = pts[i]
    const [p1, a1] = pts[i + 1]
    if (x >= p0 && x <= p1) {
      const u = p1 === p0 ? 0 : (x - p0) / (p1 - p0)
      return a0 + u * (a1 - a0)
    }
  }
  return pts[pts.length - 1][1]
}

/** Замыкает круг без разрыва, если beatsPerTurn — целое число. */
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
    const phase = (t * beatsPerTurn) % 1
    const bump = sampleClassicBeatAmplitude(phase)
    const r = baseR + bump * amplitude
    const x = cx + r * Math.cos(theta)
    const y = cy + r * Math.sin(theta)
    parts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
  }
  return parts.join(' ')
}

/**
 * Один кардиоцикл как ломаная: изолиния → P → PR → QRS → ST → T → диастола.
 * Амплитуда нормирована (R ≈ +1). Фазы подобраны под узнаваемый «мониторный» вид.
 */
const CLASSIC_BEAT_POLYLINE: ReadonlyArray<readonly [number, number]> = [
  [0.0, 0.0],
  [0.024, 0.0],
  [0.038, 0.0],
  /* P — узкий зубец */
  [0.048, 0.068],
  [0.058, 0.1],
  [0.069, 0.0],
  /* PR */
  [0.088, 0.0],
  /* QRS — резкий комплекс */
  [0.104, -0.022],
  [0.112, -0.058],
  [0.12, -0.074],
  [0.128, 1.0],
  [0.136, -0.42],
  [0.146, -0.008],
  [0.154, 0.0],
  /* ST */
  [0.168, 0.0],
  /* T — четыре точки (асимметричный бугорок) */
  [0.182, 0.042],
  [0.198, 0.218],
  [0.218, 0.235],
  [0.238, 0.058],
  [0.252, 0.0],
  /* диастола */
  [0.295, 0.0],
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

/**
 * Замкнутый контур: i = 0 … segments включительно (t = 0 и t = 1 совпадают в точке старта —
 * «точка A» на окружности при целом beatsPerTurn).
 */
export function buildCircularEcgPath(opts: {
  cx: number
  cy: number
  baseR: number
  amplitude: number
  segments: number
  beatsPerTurn: number
  thetaOffset?: number
}): string {
  const { cx, cy, baseR, amplitude, segments, beatsPerTurn, thetaOffset = -Math.PI / 2 } = opts
  const parts: string[] = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const theta = t * Math.PI * 2 + thetaOffset
    const phase = (t * beatsPerTurn) % 1
    const bump = sampleClassicBeatAmplitude(phase)
    const r = baseR + bump * amplitude
    const x = cx + r * Math.cos(theta)
    const y = cy + r * Math.sin(theta)
    parts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
  }
  parts.push('Z')
  return parts.join(' ')
}

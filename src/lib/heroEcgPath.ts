/**
 * ЭКГ «мониторный» вид: ломаная изолиния → P → PR → QRS (Q–R–S) → ST → T → диастола.
 * Амплитуда нормирована (R ≈ +1); вершины подобраны под узнаваемые пропорции зубцов.
 */
const CLASSIC_BEAT_POLYLINE: ReadonlyArray<readonly [number, number]> = [
  [0.0, 0.0],
  [0.036, 0.0],
  [0.052, 0.0],
  /* P — компактный зубец */
  [0.064, 0.102],
  [0.08, 0.0],
  /* PR */
  [0.112, 0.0],
  /* QRS — узкий комплекс: Q↓ → R↑ → S↓ */
  [0.132, -0.032],
  [0.144, -0.072],
  [0.156, 1.0],
  [0.168, -0.46],
  [0.184, 0.0],
  /* ST — изолиния */
  [0.204, 0.0],
  /* T — шире P, ломаная аппроксимация асимметричного бугорка */
  [0.228, 0.078],
  [0.256, 0.285],
  [0.286, 0.068],
  [0.308, 0.0],
  /* диастола до следующего удара */
  [0.355, 0.0],
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

/** Замыкает круг без разрыва при целом beatsPerTurn. */
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

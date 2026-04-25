import { motion, useInView, useReducedMotion } from 'framer-motion'
import { type ReactNode, useRef } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '-60px' })

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
        mass: 0.92,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

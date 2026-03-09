'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function FadeInUp({
  children,
  className,
  style,
  delay = 0,
  amount = 0.15,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  amount?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

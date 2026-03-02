'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface StatItem {
  value: number
  label: string
}

const stats: StatItem[] = [
  { value: 65, label: 'Members' },
  { value: 2, label: 'Projects' },
  { value: 12, label: 'Engineers' },
]

const COUNT_DURATION = 1400
const PLUS_DELAY = 150
const LABEL_DELAY = 400

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function StatsCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [showPlus, setShowPlus] = useState(false)
  const [showLabels, setShowLabels] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const animateCounters = useCallback(() => {
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / COUNT_DURATION, 1)
      const eased = easeOutCubic(progress)

      setCounts(stats.map(s => Math.round(eased * s.value)))

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setShowPlus(true), PLUS_DELAY)
        setTimeout(() => setShowLabels(true), LABEL_DELAY)
      }
    }

    requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    if (isVisible) animateCounters()
  }, [isVisible, animateCounters])

  const fontFamily = 'var(--font-inter), Inter, sans-serif'

  return (
    <div
      ref={cardRef}
      style={{
        width: 'clamp(280px, 34.64vw, 665px)',
        height: 'clamp(80px, 10.36vw, 199px)',
        borderRadius: 'clamp(20px, 2.08vw, 40px)',
        backgroundColor: '#171717',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span
              style={{
                fontFamily,
                fontWeight: 500,
                fontSize: 'clamp(20px, 2.08vw, 40px)',
                lineHeight: '1.21',
                color: '#FFFFFF',
              }}
            >
              {counts[i]}
            </span>
            <span
              style={{
                fontFamily,
                fontWeight: 500,
                fontSize: 'clamp(20px, 2.08vw, 40px)',
                lineHeight: '1.21',
                color: '#FFFFFF',
                opacity: showPlus ? 1 : 0,
                transition: 'opacity 0.35s ease',
              }}
            >
              +
            </span>
          </div>

          <div
            style={{
              maxHeight: showLabels ? 'clamp(20px, 2.08vw, 40px)' : '0px',
              opacity: showLabels ? 1 : 0,
              overflow: 'hidden',
              transition:
                'max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease',
            }}
          >
            <span
              style={{
                fontFamily,
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.67vw, 32px)',
                lineHeight: '1.21',
                color: '#FFFFFF',
                display: 'block',
                whiteSpace: 'nowrap',
              }}
            >
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

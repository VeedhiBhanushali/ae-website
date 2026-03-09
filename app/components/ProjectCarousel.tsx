'use client'

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// ─── Constants ───────────────────────────────────────────────────────────────
const N = 3
const PEEK_VW = 57        // vw offset for side peek slides
const OFFSCREEN_VW = 114  // vw offset for fully off-screen slides (PEEK_VW * 2)
const DURATION_MS = 550

const slides = [
  {
    image: '/images/Carousel1.png',
    alt: 'RAG Sales Agent project showcase',
    title: 'RAG SALES Agent',
    subtitle: 'SGConsulting' as string | undefined,
    description: undefined as string | undefined,
    link: 'https://scientific-sock-142.notion.site/AI-customer-service-agent-RAG-2fbc943a2c4b80ce80aef1d4ec8eb77c?pvs=143' as string | null,
  },
  {
    image: '/images/Carousel2.png',
    alt: 'Discover AI tool',
    title: 'Discover AI',
    subtitle: undefined as string | undefined,
    description: 'Learn what we can do for you with our custom ai tool',
    link: 'https://discoverai-ae.vercel.app' as string | null,
  },
  {
    image: '/images/carousel3.png',
    alt: 'Agentic Talent Signal project',
    title: 'Agentic Talent Signal',
    subtitle: 'Coming Soon' as string | undefined,
    description: undefined as string | undefined,
    link: null as string | null,
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getVw(idx: number, active: number): number {
  let d = idx - active
  if (d > 1) d -= N
  if (d < -1) d += N
  return d * PEEK_VW
}

function makeTx(vw: number): string {
  const scale = vw === 0 ? 1 : 0.875
  return `translateX(calc(-50% + ${vw}vw)) scale(${scale})`
}

function setSlideStyle(el: HTMLElement, vw: number, transition?: string) {
  if (transition !== undefined) el.style.transition = transition
  el.style.transform = makeTx(vw)
  el.style.zIndex = vw === 0 ? '3' : '1'
  el.style.boxShadow = vw === 0 ? '0px 4px 4px rgba(0,0,0,0.25)' : 'none'
  el.style.pointerEvents = vw === 0 ? 'auto' : 'none'
}

// ─── Slide content ────────────────────────────────────────────────────────────
function SlideOverlay({
  slide,
  isActive,
  isHovered,
}: {
  slide: typeof slides[number]
  isActive: boolean
  isHovered: boolean
}) {
  return (
    <>
      {/* Gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 45%)' }}
      />

      {/* Hover darkening */}
      {isActive && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.18)', opacity: isHovered ? 1 : 0 }}
        />
      )}

      {/* Text label */}
      {slide.subtitle !== undefined ? (
        // Card with frosted pill (RAG + Talent Signal)
        <div
          className="absolute"
          style={{
            bottom: 'clamp(12px, 2.1vw, 40px)',
            left: 'clamp(12px, 2.2vw, 42px)',
            right: 'clamp(12px, 5.7vw, 110px)',
          }}
        >
          <div
            style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              borderRadius: 'clamp(12px, 1.3vw, 25px)',
              padding: 'clamp(14px, 1.6vw, 31px) clamp(16px, 1.93vw, 37px) clamp(18px, 2.15vw, 41px)',
            }}
          >
            <span
              className="block text-white font-normal uppercase"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(16px, 1.875vw, 36px)', lineHeight: '1.21', textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
            >
              {slide.title}
            </span>
            <span
              className="block text-white font-light"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(12px, 1.46vw, 28px)', lineHeight: '1.21', textShadow: '0px 4px 4px rgba(0,0,0,0.25)', marginTop: 'clamp(4px, 0.52vw, 10px)' }}
            >
              {slide.subtitle}
            </span>
          </div>
        </div>
      ) : (
        // Plain text + arrow (Discover AI)
        <div
          className="absolute"
          style={{
            bottom: 'clamp(12px, 3vw, 58px)',
            left: 'clamp(12px, 3.3vw, 63px)',
            maxWidth: 'clamp(200px, 29vw, 558px)',
          }}
        >
          <div className="flex items-center" style={{ gap: 'clamp(8px, 0.6vw, 12px)' }}>
            <span
              className="text-white font-normal uppercase"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(16px, 1.875vw, 36px)', lineHeight: '1.21' }}
            >
              {slide.title}
            </span>
            <svg viewBox="0 0 23 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(16px, 1.18vw, 23px)', flexShrink: 0 }}>
              <line x1="0" y1="5" x2="19" y2="5" stroke="white" strokeWidth="1.5" />
              <path d="M18.95 0L22.74 4.675L18.95 9.35" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <p className="text-white font-light" style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(12px, 1.46vw, 28px)', lineHeight: '1.21', marginTop: 'clamp(8px, 1.3vw, 26px)' }}>
            {slide.description}
          </p>
        </div>
      )}
    </>
  )
}

// ─── Carousel arrow button with hover/tap micro-interaction ────────────────────
function MotionCarouselButton({
  dir,
  d,
  onAdvance,
}: {
  dir: number
  d: string
  onAdvance: () => void
}) {
  return (
    <motion.button
      onClick={onAdvance}
      aria-label={dir === -1 ? 'Previous project' : 'Next project'}
      className="p-2"
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      whileHover={{ scale: 1.15, opacity: 1 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.2 }}
    >
      <svg viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(6px, 0.45vw, 9px)', height: 'auto' }}>
        <path d={d} stroke="#9C9C9C" strokeWidth="2" />
      </svg>
    </motion.button>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProjectCarousel() {
  // React state (minimal — only what drives re-renders for content)
  const [activeIdx, setActiveIdx] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [ghostIdx, setGhostIdx] = useState<number | null>(null)

  // Slide element refs — each ref always owns the same slide index
  const r0 = useRef<HTMLElement>(null)
  const r1 = useRef<HTMLElement>(null)
  const r2 = useRef<HTMLElement>(null)
  const sRefs = [r0, r1, r2]

  // Ghost element ref — temporarily clones the wrap slide entering from off-screen
  const ghostRef = useRef<HTMLElement>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isVisibleRef = useRef(false)
  const isHoveredRef = useRef(false)

  // activeRef mirrors activeIdx but updates synchronously in the setTimeout
  const activeRef = useRef(0)
  // busyRef prevents double-firing before a transition finishes
  const busyRef = useRef(false)

  // Params for the pending animation, written before setGhostIdx triggers a render
  const pendingRef = useRef<{
    dir: 1 | -1
    next: number
    wrapSlide: number
    ghostStartVw: number
    ghostEndVw: number
  } | null>(null)

  // ── Set initial slide positions on mount ────────────────────────────────────
  useLayoutEffect(() => {
    sRefs.forEach((r, i) => {
      if (r.current) setSlideStyle(r.current, getVw(i, 0))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Core animation — fires when ghostIdx becomes non-null (ghost mounts) ────
  useLayoutEffect(() => {
    if (ghostIdx === null || !pendingRef.current) return
    const { dir, next, wrapSlide, ghostStartVw, ghostEndVw } = pendingRef.current
    pendingRef.current = null

    const EASE = `transform ${DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`

    // Ghost: place at off-screen start position, no transition
    if (ghostRef.current) {
      ghostRef.current.style.transition = 'none'
      ghostRef.current.style.transform = makeTx(ghostStartVw)
      ghostRef.current.style.zIndex = '1'
      ghostRef.current.style.boxShadow = 'none'
      ghostRef.current.style.pointerEvents = 'none'
    }

    // Force reflow so the browser commits the initial ghost position
    sRefs.forEach(r => void r.current?.offsetHeight)
    void ghostRef.current?.offsetHeight

    // Animate all 3 main slides:
    //   • wrap slide exits in the movement direction (off-screen)
    //   • other slides move to their natural new positions
    sRefs.forEach((r, i) => {
      if (!r.current) return
      const targetVw = i === wrapSlide
        ? (dir === 1 ? -OFFSCREEN_VW : OFFSCREEN_VW)
        : getVw(i, next)
      setSlideStyle(r.current, targetVw, EASE)
    })

    // Animate ghost: slides in from off-screen to the new peek position
    if (ghostRef.current) {
      ghostRef.current.style.transition = EASE
      ghostRef.current.style.transform = makeTx(ghostEndVw)
    }

    // After animation: snap wrap slide to correct position and clean up
    const timer = setTimeout(() => {
      // Disable all transitions for the instant snap
      sRefs.forEach(r => { if (r.current) r.current.style.transition = 'none' })

      // Snap every slide to its correct natural position for the new active index
      // The wrap slide jumps from off-screen (invisible) to its new side-peek position
      sRefs.forEach((r, i) => {
        if (r.current) setSlideStyle(r.current, getVw(i, next))
      })

      // Commit React state in one batch:
      //   • ghost disappears  → ghost content (wrap slide) vanishes
      //   • real wrap slide   → appears at same position ghost was (seamless)
      activeRef.current = next
      setActiveIdx(next)
      setGhostIdx(null)

      // Re-enable transitions after two frames so the snap doesn't animate
      requestAnimationFrame(() => requestAnimationFrame(() => {
        sRefs.forEach(r => { if (r.current) r.current.style.transition = '' })
        busyRef.current = false
        if (isVisibleRef.current && !isHoveredRef.current) startAutoPlay()
      }))
    }, DURATION_MS + 20)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ghostIdx])

  // ── Advance ─────────────────────────────────────────────────────────────────
  const advanceFnRef = useRef<(dir: 1 | -1) => void>(() => {})

  const advance = useCallback((dir: 1 | -1) => {
    if (busyRef.current) return
    busyRef.current = true

    const cur = activeRef.current
    const next = (cur + dir + N) % N
    // The slide that needs to "wrap around":
    //   going forward  → current left peek  (was at -PEEK_VW, ends up at +PEEK_VW)
    //   going backward → current right peek (was at +PEEK_VW, ends up at -PEEK_VW)
    const wrapSlide = dir === 1 ? (cur - 1 + N) % N : (cur + 1) % N

    pendingRef.current = {
      dir, next, wrapSlide,
      ghostStartVw: dir === 1 ? OFFSCREEN_VW : -OFFSCREEN_VW,
      ghostEndVw:   dir === 1 ? PEEK_VW      : -PEEK_VW,
    }

    // Setting ghostIdx to non-null mounts the ghost element and fires useLayoutEffect
    setGhostIdx(wrapSlide)
  }, [])

  advanceFnRef.current = advance

  // ── Autoplay ────────────────────────────────────────────────────────────────
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => advanceFnRef.current(1), 5000)
  }, [])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) startAutoPlay()
        else stopAutoPlay()
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => { observer.disconnect(); stopAutoPlay() }
  }, [startAutoPlay, stopAutoPlay])

  useEffect(() => {
    isHoveredRef.current = isHovered
    if (isHovered) stopAutoPlay()
    else if (isVisibleRef.current) startAutoPlay()
  }, [isHovered, startAutoPlay, stopAutoPlay])

  // ── Render ──────────────────────────────────────────────────────────────────
  const ghostSlide = ghostIdx !== null ? slides[ghostIdx] : null

  const sharedSlideStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: '50%',
    // transform is set entirely by direct DOM — no React inline transform here
    width: 'clamp(280px, 55.4vw, 1064px)',
    aspectRatio: '1064 / 726',
    borderRadius: 'clamp(12px, 1.3vw, 25px)',
    overflow: 'hidden',
  }

  return (
    <div ref={containerRef} className="relative w-full" style={{ overflow: 'visible' }}>
      {/* Slide track */}
      <div className="relative w-full" style={{ height: 'clamp(200px, 37.8vw, 726px)' }}>

        {/* ── Real slides (persistent DOM nodes) ──────────────────────────── */}
        {/*
          IMPORTANT: element type must never change across renders.
          Switching between <div> and <a> based on isActive causes React to
          unmount + remount the element, destroying all direct-DOM transforms.
          Always render <div>; navigation is handled via onClick so the DOM
          node is stable for every state transition.
        */}
        {slides.map((slide, i) => {
          const isActive = i === activeIdx
          return (
            <div
              key={i}
              ref={sRefs[i] as React.Ref<HTMLDivElement>}
              style={sharedSlideStyle}
              onClick={
                slide.link && isActive
                  ? () => window.open(slide.link!, '_blank', 'noopener,noreferrer')
                  : undefined
              }
              onMouseEnter={isActive ? () => setIsHovered(true) : undefined}
              onMouseLeave={isActive ? () => setIsHovered(false) : undefined}
            >
              <Image src={slide.image} alt={slide.alt} fill className="object-cover" sizes="(max-width: 768px) 90vw, 55vw" priority />
              <SlideOverlay slide={slide} isActive={isActive} isHovered={isHovered && isActive} />
            </div>
          )
        })}

        {/* ── Ghost slide (enters from off-screen, same content as wrap slide) ── */}
        {ghostSlide && (
          <div ref={ghostRef as React.Ref<HTMLDivElement>} style={sharedSlideStyle}>
            <Image src={ghostSlide.image} alt={ghostSlide.alt} fill className="object-cover" sizes="(max-width: 768px) 90vw, 55vw" priority />
            <SlideOverlay slide={ghostSlide} isActive={false} isHovered={false} />
          </div>
        )}
      </div>

      {/* ── Navigation arrows ───────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-center"
        style={{ marginTop: 'clamp(24px, 3.85vw, 74px)', gap: 'clamp(30px, 3.6vw, 69px)' }}
      >
        {[{ dir: -1 as const, d: 'M8 1L1 9.5L8 18' }, { dir: 1 as const, d: 'M1 1L8 9.5L1 18' }].map(({ dir, d }) => (
          <MotionCarouselButton key={dir} dir={dir} d={d} onAdvance={() => advance(dir)} />
        ))}
      </div>
    </div>
  )
}

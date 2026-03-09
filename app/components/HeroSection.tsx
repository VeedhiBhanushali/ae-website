'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'GET INVOLVED', href: '#get-involved' },
  { label: 'FAQ', href: '#faq' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[520px]">
      {/* Rounded background card — subtle scale-in */}
      <motion.div
        className="absolute overflow-hidden"
        style={{
          left: 'clamp(12px, 2.396vw, 46px)',
          top: 'clamp(56px, 9.352vh, 101px)',
          right: 'clamp(12px, 2.396vw, 46px)',
          bottom: 'clamp(12px, 6vh, 65px)',
          borderRadius: '20px',
        }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/new-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(167, 73, 255, 0) 0%, rgba(9, 0, 41, 0.72) 89%)',
          }}
        />
      </motion.div>

      {/* Navbar logo */}
      <motion.div
        className="absolute z-10"
        style={{ left: 'clamp(16px, 2vw, 38px)', top: 'clamp(16px, 3.61vh, 39px)' }}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/regular-logo-transparent.png"
          alt="AE"
          width={24}
          height={19}
          style={{ width: 'clamp(16px, 1.246vw, 24px)', height: 'auto' }}
        />
      </motion.div>

      {/* Nav links */}
      <nav
        className="absolute z-10 hidden sm:flex items-center"
        style={{ left: '6.58vw', top: '3.59vh', gap: 'clamp(24px, 2.656vw, 51px)' }}
      >
        {navItems.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white relative transition-opacity hover:opacity-80"
            style={{ fontSize: 'clamp(11px, 0.833vw, 16px)', fontWeight: 400 }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <motion.button
        className="absolute z-10 sm:hidden text-white p-1"
        style={{ right: '16px', top: '16px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Hero content group — staggered */}
      <motion.div
        className="absolute z-10"
        style={{
          left: 'clamp(16px, 13.194vw, 253px)',
          top: '37.545vh',
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center"
          style={{ gap: 'clamp(8px, 0.768vw, 14.75px)' }}
          variants={item}
        >
          <Image
            src="/images/logo-square.png"
            alt=""
            width={49}
            height={49}
            style={{
              width: 'clamp(28px, 2.553vw, 49px)',
              height: 'clamp(28px, 2.553vw, 49px)',
              objectFit: 'contain',
            }}
          />
          <span
            className="text-white font-semibold uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(14px, 1.667vw, 32px)', lineHeight: 1.1 }}
          >
            Applied Engineering
          </span>
        </motion.div>

        <motion.h1
          className="font-extrabold uppercase text-white"
          style={{
            marginTop: 'clamp(6px, 0.885vw, 17px)',
            width: 'clamp(280px, 46.437vw, 892px)',
            fontSize: 'clamp(26px, 3.646vw, 70px)',
            lineHeight: 1.0086,
          }}
          variants={item}
        >
          {'A STUDENT RUN '}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/memojis.png"
            alt=""
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              height: '0.74em',
              width: 'auto',
            }}
          />
          <br />
          {'SOFTWARE '}
          <span style={{ whiteSpace: 'nowrap' }}>AGENCY <span style={{ color: '#A749FF' }}>{'{ }'}</span></span>
          <br />
          {'AT SJSU '}
          <motion.a
            href="https://forms.gle/b9obbC32VLeFdbfX7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium inline-flex items-center justify-center align-middle text-center no-underline"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              fontSize: '0.23em',
              textTransform: 'none',
              borderRadius: '51px',
              height: '3.26em',
              paddingLeft: '1.84em',
              paddingRight: '1.84em',
              whiteSpace: 'nowrap',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Now
          </motion.a>
        </motion.h1>
      </motion.div>

      {/* Scroll chevron — gentle bounce */}
      <motion.div
        className="absolute z-10 left-1/2 -translate-x-1/2"
        style={{ bottom: 'clamp(12px, 4vh, 43px)' }}
        initial={{ opacity: 0, y: -6 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <motion.svg
          width="12"
          height="7"
          viewBox="0 0 19 10"
          fill="none"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M1 1L9.59 9.59L18.18 1"
            stroke="rgba(255,255,255,0.69)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  )
}

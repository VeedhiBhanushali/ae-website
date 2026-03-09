'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import TeamModal from './TeamModal'

const categories = ['Software', 'Management', 'Creative'] as const

export default function GetInvolvedLinks() {
  const [activeTeam, setActiveTeam] = useState<string | null>(null)

  return (
    <>
      {/* Categories */}
      <div
        className="flex flex-col"
        style={{
          marginTop: 'clamp(40px, 4.19vw, 80px)',
        }}
      >
        {categories.map((category, i) => (
          <motion.button
            key={category}
            onClick={() => setActiveTeam(category)}
            className="flex items-center group"
            style={{
              gap: 'clamp(6px, 0.63vw, 12px)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              textAlign: 'left',
            }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="text-white font-normal transition-opacity duration-200 group-hover:opacity-70"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(16px, 1.67vw, 32px)',
                lineHeight: '1.21',
              }}
            >
              {category}
            </span>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{
                width: 'clamp(8px, 0.73vw, 14px)',
                height: 'auto',
                flexShrink: 0,
              }}
            >
              <path
                d="M1 13.5L13 1.5M13 1.5H5M13 1.5V9.5"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </motion.button>
        ))}
      </div>

      <TeamModal category={activeTeam} onClose={() => setActiveTeam(null)} />
    </>
  )
}

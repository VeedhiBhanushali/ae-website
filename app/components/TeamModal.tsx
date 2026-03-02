'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'

interface Role {
  title: string
  responsibilities: string[]
  resumeImpact: string
}

interface SubTeam {
  name: string
  desc: string
  roles: Role[]
}

interface TeamInfo {
  number: string
  name: string
  tagline: string
  description: string
  subTeams: SubTeam[]
}

const teams: Record<string, TeamInfo> = {
  Software: {
    number: '01',
    name: 'TECHNICAL',
    tagline: 'Turning code into impact.',
    description:
      'We lead software projects, technical workshops, and skill-building initiatives — delivering real solutions for clients while equipping members with industry-ready experience.',
    subTeams: [
      {
        name: 'Projects',
        desc: 'End-to-end software development and client delivery',
        roles: [
          { title: 'Project Manager', responsibilities: ['Define project scope, timeline, and deliverables with client', 'Create schedules and assign tasks', 'Facilitate standups, resolve blockers', 'Act as client point of contact and manage expectations'], resumeImpact: 'Managed software projects end-to-end, led client communications, coordinated 5–8 person teams' },
          { title: 'Technical Lead', responsibilities: ['Decide frameworks, tools, and architecture', 'Mentor developers and review code', 'Enforce coding standards, version control, testing', 'Present technical decisions and demos to clients'], resumeImpact: 'Led technical direction, enforced standards, mentored team, designed architecture' },
          { title: 'Developer', responsibilities: ['Write clean, efficient code for assigned modules', 'Participate in code reviews and documentation', 'Collaborate with QA to debug and test', 'Deliver features on time for demos'], resumeImpact: 'Developed production-ready code in agile sprints, collaborated on client projects' },
          { title: 'QA Engineer', responsibilities: ['Write and run test cases for features', 'Enforce quality gates (DR1, DR2, Midterm, Final)', 'Log and track bugs with developers', 'Verify deliverables meet client standards'], resumeImpact: 'Tested client software, enforced quality standards, ensured bug-free deliverables' },
        ],
      },
      {
        name: 'Workshops',
        desc: 'Technical education and skill development',
        roles: [
          { title: 'Workshop Instructor', responsibilities: ['Run coding bootcamps and advanced sessions (web, AI/ML, cloud)', 'Develop tutorials, slides, and self-paced resources', 'Host guest speakers and Q&A panels', 'Maintain AE\'s technical learning library'], resumeImpact: 'Led coding workshops, developed technical curriculum, created resource library' },
        ],
      },
      {
        name: 'Talent',
        desc: 'Recruitment and member development',
        roles: [
          { title: 'Recruiter & Onboarding Coordinator', responsibilities: ['Manage applications, interviews, and assessments', 'Run onboarding bootcamps for new members', 'Track member progress and training', 'Monitor engagement and retention'], resumeImpact: 'Coordinated recruitment funnel, onboarded new members, tracked growth metrics' },
        ],
      },
    ],
  },
  Management: {
    number: '02',
    name: 'MANAGEMENT',
    tagline: 'Driving strategy and partnerships.',
    description:
      'We oversee operations, client outreach, finances, and logistics — ensuring AE runs like a consulting firm and every project team has the support to succeed.',
    subTeams: [
      {
        name: 'Consulting Partnerships',
        desc: 'Client relations and business development',
        roles: [
          { title: 'Client Relations Manager', responsibilities: ['Reach out to companies, professors, alumni for projects', 'Manage client communications during projects', 'Draft and manage Statements of Work with SJSU compliance', 'Build long-term partnerships and referrals'], resumeImpact: 'Managed client outreach, negotiated partnerships, maintained project pipeline' },
        ],
      },
      {
        name: 'Industry Relations',
        desc: 'Professional development and networking',
        roles: [
          { title: 'Professional Development Lead', responsibilities: ['Organize recruiter sessions and career events', 'Manage AE\'s LinkedIn presence for professional branding', 'Host career readiness events (resume reviews, interview prep)', 'Engage alumni for networking and workshops'], resumeImpact: 'Organized recruiter partnerships, hosted professional workshops, grew alumni network' },
        ],
      },
      {
        name: 'Finance & Compliance',
        desc: 'Financial oversight and regulatory compliance',
        roles: [
          { title: 'Treasurer & Budget Analyst', responsibilities: ['Track accounts, budgets, and project/event spending', 'Process reimbursements and fundraising', 'File compliance paperwork and educate members', 'Publish financial reports for transparency'], resumeImpact: 'Managed budgets, ensured compliance, coordinated reimbursements and fundraising' },
        ],
      },
      {
        name: 'Operations',
        desc: 'Internal systems and logistics',
        roles: [
          { title: 'Operations Coordinator', responsibilities: ['Manage Discord, website, and scheduling systems', 'Secure rooms, labs, equipment, and procurement', 'Maintain documentation for workflows', 'Ensure safety and compliance with campus standards'], resumeImpact: 'Managed internal systems and logistics, optimized workflows, ensured compliance' },
        ],
      },
    ],
  },
  Creative: {
    number: '03',
    name: 'CREATIVES',
    tagline: 'Designing the story and experience.',
    description:
      'We shape AE\'s brand through marketing, events, and media — making our work visible, engaging, and inspiring to students, clients, and the community.',
    subTeams: [
      {
        name: 'Marketing & Communications',
        desc: 'Digital presence and brand messaging',
        roles: [
          { title: 'Social Media Manager', responsibilities: ['Manage Instagram, LinkedIn, and other platforms', 'Publish newsletters and announcements', 'Share project stories and student journeys', 'Run campaigns for recruitment and events'], resumeImpact: 'Managed social media and campaigns, wrote newsletters, promoted projects' },
        ],
      },
      {
        name: 'Graphic Design & Media',
        desc: 'Visual design and multimedia content',
        roles: [
          { title: 'Creative Designer', responsibilities: ['Create graphics, logos, and templates', 'Capture photos/videos at events', 'Maintain AE\'s media library', 'Produce reels, highlight videos, and creative campaigns'], resumeImpact: 'Designed brand assets, produced event media, created multimedia campaigns' },
        ],
      },
      {
        name: 'Events & Engagement',
        desc: 'Community building and event coordination',
        roles: [
          { title: 'Event Coordinator', responsibilities: ['Host student-facing events (mixers, info sessions)', 'Run end-of-semester showcases for clients', 'Collaborate with other orgs on hackathons/fairs', 'Build community through socials and bonding events'], resumeImpact: 'Organized student/community events, coordinated client showcases, managed collaborations' },
        ],
      },
    ],
  },
}

interface Props {
  category: string | null
  onClose: () => void
}

function RevealItem({ show, delay, children }: { show: boolean; delay: number; children: React.ReactNode }) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.45s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.45s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function TeamModal({ category, onClose }: Props) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reveal, setReveal] = useState(false)
  const backdropRef = useRef<HTMLDivElement>(null)

  const team = category ? teams[category] : null

  useEffect(() => {
    if (category) {
      setMounted(true)
      setReveal(false)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true)
          setTimeout(() => setReveal(true), 200)
        })
      })
      document.body.style.overflow = 'hidden'
    } else {
      setVisible(false)
      setReveal(false)
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [category])

  useEffect(() => {
    if (!visible && mounted) {
      const t = setTimeout(() => setMounted(false), 350)
      return () => clearTimeout(t)
    }
  }, [visible, mounted])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    if (category) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  })

  const handleClose = useCallback(() => {
    setReveal(false)
    setVisible(false)
    setTimeout(onClose, 350)
  }, [onClose])

  if (!mounted || !team) return null

  const font = 'var(--font-inter), Inter, sans-serif'

  let itemIdx = 0
  const stagger = 60

  const modal = (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) handleClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: visible ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: visible ? 'blur(20px)' : 'blur(0px)',
        WebkitBackdropFilter: visible ? 'blur(20px)' : 'blur(0px)',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
        padding: 'clamp(16px, 2vw, 40px)',
      }}
    >
      <div
        style={{
          width: 'min(680px, 92vw)',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: '#0e0e0e',
          border: '1px solid #222',
          borderRadius: 'clamp(16px, 1.5vw, 28px)',
          padding: 'clamp(24px, 2.5vw, 48px)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
          transition: 'opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px, 1.5vw, 28px)',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="hover:opacity-100 transition-opacity"
          style={{ position: 'sticky', top: 0, alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', zIndex: 1, opacity: 0.4 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Header */}
        <RevealItem show={reveal} delay={0}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '-8px' }}>
            <span style={{ fontFamily: font, fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#555', letterSpacing: '0.12em' }}>
              {team.number}
            </span>
            <span style={{ fontFamily: font, fontWeight: 500, fontSize: 'clamp(20px, 1.67vw, 32px)', color: '#FFFFFF', letterSpacing: '0.02em' }}>
              {team.name}
            </span>
          </div>
        </RevealItem>

        <RevealItem show={reveal} delay={80}>
          <div style={{ height: '1px', background: '#222' }} />
        </RevealItem>

        {/* Tagline + Description */}
        <RevealItem show={reveal} delay={140}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontFamily: font, fontSize: 'clamp(15px, 1.15vw, 22px)', lineHeight: '1.4', color: '#FFFFFF' }}>
              {team.tagline}
            </p>
            <p style={{ fontFamily: font, fontSize: 'clamp(12px, 0.83vw, 16px)', lineHeight: '1.6', color: '#777' }}>
              {team.description}
            </p>
          </div>
        </RevealItem>

        {/* Sub-teams & roles */}
        {team.subTeams.map((sub) => {
          const headerDelay = 220 + itemIdx * stagger
          itemIdx++

          return (
            <div key={sub.name} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 0.8vw, 14px)' }}>
              <RevealItem show={reveal} delay={headerDelay}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontFamily: font, fontWeight: 500, fontSize: 'clamp(13px, 0.94vw, 18px)', color: '#FFFFFF', letterSpacing: '0.03em' }}>
                    {sub.name}
                  </span>
                  <span style={{ fontFamily: font, fontSize: 'clamp(11px, 0.73vw, 14px)', color: '#555' }}>
                    {sub.desc}
                  </span>
                </div>
              </RevealItem>

              {sub.roles.map((role) => {
                const roleDelay = 220 + itemIdx * stagger
                itemIdx++

                return (
                  <RevealItem key={role.title} show={reveal} delay={roleDelay}>
                    <div
                      style={{
                        background: '#151515',
                        border: '1px solid #1e1e1e',
                        borderRadius: 'clamp(10px, 0.9vw, 16px)',
                        padding: 'clamp(14px, 1.3vw, 24px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'clamp(8px, 0.7vw, 12px)',
                      }}
                    >
                      <span style={{ fontFamily: font, fontWeight: 500, fontSize: 'clamp(13px, 0.94vw, 18px)', color: '#FFFFFF' }}>
                        {role.title}
                      </span>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {role.responsibilities.map((r, i) => (
                          <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                            <span style={{ color: '#7C4AD9', fontSize: '6px', flexShrink: 0, marginTop: '5px' }}>●</span>
                            <span style={{ fontFamily: font, fontSize: 'clamp(11px, 0.73vw, 14px)', lineHeight: '1.6', color: '#999' }}>
                              {r}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', gap: '6px', alignItems: 'baseline', borderTop: '1px solid #1e1e1e', paddingTop: 'clamp(6px, 0.5vw, 10px)' }}>
                        <span style={{ fontFamily: font, fontSize: 'clamp(9px, 0.57vw, 11px)', color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>
                          Resume
                        </span>
                        <span style={{ fontFamily: font, fontSize: 'clamp(11px, 0.73vw, 14px)', lineHeight: '1.5', color: '#666', fontStyle: 'italic' }}>
                          {role.resumeImpact}
                        </span>
                      </div>
                    </div>
                  </RevealItem>
                )
              })}
            </div>
          )
        })}

        {/* View Roles link */}
        <RevealItem show={reveal} delay={220 + itemIdx * stagger}>
          <a
            href="https://applied-engineering-roles.vercel.app/roles"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#222] transition-colors"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: font,
              fontSize: 'clamp(12px, 0.73vw, 14px)',
              color: '#FFFFFF',
              backgroundColor: '#181818',
              padding: 'clamp(8px, 0.6vw, 12px) clamp(14px, 1.1vw, 20px)',
              borderRadius: '50px',
              width: 'fit-content',
            }}
          >
            View All Roles
            <svg viewBox="0 0 14 15" fill="none" style={{ width: '11px', height: 'auto' }}>
              <path d="M1 13.5L13 1.5M13 1.5H5M13 1.5V9.5" stroke="white" strokeWidth="1.5" />
            </svg>
          </a>
        </RevealItem>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What do students get from AE?",
      answer: "You'll build things with a real team, under real constraints, and walk away with proof projects you can show, stories you can tell in interviews, and the confidence that comes from shipping something people use. It is the closest you can get to working with industry apart from a job/internship, which goes a long way."
    },
    {
      question: "What kinds of projects do we do?",
      answer: "Projects that solve real problems, usually where a team can make a noticeable dent. Think: cutting down manual work, building a prototype to test an idea, turning messy data into a dashboard, improving a workflow, or creating a simple tool that saves time. We focus on practical outcomes for companies."
    },
    {
      question: "How can you get involved?",
      answer: "Don't overthink it: join a track, we are really flexible and avoid rigidity. Most people get momentum by doing. We have positions in development, PM, design, leadership, content, social media, and more."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {faqs.map((faq, index) => (
        <div key={index}>
          {/* FAQ Question Button */}
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full cursor-pointer hover:bg-[#1f1f1f] transition-colors"
            style={{
              backgroundColor: '#171717',
              borderRadius: 'clamp(12px, 1.3vw, 25px)',
              padding: 'clamp(17px, 1.77vw, 34px) clamp(17px, 1.72vw, 33px)',
              minHeight: 'clamp(40px, 4.17vw, 80px)'
            }}
          >
            <span 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(16px, 1.25vw, 24px)',
                lineHeight: '1.21',
                color: '#C5C5C5'
              }}
            >
              {faq.question}
            </span>
            <svg 
              width="15" 
              height="10" 
              viewBox="0 0 15 10" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300"
              style={{ 
                width: 'clamp(10px, 0.76vw, 15px)',
                height: 'clamp(7px, 0.49vw, 10px)',
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              <path d="M7.5 10L0 0H15L7.5 10Z" fill="#797979"/>
            </svg>
          </button>

          {/* FAQ Answer Content */}
          {openIndex === index && (
            <div 
              className="overflow-hidden transition-all duration-300"
              style={{
                paddingTop: 'clamp(12px, 1.25vw, 24px)',
                paddingLeft: 'clamp(17px, 1.77vw, 34px)',
                paddingRight: 'clamp(17px, 1.72vw, 33px)',
                paddingBottom: 'clamp(17px, 1.77vw, 34px)'
              }}
            >
              <div
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 1.04vw, 20px)',
                  lineHeight: '1.5',
                  color: '#C5C5C5'
                }}
              >
                {faq.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}


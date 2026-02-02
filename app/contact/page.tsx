import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen bg-black px-4 sm:px-6 md:px-[38px] pt-4 sm:pt-6 md:pt-[39px] pb-4 overflow-hidden">
      {/* Container */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-[43px] max-w-[1844px] mx-auto h-[calc(100vh-78px)]">
        {/* Header Navigation */}
        <header className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/regular-logo-transparent.png"
              alt="Applied Engineering Logo"
              width={24}
              height={19}
              className="w-5 sm:w-6 h-auto"
            />
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-[50px]">
            <Link 
              href="/" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              HOME
            </Link>
            <Link 
              href="/#about" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ABOUT
            </Link>
            <Link 
              href="/#projects" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              PROJECTS
            </Link>
            <Link 
              href="/#faq" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Main Content Area */}
        <div 
          className="relative flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[46px] overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src="/images/contact-bg.png"
            alt="Contact Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={100}
            unoptimized
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col p-6 sm:p-10 md:p-[40px] lg:p-[50px]">
            {/* Top Row - Title and Logo */}
            <div className="flex items-start justify-between w-full">
              {/* Title */}
              <h1 
                className="text-white leading-[0.955]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '300',
                  fontSize: 'clamp(32px, 3.33vw, 64px)'
                }}
              >
                Let's Get In Touch
              </h1>

              {/* Large Logo */}
              <div className="flex-shrink-0 hidden md:block">
                <Image
                  src="/images/ae-logo.png"
                  alt="Applied Engineering Logo"
                  width={120}
                  height={96}
                  quality={100}
                  unoptimized
                  style={{
                    width: 'clamp(40px, 3.07vw, 59px)',
                    height: 'auto'
                  }}
                />
              </div>
            </div>

            {/* Social Links - positioned below title */}
            <div 
              className="flex flex-col"
              style={{ 
                gap: 'clamp(8px, 0.8vw, 16px)',
                marginTop: 'clamp(24px, 2.5vw, 48px)'
              }}
            >
              {/* Email */}
              <a 
                href="mailto:appliedengineeringsjsu@gmail.com"
                className="flex items-center text-white hover:opacity-80 transition-opacity group"
                style={{ gap: 'clamp(6px, 0.42vw, 8px)' }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(20px, 1.67vw, 32px)',
                    lineHeight: '1.21'
                  }}
                >
                  Email
                </span>
                <svg 
                  width="14" 
                  height="15" 
                  viewBox="0 0 14 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ 
                    width: 'clamp(10px, 0.73vw, 14px)',
                    height: 'clamp(10px, 0.76vw, 15px)'
                  }}
                >
                  <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/appliedengineering.sjsu?igsh=NTc4MTIwNjQ2YQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:opacity-80 transition-opacity group"
                style={{ gap: 'clamp(8px, 0.63vw, 12px)' }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(20px, 1.67vw, 32px)',
                    lineHeight: '1.21'
                  }}
                >
                  Instagram
                </span>
                <svg 
                  width="14" 
                  height="15" 
                  viewBox="0 0 14 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ 
                    width: 'clamp(10px, 0.73vw, 14px)',
                    height: 'clamp(10px, 0.76vw, 15px)'
                  }}
                >
                  <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/ae-sjsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:opacity-80 transition-opacity group"
                style={{ gap: 'clamp(8px, 0.63vw, 12px)' }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(20px, 1.67vw, 32px)',
                    lineHeight: '1.21'
                  }}
                >
                  LinkedIn
                </span>
                <svg 
                  width="14" 
                  height="15" 
                  viewBox="0 0 14 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ 
                    width: 'clamp(10px, 0.73vw, 14px)',
                    height: 'clamp(10px, 0.76vw, 15px)'
                  }}
                >
                  <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Discord */}
              <a 
                href="https://discord.gg/appliedengineering" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:opacity-80 transition-opacity group"
                style={{ gap: 'clamp(8px, 0.63vw, 12px)' }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(20px, 1.67vw, 32px)',
                    lineHeight: '1.21'
                  }}
                >
                  Discord
                </span>
                <svg 
                  width="14" 
                  height="15" 
                  viewBox="0 0 14 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  style={{ 
                    width: 'clamp(10px, 0.73vw, 14px)',
                    height: 'clamp(10px, 0.76vw, 15px)'
                  }}
                >
                  <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


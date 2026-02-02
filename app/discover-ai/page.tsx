import Image from 'next/image'
import Link from 'next/link'

export default function DiscoverAI() {
  return (
    <main className="min-h-screen bg-black px-4 sm:px-6 md:px-[38px] pt-4 sm:pt-6 md:pt-[39px] pb-4">
      {/* Container */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-[43px] max-w-[1844px] mx-auto min-h-[calc(100vh-78px)]">
        {/* Header Navigation */}
        <header className="flex items-center justify-between w-full">
          {/* Back Button */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity group"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path 
                d="M12.5 15L7.5 10L12.5 5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm md:text-base font-normal tracking-wide">
              Back
            </span>
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

        {/* Main Content - Centered Message */}
        <div className="flex-1 flex items-center justify-center">
          <h1 
            className="text-center"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.04vw, 20px)',
              lineHeight: '1.21',
              color: '#868686'
            }}
          >
            We're working hard to ship soon!<br />Stay tuned
          </h1>
        </div>
      </div>
    </main>
  )
}


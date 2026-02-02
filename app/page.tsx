import Image from 'next/image'
import Link from 'next/link'
import FAQ from './components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-4 sm:px-6 md:px-[38px] pt-4 sm:pt-6 md:pt-[39px] pb-4 overflow-x-clip">
      {/* Container - max-width ensures consistent alignment on large screens */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-[43px] max-w-[1844px] mx-auto overflow-visible">
        {/* Header Navigation */}
        <header className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/regular-logo-transparent.png"
              alt="Applied Engineering Logo"
              width={24}
              height={19}
              className="w-5 sm:w-6 h-auto"
            />
          </div>
          
          {/* Navigation Links - Hidden on mobile, visible on sm+ */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-[50px]">
            <a 
              href="#" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
            >
              ABOUT
            </a>
            <a 
              href="#projects" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
            >
              PROJECTS
            </a>
            <a 
              href="#faq" 
              className="text-white text-sm md:text-base font-normal tracking-wide hover:opacity-80 transition-opacity"
            >
              FAQ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Hero Section */}
        <section className="relative w-full">
          {/* Background Image */}
          <div className="relative w-full h-[calc(100vh-100px)] sm:h-[calc(100vh-120px)] md:h-[calc(100vh-140px)] min-h-[500px] sm:min-h-[600px] max-h-[922px] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-black">
            <Image
              src="/images/background.png"
              alt="Aurora Background"
              fill
              priority
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
              {/* 
                Content Group - Uses inline-flex so width is determined by content (title).
                On mobile: stacked vertically, centered
                On desktop: logo left, text right, buttons align to title's right edge
              */}
              <div 
                className="flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left"
                style={{ gap: 'clamp(24px, 5vw, 96px)' }}
              >
                {/* Large Logo Card - scales with viewport */}
                <div className="flex-shrink-0">
                  <Image
                    src="/images/logo-main-card.png"
                    alt="Applied Engineering Logo Card"
                    width={185}
                    height={185}
                    className="h-auto"
                    style={{ width: 'clamp(100px, 9.6vw, 185px)' }}
                  />
                </div>
                
                {/* Text Block - inline-flex makes it shrink to fit content (title width) */}
                <div className="inline-flex flex-col items-center lg:items-start" style={{ gap: 'clamp(8px, 0.52vw, 10px)' }}>
                  {/* Main Title - this determines the width of the entire text block */}
                  <h1 
                    className="text-[#111111] font-black uppercase leading-[0.955] tracking-tight whitespace-nowrap"
                    style={{ 
                      fontFamily: 'AkzidenzGrotesk, Arial Black, sans-serif',
                      fontSize: 'clamp(30px, 5.2vw, 100px)'
                    }}
                  >
                    Applied engineering
                  </h1>
                  
                  {/* Content Row - Subtitle and Buttons - fills title width */}
                  <div 
                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full"
                    style={{ gap: 'clamp(16px, 1.67vw, 32px)' }}
                  >
                    {/* Subtitle - scales proportionally */}
                    <h2 
                      className="text-white font-black uppercase leading-[1.1] tracking-tight flex-shrink-0"
                      style={{ 
                        fontFamily: 'AkzidenzGrotesk, Arial Black, sans-serif',
                        fontSize: 'clamp(14px, 1.67vw, 32px)',
                        mixBlendMode: "overlay",
                        opacity: 0.95,
                      }}
                    >
                      A STUDENT RUN SOFTWARE<br />AGENCY AT SJSU
                    </h2>
                    
                    {/* Buttons Container - aligned to title's right edge on desktop */}
                    <div 
                      className="flex items-center justify-center lg:justify-end flex-shrink-0"
                      style={{ gap: 'clamp(12px, 1.77vw, 34px)' }}
                    >
                      <a 
                        href="https://forms.gle/b9obbC32VLeFdbfX7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full text-white font-medium hover:bg-white/50 transition-colors whitespace-nowrap bg-white/[0.2]"
                        style={{
                          fontSize: 'clamp(12px, 1.04vw, 20px)',
                          padding: 'clamp(8px, 0.625vw, 12px) clamp(16px, 1.25vw, 24px)'
                        }}
                      >
                        Join Now
                      </a>
                      <Link 
                        href="/contact"
                        className="rounded-full text-white font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
                        style={{
                          fontSize: 'clamp(12px, 1.04vw, 20px)',
                          padding: 'clamp(8px, 0.625vw, 12px) clamp(16px, 1.25vw, 24px)',
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.5)'
                        }}
                      >
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections Container - aligned with hero section */}
        <div 
          className="flex flex-col w-full overflow-visible"
          style={{ 
            paddingTop: 'clamp(80px, 10.8vw, 208px)',
            paddingBottom: '0',
            gap: 'clamp(120px, 16vw, 307px)'
          }}
        >
          {/* For Industry Section */}
          <section 
            className="w-full flex flex-col lg:flex-row justify-between items-start"
            style={{ gap: 'clamp(40px, 7.5vw, 144px)' }}
          >
            {/* Left Content */}
            <div 
              className="flex flex-col flex-1 max-w-[700px]"
              style={{ 
                gap: 'clamp(32px, 3.28vw, 63px)',
                paddingRight: 'clamp(0px, 2.9vw, 56px)'
              }}
            >
              <h2 
                className="text-white font-normal"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(24px, 2.08vw, 40px)',
                  lineHeight: '1.21'
                }}
              >
                FOR INDUSTRY
              </h2>
              <div 
                className="flex flex-col"
                style={{ gap: 'clamp(16px, 1.5vw, 29px)' }}
              >
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    color: '#C5C5C5'
                  }}
                >
                  Industry partners work with Applied Engineering to turn problems/ideas into shipped solutions.
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    color: '#C5C5C5'
                  }}
                >
                  We scope fast, build with rigor, and deliver.
                </p>
              </div>
              <Link 
                href="/contact"
                className="rounded-[50px] text-white font-normal hover:bg-[#252525] transition-colors self-start"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(16px, 1.25vw, 24px)',
                  lineHeight: '1.21',
                  backgroundColor: '#171717',
                  padding: 'clamp(16px, 1.15vw, 22px) clamp(28px, 2.14vw, 41px)'
                }}
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Right Content - Discover AI Card */}
            <Link 
              href="/discover-ai"
              className="flex-shrink-0 relative overflow-visible block transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Glow effect - ultra soft diffuse glow matching Figma's 255px blur */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: '50%',
                  bottom: '-60%',
                  transform: 'translateX(-50%)',
                  width: 'clamp(900px, 90vw, 1800px)',
                  height: 'clamp(400px, 40vw, 800px)',
                  background: 'radial-gradient(ellipse 60% 60% at center, rgba(201, 186, 255, 0.22) 0%, rgba(201, 186, 255, 0.15) 10%, rgba(201, 186, 255, 0.1) 20%, rgba(201, 186, 255, 0.06) 30%, rgba(201, 186, 255, 0.035) 40%, rgba(201, 186, 255, 0.02) 50%, rgba(201, 186, 255, 0.01) 60%, rgba(201, 186, 255, 0.005) 70%, rgba(201, 186, 255, 0) 85%)',
                  zIndex: 0
                }}
              />
              {/* Card */}
              <div className="relative z-10">
                <Image
                  src="/images/discover-ai-card.png"
                  alt="Discover AI - Learn what we can do for you with our custom AI tool"
                  width={667}
                  height={317}
                  style={{ 
                    width: 'clamp(300px, 34.7vw, 667px)',
                    height: 'auto'
                  }}
                />
              </div>
            </Link>
          </section>

          {/* For Students Section */}
          <section 
            className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center"
            style={{ gap: 'clamp(40px, 10.5vw, 201px)' }}
          >
            {/* Left Content */}
            <div 
              className="flex flex-col flex-1 max-w-[700px]"
              style={{ 
                gap: 'clamp(32px, 3.39vw, 65px)',
                paddingRight: 'clamp(0px, 3.9vw, 75px)'
              }}
            >
              <h2 
                className="text-white font-normal"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(24px, 2.08vw, 40px)',
                  lineHeight: '1.21'
                }}
              >
                FOR STUDENTS
              </h2>
              <div 
                className="flex flex-col"
                style={{ gap: 'clamp(16px, 1.5vw, 29px)' }}
              >
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    color: '#C5C5C5'
                  }}
                >
                  Turn your skills into proof.
                </p>
                <p 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    color: '#C5C5C5'
                  }}
                >
                  Join teams that prototype, test, and deliver for industry partners. Earn credibility with a portfolio that gets hired.
                </p>
              </div>
              <div 
                className="flex items-center flex-wrap"
                style={{ gap: 'clamp(20px, 2.6vw, 50px)' }}
              >
                <a 
                  href="https://forms.gle/b9obbC32VLeFdbfX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[50px] text-white font-normal hover:bg-[#252525] transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    backgroundColor: '#171717',
                    padding: 'clamp(16px, 1.2vw, 23px) clamp(24px, 1.6vw, 31px)'
                  }}
                >
                  Apply Now
                </a>
                <a 
                  href="https://docs.google.com/forms/d/1N1sm7BgaOuHRdhBfPRv7CyesLsDrFbQCL9N95AfJ-4c/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-normal underline hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21'
                  }}
                >
                  Become a member
                </a>
              </div>
            </div>
            
            {/* Right Content - Stats Card */}
            <div className="flex-shrink-0 relative overflow-visible">
              {/* Glow effect - ultra soft diffuse glow matching Figma's 255px blur */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(850px, 85vw, 1700px)',
                  height: 'clamp(400px, 40vw, 800px)',
                  background: 'radial-gradient(ellipse 60% 60% at center, rgba(223, 186, 255, 0.22) 0%, rgba(223, 186, 255, 0.15) 10%, rgba(223, 186, 255, 0.1) 20%, rgba(223, 186, 255, 0.06) 30%, rgba(223, 186, 255, 0.035) 40%, rgba(223, 186, 255, 0.02) 50%, rgba(223, 186, 255, 0.01) 60%, rgba(223, 186, 255, 0.005) 70%, rgba(223, 186, 255, 0) 85%)',
                  zIndex: 0
                }}
              />
              {/* Card */}
              <div className="relative z-10">
                <Image
                  src="/images/for-students-counter-card.png"
                  alt="65+ Members, 2+ Projects, 12+ Engineers"
                  width={667}
                  height={206}
                  style={{ 
                    width: 'clamp(300px, 34.7vw, 667px)',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section 
            id="projects"
            className="w-full relative"
            style={{ 
              minHeight: 'clamp(500px, 51.3vw, 985px)'
            }}
          >
            {/* Decorative Curve SVG - extends beyond viewport for wide screens */}
            <div 
              className="absolute pointer-events-none left-1/2"
              style={{
                top: 'clamp(20px, 2.2vw, 42px)',
                transform: 'translateX(calc(-50% + clamp(20px, 2vw, 40px)))',
                width: '100vw',
                height: 'clamp(258px, 26.88vw, 516px)',
                overflow: 'visible'
              }}
            >
              <svg 
                viewBox="0 0 1920 516" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'visible'
                }}
                preserveAspectRatio="xMidYMid slice"
              >
                <path 
                  d="M3249.85 392.053C3249.85 392.053 2195.5 510.544 1988.9 500.849C1782.29 491.153 1409.06 476.537 1013.19 260.52C564.055 15.4325 71.9955 5.14534 -117.023 18.0419C-306.042 30.9384 -1837.74 283.129 -1837.74 283.129" 
                  stroke="url(#paint0_linear_42_699)" 
                  strokeWidth="29"
                />
                <defs>
                  <linearGradient id="paint0_linear_42_699" x1="513.071" y1="-31.8797" x2="513.071" y2="515.66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C4AD9"/>
                    <stop offset="1" stopColor="#0E031C"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content */}
            <div 
              className="relative z-10 flex flex-col"
              style={{ 
                paddingTop: 'clamp(80px, 8vw, 155px)',
                gap: 'clamp(80px, 8.9vw, 171px)'
              }}
            >
              {/* Header Row */}
              <div 
                className="flex items-center flex-wrap"
                style={{ gap: 'clamp(24px, 3.44vw, 66px)' }}
              >
                <h2 
                  className="text-white font-normal"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(28px, 2.5vw, 48px)',
                    lineHeight: '1.21'
                  }}
                >
                  PROJECTS
                </h2>
                <span 
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(28px, 2.5vw, 48px)',
                    lineHeight: '1.21',
                    color: '#2F2F2F'
                  }}
                >
                  FALL 25
                </span>
              </div>

              {/* Coming Soon Card */}
              <div 
                className="flex items-center justify-center"
                style={{
                  width: 'clamp(350px, 37.9vw, 727px)',
                  height: 'clamp(200px, 20.4vw, 392px)',
                  borderRadius: 'clamp(25px, 2.6vw, 50px)',
                  border: '1.5px solid #494949'
                }}
              >
                <span 
                  className="uppercase"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    color: '#3A3A3A'
                  }}
                >
                  Coming Soon
                </span>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section 
            id="faq"
            className="w-full relative overflow-visible"
            style={{ 
              paddingTop: 'clamp(30px, 3vw, 60px)',
              paddingBottom: '0',
              marginTop: 'clamp(-200px, -20vw, -400px)'
            }}
          >
            {/* Content Container */}
            <div 
              className="flex flex-col lg:flex-row items-start lg:items-center relative"
              style={{ gap: 'clamp(60px, 17.3vw, 333px)' }}
            >
              {/* Left Content */}
              <div 
                className="flex flex-col flex-shrink-0"
                style={{ 
                  width: 'clamp(320px, 36.9vw, 708px)',
                  gap: 'clamp(48px, 4.8vw, 92px)'
                }}
              >
                {/* Title */}
                <h2 
                  className="text-white font-normal"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(28px, 2.5vw, 48px)',
                    lineHeight: '1.21'
                  }}
                >
                  FREQUENTLY ASKED<br />QUESTIONS
                </h2>

                {/* FAQ Items Container */}
                <div 
                  className="flex flex-col w-full"
                  style={{ gap: 'clamp(16px, 1.67vw, 32px)' }}
                >
                  <FAQ />

                  {/* Bottom Row - Events text and View More button */}
                  <div 
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
                    style={{ gap: 'clamp(16px, 1.2vw, 23px)' }}
                  >
                    <p 
                      className="text-white font-normal"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(16px, 1.25vw, 24px)',
                        lineHeight: '1.21'
                      }}
                    >
                      For upcoming events, teams, and further details
                    </p>
                    <button 
                      className="flex-shrink-0 flex items-center justify-center text-white font-normal hover:bg-[#252525] transition-colors"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(16px, 1.25vw, 24px)',
                        lineHeight: '1.21',
                        backgroundColor: '#171717',
                        borderRadius: 'clamp(12px, 1.3vw, 25px)',
                        padding: 'clamp(5px, 0.52vw, 10px) clamp(10px, 1.04vw, 20px)',
                        width: 'clamp(94px, 9.79vw, 188px)',
                        height: 'clamp(36px, 3.7vw, 71px)'
                      }}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - Large Gradient Logo - extends beyond margin */}
              <div 
                className="hidden lg:block absolute top-1/2 -translate-y-1/2"
                style={{ 
                  width: 'clamp(400px, 54.75vw, 1051px)',
                  height: 'clamp(320px, 43.73vw, 840px)',
                  right: 'clamp(-250px, -25vw, -480px)'
                }}
              >
                <Image
                  src="/images/ae-logo-gradient.png"
                  alt="Applied Engineering"
                  width={1051}
                  height={840}
                  className="w-full h-full object-contain object-right"
                  sizes="(max-width: 1024px) 0vw, 55vw"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Footer Section - Outside content container for tighter spacing */}
        <footer 
          className="w-full relative flex flex-col"
          style={{ 
            paddingTop: '0',
            marginTop: 'clamp(40px, 4vw, 80px)'
          }}
        >
          {/* Top Border Line */}
          <div 
            className="w-full"
            style={{
              height: '1px',
              backgroundColor: '#575757',
              marginBottom: 'clamp(23px, 2.34vw, 45px)'
            }}
          />

            {/* Content */}
            <div 
              className="flex flex-col lg:flex-row justify-between items-start lg:items-start w-full"
              style={{ 
                gap: 'clamp(40px, 4vw, 80px)'
              }}
            >
              {/* Left Side - GET IN TOUCH */}
              <div 
                className="flex flex-col"
                style={{ gap: 'clamp(19px, 1.93vw, 37px)' }}
              >
                <h3 
                  className="text-white font-normal"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(20px, 1.67vw, 32px)',
                    lineHeight: '1.21'
                  }}
                >
                  GET IN TOUCH
                </h3>

                {/* Social Links */}
                <div 
                  className="flex flex-col"
                  style={{ gap: 'clamp(8px, 0.8vw, 16px)' }}
                >
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/appliedengineering.sjsu?igsh=NTc4MTIwNjQ2YQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:opacity-80 transition-opacity"
                    style={{ gap: 'clamp(6px, 0.63vw, 12px)' }}
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
                    className="flex items-center text-white hover:opacity-80 transition-opacity"
                    style={{ gap: 'clamp(6px, 0.63vw, 12px)' }}
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
                      style={{ 
                        width: 'clamp(10px, 0.73vw, 14px)',
                        height: 'clamp(10px, 0.76vw, 15px)'
                      }}
                    >
                      <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:appliedengineeringsjsu@gmail.com"
                    className="flex items-center text-white hover:opacity-80 transition-opacity"
                    style={{ gap: 'clamp(4px, 0.42vw, 8px)' }}
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

              {/* Right Side - Buttons */}
              <div 
                className="flex items-center"
                style={{ gap: 'clamp(20px, 2.03vw, 39px)' }}
              >
                <Link 
                  href="/contact"
                  className="flex items-center justify-center text-white font-normal hover:bg-white/5 transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    borderRadius: 'clamp(12px, 1.3vw, 25px)',
                    border: '2px solid #444444',
                    padding: 'clamp(5px, 0.52vw, 10px) clamp(10px, 1.04vw, 20px)',
                    width: 'clamp(120px, 9.79vw, 188px)',
                    height: 'clamp(45px, 3.7vw, 71px)'
                  }}
                >
                  Contact Us
                </Link>
                <a 
                  href="https://forms.gle/b9obbC32VLeFdbfX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white font-normal hover:bg-[#252525] transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    backgroundColor: '#171717',
                    borderRadius: 'clamp(12px, 1.3vw, 25px)',
                    padding: 'clamp(5px, 0.52vw, 10px) clamp(10px, 1.04vw, 20px)',
                    width: 'clamp(120px, 9.79vw, 188px)',
                    height: 'clamp(45px, 3.7vw, 71px)'
                  }}
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* Large APPLIED ENGINEERING Text at Bottom */}
            <div 
              className="w-full pointer-events-none select-none overflow-visible"
              style={{ 
                marginTop: 'clamp(50px, 6vw, 120px)',
                paddingBottom: '0'
              }}
            >
              <h2 
                className="font-bold whitespace-nowrap"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(48px, 8.85vw, 170px)',
                  lineHeight: '1',
                  color: '#181818',
                  letterSpacing: '-0.02em'
                }}
              >
                APPLIED ENGINEERING
              </h2>
            </div>
          </footer>
        </div>
      </main>
  )
}

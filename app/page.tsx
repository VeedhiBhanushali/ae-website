import Image from 'next/image'
import Link from 'next/link'
import FAQ from './components/FAQ'
import StatsCard from './components/StatsCard'
import GetInvolvedLinks from './components/GetInvolvedLinks'
import ProjectCarousel from './components/ProjectCarousel'
import HeroSection from './components/HeroSection'
import { FadeInUp } from './components/AnimatedSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <HeroSection />

      {/* ═══════════════════════════════════════════════
          REST OF PAGE — original sections restored
          ═══════════════════════════════════════════════ */}
      <div className="px-4 sm:px-6 md:px-[38px] pb-4">
        <div
          className="flex flex-col max-w-[1844px] mx-auto overflow-visible"
          style={{
            paddingTop: 'clamp(40px, 10.8vw, 208px)',
            paddingBottom: '0',
            gap: 'clamp(60px, 16vw, 307px)',
          }}
        >
          {/* For Industry Section */}
          <FadeInUp amount={0.12}>
          <section
            className="w-full flex flex-col lg:flex-row justify-between items-start"
            style={{ gap: 'clamp(40px, 7.5vw, 144px)' }}
          >
            <div
              className="flex flex-col flex-1 max-w-[700px]"
              style={{
                gap: 'clamp(32px, 3.28vw, 63px)',
                paddingRight: 'clamp(0px, 2.9vw, 56px)',
              }}
            >
              <h2
                className="text-white font-normal"
                style={{ fontSize: 'clamp(24px, 2.08vw, 40px)', lineHeight: '1.21' }}
              >
                FOR INDUSTRY
              </h2>
              <div className="flex flex-col" style={{ gap: 'clamp(16px, 1.5vw, 29px)' }}>
                <p style={{ fontSize: 'clamp(16px, 1.25vw, 24px)', lineHeight: '1.21', color: '#C5C5C5' }}>
                  Industry partners work with Applied Engineering to turn problems/ideas into shipped solutions.
                </p>
                <p style={{ fontSize: 'clamp(16px, 1.25vw, 24px)', lineHeight: '1.21', color: '#C5C5C5' }}>
                  We scope fast, build with rigor, and deliver.
                </p>
              </div>
              <Link
                href="/contact"
                className="rounded-[50px] text-white font-normal hover:bg-[#252525] transition-colors self-start"
                style={{
                  fontSize: 'clamp(16px, 1.25vw, 24px)',
                  lineHeight: '1.21',
                  backgroundColor: '#171717',
                  padding: 'clamp(16px, 1.15vw, 22px) clamp(28px, 2.14vw, 41px)',
                }}
              >
                Get In Touch
              </Link>
            </div>

            <a
              href="https://discoverai-ae.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 relative overflow-visible block transition-transform duration-300 hover:-translate-y-2 w-full lg:w-auto"
            >
              <div
                className="absolute pointer-events-none hidden lg:block"
                style={{
                  left: '50%',
                  bottom: '-60%',
                  transform: 'translateX(-50%)',
                  width: 'clamp(900px, 90vw, 1800px)',
                  height: 'clamp(400px, 40vw, 800px)',
                  background: 'radial-gradient(ellipse 60% 60% at center, rgba(201, 186, 255, 0.22) 0%, rgba(201, 186, 255, 0.15) 10%, rgba(201, 186, 255, 0.1) 20%, rgba(201, 186, 255, 0.06) 30%, rgba(201, 186, 255, 0.035) 40%, rgba(201, 186, 255, 0.02) 50%, rgba(201, 186, 255, 0.01) 60%, rgba(201, 186, 255, 0.005) 70%, rgba(201, 186, 255, 0) 85%)',
                  zIndex: 0,
                }}
              />
              <div className="relative z-10">
                <Image
                  src="/images/discoverai-card-new.png"
                  alt="Discover AI - Learn what we can do for you with our custom AI tool"
                  width={667}
                  height={317}
                  style={{ width: 'clamp(260px, 34.7vw, 667px)', height: 'auto' }}
                />
              </div>
            </a>
          </section>
          </FadeInUp>

          {/* For Students Section */}
          <FadeInUp amount={0.12} delay={0.06}>
          <section
            className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center"
            style={{ gap: 'clamp(40px, 10.5vw, 201px)' }}
          >
            <div
              className="flex flex-col flex-1 max-w-[700px]"
              style={{
                gap: 'clamp(32px, 3.39vw, 65px)',
                paddingRight: 'clamp(0px, 3.9vw, 75px)',
              }}
            >
              <h2
                className="text-white font-normal"
                style={{ fontSize: 'clamp(24px, 2.08vw, 40px)', lineHeight: '1.21' }}
              >
                FOR STUDENTS
              </h2>
              <div className="flex flex-col" style={{ gap: 'clamp(16px, 1.5vw, 29px)' }}>
                <p style={{ fontSize: 'clamp(16px, 1.25vw, 24px)', lineHeight: '1.21', color: '#C5C5C5' }}>
                  Turn your skills into proof.
                </p>
                <p style={{ fontSize: 'clamp(16px, 1.25vw, 24px)', lineHeight: '1.21', color: '#C5C5C5' }}>
                  Join teams that prototype, test, and deliver for industry partners. Earn credibility with a portfolio that gets hired.
                </p>
              </div>
              <div className="flex items-center flex-wrap" style={{ gap: 'clamp(20px, 2.6vw, 50px)' }}>
                <a
                  href="https://forms.gle/b9obbC32VLeFdbfX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[50px] text-white font-normal hover:bg-[#252525] transition-colors"
                  style={{
                    fontSize: 'clamp(16px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    backgroundColor: '#171717',
                    padding: 'clamp(16px, 1.2vw, 23px) clamp(24px, 1.6vw, 31px)',
                  }}
                >
                  Apply Now
                </a>
                <a
                  href="https://docs.google.com/forms/d/1N1sm7BgaOuHRdhBfPRv7CyesLsDrFbQCL9N95AfJ-4c/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-normal underline hover:opacity-80 transition-opacity"
                  style={{ fontSize: 'clamp(16px, 1.25vw, 24px)', lineHeight: '1.21' }}
                >
                  Become a member
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 relative overflow-visible w-full lg:w-auto">
              <div
                className="absolute pointer-events-none hidden lg:block"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(850px, 85vw, 1700px)',
                  height: 'clamp(400px, 40vw, 800px)',
                  background: 'radial-gradient(ellipse 60% 60% at center, rgba(223, 186, 255, 0.22) 0%, rgba(223, 186, 255, 0.15) 10%, rgba(223, 186, 255, 0.1) 20%, rgba(223, 186, 255, 0.06) 30%, rgba(223, 186, 255, 0.035) 40%, rgba(223, 186, 255, 0.02) 50%, rgba(223, 186, 255, 0.01) 60%, rgba(223, 186, 255, 0.005) 70%, rgba(223, 186, 255, 0) 85%)',
                  zIndex: 0,
                }}
              />
              <div className="relative z-10">
                <StatsCard />
              </div>
            </div>
          </section>
          </FadeInUp>

          {/* Projects, Get Involved, FAQ — tighter spacing between these three */}
          <div
            className="flex flex-col w-full"
            style={{ gap: 'clamp(28px, 5vw, 96px)' }}
          >
          {/* Projects Section */}
          <FadeInUp amount={0.1}>
          <section
            id="projects"
            className="w-full relative"
            style={{ minHeight: 'clamp(500px, 67vw, 1290px)' }}
          >
            <div
              className="absolute pointer-events-none left-1/2"
              style={{
                top: 'clamp(20px, 2.2vw, 42px)',
                transform: 'translateX(calc(-50% + clamp(20px, 2vw, 40px)))',
                width: '100vw',
                height: 'clamp(258px, 26.88vw, 516px)',
                overflow: 'visible',
              }}
            >
              <svg
                viewBox="0 0 1920 516"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%', overflow: 'visible' }}
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M3249.85 392.053C3249.85 392.053 2195.5 510.544 1988.9 500.849C1782.29 491.153 1409.06 476.537 1013.19 260.52C564.055 15.4325 71.9955 5.14534 -117.023 18.0419C-306.042 30.9384 -1837.74 283.129 -1837.74 283.129"
                  stroke="url(#paint0_linear_42_699)"
                  strokeWidth="29"
                />
                <defs>
                  <linearGradient id="paint0_linear_42_699" x1="513.071" y1="-31.8797" x2="513.071" y2="515.66" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C4AD9" />
                    <stop offset="1" stopColor="#0E031C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div
              className="relative z-10 flex flex-col"
              style={{ paddingTop: 'clamp(40px, 8vw, 155px)', gap: 'clamp(32px, 8.9vw, 171px)' }}
            >
              <div className="flex items-center flex-wrap" style={{ gap: 'clamp(24px, 3.44vw, 66px)' }}>
                <h2
                  className="text-white font-normal"
                  style={{ fontSize: 'clamp(28px, 2.5vw, 48px)', lineHeight: '1.21' }}
                >
                  PROJECTS
                </h2>
                <span style={{ fontSize: 'clamp(28px, 2.5vw, 48px)', lineHeight: '1.21', color: '#2F2F2F' }}>
                  FALL 25
                </span>
              </div>
              <ProjectCarousel />
            </div>
          </section>
          </FadeInUp>

          {/* Get Involved Section */}
          <FadeInUp amount={0.12} delay={0.05}>
          <section id="get-involved" className="w-full">
            <div className="relative flex flex-col lg:block" style={{ minHeight: 'clamp(0px, 52.03vw, 999px)' }}>
              <div
                className="relative lg:absolute flex flex-col"
                style={{ left: '0', top: '4.97%', zIndex: 2 }}
              >
                <h2
                  className="text-white font-normal"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 48px)', lineHeight: '1.21' }}
                >
                  GET INVOLVED
                </h2>
                <GetInvolvedLinks />
                <a
                  href="https://forms.gle/b9obbC32VLeFdbfX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:bg-[#252525] transition-colors"
                  style={{
                    marginTop: 'clamp(22px, 2.3vw, 44px)',
                    width: 'clamp(120px, 10.46vw, 201px)',
                    height: 'clamp(40px, 3.42vw, 66px)',
                    borderRadius: '69px',
                    backgroundColor: '#181818',
                    fontSize: 'clamp(14px, 1.25vw, 24px)',
                    lineHeight: '1.21',
                    color: '#FFFFFF',
                  }}
                >
                  Apply Now
                </a>
              </div>

              <div
                className="hidden lg:block absolute"
                style={{ left: '26.27%', top: '-0.71%', width: '70.77%', height: '92.57%', zIndex: 1 }}
              >
                <Image
                  src="/images/gi-new.png"
                  alt="Applied Engineering team — collaborating, presenting, and showcasing at events"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'right top' }}
                  sizes="71vw"
                  priority
                />
              </div>

              <div className="lg:hidden relative w-full mt-8" style={{ aspectRatio: '1305 / 925' }}>
                <Image
                  src="/images/gi-new.png"
                  alt="Applied Engineering team — collaborating, presenting, and showcasing at events"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'center top' }}
                  sizes="100vw"
                />
              </div>
            </div>
          </section>
          </FadeInUp>

          {/* FAQ Section */}
          <FadeInUp amount={0.15}>
          <section
            id="faq"
            className="w-full relative overflow-visible"
            style={{ paddingTop: 'clamp(30px, 3vw, 60px)', paddingBottom: '0', marginTop: '0px' }}
          >
            <div
              className="flex flex-col lg:flex-row items-start lg:items-center relative"
              style={{ gap: 'clamp(40px, 17.3vw, 333px)' }}
            >
              <div
                className="flex flex-col flex-shrink-0 w-full lg:w-auto"
                style={{ maxWidth: '708px', gap: 'clamp(32px, 4.8vw, 92px)' }}
              >
                <h2
                  className="text-white font-normal"
                  style={{ fontSize: 'clamp(28px, 2.5vw, 48px)', lineHeight: '1.21' }}
                >
                  FREQUENTLY ASKED<br />QUESTIONS
                </h2>
                <div className="flex flex-col w-full" style={{ gap: 'clamp(16px, 1.67vw, 32px)' }}>
                  <FAQ />
                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between"
                    style={{ gap: 'clamp(16px, 1.2vw, 23px)' }}
                  >
                    <p
                      className="text-white font-normal"
                      style={{ fontSize: 'clamp(16px, 1.25vw, 24px)', lineHeight: '1.21' }}
                    >
                      For upcoming events, teams, and further details
                    </p>
                    <button
                      className="flex-shrink-0 flex items-center justify-center text-white font-normal hover:bg-[#252525] transition-colors"
                      style={{
                        fontSize: 'clamp(16px, 1.25vw, 24px)',
                        lineHeight: '1.21',
                        backgroundColor: '#171717',
                        borderRadius: 'clamp(12px, 1.3vw, 25px)',
                        padding: 'clamp(5px, 0.52vw, 10px) clamp(10px, 1.04vw, 20px)',
                        width: 'clamp(94px, 9.79vw, 188px)',
                        height: 'clamp(36px, 3.7vw, 71px)',
                      }}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="hidden lg:block absolute top-1/2 -translate-y-1/2"
                style={{
                  width: 'clamp(400px, 54.75vw, 1051px)',
                  height: 'clamp(320px, 43.73vw, 840px)',
                  right: 'clamp(-250px, -25vw, -480px)',
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
          </FadeInUp>
          </div>
        </div>

        {/* Footer */}
        <FadeInUp amount={0.2} delay={0.08}>
        <footer
          className="w-full relative flex flex-col max-w-[1844px] mx-auto"
          style={{ paddingTop: '0', marginTop: 'clamp(40px, 4vw, 80px)' }}
        >
          <div className="w-full" style={{ height: '1px', backgroundColor: '#575757', marginBottom: 'clamp(23px, 2.34vw, 45px)' }} />

          <div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-start w-full"
            style={{ gap: 'clamp(40px, 4vw, 80px)' }}
          >
            <div className="flex flex-col" style={{ gap: 'clamp(19px, 1.93vw, 37px)' }}>
              <h3
                className="text-white font-normal"
                style={{ fontSize: 'clamp(20px, 1.67vw, 32px)', lineHeight: '1.21' }}
              >
                GET IN TOUCH
              </h3>
              <div className="flex flex-col" style={{ gap: 'clamp(8px, 0.8vw, 16px)' }}>
                <a
                  href="https://www.instagram.com/appliedengineering.sjsu?igsh=NTc4MTIwNjQ2YQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:opacity-80 transition-opacity"
                  style={{ gap: 'clamp(6px, 0.63vw, 12px)' }}
                >
                  <span style={{ fontSize: 'clamp(20px, 1.67vw, 32px)', lineHeight: '1.21' }}>Instagram</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" style={{ width: 'clamp(10px, 0.73vw, 14px)', height: 'clamp(10px, 0.76vw, 15px)' }}>
                    <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/ae-sjsu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:opacity-80 transition-opacity"
                  style={{ gap: 'clamp(6px, 0.63vw, 12px)' }}
                >
                  <span style={{ fontSize: 'clamp(20px, 1.67vw, 32px)', lineHeight: '1.21' }}>LinkedIn</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" style={{ width: 'clamp(10px, 0.73vw, 14px)', height: 'clamp(10px, 0.76vw, 15px)' }}>
                    <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="mailto:appliedengineeringsjsu@gmail.com"
                  className="flex items-center text-white hover:opacity-80 transition-opacity"
                  style={{ gap: 'clamp(4px, 0.42vw, 8px)' }}
                >
                  <span style={{ fontSize: 'clamp(20px, 1.67vw, 32px)', lineHeight: '1.21' }}>Email</span>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" style={{ width: 'clamp(10px, 0.73vw, 14px)', height: 'clamp(10px, 0.76vw, 15px)' }}>
                    <path d="M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center flex-wrap" style={{ gap: 'clamp(12px, 2.03vw, 39px)' }}>
              <Link
                href="/contact"
                className="flex items-center justify-center text-white font-normal hover:bg-white/5 transition-colors"
                style={{
                  fontSize: 'clamp(16px, 1.25vw, 24px)',
                  lineHeight: '1.21',
                  borderRadius: 'clamp(12px, 1.3vw, 25px)',
                  border: '2px solid #444444',
                  padding: 'clamp(5px, 0.52vw, 10px) clamp(10px, 1.04vw, 20px)',
                  width: 'clamp(120px, 9.79vw, 188px)',
                  height: 'clamp(45px, 3.7vw, 71px)',
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
                  fontSize: 'clamp(16px, 1.25vw, 24px)',
                  lineHeight: '1.21',
                  backgroundColor: '#171717',
                  borderRadius: 'clamp(12px, 1.3vw, 25px)',
                  padding: 'clamp(5px, 0.52vw, 10px) clamp(10px, 1.04vw, 20px)',
                  width: 'clamp(120px, 9.79vw, 188px)',
                  height: 'clamp(45px, 3.7vw, 71px)',
                }}
              >
                Apply Now
              </a>
            </div>
          </div>

          <div
            className="w-full pointer-events-none select-none overflow-visible"
            style={{ marginTop: 'clamp(50px, 6vw, 120px)', paddingBottom: '0' }}
          >
            <h2
              className="font-bold whitespace-nowrap overflow-hidden"
              style={{ fontSize: 'clamp(28px, 8.85vw, 170px)', lineHeight: '1', color: '#181818', letterSpacing: '-0.02em' }}
            >
              APPLIED ENGINEERING
            </h2>
          </div>
        </footer>
        </FadeInUp>
      </div>
    </main>
  )
}

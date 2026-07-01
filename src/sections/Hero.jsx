import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaYoutube, FaLinkedin, FaMedium } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiHashnode } from 'react-icons/si';
import { fadeUp, slideLeft, staggerContainer } from '../utils/animations';
import { personalInfo, heroImage, resumeUrl } from '../data/portfolioData';

// Social links — edit hrefs here if anything changes
const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Dushani-Ekanayake', label: 'GitHub' },
  { icon: HiOutlineMail, href: 'mailto:kaviiekanayake2@gmail.com', label: 'Email' },
  { icon: FaYoutube, href: 'https://youtube.com/@2codemint?si=p0fghMXWZts-G392', label: 'YouTube' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/dushani-ekanayake/', label: 'LinkedIn' },
  { icon: FaMedium, href: 'https://dushaniekanayake.medium.com/', label: 'Medium' },
  { icon: SiHashnode, href: 'https://hashnode.com/@dushaniekanayake', label: 'Hashnode' },
];

function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3"
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group w-11 h-11 flex items-center justify-center border-2 border-accent text-black dark:text-accent bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm hover:bg-accent hover:text-black transition-colors duration-300"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </motion.div>
  );
}
function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
      <ellipse cx="200" cy="380" rx="150" ry="40" fill="#FFD600" opacity="0.25" />
      <circle cx="50"  cy="80"  r="8"  fill="#FFD600" opacity="0.8" />
      <circle cx="350" cy="60"  r="5"  fill="#FFD600" opacity="0.6" />
      <circle cx="370" cy="200" r="10" fill="#FFD600" opacity="0.4" />
      <circle cx="30"  cy="300" r="6"  fill="#000"    opacity="0.15" />
      <circle cx="200" cy="100" r="70" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="6 4"/>
      <path d="M130 170 Q120 280 110 380 Q200 420 290 380 Q280 280 270 170" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round"/>
      <path d="M145 220 Q90 250 70 290" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M255 220 Q310 250 330 290" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="180" cy="95" r="5" fill="currentColor" opacity="0.7"/>
      <circle cx="220" cy="95" r="5" fill="currentColor" opacity="0.7"/>
      <path d="M183 120 Q200 133 217 120" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M135 75 Q150 30 200 28 Q250 30 265 75" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M135 75 Q125 55 140 40" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M265 75 Q275 55 260 40" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="60" y="150" fontSize="20" fill="#FFD600">✦</text>
      <text x="320" y="130" fontSize="14" fill="#FFD600">✦</text>
      <text x="90" y="350" fontSize="12" fill="#FFD600">✦</text>
    </svg>
  );
}

export default function Hero() {
  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const openResume = () => window.open(resumeUrl, '_blank', 'noopener,noreferrer');

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-zinc-950">
      {/* Fixed social icon bar — right edge of viewport, stays visible while scrolling */}
      <SocialSidebar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-4rem)] py-16">

          {/* LEFT — Hero Image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md">
              {/* Accent decorations */}
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-accent opacity-20 dark:opacity-30 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent -z-10" />

              {/* ============================================================
                  HERO IMAGE — left side of the landing page
                  Step 1: Add your image to src/assets/images/hero.jpg
                  Step 2: In portfolioData.js update:
                          export const heroImage = "/src/assets/images/hero.jpg";
                  Use a fun, creative, or casual photo here.
                  When heroImage is null the SVG illustration shows instead.
                  ============================================================ */}
              {heroImage ? (
                <motion.img
                  src={heroImage}
                  alt="Dushani Ekanayake"
                  className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
              ) : (
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-black dark:text-white"
                >
                  <HeroIllustration />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            {/* Tag */}
            <motion.div
              variants={fadeUp}
              className="inline-block bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6"
            >
              Portfolio 2026
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-black uppercase leading-none text-4xl sm:text-6xl lg:text-5xl xl:text-6xl mb-4"
            >
              HELLO
              <br />
              <span className="text-accent">PEOPLE!</span>
              <br />
              I'M {personalInfo.nameShort}
            </motion.h1>

            {/* Divider */}
            <motion.div variants={fadeUp} className="w-16 h-1 bg-black dark:bg-white mb-6" />

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-300 mb-4"
            >
              {personalInfo.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed mb-8"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button onClick={scrollToProjects} className="btn-primary">
                Explore Projects
              </button>
              <button onClick={openResume} className="btn-outline">
                View Resume
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-400">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiArrowDown className="w-5 h-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
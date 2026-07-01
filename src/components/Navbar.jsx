import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { label: 'Home',            id: 'hero' },
  { label: 'About',           id: 'about' },
  { label: 'Education',       id: 'education' },
  { label: 'Certifications',  id: 'certifications' },
  { label: 'Volunteer',       id: 'volunteer' },
  { label: 'Projects',        id: 'projects' },
  { label: 'Skills',          id: 'skills' },
  { label: 'Activities',      id: 'technical-writing' },
  { label: 'Contact',         id: 'contact' },
];

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled]   = useState(false);
  const [hidden,   setHidden]     = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [lastY,    setLastY]       = useState(0);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 shadow-sm border-b border-zinc-100 dark:border-zinc-800' : 'bg-transparent'}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Name / Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-display font-black text-base tracking-widest uppercase hover:text-accent transition-colors duration-200"
          >
            DUSHANI EKANAYAKE
          </button>

          {/* Desktop Links */}
          <ul className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200
                    ${active === link.id
                      ? 'text-accent border-b-2 border-accent pb-0.5'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              {isDark ? <HiSun className="w-5 h-5 text-accent" /> : <HiMoon className="w-5 h-5" />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="xl:hidden p-2"
            >
              {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 flex flex-col pt-20 px-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.id)}
                className="text-left text-3xl font-black font-display uppercase py-3 border-b border-zinc-100 dark:border-zinc-800
                           text-zinc-800 dark:text-zinc-100 hover:text-accent dark:hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

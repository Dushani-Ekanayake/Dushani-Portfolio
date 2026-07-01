import { motion } from 'framer-motion';
import { HiArrowUp, HiMail } from 'react-icons/hi';
import { SiGithub, SiHashnode } from 'react-icons/si';
import { FaLinkedinIn, FaYoutube, FaMedium } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <div>
          <div className="font-display font-black text-lg tracking-widest uppercase mb-1">
            {personalInfo.name}
          </div>
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: <SiGithub      className="w-5 h-5" />, href: personalInfo.github,           label: 'GitHub'   },
            { icon: <FaLinkedinIn  className="w-5 h-5" />, href: personalInfo.linkedin,          label: 'LinkedIn' },
            { icon: <HiMail        className="w-5 h-5" />, href: `mailto:${personalInfo.email}`, label: 'Email'    },
            { icon: <FaYoutube     className="w-5 h-5" />, href: personalInfo.youtube,           label: 'YouTube'  },
            { icon: <FaMedium      className="w-5 h-5" />, href: personalInfo.medium,            label: 'Medium'   },
            { icon: <SiHashnode    className="w-5 h-5" />, href: personalInfo.hashnode,          label: 'Hashnode' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-zinc-400 hover:text-accent transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-accent text-black flex items-center justify-center"
          aria-label="Back to top"
        >
          <HiArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../utils/animations';
import { projects } from '../data/portfolioData';

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(255,214,0,0.12)' }}
      className="card group overflow-hidden flex flex-col"
    >
      {/* ============================================================
          PROJECT IMAGE
          Update project.image in portfolioData.js projects array
          Place screenshot in: src/assets/projects/
          ============================================================ */}
      <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400">
            <HiCode className="w-12 h-12 mb-2 opacity-40" />
            {/* ✏️ EDIT: Add project.image in portfolioData.js */}
            <p className="text-xs">Add project screenshot in portfolioData.js</p>
          </div>
        )}
        {/* Yellow corner tag for featured */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent text-black text-xs font-bold px-2 py-0.5 uppercase tracking-wider">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-black font-display uppercase text-lg mb-2">{project.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* ============================================================
              GITHUB LINK — Update project.github in portfolioData.js
              ============================================================ */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center text-sm py-2"
            >
              <SiGithub className="w-4 h-4" />
              Source Code
            </a>
          )}
          {/* ============================================================
              LIVE DEMO LINK — Update project.live in portfolioData.js
              ============================================================ */}
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center text-sm py-2"
            >
              <HiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

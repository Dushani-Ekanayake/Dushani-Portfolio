import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiExternalLink,
  HiBadgeCheck,
  HiX,
} from 'react-icons/hi';

import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../utils/animations';

import { certifications } from '../data/portfolioData';

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-zinc-900 max-w-lg w-full p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:text-accent transition-colors"
        >
          <HiX className="w-6 h-6" />
        </button>

        {/* ============================================================
            CERTIFICATE IMAGE
            Update cert.image in portfolioData.js
        ============================================================ */}

        <div className="w-full aspect-video bg-zinc-100 dark:bg-zinc-800 mb-6 flex items-center justify-center">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-center text-zinc-400">
              <HiBadgeCheck className="w-16 h-16 mx-auto mb-2 text-accent" />
              <p className="text-sm">
                Add certificate image in portfolioData.js
              </p>
            </div>
          )}
        </div>

        <h3 className="text-xl font-black font-display uppercase mb-1">
          {cert.title}
        </h3>

        <p className="text-zinc-500 dark:text-zinc-400 mb-1">
          {cert.issuer}
        </p>

        <p className="text-sm text-zinc-400 mb-3">
          {cert.date}
        </p>

        {cert.credentialId && (
          <p className="text-sm font-mono text-zinc-400 mb-4">
            ID: {cert.credentialId}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {cert.link && cert.link !== '#' ? (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            <HiExternalLink className="w-4 h-4" />
            Verify Certificate
          </a>
        ) : (
          <p className="text-xs text-zinc-400 text-center">
            Add verification link in portfolioData.js
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certifications"
      className="py-24 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
            Credentials
          </p>

          <h2 className="section-title">
            Certifications
          </h2>

          <div className="accent-line mt-4" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={scaleIn}
              whileHover={{
                y: -4,
                boxShadow: '0 12px 40px rgba(255,214,0,0.15)',
              }}
              className="card p-6 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelected(cert)}
            >
              {/* Accent Corner */}

              <div className="absolute top-0 right-0 w-12 h-12 bg-accent flex items-center justify-center">
                <HiBadgeCheck className="w-6 h-6 text-black" />
              </div>

              {/* ============================================================
                  CERT THUMBNAIL
                  Update cert.image in portfolioData.js
              ============================================================ */}

              <div className="w-full h-32 bg-zinc-100 dark:bg-zinc-800 mb-4 flex items-center justify-center overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-xs text-zinc-400 text-center px-4">
                    Certificate thumbnail
                  </div>
                )}
              </div>

              <h3 className="font-black font-display uppercase text-base leading-tight mb-1 pr-8">
                {cert.title}
              </h3>

              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">
                {cert.issuer}
              </p>

              <p className="text-xs text-zinc-400 mb-4">
                {cert.date}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="text-sm font-bold text-accent flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                View Certificate
                <HiExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <CertModal
            cert={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
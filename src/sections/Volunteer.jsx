import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiX, HiCalendar, HiOfficeBuilding } from 'react-icons/hi';
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../utils/animations';
import { volunteerWork } from '../data/portfolioData';

function VolunteerModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-zinc-900 max-w-2xl w-full overflow-hidden"
      >
        {/* ============================================================
            VOLUNTEER EVENT IMAGE in Modal
            Update item.image in portfolioData.js volunteerWork array
            ============================================================ */}
        <div className="w-full h-56 bg-zinc-200 dark:bg-zinc-800 relative">
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-400 text-sm">
              {/* ✏️ EDIT: Add event photo in portfolioData.js */}
              Add event photo in portfolioData.js
            </div>
          )}
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-black text-white flex items-center justify-center hover:bg-accent hover:text-black transition-colors">
            <HiX className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-black font-display uppercase">{item.title}</h3>
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mt-1">
                <HiOfficeBuilding className="w-4 h-4" />
                <span className="text-sm">{item.organization}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <HiCalendar className="w-4 h-4" />
              {item.date}
            </div>
          </div>

          {item.role && (
            <span className="inline-block bg-accent text-black text-xs font-bold px-2 py-1 uppercase tracking-wider mb-4">
              {item.role}
            </span>
          )}

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">{item.description}</p>

          {/* ============================================================
              VIEW CERTIFICATE BUTTON
              Update item.certificate in portfolioData.js volunteerWork
              Link to a PDF, image, or external URL
              ============================================================ */}
          {item.certificate && item.certificate !== '#' ? (
            <a
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <HiExternalLink className="w-4 h-4" />
              View Certificate
            </a>
          ) : (
            <p className="text-xs text-zinc-400">
              {/* ✏️ EDIT: Add certificate link in portfolioData.js volunteerWork */}
              Add certificate link in portfolioData.js
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Volunteer() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="volunteer" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Giving Back</p>
          <h2 className="section-title">Volunteer Work</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {volunteerWork.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => setSelected(item)}
            >
              {/* ============================================================
                  EVENT IMAGE on card
                  Update item.image in portfolioData.js volunteerWork
                  ============================================================ */}
              <div className="w-full h-44 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-400">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 48 48">
                        <rect x="4" y="4" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M4 36 L14 24 L22 32 L30 22 L44 36" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                      {/* ✏️ EDIT: Add event image in portfolioData.js */}
                      <p className="text-xs">Add event photo</p>
                    </div>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2">
                  <HiCalendar className="w-3 h-3" />
                  {item.date}
                </div>
                <h3 className="font-black font-display uppercase text-base leading-tight mb-1">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">{item.organization}</p>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-2 mb-4">{item.description}</p>

                <span className="text-sm font-bold text-accent group-hover:underline">
                  View Details & Certificate →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <VolunteerModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

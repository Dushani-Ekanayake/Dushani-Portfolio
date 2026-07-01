import { motion } from 'framer-motion';
import { HiExternalLink, HiCalendar } from 'react-icons/hi';
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from '../utils/animations';
import {
  technicalWriting,
  mediumProfile,
} from '../data/portfolioData';

export default function TechnicalWriting() {
  // Only show featured articles here (max 3)
  const featuredArticles = technicalWriting
    .filter((a) => a.featured)
    .slice(0, 3);

  return (
    <section id="technical-writing" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
            Beyond the Code
          </p>

          <h2 className="section-title">Technical Writing</h2>

          <div className="accent-line mt-4" />
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="card group overflow-hidden"
            >
              {/* Article Cover */}
              <div className="w-full h-56 bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400">
                    <svg
                      className="w-12 h-12 mb-2 opacity-30"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="40"
                        height="32"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4 36 L14 24 L22 32 L30 22 L44 36"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>

                    <p className="text-xs">Add article cover</p>
                  </div>
                )}

                <span className="absolute top-3 right-3 bg-accent text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Featured
                </span>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-3 text-zinc-400 text-xs">
                  <div className="flex items-center gap-1">
                    <HiCalendar className="w-3 h-3" />
                    {article.date}
                  </div>

                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-black font-display uppercase text-base leading-tight mb-2">
                  {article.title}
                </h3>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold uppercase tracking-wide px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Article Button */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-accent text-black font-bold py-2.5 hover:opacity-90 transition-opacity"
                >
                  Read Article
                  <HiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center mt-12"
        >
          <a
            href={mediumProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent font-bold px-8 py-3 uppercase tracking-wider hover:bg-accent hover:text-black transition-colors"
          >
            View More on Medium
            <HiExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
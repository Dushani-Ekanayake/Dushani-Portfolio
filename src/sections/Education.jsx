import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import { fadeUp, slideLeft, viewportOnce } from '../utils/animations';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
            Academic Background
          </p>
          <h2 className="section-title">Education</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-12 h-12 bg-accent flex items-center justify-center">
                  <HiAcademicCap className="w-6 h-6 text-black" />
                </div>

                <div className="card p-6 hover:shadow-lg transition-shadow duration-300 group">
                  {/* Type tag */}
                  <span className="inline-block text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-2 py-1 mb-3">
                    {item.type}
                  </span>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-black font-display uppercase">
                        {item.degree}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                        {item.institution}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-bold text-accent">
                        {item.period}
                      </div>

                      {item.gpa && (
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                          Result:{' '}
                          <span className="font-bold text-black dark:text-white">
                            {item.gpa}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {item.coursework.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        Relevant Coursework
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map((c) => (
                          <span
                            key={c}
                            className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
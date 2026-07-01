import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations';
import { skills } from '../data/portfolioData';

function SkillBadge({ name, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.1, y: -3 }}
      className="group relative flex flex-col items-center"
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center
                   bg-white rounded-2xl shadow-sm
                   border border-zinc-200
                   group-hover:border-accent group-hover:shadow-lg
                   transition-all duration-300"
      >
        <img src={icon} alt={name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
      </div>
      <span
        className="absolute -bottom-6 text-[10px] font-bold uppercase tracking-wide
                   text-zinc-500 dark:text-zinc-400 opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 whitespace-nowrap"
      >
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="mb-20"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
            What I Know
          </p>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-black dark:text-white leading-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-accent mt-4" />
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="space-y-10"
        >
          {categories.map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12
                         p-6 sm:p-8 rounded-2xl
                         bg-zinc-50 dark:bg-zinc-900
                         border border-zinc-100 dark:border-zinc-800
                         transition-colors duration-300"
            >
              <div className="lg:w-40 flex-shrink-0 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <h3 className="font-display font-black uppercase tracking-wide text-lg text-black dark:text-white">
                  {category}
                </h3>
              </div>

              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-6 pb-6 lg:pb-0"
              >
                {items.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
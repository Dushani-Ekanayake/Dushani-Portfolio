import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../utils/animations';
import { personalInfo, stats, profileImage } from '../data/portfolioData';
export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="accent-line mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Photo */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative Borders */}
              <div className="absolute inset-0 border-2 border-accent rounded-2xl translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border border-accent/30 rounded-2xl -translate-x-2 -translate-y-2" />
              {/* Profile Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl shadow-yellow-300/50 light:shadow-light/40">
                <img
                  src={profileImage}
                  alt="Dushani"
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Gradient overlay for theme cohesion */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/40" />
              </div>
            </div>
          </motion.div>
          {/* RIGHT — Text + Stats */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-black font-display uppercase mb-4">
              Hi, I'm {personalInfo.nameShort} 👋
            </motion.h3>
            <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              {/* ✏️ EDIT: Update your bio below */}
              I'm Dushani Ekanayake, a Computer Science undergraduate passionate about software engineering and full-stack development. 
              I enjoy building practical, 
              user-friendly applications while continuously learning new technologies and improving my problem-solving skills
            </motion.p>
            <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              {/* ✏️ EDIT: Update your career goals below */}
             I have experience with technologies such as React, Node.js, Express.js, MongoDB, Java, C, and MySQL. 
             I work on both frontend and backend development, 
             focusing on building responsive interfaces and full-stack applications through hands-on projects.
            </motion.p>
            <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              {/* ✏️ EDIT: Update your passions below */}
              Beyond coding, I have gained leadership experience by organizing university tech events and working in teams. 
              I also write technical articles on Medium and Hashnode, 
              and my goal is to grow as a Software Engineering or Full-Stack Development Intern
            </motion.p>
            {/* Stats Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="card p-5 border-l-4 border-accent"
                >
                  <div className="text-3xl font-black font-display text-accent">{stat.number}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
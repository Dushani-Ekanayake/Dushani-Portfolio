import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { HiMail, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { SiGithub, SiHashnode } from 'react-icons/si';
import { FaLinkedinIn, FaYoutube, FaMedium } from 'react-icons/fa';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../utils/animations';
import { personalInfo } from '../data/portfolioData';

// ============================================================
// EMAILJS CONFIG — pulled from .env (see VITE_EMAILJS_* keys)
// ============================================================
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setStatus(null);

    // ============================================================
    // CONTACT FORM SUBMISSION — sends via EmailJS straight to your Gmail
    // Variable names here (from_name, from_email, subject, message) must
    // match the {{variables}} used in your EmailJS template.
    // ============================================================
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border-b-2 outline-none font-medium transition-colors duration-200
     ${errors[field] ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700 focus:border-accent'}`;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — Contact Info */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          >
            <motion.p variants={fadeUp} className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 text-lg">
              I'm always open to new opportunities, collaborations, and interesting conversations.
              Feel free to reach out!
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-5 mb-10">
              {[
                { icon: <HiMail className="w-5 h-5" />,          label: 'Email',    value: personalInfo.email },
                { icon: <HiLocationMarker className="w-5 h-5" />,label: 'Location', value: personalInfo.location },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center text-black flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {[
                  // ============================================================
                  // SOCIAL LINKS — Update URLs in portfolioData.js → personalInfo
                  // ============================================================
                  { icon: <SiGithub className="w-5 h-5" />,      href: personalInfo.github,               label: 'GitHub'   },
                  { icon: <FaLinkedinIn className="w-5 h-5" />,  href: personalInfo.linkedin,              label: 'LinkedIn' },
                  { icon: <HiMail className="w-5 h-5" />,        href: `mailto:${personalInfo.email}`,     label: 'Email'    },
                  { icon: <FaYoutube className="w-5 h-5" />,     href: personalInfo.youtube,               label: 'YouTube'  },
                  { icon: <FaMedium className="w-5 h-5" />,      href: personalInfo.medium,                label: 'Medium'   },
                  { icon: <SiHashnode className="w-5 h-5" />,    href: personalInfo.hashnode,              label: 'Hashnode' },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, backgroundColor: '#FFD600', color: '#000' }}
                    className="w-10 h-10 border-2 border-black dark:border-white text-black dark:text-white flex items-center justify-center transition-colors duration-200"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass('subject')}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Status messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-green-600 font-medium"
              >
                <HiCheckCircle className="w-5 h-5" />
                Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-red-600 font-medium"
              >
                <HiXCircle className="w-5 h-5" />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
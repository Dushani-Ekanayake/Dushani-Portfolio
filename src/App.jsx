import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Volunteer from './sections/Volunteer';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import TechnicalWriting from './sections/TechnicalWriting';
import Contact from './sections/Contact';

export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Volunteer />
        <Projects />
        <Skills />
        <TechnicalWriting />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

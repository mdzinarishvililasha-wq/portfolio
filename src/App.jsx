import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to highlight the active section in navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const headerOffset = 120;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - headerOffset;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Drawer & Overlay */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />

      {/* Main Content Canvas */}
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Goals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}


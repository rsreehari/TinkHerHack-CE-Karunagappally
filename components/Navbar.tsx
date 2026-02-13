
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'Projects', id: 'projects' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
          <img
            src="/tink-her-hack.png"
            alt="Tink-Her-Hack 4.0 Logo"
            className="w-10 h-10 object-contain md:group-hover:scale-110 transition-transform"
          />
          <span className="text-xl font-bold tracking-tight text-white">Tink-Her-Hack <span className="text-primary">4.0</span></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-bold uppercase tracking-wider transition-colors md:hover:text-primary relative group ${activeSection === link.id ? 'text-primary' : 'text-white/90 md:hover:text-white'}`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-primary md:hover:bg-primary/90 active:bg-primary/80 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,20,146,0.3)]"
          >
            Register Now
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-background-dark border-b border-white/10 overflow-hidden"
      >
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-lg font-bold uppercase tracking-wider text-left ${activeSection === link.id ? 'text-primary' : 'text-white/90'}`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary py-3 rounded-lg font-bold text-center block text-white mt-4"
          >
            Register Now
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;

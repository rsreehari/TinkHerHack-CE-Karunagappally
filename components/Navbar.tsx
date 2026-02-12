
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/tink-her-hack.png"
            alt="Tink-Her-Hack 4.0 Logo"
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="text-xl font-bold tracking-tight text-white">Tink-Her-Hack <span className="text-primary">4.0</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${isActive(link.path) ? 'text-primary' : 'text-slate-300'}`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,20,146,0.3)]"
          >
            Register Now
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-background-dark border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${isActive(link.path) ? 'text-primary' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary py-3 rounded-lg font-bold text-center block"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;

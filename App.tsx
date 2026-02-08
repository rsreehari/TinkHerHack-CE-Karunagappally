
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Sponsors from './pages/Sponsors';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative z-10 min-h-screen flex flex-col bg-background-dark overflow-x-hidden">
        {/* Persistent Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="berry-glow-1 absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"></div>
          <div className="berry-glow-2 absolute top-1/2 -right-48 w-[800px] h-[800px] rounded-full blur-3xl opacity-30"></div>
          <div className="glow-overlay absolute inset-0"></div>
        </div>

        <Navbar />
        
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </main>

        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Timeline from './pages/Timeline';
import Sponsors from './pages/Sponsors';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-body selection:bg-pink-500 selection:text-white">
      <Navbar />

      {/* GLOBAL BACKGROUND EFFECTS - Kept for depth */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <main className="relative z-10">
        {/* Render all sections in a single scrollable page */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="sponsors">
          <Sponsors />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

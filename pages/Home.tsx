import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden font-display">
      {/* HERO SECTION - Royal Blue Background */}
      <section className="relative w-full bg-secondary min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-white/10 blur-[80px] rounded-full animate-float pointer-events-none"></div>
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-primary/20 blur-[80px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block"
          >
            <span className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold tracking-widest uppercase text-sm shadow-xl">
              Feb 20-21 • CE Karunagappally
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter uppercase relative">
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="block"
            >
              Tink-Her
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-300"
              >
                Hack 4.0
              </motion.span>
              {/* Sticker - Cooler Pop Art Style */}
              <motion.div
                initial={{ rotate: 12, scale: 0 }}
                animate={{
                  scale: 1,
                  rotate: [12, 16, 12],
                  y: [0, -8, 0]
                }}
                transition={{
                  scale: { duration: 0.5, type: "spring" },
                  default: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -right-20 -top-16 md:-right-44 md:-top-32 z-50 hidden md:block"
              >
                <div className="bg-white !text-black font-black uppercase text-sm md:text-base px-6 py-3 shadow-[8px_8px_0px_#FF1493] border-4 border-black transform hover:scale-110 transition-transform cursor-pointer whitespace-nowrap flex items-center gap-2 !leading-none !tracking-normal">
                  <span className="material-symbols-outlined text-xl text-primary">verified</span>
                  Beginner Friendly!
                </div>
              </motion.div>
            </span>
          </h1>

          {/* Subtitle with Script Font */}
          <div className="text-2xl md:text-4xl text-white font-medium mt-4 relative inline-block">
            Made for <span className="font-script text-4xl md:text-6xl text-yellow-300 relative z-10 mx-2 transform -rotate-3 inline-block">women</span> who build.
            <svg className="absolute w-[110%] h-4 -bottom-2 -left-[5%] text-primary opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          <div className="pt-12 pb-8">
            <CountdownTimer />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary text-xl md:text-2xl font-black px-12 py-6 rounded-2xl shadow-[8px_8px_0px_rgba(255,20,147,1)] hover:shadow-[4px_4px_0px_rgba(255,20,147,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center gap-3 border-2 border-transparent hover:border-white"
            >
              REGISTER NOW
              <span className="material-symbols-outlined text-3xl font-bold">arrow_outward</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* INFO GRID - White Background for Readability */}
      <section className="bg-white py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="col-span-1 md:col-span-2 bg-secondary/5 border-2 border-secondary/10 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group hover:bg-secondary hover:text-white transition-colors duration-500">
            <div className="relative z-10 space-y-6">
              <h3 className="text-4xl md:text-6xl font-bold leading-tight group-hover:text-white text-secondary">
                Break the <br />
                <span className="font-script text-primary text-5xl md:text-7xl group-hover:text-yellow-300 transition-colors">bias</span>
              </h3>
              <p className="text-lg md:text-xl text-slate-600 font-body leading-relaxed group-hover:text-white/90 max-w-lg">
                Tink-Her-Hack 4.0 consists of an 18-hour intense coding session overnight. It’s an opportunity to network with mentors, learn new technologies, and build cool projects.
              </p>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[15rem] text-secondary/5 group-hover:text-white/10 transition-colors duration-500">code_blocks</span>
          </div>

          {/* Card 2 - Stats - Updated with Scholarships */}
          <div className="col-span-1 bg-primary text-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-[10px_10px_0px_#4169E1] hover:shadow-[5px_5px_0px_#4169E1] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-black">
            <div>
              <span className="font-bold uppercase tracking-widest opacity-80 mb-2 block">Format</span>
              <div className="text-6xl font-black mb-1">18H</div>
              <div className="font-script text-3xl">Of Coding</div>
            </div>
            <div className="mt-12">
              <span className="font-bold uppercase tracking-widest opacity-80 mb-2 block">Opportunity</span>
              <div className="text-3xl md:text-5xl font-black mb-1 leading-none">Top Projects</div>
              <div className="font-script text-2xl">Get Sponsorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMORIES SECTION - Darker Blue for high contrast */}
      <section className="bg-background-dark py-24 px-0 relative overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            PAST <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400 font-script">memories</span>
          </h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Moments from our previous editions where ideas came to life.
          </p>
        </div>

        {/* Marquee */}
        <div className="flex animate-marquee gap-8 w-max pl-6">
          {[
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
            // Duplicate for loop
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
          ].map((src, i) => (
            <div key={i} className="w-[280px] h-[180px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden border-2 md:border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105 shadow-xl md:shadow-2xl shrink-0">
              <img src={src} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

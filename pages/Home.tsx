import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { motion } from 'framer-motion';

// No physics engine needed - using Framer Motion for stable floating effect
// No physics engine needed - using Framer Motion for stable floating effect
const FloatingShape: React.FC<{ delay: number; type: string; initialX: number }> = ({ delay, type, initialX }) => {
  // Generate stable random properties using useMemo
  const { duration, xDrift, scale, rotation } = React.useMemo(() => ({
    duration: 15 + Math.random() * 15, // Slower, more varying speed
    xDrift: (Math.random() - 0.5) * 200, // Drift in pixels (not %) to be consistent
    scale: 0.3 + Math.random() * 0.5,
    rotation: Math.random() > 0.5 ? 360 : -360
  }), []);

  return (
    <motion.div
      // Use 'left' for absolute positioning across the screen width
      style={{ left: `${initialX}%` }}
      initial={{ y: "110vh", x: 0, opacity: 0, scale: scale, rotate: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 1, 1, 0], // Fate in/out smoother
        rotate: [0, 180, rotation],
        x: [0, xDrift] // Drift relative to the 'left' position
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        // Use negative delay to pre-warm the animation so screen is full immediately
        delay: -Math.random() * 20,
        ease: "linear"
      }}
      className="absolute pointer-events-none z-0"
    >
      {type === 'heart' ? (
        <svg width="40" height="40" viewBox="0 0 24 24" fill={['#FF1493', '#FF69B4', '#FF0000'][Math.floor(Math.random() * 3)]}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : type === 'circle' ? (
        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
      ) : (
        <div className="w-8 h-8 rotate-45 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30" />
      )}
    </motion.div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden font-display">
      {/* HERO SECTION - Valentines Theme */}
      <section className="relative w-full min-h-screen bg-secondary overflow-hidden flex flex-col items-center justify-start pt-12 pb-10 md:justify-center md:pt-0 md:pb-20 text-center">
        {/* Floating Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Create two layers of shapes for depth: slow back layer, fast front layer */}
          {[...Array(35)].map((_, i) => (
            <FloatingShape
              key={i}
              delay={Math.random() * 25} // Spread start times more
              type={Math.random() > 0.6 ? 'heart' : Math.random() > 0.5 ? 'circle' : 'diamond'}
              // Ensure full coverage from -5% to 105% to avoid empty edges
              initialX={(i * (100 / 35)) + (Math.random() * 10 - 5)}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-start w-full px-4 pointer-events-none select-none h-full">

          {/* Top Group: Badge, Title, Subtitle */}
          <div className="flex flex-col items-center space-y-4 md:space-y-8 w-full">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block pointer-events-auto"
            >
              <span className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 md:px-6 md:py-2 rounded-full font-bold tracking-widest uppercase text-xs sm:text-sm md:text-sm shadow-xl hover:bg-white/20 transition-colors">
                Feb 20-21 • CE Karunagappally
              </span>
            </motion.div>

            {/* Main Title - Responsive sizing */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase relative flex flex-col items-center drop-shadow-[0_4px_0_rgba(0,0,0,0.3)] mt-2">
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                Tink-Her
              </motion.span>
              <span className="relative inline-block w-full flex flex-col items-center md:block md:w-auto">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-300"
                >
                  Hack 4.0
                </motion.span>
              </span>
            </h1>

            {/* Subtitle with Script Font */}
            <div className="text-lg md:text-4xl text-white font-medium mt-1 md:mt-4 relative inline-block max-w-[90%] mx-auto leading-normal drop-shadow-md">
              Made for <span className="font-script text-3xl md:text-6xl text-yellow-300 relative z-10 mx-1 md:mx-2 transform -rotate-3 inline-block">women</span> who build.
              <svg className="absolute w-[110%] h-3 md:h-4 -bottom-1 md:-bottom-2 -left-[5%] text-primary opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>

          <div className="pt-12 pb-12 md:pt-12 md:pb-12 pointer-events-auto">
            <CountdownTimer />
          </div>

          {/* Bottom Anchor: Register Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center pointer-events-auto"
          >
            <a
              href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary text-sm md:text-2xl font-black px-6 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl shadow-[4px_4px_0px_rgba(255,20,147,1)] md:shadow-[8px_8px_0px_rgba(255,20,147,1)] md:hover:shadow-[4px_4px_0px_rgba(255,20,147,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all inline-flex items-center gap-2 md:gap-3 border-2 border-transparent hover:border-white z-50 relative"
            >
              REGISTER NOW
              <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">arrow_outward</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* INFO GRID - White Background for Readability */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {/* Card 1 */}
          <div className="col-span-1 md:col-span-2 bg-secondary/5 border-2 border-secondary/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group md:hover:bg-secondary md:hover:text-white transition-colors duration-500">
            <div className="relative z-10 space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-6xl font-bold leading-tight md:group-hover:text-white text-secondary">
                Break the <br />
                <span className="font-script text-primary text-4xl md:text-7xl md:group-hover:text-yellow-300 transition-colors">bias</span>
              </h3>
              <p className="text-base md:text-xl text-slate-600 font-body leading-relaxed md:group-hover:text-white/90 max-w-lg">
                Tink-Her-Hack 4.0 consists of an 18-hour intense coding session overnight. It’s an opportunity to network with mentors, learn new technologies, and build cool projects.
              </p>
            </div>
            <img
              src="/women.jpg"
              alt="Women in Tech"
              className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-40 h-40 md:w-64 md:h-64 object-cover rounded-full opacity-20 md:group-hover:opacity-40 transition-opacity duration-500 grayscale md:group-hover:grayscale-0"
            />
          </div>

          {/* Card 2 - Stats */}
          <div className="col-span-1 bg-primary text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-[8px_8px_0px_#4169E1] md:shadow-[10px_10px_0px_#4169E1] border-2 border-black gap-8">
            <div>
              <span className="font-bold uppercase tracking-widest opacity-80 mb-2 block text-sm">Format</span>
              <div className="text-5xl md:text-6xl font-black mb-1">18H</div>
              <div className="font-script text-2xl md:text-3xl">Of Coding</div>
            </div>
            <div>
              <span className="font-bold uppercase tracking-widest opacity-80 mb-2 block text-sm">Opportunity</span>
              <div className="text-4xl md:text-5xl font-black mb-1 leading-none">Top Projects</div>
              <div className="font-script text-xl md:text-2xl">Get Sponsorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMORIES SECTION - Darker Blue for high contrast */}
      <section className="bg-background-dark py-16 md:py-24 px-0 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-10 md:mb-16 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-4 md:mb-6">
            PAST <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400 font-script">memories</span>
          </h2>
          <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto px-4">
            Moments from our previous editions where ideas came to life.
          </p>
        </div>

        {/* Marquee - Optimized for responsive scrolling */}
        {/* Marquee - Optimized for responsive scrolling */}
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-marquee gap-4 md:gap-8 w-max pl-4 md:pl-6">
            {[...Array(2)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {[
                  "https://i.postimg.cc/gj0MDtyf/photo1.jpg",
                  "https://i.postimg.cc/T1HtHjQs/photo2.jpg",
                  "https://i.postimg.cc/Rh0PRpQr/photo3.jpg",
                  "https://i.postimg.cc/D0zCgpQ9/photo4.jpg",
                  "https://i.postimg.cc/L50x0kv7/photo5.jpg",
                  "https://i.postimg.cc/PJFSFbK0/photo6.jpg",
                  "https://i.postimg.cc/C56c6CJQ/photo7.jpg"
                ].map((src, i) => (
                  <div key={`${setIndex}-${i}`} className="w-[200px] h-[140px] sm:w-[280px] sm:h-[180px] md:w-[400px] md:h-[280px] rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-white transform md:hover:rotate-0 transition-transform duration-300 md:hover:scale-105 active:scale-95 shadow-lg md:shadow-2xl shrink-0 backface-hidden">
                    <img
                      src={src}
                      alt={`Memory ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

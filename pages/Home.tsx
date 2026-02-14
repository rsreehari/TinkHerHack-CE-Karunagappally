
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden font-display">
      {/* HERO SECTION - Royal Blue Background */}
      <section className="relative w-full bg-secondary min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 overflow-hidden">
        {/* Decorative Blobs - Optimized for mobile */}
        <div className="absolute top-20 left-[-20%] w-48 h-48 bg-white/10 blur-[60px] rounded-full animate-float pointer-events-none md:left-[10%] md:w-64 md:h-64"></div>
        <div className="absolute bottom-20 right-[-20%] w-60 h-60 bg-primary/20 blur-[60px] rounded-full animate-float pointer-events-none md:right-[10%] md:w-80 md:h-80" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-6 md:space-y-8 w-full">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block"
          >
            <span className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold tracking-widest uppercase text-[10px] md:text-sm shadow-xl">
              Feb 20-21 • CE Karunagappally
            </span>
          </motion.div>

          {/* Main Title - Responsive sizing */}
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter uppercase relative flex flex-col items-center">
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

              {/* Sticker - Mobile Optimized (Static Flow) */}
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
                className="relative mt-8 mb-4 md:absolute md:-right-44 md:-top-32 md:mt-0 z-50 block w-auto"
              >
                <div className="bg-white !text-black font-black uppercase text-xs md:text-base px-4 py-2 md:px-6 md:py-3 shadow-[4px_4px_0px_#FF1493] md:shadow-[8px_8px_0px_#FF1493] border-2 md:border-4 border-black transform md:hover:scale-110 active:scale-95 transition-transform cursor-pointer whitespace-nowrap flex items-center gap-2 !leading-none !tracking-normal">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-primary fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Beginner Friendly!
                </div>
              </motion.div>
            </span>
          </h1>

          {/* Subtitle with Script Font */}
          <div className="text-xl md:text-4xl text-white font-medium mt-8 md:mt-4 relative inline-block max-w-[90%] mx-auto leading-normal">
            Made for <span className="font-script text-3xl md:text-6xl text-yellow-300 relative z-10 mx-1 md:mx-2 transform -rotate-3 inline-block">women</span> who build.
            <svg className="absolute w-[110%] h-3 md:h-4 -bottom-1 md:-bottom-2 -left-[5%] text-primary opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          <div className="pt-8 md:pt-12 pb-8">
            <CountdownTimer />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center"
          >
            <a
              href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary text-lg md:text-2xl font-black px-8 py-4 md:px-12 md:py-6 rounded-2xl shadow-[6px_6px_0px_rgba(255,20,147,1)] md:shadow-[8px_8px_0px_rgba(255,20,147,1)] md:hover:shadow-[4px_4px_0px_rgba(255,20,147,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all inline-flex items-center gap-2 md:gap-3 border-2 border-transparent hover:border-white"
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
                  "/photos/photo1.jpg",
                  "/photos/photo2.jpg",
                  "/photos/photo3.jpg",
                  "/photos/photo4.jpg",
                  "/photos/photo5.jpg",
                  "/photos/photo6.jpg",
                  "/photos/photo7.jpg"
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

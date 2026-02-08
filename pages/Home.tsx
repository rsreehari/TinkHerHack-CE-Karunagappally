
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 lg:py-24 text-center">
      <div className="max-w-5xl w-full space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined text-sm">stars</span>
            Kerala's Largest Women-Only Hackathon
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white">
            Tink-Her-Hack 4.0 – <br />
            <span className="bg-gradient-to-r from-primary via-primary to-berry bg-clip-text text-transparent">Build Without Limits</span> <span className="inline-block animate-pulse"></span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            Join 4000+ women across 60+ venues in Kerala for a massive learning and building experience. No experience required!
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-2xl mx-auto">
          <div className="flex-1 min-w-[200px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center gap-1 group hover:border-primary/50 transition-all">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">schedule</span>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Duration</span>
            <span className="text-2xl font-bold">18h</span>
          </div>
          <div className="flex-1 min-w-[200px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center gap-1 group hover:border-primary/50 transition-all">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">calendar_month</span>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Date</span>
            <span className="text-2xl font-bold">Feb 20, 21</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-8">
          <button className="group relative px-12 py-6 bg-primary text-white text-xl font-bold rounded-2xl transition-all shadow-[0_10px_40px_rgba(255,20,146,0.4)] hover:shadow-[0_15px_50px_rgba(255,20,146,0.6)] hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative">Register Now</span>
          </button>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">info</span>
            Registration closes on Feb 15th
          </p>
        </div>

        {/* Past Memories Section */}
        <div className="w-full pt-16 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Past Memories
          </h2>

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-4">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background-dark to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background-dark to-transparent z-10"></div>

            <div className="flex animate-marquee gap-6">
              {[
                "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
                // Duplicated for seamless loop
                "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400",
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
              ].map((src, idx) => (
                <div key={idx} className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src={src}
                    alt={`Memory ${idx + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

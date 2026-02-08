
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 lg:py-24 text-center">
      <div className="max-w-5xl w-full space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined text-sm">stars</span>
            Annual Women-Centric Hackathon
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white">
            Tink-Her-Hack 4.0 – <br/>
            <span className="bg-gradient-to-r from-primary via-primary to-berry bg-clip-text text-transparent">Build Without Limits</span> <span className="inline-block animate-pulse"></span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            Join India's most vibrant community of women developers, designers, and innovators for 18 hours of pure creation and problem-solving.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-2xl mx-auto">
          <div className="flex-1 min-w-[200px] p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center gap-1 group hover:border-primary/50 transition-all">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">schedule</span>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Duration</span>
            <span className="text-2xl font-bold">18 Hours</span>
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
      </div>
    </div>
  );
};

export default Home;

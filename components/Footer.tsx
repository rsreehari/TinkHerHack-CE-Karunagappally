
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-10 py-12 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">
        <div className="flex items-center gap-6">
          <div className="h-8 w-auto flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img 
              alt="TinkerHub Foundation" 
              className="h-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Iz5ohngFq2TVF1ySR0zwcN_8jWlU8VaILZttguyDh-f6ipIHXqOqsP0s60D82HQefMpxHZhLrPgWRWS4Mo99q74U6vKyPpg2twIIsdOT3HHoqS0WG5p4l4gfGZT8f_xGAVvgJAiFpXtrlAArUe0SjMO8FQoIzNuO4pPbodsr6p7amxSIVpNCFPe79VC3hM-1NhrUNK2vaCAXyUb0bL4bBbg9L36xzXgf2d5dLJk-4d6-AY49N0varA0FnpjyyTawgIMX23arwkTU" 
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="text-xs font-medium text-slate-500">© 2024 TinkerHub Foundation</span>
          <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-xs font-medium text-slate-500 hover:text-primary transition-colors" href="#">Contact Us</a>
        </div>

        <div className="flex items-center gap-4">
          <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary transition-all" href="#">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary transition-all" href="#">
            <span className="material-symbols-outlined text-sm">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

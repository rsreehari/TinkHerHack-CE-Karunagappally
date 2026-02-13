import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 md:px-10 py-12 mt-auto">
      {/* Contact Box Section */}
      {/* Contact Box Section */}
      {/* Contact Box Section */}
      <div className="bg-secondary border-4 border-black rounded-[2rem] p-6 md:p-10 mb-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] relative overflow-hidden max-w-5xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -ml-10 -mb-10"></div>

        <div className="text-center mb-8 relative z-10">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-2 font-display uppercase tracking-wider">Get in Touch</h3>
          <p className="text-white/80 font-medium text-base">Have questions? We're here to help you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
          {/* General Inquiry */}
          <a href="mailto:thceknpy@gmail.com" className="block group">
            <div className="bg-white text-black h-full rounded-2xl p-4 md:p-5 hover:-translate-y-1 transition-transform border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <div className="bg-primary text-white p-2 md:p-3 rounded-lg w-fit mb-3 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
              </div>
              <h4 className="text-lg md:text-xl font-black uppercase mb-1">General Inquiry</h4>
              <p className="text-slate-600 font-bold text-xs md:text-sm mb-3">For partnerships & queries</p>
              <div className="text-secondary font-black hover:underline flex items-center gap-1 text-sm break-all">
                thceknpy@gmail.com
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
              </div>
            </div>
          </a>

          {/* Campus Lead */}
          <a href="https://wa.link/cqqrze" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-white text-black h-full rounded-2xl p-4 md:p-5 hover:-translate-y-1 transition-transform border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <div className="bg-[#25D366] text-white p-2 md:p-3 rounded-lg w-fit mb-3 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-xl md:text-2xl">person</span>
              </div>
              <h4 className="text-lg md:text-xl font-black uppercase mb-1">Campus Lead</h4>
              <p className="text-slate-600 font-bold text-xs md:text-sm mb-3">Abhijith B</p>
              <div className="text-[#25D366] font-black hover:underline flex items-center gap-1 text-base md:text-lg">
                Chat on WhatsApp
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
              </div>
            </div>
          </a>

          {/* WiT Lead */}
          <a href="https://wa.link/ci1465" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-white text-black h-full rounded-2xl p-4 md:p-5 hover:-translate-y-1 transition-transform border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <div className="bg-[#bc1888] text-white p-2 md:p-3 rounded-lg w-fit mb-3 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="material-symbols-outlined text-xl md:text-2xl">person_4</span>
              </div>
              <h4 className="text-lg md:text-xl font-black uppercase mb-1">WiT Lead</h4>
              <p className="text-slate-600 font-bold text-xs md:text-sm mb-3">Summaya Sainu</p>
              <div className="text-[#bc1888] font-black hover:underline flex items-center gap-1 text-base md:text-lg">
                Chat on WhatsApp
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-medium text-white/70">© 2026 TinkerHub CE Karunagappally</span>
          <a
            href="https://github.com/rsreehari"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex p-[2px] mt-3 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"></div>
            <div className="relative px-6 py-2 bg-black rounded-full flex items-center gap-2">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Crafted by</span>
              <span className="font-script text-2xl text-cyan-400 group-hover:text-cyan-300 transition-colors pb-1 drop-shadow-sm">R Sreehari</span>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-3">
          {/* Social Buttons */}
          <a href="https://www.instagram.com/wit.thceknpy" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#bc1888] hover:to-[#cc2366] transition-all group border border-white/10 hover:border-transparent flex items-center gap-2" title="WiT Instagram">
            <span className="material-symbols-outlined text-lg group-hover:text-white text-white/80">linked_camera</span>
            <span className="text-xs font-bold text-white/80 group-hover:text-white">WiT Insta</span>
          </a>

          <a href="https://whatsapp.com/channel/0029Vb7E3GM3AzNK0fc02o32" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent flex items-center gap-2" title="WhatsApp Channel">
            <span className="material-symbols-outlined text-lg group-hover:text-white text-white/80">campaign</span>
            <span className="text-xs font-bold text-white/80 group-hover:text-white">Channel</span>
          </a>

          <a href="https://chat.whatsapp.com/E1JqJuyUgHqFjnAb3UPg35" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent flex items-center gap-2" title="Join Community Group">
            <span className="material-symbols-outlined text-lg group-hover:text-white text-white/80">groups</span>
            <span className="text-xs font-bold text-white/80 group-hover:text-white">Join Community</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 md:px-10 py-12 mt-auto">
      {/* Contact Box Section */}
      {/* Contact Box Section */}
      <div className="bg-secondary border-4 border-black rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-[8px_8px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -ml-10 -mb-10"></div>

        <div className="text-center mb-10 relative z-10">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-display uppercase tracking-wider">Get in Touch</h3>
          <p className="text-white/80 font-medium text-lg">Have questions? We're here to help you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* General Inquiry */}
          <div className="bg-white text-black rounded-3xl p-6 hover:-translate-y-1 transition-transform border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] group">
            <div className="bg-primary text-white p-3 rounded-xl w-fit mb-4 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <h4 className="text-xl font-black uppercase mb-1">General Inquiry</h4>
            <p className="text-slate-600 font-bold text-sm mb-4">For partnerships & queries</p>
            <a href="mailto:thceknpy@gmail.com" className="text-secondary font-black hover:underline flex items-center gap-1 group/link text-sm md:text-base break-all">
              thceknpy@gmail.com
              <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </div>

          {/* Campus Lead */}
          <div className="bg-white text-black rounded-3xl p-6 hover:-translate-y-1 transition-transform border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] group">
            <div className="bg-[#25D366] text-white p-3 rounded-xl w-fit mb-4 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <span className="material-symbols-outlined text-2xl">person</span>
            </div>
            <h4 className="text-xl font-black uppercase mb-1">Campus Lead</h4>
            <p className="text-slate-600 font-bold text-sm mb-4">Abhijith B</p>
            <a href="https://wa.link/cqqrze" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-black hover:underline flex items-center gap-1 group/link text-lg">
              Chat on WhatsApp
              <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </div>

          {/* WiT Lead */}
          <div className="bg-white text-black rounded-3xl p-6 hover:-translate-y-1 transition-transform border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] group">
            <div className="bg-[#bc1888] text-white p-3 rounded-xl w-fit mb-4 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <span className="material-symbols-outlined text-2xl">person_4</span>
            </div>
            <h4 className="text-xl font-black uppercase mb-1">WiT Lead</h4>
            <p className="text-slate-600 font-bold text-sm mb-4">Summaya Sainu</p>
            <a href="https://wa.link/ci1465" target="_blank" rel="noopener noreferrer" className="text-[#bc1888] font-black hover:underline flex items-center gap-1 group/link text-lg">
              Chat on WhatsApp
              <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-medium text-white/70">© 2026 TinkerHub CE Karunagappally</span>
          <span className="text-xs text-white/40">Made with ❤️ for Her</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-3">
          {/* Social Buttons (Compact) */}
          <a href="https://www.instagram.com/wit.thceknpy" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#bc1888] hover:to-[#cc2366] transition-all group border border-white/10 hover:border-transparent" title="WiT Instagram">
            <span className="material-symbols-outlined text-xl group-hover:text-white text-white/80">linked_camera</span>
          </a>
          <a href="https://whatsapp.com/channel/0029Vb7E3GM3AzNK0fc02o32" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent" title="WhatsApp Channel">
            <span className="material-symbols-outlined text-xl group-hover:text-white text-white/80">campaign</span>
          </a>
          <a href="https://chat.whatsapp.com/E1JqJuyUgHqFjnAb3UPg35" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent flex items-center gap-2" title="Join Community Group">
            <span className="material-symbols-outlined text-xl group-hover:text-white text-white/80">groups</span>
            <span className="text-sm font-bold text-white/80 group-hover:text-white">Join Community</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

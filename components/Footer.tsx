
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-10 py-12 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">


        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="text-sm font-medium text-white/70">© 2025 TinkerHub CE Karunagappally</span>
          <a className="text-sm font-medium text-white/70 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white" href="#">Privacy Policy</a>
          <a className="text-sm font-medium text-white/70 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white" href="#">Contact Us</a>
        </div>

        <div className="flex items-center gap-4">

          <a
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group"
            href="https://chat.whatsapp.com/E1JqJuyUgHqFjnAb3UPg35"
            target="_blank"
            rel="noopener noreferrer"
            title="Join WhatsApp Group"
          >
            <span className="material-symbols-outlined text-xl group-hover:text-white">groups</span>
            <span className="font-bold text-sm group-hover:text-white">Join WhatsApp Group</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

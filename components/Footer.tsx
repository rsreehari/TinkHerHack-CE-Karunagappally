
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-10 py-12 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">


        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="text-sm font-medium text-white/70">© 2026 TinkerHub CE Karunagappally</span>
          <a className="text-sm font-medium text-white/70 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white" href="mailto:thceknpy@gmail.com">thceknpy@gmail.com</a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-4">

          {/* WiT Instagram */}
          <a
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#bc1888] hover:to-[#cc2366] transition-all group border border-white/10 hover:border-transparent"
            href="https://www.instagram.com/wit.thceknpy"
            target="_blank"
            rel="noopener noreferrer"
            title="WiT Instagram"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-white">linked_camera</span>
            <span className="font-bold text-xs group-hover:text-white">WiT Insta</span>
          </a>

          {/* TinkerHub WhatsApp Channel */}
          <a
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent"
            href="https://whatsapp.com/channel/0029Vb7E3GM3AzNK0fc02o32"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow WhatsApp Channel"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-white">campaign</span>
            <span className="font-bold text-xs group-hover:text-white">Channel</span>
          </a>

          {/* Leads Contacts */}
          <a
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent"
            href="https://wa.link/cqqrze"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with Campus Lead"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-white">person</span>
            <span className="font-bold text-xs group-hover:text-white">Campus Lead</span>
          </a>

          <a
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent"
            href="https://wa.link/ci1465"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with WiT Lead"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-white">person_4</span>
            <span className="font-bold text-xs group-hover:text-white">WiT Lead</span>
          </a>

          {/* Join Group */}
          <a
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#25D366] transition-all group border border-white/10 hover:border-transparent"
            href="https://chat.whatsapp.com/E1JqJuyUgHqFjnAb3UPg35"
            target="_blank"
            rel="noopener noreferrer"
            title="Join WhatsApp Group"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-white">groups</span>
            <span className="font-bold text-xs group-hover:text-white">Join Group</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

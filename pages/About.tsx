
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 font-display space-y-24">
      {/* Hero Header - White Section for Contrast */}
      <section className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-xl border-4 border-slate-100">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-300 border-2 border-black text-black text-xs font-bold tracking-widest uppercase mb-8 shadow-[4px_4px_0px_#000]">
          <span className="material-symbols-outlined text-sm">stars</span>
          Empowering Beginners
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-6 uppercase tracking-tighter">
          Redefining Tech for <br />
          <span className="text-primary font-script lowercase text-[1.2em] relative inline-block transform -rotate-2 mt-4">
            everyone
            <span className="absolute -bottom-2 w-full h-3 bg-yellow-300 -z-10 opacity-50 skew-x-12"></span>
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed font-body">
          Tink-Her-Hack 4.0 is Kerala's flagship women-centric hackathon designed to break barriers. Whether you've never written a line of code or you're a seasoned builder, your journey starts here.
        </p>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Team Card - Blue */}
        <div className="md:col-span-4 bg-secondary text-white border-4 border-black p-8 rounded-[2.5rem] flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white text-secondary flex items-center justify-center mb-6 border-2 border-black">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-3xl font-black uppercase mb-2">Team Size</h3>
            <p className="text-white/90 text-lg leading-snug mb-8 font-medium">Bring a friend or find a partner during our pre-event networking.</p>
          </div>
          <div className="text-6xl font-black">1 - 2 <span className="text-xl opacity-80 font-bold block">Members</span></div>
        </div>

        {/* Mode Card - White */}
        <div className="md:col-span-8 bg-white text-black border-4 border-black rounded-[2.5rem] overflow-hidden relative group hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_#FF1493]">
          <div className="h-full p-10 flex flex-col justify-between z-10 relative">
            <div>
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-yellow-300 text-black flex items-center justify-center mb-6 border-2 border-black">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Offline</span>
              </div>

              <h3 className="text-4xl font-black uppercase mb-4">Mode & Venue</h3>
              <p className="text-slate-600 text-lg mb-8 max-w-lg font-medium">Hosted at College Of Engineering Karunagappally to provide a safe and inclusive space to innovate.</p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-2 border-slate-100">
                  <span className="material-symbols-outlined text-primary text-3xl">apartment</span>
                  <span className="font-bold text-lg">College Of Engineering Karunagappally</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                className="inline-flex items-center gap-2 font-black text-lg hover:gap-4 transition-all uppercase tracking-wide border-b-4 border-primary pb-1"
                href="https://maps.app.goo.gl/hfzQmCcru8n4RuxY6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tailored Card - Pink */}
        <div className="md:col-span-12 bg-primary text-white border-4 border-black p-12 rounded-[3rem] relative overflow-hidden shadow-[12px_12px_0px_#4169E1]">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-white text-primary px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm border-2 border-black">For Everyone</div>
              <h3 className="text-5xl md:text-6xl font-black uppercase leading-[0.9]">Tailored for <br /><span className="font-script text-yellow-300 lowercase">beginners</span></h3>
              <p className="text-xl font-medium text-white/90 leading-relaxed">We provide dedicated mentors to help you setup and build your first project. A non-competitive atmosphere focused on learning.</p>
            </div>
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Mentorship", icon: "school" },
                { title: "Workshops", icon: "handyman" },
                { title: "Networking", icon: "hub" },
                { title: "Fun Games", icon: "sports_esports" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-yellow-300">{item.icon}</span>
                  <span className="text-xl font-bold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breaking Barriers section */}
      <section className="py-20">
        <div className="flex flex-col md:flex-row items-center gap-16 bg-white rounded-[3rem] p-12 border-4 border-black shadow-[12px_12px_0px_#000]">
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-none">Breaking Barriers,<br /><span className="text-primary">One Line</span> at a Time.</h2>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              Tink-Her-Hack was born from a simple observation: the gender gap in tech isn't about ability, but accessibility. We create a safe space for women and non-binary students.
            </p>
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-6xl font-black text-secondary">6000+</div>
                <div className="font-bold text-slate-400 uppercase tracking-widest">Women Impacted</div>
              </div>
              <div>
                <div className="text-6xl font-black text-primary">1800+</div>
                <div className="font-bold text-slate-400 uppercase tracking-widest">Projects Built</div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="aspect-square bg-slate-100 rounded-[2.5rem] border-4 border-black p-4 rotate-3 shadow-[8px_8px_0px_#FFD700] hover:rotate-0 transition-all duration-500 overflow-hidden">
              <img
                alt="Women in tech"
                className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-500"
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

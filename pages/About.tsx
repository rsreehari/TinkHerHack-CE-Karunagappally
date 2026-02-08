
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Hero Header */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
          <span className="material-symbols-outlined text-sm">stars</span>
          Empowering Beginners
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Redefining Tech for <br />
          <span className="bg-gradient-to-r from-primary to-[#ff80bf] bg-clip-text text-transparent">Complete Beginners.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
          Tink-Her-Hack 4.0 is Kerala's flagship women-centric hackathon designed to break barriers. Whether you've never written a line of code or you're a seasoned builder, your journey starts here.
        </p>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Team Card */}
        <div className="md:col-span-4 bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between group hover:border-primary/50 transition-all duration-300">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Team Size</h3>
            <p className="text-slate-400 leading-snug mb-8">Bring a friend or find a partner during our pre-event networking. Register as individuals or teams.</p>
          </div>
          <div className="text-4xl font-bold text-primary">1 - 2 <span className="text-base text-slate-500 font-normal">Members</span></div>
        </div>

        {/* Mode Card */}
        <div className="md:col-span-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden relative group hover:border-primary/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 h-full">
            <div className="p-8 flex flex-col justify-between z-10">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mode & Venue</h3>
                <p className="text-slate-400 mb-6">Hosted across 60+ venues in Kerala to provide a safe and inclusive space to innovate.</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">apartment</span>
                    <span className="font-medium">60+ Venues across Kerala</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">meeting_room</span>
                    <span className="font-medium text-slate-500">Offline Participation</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
                  href="https://maps.app.goo.gl/34bf71aaecc5a798"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps <span className="material-symbols-outlined">arrow_right_alt</span>
                </a>
              </div>
            </div>
            <div className="relative h-72 md:h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.0434991904867!2d76.5569874!3d9.0645863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06047ba58e1ba5%3A0x34bf71aaecc5a798!2sCollege%20of%20Engineering%20Karunagappally!5e1!3m2!1sen!2sin!4v1770537557472!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Tailored Card */}
        <div className="md:col-span-7 bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight italic">Tailored for Beginners</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "No Code Experience?", desc: "We provide dedicated mentors to help you setup and build your first project." },

                { title: "Supportive Environment", desc: "A non-competitive atmosphere focused on learning and community." },

              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="md:col-span-5 bg-primary/10 border border-primary/20 p-10 rounded-3xl flex flex-col justify-center items-center text-center group">
          <div className="text-7xl font-black text-primary mb-2">18h</div>
          <div className="text-xl font-bold uppercase tracking-widest text-slate-300">Of Non-Stop Innovation</div>
          <div className="w-16 h-1 bg-primary/30 my-6 rounded-full"></div>
          <p className="text-slate-400 text-sm">Food, caffeine, and endless learning provided.</p>
          <button className="mt-8 w-full py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-lg hover:translate-y-[-2px] transition-all">
            SECURE YOUR SPOT
          </button>
        </div>
      </section>

      {/* Breaking Barriers section */}
      <section className="py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Breaking Barriers, <br /> One Line at a Time.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tink-Her-Hack was born from a simple observation: the gender gap in tech isn't about ability, but accessibility. We create a safe space for women and non-binary students to experiment, fail, and succeed together.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border-l-2 border-primary bg-primary/5">
                <div className="text-4xl font-bold">4000+</div>
                <div className="text-xs uppercase text-slate-500 font-bold tracking-widest">Women in Tech</div>
              </div>
              <div className="p-6 border-l-2 border-primary bg-primary/5">
                <div className="text-4xl font-bold">1188</div>
                <div className="text-xs uppercase text-slate-500 font-bold tracking-widest">Projects</div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-white/5 border border-white/10 p-4 rotate-3 hover:rotate-0 transition-transform duration-500 rounded-3xl">
              <img
                alt="Women in tech"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtBYal6PPsuqN4U_mFqWYKGMvqJZzzsWNO38XeRq37_iUzsJ4Jy4FSSsnN08gQ1wlWhg1-vPpFHXYD9HDjjseGU1W0bsa-2MLofJ32PSdQBfaULPloAeCDmyLnNr9tcx23FhvadJVuF1GRHWWclAz--D7IIcG-Zpg3Hw4lnE4lR19QnFWnE6yxkClGEZHUv8nxQrn8ddxVn6V_ZClWgkymYMGRLomeuzlPHp-4vAKd8FAj7KwI2X8eq3XTDbh7Wsu5TAXoa0FVzddv"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

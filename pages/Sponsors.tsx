import React from 'react';

const Sponsors: React.FC = () => {
  const sponsors = Array(1).fill({ name: "Partner", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIEHUYZV0HT_UuBQCH55cA4BsA5r2QYC47t8zkIWYttm6zKBWhMzHOQ-5uBX4LpYziAYwl4UUhMCIwxRIzahLd5npYetp9fEfjC1hVhxI5bLpaEcAdZNjD1GZnxasP5-VYjZnXO6DAQn4MJFZPW3gQ6j77-oCnyz-BVL95GeNSUsIECf1r3XmxHsixMQr_F34byVDm6qhh_hwn4GcTpxTqYOjHzzg1N34kJ3MV59wWRmq5QGLaMybWmbcVEpMxAD6RiRpyj0tQOpZ2" });

  const community = [
    { name: "FOSS Club CEKNPY", img: "/foss.jpeg" },
    { name: "Mulearn KNP", img: "/mulearn.jpeg" }
  ];

  return (
    <div className="w-full font-display">
      {/* Header - Purple/Pink Gradient for variation or keep Blue? Let's use clean White for Intro and Blue for impact */}
      <section className="bg-white pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Our Ecosystem</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
            Sponsors & <br />
            <span className="text-primary font-script lowercase text-[1.2em] relative inline-block transform -rotate-2 mt-2">
              partners
              <span className="absolute -bottom-2 w-full h-3 bg-yellow-300 -z-10 opacity-50 skew-x-12"></span>
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-body max-w-2xl mx-auto">
            Collaborating with visionary industry leaders and local communities to bridge the gender gap in technology.
          </p>
        </div>
      </section>

      {/* Sponsors Section - Royal Blue Background */}
      <section className="bg-secondary text-white py-24 px-6 rounded-t-[3rem] -mt-10 relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-6xl mx-auto">
          {/* Sponsorship */}
          <div className="mb-24">
            <div className="flex items-end gap-6 mb-12 border-b border-white/20 pb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase">Sponsorship</h2>
              <span className="font-script text-2xl text-pink-300 pb-2">Our Pillars</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sponsors.map((p, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-12 flex items-center justify-center min-h-[220px] shadow-[8px_8px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-all border-2 border-transparent hover:border-black">
                  <img className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" src={p.logo} alt={p.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div>
            <div className="flex items-end gap-6 mb-12 border-b border-white/20 pb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase">Community</h2>
              <span className="font-script text-2xl text-yellow-300 pb-2">Friends</span>
            </div>

            <div className="flex flex-wrap justify-center gap-12">
              {community.map((c, i) => (
                <div key={i} className="group relative">
                  <div className="bg-white rounded-[2rem] p-6 w-40 h-40 flex items-center justify-center mb-4 transition-all duration-300 hover:rotate-3 shadow-lg border-4 border-transparent group-hover:border-primary">
                    <img className="w-full h-full object-contain invert" src={c.img} alt={c.name} />
                  </div>
                  <div className="text-center">
                    <span className="font-bold uppercase tracking-widest text-sm text-white/90 group-hover:text-white transition-colors">{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white pt-32 pb-24 px-6 -mt-10 relative z-0">
        <div className="max-w-4xl mx-auto text-center bg-yellow-50 rounded-[3rem] p-16 border-4 border-yellow-300 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase">United by Innovation</h3>
            <div className="flex justify-center gap-8 mb-8">
              <span className="material-symbols-outlined text-5xl text-primary animate-bounce">favorite</span>
              <span className="material-symbols-outlined text-5xl text-secondary animate-bounce" style={{ animationDelay: '0.2s' }}>handshake</span>
            </div>
            <p className="text-xl text-slate-600 font-body mb-0">
              Our partners are the backbone of Tink-Her-Hack. They provide the resources, mentorship, and support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;

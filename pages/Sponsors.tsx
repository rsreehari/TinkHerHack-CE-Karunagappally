
import React from 'react';

const Sponsors: React.FC = () => {
  const sponsors = Array(2).fill({ name: "Partner", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIEHUYZV0HT_UuBQCH55cA4BsA5r2QYC47t8zkIWYttm6zKBWhMzHOQ-5uBX4LpYziAYwl4UUhMCIwxRIzahLd5npYetp9fEfjC1hVhxI5bLpaEcAdZNjD1GZnxasP5-VYjZnXO6DAQn4MJFZPW3gQ6j77-oCnyz-BVL95GeNSUsIECf1r3XmxHsixMQr_F34byVDm6qhh_hwn4GcTpxTqYOjHzzg1N34kJ3MV59wWRmq5QGLaMybWmbcVEpMxAD6RiRpyj0tQOpZ2" });

  const community = [
    { name: "Tech Ladies", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtcoC2MxElbHzy9dI6aaiE4yuiKeL7Y6TN6stwPNCsb5SGumoEkzfGwSIkF5rV_kDxFQ5jq-f9XYFA8LXVbVTMjsrBZthimHUzuPgbFe_vAcg32STY7u2S2AfbkrB3koZGrqQ9Fd2_sMsJH9WsxGPdJxKt-IVPBPrPeJNilhp-QCDmMXQz2WToEiLpck2PqWsJ-g-pLYVRQDSTEavtEkiTvzEUyu0R9kg2DvFf2WApoeTgxxYxGSW4O_6mRdIVdYO5p0NjssxrTpQd" },
    { name: "Campus Club", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHjN2_BIlrc1TIUR1k8NZgKecokQa7JMBTseUaip1muLnPiETMQCWvoZAwS53ez7lu7RLl4Whet-k1Wg7-5mnz2mF0RtoA0315s8Pfg3hTsUGAaJFEa1_FvPpopTyHGwsY583uSVr9H-t_MFcPzDhM2Aq6hbpkr9VnvuixK-W0T-FLkr75S86HmqvJ0IZZOPWeQSKkPikhRmY673akNef9z6I5n8BkXnKWPq0OrEw4Ufqc8oI0AkxOocL3iWgUWsgStVkE_ltrUkfe" }
  ];

  return (
    <div className="max-w-[1200px] mx-auto w-full px-6 py-16 md:py-24 relative overflow-hidden">
      <div className="flex flex-col items-center text-center gap-8 mb-32">
        <span className="px-5 py-1.5 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Ecosystem</span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-tight">
          Sponsors & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-berry to-primary">Partners</span>
        </h1>
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed font-light">
          Collaborating with visionary industry leaders and local communities to bridge the gender gap in technology.
        </p>
      </div>

      <section className="mb-32">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">Sponsorship</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/40 via-berry/20 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {sponsors.map((p, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-12 flex items-center justify-center min-h-[220px] group hover:border-primary/50 transition-all">
              <img className="opacity-70 group-hover:opacity-100 transition-all duration-500 brightness-0 invert h-16 w-auto object-contain" src={p.logo} alt={p.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">Our Community Partners</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-berry/40 via-primary/20 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {community.map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group">
              <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-8 group-hover:border-primary/50 transition-all">
                <img className="opacity-60 group-hover:opacity-100 transition-all duration-500 w-24 h-24 object-contain brightness-0 invert" src={c.img} alt={c.name} />
              </div>
              <span className="text-sm font-bold text-slate-500 group-hover:text-primary uppercase tracking-[0.2em] transition-colors">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-40 p-16 rounded-[3rem] bg-gradient-to-br from-primary/10 via-background-dark to-berry/10 border border-white/10 text-center relative overflow-hidden backdrop-blur-xl">
        <h3 className="text-4xl font-bold mb-6">United by Innovation</h3>
        <p className="text-slate-400 text-lg mb-0 max-w-2xl mx-auto leading-relaxed font-light">
          Our partners are the backbone of Tink-Her-Hack. They provide the resources, mentorship, and support that empower women to excel in the tech landscape.
        </p>
        <div className="mt-10 flex justify-center gap-10 opacity-40">
          <span className="material-symbols-outlined text-4xl text-primary">hub</span>
          <span className="material-symbols-outlined text-4xl text-berry">diversity_1</span>
          <span className="material-symbols-outlined text-4xl text-primary">rocket_launch</span>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;


import React from 'react';

const Projects: React.FC = () => {
  const pastProjects = [
    { id: '1', title: "SecureNet AI", icon: "shield_person", desc: "Real-time threat detection for small-scale community networks using decentralized learning.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKzB2Nt7sYbPR-D1l3Va-ZVJloinBhrPKd3SQavSpT_wgdKUzWiDNlmRT6ROlIV6PraMDy7z_rXu0qFRNLiOSNMLoaWTNZ_Ky9s7MOLy9lVL-dVX4-kPUVCaTZmmcks2AY55ElStSJ9ceYLQ_PxRFN5HWLlkn07S55jgVpMRsVfGyUT4AZ2ZZUQWyWXGjSd0MXQefA7cAt_L-HfoN645pMmdv9PzDUtOJxbyvSEe9drxnVPJ4XM2AYgbXUciiXeft0bgu0itdZHLCD" },
    { id: '2', title: "HealthHero", icon: "ecg_heart", desc: "A holistic health companion for postpartum recovery and maternal mental health support.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsHXcVI1EdNNiDOkLxsT4U8ldIaqkoFOZVknYLSms4nmdD9OUmVUXAkTSsEYoyXJZ3zzwXqml9x-VemFnSXGBpfZbcc9F2PMmMMtUcyf5CUTa9dhGIKjwjtD9CE66EJYv7PcdWL2Wjw7zoaeY4aadK6-rYfxk9ganNNeDdtOKalAbKFDQKjrXidzWLQr3XvtpUI5prhrYa6NWqHjq9kzIOnjTrv8K1zebb3qNwqfaiW_0TrpgjHPHUR6v5ae5gUJwYuXpaNhpuG3QQ" },
    { id: '3', title: "EcoSync", icon: "eco", desc: "Gamifying carbon footprint reduction through community-led sustainability challenges.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJKhM3t1f65ZVf5xPeGv_Zf_Jmw61XK50lgPGAdTswon403pIknGcGy3Hj7KlxmXqHd_XEGherDrrlu2IgTECJStb-zUM04qjYH64QzVF-colKdHcYPNxxN6Fv8DX8COgxFFN2DgkXQWCgDBVUCiUojJk-PfOYR_raMhgM_TLvTsecDdIvbh9pmz4aJv5XrvfgDwdP64nIRb5q3k5s5VVQyo5xOKBZZ1IEG1AUneY3obJYsplY01RJZa24-TzoPUv2r9EU8KmXeltn" },
    { id: '4', title: "FinTrack Plus", icon: "account_balance_wallet", desc: "Empowering female entrepreneurs with smart budgeting and micro-loan accessibility.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0i2WFe36RLTRKVPsIW6Wyh_krYlAvjtMAA9KlCmHowM4cSuBx-bqbHu8M_viK3xlytQxtidWvjxklh7ToRPLmRF56vxM0JRPJhGMEXv2TkoBnG962-dOGE4NPt9KWa05HjcyDpSKWfNmb6iwsf8VUyh0-55r7EnYs1TRY78kkdmxmM20q0V3bmBwO6w9o5PX4PTBSCvhOUqAMK2HNP90z6wEge2jMiyri-nK4MCK9suh-Up1DlozJb7m6EI6E51e6FeAxKB080JU" },
    { id: '5', title: "EduPulse", icon: "school", desc: "An adaptive learning platform designed specifically for rural educational infrastructure.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzTTPtcLODLhXXnM7cUm4w3_OQmgfJyA4PmF0Mn6C748TMMAd7MVsc7mFa_tw67FoEs2uw55S1iDDIkNKyrT_8gumvJVbnoBZThbKEhKaDdbWxDtsEX8xyag8Xt1qHqH-JEk1iZrsOQCaYXxSgvz7paTuQhyz8mi7fF9A7y85pqk_s0p1J_jYBkQ78WJK3dQRMKDPg4Dz1CiBRfeyxjPmCDHim5xXqc0fMG4Fa62Cd9lc6Sqv0Fa_tjmpKg6kSu5PHgUSuHUdrLzZN" },
    { id: '6', title: "SmartWork", icon: "nest_eco_leaf", desc: "IoT ecosystem for energy-efficient co-working spaces and resource management.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVTVVtbGI-uG7haQ1MO1PeUeVKAsOevh7a3GrLPyc6-3UcClWnlM1FcDb5CXAjwlKZmVfd2fi4GL8XRnMk1ek0jdkD4E5Kq-RfsUy3GP26sl0bQbPk8EHJ27WoibUthuJH5Yibo1yjzjpXW67PfHb5Nvb4D8SlPV4HBCH-C-fB5i-h6_Nm21Eg9Zu0Fj86vUfc3Q8uSO3FOczELu_S5XOUWS_m3I3CxNts3DvzeZtB68wpRiNw_H-bzubgnH6wDmUmkw9UF_0dZpzc" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="text-center mb-20">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Archive of Excellence</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Legacy of <span className="text-primary [text-shadow:0_0_20px_rgba(249,26,145,0.4)]">Creation</span></h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Explore the infinite wall of innovation. A curated showcase of revolutionary projects built by women-led teams during Tink-Her-Hack 4.0.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pastProjects.map((project) => (
          <div key={project.id} className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,26,145,0.2)] transition-all duration-500 cursor-pointer">
            <div className="aspect-video w-full relative overflow-hidden">
              <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="material-symbols-outlined text-primary text-2xl">{project.icon}</span>
              </div>
              <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{project.desc}</p>
              <div className="mt-6 flex items-center text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                View Case Study <span className="material-symbols-outlined text-xs ml-1">north_east</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 rounded-[2.5rem] bg-gradient-to-r from-primary to-purple-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none">
          <span className="material-symbols-outlined text-[12rem]">history_edu</span>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-black text-white mb-3">Be part of the next legacy</h2>
            <p className="text-white/80 max-w-lg text-lg">Registration for Tink-Her-Hack 4.0 is opening soon. Join thousands of creators making a difference in the world of technology.</p>
          </div>
          <a
            href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all hover:-translate-y-1 whitespace-nowrap block"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

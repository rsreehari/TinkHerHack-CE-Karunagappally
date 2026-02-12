import React from 'react';

const Projects: React.FC = () => {
  const pastProjects = [
    { id: '1', title: "BuzzCampus", icon: "campaign", desc: "A dynamic campus buzz and announcement platform keeping students connected.", url: "https://buzz-campus.vercel.app/" },
    { id: '2', title: "Fit and Hue", icon: "fitness_center", desc: "A comprehensive fitness companion that blends health tracking with lifestyle.", url: "https://github.com/ithasleema/FIT-HUE" },
    { id: '3', title: "Glucopredict", icon: "vital_signs", desc: "Advanced glucose prediction tool helping users manage their health proactively.", url: "https://glucopredict.vercel.app" },
    { id: '4', title: "Its-4-me", icon: "person", desc: "A personalized utility application designed to streamline your daily tasks.", url: "https://its-4-me.vercel.app/" },
    { id: '5', title: "Mood Tracker", icon: "sentiment_satisfied", desc: "Track your daily moods and gain insights into your emotional well-being.", url: "https://mood-tracker-inky-omega.vercel.app/" },
    { id: '6', title: "Mooood Mooosic", icon: "music_note", desc: "A unique music player that recommends songs based on your current mood.", url: "https://github.com/Mahitha2004/Mooooooood_moosic" },
    { id: '7', title: "Petvista", icon: "pets", desc: "The ultimate platform for pet owners to find resources and community.", url: "https://petvista.vercel.app" },
    { id: '8', title: "Sponsor Space", icon: "handshake", desc: "Connecting event organizers with potential sponsors in a seamless space.", url: "https://reloop-ashy.vercel.app/" },
    { id: '9', title: "Voyage", icon: "flight_takeoff", desc: "Your personal travel companion to plan and discover your next journey.", url: "https://voyage-rose.vercel.app/" }
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
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,26,145,0.2)] transition-all duration-500 block flex flex-col h-full"
          >
            <div className="h-40 w-full relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 group-hover:from-primary/20 group-hover:to-purple-900/20 transition-all duration-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-white/20 group-hover:text-primary transition-all duration-500 scale-100 group-hover:scale-110">{project.icon}</span>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="material-symbols-outlined text-primary text-xl opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
              </div>
              <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed flex-1">{project.desc}</p>
              <div className="mt-6 flex items-center text-xs font-bold text-primary uppercase tracking-widest">
                View Project <span className="material-symbols-outlined text-xs ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </a>
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

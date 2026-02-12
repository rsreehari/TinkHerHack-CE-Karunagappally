
import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const pastProjects = [
    { title: "BuzzCampus", icon: "campaign", desc: "A dynamic campus buzz and announcement platform keeping students connected.", url: "https://buzz-campus.vercel.app/" },
    { title: "Fit and Hue", icon: "fitness_center", desc: "A comprehensive fitness companion that blends health tracking with lifestyle.", url: "https://github.com/ithasleema/FIT-HUE" },
    { title: "Glucopredict", icon: "vital_signs", desc: "Advanced glucose prediction tool helping users manage their health proactively.", url: "https://glucopredict.vercel.app" },
    { title: "Its-4-me", icon: "person", desc: "A personalized utility application designed to streamline your daily tasks.", url: "https://its-4-me.vercel.app/" },
    { title: "Mood Tracker", icon: "sentiment_satisfied", desc: "Track your daily moods and gain insights into your emotional well-being.", url: "https://mood-tracker-inky-omega.vercel.app/" },
    { title: "Mooood Mooosic", icon: "music_note", desc: "A unique music player that recommends songs based on your current mood.", url: "https://github.com/Mahitha2004/Mooooooood_moosic" },
    { title: "Petvista", icon: "pets", desc: "The ultimate platform for pet owners to find resources and community.", url: "https://petvista.vercel.app" },
    { title: "Sponsor Space", icon: "handshake", desc: "Connecting event organizers with potential sponsors in a seamless space.", url: "https://reloop-ashy.vercel.app/" },
    { title: "Voyage", icon: "flight_takeoff", desc: "Your personal travel companion to plan and discover your next journey.", url: "https://voyage-rose.vercel.app/" }
  ];

  return (
    <div className="w-full font-display">
      {/* Header Section - Blue Background */}
      <section className="bg-secondary pt-24 pb-16 px-6 text-center text-white relative overflow-hidden rounded-b-[2.5rem] shadow-lg">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
            Archive of Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase relative z-10">
            Legacy of <span className="font-script text-yellow-300 transform -rotate-3 inline-block">Creation</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-body px-4">
            A curated showcase of revolutionary projects built by women-led teams.
          </p>
        </div>
        {/* Floating Icons Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <span className="material-symbols-outlined absolute top-10 left-10 text-6xl animate-bounce">rocket_launch</span>
          <span className="material-symbols-outlined absolute bottom-20 right-10 text-8xl animate-pulse">code</span>
        </div>
      </section>

      {/* Grid Section - White Background */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastProjects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white border-4 border-black rounded-[2rem] p-8 flex flex-col hover:shadow-[8px_8px_0px_#FF1493] transition-all duration-300 relative overflow-hidden h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-yellow-300 rounded-2xl flex items-center justify-center border-2 border-black group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-black">{project.icon}</span>
                </div>
                <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-black transition-colors -rotate-45 group-hover:rotate-0">arrow_forward</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase leading-tight">{project.title}</h3>
              <p className="text-slate-600 font-body text-sm leading-relaxed mb-4 flex-grow">{project.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Call to Action Card */}
        <div className="max-w-4xl mx-auto mt-20 px-4">
          <div className="bg-primary text-white p-10 md:p-16 text-center rounded-[3rem] border-4 border-black relative overflow-hidden shadow-[12px_12px_0px_#000]">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Be part of the <br /><span className="font-script text-yellow-300">next legacy</span></h2>

              <a href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black text-lg md:text-xl font-bold px-8 py-4 rounded-xl shadow-[6px_6px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#000] transition-all border-2 border-black mt-4">
                REGISTER NOW
              </a>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] text-white opacity-10 rotate-12">history_edu</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

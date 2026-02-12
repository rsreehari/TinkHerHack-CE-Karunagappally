import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="w-full font-display">
      {/* Header Section - Blue Background */}
      <section className="bg-secondary pt-32 pb-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 blur-[50px] rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/20 blur-[60px] rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Archive of Excellence
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
            Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 relative">Creation
              <svg className="absolute w-full h-8 -bottom-2 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-body">
            Explore the infinite wall of innovation. A curated showcase of revolutionary projects built by women-led teams.
          </p>
        </div>
      </section>

      {/* Grid Section - White Background */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastProjects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "10px 10px 0px rgba(65, 105, 225, 0.2)" }}
              className="group bg-surface-highlight border-2 border-slate-100 rounded-[2rem] p-8 flex flex-col hover:border-secondary transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform text-secondary border border-slate-100">
                <span className="material-symbols-outlined text-3xl">{project.icon}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
              <p className="text-slate-500 font-body leading-relaxed mb-8 line-clamp-3">{project.desc}</p>

              <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">View Project</span>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action Card in Grid */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[12px_12px_0px_#4169E1] border-4 border-black">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Be part of the next <span className="font-script text-yellow-300 transform -rotate-3 inline-block">legacy</span></h2>
              <p className="text-lg font-medium max-w-2xl mx-auto opacity-90">Registration for Tink-Her-Hack 4.0 is opening soon. Join thousands of creators making a difference.</p>

              <a href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black text-xl font-bold px-10 py-5 rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all border-2 border-black">
                REGISTER NOW
              </a>
            </div>

            {/* Decorative Background Icon */}
            <span className="material-symbols-outlined absolute -bottom-20 -right-20 text-[20rem] text-white opacity-10 rotate-12">history_edu</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

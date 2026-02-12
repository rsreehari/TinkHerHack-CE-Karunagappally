
import React from 'react';

const Timeline: React.FC = () => {
  const events = [
    { time: "Now", title: "Registration Open", desc: "Secure your spot immediately! Limited seats available.", align: 'bottom', active: true },
    { time: "05:00 PM", title: "Arrival & Registration", desc: "Venue opens. Check-in and get ready.", align: 'top', day: "Feb 20" },
    { time: "05:30 PM", title: "Opening Ceremony", desc: "Welcome address and brief.", align: 'bottom' },
    { time: "06:00 PM", title: "Hacking Begins", desc: "The 18-hour sprint kicks off!", align: 'top' },
    { time: "10:00 PM", title: "Dinner & Mentoring", desc: "Refuel and get feedback.", align: 'bottom' },
    { time: "01:00 AM", title: "Midnight Fun", desc: "Games and energy boosters.", align: 'top', day: "Feb 21" },
    { time: "08:00 AM", title: "Breakfast", desc: "Morning recharge.", align: 'bottom' },
    { time: "12:00 PM", title: "Hacking Ends", desc: "Stop coding! Submit projects.", align: 'top' },
    { time: "01:00 PM", title: "Judging & Closing", desc: "Demos and winners.", align: 'bottom', icon: 'emoji_events' }
  ];

  return (
    <div className="min-h-screen bg-white font-display overflow-x-hidden">
      {/* Header */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <span className="inline-block py-2 px-5 rounded-full bg-secondary text-white border-2 border-black text-sm font-bold tracking-widest uppercase mb-6 shadow-[4px_4px_0px_#000]">18-Hour Sprint</span>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 uppercase leading-[0.9]">
          The Journey of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative inline-block">
            Innovation
            <svg className="absolute w-full h-6 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
            </svg>
          </span>
        </h1>
        <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
          Navigate through the cosmos of creativity. From the first spark of an idea to the final pitch.
        </p>
      </section>

      {/* Roadmap Section */}
      <section className="relative w-full pb-32 bg-slate-50 border-y-4 border-black">
        {/* Scrollable Track */}
        <div className="overflow-x-auto pb-12 cursor-grab active:cursor-grabbing px-[5%] relative pt-20 hide-scrollbar">

          {/* Central Line */}
          <div className="absolute h-4 bg-black w-[2500px] top-1/2 -translate-y-1/2 z-0 rounded-full"></div>

          <div className="flex gap-20 relative z-10 py-20 px-10 w-max mx-auto">
            {events.map((event, idx) => (
              <div key={idx} className="relative flex flex-col items-center w-[280px]">

                {/* Top Card */}
                <div className={`transition-all duration-300 w-full ${event.align === 'top' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <div className={`bg-white border-4 border-black p-6 rounded-[2rem] shadow-[8px_8px_0px_#4169E1] hover:-translate-y-2 transition-transform duration-300 h-[180px] flex flex-col justify-between mb-8 relative group`}>
                    {event.day && <span className="absolute -top-4 -right-4 bg-yellow-300 text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase rounded-full transform rotate-12 group-hover:rotate-0 transition-transform">{event.day}</span>}
                    <div>
                      <div className="text-primary font-black text-xl mb-1">{event.time.split(' ')[0]} <span className="text-sm text-slate-400">{event.time.split(' ')[1]}</span></div>
                      <h4 className="text-xl font-bold text-slate-900 leading-tight">{event.title}</h4>
                    </div>
                    <p className="text-slate-500 font-medium text-sm leading-snug">{event.desc}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className={`w-10 h-10 rounded-full border-4 border-black relative z-10 transition-all duration-300 ${event.active ? 'bg-primary scale-125' : 'bg-white hover:scale-110'}`}>
                  {event.active && <div className="absolute -inset-2 rounded-full border-2 border-primary animate-ping opacity-20"></div>}
                </div>

                {/* Bottom Card */}
                <div className={`transition-all duration-300 w-full ${event.align === 'bottom' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                  <div className={`bg-white border-4 border-black p-6 rounded-[2rem] shadow-[8px_8px_0px_#FF1493] hover:-translate-y-2 transition-transform duration-300 h-[180px] flex flex-col justify-between mt-8 relative group`}>
                    {event.icon && <span className="absolute -bottom-4 -right-4 bg-black text-white p-3 rounded-full flex items-center justify-center transform -rotate-12"><span className="material-symbols-outlined">{event.icon}</span></span>}
                    <div>
                      <div className="text-secondary font-black text-xl mb-1">{event.time.split(' ')[0]} <span className="text-sm text-slate-400">{event.time.split(' ')[1]}</span></div>
                      <h4 className="text-xl font-bold text-slate-900 leading-tight">{event.title}</h4>
                    </div>
                    <p className="text-slate-500 font-medium text-sm leading-snug">{event.desc}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-yellow-300 border-4 border-black p-12 md:p-16 rounded-[3rem] relative shadow-[12px_12px_0px_#000]">
          <h2 className="text-5xl font-black uppercase mb-6 text-black">Ready to Hack?</h2>
          <p className="text-xl font-bold text-black/80 mb-10 max-w-lg mx-auto">Don't miss South India's largest women-centric hackathon.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0" target="_blank" className="bg-black text-white text-xl font-bold px-10 py-4 rounded-xl shadow-[4px_4px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-transparent">
              REGISTER NOW
            </a>
            <a href="/THH_PPT.pdf" download="TinkHerHack_Guide.pdf" className="bg-white text-black text-xl font-bold px-10 py-4 rounded-xl border-4 border-black hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">download</span>
              VIEW GUIDE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;

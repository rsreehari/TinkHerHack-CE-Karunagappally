
import React from 'react';

const Timeline: React.FC = () => {
  const events = [
    { time: "08:00 AM (Feb 20)", title: "Arrival & Identification", desc: "Report to your venue. Check-in and get settled.", align: 'top' },
    { time: "09:30 AM", title: "Opening Ceremony", desc: "Keynote speeches and problem statement release.", align: 'bottom' },
    { time: "11:00 AM", title: "Hacking Begins", desc: "The clock starts! 18 hours (Overnight) or 9 hours (Day).", align: 'top', active: true },
    { time: "03:00 PM", title: "Mentor Checkpoint", desc: "Get feedback on your idea and implementation.", align: 'bottom' },
    { time: "09:00 PM", title: "Dinner & Games", desc: "Recharge with food and fun activities.", align: 'top' },
    { time: "12:00 AM (Feb 21)", title: "Midnight Code", desc: "The overnight grind continues for 18h participants.", align: 'bottom' },
    { time: "08:00 AM", title: "Submission Deadline", desc: "Final commits! Upload to GitHub and submit on TinkerHub App.", align: 'top' },
    { time: "10:00 AM", title: "Judging & Awards", desc: "Present your projects and celebrate the winners!", align: 'bottom', icon: 'emoji_events' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#230f1a] to-background-dark overflow-x-hidden">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">18-Hour Sprint</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">The Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Innovation</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Navigate through the cosmos of creativity. From the first spark of an idea to the final pitch, witness the evolution of 400+ hackers.
        </p>
      </section>

      {/* Roadmap Section */}
      <section className="relative w-full pb-32">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-bold">Event Roadmap</h3>
            <p className="text-primary text-sm font-medium">Stage 3: Deep Hacking in progress</p>
          </div>
          <div className="text-right">
            <p className="text-slate-500 text-sm mb-2 uppercase tracking-widest font-bold">Total Duration</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black">18</span>
              <span className="text-slate-500 text-xs text-left leading-tight uppercase font-bold">Hours of<br />Code</span>
            </div>
          </div>
        </div>

        {/* Scrollable Track */}
        <div className="overflow-x-auto pb-12 cursor-grab active:cursor-grabbing px-[10%] relative">
          <div className="absolute h-1 bg-primary/20 w-[3000px] top-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute h-1 bg-gradient-to-r from-primary to-purple-500 w-[1200px] top-1/2 -translate-y-1/2 z-0 shadow-[0_0_20px_rgba(249,26,145,0.6)]"></div>

          <div className="flex gap-40 relative z-10 pr-64 py-32">
            {events.map((event, idx) => (
              <div key={idx} className="relative flex flex-col items-center min-w-[300px]">
                {event.align === 'top' && (
                  <div className={`bg-[#2b0f1d66] backdrop-blur-md p-6 rounded-2xl w-72 mb-12 transform hover:-translate-y-2 transition-transform shadow-2xl border ${event.active ? 'border-primary ring-4 ring-primary/10' : 'border-white/10'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-primary font-bold text-xs">{event.time}</span>
                      {event.active && <span className="material-symbols-outlined text-primary text-sm animate-pulse">sensors</span>}
                    </div>
                    <h4 className="text-lg font-bold">{event.title}</h4>
                    <p className="text-sm text-slate-400 mt-2">{event.desc}</p>
                  </div>
                )}

                <div className={`size-6 rounded-full border-4 border-background-dark relative ${event.active ? 'bg-white scale-125 animate-pulse' : 'bg-primary'} shadow-[0_0_15px_rgba(249,26,145,0.8)]`}>
                  {event.active && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold whitespace-nowrap">YOU ARE HERE</div>
                  )}
                  {event.icon && (
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-primary">
                      <span className="material-symbols-outlined text-xl">{event.icon}</span>
                    </div>
                  )}
                </div>

                {event.align === 'bottom' && (
                  <div className="bg-[#2b0f1d66] backdrop-blur-md p-6 rounded-2xl w-72 mt-12 transform hover:translate-y-2 transition-transform shadow-2xl border border-white/10">
                    <span className="text-primary font-bold text-xs">{event.time}</span>
                    <h4 className="text-lg font-bold mt-1">{event.title}</h4>
                    <p className="text-sm text-slate-400 mt-2">{event.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3 text-slate-500 text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined animate-bounce">chevron_left</span>
            Drag to explore the timeline
            <span className="material-symbols-outlined animate-bounce">chevron_right</span>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-white/5 border border-white/10 p-12 rounded-3xl text-center relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-[10rem]">rocket_launch</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Ready to hack?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Registration for Tink-Her-Hack 4.0 is closing soon. Don't miss your chance to be part of South India's largest women-centric hackathon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all">Join the Revolution</button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">Download Guide</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;

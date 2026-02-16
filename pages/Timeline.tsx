import React, { useRef } from 'react';
import confetti from 'canvas-confetti';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Timeline: React.FC = () => {
  const events = [
    { time: "04:30 PM", title: "Registration & Check-in", desc: "Get verified and grab your swag!", day: "Feb 20" },
    { time: "05:00 PM", title: "Official Inauguration", desc: "Welcome address and kickoff." },
    { time: "05:30 PM", title: "Hackathon Briefing", desc: "Guidelines, rules, and Q&A." },
    { time: "06:30 PM", title: "Hackathon Starts", desc: "The coding marathon begins!" },
    { time: "08:00 PM", title: "Dinner Break", desc: "Refuel and network." },
    { time: "10:30 PM", title: "Check-in 1", desc: "First progress update." },
    { time: "05:30 AM", title: "Check-in 2", desc: "75% Completion Target.", day: "Feb 21" },
    { time: "10:00 AM", title: "Project Submission", desc: "Upload your code and demos." },
    { time: "10:30 AM", title: "Presentations", desc: "Evaluation and judging round." },
    { time: "11:30 AM", title: "Winners Announcement", desc: "Revealing the champions!", icon: 'emoji_events' },
    { time: "11:35 AM", title: "Award Ceremony", desc: "Closing remarks and prizes." },
    { time: "11:55 AM", title: "Group Photo", desc: "Capturing the moment." }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-white font-display overflow-x-hidden">
      {/* Header */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <span className="inline-block py-2 px-5 rounded-full bg-secondary text-white border-2 border-black text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-[4px_4px_0px_#000]">18-Hour Sprint</span>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 uppercase leading-[0.9]">
          The Journey of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative inline-block">
            Innovation
            <svg className="absolute w-full h-4 md:h-6 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
            </svg>
          </span>
        </h1>
      </section>

      {/* Vertical Timeline Section */}
      <section className="relative w-full pb-24 px-4 md:px-0 bg-slate-50 border-y-4 border-black overflow-hidden" ref={containerRef}>
        <div className="max-w-4xl mx-auto relative pt-12 md:pt-20">

          {/* Vertical Central Line Wrapper - Fixed Alignment */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:w-2 bg-slate-200 transform -translate-x-1/2 z-0 rounded-full overflow-hidden">
            {/* Dynamic Line Fill */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-black origin-top absolute top-0 left-0"
            />
          </div>

          <div className="flex flex-col gap-12 relative z-10 pb-12">
            {events.map((event, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}>

                {/* Desktop: Spacer */}
                <div className="hidden md:block w-1/2"></div>

                {/* Line Mask for Last Item */}
                {idx === events.length - 1 && (
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-1/2 w-4 md:w-6 h-[500px] bg-slate-50 z-10 pointer-events-none" />
                )}

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                >
                  <div
                    onClick={() => (idx === events.length - 1 || event.title === "Winners Announcement") && confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } })}
                    className={`bg-white border-4 border-black p-6 rounded-[2rem] shadow-[6px_6px_0px_#4169E1] md:shadow-[8px_8px_0px_#4169E1] md:hover:-translate-y-1 active:scale-95 transition-transform duration-300 relative group cursor-pointer`}
                  >

                    {event.day && (
                      <span className={`absolute -top-3 ${idx % 2 === 0 ? 'right-4 md:left-4 md:right-auto' : 'right-4'} bg-yellow-300 text-black border-2 border-black px-3 py-1 text-[10px] md:text-xs font-bold uppercase rounded-full`}>
                        {event.day}
                      </span>
                    )}

                    <div className="mb-2">
                      <div className="text-secondary font-black text-lg md:text-xl mb-1">{event.time}</div>
                      <h4 className="text-lg md:text-2xl font-bold text-slate-900 leading-tight">{event.title}</h4>
                    </div>
                    <p className="text-slate-500 font-medium text-sm md:text-base leading-snug">{event.desc}</p>

                    {event.icon && (
                      <div className="absolute -bottom-3 -right-3 bg-black text-white p-2 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">{event.icon}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center relative z-20">
        <div className="bg-yellow-300 border-4 border-black p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] relative shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000]">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 md:mb-6 text-black">Ready to Hack?</h2>
          <p className="text-lg md:text-xl font-bold text-black/80 mb-8 max-w-lg mx-auto">Don't miss South India's largest women-centric hackathon.</p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="https://tinkerhub.org/events/V3AFAR17E1/tink-her-hack-4.0" target="_blank" className="bg-black text-white text-lg md:text-xl font-bold px-8 py-3 md:px-10 md:py-4 rounded-xl shadow-[4px_4px_0px_#fff] md:hover:translate-x-[2px] md:hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all border-2 border-transparent">
              REGISTER NOW
            </a>
            <a href="https://www.notion.so/tinkerhub-foundation/Tink-Her-Hack-by-TinkerHub-186bd5ba1a868023a9e8f05853d6334a" target="_blank" className="bg-white text-black text-lg md:text-xl font-bold px-8 py-3 md:px-10 md:py-4 rounded-xl border-4 border-black md:hover:bg-slate-50 active:bg-slate-200 transition-all flex items-center justify-center gap-2">
              HANDBOOK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;

import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = (): TimeLeft => {
        // Target date: February 20, 2026 at 5:00 PM IST
        const difference = +new Date('2026-02-20T17:00:00+05:30') - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const intervals: (keyof TimeLeft)[] = ['days', 'hours', 'minutes', 'seconds'];

    const timerComponents = intervals.map((interval) => {
        return (
            <div key={interval} className="flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3 py-3 min-w-[72px] md:p-3 md:min-w-[80px]">
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display">
                    {timeLeft[interval].toString().padStart(2, '0')}
                </span>
                <span className="text-xs md:text-xs text-slate-400 uppercase tracking-wider">{interval}</span>
            </div>
        );
    });

    return (
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-xl text-slate-300 font-medium">Event Starts In</h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {timerComponents.length ? timerComponents : <span className="text-xl md:text-2xl font-bold text-white">Event Started!</span>}
            </div>
        </div>
    );
};

export default CountdownTimer;

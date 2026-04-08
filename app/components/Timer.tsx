'use client';

import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <div className="h-20 animate-pulse bg-gray-800 rounded-lg w-full max-w-sm mx-auto" />;

  return (
    <div className="flex justify-center gap-4 text-3xl font-mono font-bold">
      <div className="bg-gray-800 p-3 rounded-lg w-20">
        {String(timeLeft.hours).padStart(2, '0')}
        <span className="block text-[10px] text-gray-500 uppercase mt-1">Horas</span>
      </div>
      <div className="bg-gray-800 p-3 rounded-lg w-20">
        {String(timeLeft.minutes).padStart(2, '0')}
        <span className="block text-[10px] text-gray-500 uppercase mt-1">Min</span>
      </div>
      <div className="bg-gray-800 p-3 rounded-lg w-20">
        {String(timeLeft.seconds).padStart(2, '0')}
        <span className="block text-[10px] text-gray-500 uppercase mt-1">Seg</span>
      </div>
    </div>
  );
}

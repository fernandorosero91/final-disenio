'use client';

import { useState, useEffect } from 'react';

export function useCountdown(hours: number) {
  const [time, setTime] = useState(hours * 3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t > 0 ? t - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(time / 3600)).padStart(2, '0');
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const s = String(time % 60).padStart(2, '0');

  return `${h}:${m}:${s}`;
}

'use client';

import { useCountdown } from '@/lib/hooks/useCountdown';

interface CountdownTimerProps {
  hours: number;
}

export function CountdownTimer({ hours }: CountdownTimerProps) {
  const time = useCountdown(hours);

  return (
    <div className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white px-3 py-1 rounded-full text-sm font-medium">
      <span>Termina en:</span>
      <span className="font-mono font-bold">{time}</span>
    </div>
  );
}

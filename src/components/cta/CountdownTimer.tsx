import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 text-sm font-medium">
      <Clock className="h-4 w-4 text-primary" />
      <span>Offer ends in:</span>
      <div className="flex items-center space-x-1">
        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span>:</span>
        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span>:</span>
        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
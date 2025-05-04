'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  number: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({ number, label, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number, 10);
  const countRef = useRef<number>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;
    
    countRef.current = 0;
    setCount(0);
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      const nextCount = Math.floor(progress * targetNumber);
      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };
    
    requestAnimationFrame(step);
  }, [inView, targetNumber, duration]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-[#0b90d8]/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#0b90d8]/30">
      <p className="text-4xl font-bold text-[#0b90d8] mb-2 transition-all">{count}</p>
      <p className="text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Partner {
  name: string;
  logo: string;
}

interface InfiniteLogoSliderProps {
  partners: Partner[];
}

export function InfiniteLogoSlider({ partners }: InfiniteLogoSliderProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector('.slider-container') as HTMLElement;
      if (container) {
        setWidth(container.scrollWidth - container.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="slider-container overflow-hidden relative w-full">
      <motion.div
        className="flex gap-8 py-4"
        animate={{
          x: [-width, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...partners, ...partners].map((partner, index) => (

            <div>

          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#0b90d8]/10 hover:border-[#0b90d8]/30 transition-all duration-300 hover:shadow-xl min-w-[200px] h-[100px] flex items-center justify-center"
            >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={150}
              height={60}
              className="object-contain max-h-[60px] w-auto filter dark:brightness-0 dark:invert transition-all duration-300"
              />


          </div>
          <h1></h1>
              </div>
        ))}
      </motion.div>
    </div>
  );
}
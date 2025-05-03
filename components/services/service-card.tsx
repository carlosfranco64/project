"use client";

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { DivideIcon } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ServiceProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  color: string;
  image: string;
}

interface ServiceCardProps {
  service: ServiceProps;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon, title, description, items, color, image } = service;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "animate-on-scroll opacity-0 transition-all duration-500 ease-out", 
        "translate-y-8",
        { "delay-100": index % 3 === 0 },
        { "delay-200": index % 3 === 1 },
        { "delay-300": index % 3 === 2 }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Top image */}
        <div className="h-40 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-80 z-10`}></div>
          <Image 
            src={image || "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
            <Icon 
              className={cn(
                "w-12 h-12 text-white transform transition-all duration-300",
                isHovered ? "scale-110 rotate-3" : ""
              )} 
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
          
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Incluye:</h4>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                <span 
                  className={cn(
                    `w-2 h-2 rounded-full mr-2 transition-all duration-300`,
                    isHovered ? `bg-gradient-to-r ${color}` : 'bg-[#0b90d8]'
                  )} 
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
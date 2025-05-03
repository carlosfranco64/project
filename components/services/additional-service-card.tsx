"use client";

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { DivideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdditionalServiceProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface AdditionalServiceCardProps {
  service: AdditionalServiceProps;
  index: number;
}

export function AdditionalServiceCard({ service, index }: AdditionalServiceCardProps) {
  const { icon: Icon, title, description, color } = service;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "animate-on-scroll opacity-0 transition-all duration-500 ease-out", 
        "translate-y-8",
        { "delay-100": index % 5 === 0 },
        { "delay-200": index % 5 === 1 },
        { "delay-300": index % 5 === 2 },
        { "delay-400": index % 5 === 3 },
        { "delay-500": index % 5 === 4 }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "group relative flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-xl",
          "p-4 h-full min-h-[140px] text-center overflow-hidden shadow hover:shadow-lg transition-all duration-300"
        )}
      >
        {/* Circular background decoration */}
        <div 
          className={cn(
            "absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full opacity-0",
            isHovered ? "opacity-10" : "",
            color,
            "transition-all duration-500 ease-out"
          )}
        ></div>
        
        <div className={cn(
          "w-12 h-12 rounded-full mb-3 flex items-center justify-center",
          "transition-all duration-300 transform", 
          isHovered ? "scale-110" : "",
          color + " bg-opacity-20 dark:bg-opacity-30"
        )}>
          <Icon 
            className={cn(
              "w-6 h-6 text-opacity-90 transition-all duration-300 transform",
              color.replace('bg-', 'text-'),
              isHovered ? "rotate-12" : ""
            )} 
          />
        </div>
        
        <h3 className="text-sm font-semibold text-[#141c4c] dark:text-white">{title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );
}
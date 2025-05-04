'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { 
  Book, 
  HeartPulse, 
  Leaf, 
  Sprout, 
  Truck, 
  Compass 
} from 'lucide-react';

interface InnovationSectorBadgeProps {
  sector: string;
  index: number;
}

export function InnovationSectorBadge({ sector, index }: InnovationSectorBadgeProps) {
  const getIconForSector = (sector: string) => {
    switch(sector.toLowerCase()) {
      case 'educación': return <Book className="mr-2 h-4 w-4" />;
      case 'salud': return <HeartPulse className="mr-2 h-4 w-4" />;
      case 'medio ambiente': return <Leaf className="mr-2 h-4 w-4" />;
      case 'agricultura': return <Sprout className="mr-2 h-4 w-4" />;
      case 'logística': return <Truck className="mr-2 h-4 w-4" />;
      case 'turismo': return <Compass className="mr-2 h-4 w-4" />;
      default: return null;
    }
  };

  // Alternate colors for variety
  const colors = [
    'from-[#0b90d8] to-[#1976d2]',
    'from-[#0b90d8] to-[#7B1FA2]',
    'from-[#0b90d8] to-[#00796B]',
    'from-[#0b90d8] to-[#F57C00]',
    'from-[#0b90d8] to-[#303F9F]',
    'from-[#0b90d8] to-[#00ACC1]',
  ];

  const colorClass = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        'py-3 px-5 rounded-full text-white font-medium shadow-lg flex items-center',
        'bg-gradient-to-r', colorClass,
        'hover:shadow-xl transition-all duration-300'
      )}
    >
      {getIconForSector(sector)}
      <span>{sector}</span>
    </motion.div>
  );
}
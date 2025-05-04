'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ResearchLineCardProps {
  line: string;
  details?: string;
}

export function ResearchLineCard({ line, details }: ResearchLineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-5 rounded-lg shadow-md border border-[#0b90d8]/10 cursor-pointer overflow-hidden"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center">
        <div className="w-3 h-3 bg-gradient-to-br from-[#0b90d8] to-[#1976d2] rounded-full mr-4" />
        <p className="text-gray-800 dark:text-gray-200 flex-grow font-medium">{line}</p>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="text-[#0b90d8] h-5 w-5" />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isExpanded && details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-600 dark:text-gray-400">{details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProjectType } from '@/components/projects/project-data';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group overflow-hidden bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm border border-white/40 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />
          
          <motion.div 
            className="absolute right-4 bottom-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-[#141c4c] dark:text-white h-10 w-10 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>
        </div>
        
        <CardContent className="p-6 relative">
          <div className="absolute -top-10 left-4">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-[#0b90d8] dark:text-[#0b90d8] px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-white/20 dark:border-gray-700/30">
              {project.category || 'Software'}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-3 transition-colors">
            {project.name}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {project.tags?.map((tag, i) => (
                  <span 
                    key={i} 
                    className="inline-block bg-[#141c4c]/5 dark:bg-[#0b90d8]/20 text-[#141c4c] dark:text-[#0b90d8] text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-[#0b90d8] dark:text-[#0b90d8] hover:text-[#141c4c] dark:hover:text-white p-0 h-auto"
              >
                <span className="text-sm">Ver más</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
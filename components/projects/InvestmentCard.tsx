'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Globe, DollarSign, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InvestmentType } from '@/components/projects/project-data';

interface InvestmentCardProps {
  investment: InvestmentType;
  index: number;
}

export function InvestmentCard({ investment, index }: InvestmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
    >
      <Card className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-white/40 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-8 relative h-full">
          <div className="absolute -top-5 left-8">
            <div className="bg-gradient-to-r from-[#141c4c] to-[#0b90d8] text-white h-10 w-10 rounded-full flex items-center justify-center shadow-md">
              <BarChart3 className="h-5 w-5" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-[#141c4c] dark:text-white mt-3 mb-4 flex items-center">
            {investment.name}
            <motion.span 
              className="ml-2 inline-block"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="h-5 w-5 text-[#0b90d8]" />
            </motion.span>
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 border-l-2 border-[#0b90d8]/50 pl-3 italic">
            {investment.description}
          </p>
          
          <div className="space-y-4 text-sm mb-6">
            <div className="flex items-center p-3 bg-[#141c4c]/5 dark:bg-[#141c4c]/10 rounded-lg">
              <DollarSign className="h-5 w-5 text-[#0b90d8] mr-3 flex-shrink-0" />
              <div>
                <span className="text-gray-500 dark:text-gray-400 block text-xs">Inversión requerida</span>
                <strong className="text-[#141c4c] dark:text-white text-base">
                  {investment.investment}
                </strong>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-[#0b90d8]/5 dark:bg-[#0b90d8]/10 rounded-lg">
              <Globe className="h-5 w-5 text-[#141c4c] dark:text-[#0b90d8] mr-3 flex-shrink-0" />
              <div>
                <span className="text-gray-500 dark:text-gray-400 block text-xs">Mercado objetivo</span>
                <strong className="text-[#141c4c] dark:text-white text-base">
                  {investment.market}
                </strong>
              </div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="mt-2 w-full border-[#0b90d8] text-[#0b90d8] hover:bg-[#0b90d8]/10 dark:border-[#0b90d8] dark:text-[#0b90d8] dark:hover:bg-[#0b90d8]/10"
          >
            Solicitar detalles
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
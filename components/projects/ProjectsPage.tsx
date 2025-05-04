'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, CheckCircle, Lightbulb, PenTool, Zap, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { ProjectCard } from '@/components/projects/ProjectCard';
import { InvestmentCard } from '@/components/projects/InvestmentCard';
import { projectCategories, investments } from '@/components/projects/project-data';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('inProgress');
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#eef5ff] to-[#e6f1f8] dark:from-[#0f172a] dark:via-[#0f1a2a] dark:to-[#111827]">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute w-[500px] h-[500px] top-10 -right-64 rounded-full opacity-30 bg-gradient-radial from-blue-300/20 to-transparent dark:from-blue-500/10" 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] bottom-20 -left-80 rounded-full opacity-20 bg-gradient-radial from-purple-300/20 to-transparent dark:from-purple-600/10" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]" />
        
        {/* Accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[30%] right-[10%] w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl"
        />
      </div>

      {/* Main content */}
      <section className="w-full pt-28 pb-20 md:py-32 lg:py-40 relative">
        <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center space-y-5 text-center mb-16"
          >
            <Badge className="px-4 py-2 bg-[#141c4c]/10 text-[#141c4c] dark:bg-[#0b90d8]/20 dark:text-[#0b90d8] rounded-full font-medium text-sm mb-2">
              PORTAFOLIO
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#141c4c] to-[#0b90d8] dark:from-white dark:to-[#0b90d8]">
                Nuestros proyectos
              </span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre nuestra cartera de proyectos innovadores que están 
              <span className="relative inline-block px-2 mx-1">
                <span className="relative z-10">transformando</span>
                <motion.span 
                  className="absolute inset-0 bg-[#0b90d8]/10 dark:bg-[#0b90d8]/20 rounded-md -rotate-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                />
              </span>
              el futuro digital
            </motion.p>
            
            <motion.div 
              className="flex gap-3 mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <TrendingUp size={16} />
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  <CheckCircle size={16} />
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <Lightbulb size={16} />
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 self-center">
                +15 proyectos activos
              </span>
            </motion.div>
          </motion.div>

          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-0">
            <Tabs 
              defaultValue="inProgress" 
              className="mt-8"
              onValueChange={setActiveTab}
            >
              <div className="flex justify-center mb-12">
                <TabsList className="w-full max-w-2xl mx-auto flex justify-center gap-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full p-1.5 border border-white/20 dark:border-gray-700/30 shadow-sm">
                  <TabsTrigger
                    value="inProgress"
                    className="rounded-full text-sm md:text-base py-2.5 px-5 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#141c4c] data-[state=active]:to-[#0b90d8] data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    En ejecución
                  </TabsTrigger>
                  <TabsTrigger
                    value="completed"
                    className="rounded-full text-sm md:text-base py-2.5 px-5 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#141c4c] data-[state=active]:to-[#0b90d8] data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Ejecutados
                  </TabsTrigger>
                  <TabsTrigger
                    value="prototypes"
                    className="rounded-full text-sm md:text-base py-2.5 px-5 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#141c4c] data-[state=active]:to-[#0b90d8] data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Prototipos
                  </TabsTrigger>
                </TabsList>
              </div>
                
              {Object.entries(projectCategories).map(([category, projects]) => (
                <TabsContent key={category} value={category}>
                  <AnimatePresence mode="wait">
                    {activeTab === category && (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                          {projects.map((project, index) => (
                            <ProjectCard 
                              key={index}
                              project={project}
                              index={index}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-36 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#141c4c]/5 to-[#0b90d8]/5 dark:from-[#141c4c]/10 dark:to-[#0b90d8]/10 rounded-3xl transform -rotate-1 scale-[1.03] blur-sm" />
            
            <div className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-10 border border-white/20 dark:border-gray-800/50 shadow-xl">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#141c4c] to-[#0b90d8] text-white px-6 py-3 rounded-full font-medium shadow-lg">
                  Oportunidades de inversión
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-6 text-[#141c4c] dark:text-white">
                Invierte en el futuro
              </h2>
              
              <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                Invierte en la Cuarta Revolución Industrial, invierte en Tecnología, invierte en Innovación, 
                <span className="font-semibold text-[#0b90d8]"> Invierte en Gateway IT</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {investments.map((project, index) => (
                  <InvestmentCard 
                    key={index}
                    investment={project}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="text-center mt-16">
                <BackgroundGradient className="inline-block rounded-full p-[2px]">
                  <Button 
                    className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#141c4c] dark:text-white text-lg px-8 py-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <span>Contáctanos para más información</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </BackgroundGradient>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
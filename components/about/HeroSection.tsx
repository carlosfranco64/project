"use client";

import { motion } from "framer-motion";
import { Database, Sparkles, Cpu, Award } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-gray-900/50 dark:to-gray-800/50 -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-400/10 dark:bg-indigo-500/10 blur-3xl -z-10"></div>
      
      <motion.div 
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-[#0a1e56] dark:text-white mb-6 text-center tracking-tight"
          variants={itemVariants}
        >
          ¿Quiénes <span className="text-[#0b90d8]">Somos</span>?
        </motion.h1>
        
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-center"
          variants={itemVariants}
        >
          En <span className="font-semibold text-[#0b90d8]">Gateway I.T</span>, somos pioneros en la integración de
          tecnologías avanzadas con un enfoque humano. Nuestro compromiso es
          ofrecer soluciones que transforman negocios mediante la innovación,
          el conocimiento y la experiencia acumulada de nuestro equipo
          multidisciplinario.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            {
              icon: <Sparkles className="w-10 h-10 text-[#0b90d8]" />,
              title: "Innovación",
              description: "Soluciones tecnológicas a la vanguardia del mercado"
            },
            {
              icon: <Database className="w-10 h-10 text-[#5643f7]" />,
              title: "Tecnología",
              description: "Implementación de las últimas tendencias en ingeniería"
            },
            {
              icon: <Cpu className="w-10 h-10 text-[#f27f0c]" />,
              title: "Investigación",
              description: "Desarrollo e innovación en tecnologías 4Ri y 5Ri"
            },
            {
              icon: <Award className="w-10 h-10 text-[#16b364]" />,
              title: "Experiencia",
              description: "Equipo altamente capacitado y especializado"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
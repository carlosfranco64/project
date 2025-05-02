"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Brain, 
  Lightbulb,
  Code,
  LineChart,
  Users,
  Scale
} from "lucide-react";

export default function ExpertiseSection() {
  const expertise = [
    {
      text: "Post doctor en Gestión de Ciencia y tecnología",
      icon: <GraduationCap className="w-6 h-6 text-[#0b90d8]" />
    },
    {
      text: "Doctores en gestión de la Innovación",
      icon: <Lightbulb className="w-6 h-6 text-[#f27f0c]" />
    },
    {
      text: "Doctor en gestión de Educación",
      icon: <GraduationCap className="w-6 h-6 text-[#0b90d8]" />
    },
    {
      text: "Magister en Educación",
      icon: <GraduationCap className="w-6 h-6 text-[#16b364]" />
    },
    {
      text: "Magister en trasferencia Tecnológica",
      icon: <Briefcase className="w-6 h-6 text-[#5643f7]" />
    },
    {
      text: "MBA",
      icon: <LineChart className="w-6 h-6 text-[#f27f0c]" />
    },
    {
      text: "Científicos de datos, Inteligencia Artificial e IoT",
      icon: <Brain className="w-6 h-6 text-[#5643f7]" />
    },
    {
      text: "Especialistas en Telecomunicaciones y desarrollo de Software con IA",
      icon: <Code className="w-6 h-6 text-[#16b364]" />
    },
    {
      text: "Ingenieros de Sistemas, ingenieros industriales, carreras afines",
      icon: <Code className="w-6 h-6 text-[#0b90d8]" />
    },
    {
      text: "Administradores y Contadores Públicos",
      icon: <Users className="w-6 h-6 text-[#5643f7]" />
    },
    {
      text: "Abogados",
      icon: <Scale className="w-6 h-6 text-[#f27f0c]" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100/50 dark:bg-indigo-900/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#141c4c] dark:text-white mb-6"
          >
            Nuestras <span className="text-[#0b90d8]">Especialidades</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Un equipo multidisciplinario de profesionales altamente cualificados
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4 border-l-4 border-[#0b90d8]"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                {item.icon}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
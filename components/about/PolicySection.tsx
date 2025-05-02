"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

export default function PolicySection() {
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

  const keyPoints = [
    "Promover condiciones de trabajo seguras y saludables",
    "Fomentar una cultura de autocuidado y prevención",
    "Cumplir con la legislación vigente en seguridad laboral",
    "Mejora continua del sistema de gestión"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="mb-8 flex justify-center">
              <motion.div 
                className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full"
                variants={itemVariants}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="w-12 h-12 text-[#0b90d8]" />
              </motion.div>
            </div>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-[#141c4c] dark:text-white mb-6 text-center"
            >
              Política del Sistema de Gestión <br className="hidden md:block" />
              <span className="text-[#0b90d8]">Seguridad y Salud en el Trabajo</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8"
            >
              Gateway Innovation Technologies SAS expresa su especial interés y
              preocupación por la integridad física, mental y social de sus
              trabajadores, contratistas y subcontratistas en el desarrollo de
              las actividades operativas y administrativas; se compromete a
              dirigir sus esfuerzos en proveer y mantener condiciones de trabajo
              seguras y óptimas en cada uno de los ambientes laborales, junto
              con el fomento de una cultura de autocuidado y responsabilidad de
              las directivas y de los trabajadores frente a la implementación y
              mantenimiento del Sistema de Gestión de la Seguridad y Salud en el
              Trabajo para la gestión de los riesgos laborales.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {keyPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
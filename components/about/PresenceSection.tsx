"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, Award } from "lucide-react";

export default function PresenceSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
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
            Nuestra <span className="text-[#0b90d8]">Presencia</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Llevando soluciones tecnológicas en todo el territorio nacional e internacional
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-[500px]"
            variants={itemVariants}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d865.1411557037206!2d-75.8596441!3d8.7676884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2fb67a76a013%3A0xe75730de51df02b6!2sGateway%20IT!5e1!3m2!1ses-419!2sco!4v1746155927054!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-xl shadow-md border-l-4 border-[#0b90d8]"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-[#0b90d8]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#141c4c] dark:text-white mb-2">
                    Sede Principal
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Montería, Córdoba
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-xl shadow-md border-l-4 border-[#5643f7]"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shrink-0">
                  <Globe className="w-6 h-6 text-[#5643f7]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#141c4c] dark:text-white mb-2">
                    Alcance
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Cobertura Nacional e Internacional
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-xl shadow-md border-l-4 border-[#f27f0c]"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shrink-0">
                  <Award className="w-6 h-6 text-[#f27f0c]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#141c4c] dark:text-white mb-2">
                    Experiencia
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    +17 proyectos ejecutados en diversas regiones del país
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#f27f0c] rounded-full"></span>
                      <span>Proyectos de transformación digital</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#f27f0c] rounded-full"></span>
                      <span>Implementación de soluciones IoT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#f27f0c] rounded-full"></span>
                      <span>Desarrollo de software personalizado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
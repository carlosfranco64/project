"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Briefcase, Heart } from 'lucide-react';

export default function TeamSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const teamImages = [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Team collaborating on project'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      alt: 'Team meeting in conference room'
    },
    {
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
      alt: 'Team working together'
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Equipo Diverso",
      description: "Valoramos diferentes perspectivas y experiencias para fomentar la innovación."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      title: "Crecimiento Profesional",
      description: "Ofrecemos oportunidades para adquirir nuevas habilidades y avanzar en tu carrera."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Cultura Inclusiva",
      description: "Creamos un ambiente donde todos pueden ser auténticos y sentirse valorados."
    }
  ];

  return (
    <section ref={ref} className="py-20 relative bg-white dark:bg-gray-800/95 overflow-hidden" data-aos="fade-up">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 dark:bg-blue-800/30 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-800/30 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Nuestro <span className="text-blue-600 dark:text-blue-400">equipo</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Somos un equipo diverso de profesionales apasionados por la tecnología y la innovación.
            Trabajamos juntos para crear soluciones excepcionales para nuestros clientes.
          </motion.p>
        </div>
        
        <motion.div 
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {teamImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/50 dark:bg-gray-900/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-gray-100 dark:bg-gray-800">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
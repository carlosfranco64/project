"use client";

import { motion } from "framer-motion";
import { QuoteIcon } from "@/components/icons/QuoteIcon";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "La colaboración con Gateway I.T ha sido transformadora para nuestra institución. Su enfoque en la innovación y el conocimiento profundo en tecnologías educativas ha elevado significativamente nuestra capacidad digital.",
      author: "María Rodríguez",
      position: "Directora de Innovación, Universidad Nacional",
      color: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      quote: "El equipo de Gateway I.T demostró un excepcional dominio técnico y visión estratégica durante la implementación de nuestro sistema de gestión. El resultado superó nuestras expectativas.",
      author: "Carlos Mendoza",
      position: "CEO, TechSolutions Colombia",
      color: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      quote: "La capacidad de Gateway I.T para entender nuestras necesidades específicas y traducirlas en soluciones tecnológicas efectivas ha sido clave para el éxito de nuestros proyectos conjuntos.",
      author: "Ana Martínez",
      position: "Directora de Proyectos, Ministerio de Ciencia",
      color: "bg-amber-50 dark:bg-amber-950/30"
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
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
            Lo Que <span className="text-[#0b90d8]">Dicen</span> De Nosotros
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Experiencias compartidas por algunos de nuestros clientes y colaboradores
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-xl shadow-lg relative ${testimonial.color}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <QuoteIcon className="text-[#0b90d8] opacity-10 absolute -top-4 -left-4 w-24 h-24" />
              <p className="text-gray-700 dark:text-gray-200 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-bold text-[#141c4c] dark:text-white">
                  {testimonial.author}
                </h4>
                <p className="text-[#0b90d8] text-sm">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
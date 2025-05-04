"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function JoinUsSection() {
  const benefits = [
    "Ambiente de trabajo colaborativo",
    "Horarios flexibles",
    "Oportunidades de crecimiento profesional",
    "Capacitación continua",
    "Proyectos desafiantes e innovadores"
  ];

  return (
    <section className="py-24 relative overflow-hidden" data-aos="fade-up">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* SVG pattern background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M 10 0 L 10 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    ¿Por qué unirte a <span className="text-blue-600 dark:text-blue-400">nosotros</span>?
                  </h2>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    ¿Buscas unirte a una fuerza innovadora donde tus colegas y proyectos te impulsen a ser mejor cada día? ¡Únete a nosotros en Gateway IT! Nos enorgullece fomentar un ambiente colaborativo y apoyar la innovación.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Button asChild size="lg" className="group">
                    <Link href="#positions">
                      Ver oportunidades abiertas
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                <div className="w-full md:w-2/5">
                  <div className="rounded-xl overflow-hidden shadow-lg relative h-80 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 p-1">
                    <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center">
                        <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                          <p className="text-white text-lg font-medium">
                            "Únete a un equipo donde tus ideas son valoradas y donde puedes crecer profesionalmente."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
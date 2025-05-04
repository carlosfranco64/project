"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ana María Restrepo",
      role: "Desarrolladora Full Stack",
      years: "2 años en la empresa",
      content: "Trabajar en Gateway IT ha sido una experiencia transformadora. El ambiente colaborativo y las oportunidades de crecimiento me han permitido desarrollar habilidades que no sabía que tenía.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Líder de Proyecto",
      years: "4 años en la empresa",
      content: "Lo que más valoro es la cultura de innovación. Aquí no solo se habla de innovar, sino que se vive día a día. Los proyectos son desafiantes y el equipo siempre está dispuesto a colaborar.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Valentina Gómez",
      role: "UX/UI Designer",
      years: "1 año en la empresa",
      content: "Desde el primer día me sentí bienvenida. El proceso de onboarding fue excelente y el equipo siempre está dispuesto a compartir conocimiento. Es un lugar donde realmente puedes crecer.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    // Auto-advance the carousel
    timeoutRef.current = setTimeout(() => {
      next();
    }, 6000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900/60" data-aos="fade-up">
      {/* Background elements */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-300 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-blue-300 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dice nuestro <span className="text-blue-600 dark:text-blue-400">equipo</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Conoce de primera mano cómo es trabajar con nosotros a través de las experiencias de nuestros colaboradores.
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -left-12 -top-12 opacity-10 dark:opacity-15">
            <Quote size={100} className="text-primary" />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/30 shadow-lg">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                    "{testimonials[current].content}"
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonials[current].name}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {testimonials[current].role}
                  </p>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {testimonials[current].years}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              onClick={prev} 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    current === i 
                      ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <Button 
              onClick={next} 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
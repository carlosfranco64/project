"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown, MapPin, Clock, DollarSign, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';

export default function OpenPositions() {
  const openPositions = [
    {
      id: 1,
      title: "Desarrollador Senior tipo 2",
      type: "Presencial",
      location: "Montería - Córdoba",
      schedule: "Lunes a Viernes de 8:00AM a 6:00PM",
      salary: "$4.000.000",
      requirements: [
        "5+ años de experiencia en desarrollo de software",
        "Experiencia con React y Next.js",
        "Conocimiento de TypeScript",
        "Experiencia con API RESTful y GraphQL",
        "Trabajo en equipo y comunicación efectiva"
      ],
      benefits: [
        "Horario flexible",
        "Bonificaciones por desempeño",
        "Capacitación continua",
        "Seguro médico"
      ]
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      type: "Remoto",
      location: "Cualquier ubicación en Colombia",
      schedule: "Lunes a Viernes - 40 horas semanales",
      salary: "$3.500.000",
      requirements: [
        "3+ años de experiencia en diseño UX/UI",
        "Portafolio que demuestre proyectos exitosos",
        "Experiencia con Figma y Adobe Creative Suite",
        "Conocimiento de principios de usabilidad y accesibilidad",
        "Capacidad para trabajar con equipos multidisciplinarios"
      ],
      benefits: [
        "Trabajo 100% remoto",
        "Horario flexible",
        "Equipamiento provisto por la empresa",
        "Oportunidades de crecimiento"
      ]
    },
    {
      id: 3,
      title: "Project Manager",
      type: "Híbrido",
      location: "Bogotá - Presencial 2 días por semana",
      schedule: "Lunes a Viernes - 45 horas semanales",
      salary: "$5.000.000",
      requirements: [
        "Certificación PMP o similar",
        "5+ años gestionando proyectos de tecnología",
        "Experiencia con metodologías ágiles (Scrum, Kanban)",
        "Habilidades de liderazgo y comunicación avanzadas",
        "Experiencia en gestión de presupuestos"
      ],
      benefits: [
        "Modelo híbrido con flexibilidad",
        "Bonificaciones por cumplimiento de objetivos",
        "Plan de carrera personalizado",
        "Seguro médico familiar"
      ]
    }
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="positions" className="py-20 relative bg-white dark:bg-gray-800/95" data-aos="fade-up">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-800 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Convocatorias <span className="text-blue-600 dark:text-blue-400">Abiertas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Explora nuestras oportunidades laborales actuales y encuentra la que mejor se adapte a tus habilidades y aspiraciones profesionales.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {openPositions.map((position) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
                  expandedId === position.id ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                }`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(position.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {position.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedId === position.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 text-red-500 dark:text-red-400" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                      <span>{position.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <DollarSign className="h-4 w-4 text-green-500 dark:text-green-400" />
                      <span>{position.salary}</span>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedId === position.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              Requisitos
                            </h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                  <span className="h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                              <AlertCircle className="h-5 w-5 text-blue-500" />
                              Beneficios
                            </h4>
                            <ul className="space-y-2">
                              {position.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                  <span className="text-blue-500 dark:text-blue-400">•</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-end">
                          <Button asChild>
                            <Link href="/contacto" className="flex items-center gap-2">
                              Aplicar ahora
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {/* Decorative tag */}
              <div className={`absolute -left-3 top-6 px-3 py-1 rounded-r-full text-xs font-medium ${
                position.type === 'Presencial'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200'
                  : position.type === 'Remoto'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-200'
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200'
              }`}>
                {position.type}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ¿No encuentras una posición que se ajuste a tu perfil? Envíanos tu CV y te tendremos en cuenta para futuras oportunidades.
          </p>
          <Button asChild variant="outline" size="lg" className="border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950">
            <Link href="/contacto">
              Enviar CV espontáneo
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
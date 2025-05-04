'use client';

import Image from 'next/image';
import { AnimatedCounter } from '@/components/idi/AnimatedCounter';
import { AnimatedSection } from '@/components/idi/AnimatedSection';
import { CardGradient } from '@/components/ui/card-gradient';
import { SectionHeading } from '@/components/idi/SectionHeading';
import { ResearchLineCard } from '@/components/idi/ResearchLineCard';
import { BackgroundPattern } from '@/components/idi/BackgroundPattern';
import { InnovationSectorBadge } from '@/components/idi/InnovationSectorBadge';
import { InfiniteLogoSlider } from '@/components/idi/InfiniteLogoSlider';

import { motion } from 'framer-motion';
import { 
  LightbulbIcon, 
  BookOpenText, 
  Award, 
  Microscope, 
  FileText,
  Users, 
  Briefcase
} from 'lucide-react';

export default function IDIPage() {
  const stats = [
    { number: '23', label: 'Artículos publicados', icon: <FileText className="h-6 w-6 text-[#0b90d8] mb-3" /> },
    { number: '18', label: 'Prototipos desarrollados', icon: <LightbulbIcon className="h-6 w-6 text-[#0b90d8] mb-3" /> },
    { number: '15', label: 'Convenios de cooperación', icon: <Briefcase className="h-6 w-6 text-[#0b90d8] mb-3" /> },
    { number: '5', label: 'Investigadores categorizados', icon: <Users className="h-6 w-6 text-[#0b90d8] mb-3" /> },
    { number: '9', label: 'Proyectos con entes externos', icon: <Award className="h-6 w-6 text-[#0b90d8] mb-3" /> }
  ];

  const researchLines = [
    { 
      line: 'Autonomía de gestión de la investigación en universidades modo 2',
      details: 'Investigación sobre modelos de gestión autónoma que promueven la investigación aplicada con enfoque en la resolución de problemas sociales y económicos.'
    },
    { 
      line: 'Humanware en la gestión del conocimiento en universidades inteligentes',
      details: 'Estudio de la integración del capital humano con tecnologías emergentes para optimizar la creación, transferencia y aplicación del conocimiento en entornos académicos.'
    },
    { 
      line: 'Smartcity, Sostenibilidad, energías limpias y cambio climático',
      details: 'Desarrollo de soluciones tecnológicas para ciudades inteligentes con foco en la sostenibilidad ambiental, implementación de energías renovables y mitigación del cambio climático.'
    }
  ];

  const innovationSectors = [
    'Educación',
    'Salud',
    'Medio ambiente',
    'Agricultura',
    'Logística',
    'Turismo'
  ];

  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://images.pexels.com/photos/5063399/pexels-photo-5063399.jpeg',
      
    },
    {
      name: 'Google',
      logo: 'https://images.pexels.com/photos/5063399/pexels-photo-5063399.jpeg',
      
    },
    {
      name: 'Amazon',
      logo: 'https://images.pexels.com/photos/5063399/pexels-photo-5063399.jpeg',
      
    },
    {
      name: 'IBM',
      logo: 'https://images.pexels.com/photos/5063399/pexels-photo-5063399.jpeg',
      
    },
    {
      name: 'Oracle',
      logo: 'https://images.pexels.com/photos/5063399/pexels-photo-5063399.jpeg',
      
    },
    {
      name: 'Intel',
      logo: 'https://images.pexels.com/photos/5063399/pexels-photo-5063399.jpeg',
      
    }
  ];


  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundPattern variant="grid" className="opacity-20" />
        
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#0b90d8]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#141c4c] via-[#0b90d8] to-[#141c4c] bg-clip-text text-transparent">
                I+D+i
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-[#141c4c] dark:text-white mb-6">
                Investigación, Desarrollo e Innovación
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Potenciamos el conocimiento aplicado, resolviendo desafíos reales en diversos 
                sectores a través de proyectos científicos, tecnológicos y de innovación.
              </p>
            </motion.div>
          </AnimatedSection>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={200}>
              <CardGradient className="flex flex-col items-center text-center">
                <Microscope className="h-12 w-12 text-[#0b90d8] mb-4" />
                <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-2">Investigación</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Generamos conocimiento científico mediante metodologías rigurosas para responder a preguntas específicas.
                </p>
              </CardGradient>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <CardGradient className="flex flex-col items-center text-center md:transform md:translate-y-8">
                <BookOpenText className="h-12 w-12 text-[#0b90d8] mb-4" />
                <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-2">Desarrollo</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Transformamos los hallazgos científicos en prototipos y aplicaciones de valor para la sociedad.
                </p>
              </CardGradient>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <CardGradient className="flex flex-col items-center text-center">
                <LightbulbIcon className="h-12 w-12 text-[#0b90d8] mb-4" />
                <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-2">Innovación</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Implementamos soluciones creativas a problemas complejos generando impacto económico y social.
                </p>
              </CardGradient>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="relative py-20">
        <BackgroundPattern variant="dots" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionHeading 
              title="Sectores estratégicos de innovación"
              subtitle="Áreas de investigación prioritarias donde implementamos soluciones de alto impacto"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {innovationSectors.map((sector, index) => (
                <InnovationSectorBadge key={index} sector={sector} index={index} />
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <div className="relative py-6 px-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#0b90d8]/10">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0b90d8] rounded-full flex items-center justify-center text-white font-bold">+</div>
                <p className="text-lg font-semibold text-[#0b90d8] dark:text-[#38bdf8]">
                  <span className="text-xl font-bold mr-2">40</span> 
                  proyectos formulados y gestionados
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#e6f1f8]/80 to-white/80 dark:from-gray-800 dark:to-gray-900/80">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/0 to-[#e6f1f8]/80 dark:from-gray-900/0 dark:to-gray-800 -translate-y-full" />
        <BackgroundPattern variant="waves" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionHeading 
              title="Cifras de I+D+i"
              subtitle="Indicadores de nuestros logros en investigación, desarrollo e innovación"
              accentColor="from-[#141c4c] to-[#0b90d8]"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  {stat.icon}
                  <AnimatedCounter number={stat.number} label={stat.label} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Group */}
      <section className="relative py-20">
        <BackgroundPattern variant="grid" className="opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionHeading 
              title="Grupo de Investigación GITIC"
              subtitle="Equipo multidisciplinario categorizado en el Sistema Nacional de Ciencia y Tecnología"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <CardGradient className="backdrop-blur-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-[#0b90d8] to-[#141c4c] flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">A</span>
                    </div>
                    <p className="text-center mt-3 text-sm text-gray-600 dark:text-gray-400">Categoría Colciencias</p>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-[#141c4c] dark:text-white mb-1">Nombre del grupo</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">GITIC</p>
                      <h3 className="text-lg font-medium text-[#141c4c] dark:text-white mb-1">Código</h3>
                      <p className="text-gray-700 dark:text-gray-300">COL0179707</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#141c4c] dark:text-white mb-1">Líder</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">Yan Carlos Ureña Villamizar</p>
                      <h3 className="text-lg font-medium text-[#141c4c] dark:text-white mb-1">Clasificación</h3>
                      <p className="text-gray-700 dark:text-gray-300">Convocatoria 894 de 2021</p>
                    </div>
                  </div>
                </div>
              </CardGradient>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Lines */}
      <section className="relative py-20 bg-white dark:bg-gray-800">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white dark:to-gray-800" />
        <BackgroundPattern variant="dots" className="opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <SectionHeading 
              title="Líneas de investigación"
              subtitle="Áreas temáticas especializadas que orientan nuestros proyectos de investigación"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto space-y-4">
              {researchLines.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpVariants}
                >
                  <ResearchLineCard line={item.line} details={item.details} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Image Gallery */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading 
              title="Galería de Proyectos"
              subtitle="Visualiza nuestras investigaciones más destacadas"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
                <Image 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                  alt="Investigadores en laboratorio" 
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="p-4 text-white font-medium">Investigación en laboratorio</span>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
                <Image 
                  src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg" 
                  alt="Prototipo de innovación" 
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="p-4 text-white font-medium">Desarrollo de prototipos</span>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
                <Image 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                  alt="Equipo colaborativo" 
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="p-4 text-white font-medium">Colaboración interdisciplinaria</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


{/* slider de aliados */}

<section className="relative py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <BackgroundPattern variant="dots" className="opacity-20" />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading 
              title="Nuestros Aliados"
              subtitle="Organizaciones que confían en nuestra capacidad de innovación"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="max-w-6xl mx-auto">
              <InfiniteLogoSlider partners={partners} />
            </div>
          </AnimatedSection>
        </div>
      </section>



      
      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-[#141c4c] to-[#0b90d8] text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')] bg-cover bg-center opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Colabora con nosotros</h2>
              <p className="text-lg mb-8">
                ¿Interesado en colaborar en proyectos de I+D+i? Contáctanos para explorar posibilidades 
                de cooperación y desarrollar soluciones innovadoras juntos.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0b90d8] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactar
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
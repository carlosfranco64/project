'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const projectCategories = {
  inProgress: [
    { 
      name: 'MAMA', 
      description: 'Sistema de gestión académica',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop'
    },
    { 
      name: 'CDT - CIDETIC', 
      description: 'Centro de Innovación Digital',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Opper Apps', 
      description: 'Plataforma de logística 4.0',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Gaia', 
      description: 'Sistema de gestión ambiental',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Tornado Digital', 
      description: 'Plataforma de transformación digital',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    }
  ],
  completed: [
    { 
      name: 'Villa Susa', 
      description: 'Gestión inmobiliaria',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop'
    },
    { 
      name: 'Dental Stetic', 
      description: 'Sistema para clínicas dentales',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop'
    },
    { 
      name: 'Industrial 360', 
      description: 'Solución industrial integral',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'GospelAPP', 
      description: 'Aplicación musical',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Colombia Hass', 
      description: 'Gestión agrícola',
      image: 'https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=2087&auto=format&fit=crop'
    }
  ],
  prototypes: [
    { 
      name: 'Susan', 
      description: 'Sistema de gestión educativa con IA',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'EVA', 
      description: 'Sistema de gestión de certificaciones',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'LAURA', 
      description: 'Gestión de piscicultura',
      image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop'
    },
    { 
      name: 'LEADER', 
      description: 'Plataforma de liderazgo',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'CurBa 2.0', 
      description: 'Sistema para ciudades inteligentes',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2113&auto=format&fit=crop'
    }
  ]
};

const investments = [
  {
    name: "Susan",
    description: "Sistema de información tipo SaaS para gestión educativa con IA",
    investment: "1,500,000 USD",
    market: "Colombia y Latinoamérica"
  },
  {
    name: "EVA",
    description: "Sistema SaaS para gestión de certificaciones de calidad",
    investment: "250,000 USD",
    market: "Estados Unidos y Colombia"
  },
  {
    name: "Opper.Apps",
    description: "Sistema multi plataforma de logística 4.0 con IA",
    investment: "500,000 USD",
    market: "Colombia y Latinoamérica"
  },
  {
    name: "CurBa 2.0",
    description: "Sistema para ciudades inteligentes y comunidades energéticas",
    investment: "500,000 USD",
    market: "Estados Unidos, Europa, Latam"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-[#0b90d8]/5 rounded-full blur-3xl" />
          <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-[#141c4c]/5 rounded-full blur-3xl" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#141c4c] to-[#0b90d8] dark:from-white dark:to-[#0b90d8]">
              Nuestros proyectos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Descubre nuestra cartera de proyectos innovadores que están transformando el futuro digital
            </p>
          </motion.div>

          <Tabs defaultValue="inProgress" className="mt-8">
            <TabsList className="w-full max-w-2xl mx-auto bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-1">
              <TabsTrigger 
                value="inProgress"
                className="rounded-full text-sm md:text-base transition-all data-[state=active]:bg-[#0b90d8] data-[state=active]:text-white"
              >
                En ejecución
              </TabsTrigger>
              <TabsTrigger 
                value="completed"
                className="rounded-full text-sm md:text-base transition-all data-[state=active]:bg-[#0b90d8] data-[state=active]:text-white"
              >
                Ejecutados
              </TabsTrigger>
              <TabsTrigger 
                value="prototypes"
                className="rounded-full text-sm md:text-base transition-all data-[state=active]:bg-[#0b90d8] data-[state=active]:text-white"
              >
                Prototipos
              </TabsTrigger>
            </TabsList>
            {Object.entries(projectCategories).map(([category, projects]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {projects.map((project, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      key={index}
                    >
                      <Card className="group overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <CardContent className="p-6 relative">
                          <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-3 group-hover:text-[#0b90d8] transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {project.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-[#141c4c] dark:text-white">
              Oportunidades de inversión
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Invierte en la Cuarta Revolución Industrial, invierte en Tecnología, invierte en Innovación, 
              Invierte en Gateway IT.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {investments.map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  key={index}
                >
                  <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-[#141c4c] dark:text-white mb-4">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      <div className="space-y-3 text-sm">
                        <p className="flex items-center">
                          <span className="w-2 h-2 bg-[#0b90d8] rounded-full mr-2" />
                          <strong className="text-[#141c4c] dark:text-white mr-2">Inversión:</strong>
                          <span className="text-gray-600 dark:text-gray-300">{project.investment}</span>
                        </p>
                        <p className="flex items-center">
                          <span className="w-2 h-2 bg-[#0b90d8] rounded-full mr-2" />
                          <strong className="text-[#141c4c] dark:text-white mr-2">Mercado inicial:</strong>
                          <span className="text-gray-600 dark:text-gray-300">{project.market}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button 
                className="bg-gradient-to-r from-[#141c4c] to-[#0b90d8] hover:from-[#1b2666] hover:to-[#0a7ab8] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Contáctanos para más información
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
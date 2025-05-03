"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { 
  Lightbulb, 
  Code, 
  Server, 
  CloudCog, 
  GraduationCap,
  Globe,
  Shield,
  Computer,
  ShieldCheck,
  Cloud,
  Cog,
  Headphones,
  Wrench,
  Laptop,
  ArrowRight,
  Leaf
} from 'lucide-react';
import { ServiceCard } from '@/components/services/service-card';
import { AdditionalServiceCard } from '@/components/services/additional-service-card';
import { BackgroundDecoration } from '@/components/ui/background-decoration';

export default function ServicesPage() {
  // Add subtle scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: Lightbulb,
      title: 'Proyectos I+D+I',
      description:
        'Formulación, gestión y ejecución de proyectos de investigación, desarrollo e innovación.',
      items: ['Formulación', 'Gestión', 'Ejecución', 'Alianzas', 'Capacitación'],
      color: 'from-blue-600 to-blue-400',
      image: '/images/services/innovation.jpg'
    },
    {
      icon: Code,
      title: 'Desarrollo Tecnológico (CDT)',
      description:
        'Prototipado, transformación digital y maduración tecnológica con enfoque 4iR.',
      items: ['Prototipado', 'Transformación digital', 'Tecnología 4iR', 'Maduración tecnológica'],
      color: 'from-purple-600 to-purple-400',
      image: '/images/services/development.jpg'
    },
    {
      icon: Server,
      title: 'Plataformas tecnológicas',
      description:
        'Licencias de software propio y comercial, además de hardware empresarial.',
      items: ['Software propio', 'Software comercial', 'Hardware empresarial'],
      color: 'from-teal-600 to-teal-400',
      image: '/images/services/platforms.jpg'
    },
    {
      icon: CloudCog,
      title: 'Outsourcing tecnológico',
      description:
        'Infraestructura y soporte tecnológico externo para operación segura y continua.',
      items: ['VPS', 'Servidores dedicados', 'Software', 'Soporte técnico'],
      color: 'from-amber-600 to-amber-400',
      image: '/images/services/outsourcing.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Capacitaciones y certificaciones',
      description:
        'Formación en CTI, transformación digital y nuevas revoluciones industriales.',
      items: ['Sistema CTI', 'Transformación digital', '4iR y 5iR', 'Otros'],
      color: 'from-green-600 to-green-400',
      image: '/images/services/training.jpg'
    },
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: 'Identidad digital',
      description: 'Sitios web y tiendas online',
      color: 'bg-rose-500'
    },
    {
      icon: Shield,
      title: 'Seguridad informática',
      description: 'Protección de redes y datos',
      color: 'bg-indigo-500'
    },
    {
      icon: Computer,
      title: 'Venta de equipos',
      description: 'Hardware profesional y alquiler',
      color: 'bg-amber-500'
    },
    {
      icon: ShieldCheck,
      title: 'Auditorías',
      description: 'Análisis de seguridad',
      color: 'bg-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Servicios en la nube',
      description: 'Soluciones cloud personalizadas',
      color: 'bg-blue-500'
    },
    {
      icon: Cog,
      title: 'Automatización',
      description: 'Optimización de procesos',
      color: 'bg-purple-500'
    },
    {
      icon: Headphones,
      title: 'Consultoría',
      description: 'Asesoría tecnológica',
      color: 'bg-teal-500'
    },
    {
      icon: Wrench,
      title: 'Desarrollo a medida',
      description: 'Soluciones personalizadas',
      color: 'bg-cyan-500'
    },
    {
      icon: Leaf,
      title: 'Transición energética',
      description: 'Comunidades sostenibles',
      color: 'bg-green-500'
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <BackgroundDecoration />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#141c4c] to-[#0b90d8] dark:from-white dark:to-blue-400">
                Nuestros servicios
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Soluciones innovadoras en tecnología, innovación y formación para impulsar tu empresa hacia el futuro digital.
              </p>
              <Button asChild size="lg" className="group transition-all duration-300 transform hover:scale-105">
                <Link href="/contacto" className="flex items-center">
                  ¡Contáctanos!
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 animate-on-scroll opacity-0 transition-all duration-700 delay-300 translate-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                  alt="Equipo profesional trabajando en soluciones tecnológicas" 
                  width={600} 
                  height={400}
                  className="w-full h-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-lg font-medium">Soluciones tecnológicas para cada necesidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white dark:bg-gray-800 opacity-80"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#141c4c] to-[#0b90d8] dark:from-white dark:to-blue-400">
              Servicios principales
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#141c4c] to-[#0b90d8] mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Nuestras soluciones principales están diseñadas para potenciar tu negocio con la última tecnología e innovación
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios adicionales */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700">
            <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#141c4c] to-[#0b90d8] dark:from-white dark:to-blue-400">
              Servicios adicionales
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#141c4c] to-[#0b90d8] mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Complementamos nuestra oferta con servicios especializados para cubrir todas tus necesidades
            </p>
          </div>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <AdditionalServiceCard 
                key={index} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#141c4c] to-[#0b90d8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-on-scroll opacity-0 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas impulsar tu negocio?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Nuestro equipo de expertos está listo para ayudarte a alcanzar tus objetivos con soluciones tecnológicas de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="transition-all duration-300 transform hover:scale-105">
                <Link href="/servicios">Explorar servicios</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-[#141c4c] hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
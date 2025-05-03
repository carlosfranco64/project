import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Lightbulb,
  Code,
  Server,
  CloudCog,
  GraduationCap,
  Puzzle,
  Globe,
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Proyectos I+D+I',
      description:
        'Formulación, gestión y ejecución de proyectos de investigación, desarrollo e innovación.',
      items: ['Formulación', 'Gestión', 'Ejecución', 'Alianzas', 'Capacitación'],
    },
    {
      icon: Code,
      title: 'Desarrollo Tecnológico (CDT)',
      description:
        'Prototipado, transformación digital y maduración tecnológica con enfoque 4iR.',
      items: ['Prototipado', 'Transformación digital', 'Tecnología 4iR', 'Maduración tecnológica'],
    },
    {
      icon: Server,
      title: 'Plataformas tecnológicas',
      description:
        'Licencias de software propio y comercial, además de hardware empresarial.',
      items: ['Software propio', 'Software comercial', 'Hardware empresarial'],
    },
    {
      icon: CloudCog,
      title: 'Outsourcing tecnológico',
      description:
        'Infraestructura y soporte tecnológico externo para operación segura y continua.',
      items: ['VPS', 'Servidores dedicados', 'Software', 'Soporte técnico'],
    },
    {
      icon: GraduationCap,
      title: 'Capacitaciones y certificaciones',
      description:
        'Formación en CTI, transformación digital y nuevas revoluciones industriales.',
      items: ['Sistema CTI', 'Transformación digital', '4iR y 5iR', 'Otros'],
    },
  ];

  const additionalServices = [
    'Identidad digital, sitios web y tiendas online',
    'Seguridad informática y redes',
    'Venta y alquiler de equipos',
    'Auditorías de seguridad',
    'Servicios en la nube',
    'Automatización de procesos',
    'Consultoría tecnológica',
    'Desarrollo a la medida',
    'Transición energética y comunidades',
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
      {/* Hero */}
      <section className="text-center py-16">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#141c4c] dark:text-white mb-6">
            Nuestros servicios
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Soluciones innovadoras en tecnología, innovación y formación para impulsar tu empresa.
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">¡Contáctanos!</Link>
          </Button>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white text-center mb-12">
            Servicios principales
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description, items }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
              >
                <div className="flex items-center mb-4 text-[#0b90d8]">
                  <Icon className="w-6 h-6 mr-2" />
                  <h3 className="text-xl font-bold text-[#141c4c] dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-[#0b90d8] rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios adicionales */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white text-center mb-12">
            Servicios adicionales
          </h2>
          <div className="grid gap-4 max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition flex items-start"
              >
                <Puzzle className="w-5 h-5 text-[#0b90d8] mt-1 mr-3 shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

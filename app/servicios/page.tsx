import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Proyectos I+D+I',
      items: [
        'Formulación',
        'Gestión',
        'Ejecución',
        'Alianzas',
        'Capacitación'
      ]
    },
    {
      title: 'Desarrollo Tecnológico (CDT)',
      items: [
        'Prototipado',
        'Transformación digital',
        'Tecnología 4iR',
        'Maduración tecnológica',
        'Otros'
      ]
    },
    {
      title: 'Plataformas tecnológicas',
      items: [
        'Licencias de software propio',
        'Licencias de software comercial',
        'Hardware para empresa'
      ]
    },
    {
      title: 'Outsourcing tecnológico',
      items: [
        'VPS: Alquiler de servidores virtuales',
        'Servidores dedicados (nube)',
        'Software',
        'Soporte de plataformas y sistemas de información'
      ]
    },
    {
      title: 'Capacitaciones y certificaciones',
      items: [
        'Sistema de CTI Colombia',
        'Transformación digital',
        'Cuarta y Quinta Revolución industrial',
        'Otros'
      ]
    }
  ];

  const additionalServices = [
    'Identidad Digital, web empresariales y Tienda Online de ventas y pedidos',
    'Seguridad Informática y Gestión de redes',
    'Venta y alquiler de equipos de comunicaciones',
    'Auditorias de seguridad, redes y telecomunicaciones',
    'Servicios en la nube',
    'Automatización de procesos',
    'Prototipado',
    'Consultoría Tecnológica',
    'Desarrollo a la Medida',
    'Certificaciones y acreditaciones',
    'Transición energética y comunidades energéticas'
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#141c4c] dark:text-white mb-8 text-center">
            Nuestros servicios
          </h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              En Gateway I.T, ofrecemos servicios integrales de formulación, gestión y administración de proyectos de ciencia, tecnología e innovación. Nuestro enfoque se centra en proporcionar soluciones de vanguardia y valor agregado a nuestros clientes.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">
                ¡Contáctanos!
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Servicios principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-[#0b90d8] rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Servicios adicionales
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex items-center"
              >
                <div className="w-2 h-2 bg-[#0b90d8] rounded-full mr-3" />
                <p className="text-gray-700 dark:text-gray-300">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
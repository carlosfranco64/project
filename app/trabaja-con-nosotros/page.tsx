import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CareersPage() {
  const teamImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
  ];

  const openPositions = [
    {
      title: 'Desarrollador Senior tipo 2',
      type: 'Presencial',
      location: 'Montería - Córdoba',
      schedule: 'Lunes a Viernes de 8:00AM a 6:00PM',
      salary: '$4.000.000'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#141c4c] dark:text-white mb-8 text-center">
            ¡Trabajemos juntos!
          </h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Somos más que un simple proveedor de tecnología, somos una comunidad en constante crecimiento que busca construir proyectos excepcionales junto a personas increíbles. Descubre cómo nuestras oportunidades pueden ayudarte a llevar tus ideas brillantes a soluciones innovadoras y avanzar en tu carrera profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt="Team at work"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              ¿Buscas unirte a una fuerza innovadora donde tus colegas y proyectos te impulsen a ser mejor cada día? ¡Únete a nosotros en Gateway IT! Nos enorgullece fomentar un ambiente colaborativo y apoyar la innovación, así que echa un vistazo a nuestras emocionantes oportunidades de carrera para ver si encuentras una que se adapte a ti. ¡Estaríamos encantados de recibir tu aplicación!
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Convocatorias
          </h2>
          <div className="max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-[#141c4c] dark:text-white mb-4">
                  {position.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Tipo de trabajo:</span> {position.type}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Ubicación:</span> {position.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Horario:</span> {position.schedule}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Salario:</span> {position.salary}
                  </p>
                </div>
                <Button asChild>
                  <Link href="/contacto">
                    Más información
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
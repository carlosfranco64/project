import Image from 'next/image';

export default function AboutPage() {
  const team = [
    {
      name: 'Elkin Quiñonez A.',
      role: 'CEO',
      description:
        'Más de 15 años de experiencia en el sector educativo, público y privado, transformación digital, plataformas tecnológicas, desarrollo de software, proyectos de I+D+i, MinCiencias, Redes, IoT, smart city, IA. 4Ri Ingeniero de Sistemas, Doctor en Gestión de la Innovación, Postdoctorado en Gestión de la Ciencia y la Tecnología.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Silvana Gonzalez Reyes',
      role: 'Gerente General',
      description:
        'Contadora pública con más de 20 años de experiencia en dirección estratégica en empresas del sector salud, ciencia y tecnología, consultora y asesora financiera en creación y consolidación de nuevas organizaciones de CTI.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Natalia García C.',
      role: 'Coordinadora de proyectos',
      description:
        'Más de 15 años de experiencia en Estrategia corporativa, incluyendo 8 años en Planeación de universidades y líder de procesos de certificación en alta calidad. Ingeniera industrial con MBA, especialización en Gerencia de Proyectos de CTI y Gestión de Seguridad y Salud en el trabajo. Docente en áreas de gestión para ingenieros.',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Salim Nassif',
      role: 'Director desarrollo tecnológico',
      description:
        'Más de 20 años de experiencia en la educación, banca, desarrollo de software, servidores, servicios tecnológicos, dirección de proyectos de CTI, Ingeniero de sistemas especializado en desarrollo de software, IA, 4Ri, seguridad informática.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  const expertise = [
    'Post doctor en Gestión de Ciencia y tecnología',
    'Doctores en gestión de la Innovación',
    'Doctor en gestión de Educación',
    'Magister en Educación',
    'Magister en trasferencia Tecnológica',
    'MBA',
    'Científicos de datos, Inteligencia Artificial e IoT',
    'Especialistas en Telecomunicaciones y desarrollo de Software con IA',
    'Ingenieros de Sistemas, ingenieros industriales, carreras afines',
    'Administradores y Contadores Públicos',
    'Abogados',
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#141c4c] dark:text-white mb-8 text-center">
            ¿Quiénes somos?
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Bienvenido a Gateway I.T, una empresa especializada en brindar soluciones tecnológicas de vanguardia. Con la combinación de nuestro equipo altamente capacitado y la tecnología de punta, ofrecemos soluciones personalizadas en hardware y software utilizando las últimas tendencias en ingeniería, innovación, investigación y desarrollo.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              En Gateway I.T, creemos que nuestro capital humano es nuestro mayor activo y, por lo tanto, invertimos en el desarrollo y capacitación constante de nuestro equipo. Esto nos permite ofrecer soluciones integradas que se adaptan a las necesidades específicas de cada cliente.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Nuestro enfoque se basa en la tecnología 4Ri y 5Ri, lo que nos permite ofrecer soluciones innovadoras que maximizan la eficiencia y la rentabilidad de su negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#141c4c] dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#0b90d8] font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Nuestras Especialidades
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex items-center"
              >
                <div className="w-2 h-2 bg-[#0b90d8] rounded-full mr-3" />
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Nuestra Presencia
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#0b90d8] mb-2">
                Sede Principal
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Montería, Córdoba</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#0b90d8] mb-2">Alcance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Cobertura Nacional e Internacional
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md md:col-span-2">
              <h3 className="text-lg font-semibold text-[#0b90d8] mb-2">Experiencia</h3>
              <p className="text-gray-700 dark:text-gray-300">
                +17 proyectos ejecutados en diversas regiones del país
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-8 text-center">
            Política del sistema de gestión seguridad y salud en el trabajo
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Gateway Innovation Technologies SAS expresa su especial interés y preocupación por la integridad física, mental y social de sus trabajadores, contratistas y subcontratistas en el desarrollo de las actividades operativas y administrativas; se compromete a dirigir sus esfuerzos en proveer y mantener condiciones de trabajo seguras y óptimas en cada uno de los ambientes laborales, junto con el fomento de una cultura de autocuidado y responsabilidad de las directivas y de los trabajadores frente a la implementación y mantenimiento del Sistema de Gestión de la Seguridad y Salud en el Trabajo para la gestión de los riesgos laborales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

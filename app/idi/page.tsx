import Image from 'next/image';

export default function IDIPage() {
  const stats = [
    { number: '23', label: 'Artículos publicados' },
    { number: '18', label: 'Prototipos desarrollados' },
    { number: '15', label: 'Convenios de cooperación' },
    { number: '5', label: 'Investigadores categorizados' },
    { number: '9', label: 'Proyectos ejecutados con entes externos' }
  ];

  const researchLines = [
    'Autonomía de gestión de la investigación en universidades modo 2',
    'Humanware en la gestión del conocimiento en universidades inteligentes',
    'Smartcity, Sostenibilidad, energías limpias y cambio climático.'
  ];

  const innovationSectors = [
    'Educación',
    'Salud',
    'Medio ambiente',
    'Agricultura',
    'Logística',
    'Turismo'
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#141c4c] dark:text-white mb-6">
            I+D+i: Investigación, Desarrollo e Innovación
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Potenciamos el conocimiento aplicado, resolviendo desafíos reales en diversos sectores a través de proyectos científicos, tecnológicos y de innovación.
          </p>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-8">
            Sectores estratégicos de innovación
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {innovationSectors.map((sector, index) => (
              <span key={index} className="px-5 py-3 bg-[#0b90d8] text-white rounded-full text-sm font-medium shadow hover:scale-105 transition">
                {sector}
              </span>
            ))}
          </div>
          <p className="mt-10 text-lg font-semibold text-[#0b90d8] dark:text-white">
            +40 proyectos formulados y gestionados
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#e6f1f8] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Cifras de I+D+i
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <p className="text-4xl font-bold text-[#0b90d8] mb-2">{stat.number}</p>
                <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Group */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Grupo de Investigación GITIC
          </h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Nombre:</strong> GITIC</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Código:</strong> COL0179707</p>
            </div>
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Líder:</strong> Yan Carlos Ureña Villamizar</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Categoría:</strong> A</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Clasificación:</strong> Convocatoria 894 de 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Lines */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Líneas de investigación
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {researchLines.map((line, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex items-center">
                <div className="w-2 h-2 bg-[#0b90d8] rounded-full mr-3" />
                <p className="text-gray-700 dark:text-gray-300">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';

export default function IDIPage() {
  const stats = [
    { number: '23', label: 'Artículos publicados' },
    { number: '18', label: 'Prototipos desarrollados' },
    { number: '15', label: 'Convenios de cooperación' },
    { number: '5', label: 'Investigadores categorizados en la empresa' },
    { number: '9', label: 'Proyectos de I+D+i ejecutados con entes externos' }
  ];

  const researchLines = [
    'Autonomía de gestión de la investigación en universidades modo 2',
    'Humanware en la gestión del conocimiento en universidades inteligentes',
    'Smartcity, Sostenibilidad, energías limpias y cambio climático.'
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
      {/* Policy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#141c4c] dark:text-white mb-8 text-center">
            Política de Investigación, Transferencia e Innovación
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              La empresa GATEWAY INNOVATION TECHNOLOGIES SAS, reconoce que el proceso de investigación es la base del desarrollo tecnológico, al enfocarse en investigaciones aplicadas encaminadas a resolver problemáticas en el contexto local, regional nacional e internacional. Gateway IT establece la investigación, la transferencia y la innovación como los ejes estratégicos transversales que orientan el trabajo articulado con las organizaciones aliadas unen esfuerzos por generar, divulgar y apropiar productos de I+D+i.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Cifras de I+D+i
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
              >
                <p className="text-4xl font-bold text-[#0b90d8] mb-2">{stat.number}</p>
                <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Group Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Grupo de Investigación GITIC
          </h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <span className="font-bold">Nombre:</span> GITIC: Gestión de la Investigación, Tecnológica e Innovación de Córdoba
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <span className="font-bold">Código del grupo:</span> COL0179707
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <span className="font-bold">Líder del grupo:</span> Yan Carlos Ureña Villamizar
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <span className="font-bold">Categoría:</span> A
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold">Clasificado en:</span> Convocatoria 894 de 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Lines Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#141c4c] dark:text-white mb-12 text-center">
            Líneas de investigación
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {researchLines.map((line, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex items-center"
                >
                  <div className="w-2 h-2 bg-[#0b90d8] rounded-full mr-3" />
                  <p className="text-gray-700 dark:text-gray-300">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
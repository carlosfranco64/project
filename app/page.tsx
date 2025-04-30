// import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b90d8]/10 to-transparent" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#141c4c] dark:text-white mb-6">
              Innovation Technologies
              <span className="block text-[#0b90d8]">GATEWAY IT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Bienvenido a Gateway IT, una empresa especializada en brindar
              soluciones tecnológicas de vanguardia. Con la combinación de
              nuestro equipo altamente capacitado y la tecnología de punta,
              ofrecemos soluciones personalizadas en hardware y software
              utilizando las últimas tendencias en ingeniería, innovación,
              investigación y desarrollo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/nosotros">Conócenos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="p-0 ">
        <img
          src="https://www.gatewayit.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBannerCarbonoCero1.6f6410c5.png&w=3840&q=75"
          alt=""
        />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold text-[#141c4c] dark:text-white mb-4">
                Compromiso
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                En Gateway I.T, nos enorgullece estar comprometidos con el
                desarrollo sostenible y apoyamos los Objetivos de Desarrollo
                Sostenible (ODS) a través de nuestras soluciones tecnológicas.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold text-[#141c4c] dark:text-white mb-4">
                Misión
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Somos un centro de desarrollo tecnológico dedicado a la
                formulación y ejecución de proyectos de investigación aplicada,
                desarrollo, maduración y comercialización de tecnología propias.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold text-[#141c4c] dark:text-white mb-4">
                Visión
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                En Gateway I.T, nuestra visión es convertirnos en el 2025 en una
                empresa y centro de desarrollo tecnológico líder reconocida a
                nivel nacional e internacional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

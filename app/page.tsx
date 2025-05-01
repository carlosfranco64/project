// import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#f9fcfb] to-[#e6f1f8] dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-r from-[#0b90d8]/20 via-transparent to-[#0b90d8]/20" />
        <div className="container px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#141c4c] dark:text-white leading-tight mb-6">
            Innovation Technologies
            <span className="block text-[#0b90d8] drop-shadow-md">GATEWAY IT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Empresa del Caribe colombiano que combina creatividad y tecnología para ofrecer soluciones innovadoras en educación, salud y negocios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="shadow-md hover:scale-105 transition">
              <Link href="/nosotros">Conócenos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md hover:scale-105 transition">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="p-0">
        <img
          src="https://www.gatewayit.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBannerCarbonoCero1.6f6410c5.png&w=3840&q=75"
          alt="Banner"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Compromiso",
                desc: "Apoyamos los Objetivos de Desarrollo Sostenible mediante soluciones tecnológicas sostenibles."
              },
              {
                title: "Misión",
                desc: "Ejecutamos proyectos de investigación aplicada, desarrollo tecnológico y comercialización."
              },
              {
                title: "Visión",
                desc: "Ser líderes en tecnología e innovación a nivel nacional e internacional para 2025."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-[#141c4c] dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-24 bg-[#f0f8ff] dark:bg-[#1a1a2e]">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center text-[#141c4c] dark:text-white mb-12">
            Nuestra Propuesta de Valor
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Gestión de Proyectos",
                desc: "Consultoría para desarrollo y ejecución de proyectos estratégicos."
              },
              {
                title: "Desarrollo de Software",
                desc: "Creamos soluciones digitales, móviles y SaaS personalizadas."
              },
              {
                title: "Consultorías Especializadas",
                desc: "Transformación digital, seguridad informática y prototipado."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-center"
              >
                <h4 className="text-xl font-semibold mb-2 text-[#0b90d8]">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números Clave */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center text-[#141c4c] dark:text-white mb-12">
            Algunos Números
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { label: "Clientes", value: "+50" },
              { label: "Alianzas Estratégicas", value: "+26" },
              { label: "Proyectos Ejecutados", value: "+17" },
              { label: "Productos Destacados", value: "3" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-5xl font-bold text-[#0b90d8]">{item.value}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

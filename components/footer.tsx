"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 pb-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0b90d8]/10 rounded-full blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#141c4c]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" className="block mb-4 md:mb-0 transform hover:scale-105 transition-transform">
            <Image
              src="https://www.gatewayit.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgateway-logo.fa0c7038.png&w=256&q=75"
              alt="Gateway IT"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Nosotros */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Nosotros</h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Nosotros', href: '/nosotros' },
                { name: 'Servicios', href: '/servicios' },
                { name: 'I+D+i', href: '/idi' },
                { name: 'Proyectos', href: '/proyectos' },
                { name: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#0b90d8] dark:hover:text-[#0b90d8] transition-all hover:translate-x-1 inline-flex items-center"
                  >
                    <span className="w-1 h-1 bg-[#0b90d8] rounded-full mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="group flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 text-[#0b90d8] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-medium">Montería, Córdoba</span>
                  <span>Carrera 13B # 61B - 08</span>
                </div>
              </li>
              <li className="group flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 text-[#0b90d8]" />
                <span className="group-hover:text-[#0b90d8] transition-colors">305 2442919</span>
              </li>
              <li className="group flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 text-[#0b90d8]" />
                <span className="group-hover:text-[#0b90d8] transition-colors">contacto@gatewayit.co</span>
              </li>
            </ul>
          </div>

          {/* Links de interés */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Links de interés</h3>
            <ul className="space-y-3">
              {[
                'Política de tratamiento de datos',
                'Aviso de privacidad',
                'Reglamento interno'
              ].map((text) => (
                <li key={text}>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#0b90d8] dark:hover:text-[#0b90d8] transition-all hover:translate-x-1 inline-flex items-center"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Síguenos</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center space-x-2 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 dark:text-gray-400 group-hover:text-[#25D366] transition-colors">WhatsApp</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <Linkedin className="h-5 w-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 dark:text-gray-400 group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <Instagram className="h-5 w-5 text-[#E4405F] group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 dark:text-gray-400 group-hover:text-[#E4405F] transition-colors">Instagram</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <Facebook className="h-5 w-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 dark:text-gray-400 group-hover:text-[#1877F2] transition-colors">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Gateway IT. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
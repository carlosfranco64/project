"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "I+D+I", href: "/idi" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
  { name: "Blog", href: "https://blog.gatewayit.co/" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={`${
                mounted && theme === "dark"
                  ? " https://www.gatewayit.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgateway-logo.fa0c7038.png&w=256&q=75"
                  : "https://blog.gatewayit.co/wp-content/uploads/2023/04/cropped-gateway-it-logo-4-1.png"
              }`}
              alt="Gateway IT"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Menú de navegación (visible en pantallas grandes) */}
          <div className="hidden md:flex md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 dark:text-gray-100 hover:text-[#ee1e2a] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botones de acciones */}
          <div className="flex items-center space-x-4">
            {/* Botón de cambio de tema */}

            <Button
              asChild
              className="bg-[#3db8ff] hover:bg-[#cc1a24] text-white"
            >
              <Link href="https://tornado.gatewayit.co/login">
                TORNADO DIGITAL
              </Link>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Botón de Tornado Digital */}
           

            {/* Botón del menú móvil */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Menú desplegable en móviles */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-white dark:bg-gray-900 shadow-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 dark:text-gray-100 hover:text-[#ee1e2a] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

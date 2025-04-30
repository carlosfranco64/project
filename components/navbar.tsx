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
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {mounted && (
            <Image
              src={
                theme === "dark"
                  ? "https://www.gatewayit.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgateway-logo.fa0c7038.png&w=256&q=75"
                  : "https://blog.gatewayit.co/wp-content/uploads/2023/04/cropped-gateway-it-logo-4-1.png"
              }
              alt="Gateway IT"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          )}
        </Link>

        {/* Navegación en escritorio */}
        <div className="hidden lg:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-[#ee1e2a] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Tornado Digital (escritorio) */}
          <Button
            asChild
            className="hidden sm:block bg-[#3db8ff] hover:bg-[#cc1a24] text-white transition-colors duration-200"
          >
            <Link href="https://tornado.gatewayit.co/login">
              TORNADO DIGITAL
            </Link>
          </Button>

          {/* Botón de tema */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {mounted && (theme === "dark" ? <Sun /> : <Moon />)}
          </Button>

          {/* Botón del menú móvil */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`lg:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 py-6 bg-white dark:bg-gray-900 shadow-md">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-900 dark:text-gray-100 hover:text-[#ee1e2a] transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <Button
            asChild
            className="w-full bg-[#3db8ff] hover:bg-[#cc1a24] text-white"
          >
            <Link href="https://tornado.gatewayit.co/login">
              TORNADO DIGITAL
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

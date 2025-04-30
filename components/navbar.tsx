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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
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

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Tornado Digital (desktop only) */}
          <Button
            asChild
            className="bg-[#3db8ff] hover:bg-[#cc1a24] text-white hidden sm:block"
          >
            <Link href="https://tornado.gatewayit.co/login">
              TORNADO DIGITAL
            </Link>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun /> : <Moon />)}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-4 shadow transition-all"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-900 dark:text-gray-100 hover:text-[#ee1e2a] transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <Button
            asChild
            className="bg-[#3db8ff] hover:bg-[#cc1a24] text-white w-full"
          >
            <Link href="https://tornado.gatewayit.co/login">
              TORNADO DIGITAL
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}

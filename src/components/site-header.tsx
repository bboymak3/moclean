"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/56940349957?text=Hola%20Limpieza24%2F7%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza";

export const SITE_NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Galería", href: "/galeria" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Comunas", href: "/#comunas" },
  { label: "Blog", href: "/blog" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Preguntas", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

interface SiteHeaderProps {
  /** href del link activo, ej: "/blog" */
  active?: string;
}

/** Header compartido para las páginas nuevas (blog, galería, servicios). */
export function SiteHeader({ active }: SiteHeaderProps) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const linkClass = (href: string, base: string) =>
    `${base} text-sm font-medium rounded-lg transition-colors ${
      active === href
        ? "text-emerald-700 bg-emerald-50"
        : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/limpieza247-logo.png" alt="Limpieza24/7" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold text-emerald-800 tracking-tight">Limpieza24/7</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {SITE_NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href, "px-4 py-2")}>
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="ml-3 bg-emerald-600 hover:bg-emerald-700 text-white"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-1" />
              Cotizar
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 text-gray-700"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menú"
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenu && (
          <nav className="xl:hidden pb-4 border-t border-emerald-100 mt-2 pt-4 flex flex-col gap-1">
            {SITE_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={linkClass(link.href, "px-4 py-3 text-left")}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Cotizar por WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

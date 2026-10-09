import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SERVICES } from "@/lib/services-data";
import { GOOGLE_PROFILE_URL } from "@/lib/google-profile";
import { GoogleIcon } from "@/components/google-profile";

const COMPANY_LINKS = [
  { label: "Galería", href: "/galeria" },
  { label: "Blog", href: "/blog" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
  { label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
  { label: "Políticas de Privacidad", href: "/politicas-de-privacidad" },
];

/** Footer compartido para las páginas nuevas (mismo diseño que el resto del sitio). */
export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/limpieza247-logo.png" alt="Limpieza24/7" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-bold text-white">Limpieza24/7</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Limpieza a domicilio con aspiración profesional manual en Santiago de Chile.
              Hogares, oficinas, autos y más.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/limpieza-profunda" className="hover:text-emerald-400 transition-colors">
                  Limpieza profunda detallada
                </Link>
              </li>
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="hover:text-emerald-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-emerald-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-400" /> +56 9 4034 9957</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Av. Vicuña Mackenna 2362, Ñuñoa</p>
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /> Lun - Sáb: 9:00 - 18:00</p>
              <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <GoogleIcon className="h-4 w-4" /> Ver perfil en Google
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2024 Limpieza24/7. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politicas-de-privacidad" className="hover:text-emerald-400 transition-colors">Políticas de Privacidad</Link>
            <Link href="/preguntas-frecuentes" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

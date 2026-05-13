"use client";

import Link from "next/link";
import {
  Phone, Mail, MapPin, Menu, X, ChevronRight, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function PoliticasDePrivacidadPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/atomoclean-logo.png" alt="ÁtomoClean" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-emerald-800 tracking-tight">ÁtomoClean</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">Inicio</Link>
              <Link href="/quienes-somos" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">Quiénes Somos</Link>
              <Link href="/contacto" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">Contacto</Link>
              <Link href="/preguntas-frecuentes" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">Preguntas</Link>
              <Button onClick={() => window.open("https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza", "_blank")} className="ml-3 bg-emerald-600 hover:bg-emerald-700 text-white" size="sm">
                <Phone className="w-4 h-4 mr-1" /> Cotizar
              </Button>
            </nav>
            <button className="md:hidden p-2 text-gray-700" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menú">
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenu && (
            <nav className="md:hidden pb-4 border-t border-emerald-100 mt-2 pt-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">Inicio</Link>
              <Link href="/quienes-somos" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">Quiénes Somos</Link>
              <Link href="/contacto" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">Contacto</Link>
              <Link href="/preguntas-frecuentes" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">Preguntas Frecuentes</Link>
              <Link href="/politicas-de-privacidad" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg">Políticas de Privacidad</Link>
              <Button onClick={() => window.open("https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza", "_blank")} className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Phone className="w-4 h-4 mr-2" /> Cotizar por WhatsApp
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* BREADCRUMB */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-emerald-700 transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-emerald-700 font-medium">Políticas de Privacidad</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-emerald-500/30 text-emerald-100 border-emerald-400/40 text-sm">Legal</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Políticas de <span className="text-emerald-300">Privacidad</span>
              </h1>
              <p className="text-emerald-100 leading-relaxed">Última actualización: Mayo 2026</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none"><path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z" fill="white" /></svg>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-emerald">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Protección de tus datos personales</h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              En ÁtomoClean, nos comprometemos a proteger la privacidad de nuestros clientes y visitantes de nuestro sitio web. Esta política de privacidad explica qué información recopilamos, cómo la usamos y qué derechos tienes respecto a tus datos personales, en cumplimiento con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">1. Información que recopilamos</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Recopilamos información que nos proporcionas directamente al utilizar nuestros servicios o interactuar con nuestro sitio web. Esta información incluye: nombre completo, número de teléfono, dirección de correo electrónico, dirección del domicilio donde se realizará el servicio, tipo de servicio solicitado, y cualquier otra información que decidas compartir con nosotros a través del formulario de contacto, WhatsApp o llamada telefónica.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">2. Uso de la información</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              La información que recopilamos se utiliza exclusivamente para los siguientes fines: procesar solicitudes de cotización y reserva de servicios de limpieza, comunicarnos contigo para coordinar horarios y detalles del servicio, emitir comprobantes tributarios (boleta o factura) según tu requerimiento, mejorar la calidad de nuestros servicios, y enviarte comunicaciones relacionadas con nuestros servicios únicamente si has dado tu consentimiento expreso.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">3. Protección de datos</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tu información personal contra acceso no autorizado, pérdida, destrucción o alteración. Tu información personal se almacena de forma segura y solo es accesible por personal autorizado de ÁtomoClean que necesita acceder a ella para prestar los servicios solicitados. No compartimos tu información personal con terceros sin tu consentimiento previo, salvo cuando sea necesario para cumplir con obligaciones legales.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">4. Cookies y tecnologías similares</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio. Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para entender cómo los visitantes interactúan con nuestro contenido. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">5. Servicios de terceros</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nuestro sitio web puede contener enlaces a sitios de terceros, como WhatsApp, Google Maps u otras plataformas. Ten en cuenta que no somos responsables de las prácticas de privacidad de estos sitios externos. Te recomendamos leer las políticas de privacidad de cada sitio que visites. El uso de WhatsApp para comunicarte con nosotros está sujeto a la política de privacidad de Meta Platforms, Inc.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">6. Derechos del titular de datos</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              De acuerdo con la legislación chilena, tienes derecho a: acceder a la información personal que tenemos sobre ti, solicitar la corrección de datos inexactos o incompletos, solicitar la eliminación de tus datos personales cuando ya no sean necesarios para los fines para los cuales fueron recopilados, y oponerte al tratamiento de tus datos por motivos legítimos. Para ejercer cualquiera de estos derechos, puedes contactarnos a través de contacto@atomoclean.com o al teléfono +56 9 4034 9957.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">7. Retención de datos</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Conservaremos tu información personal solo durante el tiempo necesario para cumplir con los fines para los cuales fue recopilada, incluyendo obligaciones legales, contables o de reporte. Los datos de clientes se conservan por un período de hasta 5 años desde la última interacción comercial, de acuerdo con las exigencias del Servicio de Impuestos Internos (SII) de Chile.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">8. Modificaciones a esta política</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página con la fecha de última actualización. Te recomendamos revisar esta política periódicamente para mantenerte informado sobre cómo protegemos tu información.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">9. Contacto</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Si tienes preguntas, comentarios o solicitudes relacionadas con esta política de privacidad o el tratamiento de tus datos personales, no dudes en contactarnos:
            </p>
            <div className="bg-emerald-50 rounded-xl p-6 space-y-3 mb-8">
              <p className="flex items-center gap-3 text-gray-700"><Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" /> <strong>Email:</strong> contacto@atomoclean.com</p>
              <p className="flex items-center gap-3 text-gray-700"><Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" /> <strong>Teléfono:</strong> +56 9 4034 9957</p>
              <p className="flex items-center gap-3 text-gray-700"><MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" /> <strong>Dirección:</strong> Av. Vicuña Mackenna 2362, Ñuñoa, Santiago, Región Metropolitana, Chile</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <img src="/atomoclean-logo.png" alt="ÁtomoClean" className="w-8 h-8 rounded-full" />
                <span className="text-lg font-bold text-white">ÁtomoClean</span>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed">Limpieza a domicilio con aspiradora a vapor en Santiago de Chile.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                {["Limpieza de casas", "Limpieza de alfombras", "Limpieza de sillones", "Limpieza de colchones", "Limpieza de autos", "Limpieza Airbnb"].map((item) => (<li key={item}><Link href="/" className="hover:text-emerald-400 transition-colors">{item}</Link></li>))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/quienes-somos" className="hover:text-emerald-400 transition-colors">Quiénes Somos</Link></li>
                <li><Link href="/contacto" className="hover:text-emerald-400 transition-colors">Contacto</Link></li>
                <li><Link href="/preguntas-frecuentes" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</Link></li>
                <li><Link href="/politicas-de-privacidad" className="hover:text-emerald-400 transition-colors">Políticas de Privacidad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-400" /> +56 9 4034 9957</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-400" /> contacto@atomoclean.com</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Av. Vicuña Mackenna 2362, Ñuñoa</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; 2024 ÁtomoClean. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <Link href="/politicas-de-privacidad" className="hover:text-emerald-400 transition-colors">Políticas de Privacidad</Link>
              <Link href="/preguntas-frecuentes" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BAR */}
      <div className="sticky-bottom-bar">
        <div className="big-buttons-container">
          <a href="tel:940349957" className="btn-massive-call"><Phone className="w-6 h-6" /> LLAMAR</a>
          <a href="https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza" className="btn-massive-wa" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            WHATSAPP
          </a>
        </div>
      </div>

      <style jsx>{`
        .sticky-bottom-bar { position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999; background: transparent; padding: 0; pointer-events: none; }
        .big-buttons-container { display: flex; gap: 0; pointer-events: auto; }
        .btn-massive-call { flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 16px 12px; font-size: 15px; font-weight: 700; background: #059669; color: white; text-decoration: none; transition: background 0.2s; }
        .btn-massive-call:hover { background: #047857; }
        .btn-massive-wa { flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 16px 12px; font-size: 15px; font-weight: 700; background: #25D366; color: white; text-decoration: none; transition: background 0.2s; }
        .btn-massive-wa:hover { background: #1da851; }
      `}</style>
    </div>
  );
}

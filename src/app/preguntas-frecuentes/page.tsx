"use client";

import Link from "next/link";
import {
  Phone, Mail, MapPin, Menu, X, ChevronRight, ChevronDown, ChevronUp, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const FAQS = [
  {
    q: "¿En qué zonas de Santiago atienden?",
    a: "Atendemos en toda la Región Metropolitana, incluyendo Ñuñoa, Providencia, Las Condes, Vitacura, La Reina, Peñalolén, Macul, San Miguel, Santiago Centro, La Florida, Puente Alto y comunas cercanas. Si estás en otra ubicación, consúltanos y te confirmamos disponibilidad.",
  },
  {
    q: "¿Cómo funciona el servicio de limpieza a vapor?",
    a: "Utilizamos equipos profesionales de aspiradora a vapor que inyectan vapor de alta temperatura en las fibras y superficies. El vapor disuelve la suciedad, elimina bacterias, ácaros y gérmenes, y luego se extrae con succión potente. Es un método ecológico que no requiere productos químicos agresivos.",
  },
  {
    q: "¿Cuánto tiempo toma la limpieza de un sillón o alfombra?",
    a: "El tiempo varía según el tamaño y estado del artículo. Un sillón individual toma aproximadamente 30-40 minutos, una alfombra estándar entre 45-60 minutos, y un sofá completo de 3 plazas entre 60-90 minutos. Te daremos un tiempo estimado al momento de cotizar.",
  },
  {
    q: "¿La limpieza a vapor daña los tejidos o materiales?",
    a: "No. Nuestro equipo profesional está calibrado para ser seguro en todo tipo de materiales: telas, cuero, microfibra, alfombras de lana, sintéticas y más. Nuestro personal está capacitado para identificar el tipo de material y ajustar la técnica y temperatura adecuadas.",
  },
  {
    q: "¿Ofrecen boleta o factura?",
    a: "Sí, emitimos boleta o factura según tu requerimiento. Solo indícalo al momento de solicitar tu cotización y te enviamos el comprobante tributario correspondiente una vez finalizado el servicio.",
  },
  {
    q: "¿Puedo agendar el servicio para fin de semana?",
    a: "Sí, tenemos disponibilidad de lunes a sábado en jornadas de mañana (desde las 9:00 hrs) y tarde (desde las 13:00 hrs). También atendemos emergencias las 24 horas. Agenda con anticipación para asegurar tu horario preferido.",
  },
  {
    q: "¿Cuánto cuesta el servicio de limpieza?",
    a: "Los precios varían según el tipo de servicio, tamaño del espacio y nivel de suciedad. Ofrecemos precios transparentes y sin sorpresas. Cotiza gratis en segundos a través de nuestro formulario, WhatsApp o llamándonos al +56 9 4034 9957.",
  },
  {
    q: "¿Qué debo preparar antes del servicio?",
    a: "Solo necesitas tener accesible el área a limpiar y retirar objetos personales o frágiles de las superficies. Nuestro equipo llega con todo el equipamiento y productos necesarios. No necesitas proporcionar nada adicional.",
  },
  {
    q: "¿Atienden emergencias de limpieza?",
    a: "Sí, somos el único servicio de limpieza en Santiago que atiende emergencias las 24 horas, los 7 días de la semana. Ya sea por derrames, accidentes o situaciones imprevistas, llámanos y responderemos lo antes posible.",
  },
  {
    q: "¿El servicio tiene garantía?",
    a: "Sí, todos nuestros servicios cuentan con garantía de satisfacción. Si no quedas conforme con el resultado, volvemos a realizar el servicio sin costo adicional. Tu satisfacción es nuestra prioridad absoluta.",
  },
  {
    q: "¿Qué servicios de limpieza ofrecen?",
    a: "Ofrecemos una amplia variedad de servicios de limpieza a vapor: limpieza de casas y departamentos, oficinas, alfombras, sillones y tapicería, colchones, cortinas, tapicería de autos, Airbnb y hoteles, post obra, vidrios y ventanas, tapiz de paredes, frentes de casas, baños, parques, y limpieza para clínicas, gyms y escuelas. Además limpiamos muebles, camas, paredes y ventanas.",
  },
  {
    q: "¿Limpian desastres que realizan las mascotas?",
    a: "Sí, limpiamos desastres de mascotas como orina, heces, vómito y manchas difíciles en alfombras, sillones, colchones y pisos. Nuestro sistema de vapor no solo elimina la mancha visible, sino que también desinfecta y neutraliza olores en profundidad, dejando el área completamente higienizada y libre de bacterias.",
  },
  {
    q: "¿Hacen limpieza después de fiestas o eventos?",
    a: "Sí, ofrecemos limpieza completa después de fiestas, reuniones y eventos. Retiramos restos de comida, bebidas derramadas, manchas en muebles y alfombras, limpiamos baños, cocina y todas las áreas afectadas. Dejamos tu espacio impecable para que no tengas que preocuparte por nada al día siguiente.",
  },
  {
    q: "¿Limpian hoteles y propiedades de Airbnb?",
    a: "Sí, tenemos un servicio especializado para hoteles, Airbnb y alojamientos turísticos. Realizamos limpieza profesional por cada cambio de huésped, incluyendo desinfección completa con vapor, cambio de ropa de cama, limpieza de baños, cocina y áreas comunes. Emitimos informes detallados para el anfitrión.",
  },
  {
    q: "¿Limpian frentes de casas, paredes y ventanas?",
    a: "Sí, realizamos limpieza de frentes de casas, fachadas, paredes exteriores e interiores, ventanas y vidrios. Eliminamos suciedad acumulada, manchas de humedad, polvo contaminante y mugre. También limpiamos tapiz de paredes con inyección y extracción a vapor, recuperando su apariencia original.",
  },
  {
    q: "¿Limpian parques o áreas exteriores?",
    a: "Sí, ofrecemos limpieza de áreas exteriores como parques, jardines, patios y terrazas. Limpiamos superficies de madera, stone, cerámica y concreto. También realizamos limpieza de muebles de exterior que hayan acumulado suciedad por exposición a la intemperie.",
  },
  {
    q: "¿Limpian tapicería de autos, alfombras, muebles, cortinas, camas y colchones?",
    a: "Sí, estos son algunos de nuestros servicios más solicitados. Limpiamos la tapicería completa de autos (asientos, alfombras, techo y paneles), alfombras de todo tipo y tamaño, muebles de tela y cuero, cortinas sin desmontar, camas y colchones con desinfección profunda que elimina el 99% de ácaros y bacterias.",
  },
  {
    q: "¿Cuánto tiempo de secado necesita después de la limpieza a vapor?",
    a: "Gracias a nuestro sistema profesional de inyección y extracción, el secado es rápido. Alfombras y sillones suelen secar entre 2 a 4 horas. Colchones y cortinas secan en 1 a 2 horas. El tiempo puede variar según la ventilación del espacio.",
  },
  {
    q: "¿Es seguro para personas con alergias o mascotas?",
    a: "Sí. Al no usar productos químicos agresivos, nuestro servicio de limpieza a vapor es ideal para hogares con personas alérgicas, niños pequeños y mascotas. De hecho, eliminamos ácaros, polen y otros alérgenos que pueden causar reacciones.",
  },
  {
    q: "¿Con qué frecuencia se recomienda limpiar los colchones?",
    a: "Recomendamos una limpieza profesional de colchones al menos cada 6 meses. Sin embargo, para personas con alergias, asma o mascotas en casa, sugerimos una limpieza cada 3 a 4 meses para mantener un ambiente saludable y libre de ácaros.",
  },
];

export default function PreguntasFrecuentesPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <Link href="/preguntas-frecuentes" className="px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg transition-colors">Preguntas</Link>
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
              <Link href="/preguntas-frecuentes" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg">Preguntas Frecuentes</Link>
              <Link href="/politicas-de-privacidad" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">Políticas de Privacidad</Link>
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
              <span className="text-emerald-700 font-medium">Preguntas Frecuentes</span>
            </nav>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <img src="/hero-cleaning.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-emerald-500/30 text-emerald-100 border-emerald-400/40 text-sm">FAQ</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Preguntas <span className="text-emerald-300">Frecuentes</span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl">
                Encuentra respuestas a las dudas más comunes sobre nuestros servicios de limpieza a vapor a domicilio en Santiago.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none"><path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z" fill="white" /></svg>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">Todo lo que necesitas saber</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resolvemos tus dudas</h2>
              <p className="text-lg text-gray-600">
                Si no encuentras la respuesta que buscas, contáctanos directamente y te ayudaremos.
              </p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors">
                  <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpenFaq(openFaq === idx ? null : idx)} aria-expanded={openFaq === idx}>
                    <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFaq === idx && <div className="px-5 pb-5"><p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">¿Tienes otra pregunta?</h2>
            <p className="text-gray-600 mb-8">No dudes en contactarnos. Estamos disponibles para resolver todas tus dudas sobre nuestros servicios de limpieza.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-8" onClick={() => window.open("https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20tengo%20una%20consulta%20sobre%20sus%20servicios", "_blank")}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Preguntar por WhatsApp
              </Button>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-base px-8">Ir a Contacto</Button>
              </Link>
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

    </div>
  );
}

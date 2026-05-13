"use client";

import Link from "next/link";
import {
  ShieldCheck, Leaf, Clock, HeartHandshake, CheckCircle2,
  Phone, MapPin, Mail, ArrowRight, Menu, X, ChevronRight, Star, Users, Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const STATS = [
  { value: "2.000+", label: "Hogares atendidos" },
  { value: "98%", label: "Satisfacción" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "100%", label: "Ecológico" },
];

const TESTIMONIALS = [
  { name: "María González", text: "Excelente servicio. Limpiaron mi sofá y quedó como nuevo. Muy puntuales y profesionales. Los recomiendo 100% para limpieza a domicilio.", rating: 5, service: "Limpieza de sillones" },
  { name: "Carlos Muñoz", text: "Contraté la limpieza post obra de mi departamento y quedó impecable. Muy eficientes y el precio fue justo. Sin duda volveré a contratar.", rating: 5, service: "Limpieza post obra" },
  { name: "Ana López", text: "Uso el servicio para mi Airbnb cada vez que cambia un huésped. Los huéspedes siempre destacan lo limpio que está. Mis reservas han aumentado gracias a esto.", rating: 5, service: "Limpieza Airbnb" },
  { name: "Roberto Silva", text: "Me limpiaron las alfombras de toda la casa con vapor. Quedaron espectaculares y sin olores. El servicio fue rápido y el equipo muy amable. Gran experiencia.", rating: 5, service: "Limpieza de alfombras" },
];

export default function QuienesSomosPage() {
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
              <Link href="/quienes-somos" className="px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg transition-colors">Quiénes Somos</Link>
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
              <Link href="/quienes-somos" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg">Quiénes Somos</Link>
              <Link href="/contacto" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">Contacto</Link>
              <Link href="/preguntas-frecuentes" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg">Preguntas Frecuentes</Link>
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
              <span className="text-emerald-700 font-medium">Quiénes Somos</span>
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
              <Badge className="mb-4 bg-emerald-500/30 text-emerald-100 border-emerald-400/40 text-sm">
                Sobre Nosotros
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Somos <span className="text-emerald-300">ÁtomoClean</span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl">
                Empresa de limpieza profesional con sede en Santiago de Chile, especializada en servicios de limpieza a domicilio con aspiradora a vapor.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-emerald-200 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none"><path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z" fill="white" /></svg>
          </div>
        </section>

        {/* NUESTRA HISTORIA */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">Nuestra Historia</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transformamos espacios, cuidamos personas</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En <strong>ÁtomoClean</strong> somos una empresa de limpieza profesional con sede en Santiago de Chile, especializada en servicios de limpieza a domicilio con aspiradora a vapor. Nuestra misión es transformar los espacios de nuestros clientes mediante tecnología de vanguardia y un equipo altamente capacitado.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nos diferenciamos por utilizar equipos profesionales de inyección y extracción a vapor que eliminan el 99% de bacterias, ácaros y gérmenes sin necesidad de productos químicos agresivos. Esto nos permite ofrecer un servicio que cuida la salud de tu familia, tus mascotas y el medio ambiente.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Con más de <strong>2.000 hogares atendidos</strong> en Santiago, contamos con un equipo de profesionales certificados que se adaptan a cada necesidad. Ya sea tu casa, departamento, oficina, Airbnb o vehículo, tenemos la solución de limpieza perfecta para ti.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Plataforma de gestión de reservas",
                    "Garantía en todos nuestros servicios",
                    "Canal de atención excepcional",
                    "Emergencias de limpieza 24/7",
                    "Compromiso con el medio ambiente",
                    "Feedback post-servicio",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-50 rounded-2xl p-8 lg:p-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Nuestros Compromisos</h3>
                  <div className="space-y-5">
                    {[
                      { icon: ShieldCheck, title: "Calidad Garantizada", desc: "Si no quedas conforme, volvemos sin costo adicional. Tu satisfacción es nuestra prioridad." },
                      { icon: Leaf, title: "100% Ecológico", desc: "Sin químicos agresivos. Cuidamos tu salud y el planeta con tecnología de vapor." },
                      { icon: Clock, title: "Puntualidad Total", desc: "Cumplimos con los horarios acordados, siempre. Respetamos tu tiempo." },
                      { icon: HeartHandshake, title: "Atención Humana", desc: "Canal de feedback y seguimiento después del servicio. Escuchamos a nuestros clientes." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUE ELEGIRNOS */}
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">Nuestros Valores</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir ÁtomoClean?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nos diferenciamos de otros servicios de limpieza por nuestro compromiso con la calidad, la tecnología y la atención personalizada.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: "Compromiso Ecológico", desc: "Utilizamos tecnología de vapor que elimina el 99% de bacterias sin productos químicos agresivos. Cuidamos tu salud, la de tu familia y el medio ambiente con cada servicio que realizamos." },
                { icon: Users, title: "Equipo Certificado", desc: "Nuestro personal está certificado y capacitado continuamente en las últimas técnicas de limpieza profesional. Cada miembro del equipo domina el uso de equipos de inyección y extracción a vapor." },
                { icon: Award, title: "Tecnología de Punta", desc: "Invertimos constantemente en equipos profesionales de última generación. Nuestro sistema de aspiradora a vapor permite resultados superiores en menos tiempo, con secado rápido." },
                { icon: ShieldCheck, title: "Garantía Total", desc: "Todos nuestros servicios cuentan con garantía de satisfacción. Si el resultado no cumple tus expectativas, volvemos a realizar el servicio completamente gratis sin costo adicional." },
                { icon: Clock, title: "Disponibilidad 24/7", desc: "Somos el único servicio de limpieza en Santiago que atiende emergencias las 24 horas del día, los 7 días de la semana. Siempre estamos disponibles cuando más nos necesitas." },
                { icon: HeartHandshake, title: "Atención Personalizada", desc: "Nos adaptamos a tus horarios, necesidades y preferencias. Cada cliente es único y merece un servicio diseñado a su medida, no un enfoque genérico de limpieza." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-emerald-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="py-20 bg-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">Testimonios</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">Más de 2.000 hogares en Santiago confían en ÁtomoClean.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 px-6 pb-6">
                    <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />))}</div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                    <Separator className="mb-3 bg-gray-100" />
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-emerald-600">{t.service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para probar nuestros servicios?</h2>
            <p className="text-emerald-100 mb-8 text-lg leading-relaxed">Cotiza gratis y recibe un 5% de descuento en tu primer servicio de limpieza a domicilio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold text-base px-8" onClick={() => window.open("https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza", "_blank")}>
                Cotizar por WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 text-base px-8">Ir a Contacto</Button>
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

      <style jsx>{`
        .sticky-bottom-bar {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
          background: transparent; padding: 0; pointer-events: none;
        }
        .big-buttons-container {
          display: flex; gap: 0; pointer-events: auto;
        }
        .btn-massive-call {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 16px 12px; font-size: 15px; font-weight: 700;
          background: #059669; color: white; text-decoration: none;
          transition: background 0.2s;
        }
        .btn-massive-call:hover { background: #047857; }
        .btn-massive-wa {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 16px 12px; font-size: 15px; font-weight: 700;
          background: #25D366; color: white; text-decoration: none;
          transition: background 0.2s;
        }
        .btn-massive-wa:hover { background: #1da851; }
      `}</style>
    </div>
  );
}

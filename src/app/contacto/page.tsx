"use client";

import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, CheckCircle2,
  Send, Menu, X, ChevronRight, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const SERVICES_LIST = [
  "Limpieza de Casas y Departamentos",
  "Limpieza de Oficinas",
  "Limpieza de Alfombras",
  "Limpieza de Sillones y Tapicería",
  "Limpieza de Colchones",
  "Limpieza de Cortinas",
  "Limpieza de Tapicería de Autos",
  "Limpieza para Airbnb y Hoteles",
  "Limpieza Post Obra",
  "Limpieza de Vidrios y Ventanas",
  "Limpieza de Tapiz de Paredes",
  "Limpieza para Clínicas, Gyms y Escuelas",
];

export default function ContactoPage() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", telefono: "", correo: "", mensaje: "", servicio: "" });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
    setFormData({ nombre: "", telefono: "", correo: "", mensaje: "", servicio: "" });
  };

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
              <Link href="/contacto" className="px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg transition-colors">Contacto</Link>
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
              <Link href="/contacto" onClick={() => setMobileMenu(false)} className="px-4 py-3 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg">Contacto</Link>
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
              <span className="text-emerald-700 font-medium">Contacto</span>
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
              <Badge className="mb-4 bg-emerald-500/30 text-emerald-100 border-emerald-400/40 text-sm">Contáctanos</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                ¿Listo para dejar tu hogar <span className="text-emerald-300">impecable</span>?
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl">
                Llena el formulario de contacto y reclama un 5% de descuento en cualquiera de nuestros servicios de limpieza a domicilio en Santiago.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none"><path d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z" fill="white" /></svg>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Estamos disponibles para atenderte de múltiples formas. Elige la que más te acomode y te responderemos a la brevedad. Recuerda que al contactarnos por formulario te otorgamos un 5% de descuento en tu primer servicio.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Teléfono / WhatsApp</h3>
                      <a href="https://wa.me/56940349957" target="_blank" rel="noopener noreferrer" className="text-lg text-emerald-600 font-bold hover:text-emerald-700 transition-colors">+56 9 4034 9957</a>
                      <p className="text-sm text-gray-500 mt-1">Respuesta inmediata por WhatsApp. Atención de emergencias 24/7.</p>
                    </div>
                  </div>
                  <Separator className="bg-gray-100" />
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Correo Electrónico</h3>
                      <a href="mailto:contacto@atomoclean.com" className="text-lg text-emerald-600 font-bold hover:text-emerald-700 transition-colors">contacto@atomoclean.com</a>
                      <p className="text-sm text-gray-500 mt-1">Te respondemos en un plazo máximo de 2 horas hábiles.</p>
                    </div>
                  </div>
                  <Separator className="bg-gray-100" />
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                      <p className="text-lg text-gray-700 font-bold">Av. Vicuña Mackenna 2362, Ñuñoa, Santiago</p>
                      <p className="text-sm text-gray-500 mt-1">Atendemos en toda la Región Metropolitana a domicilio.</p>
                    </div>
                  </div>
                  <Separator className="bg-gray-100" />
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horario de Atención</h3>
                      <p className="text-lg text-gray-700 font-bold">Lunes a Sábado: 9:00 - 18:00 hrs</p>
                      <p className="text-sm text-emerald-600 font-semibold">Emergencias: 24/7</p>
                      <p className="text-sm text-gray-500 mt-1">Domingos y festivos solo emergencias.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-emerald-100">
                {formSent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-600 mb-4">Te contactaremos en los próximos minutos. ¡Gracias por elegir ÁtomoClean!</p>
                    <Button onClick={() => setFormSent(false)} className="bg-emerald-600 hover:bg-emerald-700 text-white">Enviar otro mensaje</Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Contáctanos</h3>
                    <p className="text-sm text-gray-500 mb-6">Completa el formulario y recibe <strong className="text-emerald-600">5% de descuento</strong> en tu primer servicio.</p>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="nombre" className="text-gray-700 text-sm font-medium">Nombre Completo</Label>
                        <Input id="nombre" placeholder="Tu nombre" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="telefono" className="text-gray-700 text-sm font-medium">Teléfono</Label>
                        <Input id="telefono" type="tel" placeholder="9 1234 5678" required value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="correo" className="text-gray-700 text-sm font-medium">Correo Electrónico</Label>
                        <Input id="correo" type="email" placeholder="tu@correo.com" required value={formData.correo} onChange={(e) => setFormData({ ...formData, correo: e.target.value })} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="servicio" className="text-gray-700 text-sm font-medium">¿Qué servicio necesitas?</Label>
                        <select id="servicio" value={formData.servicio} onChange={(e) => setFormData({ ...formData, servicio: e.target.value })} className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                          <option value="">Selecciona un servicio...</option>
                          {SERVICES_LIST.map((s) => (<option key={s} value={s}>{s}</option>))}
                          <option value="otro">Otro servicio</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="mensaje" className="text-gray-700 text-sm font-medium">Mensaje</Label>
                        <Textarea id="mensaje" placeholder="Cuéntanos qué necesitas, en qué comuna te encuentras y cualquier detalle relevante..." rows={4} value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="mt-1" />
                      </div>
                      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base" size="lg">
                        <Send className="w-4 h-4 mr-2" /> Enviar y Obtener 5% de Descuento
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTION */}
        <section className="py-16 bg-emerald-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">¿Prefieres una respuesta inmediata?</h2>
            <p className="text-gray-600 mb-8">Escríbenos por WhatsApp y recibe una cotización en menos de 2 minutos.</p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-10" onClick={() => window.open("https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza", "_blank")}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Escribir por WhatsApp Ahora
            </Button>
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

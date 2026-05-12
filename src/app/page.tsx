"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home as HomeIcon,
  Building2,
  Sparkles,
  Armchair,
  Bed,
  Wind,
  Car,
  Hotel,
  HardHat,
  GlassWater,
  Frame,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Zap,
  Leaf,
  HeartHandshake,
  Award,
  CheckCircle2,
  Send,
  ArrowRight,
} from "lucide-react";
import { COMUNAS, COMUNAS_DESTACADAS } from "@/lib/comunas-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/* ───────────────────────────── DATA ───────────────────────────── */

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Quiénes Somos", href: "#nosotros" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    icon: HomeIcon,
    title: "Limpieza de Casas y Departamentos",
    keyword: "Limpieza de casas a domicilio",
    slug: "limpieza-casas-departamentos",
    text: "Servicio de limpieza profunda y de rutina para casas y departamentos en Santiago. Nuestro equipo especializado utiliza aspiradora a vapor para eliminar el 99% de bacterias y ácaros, dejando cada rincón impecable sin usar productos químicos agresivos.",
    features: [
      "Limpieza de dormitorios, baños, cocina y living",
      "Aspirado profundo con tecnología a vapor",
      "Productos ecológicos y seguros para tu familia",
      "Flexibilidad de horarios adaptada a ti",
    ],
  },
  {
    icon: Building2,
    title: "Limpieza de Oficinas",
    keyword: "Limpieza de oficinas a domicilio",
    slug: "limpieza-oficinas",
    text: "Mantenemos tu entorno de trabajo limpio, higiénico y productivo. Ofrecemos planes de limpieza semanal o quincenal para oficinas en Santiago, adaptándonos a tus horarios para no interrumpir las operaciones diarias de tu negocio.",
    features: [
      "Planes de mantenimiento semanal o quincenal",
      "Desinfección de superficies de alto contacto",
      "Limpieza de zonas comunes y baños",
      "Horarios personalizados fuera de horario laboral",
    ],
  },
  {
    icon: Sparkles,
    title: "Limpieza de Alfombras",
    keyword: "Limpieza de alfombras a vapor",
    slug: "limpieza-alfombras",
    text: "Recupera la frescura y apariencia original de tus alfombras con nuestra limpieza profesional a vapor. Eliminamos suciedad incrustada, manchas difíciles, ácaros y alérgenos, dejando tus alfombras sanitizadas, limpias y listas para uso inmediato.",
    features: [
      "Tecnología de inyección y extracción a vapor",
      "Eliminación de ácaros, bacterias y malos olores",
      "Tratamiento de manchas difíciles y pigmentación",
      "Servicio para alfombras de muro a muro y decorativas",
    ],
  },
  {
    icon: Armchair,
    title: "Limpieza de Sillones y Tapicería",
    keyword: "Limpieza de sillones y tapicería",
    slug: "limpieza-sillones-tapiceria",
    text: "Devolvé la vida a tus sillones, sofás y toda la tapicería del hogar o auto. Nuestro sistema de limpieza a vapor penetra profundamente en las fibras, eliminando manchas, ácaros, bacterias y olores sin mojar ni dañar los tejidos.",
    features: [
      "Limpieza profunda de sofás, sillones y sillas",
      "Eliminación de ácaros y bacterias en fibras",
      "Sin humedad excesiva: secado rápido",
      "Seguro para todo tipo de telas y materiales",
    ],
  },
  {
    icon: Bed,
    title: "Limpieza de Colchones",
    keyword: "Limpieza de colchones a vapor",
    slug: "limpieza-colchones",
    text: "Desinfección profunda de colchones con tecnología a vapor. Eliminamos ácaros, bacterias, hongos y manchas que se acumulan con el tiempo. Tu colchón queda higienizado, desodorizado y listo para un descanso saludable sin productos químicos.",
    features: [
      "Eliminación del 99% de ácaros y bacterias",
      "Desodorización natural con vapor",
      "Secado rápido y sin residuos húmedos",
      "Recomendado para alérgicos y personas con asma",
    ],
  },
  {
    icon: Wind,
    title: "Limpieza de Cortinas",
    keyword: "Limpieza de cortinas a domicilio",
    slug: "limpieza-cortinas",
    text: "Limpieza profesional de cortinas y visillos sin necesidad de desmontarlos. Nuestro sistema a vapor elimina polvo, alérgenos, manchas y olores incrustados, devolviendo la frescura y color original a tus cortinas de forma rápida y segura.",
    features: [
      "Limpieza sin desmontar: ahorra tiempo y esfuerzo",
      "Eliminación de polvo y ácaros acumulados",
      "Cuidado de telas delicadas y gruesas",
      "Resultado inmediato sin tiempos de espera largos",
    ],
  },
  {
    icon: Car,
    title: "Limpieza de Tapicería de Autos",
    keyword: "Limpieza de tapicería de autos",
    slug: "limpieza-autos",
    text: "Limpieza profesional de la tapicería completa de tu vehículo a domicilio. Asientos, alfombras, techo y paneles quedan impecables con nuestro sistema de vapor que elimina manchas, olores, bacterias y ácaros sin dañar los materiales del auto.",
    features: [
      "Asientos de tela, cuero y mixtos",
      "Alfombras y tapetes del vehículo",
      "Techo, paneles y portamaletas",
      "Eliminación de olores de mascotas y tabaco",
    ],
  },
  {
    icon: Hotel,
    title: "Limpieza para Airbnb y Hoteles",
    keyword: "Limpieza a vapor para Airbnb",
    slug: "limpieza-airbnb-hoteles",
    text: "Servicio especializado para propiedades de Airbnb, hoteles y alojamientos turísticos en Santiago. Garantizamos un estándar de limpieza impecable para cada cambio de huésped, con desinfección a vapor que asegura un espacio seguro y hospitalario.",
    features: [
      "Limpieza estándar profesional por cambio de huésped",
      "Desinfección completa con tecnología a vapor",
      "Lavado de ropa de cama y toallas incluido",
      "Informes detallados post-limpieza para el anfitrión",
    ],
  },
  {
    icon: HardHat,
    title: "Limpieza Post Obra",
    keyword: "Limpieza post obra construcción",
    slug: "limpieza-post-obra",
    text: "Retiramos polvo, escombros, manchas de pintura, cemento y residuos de construcción tras cualquier reforma u obra. Dejamos tu nuevo espacio completamente limpio, desinfectado y listo para habitar, decorar o entregar sin preocupaciones.",
    features: [
      "Retiro de polvo fino y escombros",
      "Limpieza de manchas de pintura y cemento",
      "Desinfección completa del espacio nuevo",
      "Listo para habitabilidad inmediata",
    ],
  },
  {
    icon: GlassWater,
    title: "Limpieza de Vidrios y Ventanas",
    keyword: "Limpieza de vidrios ventanas",
    slug: "limpieza-vidrios-ventanas",
    text: "Removemos manchas, polvo, marcas de agua y suciedad de todos tus vidrios y ventanas. Nuestro servicio deja cada cristal impecable y transparente, mejorando la luminosidad y apariencia de tu hogar u oficina en Santiago.",
    features: [
      "Vidrios interiores y exteriores",
      "Marcos y rieles de ventanas",
      "Eliminación de manchas de agua y cal",
      "Espejos y mamparas de baño",
    ],
  },
  {
    icon: Frame,
    title: "Limpieza de Tapiz de Paredes",
    keyword: "Limpieza de tapiz paredes",
    slug: "limpieza-tapiz-paredes",
    text: "Limpieza especializada de tapices murales con tecnología de inyección y extracción. Recuperamos la apariencia original de tus tapices de pared eliminando bacterias, manchas, olores y polvo acumulado, prolongando su vida útil y belleza.",
    features: [
      "Inyección y extracción profesional de vapor",
      "Eliminación de bacterias y hongos en paredes",
      "Tratamiento anti-manchas y pigmentación",
      "Secado rápido sin dañar la estructura del tapiz",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Limpieza para Clínicas, Gyms y Escuelas",
    keyword: "Limpieza de clínicas gimnasios",
    slug: "limpieza-clinicas-gyms-escuelas",
    text: "Desinfección profesional para espacios de alta circulación como clínicas, consultorios, gimnasios y escuelas. Nuestro sistema de vapor elimina patógenos, virus y bacterias sin químicos agresivos, creando ambientes seguros e higiénicos para todas las personas.",
    features: [
      "Desinfección hospitalaria con tecnología a vapor",
      "Eliminación de virus, gérmenes y bacterias",
      "Sin químicos agresivos: seguro para pacientes y niños",
      "Planes de mantenimiento periódico adaptados",
    ],
  },
];

const FAQS = [
  {
    q: "¿En qué zonas de Santiago atienden?",
    a: "Atendemos en toda la Región Metropolitana, incluyendo Ñuñoa, Providencia, Las Condes, Vitacura, La Reina, Peñalolén, Macul, San Miguel, Santiago Centro, La Florida, Puente Alto y comunas cercanas. Si estás en otra ubicación, consúltanos y te confirmamos disponibilidad.",
  },
  {
    q: "¿Cómo funciona el servicio de limpieza a vapor?",
    a: "Utilizamos equipos profesionales de aspiradora a vapor que inyectan vapor de alta temperatura en las fibras y superficies. El vapor disuelve la suciedad, elimina bacterias, ácaros y germenes, y luego se extrae con succión potente. Es un método ecológico que no requiere productos químicos agresivos.",
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
];

const TESTIMONIALS = [
  {
    name: "María González",
    text: "Excelente servicio. Limpiaron mi sofá y quedó como nuevo. Muy puntuales y profesionales. Los recomiendo 100% para limpieza a domicilio.",
    rating: 5,
    service: "Limpieza de sillones",
  },
  {
    name: "Carlos Muñoz",
    text: "Contraté la limpieza post obra de mi departamento y quedó impecable. Muy eficientes y el precio fue justo. Sin duda volveré a contratar.",
    rating: 5,
    service: "Limpieza post obra",
  },
  {
    name: "Ana López",
    text: "Uso el servicio para mi Airbnb cada vez que cambia un huésped. Los huéspedes siempre destacan lo limpio que está. Mis reservas han aumentado gracias a esto.",
    rating: 5,
    service: "Limpieza Airbnb",
  },
  {
    name: "Roberto Silva",
    text: "Me limpiaron las alfombras de toda la casa con vapor. Quedaron espectaculares y sin olores. El servicio fue rápido y el equipo muy amable. Gran experiencia.",
    rating: 5,
    service: "Limpieza de alfombras",
  },
];

const STATS = [
  { value: "2.000+", label: "Hogares atendidos" },
  { value: "98%", label: "Satisfacción" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "100%", label: "Ecológico" },
];

/* ───────────────────────── COMPONENT ──────────────────────────── */

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [comunasOpen, setComunasOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
    servicio: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenu(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
    setFormData({ nombre: "", telefono: "", correo: "", mensaje: "", servicio: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2">
              <img
                src="/atomoclean-logo.png"
                alt="ÁtomoClean"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold text-emerald-800 tracking-tight">
                ÁtomoClean
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              {/* Comunas Dropdown */}
              <div className="relative" onMouseLeave={() => setComunasOpen(false)}>
                <button
                  onClick={() => setComunasOpen(!comunasOpen)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-4 h-4" />
                  Comunas
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${comunasOpen ? "rotate-180" : ""}`} />
                </button>
                {comunasOpen && (
                  <div className="absolute right-0 top-full mt-1 w-72 max-h-[70vh] overflow-y-auto bg-white rounded-xl border border-emerald-100 shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-emerald-50">
                      <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Zonas que atendemos</p>
                    </div>
                    {COMUNAS.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/comunas/${c.slug}`}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Button
                onClick={() => window.open("https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza", "_blank")}
                className="ml-3 bg-emerald-600 hover:bg-emerald-700 text-white"
                size="sm"
              >
                <Phone className="w-4 h-4 mr-1" />
                Cotizar
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Menú"
            >
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenu && (
            <nav className="md:hidden pb-4 border-t border-emerald-100 mt-2 pt-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              {/* Comunas Mobile */}
              <button
                onClick={() => setComunasOpen(!comunasOpen)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg text-left transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Comunas
                </span>
                {comunasOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {comunasOpen && (
                <div className="grid grid-cols-2 gap-0.5 px-2 pb-2 max-h-60 overflow-y-auto">
                  {COMUNAS.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/comunas/${c.slug}`}
                      onClick={() => setMobileMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    >
                      <MapPin className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
              <Button
                onClick={() => window.open("https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza", "_blank")}
                className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Cotizar por WhatsApp
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <img
              src="/hero-cleaning.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-emerald-500/30 text-emerald-100 border-emerald-400/40 text-sm">
                🟢 Disponibles 24/7 en Santiago
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Limpieza a Domicilio con{" "}
                <span className="text-emerald-300">Aspiradora a Vapor</span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl">
                Servicio profesional de limpieza a vapor para alfombras, sillones, colchones,
                cortinas, autos y más. Cotiza en un minuto, reserva en dos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold text-base px-8"
                  onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Cotiza Gratis Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 text-base px-8"
                  onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Servicios
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-emerald-200 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H0V40Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* ─── VALUE PROPS ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Agilidad Total",
                  desc: "Cotiza y agenda en minutos. Atención inmediata para que no pierdas tiempo.",
                },
                {
                  icon: HeartHandshake,
                  title: "Atención Personalizada",
                  desc: "Nos adaptamos a tus necesidades para ofrecerte una experiencia única de limpieza.",
                },
                {
                  icon: Leaf,
                  title: "Compromiso Ambiental",
                  desc: "Productos ecológicos y prácticas sostenibles para cuidar tu salud y el medio ambiente.",
                },
                {
                  icon: Clock,
                  title: "Emergencias 24/7",
                  desc: "Estamos aquí para ayudarte con el aseo, incluso en situaciones de emergencia.",
                },
                {
                  icon: Award,
                  title: "Precios Transparentes",
                  desc: "Sin sorpresas. Sabes exactamente qué pagas antes de confirmar el servicio.",
                },
                {
                  icon: Star,
                  title: "Satisfacción Garantizada",
                  desc: "No quedas conforme, volvemos sin costo. Tu satisfacción es nuestra prioridad.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all bg-white"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="servicios" className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">
                Nuestros Servicios
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                12 Servicios de Limpieza Profesional a Domicilio
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre nuestra propuesta de valor para servicios de aseo a domicilio en Santiago de Chile.
                Limpieza profunda con aspiradora a vapor para cada necesidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                >
                  <CardHeader className="pb-3 pt-6 px-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors">
                        <service.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base font-semibold text-gray-900 leading-snug">
                          {service.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="mt-1.5 text-xs bg-emerald-50 text-emerald-700 border-0"
                        >
                          {service.keyword}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <CardDescription className="text-sm text-gray-600 leading-relaxed mb-4">
                      {service.text}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Separator className="my-4 bg-gray-100" />
                    <Button
                      variant="ghost"
                      className="w-full text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 text-sm p-0 h-auto"
                      onClick={() =>
                        window.open(
                          `https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20${encodeURIComponent(service.title)}`,
                          "_blank"
                        )
                      }
                    >
                      Cotizar {service.title.toLowerCase().split(" ").slice(-2).join(" ")}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ZONAS QUE ATENDEMOS ─── */}
        <section className="py-16 bg-emerald-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">Cobertura</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zonas que Atendemos</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Brindamos servicios de limpieza a vapor a domicilio en toda la Región Metropolitana. Selecciona tu comuna para más información.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {COMUNAS_DESTACADAS.map((slug) => {
                const comuna = COMUNAS.find((c) => c.slug === slug);
                if (!comuna) return null;
                return (
                  <Link
                    key={comuna.slug}
                    href={`/comunas/${comuna.slug}`}
                    className="block p-4 rounded-xl border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-md transition-all text-center group"
                  >
                    <MapPin className="w-5 h-5 text-emerald-500 mx-auto mb-2 group-hover:text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700">
                      {comuna.name}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-3">
                y más de 50 comunas en la Región Metropolitana
              </p>
            </div>
          </div>
        </section>

        {/* ─── ABOUT US ─── */}
        <section id="nosotros" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">
                  Quiénes Somos
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Somos ÁtomoClean
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En <strong>ÁtomoClean</strong> somos una empresa de limpieza profesional con sede en Santiago
                  de Chile, especializada en servicios de limpieza a domicilio con aspiradora a vapor. Nuestra
                  misión es transformar los espacios de nuestros clientes mediante tecnología de vanguardia y un
                  equipo altamente capacitado.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nos diferenciamos por utilizar equipos profesionales de inyección y extracción a vapor que
                  eliminan el 99% de bacterias, ácaros y germenes sin necesidad de productos químicos
                  agresivos. Esto nos permite ofrecer un servicio que cuida la salud de tu familia, tus
                  mascotas y el medio ambiente.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Con más de <strong>2.000 hogares atendidos</strong> en Santiago, contamos con un equipo de
                  profesionales certificados que se adaptan a cada necesidad. Ya sea tu casa, departamento,
                  oficina, Airbnb o vehículo, tenemos la solución de limpieza perfecta para ti.
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
                      {
                        icon: ShieldCheck,
                        title: "Calidad Garantizada",
                        desc: "Si no quedas conforme, volvemos sin costo adicional.",
                      },
                      {
                        icon: Leaf,
                        title: "100% Ecológico",
                        desc: "Sin químicos agresivos. Cuidamos tu salud y el planeta.",
                      },
                      {
                        icon: Clock,
                        title: "Puntualidad Total",
                        desc: "Cumplimos con los horarios acordados, siempre.",
                      },
                      {
                        icon: HeartHandshake,
                        title: "Atención Humana",
                        desc: "Canal de feedback y seguimiento después del servicio.",
                      },
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

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-20 bg-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">
                Testimonios
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Más de 2.000 hogares en Santiago confían en ÁtomoClean.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 px-6 pb-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <Separator className="mb-3 bg-gray-100" />
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-emerald-600">{t.service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-gray-600">
                Resolvemos tus dudas sobre nuestros servicios de limpieza a vapor.
              </p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors"
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">
                      {faq.q}
                    </span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contacto" className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Badge className="mb-3 bg-emerald-500/30 text-emerald-100 border-emerald-400/40">
                  Contacto
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Listo para dejar tu hogar impecable?
                </h2>
                <p className="text-emerald-100 mb-8 leading-relaxed">
                  Llena el formulario de contacto y reclama un 5% de descuento en cualquiera de nuestros
                  servicios de limpieza a domicilio en Santiago.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Teléfono / WhatsApp</p>
                      <a
                        href="https://wa.me/56940349957"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold hover:text-emerald-300 transition-colors"
                      >
                        +56 9 4034 9957
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Correo Electrónico</p>
                      <a
                        href="mailto:contacto@atomoclean.com"
                        className="text-white font-semibold hover:text-emerald-300 transition-colors"
                      >
                        contacto@atomoclean.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Ubicación</p>
                      <p className="text-white font-semibold">
                        Av. Vicuña Mackenna 2362, Ñuñoa, Santiago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Horario</p>
                      <p className="text-white font-semibold">
                        Lun - Sáb: 9:00 - 18:00 | Emergencias: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                {formSent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-gray-600">
                      Te contactaremos en los próximos minutos. ¡Gracias por elegir ÁtomoClean!
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Contáctanos
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      Completa el formulario y recibe 5% de descuento.
                    </p>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="nombre" className="text-gray-700 text-sm">
                          Nombre Completo
                        </Label>
                        <Input
                          id="nombre"
                          placeholder="Tu nombre"
                          required
                          value={formData.nombre}
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono" className="text-gray-700 text-sm">
                          Teléfono (ej: 9 1234 5678)
                        </Label>
                        <Input
                          id="telefono"
                          type="tel"
                          placeholder="9 1234 5678"
                          required
                          value={formData.telefono}
                          onChange={(e) =>
                            setFormData({ ...formData, telefono: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="correo" className="text-gray-700 text-sm">
                          Correo Electrónico
                        </Label>
                        <Input
                          id="correo"
                          type="email"
                          placeholder="tu@correo.com"
                          required
                          value={formData.correo}
                          onChange={(e) =>
                            setFormData({ ...formData, correo: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="servicio" className="text-gray-700 text-sm">
                          ¿Qué servicio necesitas?
                        </Label>
                        <select
                          id="servicio"
                          value={formData.servicio}
                          onChange={(e) =>
                            setFormData({ ...formData, servicio: e.target.value })
                          }
                          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="">Selecciona un servicio...</option>
                          {SERVICES.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                          <option value="otro">Otro servicio</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="mensaje" className="text-gray-700 text-sm">
                          Mensaje
                        </Label>
                        <Textarea
                          id="mensaje"
                          placeholder="Cuéntanos qué necesitas..."
                          rows={3}
                          value={formData.mensaje}
                          onChange={(e) =>
                            setFormData({ ...formData, mensaje: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                        size="lg"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar y Obtener 5% de Descuento
                      </Button>
                    </form>
                    <p className="text-xs text-gray-400 mt-3 text-center">
                      📌 Nota: En ÁtomoClean atendemos únicamente solicitudes de servicios.
                      No gestionamos postulaciones laborales a través de este sitio web.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA FINAL ─── */}
        <section className="py-12 bg-emerald-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Solicita boleta o factura según tu requerimiento
            </h2>
            <p className="text-emerald-100 mb-6">
              Limpieza de casas y oficinas, aseo profundo. Descubre cómo nos diferenciamos.
            </p>
            <Button
              size="lg"
              className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold text-base px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/56940349957?text=Hola%20ÁtomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza",
                  "_blank"
                )
              }
            >
              Cotiza por WhatsApp
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-900 text-gray-300 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/atomoclean-logo.png"
                  alt="ÁtomoClean"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-lg font-bold text-white">ÁtomoClean</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Limpieza a domicilio con aspiradora a vapor en Santiago de Chile.
                Hogares, oficinas, autos y más.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Limpieza de casas",
                  "Limpieza de alfombras",
                  "Limpieza de sillones",
                  "Limpieza de colchones",
                  "Limpieza de autos",
                  "Limpieza Airbnb",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick("#servicios")}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Más Servicios</h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Limpieza de cortinas",
                  "Limpieza post obra",
                  "Limpieza de oficinas",
                  "Limpieza de vidrios",
                  "Limpieza de tapiz",
                  "Clínicas y gyms",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick("#servicios")}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  +56 9 4034 9957
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  contacto@atomoclean.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Av. Vicuña Mackenna 2362, Ñuñoa
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Lun - Sáb: 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2024 ÁtomoClean. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <button className="hover:text-emerald-400 transition-colors">Términos y Condiciones</button>
              <button className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</button>
              <button className="hover:text-emerald-400 transition-colors">Política de Privacidad</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── STICKY BOTTOM BAR ─── */}
      <div className="sticky-bottom-bar">
        <div className="big-buttons-container">
          <a href="tel:940349957" className="btn-massive-call">
            <Phone className="w-6 h-6" />
            LLAMAR
          </a>
          <a href="https://wa.me/56940349957?text=Hola%20%C3%81tomoClean%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza" className="btn-massive-wa" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}

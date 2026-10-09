import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bug,
  Camera,
  CheckCircle2,
  ChevronDown,
  HardHat,
  HeartPulse,
  Home as HomeIcon,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Truck,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { ImageGallery } from "@/components/image-gallery";
import { QuoteForm } from "@/components/quote-form";
import { VideoGallery } from "@/components/video-gallery";
import { PromoFlyer, PROMO_FLYER_SRC } from "@/components/promo-flyer";

const SITE_URL = "https://limpiezaadomicilio.pages.dev";
const PAGE_URL = `${SITE_URL}/limpieza-profunda`;
const FLYER = PROMO_FLYER_SRC;
const WHATSAPP_URL =
  "https://wa.me/56940349957?text=Hola%20Limpieza24%2F7%2C%20quiero%20cotizar%20una%20limpieza%20profunda%20detallada";

export const metadata: Metadata = {
  title: "Limpieza Profunda Detallada de Casas y Deptos en Santiago | Limpieza24/7",
  description:
    "Limpieza profunda detallada de casas y departamentos en Santiago: pre y post mudanza, post obra, remodelaciones e inmuebles en mal estado. Cotización gratis al +56 9 4034 9957.",
  keywords: [
    "limpieza profunda Santiago",
    "aseo profundo departamento",
    "limpieza post obra",
    "limpieza por mudanza",
    "limpieza pre mudanza",
    "aseo post obra Santiago",
    "limpieza de casas y deptos",
    "Limpieza24/7",
  ],
  openGraph: {
    title: "Limpieza Profunda Detallada de Casas y Deptos en Santiago",
    description:
      "Pre y post mudanza, post obra, remodelaciones e inmuebles en mal estado. Cotización gratis.",
    type: "website",
    locale: "es_CL",
    url: PAGE_URL,
    siteName: "Limpieza24/7",
    images: [{ url: FLYER, width: 1024, height: 1024 }],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const INCLUYE = [
  "Limpieza, sanitizado y desodorizado de pisos y superficies.",
  "Limpieza detallada de baños y cocina, incluyendo campana, horno y encimera.",
  "Aspirado industrial de muebles y alfombras.",
  "Limpieza de ventanas y puertas.",
];

const IDEAL_PARA = [
  { icon: Truck, title: "Pre mudanza", desc: "Deja el depto o la casa impecable para entregarlo al dueño o al nuevo arrendatario." },
  { icon: PackageCheck, title: "Post mudanza", desc: "Llega a un hogar limpio y desinfectado antes de desempacar tus cosas." },
  { icon: HardHat, title: "Post obra y remodelaciones", desc: "Retiramos el polvo fino de construcción, restos de pintura y residuos de obra." },
  { icon: HomeIcon, title: "Inmuebles en mal estado", desc: "Propiedades cerradas por mucho tiempo, con suciedad acumulada o descuidadas." },
];

const BENEFICIOS = [
  { icon: Bug, title: "Adiós a la suciedad y los ácaros", desc: "Llegamos a las fibras y a los rincones donde se acumulan el polvo y los ácaros que no se ven." },
  { icon: Wind, title: "Sin manchas ni malos olores", desc: "Tu hogar se ve y se siente fresco: tratamos manchas y neutralizamos olores en lugar de taparlos." },
  { icon: Timer, title: "Tus cosas duran más", desc: "La suciedad acumulada desgasta telas y superficies. Retirarla a tiempo alarga la vida útil de colchones, sillones y alfombras." },
  { icon: HeartPulse, title: "Un ambiente más sano", desc: "Menos polvo y alérgenos en el aire y en las superficies: un espacio más agradable para tu familia y tus mascotas." },
];

const PASOS = [
  { title: "Cotiza", desc: "Envíanos fotos, los m² aproximados y tu comuna por WhatsApp o con el formulario." },
  { title: "Agenda", desc: "Te confirmamos el valor final y elegimos juntos el día y la hora." },
  { title: "Limpiamos", desc: "Llegamos con todo el equipamiento y los productos necesarios." },
  { title: "Revisas", desc: "Recorres el resultado con nosotros. Si algo no quedó bien, lo repasamos." },
];

const FAQS = [
  {
    q: "¿Qué incluye la limpieza profunda detallada?",
    a: "Incluye limpieza, sanitizado y desodorizado de pisos y superficies; limpieza detallada de baños y cocina (campana, horno y encimera incluidos); aspirado industrial de muebles y alfombras; y limpieza de ventanas y puertas.",
  },
  {
    q: "¿Cuánto cuesta la limpieza profunda?",
    a: "El valor varía según el tamaño del inmueble y la complejidad de la limpieza. Envíanos fotos y los metros cuadrados aproximados por WhatsApp al +56 9 4034 9957 y te damos un precio claro antes de agendar.",
  },
  {
    q: "¿Cómo contrato el servicio?",
    a: "Puedes completar el formulario de esta página, escribirnos por WhatsApp o llamarnos al +56 9 4034 9957. Te confirmamos disponibilidad, valor final y fecha.",
  },
  {
    q: "¿Cómo se paga el servicio?",
    a: "Al cotizar te confirmamos el valor final y los medios de pago disponibles, antes de agendar. Emitimos boleta o factura según lo que necesites.",
  },
  {
    q: "¿El personal es de confianza?",
    a: "Sí. Trabajamos con un equipo de profesionales capacitados y certificados, el mismo que ha atendido a más de 2.000 hogares en Santiago.",
  },
  {
    q: "¿En qué comunas prestan el servicio?",
    a: "Atendemos en toda la Región Metropolitana de Santiago de Chile. Revisa la lista de comunas en la página de inicio o escríbenos para confirmar disponibilidad en tu sector.",
  },
  {
    q: "¿Atienden casas o departamentos en muy mal estado?",
    a: "Sí, es parte de nuestra especialidad. En esos casos te pedimos fotos para evaluar la complejidad y darte un valor justo antes de empezar.",
  },
  {
    q: "¿Qué pasa si no quedo conforme?",
    a: "Todos nuestros servicios tienen garantía de satisfacción: si algo no quedó bien, volvemos a realizar el servicio sin costo adicional.",
  },
];

export default function LimpiezaProfundaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Limpieza profunda detallada de casas y departamentos",
        serviceType: "Limpieza profunda, post obra y por mudanza",
        description:
          "Limpieza profunda detallada para casas y departamentos en Santiago: pre y post mudanza, post obra, remodelaciones e inmuebles en mal estado.",
        url: PAGE_URL,
        image: `${SITE_URL}${FLYER}`,
        provider: {
          "@type": "LocalBusiness",
          name: "Limpieza24/7",
          telephone: "+56940349957",
          url: SITE_URL,
        },
        areaServed: { "@type": "AdministrativeArea", name: "Región Metropolitana de Santiago de Chile" },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Limpieza profunda", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <img src="/hero-cleaning.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center xl:gap-14">
              <div>
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-emerald-200">
                  <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                  <span>/</span>
                  <span className="font-medium text-white">Limpieza profunda</span>
                </nav>
                <Badge className="mb-4 bg-emerald-500/30 text-emerald-100 border-emerald-400/40 text-sm">
                  Pre y post mudanza · Post obra · Remodelaciones
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                  Limpieza Profunda Detallada de{" "}
                  <span className="text-emerald-300">Casas y Deptos en Santiago</span>
                </h1>
                <p className="text-lg text-emerald-100 mb-6 leading-relaxed max-w-2xl">
                  Especialistas en aseo post obra y limpieza por mudanza. Dejamos tu casa o departamento
                  listo para habitar, entregar o arrendar, incluso si está en mal estado.
                </p>
                <div className="mb-8 inline-flex flex-col rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                  <span className="text-sm text-emerald-200">Cotización gratis</span>
                  <span className="text-2xl font-extrabold">Precio según tu inmueble</span>
                  <span className="mt-1 text-xs text-emerald-200">
                    Varía según el tamaño del inmueble y la complejidad de la limpieza.
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold text-base px-8">
                    <a href="#cotizar">
                      Cotiza tu servicio aquí
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white text-base px-8">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 w-5 h-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <PromoFlyer
                src={FLYER}
                alt="Limpieza profunda detallada a domicilio para casas y deptos en Santiago: pre y post mudanza, remodelaciones e inmuebles en mal estado"
              />
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "2.000+", label: "Hogares atendidos" },
                { value: "98%", label: "Satisfacción" },
                { value: "24/7", label: "Disponibilidad" },
                { value: "100%", label: "Ecológico" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-emerald-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── QUÉ INCLUYE ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Qué incluye
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todos nuestros servicios de limpieza profunda incluyen
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Un servicio completo, de arriba hacia abajo, pensado para que no tengas que repasar nada
                después. Llegamos con todo el equipamiento y los productos necesarios.
              </p>
            </div>
            <ul className="space-y-3">
              {INCLUYE.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── IDEAL PARA ─── */}
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Cuándo necesitas una limpieza profunda?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Somos especialistas en los trabajos que una limpieza de mantención no alcanza a cubrir.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {IDEAL_PARA.map((item) => (
                <div key={item.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                    <item.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BENEFICIOS ─── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios de una limpieza profunda</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Con los años, el polvo, los ácaros y otros contaminantes se acumulan en alfombras, colchones,
                cortinas y rincones difíciles. Además de verse mal, pueden empeorar alergias, rinitis y asma.
                Por eso trabajamos con equipos profesionales de aspiración y extracción, más técnicas manuales,
                para retirarlos en profundidad.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFICIOS.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 rounded-2xl bg-emerald-50/60 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CÓMO FUNCIONA + GARANTÍA ─── */}
        <section className="py-20 bg-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Así de simple</h2>
              <ol className="grid gap-4 sm:grid-cols-2">
                {PASOS.map((paso, i) => (
                  <li key={paso.title} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{paso.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{paso.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-700 p-8 text-white shadow-lg">
              <ShieldCheck className="h-10 w-10 text-emerald-200" />
              <h2 className="mt-4 text-2xl font-bold">Garantía de satisfacción</h2>
              <p className="mt-3 text-emerald-50 leading-relaxed">
                Si no quedas conforme con el resultado, volvemos a realizar el servicio sin costo adicional.
                Tu satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>
        </section>

        {/* ─── GALERÍA ─── */}
        <section id="galeria" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200">
                <Camera className="w-3.5 h-3.5 mr-1.5" />
                Galería de Proyectos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trabajos realizados en Santiago</h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Fotos reales de servicios completados en la Región Metropolitana.
              </p>
            </div>
            <ImageGallery limit={12} />
            <div className="mt-10 text-center">
              <Button asChild size="lg" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                <Link href="/galeria">
                  <Camera className="mr-2 h-5 w-5" />
                  Ver galería completa
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── VIDEOS DEMOSTRATIVOS ─── */}
        <VideoGallery />

        {/* ─── COTIZAR ─── */}
        <section id="cotizar" className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-3 bg-emerald-500/30 text-emerald-100 border-emerald-400/40">Cotización gratis</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cotiza tu servicio aquí</h2>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                Cuéntanos dónde está el inmueble, cuántos metros tiene y en qué estado se encuentra.
                Te respondemos con un valor claro, sin sorpresas.
              </p>
              <ul className="space-y-3 text-emerald-50">
                {[
                  "Respuesta rápida por WhatsApp",
                  "Valor confirmado antes de agendar",
                  "Boleta o factura según tu requerimiento",
                  "Atención en toda la Región Metropolitana",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-xl text-gray-900">
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Tienes dudas? Te podemos ayudar</h2>
              <p className="text-lg text-gray-600">Lo que más nos preguntan sobre la limpieza profunda.</p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-gray-900 text-sm md:text-base [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180 group-open:text-emerald-600" />
                  </summary>
                  <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-600">
              ¿Más preguntas? Revisa nuestras{" "}
              <Link href="/preguntas-frecuentes" className="font-medium text-emerald-700 hover:underline">preguntas frecuentes</Link>{" "}
              o los consejos del{" "}
              <Link href="/blog" className="font-medium text-emerald-700 hover:underline">blog</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyContactBar whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

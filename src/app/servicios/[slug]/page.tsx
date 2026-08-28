import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, CheckCircle2, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services-data";
import { ImageGallery } from "@/components/image-gallery";
import { COMUNAS_DESTACADAS } from "@/lib/comunas-data";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | Limpieza24/7",
      description: "El servicio que buscas no está disponible.",
    };
  }

  const title = `${service.title} en Santiago | Limpieza24/7`;
  const description =
    service.metaDescription ||
    `${service.text} Cotiza gratis al +56 9 4034 9957. Atención profesional a domicilio en toda la Región Metropolitana de Santiago de Chile.`;

  return {
    title,
    description,
    keywords: `${service.keyword}, limpieza Santiago, aseo domicilio Chile, ${service.title.toLowerCase()}`,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_CL",
    },
    alternates: {
      canonical: `https://limpiezaadomicilio.pages.dev/servicios/${service.slug}`,
    },
  };
}

export default async function ServicioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Servicio no encontrado</h1>
        <p className="mb-8 text-gray-600">
          El servicio que buscas no existe o fue removido.
        </p>
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </main>
    );
  }

  const Icon = service.icon;

  // JSON-LD Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.text,
    provider: {
      "@type": "LocalBusiness",
      name: "Limpieza24/7",
      telephone: "+56940349957",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Región Metropolitana de Santiago de Chile",
      },
    },
    areaServed: "Santiago de Chile y Región Metropolitana",
    serviceType: service.keyword,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuánto cuesta ${service.title.toLowerCase()} en Santiago?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El precio de ${service.title.toLowerCase()} varía según el tamaño del espacio y nivel de suciedad. Cotiza gratis al +56 9 4034 9957 o por WhatsApp con respuesta inmediata.`,
        },
      },
      {
        "@type": "Question",
        name: `¿En qué comunas de Santiago ofrecen ${service.title.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Atendemos en toda la Región Metropolitana de Santiago de Chile, incluyendo Las Condes, Providencia, Ñuñoa, La Reina, Vitacura, Lo Barnechea, Maipú, Puente Alto, San Miguel y más comunas.",
        },
      },
      {
        "@type": "Question",
        name: `¿Cómo se realiza ${service.title.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: service.text,
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#servicios"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver todos los servicios
          </Link>

          <div className="flex items-center gap-3">
            <Icon className="h-12 w-12 text-emerald-300" />
            <span className="rounded-full bg-emerald-500/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">
              {service.keyword}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold md:text-4xl lg:text-5xl">
            {service.title} en{" "}
            <span className="text-emerald-300">Santiago de Chile</span>
          </h1>

          <p className="mt-4 max-w-3xl text-base text-emerald-100 md:text-lg">
            {service.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400"
            >
              <a href="https://wa.me/56940349957?text=Hola%2C%20quiero%20cotizar%20">
                <Phone className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/#contacto">
                <Sparkles className="mr-2 h-5 w-5" />
                Pedir presupuesto
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detalles del servicio */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Star className="mx-auto mb-3 h-10 w-10 text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              ¿Qué incluye nuestro servicio?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Detalle profesional de cada aspecto cubierto en{" "}
              <span className="font-semibold">{service.title.toLowerCase()}</span>.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de proyectos */}
      <section className="bg-emerald-50/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Fotos de trabajos realizados
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Mira ejemplos reales de servicios completados en la Región Metropolitana.
            </p>
          </div>
          <ImageGallery limit={8} showFilters={false} />
        </div>
      </section>

      {/* Comunas donde servimos */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Comunas donde atendemos este servicio
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {COMUNAS_DESTACADAS.map((comuna) => (
              <Link
                key={comuna.slug}
                href={`/comunas/${comuna.slug}`}
                className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100"
              >
                {comuna.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            ¿Necesitas {service.title.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-emerald-100">
            Cotiza en 60 segundos. Atención profesional a domicilio en toda la
            Región Metropolitana de Santiago de Chile.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-white text-emerald-700 hover:bg-emerald-50"
          >
            <a href="https://wa.me/56940349957?text=Hola%2C%20quiero%20cotizar%20">
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp: +56 9 4034 9957
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}

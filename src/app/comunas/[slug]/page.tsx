import type { Metadata } from "next";
import { COMUNAS, getComunaBySlug } from "@/lib/comunas-data";
import ComunaPageContent from "@/components/comuna-page";

const SITE_URL = "https://limpiezaadomicilio.pages.dev";

export async function generateStaticParams() {
  return COMUNAS.map((comuna) => ({
    slug: comuna.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comuna = getComunaBySlug(slug);

  if (!comuna) {
    return {
      title: "Comuna no encontrada | Limpieza24/7",
      description: "La comuna que buscas no se encuentra disponible.",
    };
  }

  const title = `Limpieza a Domicilio en ${comuna.name} | Limpieza24/7`;
  const description = `Servicio profesional de limpieza a domicilio en ${comuna.name}, Santiago de Chile. Alfombras, sillones, colchones, cortinas, autos, Airbnb, post obra y más. Trabajo a mano, productos ecológicos. Cotiza gratis al +56 9 4034 9957.`;
  const keywords = [
    `limpieza ${comuna.name}`,
    `limpieza a domicilio ${comuna.name}`,
    `aseo ${comuna.name}`,
    `limpieza de alfombras ${comuna.name}`,
    `limpieza de sillones ${comuna.name}`,
    `limpieza de colchones ${comuna.name}`,
    `limpieza post obra ${comuna.name}`,
    `limpieza profesional Santiago`,
    "Limpieza24/7",
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_CL",
      url: `${SITE_URL}/comunas/${comuna.slug}`,
      siteName: "Limpieza24/7",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/comunas/${comuna.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  };
}

export default async function ComunaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comuna = getComunaBySlug(slug);

  if (!comuna) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comuna no encontrada</h1>
          <p className="text-gray-600 mb-6">La comuna que buscas no está disponible.</p>
          <a href="/" className="text-emerald-600 font-medium hover:underline">Volver al inicio</a>
        </div>
      </div>
    );
  }

  // JSON-LD enriquecido para IA generativa
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/comunas/${comuna.slug}#business`,
        name: `Limpieza24/7 - Limpieza a Domicilio en ${comuna.name}`,
        description: `Servicio profesional de limpieza a domicilio en ${comuna.name}, Santiago de Chile. Alfombras, sillones, colchones, cortinas, autos, Airbnb, post obra y más. Trabajo a mano, productos ecológicos.`,
        url: `${SITE_URL}/comunas/${comuna.slug}`,
        telephone: "+56940349957",
        image: `${SITE_URL}/hero-cleaning.png`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: comuna.name,
          addressRegion: "Región Metropolitana",
          addressCountry: "CL",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: comuna.name,
          description: `Comuna de ${comuna.name} en la Región Metropolitana de Santiago de Chile.`,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/comunas/${comuna.slug}#service`,
        name: `Limpieza a Domicilio en ${comuna.name}`,
        serviceType: "Limpieza a domicilio profesional",
        provider: { "@id": `${SITE_URL}/comunas/${comuna.slug}#business` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: comuna.name,
        },
        description: `Limpieza a domicilio profesional en ${comuna.name}, Santiago de Chile. Trabajo a mano con productos ecológicos. Servicios de limpieza de alfombras, sillones, colchones, cortinas, autos, Airbnb, post obra, oficinas y más.`,
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/comunas/${comuna.slug}#faqpage`,
        url: `${SITE_URL}/comunas/${comuna.slug}`,
        mainEntity: [
          {
            "@type": "Question",
            name: `¿Ofrecen limpieza a domicilio en ${comuna.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Sí, Limpieza24/7 atiende en ${comuna.name} y toda la Región Metropolitana de Santiago de Chile. Nuestro equipo llega a tu domicilio con todo el equipamiento necesario para realizar el servicio de limpieza profesional que necesites. Cotiza gratis al +56 9 4034 9957.`,
            },
          },
          {
            "@type": "Question",
            name: `¿Cuánto cuesta la limpieza a domicilio en ${comuna.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `El precio varía según el tipo de servicio, tamaño del espacio y nivel de suciedad. Ofrecemos precios transparentes y sin sorpresas. Cotiza gratis al +56 9 4034 9957 o por WhatsApp con respuesta inmediata para limpieza a domicilio en ${comuna.name}.`,
            },
          },
          {
            "@type": "Question",
            name: `¿Qué servicios de limpieza ofrecen en ${comuna.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `En ${comuna.name} ofrecemos limpieza de casas y departamentos, oficinas, alfombras, sillones y tapicería, colchones, cortinas, autos, Airbnb y hoteles, post obra, vidrios y ventanas, tapiz de paredes, y limpieza para clínicas, gyms y escuelas. Todos los servicios se realizan a mano con productos ecológicos.`,
            },
          },
          {
            "@type": "Question",
            name: `¿Atienden emergencias de limpieza en ${comuna.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Sí, somos el único servicio de limpieza en Santiago que atiende emergencias las 24 horas, los 7 días de la semana, incluyendo ${comuna.name}. Llámanos al +56 9 4034 9957 y responderemos lo antes posible.`,
            },
          },
          {
            "@type": "Question",
            name: `¿Cómo contrato el servicio de limpieza en ${comuna.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Puedes cotizar en segundos a través de nuestro formulario web, WhatsApp (+56 9 4034 9957) o llamándonos directamente. Te confirmamos disponibilidad y precio para tu servicio de limpieza a domicilio en ${comuna.name}.`,
            },
          },
          {
            "@type": "Question",
            name: `¿El servicio de limpieza en ${comuna.name} tiene garantía?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Sí, todos nuestros servicios en ${comuna.name} cuentan con garantía de satisfacción. Si no quedas conforme con el resultado, volvemos a realizar el servicio sin costo adicional. Tu satisfacción es nuestra prioridad absoluta.`,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Comunas",
            item: `${SITE_URL}/#comunas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: comuna.name,
            item: `${SITE_URL}/comunas/${comuna.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ComunaPageContent comunaSlug={comuna.slug} comunaName={comuna.name} />
    </>
  );
}

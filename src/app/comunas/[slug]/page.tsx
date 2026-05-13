import type { Metadata } from "next";
import { COMUNAS, getComunaBySlug } from "@/lib/comunas-data";
import ComunaPageContent from "@/components/comuna-page";

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
      title: "Comuna no encontrada | ÁtomoClean",
      description: "La comuna que buscas no se encuentra disponible.",
    };
  }

  const title = `Limpieza a Domicilio en ${comuna.name} | ÁtomoClean`;
  const description = `Servicio profesional de limpieza a domicilio con aspiradora a vapor en ${comuna.name}, Santiago. Alfombras, sillones, colchones, cortinas, autos y más. Cotiza gratis al +56 9 4034 9957.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_CL",
    },
    alternates: {
      canonical: `https://atomoclean.com/comunas/${comuna.slug}`,
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

  return (
    <ComunaPageContent comunaSlug={comuna.slug} comunaName={comuna.name} />
  );
}

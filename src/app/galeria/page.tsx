import type { Metadata } from "next";
import { ImageGallery } from "@/components/image-gallery";
import { GALLERY_IMAGES } from "@/lib/gallery-images";
import Link from "next/link";
import { ArrowLeft, Camera, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Galería de Proyectos de Limpieza en Santiago | Limpieza24/7",
  description:
    "Galería con fotos reales de nuestros servicios de limpieza a domicilio realizados en Santiago de Chile: casas, oficinas, alfombras, sillones, colchones, post obra y más. Trabajo profesional a mano.",
  keywords:
    "galería limpieza Santiago, fotos limpieza a domicilio, antes y después limpieza, proyectos limpieza Chile, galería aseo profesional Santiago",
  openGraph: {
    title: "Galería de Proyectos de Limpieza en Santiago | Limpieza24/7",
    description:
      "Fotos reales de trabajos de limpieza profesional a domicilio en Santiago de Chile.",
    type: "website",
    locale: "es_CL",
    images: [{ url: GALLERY_IMAGES[0].src, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://limpiezaadomicilio.pages.dev/galeria",
  },
};

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="flex items-center gap-3">
            <Camera className="h-10 w-10 text-emerald-300" />
            <span className="rounded-full bg-emerald-500/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100">
              Galería de Proyectos
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold md:text-4xl lg:text-5xl">
            Trabajos de Limpieza en{" "}
            <span className="text-emerald-300">Santiago de Chile</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base text-emerald-100 md:text-lg">
            Explora nuestra galería con {GALLERY_IMAGES.length} fotos reales de servicios de
            limpieza profesional realizados en la Región Metropolitana. Trabajo a mano,
            productos ecológicos y resultados impecables.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400"
            >
              <a href="https://wa.me/56940349957?text=Hola%2C%20vi%20la%20galería%20y%20quiero%20cotizar%20un%20servicio">
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

      {/* Galería con filtros + lightbox */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Fotos de Servicios Realizados
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Haz clic en cualquier foto para ampliarla. Filtra por categoría para
              encontrar ejemplos del tipo de limpieza que necesitas.
            </p>
          </div>

          <ImageGallery />
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-emerald-600 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            ¿Listo para dejar tu espacio impecable?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-emerald-100">
            Cotiza tu servicio en segundos. Atención profesional a domicilio en toda
            la Región Metropolitana de Santiago de Chile.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-700 hover:bg-emerald-50"
            >
              <a href="https://wa.me/56940349957?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20limpieza">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: +56 9 4034 9957
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

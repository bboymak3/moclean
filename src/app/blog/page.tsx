import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import type { BlogPostSummary } from "@/components/blog/blog-card";
import { BLOG_POSTS, getReadingMinutes } from "@/lib/blog-posts";

const SITE_URL = "https://limpiezaadomicilio.pages.dev";

export const metadata: Metadata = {
  title: "Blog de Limpieza: Técnicas, Productos y Consejos | Limpieza24/7",
  description:
    "Blog de Limpieza24/7: técnicas de limpieza, productos que funcionan (y los que no), guías de servicios, anécdotas del oficio y preguntas y respuestas sobre limpieza a domicilio en Santiago de Chile.",
  keywords:
    "blog limpieza, consejos de limpieza, cómo sacar manchas, productos de limpieza, limpieza ecológica, limpieza de colchones, limpieza post obra, Limpieza24/7",
  openGraph: {
    title: "Blog de Limpieza | Limpieza24/7",
    description:
      "Técnicas, productos, servicios, anécdotas y preguntas y respuestas sobre limpieza a domicilio en Santiago.",
    type: "website",
    locale: "es_CL",
    url: `${SITE_URL}/blog`,
    siteName: "Limpieza24/7",
    images: [{ url: BLOG_POSTS[0].cover }],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts: BlogPostSummary[] = BLOG_POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    cover: p.cover,
    coverAlt: p.coverAlt,
    readingMinutes: getReadingMinutes(p),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Blog de Limpieza24/7",
    url: `${SITE_URL}/blog`,
    inLanguage: "es-CL",
    publisher: { "@type": "Organization", name: "Limpieza24/7", url: SITE_URL },
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.date,
      image: `${SITE_URL}${p.cover}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader active="/blog" />

      <main className="flex-1">
        {/* ─── HERO: título grande estilo iOS ─── */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 md:pt-16 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-emerald-700 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="font-medium text-emerald-700">Blog</span>
            </nav>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur-md">
              <BookOpen className="h-3.5 w-3.5" />
              Blog Limpieza24/7
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
              Consejos de limpieza
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Técnicas, productos que funcionan (y los que no), guías de nuestros servicios,
              anécdotas del oficio y respuestas a las dudas que más nos hacen.
            </p>
          </div>
        </section>

        {/* ─── LISTADO ─── */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BlogExplorer posts={posts} />
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-[28px] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 p-8 text-center text-white shadow-xl md:p-12">
              <h2 className="text-2xl font-bold md:text-3xl">¿Prefieres que lo hagamos nosotros?</h2>
              <p className="mx-auto mt-3 max-w-xl text-emerald-50">
                Limpieza profesional a mano, con productos ecológicos, en toda la Región Metropolitana.
                Cotiza gratis en minutos.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold">
                  <a
                    href="https://wa.me/56940349957?text=Hola%20Limpieza24%2F7%2C%20le%C3%AD%20el%20blog%20y%20quiero%20cotizar%20un%20servicio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Cotizar por WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  <Link href="/#servicios">
                    Ver servicios
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyContactBar />
    </div>
  );
}

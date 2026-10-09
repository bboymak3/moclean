import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Phone, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogCard } from "@/components/blog/blog-card";
import {
  BLOG_CATEGORY_LABELS,
  BLOG_POSTS,
  formatPostDate,
  getPostBySlug,
  getReadingMinutes,
  getRelatedPosts,
} from "@/lib/blog-posts";
import { SERVICES } from "@/lib/services-data";

const SITE_URL = "https://limpiezaadomicilio.pages.dev";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Limpieza24/7",
      description: "El artículo que buscas no está disponible.",
    };
  }

  const title = `${post.title} | Blog Limpieza24/7`;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description: post.excerpt,
    keywords: [...post.tags, "limpieza a domicilio Santiago", "Limpieza24/7"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "es_CL",
      url,
      siteName: "Limpieza24/7",
      publishedTime: post.date,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-emerald-50 p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Artículo no encontrado</h1>
        <p className="mb-8 text-gray-600">El artículo que buscas no existe o fue removido.</p>
        <Button asChild>
          <Link href="/blog">Volver al blog</Link>
        </Button>
      </main>
    );
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const readingMinutes = getReadingMinutes(post);
  const service = SERVICES.find((s) => s.slug === post.relatedService);
  const related = getRelatedPosts(post, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    cover: p.cover,
    coverAlt: p.coverAlt,
    readingMinutes: getReadingMinutes(p),
  }));
  const whatsappUrl = `https://wa.me/56940349957?text=${encodeURIComponent(
    `Hola Limpieza24/7, leí "${post.title}" y quiero cotizar un servicio`
  )}`;

  const faqItems = post.content.flatMap((b) => (b.type === "qa" ? b.items : []));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: `${SITE_URL}${post.cover}`,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "es-CL",
        mainEntityOfPage: url,
        articleSection: BLOG_CATEGORY_LABELS[post.category],
        keywords: post.tags.join(", "),
        author: { "@type": "Organization", name: "Limpieza24/7", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Limpieza24/7",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/limpieza247-logo.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      ...(faqItems.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: faqItems.map((i) => ({
                "@type": "Question",
                name: i.q,
                acceptedAnswer: { "@type": "Answer", text: i.a.replace(/\*\*|\[|\]\([^)]+\)/g, "") },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader active="/blog" />

      <main className="flex-1">
        <article className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" aria-hidden="true" />

          {/* ─── ENCABEZADO DEL ARTÍCULO ─── */}
          <header className="relative mx-auto max-w-3xl px-4 pt-10 sm:px-6 md:pt-14">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-emerald-700 transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-emerald-700 transition-colors">Blog</Link>
              <span>/</span>
              <span className="font-medium text-emerald-700">{BLOG_CATEGORY_LABELS[post.category]}</span>
            </nav>

            <span className="inline-flex rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur-md">
              {BLOG_CATEGORY_LABELS[post.category]}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">{post.excerpt}</p>

            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <img src="/limpieza247-logo.png" alt="" className="h-10 w-10 rounded-full ring-2 ring-white" />
              <div>
                <p className="font-semibold text-gray-900">Equipo Limpieza24/7</p>
                <p className="flex items-center gap-2">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <Clock className="h-3.5 w-3.5" />
                  {readingMinutes} min de lectura
                </p>
              </div>
            </div>
          </header>

          <div className="relative mx-auto mt-8 max-w-4xl px-4 sm:px-6">
            <img
              src={post.cover}
              alt={post.coverAlt}
              className="aspect-[16/9] w-full rounded-[28px] object-cover shadow-xl"
            />
          </div>

          {/* ─── CONTENIDO ─── */}
          <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-14">
            <BlogContent blocks={post.content} />

            {post.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-black/5">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-lg backdrop-blur-xl md:p-8">
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl">¿Necesitas ayuda profesional?</h2>
              <p className="mt-2 text-gray-600">
                {service
                  ? `Conoce nuestro servicio de ${service.title.toLowerCase()} o cotiza directo por WhatsApp.`
                  : "Cotiza directo por WhatsApp y te respondemos en minutos."}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Cotizar por WhatsApp
                  </a>
                </Button>
                {service && (
                  <Button asChild size="lg" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                    <Link href={`/servicios/${service.slug}`}>
                      Ver {service.title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* ─── ARTÍCULOS RELACIONADOS ─── */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Sigue leyendo</h2>
              <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                <ArrowLeft className="h-4 w-4" />
                Todos los artículos
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyContactBar whatsappUrl={whatsappUrl} />
    </div>
  );
}

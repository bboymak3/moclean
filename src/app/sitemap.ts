// src/app/sitemap.ts
// Sitemap XML dinamico para SEO.
// Incluye: paginas estaticas, galeria, 12 servicios, 54 comunas.
// Mas amigable para rastreo de IA generativa (Gemini, ChatGPT, Claude, Perplexity).

import type { MetadataRoute } from "next";
import { COMUNAS } from "@/lib/comunas-data";
import { SERVICES } from "@/lib/services-data";

export const dynamic = "force-static";

const SITE_URL = "https://limpiezaadomicilio.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().substring(0, 10);

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/galeria`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/quienes-somos`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/preguntas-frecuentes`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/politicas-de-privacidad`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 12 servicios
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/servicios/${service.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 54 comunas
  const comunaPages: MetadataRoute.Sitemap = COMUNAS.map((comuna) => ({
    url: `${SITE_URL}/comunas/${comuna.slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...comunaPages];
}

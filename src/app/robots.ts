// src/app/robots.ts
// Robots.txt dinamico para SEO + IA generativa.
// Permite explicitamente a crawlers de IA: GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended, Bingbot, Applebot, Meta-ExternalAgent, etc.

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://limpiezaadomicilio.pages.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // === IA generativa permitida explicitamente ===
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalFetcher",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      {
        userAgent: "Diffbot",
        allow: "/",
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        userAgent: "Omgilibot",
        allow: "/",
      },
      {
        userAgent: "YouBot",
        allow: "/",
      },
      // === Resto de crawlers tradicionales ===
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/*?q=", "/*?utm_"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

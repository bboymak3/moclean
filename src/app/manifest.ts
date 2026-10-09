// src/app/manifest.ts
// Web App Manifest: permite "Agregar a pantalla de inicio" en iPhone/Android
// y abrir el sitio como una app (sin barra del navegador).

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Limpieza24/7 - Limpieza a Domicilio en Santiago",
    short_name: "Limpieza24/7",
    description:
      "Limpieza profesional a domicilio en Santiago de Chile. Cotiza por WhatsApp al +56 9 4034 9957.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "es-CL",
    icons: [
      {
        src: "/limpieza247-logo.png",
        sizes: "1024x1024",
      },
    ],
  };
}

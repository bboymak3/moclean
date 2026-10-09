// src/lib/videos.ts
// Videos demostrativos de trabajos reales (public/videos/).
// Nombres de archivo con palabras clave para SEO; la portada (poster) es un
// cuadro del mismo video con el mismo nombre en .jpg.

export interface DemoVideo {
  src: string;
  poster: string;
  title: string;
  description: string;
  /** Duración en segundos */
  duration: number;
  /** Video grabado en vertical (celular) */
  vertical?: boolean;
  /** Fecha de grabación (YYYY-MM-DD) */
  uploadDate: string;
}

/** Foto de encabezado de la sección de videos. */
export const VIDEOS_HEADER_IMAGE = "/images/limpieza-de-sillon-a-domicilio-santiago-equipo-profesional.jpg";

export const DEMO_VIDEOS: DemoVideo[] = [
  {
    src: "/videos/limpieza-de-sillones-a-domicilio-santiago-proceso.mp4",
    poster: "/videos/limpieza-de-sillones-a-domicilio-santiago-proceso.jpg",
    title: "Limpieza de sillón paso a paso",
    description: "Sanitizamos la tela del sillón con vapor, zona por zona.",
    duration: 24,
    vertical: true,
    uploadDate: "2026-09-30",
  },
  {
    src: "/videos/limpieza-de-sillones-a-domicilio-santiago-resultado.mp4",
    poster: "/videos/limpieza-de-sillones-a-domicilio-santiago-resultado.jpg",
    title: "Resultado: sillones como nuevos",
    description: "Así quedan los sillones después de la limpieza: tela pareja, sin manchas ni suciedad acumulada.",
    duration: 30,
    uploadDate: "2026-09-30",
  },
  {
    src: "/videos/limpieza-de-tapiz-agua-sucia-extraida-santiago.mp4",
    poster: "/videos/limpieza-de-tapiz-agua-sucia-extraida-santiago.jpg",
    title: "Toda la suciedad que sale de un sillón",
    description: "El agua que extraemos del tapiz con la aspiradora industrial: polvo y suciedad que no se ven a simple vista.",
    duration: 17,
    uploadDate: "2026-09-30",
  },
];

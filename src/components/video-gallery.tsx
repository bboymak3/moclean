"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clapperboard, Play, X } from "lucide-react";
import { DEMO_VIDEOS, VIDEOS_HEADER_IMAGE } from "@/lib/videos";

const SITE_URL = "https://limpiezaadomicilio.pages.dev";

const formatDuration = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

interface VideoGalleryProps {
  /** Si se indica, el título dice "Así trabajamos en {comuna}" */
  comunaName?: string;
}

/** Sección "Videos demostrativos" con foto de encabezado y modal de video. */
export function VideoGallery({ comunaName }: VideoGalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % DEMO_VIDEOS.length)), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + DEMO_VIDEOS.length) % DEMO_VIDEOS.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": DEMO_VIDEOS.map((v) => ({
      "@type": "VideoObject",
      name: v.title,
      description: v.description,
      thumbnailUrl: `${SITE_URL}${v.poster}`,
      contentUrl: `${SITE_URL}${v.src}`,
      uploadDate: v.uploadDate,
      duration: `PT${v.duration}S`,
    })),
  };

  const video = index !== null ? DEMO_VIDEOS[index] : null;

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-emerald-50/50 to-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con foto */}
        <div className="relative overflow-hidden rounded-[28px] shadow-xl">
          <img
            src={VIDEOS_HEADER_IMAGE}
            alt="Limpieza de sillón a domicilio en Santiago con equipo profesional"
            width={1600}
            height={900}
            loading="lazy"
            className="h-64 w-full object-cover md:h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-md">
              <Clapperboard className="h-3.5 w-3.5" />
              Videos demostrativos
            </span>
            <h2 className="mt-3 text-2xl font-bold md:text-4xl">
              Así trabajamos{comunaName ? ` en ${comunaName}` : ""}
            </h2>
            <p className="mt-2 max-w-2xl text-emerald-50">
              Videos reales de nuestros servicios de limpieza a domicilio. Toca un video para verlo.
            </p>
          </div>
        </div>

        {/* Videos */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMO_VIDEOS.map((v, i) => (
            <button
              key={v.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group overflow-hidden rounded-[24px] bg-white text-left shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
              aria-label={`Ver video: ${v.title}`}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <img
                  src={v.poster}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/25 shadow-lg ring-1 ring-white/50 backdrop-blur-md transition-transform group-hover:scale-110">
                    <Play className="h-7 w-7 translate-x-0.5 fill-white text-white" />
                  </span>
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {formatDuration(v.duration)}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{v.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal de video */}
      {video && index !== null && (
        <div
          className="gallery-lightbox fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onClick={close}
          onTouchStart={(e) => {
            // No interferir con los controles del video (barra de progreso)
            touchStartX.current = (e.target as HTMLElement).tagName === "VIDEO" ? null : e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const deltaX = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(deltaX) < 50) return;
            if (deltaX < 0) next();
            else prev();
          }}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Video anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex max-h-[92vh] w-full max-w-4xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <video
              key={video.src}
              src={video.src}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className={`max-h-[75vh] rounded-[18px] bg-black ${video.vertical ? "w-auto max-w-full" : "w-full"}`}
            />
            <p className="mt-3 text-center text-sm font-semibold text-white/90">
              {video.title}
              <span className="ml-2 font-normal text-white/50">
                ({index + 1} / {DEMO_VIDEOS.length})
              </span>
            </p>
            <p className="mt-1 max-w-xl text-center text-xs text-white/60">{video.description}</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Video siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}

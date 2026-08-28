"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import { COMUNAS } from "@/lib/comunas-data";
import { COMUNAS_COORDS } from "@/lib/comunas-coords";

export function ComunasMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const [search, setSearch] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Cargar Leaflet dinamicamente solo en cliente
    if (typeof window === "undefined") return;
    if (!mapRef.current) return;
    if (leafletMapRef.current) return; // ya inicializado

    // Inyectar CSS de Leaflet si no esta
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }

    // Cargar JS de Leaflet dinamicamente
    const loadLeaflet = async () => {
      try {
        // @ts-ignore
        if (!window.L) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Leaflet load failed"));
            document.head.appendChild(script);
          });
        }
        // @ts-ignore
        const L = window.L;
        if (!L) return;

        // Crear mapa centrado en Santiago de Chile
        const map = L.map(mapRef.current!, {
          center: [-33.45, -70.65],
          zoom: 10,
          scrollWheelZoom: false,
          zoomControl: true,
        });

        // Tile layer OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap",
          maxZoom: 18,
        }).addTo(map);

        // Crear marcadores para cada comuna con coordenadas
        const markers: any[] = [];
        COMUNAS.forEach((comuna) => {
          const coord = COMUNAS_COORDS[comuna.slug];
          if (!coord) return;

          // Icono personalizado verde (color de la marca)
          const icon = L.divIcon({
            className: "custom-marker",
            html: `<div style="
              width: 16px; height: 16px;
              background: #059669;
              border: 2px solid #fff;
              border-radius: 50%;
              box-shadow: 0 1px 4px rgba(0,0,0,0.3);
              cursor: pointer;
            "></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          });

          const marker = L.marker([coord.lat, coord.lng], { icon })
            .addTo(map)
            .bindPopup(
              `<div style="font-family: inherit; min-width: 150px;">
                <strong style="color: #059669; font-size: 1rem;">${comuna.name}</strong>
                <p style="margin: 4px 0; font-size: 0.85rem; color: #4b5563;">
                  Limpieza a domicilio disponible
                </p>
                <a href="/comunas/${comuna.slug}"
                   style="color: #059669; font-weight: 600; text-decoration: none; font-size: 0.9rem;">
                  Ver servicio en ${comuna.name} &rarr;
                </a>
              </div>`
            );
          markers.push(marker);
        });

        leafletMapRef.current = map;
      } catch (err) {
        console.error("Error loading Leaflet:", err);
      }
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Filtrar comunas por busqueda
  const filteredComunas = search
    ? COMUNAS.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    : COMUNAS;

  return (
    <section id="comunas" className="py-20 bg-emerald-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            <MapPin className="h-4 w-4" />
            Áreas de Servicio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mapa de Comunas de Santiago que Atendemos
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Cubrimos toda la Región Metropolitana de Santiago de Chile. Haz clic en
            cualquier comuna del mapa o de la lista para ver los servicios disponibles
            y cotizar tu limpieza a domicilio.
          </p>
        </div>

        {/* Mapa Leaflet */}
        <div className="mb-8 overflow-hidden rounded-2xl border-2 border-emerald-100 shadow-lg">
          <div
            ref={mapRef}
            style={{ height: "450px", width: "100%" }}
            aria-label="Mapa interactivo de comunas de Santiago donde Limpieza24/7 ofrece servicios"
          />
        </div>

        {/* Buscador de comunas */}
        <div className="mx-auto mb-6 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar comuna (ej: Las Condes, Providencia...)"
            className="w-full rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm text-gray-700 shadow-sm outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </div>

        {/* Lista desplegable de comunas */}
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mx-auto mb-6 flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-700"
          >
            {isExpanded ? "Ocultar" : "Ver"} lista de {COMUNAS.length} comunas
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {isExpanded && (
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredComunas.map((comuna) => (
                  <Link
                    key={comuna.slug}
                    href={`/comunas/${comuna.slug}`}
                    className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500 group-hover:text-emerald-600" />
                    {comuna.name}
                  </Link>
                ))}
              </div>
              {filteredComunas.length === 0 && (
                <p className="py-6 text-center text-gray-500">
                  No se encontraron comunas con ese nombre.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

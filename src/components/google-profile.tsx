"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Clock, ExternalLink, MapPin, Phone, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS_ADDRESS, GOOGLE_MAP_EMBED_URL, GOOGLE_PROFILE_URL } from "@/lib/google-profile";

const OPEN_EVENT = "open-google-profile";

/** Abre el modal del perfil de Google desde cualquier componente. */
export function openGoogleProfile() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

/** Botón que abre el modal del perfil de Google (para usar en páginas y footers). */
export function GoogleProfileButton({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" onClick={openGoogleProfile} className={className}>
      {children}
    </button>
  );
}

/**
 * Modal del perfil de Google + botón flotante. Va en el layout raíz,
 * por lo que aparece en todas las páginas.
 */
export function GoogleProfileModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Botón flotante (sobre la barra LLAMAR / WHATSAPP) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 z-[9998] flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition-transform hover:bg-white active:scale-95"
        style={{ bottom: "calc(104px + env(safe-area-inset-bottom))" }}
        aria-label="Ver nuestro perfil de Google"
      >
        <GoogleIcon />
        Google
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[10001] flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="google-profile-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gray-100">
              <iframe
                src={GOOGLE_MAP_EMBED_URL}
                title="Ubicación de Limpieza24/7 en Google Maps"
                className="block h-56 w-full border-0 sm:h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-white/85 p-2 text-gray-700 shadow-md backdrop-blur-md hover:bg-white"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3">
                <img src="/limpieza247-logo.png" alt="" className="h-12 w-12 rounded-full ring-2 ring-emerald-100" />
                <div>
                  <h2 id="google-profile-title" className="text-lg font-bold text-gray-900">
                    Limpieza24/7
                  </h2>
                  <p className="text-sm text-gray-500">Limpieza a domicilio · Santiago de Chile</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  {BUSINESS_ADDRESS}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  Lun - Sáb: 9:00 - 18:00 · Emergencias 24/7
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <a href="tel:940349957" className="hover:text-emerald-700">+56 9 4034 9957</a>
                </li>
              </ul>

              <p className="mt-4 text-sm text-gray-600">
                Revisa nuestras reseñas, fotos y ubicación en nuestro perfil de Google.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  <GoogleIcon className="h-4 w-4 rounded-full bg-white p-px" />
                  Ver perfil en Google
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={buildWhatsAppUrl(["Hola Limpieza24/7, vi su perfil de Google y quiero cotizar un servicio."])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-200"
                >
                  <Phone className="h-4 w-4" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

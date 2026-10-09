// src/lib/google-profile.ts
// Datos del perfil de Google (Google Maps / Perfil de Empresa) de Limpieza24/7.

export const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/hVnyzVoKUDEyAtcC7?g_st=ac";

export const BUSINESS_ADDRESS = "Av. Vicuña Mackenna 2362, Ñuñoa, Santiago";

/** Mapa embebido de Google Maps (sin API key). */
export const GOOGLE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${BUSINESS_ADDRESS}, Chile`
)}&z=15&output=embed`;

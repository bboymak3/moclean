// src/lib/whatsapp.ts
// El sitio no tiene backend: los formularios envían la solicitud por WhatsApp
// (Click-to-Chat) con el mensaje ya escrito.

export const WHATSAPP_NUMBER = "56940349957";

/** Arma el link de WhatsApp con el mensaje ya escrito. Las líneas vacías se omiten. */
export function buildWhatsAppUrl(lines: (string | false | null | undefined)[]): string {
  const text = lines.filter(Boolean).join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Abre WhatsApp con el mensaje. Si el navegador bloquea la pestaña nueva
 * (algunos lo hacen en iPhone), abre WhatsApp en la misma pestaña.
 */
export function openWhatsApp(lines: (string | false | null | undefined)[]): void {
  const url = buildWhatsAppUrl(lines);
  const win = window.open(url, "_blank");
  if (!win) window.location.href = url;
}

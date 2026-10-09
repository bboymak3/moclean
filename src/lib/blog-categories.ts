// src/lib/blog-categories.ts
// Categorías y utilidades livianas del blog (sin el contenido de los artículos),
// para poder usarlas en componentes cliente sin cargar todo el texto en el navegador.

export type BlogCategory = "tecnicas" | "productos" | "servicios" | "anecdotas" | "preguntas";

export const BLOG_CATEGORIES: { value: BlogCategory | "todas"; label: string }[] = [
  { value: "todas", label: "Todo" },
  { value: "tecnicas", label: "Técnicas" },
  { value: "productos", label: "Productos" },
  { value: "servicios", label: "Servicios" },
  { value: "anecdotas", label: "Anécdotas" },
  { value: "preguntas", label: "Preguntas y respuestas" },
];

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  tecnicas: "Técnicas",
  productos: "Productos",
  servicios: "Servicios",
  anecdotas: "Anécdotas",
  preguntas: "Preguntas y respuestas",
};

const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

/** "2026-10-06" → "6 de octubre de 2026" */
export function formatPostDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return `${d} de ${MONTHS[m - 1]} de ${y}`;
}

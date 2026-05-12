export interface Comuna {
  slug: string;
  name: string;
  region: string;
}

export const COMUNAS: Comuna[] = [
  { slug: "alhue", name: "Alhué", region: "Región Metropolitana" },
  { slug: "buin", name: "Buin", region: "Región Metropolitana" },
  { slug: "calera-de-tango", name: "Calera de Tango", region: "Región Metropolitana" },
  { slug: "cerrillos", name: "Cerrillos", region: "Región Metropolitana" },
  { slug: "cerro-navia", name: "Cerro Navia", region: "Región Metropolitana" },
  { slug: "colina", name: "Colina", region: "Región Metropolitana" },
  { slug: "conchali", name: "Conchalí", region: "Región Metropolitana" },
  { slug: "curacavi", name: "Curacaví", region: "Región Metropolitana" },
  { slug: "el-bosque", name: "El Bosque", region: "Región Metropolitana" },
  { slug: "el-monte", name: "El Monte", region: "Región Metropolitana" },
  { slug: "estacion-central", name: "Estación Central", region: "Región Metropolitana" },
  { slug: "huechuraba", name: "Huechuraba", region: "Región Metropolitana" },
  { slug: "independencia", name: "Independencia", region: "Región Metropolitana" },
  { slug: "isla-de-maipo", name: "Isla de Maipo", region: "Región Metropolitana" },
  { slug: "la-cisterna", name: "La Cisterna", region: "Región Metropolitana" },
  { slug: "la-florida", name: "La Florida", region: "Región Metropolitana" },
  { slug: "la-granja", name: "La Granja", region: "Región Metropolitana" },
  { slug: "la-pintana", name: "La Pintana", region: "Región Metropolitana" },
  { slug: "la-reina", name: "La Reina", region: "Región Metropolitana" },
  { slug: "lampa", name: "Lampa", region: "Región Metropolitana" },
  { slug: "las-condes", name: "Las Condes", region: "Región Metropolitana" },
  { slug: "lo-barnechea", name: "Lo Barnechea", region: "Región Metropolitana" },
  { slug: "lo-espejo", name: "Lo Espejo", region: "Región Metropolitana" },
  { slug: "lo-prado", name: "Lo Prado", region: "Región Metropolitana" },
  { slug: "macul", name: "Macul", region: "Región Metropolitana" },
  { slug: "maipu", name: "Maipú", region: "Región Metropolitana" },
  { slug: "maria-pinto", name: "María Pinto", region: "Región Metropolitana" },
  { slug: "melipilla", name: "Melipilla", region: "Región Metropolitana" },
  { slug: "nunoa", name: "Ñuñoa", region: "Región Metropolitana" },
  { slug: "padre-hurtado", name: "Padre Hurtado", region: "Región Metropolitana" },
  { slug: "paine", name: "Paine", region: "Región Metropolitana" },
  { slug: "pedro-aguirre-cerda", name: "Pedro Aguirre Cerda", region: "Región Metropolitana" },
  { slug: "penaflor", name: "Peñaflor", region: "Región Metropolitana" },
  { slug: "penalolen", name: "Peñalolén", region: "Región Metropolitana" },
  { slug: "pirque", name: "Pirque", region: "Región Metropolitana" },
  { slug: "providencia", name: "Providencia", region: "Región Metropolitana" },
  { slug: "pudahuel", name: "Pudahuel", region: "Región Metropolitana" },
  { slug: "puente-alto", name: "Puente Alto", region: "Región Metropolitana" },
  { slug: "quilicura", name: "Quilicura", region: "Región Metropolitana" },
  { slug: "quinta-normal", name: "Quinta Normal", region: "Región Metropolitana" },
  { slug: "recoleta", name: "Recoleta", region: "Región Metropolitana" },
  { slug: "renca", name: "Renca", region: "Región Metropolitana" },
  { slug: "san-bernardo", name: "San Bernardo", region: "Región Metropolitana" },
  { slug: "san-joaquin", name: "San Joaquín", region: "Región Metropolitana" },
  { slug: "san-jose-de-maipo", name: "San José de Maipo", region: "Región Metropolitana" },
  { slug: "san-miguel", name: "San Miguel", region: "Región Metropolitana" },
  { slug: "san-pedro", name: "San Pedro", region: "Región Metropolitana" },
  { slug: "san-ramon", name: "San Ramón", region: "Región Metropolitana" },
  { slug: "santiago", name: "Santiago Centro", region: "Región Metropolitana" },
  { slug: "talagante", name: "Talagante", region: "Región Metropolitana" },
  { slug: "tiltil", name: "Tiltil", region: "Región Metropolitana" },
  { slug: "vitacura", name: "Vitacura", region: "Región Metropolitana" },
];

/** Comunas destacadas para mostrar en la página principal */
export const COMUNAS_DESTACADAS = [
  "providencia", "las-condes", "nunoa", "vitacura", "la-florida",
  "puente-alto", "maipu", "santiago", "la-reina", "penalolen",
  "macul", "san-miguel", "quilicura", "huechuraba", "lo-barnechea",
  "san-bernardo",
] as const;

export function getComunaBySlug(slug: string): Comuna | undefined {
  return COMUNAS.find((c) => c.slug === slug);
}

export function getRelatedComunas(currentSlug: string, limit = 6): Comuna[] {
  const idx = COMUNAS.findIndex((c) => c.slug === currentSlug);
  if (idx === -1) return COMUNAS.slice(0, limit);
  const start = idx === 0 ? 1 : idx - 1;
  const related: Comuna[] = [];
  for (let i = start; related.length < limit && i < COMUNAS.length; i++) {
    if (COMUNAS[i].slug !== currentSlug) related.push(COMUNAS[i]);
  }
  return related;
}

# Limpieza24/7 — Limpieza a Domicilio en Santiago de Chile

> Sitio web de **Limpieza24/7**, empresa de limpieza profesional a domicilio en la Región Metropolitana de Santiago de Chile. Servicio a mano con productos ecológicos — **sin pistola de vapor**.

**URL en producción:** [limpiezaadomicilio.pages.dev](https://limpiezaadomicilio.pages.dev)

---

## 🚀 Tecnología

| Componente | Tecnología | Detalle |
|---|---|---|
| Framework | Next.js 16.1.3 (Turbopack) | App Router, Server + Client Components |
| Lenguaje | TypeScript 5 | Tipado estático en todos los archivos |
| Estilos | Tailwind CSS 4 + shadcn/ui | Componentes accesibles |
| Hospedaje | Cloudflare Pages | Build con `@cloudflare/next-on-pages` |
| Runtime | Cloudflare Workers | `nodejs_compat` activado |
| Mapas | Leaflet 1.9.4 + OpenStreetMap | Sin API key |
| Formularios | WhatsApp Click-to-Chat | Sin backend |
| Imágenes | Estáticas en `public/images/` | Renombradas sin espacios ni acentos |
| SEO | Next.js Metadata API + JSON-LD | `@graph` con 4 nodos Schema.org |
| Sitemap | Dinámico (`src/app/sitemap.ts`) | 70 URLs generadas automáticamente |
| Robots | Dinámico (`src/app/robots.ts`) | 17 user-agents de IA permitidos |

---

## ✨ Funcionalidades

### Páginas principales

- `/` — Home con hero, galería, servicios, mapa interactivo de comunas, FAQ, testimonios y formulario.
- `/galeria` — Landing con **24 fotos reales**, lightbox y filtros por categoría (Interiores, Cocinas, Baños, Oficinas, Exteriores, Post Obra).
- `/servicios/[slug]` — **12 landings dinámicas** por servicio (casas, oficinas, alfombras, sillones, colchones, cortinas, autos, Airbnb, post obra, vidrios, tapiz, clínicas/gyms/escuelas) con JSON-LD `Service` + `FAQPage`.
- `/comunas/[slug]` — **54 landings dinámicas** por comuna de la Región Metropolitana con mapa interactivo, FAQ de 18 preguntas y JSON-LD `LocalBusiness`.
- `/quienes-somos`, `/contacto`, `/preguntas-frecuentes`, `/politicas-de-privacidad` — Páginas informativas.

### Mapa interactivo de comunas

- Mapa Leaflet centrado en Santiago de Chile (`-33.45, -70.65`)
- **49 marcadores verdes** personalizados, uno por cada comuna con coordenadas
- Popups con link directo a `/comunas/[slug]`
- `scrollWheelZoom: false` para no bloquear scroll de página
- Buscador de comunas por nombre en tiempo real
- Lista desplegable con las 54 comunas atendidas

### Galería de fotos

- 24 imágenes reales de trabajos realizados en Santiago
- Renombradas sin espacios ni acentos (Cloudflare maneja mal las URLs con `%20`)
- Filtros por categoría
- Lightbox con navegación por teclado (`←` `→` `Esc`)
- Lazy loading

### SEO y rich snippets

- **JSON-LD `@graph`** unificado con 4 nodos por comuna:
  - `LocalBusiness` (con dirección, área servida, horarios, teléfono)
  - `Service` (tipo de servicio + área servida)
  - `FAQPage` (6 preguntas optimizadas para IA generativa)
  - `BreadcrumbList` (Inicio → Comunas → Comuna actual)
- Meta tags completos: `title`, `description`, `keywords`, OpenGraph, Twitter Card
- Canonical URLs correctas: `https://limpiezaadomicilio.pages.dev/...`
- Geo tags: `geo.region=CL-RM`, `geo.placename=Santiago`
- Robots meta: `max-snippet:-1, max-image-preview:large`

### Sitemap dinámico (70 URLs)

| Tipo | Cantidad | Prioridad |
|---|---|---|
| Páginas estáticas | 6 | 0.3 - 1.0 |
| Servicios | 12 | 0.9 |
| Comunas | 54 | 0.8 |
| **Total** | **70** | |

### Robots.txt dinámico (IA generativa)

Permite explícitamente a 17 user-agents de IA:

| IA | User-agent |
|---|---|
| Google Gemini | `Google-Extended` |
| OpenAI ChatGPT | `GPTBot`, `OAI-SearchBot` |
| Perplexity AI | `PerplexityBot` |
| Claude / Anthropic | `ClaudeBot`, `anthropic-ai` |
| Meta / Llama | `Meta-ExternalAgent`, `Meta-ExternalFetcher` |
| Microsoft Copilot | `Bingbot` |
| Apple Intelligence | `Applebot`, `Applebot-Extended` |
| Cohere | `cohere-ai` |
| TikTok / ByteDance | `Bytespider` |
| Diffbot | `Diffbot` |
| Amazon / Rufus | `Amazonbot` |
| Omgili / You.com | `Omgilibot`, `YouBot` |

Universal `*` con `allow: /` y `disallow` solo a `/api/`, `/_next/`, `?q=`, `?utm_`.

---

## 🐛 Bugs corregidos

### 1. Imágenes rotas en galería

**Síntoma:** Las imágenes de la galería no se mostraban en producción.

**Causa:** Los archivos tenían espacios y acentos en sus nombres (`limpieza-a-domicilio-en (1).jpeg`, `limpieza-a-domicilio-en-santiago -calencia.jpeg`), y Cloudflare Pages maneja mal las URLs con `%20`.

**Fix:** Renombradas 24 imágenes siguiendo el patrón:
- Quitado el patrón ` (N)` → `limpieza-a-domicilio-en (1).jpeg`
- Quitados espacios intermedios
- Quitados acentos (`ñ` → `n`, `á` → `a`, etc.)
- Agregado sufijo `-comuna-de-santiago-de-chile`
- Resultado: `limpieza-a-domicilio-en-comuna-de-santiago-de-chile.jpeg`

### 2. Menciones de "pistola de vapor" eliminadas

**Síntoma:** El sitio mencionaba "aspiradora a vapor", "tecnología a vapor", "sistema de vapor", "limpieza a vapor", etc. El usuario trabaja a mano, no con pistola de vapor.

**Fix:** 57 reemplazos en `page.tsx` (29), `comuna-page.tsx` (28) y `layout.tsx` (metadata + keywords). Reemplazos:
- `aspiradora a vapor` → `aspiración profesional`
- `tecnología a vapor` → `técnicas manuales profesionales`
- `sistema de vapor` → `sistema manual profesional`
- `limpieza a vapor` → `limpieza profunda manual`
- `desinfección a vapor` → `desinfección profunda`
- `a vapor` → `profesional`
- `con vapor` → `profesionalmente`
- `de vapor` → `manual`

Resultado: **0 menciones de "vapor"** en todo el código fuente.

### 3. Canonical URL incorrecta

**Síntoma:** Las comunas tenían canonical apuntando a `https://limpieza247.com/comunas/[slug]` (dominio inexistente).

**Fix:** Corregido a `https://limpiezaadomicilio.pages.dev/comunas/[slug]` en `page.tsx` de cada comuna.

### 4. `nodejs_compat` flag faltante

**Síntoma:** Después del deploy, el sitio devolvía HTTP 503 con error "no nodejs_compat compatibility flag".

**Causa:** El worker de Cloudflare Pages requiere el flag `nodejs_compat` para que `@cloudflare/next-on-pages` funcione correctamente.

**Fix:** Configurado vía API:
```
PATCH /accounts/.../pages/projects/limpiezaadomicilio
deployment_configs.production.compatibility_flags = ["nodejs_compat"]
deployment_configs.production.compatibility_date = "2024-01-01"
```

### 5. Mapa no renderizaba en SSR

**Síntoma:** Leaflet no funciona en Server Components (requiere `window`).

**Fix:** `ComunasMap` cargado con `next/dynamic` y `ssr: false`:
```tsx
const ComunasMap = dynamic(
  () => import("@/components/comunas-map").then((m) => m.ComunasMap),
  { ssr: false, loading: () => <div>Cargando mapa...</div> }
);
```

### 6. Sitemap/robots estáticos no incluían landings dinámicas

**Síntoma:** El `public/sitemap.xml` estático solo tenía 5 URLs, sin comunas ni servicios.

**Fix:** Creados `src/app/sitemap.ts` y `src/app/robots.ts` dinámicos con `export const dynamic = "force-static"`. Generan automáticamente las 70 URLs desde los arrays `COMUNAS` y `SERVICES`. Eliminados los archivos estáticos de `public/`.

### 7. Import duplicado de SERVICES

**Síntoma:** Build fallaba con "the name `SERVICES` is defined multiple times".

**Causa:** Después de extraer `SERVICES` de `page.tsx` a `src/lib/services-data.ts`, el import quedó duplicado en el archivo.

**Fix:** Eliminado el import duplicado y consolidado en el bloque de imports al inicio del archivo.

### 8. Error de sintaxis en services-data.ts

**Síntoma:** Build fallaba con "Expression expected" en línea 28.

**Causa:** El script Python que extrajo el array dejó `export const SERVICES: Service[] = const SERVICES = [` (doble declaración).

**Fix:** Corregido a `export const SERVICES: Service[] = [`.

---

## 📁 Estructura del proyecto

```
moclean/
├── public/
│   ├── images/                      # 24 imágenes renombradas (sin espacios)
│   ├── hero-cleaning.png
│   ├── limpieza247-logo.png
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout + metadata global
│   │   ├── page.tsx                  # Home (hero + galería + servicios + mapa + FAQ)
│   │   ├── globals.css
│   │   ├── galeria/page.tsx          # Landing /galeria con lightbox
│   │   ├── servicios/[slug]/page.tsx  # 12 landings dinámicas por servicio
│   │   ├── comunas/[slug]/page.tsx    # 54 landings dinámicas por comuna
│   │   ├── quienes-somos/page.tsx
│   │   ├── contacto/page.tsx
│   │   ├── preguntas-frecuentes/page.tsx
│   │   ├── politicas-de-privacidad/page.tsx
│   │   ├── sitemap.ts                # Sitemap dinámico (70 URLs)
│   │   └── robots.ts                 # Robots.txt dinámico (17 IAs)
│   ├── components/
│   │   ├── image-gallery.tsx        # Galería con lightbox + filtros
│   │   ├── comunas-map.tsx          # Mapa Leaflet interactivo
│   │   ├── comuna-page.tsx           # Contenido de landing de comuna
│   │   └── ui/                       # Componentes shadcn/ui
│   └── lib/
│       ├── comunas-data.ts           # Array con 54 comunas
│       ├── comunas-coords.ts         # Coordenadas lat/lng de 49 comunas
│       ├── services-data.ts          # Array con 12 servicios
│       ├── gallery-images.ts         # Array con 24 imágenes de galería
│       ├── db.ts
│       └── utils.ts
├── next.config.ts                    # output: "export", nodejs_compat
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🔧 Desarrollo local

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo (http://localhost:3000)
bun run dev

# Build de producción
bun run build

# Build para Cloudflare Pages
npx --legacy-peer-deps @cloudflare/next-on-pages

# Deploy a Cloudflare Pages
CLOUDFLARE_API_TOKEN=<token> npx wrangler pages deploy .vercel/output/static \
  --project-name=limpiezaadomicilio
```

---

## 🚀 Deploy

El deploy se hace con `wrangler pages deploy` directamente a Cloudflare Pages. No está conectado vía GitHub (no hay webhook automático), por lo que cada deploy es manual.

**Requisitos:**
- Cloudflare API Token con permisos de Pages
- `nodejs_compat` flag activado en el proyecto

**Comando completo:**
```bash
bun run build && \
npx --legacy-peer-deps @cloudflare/next-on-pages && \
CLOUDFLARE_API_TOKEN=<token> npx wrangler pages deploy .vercel/output/static \
  --project-name=limpiezaadomicilio
```

---

## 📊 Estadísticas

| Métrica | Valor |
|---|---|
| Páginas totales | 70 (6 estáticas + 12 servicios + 54 comunas) |
| Imágenes de galería | 24 |
| Comunas en el mapa | 49 con coordenadas |
| Servicios disponibles | 12 |
| FAQ por comuna | 18 preguntas |
| User-agents de IA permitidos | 17 |
| URLs en sitemap | 70 |
| Menciones de "vapor" | 0 |

---

## 📞 Contacto

- **Teléfono:** +56 9 4034 9957
- **WhatsApp:** [wa.me/56940349957](https://wa.me/56940349957)
- **Dominio:** [limpiezaadomicilio.pages.dev](https://limpiezaadomicilio.pages.dev)
- **Repositorio:** [github.com/bboymak3/moclean](https://github.com/bboymak3/moclean)

---

## 📝 Licencia

Propietario. © 2026 Limpieza24/7. Todos los derechos reservados.

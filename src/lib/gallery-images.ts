// src/lib/gallery-images.ts
// Lista centralizada de imagenes de la galeria de proyectos.
// Todas estan en /images/ con nombres limpios (sin espacios, sin (#))
// y sufijo "-comuna-de-santiago-de-chile".

export interface GalleryImage {
  src: string;
  alt: string;
  category: "interior" | "exterior" | "cocina" | "bano" | "oficina" | "post-obra";
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // 21 imagenes: limpieza-a-domicilio-en-comuna-de-santiago-de-chile-{N}.jpeg
  // 3 imagenes: limpieza-a-domicilio-en-santiago-comuna-de-santiago-de-chile{N}.jpeg
  // Total: 24 imagenes

  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile.jpeg",
    alt: "Limpieza a domicilio en Santiago de Chile - antes y después",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-2.jpeg",
    alt: "Limpieza profunda de casa en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-3.jpeg",
    alt: "Limpieza de departamento en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-4.jpeg",
    alt: "Limpieza de cocina a domicilio en Santiago",
    category: "cocina" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-5.jpeg",
    alt: "Limpieza de baños a domicilio en Santiago de Chile",
    category: "bano" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-6.jpeg",
    alt: "Limpieza de oficinas en Santiago de Chile",
    category: "oficina" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-7.jpeg",
    alt: "Limpieza post obra en Santiago de Chile",
    category: "post-obra" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-8.jpeg",
    alt: "Limpieza profunda de pisos en Santiago",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-9.jpeg",
    alt: "Aseo profundo de casa en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-10.jpeg",
    alt: "Limpieza de ventanas y vidrios en Santiago",
    category: "exterior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-11.jpeg",
    alt: "Limpieza de alfombras a mano en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-12.jpeg",
    alt: "Limpieza de sillones y tapicería en Santiago",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-13.jpeg",
    alt: "Limpieza de colchones a domicilio en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-14.jpeg",
    alt: "Limpieza de cortinas en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-15.jpeg",
    alt: "Limpieza de Airbnb y hoteles en Santiago",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-16.jpeg",
    alt: "Limpieza de escuelas y gimnasios en Santiago de Chile",
    category: "oficina" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-17.jpeg",
    alt: "Limpieza profunda de baños en Santiago de Chile",
    category: "bano" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-18.jpeg",
    alt: "Limpieza de fachadas en Santiago de Chile",
    category: "exterior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-19.jpeg",
    alt: "Aseo de hogares en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-20.jpeg",
    alt: "Limpieza profunda de cocina en Santiago de Chile",
    category: "cocina" },
  { src: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-21.jpeg",
    alt: "Limpieza de muebles a domicilio en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-santiago-comuna-de-santiago-de-chile.jpeg",
    alt: "Limpieza a domicilio en Santiago de Chile - resultados profesionales",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-santiago-comuna-de-santiago-de-chile-2.jpeg",
    alt: "Limpieza profesional en Santiago de Chile",
    category: "interior" },
  { src: "/images/limpieza-a-domicilio-en-santiago-comuna-de-santiago-de-chile-3.jpeg",
    alt: "Servicio de limpieza en Santiago de Chile",
    category: "interior" },
];

export const GALLERY_CATEGORIES = [
  { value: "todas", label: "Todas" },
  { value: "interior", label: "Interiores" },
  { value: "cocina", label: "Cocinas" },
  { value: "bano", label: "Baños" },
  { value: "oficina", label: "Oficinas" },
  { value: "exterior", label: "Exteriores" },
  { value: "post-obra", label: "Post Obra" },
] as const;

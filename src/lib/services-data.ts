import {
  Home as HomeIcon,
  Building2,
  Sparkles,
  Armchair,
  Bed,
  Wind,
  Car,
  Hotel,
  HardHat,
  GlassWater,
  Frame,
  ShieldCheck,
} from "lucide-react";

export interface Service {
  icon: typeof HomeIcon;
  title: string;
  keyword: string;
  slug: string;
  text: string;
  features: string[];
  metaDescription?: string;
  h1?: string;
  longDescription?: string;
}

export const SERVICES: Service[] = [
  {
    icon: HomeIcon,
    title: "Limpieza de Casas y Departamentos",
    keyword: "Limpieza de casas a domicilio",
    slug: "limpieza-casas-departamentos",
    text: "Servicio de limpieza profunda y de rutina para casas y departamentos en Santiago. Nuestro equipo especializado utiliza aspiración profesional y trabajo manual para eliminar el 99% de bacterias y ácaros, dejando cada rincón impecable sin usar productos químicos agresivos.",
    features: [
      "Limpieza de dormitorios, baños, cocina y living",
      "Aspirado profundo con técnicas manuales profesionales",
      "Productos ecológicos y seguros para tu familia",
      "Flexibilidad de horarios adaptada a ti",
    ],
  },
  {
    icon: Building2,
    title: "Limpieza de Oficinas",
    keyword: "Limpieza de oficinas a domicilio",
    slug: "limpieza-oficinas",
    text: "Mantenemos tu entorno de trabajo limpio, higiénico y productivo. Ofrecemos planes de limpieza semanal o quincenal para oficinas en Santiago, adaptándonos a tus horarios para no interrumpir las operaciones diarias de tu negocio.",
    features: [
      "Planes de mantenimiento semanal o quincenal",
      "Desinfección de superficies de alto contacto",
      "Limpieza de zonas comunes y baños",
      "Horarios personalizados fuera de horario laboral",
    ],
  },
  {
    icon: Sparkles,
    title: "Limpieza de Alfombras",
    keyword: "Limpieza de alfombras profesional",
    slug: "limpieza-alfombras",
    text: "Recupera la frescura y apariencia original de tus alfombras con nuestra limpieza profesional profesional. Eliminamos suciedad incrustada, manchas difíciles, ácaros y alérgenos, dejando tus alfombras sanitizadas, limpias y listas para uso inmediato.",
    features: [
      "Sistema manual de inyección y extracción profesional",
      "Eliminación de ácaros, bacterias y malos olores",
      "Tratamiento de manchas difíciles y pigmentación",
      "Servicio para alfombras de muro a muro y decorativas",
    ],
  },
  {
    icon: Armchair,
    title: "Limpieza de Sillones y Tapicería",
    keyword: "Limpieza de sillones y tapicería",
    slug: "limpieza-sillones-tapiceria",
    text: "Devolvé la vida a tus sillones, sofás y toda la tapicería del hogar o auto. Nuestro sistema manual de limpieza penetra profundamente en las fibras, eliminando manchas, ácaros, bacterias y olores sin mojar ni dañar los tejidos.",
    features: [
      "Limpieza profunda de sofás, sillones y sillas",
      "Eliminación de ácaros y bacterias en fibras",
      "Sin humedad excesiva: secado rápido",
      "Seguro para todo tipo de telas y materiales",
    ],
  },
  {
    icon: Bed,
    title: "Limpieza de Colchones",
    keyword: "Limpieza de colchones profesional",
    slug: "limpieza-colchones",
    text: "Desinfección profunda de colchones con técnicas manuales profesionales. Eliminamos ácaros, bacterias, hongos y manchas que se acumulan con el tiempo. Tu colchón queda higienizado, desodorizado y listo para un descanso saludable sin productos químicos.",
    features: [
      "Eliminación del 99% de ácaros y bacterias",
      "Desodorización natural con productos ecológicos",
      "Secado rápido y sin residuos húmedos",
      "Recomendado para alérgicos y personas con asma",
    ],
  },
  {
    icon: Wind,
    title: "Limpieza de Cortinas",
    keyword: "Limpieza de cortinas a domicilio",
    slug: "limpieza-cortinas",
    text: "Limpieza profesional de cortinas y visillos sin necesidad de desmontarlos. Nuestro sistema manual elimina polvo, alérgenos, manchas y olores incrustados, devolviendo la frescura y color original a tus cortinas de forma rápida y segura.",
    features: [
      "Limpieza sin desmontar: ahorra tiempo y esfuerzo",
      "Eliminación de polvo y ácaros acumulados",
      "Cuidado de telas delicadas y gruesas",
      "Resultado inmediato sin tiempos de espera largos",
    ],
  },
  {
    icon: Car,
    title: "Limpieza de Tapicería de Autos",
    keyword: "Limpieza de tapicería de autos",
    slug: "limpieza-autos",
    text: "Limpieza profesional de la tapicería completa de tu vehículo a domicilio. Asientos, alfombras, techo y paneles quedan impecables con nuestro sistema manual profesional que elimina manchas, olores, bacterias y ácaros sin dañar los materiales del auto.",
    features: [
      "Asientos de tela, cuero y mixtos",
      "Alfombras y tapetes del vehículo",
      "Techo, paneles y portamaletas",
      "Eliminación de olores de mascotas y tabaco",
    ],
  },
  {
    icon: Hotel,
    title: "Limpieza para Airbnb y Hoteles",
    keyword: "Limpieza profesional para Airbnb",
    slug: "limpieza-airbnb-hoteles",
    text: "Servicio especializado para propiedades de Airbnb, hoteles y alojamientos turísticos en Santiago. Garantizamos un estándar de limpieza impecable para cada cambio de huésped, con desinfección profesional que asegura un espacio seguro y hospitalario.",
    features: [
      "Limpieza estándar profesional por cambio de huésped",
      "Desinfección completa con técnicas manuales profesionales",
      "Lavado de ropa de cama y toallas incluido",
      "Informes detallados post-limpieza para el anfitrión",
    ],
  },
  {
    icon: HardHat,
    title: "Limpieza Post Obra",
    keyword: "Limpieza post obra construcción",
    slug: "limpieza-post-obra",
    text: "Retiramos polvo, escombros, manchas de pintura, cemento y residuos de construcción tras cualquier reforma u obra. Dejamos tu nuevo espacio completamente limpio, desinfectado y listo para habitar, decorar o entregar sin preocupaciones.",
    features: [
      "Retiro de polvo fino y escombros",
      "Limpieza de manchas de pintura y cemento",
      "Desinfección completa del espacio nuevo",
      "Listo para habitabilidad inmediata",
    ],
  },
  {
    icon: GlassWater,
    title: "Limpieza de Vidrios y Ventanas",
    keyword: "Limpieza de vidrios ventanas",
    slug: "limpieza-vidrios-ventanas",
    text: "Removemos manchas, polvo, marcas de agua y suciedad de todos tus vidrios y ventanas. Nuestro servicio deja cada cristal impecable y transparente, mejorando la luminosidad y apariencia de tu hogar u oficina en Santiago.",
    features: [
      "Vidrios interiores y exteriores",
      "Marcos y rieles de ventanas",
      "Eliminación de manchas de agua y cal",
      "Espejos y mamparas de baño",
    ],
  },
  {
    icon: Frame,
    title: "Limpieza de Tapiz de Paredes",
    keyword: "Limpieza de tapiz paredes",
    slug: "limpieza-tapiz-paredes",
    text: "Limpieza especializada de tapices murales con tecnología de inyección y extracción. Recuperamos la apariencia original de tus tapices de pared eliminando bacterias, manchas, olores y polvo acumulado, prolongando su vida útil y belleza.",
    features: [
      "Inyección y extracción profesional manual",
      "Eliminación de bacterias y hongos en paredes",
      "Tratamiento anti-manchas y pigmentación",
      "Secado rápido sin dañar la estructura del tapiz",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Limpieza para Clínicas, Gyms y Escuelas",
    keyword: "Limpieza de clínicas gimnasios",
    slug: "limpieza-clinicas-gyms-escuelas",
    text: "Desinfección profesional para espacios de alta circulación como clínicas, consultorios, gimnasios y escuelas. Nuestro sistema manual profesional elimina patógenos, virus y bacterias sin químicos agresivos, creando ambientes seguros e higiénicos para todas las personas.",
    features: [
      "Desinfección hospitalaria con técnicas profesionales",
      "Eliminación de virus, gérmenes y bacterias",
      "Sin químicos agresivos: seguro para pacientes y niños",
      "Planes de mantenimiento periódico adaptados",
    ],
  },
];

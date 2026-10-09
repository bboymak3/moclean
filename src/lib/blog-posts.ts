// src/lib/blog-posts.ts
// Artículos del blog de Limpieza24/7: limpieza, productos, servicios,
// técnicas, anécdotas y preguntas y respuestas.
//
// Formato del texto: **negrita** y [texto del link](/ruta) dentro de los párrafos.
// Para agregar un artículo basta con sumar un objeto al array BLOG_POSTS:
// la página, el sitemap y el JSON-LD se generan solos.

import type { BlogCategory } from "@/lib/blog-categories";

export {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_LABELS,
  formatPostDate,
  type BlogCategory,
} from "@/lib/blog-categories";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; title: string; text: string }
  | { type: "warning"; title: string; text: string }
  | { type: "quote"; text: string }
  | { type: "qa"; items: { q: string; a: string }[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** Fecha de publicación (YYYY-MM-DD) */
  date: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  /** slug de un servicio de src/lib/services-data.ts */
  relatedService?: string;
  content: BlogBlock[];
}

const POSTS: BlogPost[] = [
  /* ─────────────────────────── PREGUNTAS ─────────────────────────── */
  {
    slug: "preguntas-y-respuestas-antes-de-contratar-limpieza-a-domicilio",
    title: "Preguntas y respuestas: lo que todos preguntan antes de contratar una limpieza a domicilio",
    excerpt:
      "Secado, mascotas, productos, horarios y garantía: respondemos las dudas que más nos llegan por WhatsApp antes de agendar.",
    category: "preguntas",
    date: "2026-10-06",
    cover: "/images/limpieza-a-domicilio-en-santiago-comuna-de-santiago-de-chile.jpeg",
    coverAlt: "Limpieza a domicilio en Santiago de Chile - resultados profesionales",
    tags: ["dudas frecuentes", "cotización", "garantía"],
    relatedService: "limpieza-casas-departamentos",
    content: [
      {
        type: "p",
        text: "Contratar a alguien para que limpie tu casa genera dudas razonables: quién llega, qué productos usa, cuánto se demora y qué pasa si el resultado no te convence. Reunimos aquí las preguntas que más nos hacen antes de agendar, con respuestas directas.",
      },
      {
        type: "qa",
        items: [
          {
            q: "¿Cuánto tarda en secar un sillón o una alfombra?",
            a: "Depende de la tela, la ventilación y el clima del día. Como referencia, suele quedar seco al tacto en algunas horas; en invierno o con poca ventilación puede tardar más. Te recomendamos abrir ventanas y no cubrirlo mientras seca.",
          },
          {
            q: "¿Tengo que estar en casa durante el servicio?",
            a: "Lo ideal es que alguien nos reciba al inicio para indicarnos qué limpiar y que revise el resultado al final. Entremedio puedes seguir con tus cosas.",
          },
          {
            q: "¿Llevan sus propios productos y equipos?",
            a: "Sí. Llegamos con todo el equipamiento y los productos necesarios; no necesitas proporcionar nada adicional.",
          },
          {
            q: "¿Los productos son seguros para niños y mascotas?",
            a: "Trabajamos con productos ecológicos y biodegradables. Aun así, recomendamos que niños y mascotas no estén en la zona mientras trabajamos y que esperen a que las superficies se sequen.",
          },
          {
            q: "¿Cómo cotizo?",
            a: "Escríbenos por WhatsApp al +56 9 4034 9957 con fotos de lo que necesitas limpiar, tu comuna y el tamaño aproximado. Con eso te damos un precio claro antes de agendar.",
          },
          {
            q: "¿Pueden sacar cualquier mancha?",
            a: "Sacamos la gran mayoría, pero no prometemos milagros: algunas manchas muy antiguas, las decoloraciones por cloro o las quemaduras no son suciedad, sino daño en la fibra. Si es tu caso, te lo diremos con honestidad antes de empezar.",
          },
          {
            q: "¿Qué pasa si no quedo conforme?",
            a: "Todos nuestros servicios tienen garantía de satisfacción: si algo no quedó bien, volvemos a realizarlo sin costo adicional.",
          },
          {
            q: "¿Atienden fines de semana?",
            a: "Sí, atendemos de lunes a sábado y tenemos atención de emergencias las 24 horas.",
          },
          {
            q: "¿Emiten boleta o factura?",
            a: "Sí, emitimos boleta o factura según lo que necesites. Solo indícalo al momento de cotizar.",
          },
        ],
      },
      {
        type: "tip",
        title: "¿Tienes otra duda?",
        text: "Escríbenos por WhatsApp y te respondemos personalmente. También puedes revisar nuestras [preguntas frecuentes](/preguntas-frecuentes).",
      },
    ],
  },
  {
    slug: "mitos-de-la-limpieza-que-deberias-olvidar",
    title: "7 mitos de la limpieza que deberías olvidar",
    excerpt:
      "“El cloro limpia todo”, “más producto, más limpio”… Repasamos los mitos más comunes y lo que realmente funciona.",
    category: "preguntas",
    date: "2026-09-04",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-8.jpeg",
    coverAlt: "Limpieza profunda de pisos en Santiago",
    tags: ["mitos", "productos", "consejos"],
    relatedService: "limpieza-casas-departamentos",
    content: [
      {
        type: "p",
        text: "Muchos hábitos de limpieza se heredan de generación en generación sin que nadie se pregunte si funcionan. Algunos solo hacen perder tiempo; otros dañan superficies o, peor, ponen en riesgo la salud. Estos son los que más vemos en terreno.",
      },
      { type: "h2", text: "Mito 1: “Más producto, más limpio”" },
      {
        type: "p",
        text: "**Realidad:** el exceso de detergente deja residuos pegajosos que atraen más suciedad, sobre todo en alfombras, sillones y pisos. Respeta la dosis de la etiqueta y enjuaga bien.",
      },
      { type: "h2", text: "Mito 2: “El cloro limpia todo”" },
      {
        type: "p",
        text: "**Realidad:** el cloro desinfecta, pero no limpia grasa ni suciedad. El orden correcto es primero limpiar (agua y detergente) y después desinfectar. Además, en exceso daña telas, juntas y superficies metálicas.",
      },
      { type: "h2", text: "Mito 3: “Si huele a limpio, está limpio”" },
      {
        type: "p",
        text: "**Realidad:** el aroma solo indica que hay perfume. Una superficie limpia, en realidad, no huele a nada. Un olor fuerte puede estar tapando un problema, como humedad o restos orgánicos.",
      },
      { type: "h2", text: "Mito 4: “El vinagre sirve para todo”" },
      {
        type: "p",
        text: "**Realidad:** es excelente contra el sarro, pero daña el mármol, el granito y otras piedras naturales. Te lo explicamos en detalle en [Vinagre, bicarbonato y limón](/blog/vinagre-bicarbonato-y-limon-que-limpian-de-verdad).",
      },
      { type: "h2", text: "Mito 5: “Las manchas hay que frotarlas fuerte”" },
      {
        type: "p",
        text: "**Realidad:** frotar expande la mancha y desgasta las fibras. Lo correcto es absorber y dar toques suaves, desde el borde hacia el centro.",
      },
      { type: "h2", text: "Mito 6: “La alfombra se limpia cuando se ve sucia”" },
      {
        type: "p",
        text: "**Realidad:** gran parte de la suciedad (arenilla, polvo, pelos) se acumula en la base, no se ve y va cortando las fibras con cada pisada. Aspirar seguido y hacer una limpieza profunda periódica alarga mucho su vida útil.",
      },
      { type: "h2", text: "Mito 7: “Con agua caliente siempre sale mejor”" },
      {
        type: "p",
        text: "**Realidad:** en manchas de proteína (sangre, huevo, leche) y en muchas manchas de vino o jugo, el calor las fija. Ante la duda, empieza siempre con agua fría.",
      },
      {
        type: "tip",
        title: "Regla de oro",
        text: "Antes de aplicar cualquier producto en una tela o superficie delicada, pruébalo en una zona escondida y espera unos minutos.",
      },
    ],
  },

  /* ─────────────────────────── TÉCNICAS ─────────────────────────── */
  {
    slug: "como-sacar-mancha-de-vino-de-un-sillon",
    title: "Cómo sacar una mancha de vino tinto de un sillón de tela (sin empeorarla)",
    excerpt:
      "Los primeros minutos definen si la mancha sale o se queda. Qué hacer, qué evitar y cuándo conviene llamar a un profesional.",
    category: "tecnicas",
    date: "2026-10-02",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-12.jpeg",
    coverAlt: "Limpieza de sillones y tapicería en Santiago",
    tags: ["manchas", "sillones", "tapicería"],
    relatedService: "limpieza-sillones-tapiceria",
    content: [
      {
        type: "p",
        text: "Una copa que se vuelca en plena sobremesa es una de las emergencias domésticas más comunes. La buena noticia: si actúas rápido y con la técnica correcta, en la mayoría de los casos la mancha sale. La mala: algunos “trucos caseros” la fijan para siempre.",
      },
      { type: "h2", text: "Lo primero: absorber, nunca frotar" },
      {
        type: "p",
        text: "Toma papel absorbente o un paño blanco limpio y presiona sobre la mancha, desde el borde hacia el centro. Cambia de zona del paño a medida que se tiña. Frotar solo empuja el vino hacia el relleno y agranda la aureola.",
      },
      { type: "h2", text: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Absorbe todo el líquido que puedas presionando con un paño blanco.",
          "Prueba cualquier producto primero en una zona escondida del sillón (por detrás o bajo un cojín) y espera unos minutos para ver si destiñe.",
          "Prepara agua fría con unas gotas de detergente neutro (un lavaloza transparente sirve).",
          "Humedece un paño con la mezcla —sin empapar la tela— y da toques suaves sobre la mancha, siempre desde afuera hacia adentro.",
          "Retira el jabón con otro paño humedecido solo con agua fría y vuelve a absorber.",
          "Deja secar con buena ventilación. Evita el secador de pelo y el sol directo.",
        ],
      },
      {
        type: "warning",
        title: "Lo que NO debes hacer",
        text: "No uses agua caliente (fija los pigmentos), no apliques cloro sobre telas de color y no abuses de la sal: absorbe algo de líquido, pero en muchas telas deja residuos y aureolas difíciles de sacar.",
      },
      { type: "h2", text: "Revisa la etiqueta del sillón" },
      {
        type: "p",
        text: "Muchos sillones, sobre todo importados, traen una etiqueta con un código de limpieza: **W** admite limpieza con agua, **S** requiere solventes específicos (sin agua), **W/S** acepta ambos y **X** solo debe aspirarse. Si tu sillón dice S o X, no le pongas agua: escríbenos antes de intentar nada.",
      },
      { type: "h2", text: "¿Cuándo conviene llamar a un profesional?" },
      {
        type: "ul",
        items: [
          "Si la mancha ya se secó o tiene más de un día.",
          "Si la tela es lino, seda, terciopelo o tiene código S o X.",
          "Si después de tu intento quedó una aureola (el típico “anillo” más claro o más oscuro).",
          "Si el líquido traspasó al relleno y sientes olor.",
        ],
      },
      {
        type: "tip",
        title: "Dato Limpieza24/7",
        text: "En una limpieza profesional de tapicería trabajamos a mano, con productos específicos para cada fibra y extracción de la humedad, para que la mancha no “reaparezca” cuando el sillón se seca.",
      },
    ],
  },
  {
    slug: "cada-cuanto-limpiar-el-colchon",
    title: "¿Cada cuánto deberías limpiar tu colchón? Guía práctica",
    excerpt:
      "Pasamos un tercio de la vida en la cama. Una rutina simple —y una limpieza profunda de vez en cuando— hace una gran diferencia, sobre todo si hay alergias.",
    category: "tecnicas",
    date: "2026-09-11",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-13.jpeg",
    coverAlt: "Limpieza de colchones a domicilio en Santiago de Chile",
    tags: ["colchones", "ácaros", "alergias"],
    relatedService: "limpieza-colchones",
    content: [
      {
        type: "p",
        text: "El colchón acumula sudor, células muertas de la piel y polvo: el alimento perfecto para los ácaros. No se ven, pero son una de las causas más comunes de alergias respiratorias y de esa rinitis que aparece apenas despiertas.",
      },
      { type: "h2", text: "Rutina recomendada" },
      {
        type: "ul",
        items: [
          "**Cada semana:** lava sábanas y fundas en el ciclo más caliente que permita la tela.",
          "**Cada mes:** aspira la superficie y las costuras del colchón con la boquilla de tapiz.",
          "**Cada 3 meses:** gíralo de cabeza a pies y, si es de dos caras, dale vuelta.",
          "**Una o dos veces al año:** limpieza profunda profesional; más seguido si hay personas alérgicas, niños pequeños o mascotas que suben a la cama.",
        ],
      },
      { type: "h2", text: "Ventila antes de hacer la cama" },
      {
        type: "p",
        text: "Al levantarte, deja la cama abierta 20 a 30 minutos con la ventana abierta. La humedad del cuerpo se disipa y el ambiente se vuelve menos favorable para los ácaros.",
      },
      { type: "h2", text: "Manchas en el colchón: qué hacer" },
      {
        type: "p",
        text: "Absorbe con un paño, usa agua fría con muy poco detergente neutro y no empapes: el exceso de agua llega al relleno, demora días en secar y puede generar hongos y mal olor. Si la mancha es de orina de niños o mascotas, revisa nuestra guía para [eliminar olor a orina](/blog/olor-a-orina-de-mascota-en-alfombras-y-sillones).",
      },
      {
        type: "tip",
        title: "Un protector vale oro",
        text: "Un protector de colchón lavable, idealmente impermeable y transpirable, es la inversión más barata para alargar la vida útil del colchón y mantenerlo limpio.",
      },
      { type: "h2", text: "¿Cómo es una limpieza profesional de colchón?" },
      {
        type: "p",
        text: "En Limpieza24/7 aspiramos en profundidad, tratamos las manchas a mano con productos ecológicos y extraemos la mayor parte de la humedad para que el secado sea rápido. Puedes ver el detalle en nuestro servicio de [limpieza de colchones](/servicios/limpieza-colchones).",
      },
    ],
  },
  {
    slug: "regla-de-oro-de-arriba-hacia-abajo",
    title: "La regla de oro de la limpieza profesional: de arriba hacia abajo y de seco a húmedo",
    excerpt:
      "Si alguna vez limpiaste el piso y después te cayó polvo de la repisa, esta técnica es para ti. Es la base de cómo trabajamos en cada casa.",
    category: "tecnicas",
    date: "2026-07-31",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-9.jpeg",
    coverAlt: "Aseo profundo de casa en Santiago de Chile",
    tags: ["técnicas", "orden", "aseo"],
    relatedService: "limpieza-casas-departamentos",
    content: [
      {
        type: "p",
        text: "La diferencia entre una limpieza “normal” y una profesional muchas veces no está en los productos, sino en el orden. Estas son las tres reglas que aplicamos en cada servicio.",
      },
      { type: "h2", text: "1. De arriba hacia abajo" },
      {
        type: "p",
        text: "El polvo y la suciedad caen. Por eso empezamos por lo más alto (lámparas, la parte superior de muebles, cortinas), seguimos con las superficies a media altura (mesas, cubiertas, repisas) y terminamos siempre con el piso.",
      },
      { type: "h2", text: "2. De seco a húmedo" },
      {
        type: "p",
        text: "Primero se retira todo lo suelto en seco: aspirar y sacudir con microfibra. Recién después se pasa un paño húmedo. Si mojas una superficie con polvo, lo conviertes en barro que se esparce y deja marcas.",
      },
      { type: "h2", text: "3. De adentro hacia afuera" },
      {
        type: "p",
        text: "En cada habitación, parte por el rincón más lejano a la puerta y avanza hacia la salida. Así no pisas lo que ya limpiaste.",
      },
      { type: "h2", text: "Bonus: un paño para cada zona" },
      {
        type: "p",
        text: "Usamos paños de microfibra de colores: uno para baños, otro para cocina y otro para el resto de la casa. Es una forma simple de no trasladar bacterias del baño a la cocina.",
      },
      {
        type: "tip",
        title: "Pruébalo en tu casa",
        text: "Aplica estas tres reglas en tu próximo aseo: vas a notar que repites menos pasos y que el polvo deja de “aparecer” donde ya limpiaste.",
      },
    ],
  },
  {
    slug: "olor-a-orina-de-mascota-en-alfombras-y-sillones",
    title: "Olor a orina de mascota en alfombras y sillones: cómo eliminarlo de verdad",
    excerpt:
      "Si tu perro o gato vuelve a orinar en el mismo lugar, no es mala conducta: todavía huele. Te explicamos por qué y cómo cortar el ciclo.",
    category: "tecnicas",
    date: "2026-07-17",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-11.jpeg",
    coverAlt: "Limpieza de alfombras a mano en Santiago de Chile",
    tags: ["mascotas", "olores", "alfombras"],
    relatedService: "limpieza-alfombras",
    content: [
      {
        type: "p",
        text: "La orina de perros y gatos tiene compuestos, como el ácido úrico, que no se disuelven bien con agua ni con los limpiadores comunes. La mancha puede desaparecer a la vista, pero el olor sigue ahí —sobre todo para la nariz de tu mascota— y por eso vuelve a marcar el mismo lugar.",
      },
      { type: "h2", text: "Si el accidente es reciente" },
      {
        type: "ol",
        items: [
          "Absorbe presionando con papel o paños, sin frotar, hasta que salga casi seco.",
          "Aplica un limpiador enzimático para mascotas (se venden en tiendas de mascotas y veterinarias) siguiendo las instrucciones del envase.",
          "Déjalo actuar el tiempo indicado: las enzimas necesitan tiempo para descomponer los restos orgánicos.",
          "Absorbe de nuevo y deja secar con buena ventilación.",
        ],
      },
      {
        type: "warning",
        title: "Evita estos errores",
        text: "No uses productos con amoníaco: su olor se parece al de la orina y puede atraer a tu mascota al mismo lugar. Evita el calor (plancha, secador, agua muy caliente), que puede fijar el olor en las fibras. Y nunca mezcles cloro con otros productos.",
      },
      { type: "h2", text: "Si la mancha es antigua o hay varias" },
      {
        type: "p",
        text: "Cuando la orina llegó a la base de la alfombra o al relleno del sillón, la limpieza superficial no alcanza. Ahí se necesita una limpieza profunda con inyección y extracción, tratando la zona completa y no solo la mancha visible.",
      },
      {
        type: "tip",
        title: "Truco para encontrar manchas ocultas",
        text: "Una linterna de luz ultravioleta (UV) en una habitación oscura hace visibles muchas manchas de orina seca. Así sabes exactamente dónde tratar.",
      },
      {
        type: "p",
        text: "Y si los accidentes son frecuentes o aparecieron de repente, consulta con tu veterinario: a veces hay una causa médica detrás.",
      },
    ],
  },
  {
    slug: "como-limpiar-vidrios-sin-dejar-marcas",
    title: "Cómo limpiar vidrios y ventanas sin dejar marcas",
    excerpt:
      "El secreto no está en el producto, sino en la hora, el paño y el movimiento. Así lo hacemos nosotros.",
    category: "tecnicas",
    date: "2026-07-03",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-10.jpeg",
    coverAlt: "Limpieza de ventanas y vidrios en Santiago",
    tags: ["vidrios", "ventanas", "técnicas"],
    relatedService: "limpieza-vidrios-ventanas",
    content: [
      {
        type: "p",
        text: "Pocas cosas frustran más que terminar de limpiar una ventana y ver, con la luz de la tarde, todas las marcas que quedaron. La buena noticia es que se evita con una técnica simple.",
      },
      { type: "h2", text: "Lo que necesitas" },
      {
        type: "ul",
        items: [
          "Un balde con agua tibia y unas gotas de detergente neutro (o un chorrito de vinagre blanco).",
          "Un paño de microfibra o una mopa lavavidrios para aplicar.",
          "Un limpiavidrios de goma (escurridor) de buena calidad.",
          "Paños de microfibra secos para bordes y terminaciones.",
        ],
      },
      { type: "h2", text: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Retira primero el polvo del marco y los rieles con una aspiradora o brocha.",
          "Moja bien el vidrio con la solución.",
          "Pasa el escurridor de arriba hacia abajo, secando la goma con un paño después de cada pasada.",
          "Termina los bordes con un paño de microfibra seco.",
          "Si queda alguna marca, repasa solo esa zona con microfibra seca.",
        ],
      },
      {
        type: "warning",
        title: "No limpies con sol directo",
        text: "Con el vidrio caliente, el agua se seca antes de que alcances a retirarla y deja marcas. Prefiere la mañana temprano, el atardecer o los días nublados.",
      },
      {
        type: "tip",
        title: "¿La marca está adentro o afuera?",
        text: "Pasa el escurridor en horizontal por un lado del vidrio y en vertical por el otro. Si queda una marca, sabrás de inmediato en qué lado está.",
      },
      { type: "h2", text: "Seguridad ante todo" },
      {
        type: "p",
        text: "Nunca te asomes por ventanas en altura para limpiar el lado exterior. Para ventanales y fachadas de difícil acceso, contrata un servicio profesional con equipos y protocolos de seguridad.",
      },
    ],
  },

  /* ─────────────────────────── PRODUCTOS ─────────────────────────── */
  {
    slug: "productos-de-limpieza-que-nunca-debes-mezclar",
    title: "5 productos de limpieza que nunca debes mezclar en casa",
    excerpt:
      "Mezclar productos no limpia más: puede liberar gases tóxicos. Esta es la lista que repasamos con todo nuestro equipo.",
    category: "productos",
    date: "2026-09-25",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-5.jpeg",
    coverAlt: "Limpieza de baños a domicilio en Santiago de Chile",
    tags: ["seguridad", "cloro", "productos"],
    relatedService: "limpieza-casas-departamentos",
    content: [
      {
        type: "p",
        text: "Existe la idea de que si juntamos dos productos “potentes” el resultado será el doble de efectivo. En la práctica pasa lo contrario: muchas mezclas se neutralizan entre sí y otras generan gases que irritan los ojos y las vías respiratorias, y que pueden ser peligrosos en espacios cerrados como un baño.",
      },
      { type: "h2", text: "1. Cloro + amoníaco" },
      {
        type: "p",
        text: "Es la combinación más peligrosa y de las más comunes, porque varios limpiavidrios y limpiadores multiuso contienen amoníaco. Juntos liberan cloraminas, gases que provocan tos, ardor de ojos y dificultad para respirar.",
      },
      { type: "h2", text: "2. Cloro + vinagre (o cualquier ácido)" },
      {
        type: "p",
        text: "El vinagre, el limón y muchos antisarro son ácidos. Al mezclarlos con cloro se libera gas cloro. Ojo con los productos para el WC: varios son ácidos y no deben combinarse con cloro en el mismo inodoro.",
      },
      { type: "h2", text: "3. Cloro + alcohol" },
      {
        type: "p",
        text: "Mezclar cloro con alcohol, por ejemplo para “potenciar” un desinfectante, puede producir compuestos tóxicos como el cloroformo. Usa uno u otro, nunca los dos juntos.",
      },
      { type: "h2", text: "4. Agua oxigenada + vinagre" },
      {
        type: "p",
        text: "Por separado son útiles. Mezclados en el mismo envase forman ácido peracético, que es corrosivo e irritante. Si quieres usar ambos, aplícalos por separado y enjuaga entre uno y otro.",
      },
      { type: "h2", text: "5. Dos destapadores de cañerías distintos" },
      {
        type: "p",
        text: "Si un destapador no funcionó, no eches otro encima: pueden reaccionar violentamente, calentarse y salpicar. Deja correr bastante agua y, si el problema sigue, llama a un gasfíter.",
      },
      {
        type: "warning",
        title: "Si ya mezclaste algo por error",
        text: "Sal del lugar, abre puertas y ventanas y no vuelvas hasta que el olor desaparezca. Si alguien tiene tos persistente, mareo o dificultad para respirar, busca atención médica. En Chile puedes llamar al CITUC (Centro de Información Toxicológica UC): +56 2 2635 3800.",
      },
      { type: "h2", text: "Las reglas que usamos en Limpieza24/7" },
      {
        type: "ul",
        items: [
          "Un producto por superficie, y enjuague antes de pasar al siguiente.",
          "Siempre en su envase original y con la etiqueta visible.",
          "Ventilación durante toda la limpieza, especialmente en baños.",
          "Guantes para cualquier producto con cloro o ácido.",
          "Productos ecológicos y biodegradables cada vez que el resultado es el mismo.",
        ],
      },
    ],
  },
  {
    slug: "vinagre-bicarbonato-y-limon-que-limpian-de-verdad",
    title: "Vinagre, bicarbonato y limón: qué limpian de verdad (y dónde nunca usarlos)",
    excerpt:
      "Son baratos, ecológicos y están en todas las cocinas. Pero no sirven para todo: te contamos dónde brillan y dónde pueden hacer daño.",
    category: "productos",
    date: "2026-09-18",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-4.jpeg",
    coverAlt: "Limpieza de cocina a domicilio en Santiago",
    tags: ["ecológico", "vinagre", "bicarbonato"],
    relatedService: "limpieza-casas-departamentos",
    content: [
      {
        type: "p",
        text: "Los limpiadores caseros tienen fama de “sirven para todo”. Bien usados son efectivos, baratos y amables con el medio ambiente; mal usados pueden arruinar una cubierta de mármol en segundos.",
      },
      { type: "h2", text: "Vinagre blanco: el rey del sarro" },
      {
        type: "p",
        text: "Su acidez disuelve la cal que deja el agua de Santiago, que es bastante dura, en griferías, mamparas y hervidores. Diluido en agua también sirve para vidrios y espejos.",
      },
      {
        type: "warning",
        title: "Nunca en piedra natural",
        text: "El ácido del vinagre y del limón ataca el mármol, el granito, el travertino y otras piedras naturales: las deja opacas y manchadas de forma permanente. Tampoco lo uses sobre madera encerada ni de forma frecuente sobre el fragüe.",
      },
      { type: "h2", text: "Bicarbonato: abrasivo suave y antiolores" },
      {
        type: "p",
        text: "Es un polvo levemente abrasivo, ideal para hacer una pasta con agua y limpiar el horno, las ollas o la cocina sin rayar. También absorbe olores en refrigeradores, zapateras y alfombras: espolvoreas, dejas actuar unas horas y aspiras.",
      },
      { type: "h2", text: "El mito de mezclar vinagre con bicarbonato" },
      {
        type: "p",
        text: "La espuma se ve espectacular, pero es básicamente una neutralización: el ácido y la base se anulan y queda agua con acetato de sodio y dióxido de carbono. Puede ayudar a soltar algo puntual en un desagüe, pero como limpiador es menos eficaz que cada uno por separado.",
      },
      { type: "h2", text: "Limón: aroma rico, mismas precauciones" },
      {
        type: "p",
        text: "Funciona parecido al vinagre, porque también es ácido, y deja buen olor. Es útil para tablas de picar o el microondas: un bol con agua y limón calentado unos minutos ablanda la suciedad. Mismas precauciones: nada de piedra natural.",
      },
      {
        type: "tip",
        title: "Regla rápida",
        text: "Ácidos (vinagre, limón) para el sarro y la cal. Alcalinos (bicarbonato, jabón) para la grasa. Y nunca mezclarlos con cloro: revisa [los productos que nunca debes mezclar](/blog/productos-de-limpieza-que-nunca-debes-mezclar).",
      },
    ],
  },

  /* ─────────────────────────── SERVICIOS ─────────────────────────── */
  {
    slug: "checklist-limpieza-post-obra",
    title: "Limpieza post obra: el checklist antes de mudarte o recibir tu remodelación",
    excerpt:
      "El polvo de una obra no es como el polvo de todos los días. Te dejamos el orden correcto y los puntos que casi todos olvidan.",
    category: "servicios",
    date: "2026-08-28",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-7.jpeg",
    coverAlt: "Limpieza post obra en Santiago de Chile",
    tags: ["post obra", "mudanza", "remodelación"],
    relatedService: "limpieza-post-obra",
    content: [
      {
        type: "p",
        text: "Terminó la remodelación y todo se ve “casi listo”, pero hay una capa fina de polvo de yeso y cemento en cada rincón. Ese polvo es muy fino, vuelve a depositarse si se limpia en el orden incorrecto y puede rayar superficies si se arrastra en seco.",
      },
      { type: "h2", text: "El orden importa" },
      {
        type: "ol",
        items: [
          "Retira escombros, cartones, plásticos y restos de material.",
          "Aspira (no barras) para no levantar el polvo fino.",
          "Limpia de arriba hacia abajo: cielos, lámparas, muros, marcos y, al final, pisos.",
          "Limpia vidrios y marcos de ventanas, retirando con cuidado restos de pintura o silicona.",
          "Baños y cocina: griferías, artefactos y muebles por dentro y por fuera.",
          "Pisos al final, con el producto adecuado para cada material.",
        ],
      },
      { type: "h2", text: "Lo que casi todos olvidan" },
      {
        type: "ul",
        items: [
          "El interior de cajones, clósets y muebles de cocina.",
          "Rejillas de ventilación, enchufes e interruptores.",
          "Rieles de ventanas y mamparas, donde se acumula arenilla.",
          "La parte superior de puertas y marcos.",
          "Los filtros de la campana y del aire acondicionado, si estuvieron encendidos durante la obra.",
        ],
      },
      {
        type: "warning",
        title: "Cuidado con raspar",
        text: "Los restos de pintura o cemento sobre vidrio se retiran con espátula especial y mucho cuidado. Sobre cerámica esmaltada, porcelanato pulido o muebles lacados, un raspado mal hecho deja marcas permanentes.",
      },
      { type: "h2", text: "¿Por qué contratar una limpieza post obra profesional?" },
      {
        type: "p",
        text: "Porque es más larga y técnica que una limpieza de mantención: requiere aspiradoras adecuadas para polvo fino, productos específicos para restos de construcción y experiencia para no dañar terminaciones nuevas. Nosotros la hacemos a mano, por etapas y con productos ecológicos. Revisa el detalle en [limpieza post obra](/servicios/limpieza-post-obra) o en nuestra [limpieza profunda detallada](/limpieza-profunda) para casas y deptos, desde $2.000 el m².",
      },
    ],
  },
  {
    slug: "checklist-limpieza-airbnb-cambio-de-huesped",
    title: "Checklist de limpieza para Airbnb: lo que tus huéspedes sí notan",
    excerpt:
      "Una mala reseña por limpieza cuesta reservas. Esta es la lista que usamos en cada cambio de huésped para que el departamento quede impecable.",
    category: "servicios",
    date: "2026-08-14",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-15.jpeg",
    coverAlt: "Limpieza de Airbnb y hoteles en Santiago",
    tags: ["Airbnb", "arriendo temporal", "checklist"],
    relatedService: "limpieza-airbnb-hoteles",
    content: [
      {
        type: "p",
        text: "En arriendos temporales la limpieza es parte del producto. Un huésped perdona un sillón antiguo, pero difícilmente perdona un pelo en la ducha. Estas son las zonas que más aparecen en las reseñas y el checklist que seguimos en cada cambio de huésped.",
      },
      { type: "h2", text: "Las 5 zonas que más se comentan en las reseñas" },
      {
        type: "ol",
        items: [
          "**Baño:** pelos en la ducha, sarro en la grifería y el desagüe.",
          "**Ropa de cama:** sábanas sin manchas, bien estiradas y con olor a limpio.",
          "**Cocina:** refrigerador vacío y limpio, microondas por dentro, vajilla sin marcas.",
          "**Pisos:** sin pelos ni migas, especialmente bajo la cama y el sofá.",
          "**Olor general:** ventilar siempre; un aroma suave es mejor que uno fuerte que “tape” algo.",
        ],
      },
      { type: "h2", text: "Checklist rápido de cambio de huésped" },
      {
        type: "ul",
        items: [
          "Retirar basura y reciclaje de todas las habitaciones.",
          "Cambiar toda la ropa de cama y las toallas, aunque parezcan sin uso.",
          "Limpiar y desinfectar inodoro, lavamanos, ducha y espejos.",
          "Revisar y limpiar el interior del refrigerador, el microondas y el horno.",
          "Lavar y ordenar la vajilla; revisar que esté completa.",
          "Limpiar interruptores, manillas y controles remotos.",
          "Aspirar y trapear todos los pisos, incluyendo bajo los muebles.",
          "Reponer papel higiénico, jabón y artículos básicos.",
          "Ventilar al menos 15 minutos antes de cerrar.",
        ],
      },
      {
        type: "tip",
        title: "Haz fotos del antes y el después",
        text: "Te sirven como respaldo ante reclamos y para comparar el estado del departamento entre estadías.",
      },
      {
        type: "p",
        text: "Además del cambio de huésped, programa cada cierto tiempo una limpieza profunda de sillones, colchones, cortinas y alfombras: se ensucian aunque no se note. Conoce nuestro servicio de [limpieza para Airbnb y hoteles](/servicios/limpieza-airbnb-hoteles).",
      },
    ],
  },

  /* ─────────────────────────── ANÉCDOTAS ─────────────────────────── */
  {
    slug: "historias-del-oficio-el-lunes-despues-del-cumpleanos",
    title: "Historias del oficio: el lunes después del cumpleaños infantil",
    excerpt:
      "Torta en el sillón, jugo en la alfombra y plasticina en lugares imposibles. Lo que hemos aprendido de uno de los llamados más típicos del lunes.",
    category: "anecdotas",
    date: "2026-08-21",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-21.jpeg",
    coverAlt: "Limpieza de muebles a domicilio en Santiago de Chile",
    tags: ["anécdotas", "manchas", "niños"],
    relatedService: "limpieza-sillones-tapiceria",
    content: [
      {
        type: "p",
        text: "Hay un mensaje que se repite en nuestro WhatsApp los lunes en la mañana: “Hola, el sábado fue el cumpleaños de mi hijo y el living quedó…”. Y suele venir con una foto que mezcla merengue, jugo de frambuesa y un sillón claro.",
      },
      {
        type: "p",
        text: "Esta historia reúne situaciones que vemos seguido —sin nombres, por respeto a la privacidad de cada familia— y lo que aprendimos de ellas.",
      },
      { type: "h2", text: "La plasticina no se tira: se congela" },
      {
        type: "p",
        text: "Intentar arrancarla de una alfombra solo la incrusta más. Lo que funciona: aplicar hielo dentro de una bolsa hasta que se endurezca, retirarla con una espátula plástica y tratar después el residuo de color.",
      },
      { type: "h2", text: "El jugo rojo puede ser más difícil que el vino" },
      {
        type: "p",
        text: "Los jugos y bebidas con colorantes rojos están entre las manchas más tercas. Mientras más rápido se absorbe el líquido, mejor; y nunca con agua caliente.",
      },
      { type: "h2", text: "Merengue y crema: primero raspar" },
      {
        type: "p",
        text: "Las manchas con grasa y azúcar se retiran primero en sólido, con una cuchara o espátula, de afuera hacia adentro. Recién después se trata lo que quedó en la fibra.",
      },
      { type: "quote", text: "Lo más importante que aprendimos: la limpieza empieza antes de la fiesta." },
      { type: "h2", text: "Nuestro consejo para la próxima celebración" },
      {
        type: "ul",
        items: [
          "Cubre el sillón con una manta lavable o una funda.",
          "Deja a mano papel absorbente y un paño blanco: los primeros minutos son clave.",
          "Define una “zona de comida” lejos de las alfombras claras.",
          "Y si igual pasa, escríbenos: estos desastres son parte de nuestro día a día.",
        ],
      },
    ],
  },
  {
    slug: "historias-del-oficio-la-alfombra-de-la-abuela",
    title: "Historias del oficio: la alfombra de la abuela",
    excerpt:
      "Algunas cosas que limpiamos valen mucho más que su precio. Por qué con las alfombras antiguas vamos lento, probamos todo y a veces decimos que no.",
    category: "anecdotas",
    date: "2026-07-24",
    cover: "/images/limpieza-a-domicilio-en-comuna-de-santiago-de-chile-19.jpeg",
    coverAlt: "Aseo de hogares en Santiago de Chile",
    tags: ["anécdotas", "alfombras", "lana"],
    relatedService: "limpieza-alfombras",
    content: [
      {
        type: "p",
        text: "Hay encargos que se sienten distintos desde la primera llamada. Pasa seguido con las alfombras heredadas: tejidas a mano, de lana, con colores que ya no se fabrican y, sobre todo, con historia familiar. Cuando alguien nos dice “era de mi abuela”, sabemos que el trabajo es otro.",
      },
      { type: "h2", text: "Primero, mirar y preguntar" },
      {
        type: "p",
        text: "Antes de mojar nada revisamos el tipo de fibra, si el tejido está firme, si hay polilla y si los colores son estables. Hacemos una prueba de color con un paño blanco húmedo en una esquina: si el paño se tiñe, cambiamos de técnica.",
      },
      { type: "h2", text: "Menos agua, más paciencia" },
      {
        type: "p",
        text: "Las alfombras de lana antiguas no toleran bien el exceso de agua ni los productos alcalinos fuertes. Trabajamos a mano, por zonas, con productos neutros y extracción de la humedad, y nos aseguramos de que seque bien para evitar hongos y olores.",
      },
      { type: "h2", text: "A veces la respuesta honesta es “esto no”" },
      {
        type: "p",
        text: "Si una mancha es antigua y el tinte ya está comprometido, preferimos explicarlo antes que prometer un resultado imposible. Una alfombra con historia merece honestidad.",
      },
      { type: "quote", text: "Limpiar también es cuidar los recuerdos de una familia." },
      {
        type: "tip",
        title: "Para cuidarla en casa",
        text: "Aspírala por ambos lados con regularidad, gírala cada cierto tiempo para que el desgaste y la luz sean parejos, y evita el sol directo prolongado, que decolora la lana.",
      },
    ],
  },
];

/** Artículos ordenados del más reciente al más antiguo. */
export const BLOG_POSTS: BlogPost[] = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Tiempo de lectura estimado (≈200 palabras por minuto). */
export function getReadingMinutes(post: BlogPost): number {
  const text = post.content
    .map((b) => {
      if (b.type === "ul" || b.type === "ol") return b.items.join(" ");
      if (b.type === "qa") return b.items.map((i) => `${i.q} ${i.a}`).join(" ");
      if (b.type === "tip" || b.type === "warning") return `${b.title} ${b.text}`;
      return b.text;
    })
    .join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

/** Artículos relacionados: primero de la misma categoría, luego los más recientes. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

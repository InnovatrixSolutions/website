export type Category =
  | "asistencia"
  | "streaming"
  | "productos";

export type Product = {
  id: string;
  name: string;
  category: Category;
  subcategory: string;
  priceCOP: number;
  shortDescription: string;
  longDescription: string;
  includes: string[];
  deliveryTime: string; // e.g. "30-120 minutos"
  slug: string;
  recommended?: boolean;
};

export const catalog: Product[] = [
  // IA assistance
  {
    id: "ia-chatgpt",
    name: "Asistencia: ChatGPT (configuración)",
    category: "asistencia",
    subcategory: "IA",
    priceCOP: 25000,
    shortDescription: "Ayuda para suscribirte y configurar ChatGPT bajo tu cuenta.",
    longDescription:
      "Te ayudamos a suscribirte, elegir plan y configurar ChatGPT para tu uso personal o de negocio. Incluye recomendaciones de prompts y ajustes de privacidad.",
    includes: ["Creación/validación de cuenta", "Selección de plan", "Guía de uso y prompts"],
    deliveryTime: "30-120 minutos",
    slug: "chatgpt-configuracion",
    recommended: true,
  },
  {
    id: "ia-gemini",
    name: "Asistencia: Gemini (configuración)",
    category: "asistencia",
    subcategory: "IA",
    priceCOP: 22000,
    shortDescription: "Suscripción y puesta a punto de Gemini bajo tu cuenta.",
    longDescription:
      "Configuramos Gemini para que empieces a usarlo con prompts útiles y conectarlo a tus flujos de trabajo básicos.",
    includes: ["Registro y verificación", "Ajustes iniciales", "Paquete de prompts"],
    deliveryTime: "30-120 minutos",
    slug: "gemini-configuracion",
    recommended: false,
  },
  {
    id: "ia-notion-ai",
    name: "Asistencia: Notion AI (configuración)",
    category: "asistencia",
    subcategory: "IA",
    priceCOP: 20000,
    shortDescription: "Integración y configuración de Notion AI en tu workspace.",
    longDescription:
      "Te guiamos para activar Notion AI, configurar permisos y plantillas para productividad personal o equipos pequeños.",
    includes: ["Activación", "Plantillas básicas", "Entrenamiento corto"],
    deliveryTime: "30-120 minutos",
    slug: "notion-ai-configuracion",
    recommended: false,
  },
  {
    id: "ia-grammarly",
    name: "Asistencia: Grammarly (configuración)",
    category: "asistencia",
    subcategory: "IA",
    priceCOP: 15000,
    shortDescription: "Suscripción y ajustes de Grammarly para mejor escritura.",
    longDescription:
      "Activamos y configuramos Grammarly para mejorar correos, documentos y comunicaciones profesionales.",
    includes: ["Configuración de perfil", "Extensión navegador", "Consejos de uso"],
    deliveryTime: "30-120 minutos",
    slug: "grammarly-configuracion",
    recommended: false,
  },

  // Streaming assistance
  {
    id: "stream-netflix",
    name: "Asistencia: Netflix (registro y recomendaciones)",
    category: "streaming",
    subcategory: "Streaming",
    priceCOP: 18000,
    shortDescription: "Ayuda para crear cuenta y configurar perfiles y controles parentales.",
    longDescription:
      "Te ayudamos a crear la cuenta de Netflix a tu nombre, configurar perfiles y opciones de reproducción según tus preferencias.",
    includes: ["Creación de cuenta", "Perfiles y control parental", "Recomendaciones iniciales"],
    deliveryTime: "30-120 minutos",
    slug: "netflix-registro",
    recommended: false,
  },
  {
    id: "stream-disney",
    name: "Asistencia: Disney+ (registro)",
    category: "streaming",
    subcategory: "Streaming",
    priceCOP: 18000,
    shortDescription: "Registro y configuración de Disney+ bajo tu correo.",
    longDescription:
      "Asistencia para crear la cuenta, activar métodos de pago y personalizar perfiles.",
    includes: ["Registro", "Activación de plan", "Configuración de perfiles"],
    deliveryTime: "30-120 minutos",
    slug: "disneyplus-registro",
    recommended: false,
  },
  {
    id: "stream-max",
    name: "Asistencia: Max (registro)",
    category: "streaming",
    subcategory: "Streaming",
    priceCOP: 16000,
    shortDescription: "Creación y configuración de Max con tus preferencias.",
    longDescription:
      "Configuramos Max en tu cuenta, ayudándote con perfiles, idioma y recomendaciones iniciales.",
    includes: ["Creación de cuenta", "Ajustes de reproducción", "Consejos de contenido"],
    deliveryTime: "30-120 minutos",
    slug: "max-registro",
    recommended: false,
  },
  {
    id: "stream-spotify",
    name: "Asistencia: Spotify (configuración)",
    category: "streaming",
    subcategory: "Streaming",
    priceCOP: 12000,
    shortDescription: "Configuración de Spotify, playlists y dispositivos.",
    longDescription:
      "Ayuda para crear la cuenta, configurar playlists, conectar dispositivos y exportar/importar listas si es necesario.",
    includes: ["Creación y verificación", "Playlists iniciales", "Conexión a dispositivos"],
    deliveryTime: "30-120 minutos",
    slug: "spotify-configuracion",
    recommended: false,
  },

  // Productos digitales / servicios
  {
    id: "prod-cv",
    name: "Optimización de CV (PDF)",
    category: "productos",
    subcategory: "Plantilla / Servicio",
    priceCOP: 40000,
    shortDescription: "Revisión y optimización profesional de tu CV en PDF.",
    longDescription:
      "Analizamos tu CV, mejoramos la redacción y diseño, y entregamos un PDF listo para postular con recomendaciones personalizadas.",
    includes: ["Revisión completa", "PDF final listo", "Sugerencias de LinkedIn"],
    deliveryTime: "24-72 horas",
    slug: "optimizacion-cv",
    recommended: true,
  },
  {
    id: "prod-prompts",
    name: "Pack de prompts (PDF)",
    category: "productos",
    subcategory: "PDF",
    priceCOP: 20000,
    shortDescription: "Colección de prompts útiles para IA (PDF descargable).",
    longDescription:
      "Pack de 50 prompts organizados por uso (escritura, email, productividad, prompts para ventas y soporte). Incluye guía de uso.",
    includes: ["PDF descargable", "Guía de uso", "Categorías de prompts"],
    deliveryTime: "Inmediato (descarga)",
    slug: "pack-prompts-pdf",
    recommended: true,
  },
  {
    id: "prod-notion-template",
    name: "Plantilla Notion (organización)",
    category: "productos",
    subcategory: "Plantilla",
    priceCOP: 30000,
    shortDescription: "Plantilla Notion para gestión personal y proyectos.",
    longDescription:
      "Plantilla personalizable para tareas, proyectos y documentación, pensada para trabajadores independientes y pequeñas empresas.",
    includes: ["Plantilla compartible", "Guía de instalación", "Soporte corto"],
    deliveryTime: "24 horas",
    slug: "notion-template-organizacion",
    recommended: false,
  },
  {
    id: "prod-training-1h",
    name: "Capacitación: 1 hora (sesión en línea)",
    category: "productos",
    subcategory: "Servicio",
    priceCOP: 60000,
    shortDescription: "Sesión de 1 hora para entrenamiento o asesoría personalizada.",
    longDescription:
      "Sesión remota de 60 minutos para resolver dudas, formar al equipo o revisar flujos y configuraciones.",
    includes: ["1 hora en Zoom/Meet", "Grabación (opcional)", "Resumen con pasos siguientes"],
    deliveryTime: "A coordinar (24-72h)",
    slug: "capacitacion-1h",
    recommended: false,
  },
];

export default catalog;

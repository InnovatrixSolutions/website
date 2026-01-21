import BrandLogo from "../components/BrandLogo";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

import { getDictionary } from "../i18n/getDictionary";

type Locale = "en" | "es";

const copy: Record<
  Locale,
  {
    nav: { services: string; catalog: string; why: string; contact: string };
    hero: {
      pill: string;
      titleA: string;
      titleB: string;
      titleC: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    services: {
      title: string;
      items: Array<{ title: string; desc: string }>;
      cta: string;
    };
    why: {
      title: string;
      points: Array<{ title: string; desc: string }>;
    };
    process: { title: string; steps: Array<{ title: string; desc: string }> };
    contact: {
      title: string;
      subtitle: string;
      emailLabel: string;
      button: string;
    };
    footer: { rights: string };
  }
> = {
  en: {
    nav: { services: "Service Catalog", catalog: "Product Catalog", why: "Why Innovatrix", contact: "Contact" },
    hero: {
      pill: "Building systems that scale",
      titleA: "We build ",
      titleB: "AI",
      titleC: " and automation that make your business move.",
      subtitle:
        "Innovatrix delivers practical solutions: workflow automation, AI assistants, and modern software platforms — with engineering quality from day one.",
      ctaPrimary: "Explore services",
      ctaSecondary: "Why Innovatrix",
    },
    services: {
      title: "Services",
      cta: "Consult",
      items: [
        { title: "AI Assistants & Agents", desc: "Customer support bots, internal copilots, RAG search, and agentic workflows connected to your tools." },
        { title: "Workflow Automation", desc: "Automate processes across forms, email, CRMs, spreadsheets, and DevOps tooling (n8n, APIs, webhooks)." },
        { title: "Software & Web Platforms", desc: "Fast, modern web apps with Next.js/React/Vue, clean UX, analytics, and scalable backends." },
        { title: "Data & Integrations", desc: "APIs, ETL pipelines, reporting, dashboards, and reliable system-to-system integrations." },
        { title: "Cloud & DevOps", desc: "Docker, CI/CD, monitoring, deployments (Vercel, AWS, DigitalOcean), security-first practices." },
        { title: "Consulting & Architecture", desc: "Technical leadership, roadmaps, audits, performance fixes, and best-practice engineering guidance." },
        { title: "E-commerce Platforms", desc: "Headless or full-stack e-commerce with inventory, catalogs, and checkout integrations." },
        { title: "Mobile Apps", desc: "Cross-platform mobile experiences with React Native, Expo, or native tooling." },
        { title: "UX / UI Design", desc: "Research-driven interfaces, design systems, and high-conversion product UX." },
        { title: "API Development", desc: "Robust REST/GraphQL APIs, authentication, versioning, and SDKs." },
        { title: "Observability & Monitoring", desc: "Logging, metrics, tracing, alerts, and dashboards for production reliability." },
        { title: "Performance Optimization", desc: "Frontend and backend profiling, caching, and critical-path improvements." },
        { title: "Security & Compliance", desc: "Threat modeling, audits, secure coding, and compliance readiness (GDPR, etc.)." },
        { title: "Migration & Modernization", desc: "Lift-and-shift or re-architecture to modern stacks and cloud-native patterns." },
        { title: "MLOps & Model Deployment", desc: "Model training pipelines, deployment, monitoring, and retraining workflows." },
        { title: "Conversational Sales Chatbots", desc: "Bots for lead capture, qualification, and handoff to sales teams." },
        { title: "Payments & Gateways", desc: "Integrations with Stripe, PayU, MercadoPago and reconciliation flows." },
        { title: "Headless CMS & Content", desc: "Content APIs, previews, and workflows for marketing and editorial teams." },
        { title: "Real-time Systems", desc: "WebSockets, push updates, notifications, and collaborative features." },
        { title: "SaaS Product Engineering", desc: "Productization, subscription billing, multi-tenant design, and onboarding flows." },
        { title: "Airbnb & Short-term Rental Consulting", desc: "Turn your property into a digital product: platform management, guest automation, and revenue optimization." },
        { title: "Business Starter Kit", desc: "Formalization (registration), accounting software, social media setup, and a sales-ready website." },
        { title: "Digital Brand Identity", desc: "Logo design, brand guidelines, and visual strategy to stand out in digital channels." },
      ],
    },
    why: {
      title: "Why Innovatrix",
      points: [
        {
          title: "Engineering quality",
          desc: "We build maintainable systems: clean code, observability, and security-aware design.",
        },
        {
          title: "Business-driven outcomes",
          desc: "We ship what matters: measurable automation, reduced manual work, and faster operations.",
        },
        {
          title: "Practical AI",
          desc: "We focus on useful AI: assistants, search, and automation — not hype.",
        },
      ],
    },
    process: {
      title: "How we work",
      steps: [
        { title: "1) Discovery", desc: "We map goals, constraints, and quick wins." },
        { title: "2) Prototype", desc: "We validate with a fast demo and real data." },
        { title: "3) Build & launch", desc: "We implement, test, deploy, and monitor." },
        { title: "4) Improve", desc: "We iterate based on metrics and feedback." },
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Tell us what you want to automate or build. We’ll reply with a plan and next steps.",
      emailLabel: "Email",
      button: "Send message",
    },
    footer: { rights: "All rights reserved." },
  },
  es: {
    nav: { services: "Catálogo de Servicios", catalog: "Catálogo de Productos", why: "Por qué Innovatrix", contact: "Contacto" },
    hero: {
      pill: "Construimos sistemas que escalan",
      titleA: "Creamos ",
      titleB: "IA",
      titleC: " y automatización para que tu negocio se mueva.",
      subtitle:
        "En Innovatrix entregamos soluciones prácticas: automatización de flujos, asistentes de IA y plataformas modernas — con calidad de ingeniería desde el día uno.",
      ctaPrimary: "Ver servicios",
      ctaSecondary: "Por qué Innovatrix",
    },
    services: {
      title: "Servicios",
      cta: "Consultar",
      items: [
        { title: "Asistentes y agentes de IA", desc: "Bots de soporte, copilotos internos, búsqueda tipo RAG y flujos agenticos conectados a tus herramientas." },
        { title: "Automatización de procesos", desc: "Automatiza procesos con formularios, email, CRMs, hojas de cálculo y herramientas DevOps (n8n, APIs, webhooks)." },
        { title: "Software y plataformas web", desc: "Apps web modernas con Next.js/React/Vue, UX limpio, analítica y backends escalables." },
        { title: "Datos e integraciones", desc: "APIs, pipelines ETL, reporting, dashboards e integraciones confiables entre sistemas." },
        { title: "Cloud y DevOps", desc: "Docker, CI/CD, monitoreo, despliegues (Vercel, AWS, DigitalOcean) y buenas prácticas de seguridad." },
        { title: "Consultoría y arquitectura", desc: "Liderazgo técnico, roadmaps, auditorías, optimización y guía de buenas prácticas." },
        { title: "Plataformas de comercio electrónico", desc: "E-commerce headless o monolítico con inventario, catálogos y flujos de pago." },
        { title: "Apps móviles", desc: "Experiencias móviles multiplataforma con React Native, Expo o herramientas nativas." },
        { title: "Diseño UX / UI", desc: "Interfaces basadas en investigación, sistemas de diseño y UX orientado a conversión." },
        { title: "Desarrollo de APIs", desc: "APIs REST/GraphQL robustas, autenticación, versionado y SDKs." },
        { title: "Observabilidad y monitoreo", desc: "Logging, métricas, tracing, alertas y dashboards para producción." },
        { title: "Optimización de rendimiento", desc: "Perfilado frontend/backend, caching y mejoras del path crítico." },
        { title: "Seguridad y cumplimiento", desc: "Threat modeling, auditorías, codificación segura y preparación para cumplimiento (GDPR)." },
        { title: "Migración y modernización", desc: "Re-arquitectura o migración a stacks modernos y patrones cloud-native." },
        { title: "MLOps y despliegue de modelos", desc: "Pipelines de entrenamiento, despliegue de modelos, monitorización y retraining." },
        { title: "Chatbots conversacionales de ventas", desc: "Bots para captura de leads, cualificación y traspaso al equipo de ventas." },
        { title: "Pagos e integraciones", desc: "Integraciones con Stripe, PayU, MercadoPago y flujos de conciliación." },
        { title: "Headless CMS y contenido", desc: "APIs de contenido, previews y workflows para marketing y editorial." },
        { title: "Sistemas en tiempo real", desc: "WebSockets, pushes, notificaciones y features colaborativas." },
        { title: "Ingeniería de productos SaaS", desc: "Productización, billing por suscripción, multi-tenant y onboarding." },
        { title: "Asesoría Airbnb y Rentas Cortas", desc: "Transforma tu propiedad en un producto digital: gestión de plataformas, automatización de huéspedes y optimización de ingresos." },
        { title: "Kit de Inicio Empresarial", desc: "Formalización (Cámara de Comercio), software contable, configuración de redes sociales y sitio web listo para vender." },
        { title: "Identidad de Marca Digital", desc: "Diseño de logotipos, manual de marca y estrategia visual para destacar en canales digitales." },
      ],
    },
    why: {
      title: "Por qué Innovatrix",
      points: [
        {
          title: "Calidad de ingeniería",
          desc: "Sistemas mantenibles: código limpio, observabilidad y diseño consciente de seguridad.",
        },
        {
          title: "Resultados para el negocio",
          desc: "Entregamos lo que importa: automatización medible, menos trabajo manual y operación más rápida.",
        },
        {
          title: "IA práctica",
          desc: "Enfocados en IA útil: asistentes, búsqueda y automatización — sin humo.",
        },
      ],
    },
    process: {
      title: "Cómo trabajamos",
      steps: [
        { title: "1) Descubrimiento", desc: "Entendemos objetivos, restricciones y quick wins." },
        { title: "2) Prototipo", desc: "Validamos con una demo rápida y datos reales." },
        { title: "3) Construcción y lanzamiento", desc: "Implementamos, probamos, desplegamos y monitoreamos." },
        { title: "4) Mejora continua", desc: "Iteramos según métricas y feedback." },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Cuéntanos qué quieres automatizar o construir. Te respondemos con un plan y próximos pasos.",
      emailLabel: "Correo",
      button: "Enviar mensaje",
    },
    footer: { rights: "Todos los derechos reservados." },
  },
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "es" ? "es" : "en";
  const t = await getDictionary(locale);

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* orb 1 */}
        {/* <div
            className="absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 rounded-full
                      bg-gradient-to-tr from-[#42A5F6]/55 via-[#7B61FF]/35 to-transparent blur-3xl
                      animate-ai-orb-1"
          /> */}
        {/* orb 2 */}
        {/* <div
            className="absolute left-[25%] top-[55%] h-[460px] w-[460px] -translate-x-1/2 rounded-full
                      bg-gradient-to-br from-[#42A5F6]/35 via-transparent to-transparent blur-3xl
                      animate-ai-orb-2"
          /> */}

        {/* subtle grid/noise feel */}
        {/* <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" /> */}
      </div>


      {/* Top gradient */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black to-transparent" />

      {/* Subtle accent glow */}
      <div className="pointer-events-none fixed left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#42A5F6]/10 blur-3xl" />

      <main className="mx-auto w-full max-w-6xl px-6">
        {/* NAV */}
        <header className="flex items-center justify-between py-6">
          <a href={`/${locale}`} className="flex items-center gap-3">
            {/* Mobile: isotipo */}
            <span className="md:hidden">
              <BrandLogo variant="isotipo" size={34} priority />
            </span>
            {/* Desktop: logotipo */}
            <span className="hidden md:block">
              <BrandLogo variant="logotipo" size={34} priority />
            </span>
          </a>

          <nav className="flex items-center gap-6 text-sm text-white/70 flex-wrap">
            <a className="hover:text-white" href={`/${locale}#services`}>
              {t.nav.services}
            </a>
            <a className="hover:text-white" href={`/${locale}/catalogo`}>
              {t.nav.catalog}
            </a>
            <a className="hover:text-white" href={`/${locale}#why`}>
              {t.nav.capabilities}
            </a>
            <a className="hover:text-white" href={`/${locale}/sobre-nosotros`}>
              Sobre nosotros
            </a>
            <a className="hover:text-white" href={`/${locale}/politicas`}>
              Políticas
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/en"
              className={cx(
                "rounded-full border px-3 py-1 text-xs transition",
                locale === "en"
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/20 text-white/70 hover:text-white"
              )}
            >
              EN
            </a>
            <a
              href="/es"
              className={cx(
                "rounded-full border px-3 py-1 text-xs transition",
                locale === "es"
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/20 text-white/70 hover:text-white"
              )}
            >
              ES
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="py-20 md:py-28">
          {/* Big lockup (principal) for brand presence */}
          <div className="mb-10">
            <BrandLogo variant="lockup" size={64} priority />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#42A5F6]" />
            {t.hero.badge}
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {t.hero.titleA}
            <span className="text-[#42A5F6]">{t.hero.titleB}</span>
            {t.hero.titleC}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={`/${locale}#services`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#42A5F6] px-6 text-sm font-medium text-black transition hover:opacity-90"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={`/${locale}#why`}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Small “signature” row: isotipo + logotipo */}
          <div className="mt-12 flex items-center gap-4 text-sm text-white/50">
            <BrandLogo variant="isotipo" size={26} />
            <span className="h-4 w-px bg-white/10" />
            <BrandLogo variant="logotipo" size={26} />
            <span className="h-4 w-px bg-white/10" />
            <span>AI • Automation • Software</span>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-24 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{t.services.title}</h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 md:text-base">
            {locale === "es"
              ? "Comenzamos con automatización e IA — y escalamos hacia plataformas completas a medida que tu negocio crece."
              : "We start with automation and AI — and scale into full platforms as your business grows."}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s: any) => {
              const waNumber = process.env.NEXT_PUBLIC_WHATSAPP ?? "573166402868";
              const cleanPhone = waNumber.replace(/[^0-9]/g, "");
              const wa = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                locale === "es"
                  ? `Hola, me interesa el servicio de: ${s.title}`
                  : `Hello, I'm interested in the service: ${s.title}`
              )}`;
              return (
                <div
                  key={s.title}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{s.desc}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#42A5F6] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      {t.services.cta}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* WHY */}
        <section id="why" className="scroll-mt-24 py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{t.capabilities.title}</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.capabilities.points.map((p: any) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">{t.process.title}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.process.steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">{t.contact.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
              {t.contact.subtitle}
            </p>

            <ContactForm
              emailLabel={locale === "es" ? "Correo" : "Email"}
              messageLabel={locale === "es" ? "Mensaje" : "Message"}
              messagePlaceholder={
                locale === "es"
                  ? "¿Qué quieres automatizar o construir?"
                  : "What do you want to build or automate?"
              }
              buttonLabel={t.contact.ctaEmail}
            />
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-sm text-white/50">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Left */}
            <div className="flex flex-col gap-2">
              <span>
                © {new Date().getFullYear()} Innovatrix. {t.footer.rights}
              </span>
              <span className="text-white/40">AI • Automation • Software</span>
            </div>

            {/* Right: Social & Contact */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">

              {/* Instagram */}
              <a
                href="https://instagram.com/innovatrix_hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 transition hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@innovatrix.technology</span>
              </a>

              {/* WhatsApp / Phone */}
              <a
                href="https://wa.me/573166402868"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 transition hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                   19.79 19.79 0 0 1-8.63-3.07
                   19.5 19.5 0 0 1-6-6
                   19.79 19.79 0 0 1-3.07-8.67
                   A2 2 0 0 1 4.11 2h3
                   a2 2 0 0 1 2 1.72
                   12.84 12.84 0 0 0 .7 2.81
                   2 2 0 0 1-.45 2.11L8.09 9.91
                   a16 16 0 0 0 6 6l1.27-1.27
                   a2 2 0 0 1 2.11-.45
                   12.84 12.84 0 0 0 2.81.7
                   A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                <span>+57 (316) 640 2868</span>
              </a>

            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

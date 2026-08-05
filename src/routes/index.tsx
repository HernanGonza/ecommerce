import { createFileRoute } from "@tanstack/react-router";
import { motion, MotionConfig } from "framer-motion";
import heroImage from "@/assets/hero-retail.jpg";
import paraleloLogo from "@/assets/paralelo-logo.png";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { useActiveSection } from "@/hooks/use-active-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Propuesta comercial · Paralelo Software Studio" },
      {
        name: "description",
        content:
          "Propuesta de Paralelo Software Studio para desarrollar una plataforma a medida de gestión comercial y ecommerce multi-tienda para locales de indumentaria.",
      },
      { property: "og:title", content: "Propuesta – Plataforma Multi-Tienda a medida · Paralelo Software Studio" },
      {
        property: "og:description",
        content:
          "Un panel para el dueño, autonomía total para cada tienda. Desarrollo exclusivo con React y Supabase, implementación y evolución a cargo de Paralelo Software Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Propuesta,
});

const nav = [
  { href: "#arquitectura", label: "Arquitectura" },
  { href: "#modulos", label: "Módulos" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#inversion", label: "Inversión" },
  { href: "#futuro", label: "Evolución" },
];

const objetivos = [
  "Centralizar en un panel administrador la visión y gestión de todas las tiendas del negocio.",
  "Dar a cada tienda autonomía operativa total sobre stock, pedidos, catálogo y precios.",
  "Consolidar el stock de todas las tiendas en una vista única y valorizada.",
  "Mejorar la experiencia de compra online y la eficiencia operativa del día a día.",
];

const modulos = [
  {
    n: "01",
    t: "Productos",
    d: "Catálogo independiente por tienda: marca, modelo, categoría, fotografías, descripción, precio de costo, venta y promocional, SKU, código de barras y variantes por talle y color con stock propio.",
  },
  {
    n: "02",
    t: "Stock",
    d: "Stock propio por tienda, consolidado y valorizado en el panel administrador. Transferencias manuales entre tiendas, inventarios, alertas por bajo stock, historial de movimientos y escaneo por código de barras.",
  },
  {
    n: "03",
    t: "Pedidos",
    d: "Estados de Pendiente a Entregado, gestionados por la tienda donde se realizó la compra. El panel administrador ve todos los pedidos de todas las tiendas.",
  },
  {
    n: "04",
    t: "Clientes",
    d: "Base consolidada con matching por email o DNI/CUIT. Historial cruzado: en qué tiendas compra, gasto total, frecuencia y ticket promedio.",
  },
  {
    n: "05",
    t: "Facturación y pagos",
    d: "Facturación electrónica, Mercado Pago, MODO, transferencias, tarjetas y pago en local. A definir si todas las tiendas facturan bajo la misma razón social o cada una la suya.",
  },
  {
    n: "06",
    t: "Aplicación móvil",
    d: "Pedidos, consulta de productos, inventario, escaneo de códigos, recepción de mercadería y notificaciones, con alcance según el rol del usuario.",
  },
  {
    n: "07",
    t: "Reportes",
    d: "Por tienda: ventas, ticket promedio, más vendidos, stock valorizado y productos sin rotación. Consolidado: comparativa entre tiendas, clientes cruzados y rentabilidad global.",
  },
  {
    n: "08",
    t: "Seguridad y roles",
    d: "Dueño/Administrador, Gerente de tienda y Vendedor. Acceso segmentado, auditoría, backups automáticos, monitoreo y alta disponibilidad.",
  },
];

const servicios = [
  "Diseño y configuración de cada tienda nueva: identidad visual, estructura de catálogo y dominio.",
  "Producción fotográfica y edición de imágenes, incluyendo fotos con modelos, por temporada o lanzamiento.",
  "Diseño gráfico, carga inicial de catálogo, migración de datos y capacitación al equipo.",
  "Marketing digital, SEO y gestión de redes sociales, bajo demanda.",
];

const precios = [
  {
    concepto: "Despliegue inicial",
    detalle: "Panel administrador + 1ª tienda, dominio, hosting e infraestructura base",
    monto: "$2.500.000",
    frecuencia: "Costo estimado · único · 50% inicio / 50% entrega",
    destacado: true,
  },
  {
    concepto: "Abono mensual de mantenimiento",
    detalle:
      "Panel administrador, operación de la 1ª tienda, hosting, actualizaciones, monitoreo, backups y soporte",
    monto: "$350.000",
    frecuencia: "Costo estimado · mensual",
    destacado: false,
  },
  {
    concepto: "Despliegue de tienda adicional",
    detalle: "Diseño y configuración de la nueva tienda (no incluye infraestructura base)",
    monto: "$400.000",
    frecuencia: "Costo estimado · único, por tienda",
    destacado: false,
  },
  {
    concepto: "Abono de tienda adicional",
    detalle: "Operación y soporte de cada tienda adicional",
    monto: "A definir",
    frecuencia: "Costo estimado · mensual, por tienda",
    destacado: false,
  },
];

const futuro = [
  "Fidelización cruzada entre tiendas",
  "Marketplaces, Gift Cards y WhatsApp Business",
  "IA para descripciones y recomendaciones",
  "Predicción de demanda e integraciones contables",
  "BI avanzado",
  "App para clientes finales",
  "Modelo comercial variable por comisión",
];

const navIds = nav.map((i) => i.href.slice(1));

function Propuesta() {
  const activeId = useActiveSection(navIds);

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="https://www.paralelo.tech"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            <img
              src={paraleloLogo}
              alt="Paralelo Software Studio"
              className="h-7 w-auto"
            />
            <span className="hidden text-xs text-muted-foreground sm:inline">Propuesta comercial</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {nav.map((i) => {
              const isActive = activeId === i.href.slice(1);
              return (
                <a
                  key={i.href}
                  href={i.href}
                  className={
                    isActive
                      ? "text-foreground transition-colors"
                      : "text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {i.label}
                </a>
              );
            })}
          </nav>
          <a
            href="#inversion"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver inversión
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                Desarrollo exclusivo a medida
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Propuesta presentada por{" "}
                <a
                  href="https://www.paralelo.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground underline-offset-2 hover:underline"
                >
                  Paralelo Software Studio
                </a>
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Plataforma de gestión comercial y ecommerce multi-tienda
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Un panel administrador con visibilidad total del negocio y, debajo, cada local de
                indumentaria operando con su propia marca, su propio catálogo y su propia tienda
                online. Mismo dueño, identidades comerciales distintas.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#arquitectura"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Ver la arquitectura
                </a>
                <a
                  href="#inversion"
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Modalidad comercial
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["2", "Niveles de gestión"],
                  ["100%", "Stock consolidado"],
                  ["1", "Plataforma a medida"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-3xl text-accent">{k}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
                <img
                  src={heroImage}
                  width={1600}
                  height={1104}
                  alt="Interior de una tienda de indumentaria multi-marca"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:block">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  El cliente opera
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  Carga stock, gestiona pedidos y ventas. El diseño y la operación técnica quedan a
                  cargo del proveedor.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Objetivos */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Objetivos</h2>
            </Reveal>
            <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2">
              {objetivos.map((o, i) => (
                <RevealItem as="li" key={o} className="border-t border-border pt-4">
                  <span className="text-xs tracking-widest text-accent">
                    0{i + 1}
                  </span>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{o}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Arquitectura */}
        <section id="arquitectura" className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Arquitectura general</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
              Dos niveles: control arriba, autonomía abajo
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2">
            <RevealItem as="article" className="rounded-2xl border border-border bg-[image:var(--gradient-ink)] p-8 text-primary-foreground shadow-[var(--shadow-soft)]">
              <p className="text-xs uppercase tracking-[0.2em] opacity-70">Nivel 1</p>
              <h3 className="mt-3 font-display text-2xl">Panel Administrador · el dueño</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed opacity-90">
                {[
                  "Stock consolidado de todas las tiendas.",
                  "Productos, pedidos y ventas por tienda o consolidados.",
                  "Base de clientes unificada por email o DNI, con historial completo.",
                  "Usuarios y permisos de todas las tiendas.",
                  "Reportes comparativos y globales del negocio.",
                  "Configuración general, facturación y medios de pago.",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-current opacity-70" />
                    {x}
                  </li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem as="article" className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Nivel 2</p>
              <h3 className="mt-3 font-display text-2xl">Panel de cada tienda</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Acceso exclusivo a lo que le pertenece: no ve stock, pedidos ni clientes de otras
                tiendas.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-secondary/60 p-4">
                  <p className="text-sm font-medium">Vendedor</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Gestiona pedidos, consulta stock y atiende a los clientes de su tienda.
                  </p>
                </div>
                <div className="rounded-xl bg-secondary/60 p-4">
                  <p className="text-sm font-medium">Gerente de tienda</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Administra catálogo, precios, promociones y accede a los reportes de su tienda.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Cada tienda cuenta además con su tienda online: diseño propio, dominio o subdominio
                propio, catálogo independiente, checkout optimizado e historial y seguimiento de
                pedidos para sus clientes. Como referencia, esta propuesta puede vivir en{" "}
                <a
                  href="https://ecommerce.paralelo.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground underline-offset-2 hover:underline"
                >
                  ecommerce.paralelo.tech
                </a>
                .
              </p>
            </RevealItem>
          </RevealGroup>
        </section>

        {/* Módulos */}
        <section id="modulos" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Alcance funcional</p>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                Módulos de la plataforma
              </h2>
            </Reveal>
            <RevealGroup
              stagger={0.05}
              className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2"
            >
              {modulos.map((m) => (
                <RevealItem as="article" key={m.n} className="bg-card p-8">
                  <span className="font-display text-sm text-accent">{m.n}</span>
                  <h3 className="mt-2 font-display text-xl">{m.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Tecnología */}
        <section id="tecnologia" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                Arquitectura técnica
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                Una sola base, separación lógica por tienda
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Cada tienda opera con sus propios datos —catálogo, stock, pedidos y clientes— y el
                panel administrador consolida todo en tiempo real, sin procesos de sincronización
                entre sistemas separados. Backups, monitoreo y alta disponibilidad para el conjunto
                de la plataforma.
              </p>
            </Reveal>
            <RevealGroup className="grid gap-4">
              {[
                {
                  t: "Frontend · React",
                  d: "Panel administrador, paneles de cada tienda y tiendas online.",
                },
                {
                  t: "Backend · Supabase",
                  d: "PostgreSQL gestionado, autenticación, storage de imágenes de producto y funciones.",
                },
                {
                  t: "Row Level Security",
                  d: "La separación entre tiendas se implementa a nivel de base de datos, con políticas de acceso por tienda y por rol.",
                },
              ].map((x) => (
                <RevealItem
                  key={x.t}
                  className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-display text-lg">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Servicios */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                Implementación y servicios opcionales
              </h2>
            </Reveal>
            <RevealGroup as="ul" className="grid gap-5 sm:grid-cols-2">
              {servicios.map((s) => (
                <RevealItem
                  as="li"
                  key={s}
                  className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {s}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Inversión */}
        <section id="inversion" className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Modalidad comercial</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">Inversión estimada</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Los siguientes valores son costos estimados en pesos argentinos, pensados como punto de
            partida para la negociación. El monto final se ajustará según alcance, plazos y
            necesidades específicas del proyecto. Modelo de suscripción mensual recurrente por
            mantenimiento, soporte y evolución de la plataforma.
          </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-2">
            {precios.map((p) => (
              <RevealItem
                as="article"
                key={p.concepto}
                className={
                  p.destacado
                    ? "rounded-2xl border border-border bg-[image:var(--gradient-ink)] p-8 text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
                }
              >
                <h3 className="font-display text-xl">{p.concepto}</h3>
                <p
                  className={
                    p.destacado
                      ? "mt-2 text-sm leading-relaxed opacity-80"
                      : "mt-2 text-sm leading-relaxed text-muted-foreground"
                  }
                >
                  {p.detalle}
                </p>
                <p
                  className={
                    p.destacado
                      ? "mt-6 font-display text-4xl"
                      : "mt-6 font-display text-4xl text-accent"
                  }
                >
                  {p.monto}
                </p>
                <p
                  className={
                    p.destacado
                      ? "mt-2 text-xs uppercase tracking-wider opacity-70"
                      : "mt-2 text-xs uppercase tracking-wider text-muted-foreground"
                  }
                >
                  {p.frecuencia}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Fotografía, contenido, diseño gráfico y demás servicios se cotizan y facturan de forma
            independiente, bajo demanda. El cliente administra su propio stock, precios y
            promociones desde la plataforma; el proveedor administra el resto de la operación
            técnica y de diseño.
          </p>
          </Reveal>
        </section>

        {/* Evolución */}
        <section id="futuro" className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">Evolución futura</h2>
            </Reveal>
            <RevealGroup as="ul" stagger={0.04} className="mt-8 flex flex-wrap gap-3">
              {futuro.map((f) => (
                <RevealItem
                  as="li"
                  key={f}
                  className="rounded-full border border-border bg-card px-5 py-2 text-sm text-muted-foreground"
                >
                  {f}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Cierre */}
        <section className="bg-[image:var(--gradient-ink)] text-primary-foreground">
          <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Una plataforma a medida para todo el negocio
            </h2>
            <p className="mt-6 leading-relaxed opacity-85">
              El dueño obtiene visibilidad y control total sobre todas sus tiendas —incluyendo el
              stock consolidado— mientras cada tienda opera con autonomía en su propio panel. El
              proveedor gestiona el diseño, la implementación y la evolución continua.
            </p>
            <a
              href="#inversion"
              className="mt-10 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Avanzar con la propuesta
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-foreground">Paralelo Software Studio</span>
            <span>Propuesta comercial · Plataforma de gestión y ecommerce multi-tienda</span>
          </div>
          <div className="flex flex-col gap-1 sm:text-right">
            <a
              href="https://www.paralelo.tech"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              www.paralelo.tech
            </a>
            <a
              href="https://ecommerce.paralelo.tech"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              ecommerce.paralelo.tech
            </a>
            <span>Documento confidencial · Desarrollo exclusivo</span>
          </div>
        </div>
      </footer>
    </div>
    </MotionConfig>
  );
}

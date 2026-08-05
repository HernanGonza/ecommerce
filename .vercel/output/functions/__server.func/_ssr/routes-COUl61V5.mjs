import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as MotionConfig, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COUl61V5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_retail_default = "/assets/hero-retail-ChEyV2EX.jpg";
var paralelo_logo_default = "/assets/paralelo-logo-Ccm-t-V4.png";
var variants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: {
		opacity: 1,
		y: 0
	}
};
function Reveal({ children, delay = 0, className, as = "div" }) {
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount: .2
		},
		variants,
		transition: {
			duration: .6,
			delay,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		},
		children
	});
}
function RevealGroup({ children, className, stagger = .08, as = "div" }) {
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			amount: .2
		},
		variants: {
			hidden: {},
			visible: { transition: { staggerChildren: stagger } }
		},
		children
	});
}
function RevealItem({ children, className, as = "div" }) {
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		variants,
		transition: {
			duration: .5,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		},
		children
	});
}
function useActiveSection(ids) {
	const [activeId, setActiveId] = import_react.useState(null);
	import_react.useEffect(() => {
		const elements = ids.map((id) => document.getElementById(id)).filter((el) => el !== null);
		if (elements.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) setActiveId(entry.target.id);
		}, {
			rootMargin: "-45% 0px -50% 0px",
			threshold: 0
		});
		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [ids]);
	return activeId;
}
var nav = [
	{
		href: "#arquitectura",
		label: "Arquitectura"
	},
	{
		href: "#modulos",
		label: "Módulos"
	},
	{
		href: "#tecnologia",
		label: "Tecnología"
	},
	{
		href: "#inversion",
		label: "Inversión"
	},
	{
		href: "#futuro",
		label: "Evolución"
	}
];
var objetivos = [
	"Centralizar en un panel administrador la visión y gestión de todas las tiendas del negocio.",
	"Dar a cada tienda autonomía operativa total sobre stock, pedidos, catálogo y precios.",
	"Consolidar el stock de todas las tiendas en una vista única y valorizada.",
	"Mejorar la experiencia de compra online y la eficiencia operativa del día a día."
];
var modulos = [
	{
		n: "01",
		t: "Productos",
		d: "Catálogo independiente por tienda: marca, modelo, categoría, fotografías, descripción, precio de costo, venta y promocional, SKU, código de barras y variantes por talle y color con stock propio."
	},
	{
		n: "02",
		t: "Stock",
		d: "Stock propio por tienda, consolidado y valorizado en el panel administrador. Transferencias manuales entre tiendas, inventarios, alertas por bajo stock, historial de movimientos y escaneo por código de barras."
	},
	{
		n: "03",
		t: "Pedidos",
		d: "Estados de Pendiente a Entregado, gestionados por la tienda donde se realizó la compra. El panel administrador ve todos los pedidos de todas las tiendas."
	},
	{
		n: "04",
		t: "Clientes",
		d: "Base consolidada con matching por email o DNI/CUIT. Historial cruzado: en qué tiendas compra, gasto total, frecuencia y ticket promedio."
	},
	{
		n: "05",
		t: "Facturación y pagos",
		d: "Facturación electrónica, Mercado Pago, MODO, transferencias, tarjetas y pago en local. A definir si todas las tiendas facturan bajo la misma razón social o cada una la suya."
	},
	{
		n: "06",
		t: "Aplicación móvil",
		d: "Pedidos, consulta de productos, inventario, escaneo de códigos, recepción de mercadería y notificaciones, con alcance según el rol del usuario."
	},
	{
		n: "07",
		t: "Reportes",
		d: "Por tienda: ventas, ticket promedio, más vendidos, stock valorizado y productos sin rotación. Consolidado: comparativa entre tiendas, clientes cruzados y rentabilidad global."
	},
	{
		n: "08",
		t: "Seguridad y roles",
		d: "Dueño/Administrador, Gerente de tienda y Vendedor. Acceso segmentado, auditoría, backups automáticos, monitoreo y alta disponibilidad."
	}
];
var servicios = [
	"Diseño y configuración de cada tienda nueva: identidad visual, estructura de catálogo y dominio.",
	"Producción fotográfica y edición de imágenes, incluyendo fotos con modelos, por temporada o lanzamiento.",
	"Diseño gráfico, carga inicial de catálogo, migración de datos y capacitación al equipo.",
	"Marketing digital, SEO y gestión de redes sociales, bajo demanda."
];
var precios = [
	{
		concepto: "Despliegue inicial",
		detalle: "Panel administrador + 1ª tienda, dominio, hosting e infraestructura base",
		monto: "$2.500.000",
		frecuencia: "Costo estimado · único · 50% inicio / 50% entrega",
		destacado: true
	},
	{
		concepto: "Abono mensual de mantenimiento",
		detalle: "Panel administrador, operación de la 1ª tienda, hosting, actualizaciones, monitoreo, backups y soporte",
		monto: "$350.000",
		frecuencia: "Costo estimado · mensual",
		destacado: false
	},
	{
		concepto: "Despliegue de tienda adicional",
		detalle: "Diseño y configuración de la nueva tienda (no incluye infraestructura base)",
		monto: "$400.000",
		frecuencia: "Costo estimado · único, por tienda",
		destacado: false
	},
	{
		concepto: "Abono de tienda adicional",
		detalle: "Operación y soporte de cada tienda adicional",
		monto: "A definir",
		frecuencia: "Costo estimado · mensual, por tienda",
		destacado: false
	}
];
var futuro = [
	"Fidelización cruzada entre tiendas",
	"Marketplaces, Gift Cards y WhatsApp Business",
	"IA para descripciones y recomendaciones",
	"Predicción de demanda e integraciones contables",
	"BI avanzado",
	"App para clientes finales",
	"Modelo comercial variable por comisión"
];
var navIds = nav.map((i) => i.href.slice(1));
function Propuesta() {
	const activeId = useActiveSection(navIds);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionConfig, {
		reducedMotion: "user",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-background font-sans text-foreground antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://www.paralelo.tech",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: paralelo_logo_default,
									alt: "Paralelo Software Studio",
									className: "h-7 w-auto"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-xs text-muted-foreground sm:inline",
									children: "Propuesta comercial"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden items-center gap-7 text-sm md:flex",
								children: nav.map((i) => {
									const isActive = activeId === i.href.slice(1);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: i.href,
										className: isActive ? "text-foreground transition-colors" : "text-muted-foreground transition-colors hover:text-foreground",
										children: i.label
									}, i.href);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#inversion",
								className: "rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
								children: "Ver inversión"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "relative overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 28
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									ease: [
										.21,
										.47,
										.32,
										.98
									]
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.28em] text-accent",
										children: "Desarrollo exclusivo a medida"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-[var(--shadow-soft)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-accent" }),
											"Propuesta presentada por",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "https://www.paralelo.tech",
												target: "_blank",
												rel: "noreferrer",
												className: "font-medium text-foreground underline-offset-2 hover:underline",
												children: "Paralelo Software Studio"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
										children: "Plataforma de gestión comercial y ecommerce multi-tienda"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
										children: "Un panel administrador con visibilidad total del negocio y, debajo, cada local de indumentaria operando con su propia marca, su propio catálogo y su propia tienda online. Mismo dueño, identidades comerciales distintas."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-9 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#arquitectura",
											className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
											children: "Ver la arquitectura"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#inversion",
											className: "rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary",
											children: "Modalidad comercial"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
										className: "mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8",
										children: [
											["2", "Niveles de gestión"],
											["100%", "Stock consolidado"],
											["1", "Plataforma a medida"]
										].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "font-display text-3xl text-accent",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
											children: v
										})] }, v))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "relative",
								initial: {
									opacity: 0,
									scale: .96
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .8,
									delay: .15,
									ease: [
										.21,
										.47,
										.32,
										.98
									]
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: hero_retail_default,
										width: 1600,
										height: 1104,
										alt: "Interior de una tienda de indumentaria multi-marca",
										className: "h-full w-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-wider text-muted-foreground",
										children: "El cliente opera"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed",
										children: "Carga stock, gestiona pedidos y ventas. El diseño y la operación técnica quedan a cargo del proveedor."
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-border bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl tracking-tight sm:text-4xl",
								children: "Objetivos"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGroup, {
								as: "ul",
								className: "grid gap-6 sm:grid-cols-2",
								children: objetivos.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
									as: "li",
									className: "border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs tracking-widest text-accent",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 leading-relaxed text-muted-foreground",
										children: o
									})]
								}, o))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "arquitectura",
						className: "mx-auto max-w-6xl px-6 py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-accent",
							children: "Arquitectura general"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl",
							children: "Dos niveles: control arriba, autonomía abajo"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealGroup, {
							className: "mt-12 grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
								as: "article",
								className: "rounded-2xl border border-border bg-[image:var(--gradient-ink)] p-8 text-primary-foreground shadow-[var(--shadow-soft)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.2em] opacity-70",
										children: "Nivel 1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl",
										children: "Panel Administrador · el dueño"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 space-y-3 text-sm leading-relaxed opacity-90",
										children: [
											"Stock consolidado de todas las tiendas.",
											"Productos, pedidos y ventas por tienda o consolidados.",
											"Base de clientes unificada por email o DNI, con historial completo.",
											"Usuarios y permisos de todas las tiendas.",
											"Reportes comparativos y globales del negocio.",
											"Configuración general, facturación y medios de pago."
										].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-current opacity-70" }), x]
										}, x))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
								as: "article",
								className: "rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.2em] text-accent",
										children: "Nivel 2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl",
										children: "Panel de cada tienda"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-foreground",
										children: "Acceso exclusivo a lo que le pertenece: no ve stock, pedidos ni clientes de otras tiendas."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-secondary/60 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: "Vendedor"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: "Gestiona pedidos, consulta stock y atiende a los clientes de su tienda."
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-secondary/60 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: "Gerente de tienda"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: "Administra catálogo, precios, promociones y accede a los reportes de su tienda."
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 text-sm leading-relaxed text-muted-foreground",
										children: [
											"Cada tienda cuenta además con su tienda online: diseño propio, dominio o subdominio propio, catálogo independiente, checkout optimizado e historial y seguimiento de pedidos para sus clientes. Como referencia, esta propuesta puede vivir en",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "https://ecommerce.paralelo.tech",
												target: "_blank",
												rel: "noreferrer",
												className: "font-medium text-foreground underline-offset-2 hover:underline",
												children: "ecommerce.paralelo.tech"
											}),
											"."
										]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "modulos",
						className: "border-y border-border bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-6 py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.28em] text-accent",
								children: "Alcance funcional"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl tracking-tight sm:text-4xl",
								children: "Módulos de la plataforma"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGroup, {
								stagger: .05,
								className: "mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2",
								children: modulos.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
									as: "article",
									className: "bg-card p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm text-accent",
											children: m.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-xl",
											children: m.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted-foreground",
											children: m.d
										})
									]
								}, m.n))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "tecnologia",
						className: "mx-auto max-w-6xl px-6 py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.28em] text-accent",
									children: "Arquitectura técnica"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl tracking-tight sm:text-4xl",
									children: "Una sola base, separación lógica por tienda"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 leading-relaxed text-muted-foreground",
									children: "Cada tienda opera con sus propios datos —catálogo, stock, pedidos y clientes— y el panel administrador consolida todo en tiempo real, sin procesos de sincronización entre sistemas separados. Backups, monitoreo y alta disponibilidad para el conjunto de la plataforma."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGroup, {
								className: "grid gap-4",
								children: [
									{
										t: "Frontend · React",
										d: "Panel administrador, paneles de cada tienda y tiendas online."
									},
									{
										t: "Backend · Supabase",
										d: "PostgreSQL gestionado, autenticación, storage de imágenes de producto y funciones."
									},
									{
										t: "Row Level Security",
										d: "La separación entre tiendas se implementa a nivel de base de datos, con políticas de acceso por tienda y por rol."
									}
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
									className: "rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg",
										children: x.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: x.d
									})]
								}, x.t))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-border bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl tracking-tight sm:text-4xl",
								children: "Implementación y servicios opcionales"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGroup, {
								as: "ul",
								className: "grid gap-5 sm:grid-cols-2",
								children: servicios.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
									as: "li",
									className: "border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground",
									children: s
								}, s))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "inversion",
						className: "mx-auto max-w-6xl px-6 py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.28em] text-accent",
									children: "Modalidad comercial"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl tracking-tight sm:text-4xl",
									children: "Inversión estimada"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
									children: "Los siguientes valores son costos estimados en pesos argentinos, pensados como punto de partida para la negociación. El monto final se ajustará según alcance, plazos y necesidades específicas del proyecto. Modelo de suscripción mensual recurrente por mantenimiento, soporte y evolución de la plataforma."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGroup, {
								className: "mt-12 grid gap-5 lg:grid-cols-2",
								children: precios.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealItem, {
									as: "article",
									className: p.destacado ? "rounded-2xl border border-border bg-[image:var(--gradient-ink)] p-8 text-primary-foreground shadow-[var(--shadow-soft)]" : "rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl",
											children: p.concepto
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: p.destacado ? "mt-2 text-sm leading-relaxed opacity-80" : "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: p.detalle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: p.destacado ? "mt-6 font-display text-4xl" : "mt-6 font-display text-4xl text-accent",
											children: p.monto
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: p.destacado ? "mt-2 text-xs uppercase tracking-wider opacity-70" : "mt-2 text-xs uppercase tracking-wider text-muted-foreground",
											children: p.frecuencia
										})
									]
								}, p.concepto))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm leading-relaxed text-muted-foreground",
								children: "Fotografía, contenido, diseño gráfico y demás servicios se cotizan y facturan de forma independiente, bajo demanda. El cliente administra su propio stock, precios y promociones desde la plataforma; el proveedor administra el resto de la operación técnica y de diseño."
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "futuro",
						className: "border-t border-border bg-secondary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-6 py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl tracking-tight sm:text-4xl",
								children: "Evolución futura"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealGroup, {
								as: "ul",
								stagger: .04,
								className: "mt-8 flex flex-wrap gap-3",
								children: futuro.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealItem, {
									as: "li",
									className: "rounded-full border border-border bg-card px-5 py-2 text-sm text-muted-foreground",
									children: f
								}, f))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-[image:var(--gradient-ink)] text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "mx-auto max-w-3xl px-6 py-24 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl tracking-tight sm:text-4xl",
									children: "Una plataforma a medida para todo el negocio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 leading-relaxed opacity-85",
									children: "El dueño obtiene visibilidad y control total sobre todas sus tiendas —incluyendo el stock consolidado— mientras cada tienda opera con autonomía en su propio panel. El proveedor gestiona el diseño, la implementación y la evolución continua."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#inversion",
									className: "mt-10 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90",
									children: "Avanzar con la propuesta"
								})
							]
						})
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "Paralelo Software Studio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Propuesta comercial · Plataforma de gestión y ecommerce multi-tienda" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1 sm:text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.paralelo.tech",
									target: "_blank",
									rel: "noreferrer",
									className: "transition-colors hover:text-foreground",
									children: "www.paralelo.tech"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://ecommerce.paralelo.tech",
									target: "_blank",
									rel: "noreferrer",
									className: "transition-colors hover:text-foreground",
									children: "ecommerce.paralelo.tech"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Documento confidencial · Desarrollo exclusivo" })
							]
						})]
					})
				})
			]
		})
	});
}
//#endregion
export { Propuesta as component };

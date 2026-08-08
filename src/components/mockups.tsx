// Pure SVG mockups for the multi-store commerce proposal. No external images:
// scales cleanly, prints crisp, and always matches the site's brand tokens.
import { useId, useState, type ReactNode } from "react";

const INK = "oklch(0.24 0.02 60)";
const CLAY = "oklch(0.58 0.13 45)";
const TEAL = "oklch(0.6 0.118 184.704)";
const GOLD = "oklch(0.769 0.188 70.08)";
const SUCCESS = "oklch(0.6 0.12 155)";
const NEUTRAL = "oklch(0.55 0.02 70)";
const CARD = "oklch(0.995 0.005 85)";
const LINE = "oklch(0.88 0.018 80)";
const MUTED = "oklch(0.5 0.02 65)";
const FAINT = "oklch(0.96 0.013 85)";

/* ---------- Shared building blocks ---------- */
function StatCard({
  x,
  y,
  w = 212,
  h = 104,
  label,
  value,
  delta,
  color,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  value: string;
  delta?: string;
  color: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={w} height={h} rx="16" fill={CARD} stroke={LINE} />
      <text x="20" y="30" fontSize="11" fill={MUTED} fontWeight="500">
        {label}
      </text>
      <text x="20" y="66" fontSize="24" fontWeight="700" fill={INK}>
        {value}
      </text>
      {delta && (
        <>
          <rect x="20" y="76" width="66" height="18" rx="9" fill={color} opacity="0.12" />
          <text x="53" y="89" textAnchor="middle" fontSize="10" fill={color} fontWeight="600">
            {delta}
          </text>
        </>
      )}
      <circle cx={w - 28} cy="30" r="14" fill={color} opacity="0.14" />
      <circle cx={w - 28} cy="30" r="5" fill={color} />
    </g>
  );
}

function Pill({
  x,
  y,
  label,
  color,
  w = 92,
}: {
  x: number;
  y: number | string;
  label: string;
  color: string;
  w?: number | undefined;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={w} height="20" rx="10" fill={color} opacity="0.14" />
      <text x={w / 2} y="14" textAnchor="middle" fontSize="9.5" fontWeight="600" fill={color}>
        {label}
      </text>
    </g>
  );
}

function PanelBox({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={w} height={h} rx="16" fill={CARD} stroke={LINE} />
      <text x="20" y="28" fontSize="13" fontWeight="700" fill={INK}>
        {title}
      </text>
      {subtitle && (
        <text x="20" y="46" fontSize="11" fill={MUTED}>
          {subtitle}
        </text>
      )}
      {children}
    </g>
  );
}

type TableColumn = { label: string; x: number };
type TableCell = {
  text: string;
  x: number;
  color?: string | undefined;
  pill?: boolean | undefined;
  muted?: boolean | undefined;
  w?: number | undefined;
};
type TableRow = { cells: TableCell[] };

function DataTable({
  x,
  y,
  w,
  h,
  title,
  subtitle,
  columns,
  rows,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle?: string | undefined;
  columns: TableColumn[];
  rows: TableRow[];
}) {
  const headY = subtitle ? 66 : 50;
  return (
    <PanelBox x={x} y={y} w={w} h={h} title={title} subtitle={subtitle}>
      {columns.map((c) => (
        <text key={c.label} x={c.x} y={headY} fontSize="10" fill={MUTED} fontWeight="600">
          {c.label}
        </text>
      ))}
      <line x1="20" x2={w - 20} y1={headY + 10} y2={headY + 10} stroke={LINE} />
      {rows.map((r, ri) => (
        <g key={ri} transform={`translate(0, ${headY + 32 + ri * 34})`}>
          {r.cells.map((cell, ci) =>
            cell.pill ? (
              <Pill
                key={ci}
                x={cell.x}
                y="-14"
                w={cell.w}
                label={cell.text}
                color={cell.color ?? CLAY}
              />
            ) : (
              <text
                key={ci}
                x={cell.x}
                y="0"
                fontSize="10.5"
                fontWeight={cell.color ? 600 : 500}
                fill={cell.muted ? MUTED : (cell.color ?? INK)}
              >
                {cell.text}
              </text>
            ),
          )}
        </g>
      ))}
    </PanelBox>
  );
}

/* ---------- Panel Administrador · interactivo ---------- */
type AdminScreenId =
  | "general"
  | "tiendas"
  | "productos"
  | "stock"
  | "pedidos"
  | "clientes"
  | "facturacion"
  | "reportes"
  | "usuarios";

const ADMIN_SIDEBAR: { id: AdminScreenId; label: string }[] = [
  { id: "general", label: "Panel general" },
  { id: "tiendas", label: "Tiendas" },
  { id: "productos", label: "Productos" },
  { id: "stock", label: "Stock" },
  { id: "pedidos", label: "Pedidos" },
  { id: "clientes", label: "Clientes" },
  { id: "facturacion", label: "Facturación" },
  { id: "reportes", label: "Reportes" },
  { id: "usuarios", label: "Usuarios" },
];

const ADMIN_HEADERS: Record<AdminScreenId, { title: string; subtitle: string; cta?: string }> = {
  general: {
    title: "Panel general",
    subtitle: "Todas las tiendas · Actualizado hace 3 minutos",
    cta: "+ Nueva tienda",
  },
  tiendas: { title: "Tiendas", subtitle: "4 tiendas activas en la red", cta: "+ Nueva tienda" },
  productos: {
    title: "Productos",
    subtitle: "Catálogo consolidado de todas las tiendas",
    cta: "+ Nuevo producto",
  },
  stock: { title: "Stock", subtitle: "Inventario consolidado y alertas por tienda" },
  pedidos: { title: "Pedidos", subtitle: "Pedidos de todas las tiendas, en tiempo real" },
  clientes: { title: "Clientes", subtitle: "Base consolidada por email y DNI/CUIT" },
  facturacion: { title: "Facturación", subtitle: "Medios de pago y comprobantes por tienda" },
  reportes: { title: "Reportes", subtitle: "Comparativa de ventas entre tiendas" },
  usuarios: { title: "Usuarios", subtitle: "Roles y accesos por tienda" },
};

export function DashboardMockup({ className = "" }: { className?: string }) {
  const uid = useId();
  const bg = `${uid}-bg`;
  const brand = `${uid}-brand`;
  const area1 = `${uid}-area1`;
  const area2 = `${uid}-area2`;
  const [screen, setScreen] = useState<AdminScreenId>("general");
  const header = ADMIN_HEADERS[screen];

  return (
    <svg
      viewBox="0 0 1200 780"
      className={className}
      role="img"
      aria-label="Vista previa interactiva del panel administrador"
    >
      <defs>
        <linearGradient id={bg} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={CARD} />
          <stop offset="100%" stopColor={FAINT} />
        </linearGradient>
        <linearGradient id={brand} x1="0" x2="1">
          <stop offset="0%" stopColor={CLAY} />
          <stop offset="100%" stopColor={INK} />
        </linearGradient>
        <linearGradient id={area1} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={CLAY} stopOpacity="0.35" />
          <stop offset="100%" stopColor={CLAY} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={area2} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={TEAL} stopOpacity="0.28" />
          <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* window */}
      <rect x="0" y="0" width="1200" height="780" rx="24" fill={`url(#${bg})`} />
      <rect x="0" y="0" width="1200" height="52" rx="24" fill={CARD} />
      <circle cx="24" cy="26" r="6" fill="oklch(0.85 0.03 30)" />
      <circle cx="46" cy="26" r="6" fill="oklch(0.86 0.06 90)" />
      <circle cx="68" cy="26" r="6" fill="oklch(0.75 0.11 155)" />
      <rect x="420" y="15" width="360" height="22" rx="11" fill={FAINT} />
      <text x="600" y="30" textAnchor="middle" fontSize="11" fill={MUTED}>
        app.paralelo.tech/panel
      </text>

      {/* sidebar */}
      <rect x="0" y="52" width="220" height="728" fill={CARD} />
      <rect x="20" y="72" width="32" height="32" rx="10" fill={`url(#${brand})`} />
      <text x="62" y="93" fontSize="13" fontWeight="700" fill={INK}>
        Panel dueño
      </text>
      {ADMIN_SIDEBAR.map((item, i) => {
        const y = 140 + i * 40;
        const active = screen === item.id;
        return (
          <g
            key={item.id}
            role="button"
            tabIndex={0}
            aria-pressed={active}
            onClick={() => setScreen(item.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setScreen(item.id);
              }
            }}
            className="cursor-pointer outline-none"
          >
            <rect
              x="12"
              y={y - 18}
              width="196"
              height="32"
              rx="10"
              fill={active ? FAINT : "transparent"}
            />
            <circle cx="30" cy={y - 2} r="4" fill={active ? CLAY : "oklch(0.7 0.02 220)"} />
            <text
              x="46"
              y={y + 2}
              fontSize="12"
              fill={active ? INK : MUTED}
              fontWeight={active ? 600 : 500}
            >
              {item.label}
            </text>
          </g>
        );
      })}

      {/* header */}
      <text x="252" y="100" fontSize="22" fontWeight="700" fill={INK}>
        {header.title}
      </text>
      <text x="252" y="122" fontSize="12" fill={MUTED}>
        {header.subtitle}
      </text>
      {header.cta && (
        <g>
          <rect x="1000" y="80" width="170" height="36" rx="10" fill={CLAY} />
          <text x="1085" y="103" textAnchor="middle" fontSize="12" fill={CARD} fontWeight="600">
            {header.cta}
          </text>
        </g>
      )}

      <g transform="translate(252, 152)">
        {screen === "general" && <GeneralScreen area1={area1} area2={area2} brand={brand} />}
        {screen === "tiendas" && <TiendasScreen />}
        {screen === "productos" && <ProductosScreen />}
        {screen === "stock" && <StockScreen brand={brand} />}
        {screen === "pedidos" && <PedidosScreen />}
        {screen === "clientes" && <ClientesScreen />}
        {screen === "facturacion" && <FacturacionScreen />}
        {screen === "reportes" && <ReportesScreen />}
        {screen === "usuarios" && <UsuariosScreen />}
      </g>
    </svg>
  );
}

/* ---------- Pantallas del panel administrador ---------- */
function GeneralScreen({ area1, area2, brand }: { area1: string; area2: string; brand: string }) {
  const kpis = [
    { label: "Tiendas activas", value: "4", delta: "+1 este trim.", color: CLAY },
    { label: "Stock consolidado", value: "12.480 u.", delta: "+6,2 %", color: TEAL },
    { label: "Pedidos del mes", value: "1.926", delta: "+18 %", color: GOLD },
    { label: "Facturación", value: "$ 48,2 M", delta: "+24 %", color: INK },
  ];
  const actividad = [
    { c: CLAY, t: "Tienda Norte", s: "Pedido #4821 · Entregado" },
    { c: TEAL, t: "Tienda Centro", s: "Pedido #4820 · Preparando" },
    { c: GOLD, t: "Tienda Sur", s: "Pedido #4819 · Enviado" },
    { c: CLAY, t: "Tienda Norte", s: "Nueva reserva de stock" },
    { c: TEAL, t: "Tienda Este", s: "Devolución procesada" },
  ];
  const stockPorTienda = [
    { t: "Tienda Norte", v: 3240 },
    { t: "Tienda Centro", v: 2860 },
    { t: "Tienda Sur", v: 2120 },
    { t: "Tienda Este", v: 1940 },
  ];
  const maxStock = Math.max(...stockPorTienda.map((s) => s.v));
  const estados = [
    { label: "Pendiente", value: 42 },
    { label: "Preparando", value: 28 },
    { label: "Enviado", value: 19 },
    { label: "Entregado", value: 861 },
  ];

  return (
    <>
      {kpis.map((k, i) => (
        <StatCard
          key={k.label}
          x={i * 232}
          y={0}
          label={k.label}
          value={k.value}
          delta={k.delta}
          color={k.color}
        />
      ))}

      <PanelBox
        x={0}
        y={128}
        w={680}
        h={300}
        title="Ventas consolidadas"
        subtitle="Últimos 12 meses · todas las tiendas"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="20" x2="660" y1={80 + i * 45} y2={80 + i * 45} stroke={FAINT} />
        ))}
        <path
          d="M40 240 L100 210 L160 220 L220 180 L280 190 L340 150 L400 160 L460 120 L520 130 L580 90 L640 110 L640 260 L40 260 Z"
          fill={`url(#${area1})`}
        />
        <path
          d="M40 240 L100 210 L160 220 L220 180 L280 190 L340 150 L400 160 L460 120 L520 130 L580 90 L640 110"
          fill="none"
          stroke={CLAY}
          strokeWidth="2.5"
        />
        <path
          d="M40 250 L100 240 L160 230 L220 235 L280 220 L340 210 L400 200 L460 190 L520 175 L580 165 L640 155 L640 260 L40 260 Z"
          fill={`url(#${area2})`}
        />
        <path
          d="M40 250 L100 240 L160 230 L220 235 L280 220 L340 210 L400 200 L460 190 L520 175 L580 165 L640 155"
          fill="none"
          stroke={TEAL}
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />
        <g transform="translate(480,20)">
          <circle cx="0" cy="0" r="4" fill={CLAY} />
          <text x="10" y="4" fontSize="10" fill="oklch(0.35 0.02 220)">
            Este año
          </text>
          <circle cx="80" cy="0" r="4" fill={TEAL} />
          <text x="90" y="4" fontSize="10" fill="oklch(0.35 0.02 220)">
            Año anterior
          </text>
        </g>
      </PanelBox>

      <PanelBox x={700} y={128} w={228} h={300} title="Pedidos recientes">
        {actividad.map((r, i) => (
          <g key={i} transform={`translate(16, ${60 + i * 46})`}>
            <circle cx="10" cy="10" r="10" fill={r.c} opacity="0.18" />
            <circle cx="10" cy="10" r="4" fill={r.c} />
            <text x="28" y="8" fontSize="11" fontWeight="600" fill={INK}>
              {r.t}
            </text>
            <text x="28" y="22" fontSize="10" fill={MUTED}>
              {r.s}
            </text>
          </g>
        ))}
      </PanelBox>

      <PanelBox x={0} y={452} w={448} h={152} title="Stock consolidado por tienda">
        {stockPorTienda.map((s, i) => {
          const y = 50 + i * 26;
          const w = (s.v / maxStock) * 300;
          return (
            <g key={s.t}>
              <text x="20" y={y + 9} fontSize="10" fill={MUTED}>
                {s.t}
              </text>
              <rect x="130" y={y} width="300" height="10" rx="5" fill={FAINT} />
              <rect
                x="130"
                y={y}
                width={w}
                height="10"
                rx="5"
                fill={CLAY}
                opacity={0.5 + i * 0.15}
              />
            </g>
          );
        })}
      </PanelBox>

      <PanelBox x={468} y={452} w={460} h={152} title="Pedidos por estado">
        {estados.map((s, i) => (
          <g key={s.label} transform={`translate(${20 + i * 108}, 60)`}>
            <rect width="96" height="72" rx="10" fill={FAINT} />
            <rect width="96" height="4" rx="2" fill={`url(#${brand})`} opacity={1 - i * 0.15} />
            <text x="48" y="30" textAnchor="middle" fontSize="10" fontWeight="600" fill={INK}>
              {s.label}
            </text>
            <text x="48" y="54" textAnchor="middle" fontSize="20" fontWeight="700" fill={INK}>
              {s.value}
            </text>
          </g>
        ))}
      </PanelBox>
    </>
  );
}

function TiendasScreen() {
  const tiendas = [
    {
      nombre: "Tienda Norte",
      zona: "Ciudad Capital · Centro",
      estado: "Activa",
      color: SUCCESS,
      ventas: "$14,2 M",
      stock: "3.240 u.",
      pedidos: "412",
    },
    {
      nombre: "Tienda Centro",
      zona: "Zona Centro",
      estado: "Activa",
      color: SUCCESS,
      ventas: "$11,8 M",
      stock: "2.860 u.",
      pedidos: "356",
    },
    {
      nombre: "Tienda Sur",
      zona: "Barrio Sur",
      estado: "Activa",
      color: SUCCESS,
      ventas: "$9,6 M",
      stock: "2.120 u.",
      pedidos: "289",
    },
    {
      nombre: "Tienda Este",
      zona: "Zona Este",
      estado: "En incorporación",
      color: GOLD,
      ventas: "$4,1 M",
      stock: "1.940 u.",
      pedidos: "118",
    },
  ];
  const positions: [number, number][] = [
    [0, 0],
    [476, 0],
    [0, 314],
    [476, 314],
  ];

  return (
    <>
      {tiendas.map((t, i) => {
        const [x, y] = positions[i] ?? [0, 0];
        return (
          <PanelBox key={t.nombre} x={x} y={y} w={452} h={290} title={t.nombre} subtitle={t.zona}>
            <Pill x={452 - 118} y={18} w={98} label={t.estado} color={t.color} />
            {[
              ["Ventas del mes", t.ventas],
              ["Stock", t.stock],
              ["Pedidos", t.pedidos],
            ].map(([label, value], si) => (
              <g key={label} transform={`translate(20, ${100 + si * 54})`}>
                <text fontSize="10" fill={MUTED}>
                  {label}
                </text>
                <text y="24" fontSize="20" fontWeight="700" fill={INK}>
                  {value}
                </text>
              </g>
            ))}
          </PanelBox>
        );
      })}
    </>
  );
}

function ProductosScreen() {
  const productos = [
    {
      p: "Campera de jean oversize",
      cat: "Abrigo",
      t: "Tienda Norte",
      precio: "$38.900",
      stock: 24,
    },
    { p: "Remera básica algodón", cat: "Remeras", t: "Tienda Centro", precio: "$9.500", stock: 6 },
    { p: "Jean recto tiro alto", cat: "Pantalones", t: "Tienda Sur", precio: "$27.300", stock: 41 },
    { p: "Zapatillas urbanas", cat: "Calzado", t: "Tienda Norte", precio: "$52.000", stock: 12 },
    { p: "Vestido midi estampado", cat: "Vestidos", t: "Tienda Este", precio: "$31.400", stock: 3 },
    { p: "Buzo canguro friza", cat: "Abrigo", t: "Tienda Centro", precio: "$22.800", stock: 58 },
  ];

  return (
    <DataTable
      x={0}
      y={0}
      w={928}
      h={604}
      title="Catálogo de productos"
      subtitle="Consolidado de todas las tiendas"
      columns={[
        { label: "Producto", x: 20 },
        { label: "Categoría", x: 300 },
        { label: "Tienda", x: 460 },
        { label: "Precio", x: 640 },
        { label: "Stock", x: 780 },
      ]}
      rows={productos.map((p) => ({
        cells: [
          { text: p.p, x: 20 },
          { text: p.cat, x: 300, muted: true },
          { text: p.t, x: 460, muted: true },
          { text: p.precio, x: 640 },
          { text: `${p.stock} u.`, x: 780, pill: true, color: p.stock < 10 ? GOLD : SUCCESS },
        ],
      }))}
    />
  );
}

function StockScreen({ brand }: { brand: string }) {
  const categorias = [
    { cat: "Remeras", v: 210 },
    { cat: "Pantalones", v: 180 },
    { cat: "Abrigo", v: 260 },
    { cat: "Calzado", v: 140 },
    { cat: "Vestidos", v: 95 },
    { cat: "Accesorios", v: 60 },
  ];
  const max = Math.max(...categorias.map((c) => c.v));
  const alertas = [
    { p: "Vestido midi estampado", t: "Tienda Este", u: "3 u." },
    { p: "Remera básica algodón", t: "Tienda Centro", u: "6 u." },
    { p: "Campera impermeable", t: "Tienda Sur", u: "4 u." },
    { p: "Zapatillas running", t: "Tienda Norte", u: "5 u." },
    { p: "Buzo oversize gris", t: "Tienda Centro", u: "7 u." },
  ];

  return (
    <>
      <PanelBox
        x={0}
        y={0}
        w={560}
        h={604}
        title="Stock por categoría"
        subtitle="Unidades consolidadas de todas las tiendas"
      >
        {categorias.map((c, i) => {
          const barH = (c.v / max) * 380;
          const x = 30 + i * 85;
          return (
            <g key={c.cat}>
              <text
                x={x + 25}
                y={560 - barH - 12}
                textAnchor="middle"
                fontSize="10.5"
                fontWeight="600"
                fill={INK}
              >
                {c.v}
              </text>
              <rect
                x={x}
                y={560 - barH}
                width="50"
                height={barH}
                rx="10"
                fill={`url(#${brand})`}
                opacity={0.55 + (i % 2) * 0.3}
              />
              <text x={x + 25} y="582" textAnchor="middle" fontSize="10" fill={MUTED}>
                {c.cat}
              </text>
            </g>
          );
        })}
      </PanelBox>

      <PanelBox x={584} y={0} w={344} h={604} title="Bajo stock" subtitle="Alertas de reposición">
        {alertas.map((a, i) => (
          <g key={a.p} transform={`translate(20, ${76 + i * 58})`}>
            <circle cx="8" cy="4" r="8" fill={GOLD} opacity="0.18" />
            <circle cx="8" cy="4" r="3" fill={GOLD} />
            <text x="26" y="2" fontSize="10.5" fontWeight="600" fill={INK}>
              {a.p}
            </text>
            <text x="26" y="18" fontSize="9.5" fill={MUTED}>
              {a.t}
            </text>
            <rect x="240" y="-10" width="60" height="20" rx="10" fill={GOLD} opacity="0.14" />
            <text x="270" y="4" textAnchor="middle" fontSize="9.5" fontWeight="600" fill={GOLD}>
              {a.u}
            </text>
          </g>
        ))}
      </PanelBox>
    </>
  );
}

function PedidosScreen() {
  const estados = [
    { label: "Pendiente", value: "42", color: CLAY },
    { label: "Preparando", value: "28", color: GOLD },
    { label: "Enviado", value: "19", color: TEAL },
    { label: "Entregado", value: "861", color: SUCCESS },
  ];
  const pedidos = [
    { id: "#4821", t: "Tienda Norte", c: "M. Gómez", e: "Entregado", m: "$38.900", color: SUCCESS },
    { id: "#4822", t: "Tienda Centro", c: "J. Duarte", e: "Preparando", m: "$9.500", color: GOLD },
    { id: "#4823", t: "Tienda Sur", c: "L. Acosta", e: "Pendiente", m: "$27.300", color: CLAY },
    { id: "#4824", t: "Tienda Norte", c: "R. Farías", e: "Enviado", m: "$52.000", color: TEAL },
    { id: "#4825", t: "Tienda Este", c: "C. Ibáñez", e: "Entregado", m: "$31.400", color: SUCCESS },
    { id: "#4826", t: "Tienda Centro", c: "P. Sosa", e: "Pendiente", m: "$22.800", color: CLAY },
  ];

  return (
    <>
      {estados.map((s, i) => (
        <g key={s.label} transform={`translate(${i * 232}, 0)`}>
          <rect width="212" height="80" rx="14" fill={CARD} stroke={LINE} />
          <text x="18" y="28" fontSize="10.5" fill={MUTED}>
            {s.label}
          </text>
          <text x="18" y="56" fontSize="22" fontWeight="700" fill={INK}>
            {s.value}
          </text>
          <circle cx="184" cy="26" r="6" fill={s.color} />
        </g>
      ))}
      <DataTable
        x={0}
        y={104}
        w={928}
        h={500}
        title="Pedidos recientes"
        columns={[
          { label: "Pedido", x: 20 },
          { label: "Tienda", x: 140 },
          { label: "Cliente", x: 320 },
          { label: "Estado", x: 520 },
          { label: "Total", x: 700 },
        ]}
        rows={pedidos.map((p) => ({
          cells: [
            { text: p.id, x: 20 },
            { text: p.t, x: 140, muted: true },
            { text: p.c, x: 320, muted: true },
            { text: p.e, x: 520, pill: true, color: p.color },
            { text: p.m, x: 700 },
          ],
        }))}
      />
    </>
  );
}

function ClientesScreen() {
  const clientes = [
    {
      n: "M. Gómez",
      tiendas: "Norte, Centro",
      compras: "14",
      gasto: "$482.300",
      ultima: "Hace 2 días",
    },
    { n: "J. Duarte", tiendas: "Centro", compras: "6", gasto: "$156.900", ultima: "Hace 5 días" },
    { n: "L. Acosta", tiendas: "Sur, Este", compras: "9", gasto: "$298.400", ultima: "Hoy" },
    { n: "R. Farías", tiendas: "Norte", compras: "21", gasto: "$710.200", ultima: "Hace 1 día" },
    { n: "C. Ibáñez", tiendas: "Este", compras: "3", gasto: "$89.100", ultima: "Hace 12 días" },
    {
      n: "P. Sosa",
      tiendas: "Centro, Sur",
      compras: "11",
      gasto: "$334.600",
      ultima: "Hace 3 días",
    },
  ];

  return (
    <DataTable
      x={0}
      y={0}
      w={928}
      h={604}
      title="Clientes"
      subtitle="Base consolidada por email y DNI/CUIT"
      columns={[
        { label: "Cliente", x: 20 },
        { label: "Tiendas", x: 260 },
        { label: "Compras", x: 480 },
        { label: "Gasto total", x: 600 },
        { label: "Última compra", x: 760 },
      ]}
      rows={clientes.map((c) => ({
        cells: [
          { text: c.n, x: 20 },
          { text: c.tiendas, x: 260, muted: true },
          { text: c.compras, x: 480, muted: true },
          { text: c.gasto, x: 600 },
          { text: c.ultima, x: 760, muted: true },
        ],
      }))}
    />
  );
}

function FacturacionScreen() {
  const medios = [
    { label: "Mercado Pago", pct: 42, color: CLAY },
    { label: "Transferencia", pct: 24, color: TEAL },
    { label: "Tarjeta", pct: 22, color: GOLD },
    { label: "Efectivo en local", pct: 12, color: SUCCESS },
  ];
  const comprobantes = [
    { id: "FC-1042", t: "Tienda Norte", m: "$38.900", e: "Pagado" },
    { id: "FC-1041", t: "Tienda Centro", m: "$9.500", e: "Pendiente" },
    { id: "FC-1040", t: "Tienda Sur", m: "$27.300", e: "Pagado" },
    { id: "FC-1039", t: "Tienda Este", m: "$31.400", e: "Pagado" },
    { id: "FC-1038", t: "Tienda Norte", m: "$52.000", e: "Pendiente" },
  ];

  return (
    <>
      <StatCard
        x={0}
        y={0}
        w={296}
        h={104}
        label="Facturado este mes"
        value="$ 48,2 M"
        delta="+24 %"
        color={CLAY}
      />
      <StatCard
        x={316}
        y={0}
        w={296}
        h={104}
        label="Pendiente de cobro"
        value="$ 1,4 M"
        delta="-6 %"
        color={GOLD}
      />
      <StatCard
        x={632}
        y={0}
        w={296}
        h={104}
        label="Medios activos"
        value="4"
        delta="100 %"
        color={SUCCESS}
      />

      <PanelBox
        x={0}
        y={128}
        w={448}
        h={476}
        title="Medios de pago"
        subtitle="Participación sobre el total facturado"
      >
        {medios.map((m, i) => {
          const y = 74 + i * 44;
          return (
            <g key={m.label}>
              <text x="20" y={y} fontSize="10.5" fill={INK}>
                {m.label}
              </text>
              <text x="428" y={y} textAnchor="end" fontSize="10.5" fontWeight="600" fill={INK}>
                {`${m.pct} %`}
              </text>
              <rect x="20" y={y + 10} width="408" height="10" rx="5" fill={FAINT} />
              <rect x="20" y={y + 10} width={4.08 * m.pct} height="10" rx="5" fill={m.color} />
            </g>
          );
        })}
      </PanelBox>

      <PanelBox x={468} y={128} w={460} h={476} title="Comprobantes recientes">
        {comprobantes.map((c, i) => (
          <g key={c.id} transform={`translate(20, ${70 + i * 52})`}>
            <text fontSize="11" fontWeight="700" fill={INK}>
              {c.id}
            </text>
            <text y="18" fontSize="9.5" fill={MUTED}>
              {c.t}
            </text>
            <text x="420" y="4" textAnchor="end" fontSize="11" fontWeight="600" fill={INK}>
              {c.m}
            </text>
            <Pill x={320} y={12} w={100} label={c.e} color={c.e === "Pagado" ? SUCCESS : GOLD} />
          </g>
        ))}
      </PanelBox>
    </>
  );
}

function ReportesScreen() {
  const categorias = [
    { label: "Remeras", pct: "38 %", color: CLAY },
    { label: "Abrigo", pct: "24 %", color: TEAL },
    { label: "Pantalones", pct: "22 %", color: GOLD },
    { label: "Calzado", pct: "16 %", color: SUCCESS },
  ];
  const porTienda = [
    { t: "Tienda Norte", v: 14.2 },
    { t: "Tienda Centro", v: 11.8 },
    { t: "Tienda Sur", v: 9.6 },
    { t: "Tienda Este", v: 4.1 },
  ];
  const maxV = Math.max(...porTienda.map((t) => t.v));
  const topProductos = [
    { p: "Campera de jean oversize", u: "312 u." },
    { p: "Buzo canguro friza", u: "268 u." },
    { p: "Zapatillas urbanas", u: "204 u." },
    { p: "Jean recto tiro alto", u: "189 u." },
  ];

  return (
    <>
      <PanelBox
        x={0}
        y={0}
        w={448}
        h={604}
        title="Ventas por categoría"
        subtitle="Participación sobre el total del mes"
      >
        <g transform="translate(150, 220)">
          <circle r="100" fill={FAINT} />
          <path d="M0 -100 A100 100 0 0 1 95.14 -30.86 L0 0 Z" fill={CLAY} />
          <path d="M95.14 -30.86 A100 100 0 0 1 28.57 95 L0 0 Z" fill={TEAL} />
          <path d="M28.57 95 A100 100 0 0 1 -85.71 51.43 L0 0 Z" fill={GOLD} />
          <path d="M-85.71 51.43 A100 100 0 0 1 0 -100 L0 0 Z" fill={SUCCESS} />
          <circle r="60" fill={CARD} />
          <text textAnchor="middle" y="-4" fontSize="26" fontWeight="700" fill={INK}>
            38 %
          </text>
          <text textAnchor="middle" y="16" fontSize="10.5" fill={MUTED}>
            Remeras
          </text>
        </g>
        {categorias.map((c, i) => (
          <g key={c.label} transform={`translate(30, ${460 + i * 26})`}>
            <rect width="10" height="10" rx="2" fill={c.color} />
            <text x="18" y="9" fontSize="10.5" fill={INK}>
              {c.label}
            </text>
            <text x="388" y="9" textAnchor="end" fontSize="10.5" fontWeight="600" fill={INK}>
              {c.pct}
            </text>
          </g>
        ))}
      </PanelBox>

      <PanelBox
        x={468}
        y={0}
        w={460}
        h={290}
        title="Ventas por tienda"
        subtitle="Comparativa del mes, en millones"
      >
        {porTienda.map((t, i) => {
          const y = 66 + i * 40;
          const w = (t.v / maxV) * 300;
          return (
            <g key={t.t}>
              <text x="20" y={y + 9} fontSize="10.5" fill={MUTED}>
                {t.t}
              </text>
              <rect x="140" y={y} width="300" height="12" rx="6" fill={FAINT} />
              <rect
                x="140"
                y={y}
                width={w}
                height="12"
                rx="6"
                fill={CLAY}
                opacity={0.5 + i * 0.15}
              />
              <text x="440" y={y + 10} textAnchor="end" fontSize="10.5" fontWeight="600" fill={INK}>
                {`$${t.v.toFixed(1)} M`}
              </text>
            </g>
          );
        })}
      </PanelBox>

      <PanelBox
        x={468}
        y={314}
        w={460}
        h={290}
        title="Productos más vendidos"
        subtitle="Unidades del mes"
      >
        {topProductos.map((p, i) => (
          <g key={p.p} transform={`translate(20, ${70 + i * 46})`}>
            <text fontSize="9.5" fill={MUTED}>{`0${i + 1}`}</text>
            <text x="26" y="0" fontSize="11" fontWeight="600" fill={INK}>
              {p.p}
            </text>
            <text x="26" y="16" fontSize="9.5" fill={MUTED}>
              {p.u}
            </text>
          </g>
        ))}
      </PanelBox>
    </>
  );
}

const ROL_WIDTH: Record<string, number> = {
  "Dueño / Administrador": 172,
  "Gerente de tienda": 140,
  Vendedor: 88,
};

function UsuariosScreen() {
  const usuarios = [
    {
      n: "Ana Pérez",
      rol: "Dueño / Administrador",
      t: "Todas las tiendas",
      e: "Activo",
      rolColor: CLAY,
    },
    { n: "Marcos Díaz", rol: "Gerente de tienda", t: "Tienda Norte", e: "Activo", rolColor: TEAL },
    { n: "Julieta Röhm", rol: "Vendedor", t: "Tienda Centro", e: "Activo", rolColor: GOLD },
    { n: "Facundo Ríos", rol: "Gerente de tienda", t: "Tienda Sur", e: "Activo", rolColor: TEAL },
    { n: "Sofía Molina", rol: "Vendedor", t: "Tienda Este", e: "Invitado", rolColor: GOLD },
    { n: "Nicolás Vera", rol: "Vendedor", t: "Tienda Norte", e: "Activo", rolColor: GOLD },
  ];

  return (
    <DataTable
      x={0}
      y={0}
      w={928}
      h={604}
      title="Usuarios y accesos"
      subtitle="Roles definidos por tienda"
      columns={[
        { label: "Usuario", x: 20 },
        { label: "Rol", x: 280 },
        { label: "Tienda", x: 520 },
        { label: "Estado", x: 760 },
      ]}
      rows={usuarios.map((u) => ({
        cells: [
          { text: u.n, x: 20 },
          { text: u.rol, x: 280, pill: true, color: u.rolColor, w: ROL_WIDTH[u.rol] },
          { text: u.t, x: 520, muted: true },
          { text: u.e, x: 760, pill: true, color: u.e === "Activo" ? SUCCESS : NEUTRAL },
        ],
      }))}
    />
  );
}

/* ---------- Miniatura por módulo (tarjetas de la sección Módulos) ---------- */
export function MiniMockup({ variant }: { variant: number }) {
  const uid = useId();
  const brand = `${uid}-brand`;

  const variants = [
    // 0 · Productos — catálogo
    <g key="productos">
      <rect width="260" height="10" rx="3" fill={FAINT} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${28 + i * 26})`}>
          <rect width="260" height="20" rx="6" fill={CARD} />
          <rect x="0" y="0" width="20" height="20" rx="6" fill={CLAY} opacity={0.3 + i * 0.15} />
          <rect x="30" y="6" width="120" height="8" rx="3" fill="oklch(0.85 0.01 220)" />
          <rect x="200" y="6" width="50" height="8" rx="3" fill={FAINT} />
        </g>
      ))}
    </g>,
    // 1 · Stock — niveles por variante
    <g key="stock">
      <rect width="260" height="130" rx="8" fill={CARD} />
      {[40, 60, 30, 80, 55, 70, 45].map((v, i) => (
        <rect
          key={i}
          x={20 + i * 34}
          y={110 - v}
          width="20"
          height={v}
          rx="4"
          fill={`url(#${brand})`}
          opacity={0.55 + (i % 2) * 0.3}
        />
      ))}
    </g>,
    // 2 · Pedidos — pipeline de estados
    <g key="pedidos">
      {["Pend.", "Prep.", "Enviado", "Entreg."].map((_, i) => (
        <g key={i} transform={`translate(${i * 66}, 20)`}>
          <rect width="58" height="90" rx="8" fill={CARD} />
          <rect width="58" height="4" rx="2" fill={CLAY} opacity={1 - i * 0.2} />
          <rect x="8" y="16" width="30" height="6" rx="3" fill="oklch(0.85 0.01 220)" />
          {[0, 1, 2].map((j) => (
            <circle key={j} cx={16 + j * 12} cy="50" r="6" fill={FAINT} />
          ))}
        </g>
      ))}
    </g>,
    // 3 · Clientes — base consolidada
    <g key="clientes">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${i * 30})`}>
          <circle cx="14" cy="14" r="12" fill={i % 2 === 0 ? TEAL : CLAY} opacity="0.25" />
          <circle cx="14" cy="14" r="5" fill={i % 2 === 0 ? TEAL : CLAY} />
          <rect x="34" y="6" width="130" height="8" rx="3" fill="oklch(0.85 0.01 220)" />
          <rect x="34" y="18" width="70" height="6" rx="3" fill={FAINT} />
          <rect x="210" y="8" width="40" height="14" rx="7" fill={FAINT} />
        </g>
      ))}
    </g>,
    // 4 · Facturación y pagos — métodos
    <g key="facturacion">
      <rect width="260" height="46" rx="10" fill={CARD} />
      <text x="14" y="20" fontSize="10" fill={MUTED}>
        Total del pedido
      </text>
      <text x="14" y="38" fontSize="16" fontWeight="700" fill={INK}>
        $ 48.500
      </text>
      {["Mercado Pago", "Transferencia", "Tarjeta", "En local"].map((m, i) => (
        <rect
          key={m}
          x={i % 2 === 0 ? 0 : 134}
          y={58 + Math.floor(i / 2) * 34}
          width="126"
          height="26"
          rx="13"
          fill={FAINT}
        />
      ))}
      {["Mercado Pago", "Transferencia", "Tarjeta", "En local"].map((m, i) => (
        <text
          key={m}
          x={(i % 2 === 0 ? 0 : 134) + 14}
          y={58 + Math.floor(i / 2) * 34 + 17}
          fontSize="9.5"
          fill={INK}
          fontWeight={600}
        >
          {m}
        </text>
      ))}
    </g>,
    // 5 · Reportes — comparativo
    <g key="reportes">
      <g transform="translate(50, 65)">
        <circle r="55" fill={FAINT} />
        <path d="M0 -55 A55 55 0 0 1 52.4 -17 L0 0 Z" fill={CLAY} />
        <path d="M52.4 -17 A55 55 0 0 1 15.7 52.3 L0 0 Z" fill={TEAL} />
        <path d="M15.7 52.3 A55 55 0 0 1 -55 0 L0 0 Z" fill={GOLD} />
        <circle r="33" fill={CARD} />
      </g>
      {[
        ["Tienda Norte", CLAY],
        ["Tienda Centro", TEAL],
        ["Tienda Sur", GOLD],
      ].map(([label, color], i) => (
        <g key={label as string} transform={`translate(140, ${34 + i * 26})`}>
          <rect width="10" height="10" rx="2" fill={color as string} />
          <rect x="18" y="1" width="90" height="8" rx="3" fill="oklch(0.85 0.01 220)" />
        </g>
      ))}
    </g>,
    // 6 · Seguridad y roles — accesos
    <g key="roles">
      {[
        ["Dueño / Administrador", CLAY],
        ["Gerente de tienda", TEAL],
        ["Vendedor", GOLD],
      ].map(([label, color], i) => (
        <g key={label as string} transform={`translate(0, ${i * 40})`}>
          <rect width="260" height="30" rx="8" fill={CARD} />
          <circle cx="16" cy="15" r="10" fill={color as string} opacity="0.2" />
          <path
            d="M16 9a4 4 0 0 0-4 4v1h-1v6h10v-6h-1v-1a4 4 0 0 0-4-4z"
            transform="translate(-4 -4) scale(0.7)"
            fill={color as string}
          />
          <rect x="34" y="10" width="150" height="10" rx="3" fill="oklch(0.85 0.01 220)" />
        </g>
      ))}
    </g>,
  ];

  return (
    <svg viewBox="0 0 260 130" className="h-full w-full">
      <defs>
        <linearGradient id={brand} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={CLAY} />
          <stop offset="100%" stopColor={INK} />
        </linearGradient>
      </defs>
      {variants[variant % variants.length]}
    </svg>
  );
}

/* ---------- App móvil · vista interactiva ---------- */
type MobileTabId = "resumen" | "ventas" | "stock" | "pedidos";

const MOBILE_TABS: { id: MobileTabId; label: string }[] = [
  { id: "resumen", label: "Resumen" },
  { id: "ventas", label: "Ventas" },
  { id: "stock", label: "Stock" },
  { id: "pedidos", label: "Pedidos" },
];

export function MobileAppMockup({ className = "" }: { className?: string }) {
  const uid = useId();
  const brand = `${uid}-brand`;
  const [tab, setTab] = useState<MobileTabId>("resumen");

  return (
    <svg
      viewBox="0 0 380 720"
      className={className}
      role="img"
      aria-label="Vista previa interactiva de la app móvil"
    >
      <defs>
        <linearGradient id={brand} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={CLAY} />
          <stop offset="100%" stopColor={INK} />
        </linearGradient>
      </defs>

      {/* phone frame */}
      <rect x="0" y="0" width="380" height="720" rx="46" fill={INK} />
      <rect x="8" y="8" width="364" height="704" rx="40" fill={CARD} />
      <rect x="140" y="8" width="100" height="24" rx="12" fill={INK} />

      {/* status bar */}
      <text x="30" y="44" fontSize="12" fontWeight="700" fill={INK}>
        9:41
      </text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={318 + i * 8} y={35} width="5" height={8 + i * 3} rx="1" fill={INK} />
      ))}

      {/* header */}
      <text x="30" y="84" fontSize="18" fontWeight="700" fill={INK}>
        Hola, Martín
      </text>
      <text x="30" y="102" fontSize="10.5" fill={MUTED}>
        Vista de solo lectura · todas las tiendas
      </text>
      <rect x="30" y="118" width="320" height="1" fill={LINE} />

      <g transform="translate(30, 140)">
        {tab === "resumen" && <MobileResumen />}
        {tab === "ventas" && <MobileVentas brand={brand} />}
        {tab === "stock" && <MobileStock />}
        {tab === "pedidos" && <MobilePedidos />}
      </g>

      {/* bottom tab bar */}
      <rect x="8" y="630" width="364" height="82" fill={CARD} />
      <rect x="8" y="630" width="364" height="1" fill={LINE} />
      {MOBILE_TABS.map((t, i) => {
        const active = tab === t.id;
        const x = 8 + i * 91 + 45.5;
        return (
          <g
            key={t.id}
            role="button"
            tabIndex={0}
            aria-pressed={active}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setTab(t.id);
              }
            }}
            className="cursor-pointer outline-none"
          >
            <rect x={8 + i * 91} y="630" width="91" height="82" fill="transparent" />
            <circle cx={x} cy="664" r="4" fill={active ? CLAY : "oklch(0.7 0.02 220)"} />
            <text
              x={x}
              y="690"
              textAnchor="middle"
              fontSize="10"
              fontWeight={active ? 600 : 500}
              fill={active ? INK : MUTED}
            >
              {t.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MobileResumen() {
  const stats = [
    { label: "Ventas de hoy", value: "$2,1 M", delta: "+8 %", color: CLAY },
    { label: "Pedidos de hoy", value: "68", delta: "+18 %", color: TEAL },
    { label: "Tiendas activas", value: "4 / 4", delta: "100 %", color: SUCCESS },
  ];
  const actividad = [
    { c: CLAY, t: "Tienda Norte", s: "Pedido #4821 · Entregado" },
    { c: TEAL, t: "Tienda Centro", s: "Pedido #4820 · Preparando" },
    { c: GOLD, t: "Tienda Sur", s: "Pedido #4819 · Enviado" },
  ];
  return (
    <>
      {stats.map((s, i) => (
        <g key={s.label} transform={`translate(0, ${i * 84})`}>
          <rect width="320" height="72" rx="16" fill={FAINT} />
          <text x="18" y="26" fontSize="10.5" fill={MUTED}>
            {s.label}
          </text>
          <text x="18" y="52" fontSize="20" fontWeight="700" fill={INK}>
            {s.value}
          </text>
          <rect x="228" y="22" width="76" height="24" rx="12" fill={s.color} opacity="0.14" />
          <text x="266" y="38" textAnchor="middle" fontSize="10" fontWeight="600" fill={s.color}>
            {s.delta}
          </text>
        </g>
      ))}
      <g transform="translate(0, 268)">
        <text fontSize="12" fontWeight="700" fill={INK}>
          Actividad reciente
        </text>
        {actividad.map((r, i) => (
          <g key={i} transform={`translate(0, ${26 + i * 40})`}>
            <circle cx="8" cy="8" r="8" fill={r.c} opacity="0.18" />
            <circle cx="8" cy="8" r="3.5" fill={r.c} />
            <text x="24" y="6" fontSize="10.5" fontWeight="600" fill={INK}>
              {r.t}
            </text>
            <text x="24" y="20" fontSize="9.5" fill={MUTED}>
              {r.s}
            </text>
          </g>
        ))}
      </g>
    </>
  );
}

function MobileVentas({ brand }: { brand: string }) {
  const dias = [32, 48, 40, 60, 52, 70, 65];
  const labels = ["L", "M", "M", "J", "V", "S", "D"];
  const porTienda = [
    { t: "Tienda Norte", v: "$14,2 M", c: CLAY },
    { t: "Tienda Centro", v: "$11,8 M", c: TEAL },
    { t: "Tienda Sur", v: "$9,6 M", c: GOLD },
    { t: "Tienda Este", v: "$4,1 M", c: SUCCESS },
  ];
  return (
    <>
      <text fontSize="12" fontWeight="700" fill={INK}>
        Ventas de la semana
      </text>
      <text y="26" fontSize="22" fontWeight="700" fill={INK}>
        $ 68,4 M
      </text>
      <text y="42" fontSize="10" fontWeight="600" fill={SUCCESS}>
        +14 % vs. semana anterior
      </text>
      <g transform="translate(0, 60)">
        {dias.map((v, i) => (
          <g key={i} transform={`translate(${i * 44}, 0)`}>
            <rect
              x="8"
              y={90 - v}
              width="26"
              height={v}
              rx="8"
              fill={`url(#${brand})`}
              opacity={i === 5 ? 1 : 0.55}
            />
            <text x="21" y="106" textAnchor="middle" fontSize="9.5" fill={MUTED}>
              {labels[i]}
            </text>
          </g>
        ))}
      </g>
      <g transform="translate(0, 190)">
        <text fontSize="12" fontWeight="700" fill={INK}>
          Por tienda
        </text>
        {porTienda.map((r, i) => (
          <g key={r.t} transform={`translate(0, ${26 + i * 34})`}>
            <circle cx="6" cy="4" r="5" fill={r.c} />
            <text x="20" y="8" fontSize="10.5" fill={INK}>
              {r.t}
            </text>
            <text x="320" y="8" textAnchor="end" fontSize="10.5" fontWeight="600" fill={INK}>
              {r.v}
            </text>
          </g>
        ))}
      </g>
    </>
  );
}

function MobileStock() {
  const rows = [
    { t: "Tienda Norte", v: 3240, c: CLAY },
    { t: "Tienda Centro", v: 2860, c: TEAL },
    { t: "Tienda Sur", v: 2120, c: GOLD },
    { t: "Tienda Este", v: 1940, c: SUCCESS },
  ];
  const max = Math.max(...rows.map((r) => r.v));
  const alertas = [
    { p: "Vestido midi estampado", t: "Tienda Este", u: "3 u." },
    { p: "Remera básica algodón", t: "Tienda Centro", u: "6 u." },
    { p: "Campera impermeable", t: "Tienda Sur", u: "4 u." },
  ];
  return (
    <>
      <text fontSize="12" fontWeight="700" fill={INK}>
        Stock consolidado
      </text>
      <text y="26" fontSize="22" fontWeight="700" fill={INK}>
        12.480 u.
      </text>
      <g transform="translate(0, 46)">
        {rows.map((r, i) => {
          const y = i * 34;
          const w = (r.v / max) * 220;
          return (
            <g key={r.t} transform={`translate(0, ${y})`}>
              <text fontSize="10" fill={MUTED}>
                {r.t}
              </text>
              <rect x="0" y="10" width="320" height="8" rx="4" fill={FAINT} />
              <rect x="0" y="10" width={w} height="8" rx="4" fill={r.c} />
            </g>
          );
        })}
      </g>
      <g transform="translate(0, 216)">
        <text fontSize="12" fontWeight="700" fill={INK}>
          Bajo stock
        </text>
        {alertas.map((a, i) => (
          <g key={a.p} transform={`translate(0, ${26 + i * 40})`}>
            <circle cx="8" cy="8" r="8" fill={GOLD} opacity="0.18" />
            <circle cx="8" cy="8" r="3" fill={GOLD} />
            <text x="24" y="6" fontSize="10.5" fontWeight="600" fill={INK}>
              {a.p}
            </text>
            <text x="24" y="20" fontSize="9.5" fill={MUTED}>
              {a.t} · {a.u}
            </text>
          </g>
        ))}
      </g>
    </>
  );
}

function MobilePedidos() {
  const pedidos = [
    { id: "#4821", t: "Tienda Norte", e: "Entregado", c: SUCCESS },
    { id: "#4822", t: "Tienda Centro", e: "Preparando", c: GOLD },
    { id: "#4823", t: "Tienda Sur", e: "Pendiente", c: CLAY },
    { id: "#4824", t: "Tienda Norte", e: "Enviado", c: TEAL },
    { id: "#4825", t: "Tienda Este", e: "Entregado", c: SUCCESS },
  ];
  return (
    <>
      <text fontSize="12" fontWeight="700" fill={INK}>
        Pedidos recientes
      </text>
      <text y="18" fontSize="10.5" fill={MUTED}>
        Todas las tiendas
      </text>
      {pedidos.map((p, i) => (
        <g key={p.id} transform={`translate(0, ${38 + i * 54})`}>
          <rect width="320" height="44" rx="12" fill={FAINT} />
          <text x="16" y="18" fontSize="11" fontWeight="700" fill={INK}>
            {p.id}
          </text>
          <text x="16" y="34" fontSize="9.5" fill={MUTED}>
            {p.t}
          </text>
          <rect x="228" y="12" width="76" height="20" rx="10" fill={p.c} opacity="0.16" />
          <text x="266" y="26" textAnchor="middle" fontSize="9.5" fontWeight="600" fill={p.c}>
            {p.e}
          </text>
        </g>
      ))}
    </>
  );
}

/* ---------- Panel de cada tienda · vista acotada ---------- */
export function StorePanelMockup({ className = "" }: { className?: string }) {
  const uid = useId();
  const bg = `${uid}-bg`;

  const pedidos = [
    { id: "#4821", cliente: "M. Gómez", estado: "Entregado", color: TEAL },
    { id: "#4822", cliente: "J. Duarte", estado: "Preparando", color: GOLD },
    { id: "#4823", cliente: "L. Acosta", estado: "Pendiente", color: CLAY },
    { id: "#4824", cliente: "R. Farías", estado: "Enviado", color: TEAL },
  ];

  return (
    <svg
      viewBox="0 0 640 400"
      className={className}
      role="img"
      aria-label="Vista previa del panel de una tienda"
    >
      <defs>
        <linearGradient id={bg} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={CARD} />
          <stop offset="100%" stopColor={FAINT} />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="640" height="400" rx="18" fill={`url(#${bg})`} />
      <rect x="0" y="0" width="640" height="40" rx="18" fill={CARD} />
      <circle cx="18" cy="20" r="5" fill="oklch(0.85 0.03 30)" />
      <circle cx="36" cy="20" r="5" fill="oklch(0.86 0.06 90)" />
      <circle cx="54" cy="20" r="5" fill="oklch(0.75 0.11 155)" />
      <text x="320" y="24" textAnchor="middle" fontSize="10" fill={MUTED}>
        tienda-norte.negocio.com/panel
      </text>

      {/* sidebar */}
      <rect x="0" y="40" width="150" height="360" fill={CARD} />
      {["Pedidos", "Catálogo", "Stock", "Clientes", "Reportes"].map((label, i) => {
        const y = 66 + i * 34;
        const active = i === 0;
        return (
          <g key={label}>
            {active && <rect x="10" y={y - 15} width="130" height="26" rx="8" fill={FAINT} />}
            <circle cx="24" cy={y - 2} r="3.5" fill={active ? CLAY : "oklch(0.7 0.02 220)"} />
            <text
              x="36"
              y={y + 2}
              fontSize="10.5"
              fill={active ? INK : MUTED}
              fontWeight={active ? 600 : 500}
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* main */}
      <text x="170" y="70" fontSize="15" fontWeight="700" fill={INK}>
        Pedidos
      </text>
      <text x="170" y="88" fontSize="10.5" fill={MUTED}>
        Tienda Norte · solo su propia operación
      </text>

      {[
        { label: "Pendientes", value: "6", color: CLAY },
        { label: "En preparación", value: "3", color: GOLD },
        { label: "Entregados hoy", value: "21", color: TEAL },
      ].map((s, i) => (
        <g key={s.label} transform={`translate(${170 + i * 150}, 102)`}>
          <rect width="138" height="56" rx="10" fill={CARD} stroke={LINE} />
          <text x="14" y="22" fontSize="9.5" fill={MUTED}>
            {s.label}
          </text>
          <text x="14" y="42" fontSize="18" fontWeight="700" fill={INK}>
            {s.value}
          </text>
          <circle cx="120" cy="20" r="6" fill={s.color} />
        </g>
      ))}

      <g transform="translate(170, 176)">
        <rect width="450" height="200" rx="12" fill={CARD} stroke={LINE} />
        <text x="16" y="26" fontSize="11.5" fontWeight="700" fill={INK}>
          Cola de pedidos
        </text>
        {pedidos.map((p, i) => (
          <g key={p.id} transform={`translate(16, ${46 + i * 38})`}>
            <text x="0" y="14" fontSize="10.5" fontWeight="600" fill={INK}>
              {p.id}
            </text>
            <text x="60" y="14" fontSize="10.5" fill={MUTED}>
              {p.cliente}
            </text>
            <rect x="340" y="2" width="90" height="20" rx="10" fill={p.color} opacity="0.14" />
            <text x="385" y="16" textAnchor="middle" fontSize="9.5" fontWeight="600" fill={p.color}>
              {p.estado}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

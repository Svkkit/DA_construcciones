# CONSTRUART — Sitio Web

Sitio web profesional para empresa constructora.  
Stack: **Astro 4** · **Tailwind CSS** · **Animaciones CSS nativas (scroll reveal)**

---

## 🚀 Instalación

```bash
npm install
npm run dev
```

Visita `http://localhost:4321`

---

## 📁 Estructura de archivos

```
src/
├── layouts/
│   └── Layout.astro          ← Base HTML, fuentes, estilos globales, scroll reveal
├── pages/
│   └── index.astro           ← Página principal
└── components/
    ├── Navbar.astro          ← Menú transparente → sólido al scroll
    ├── Hero.astro            ← Sección hero pantalla completa
    ├── Portfolio.astro       ← Galería de proyectos con filtros
    ├── About.astro           ← Sección "Sobre Nosotros"
    ├── Contact.astro         ← Formulario de contacto
    └── Footer.astro          ← Pie de página
public/
└── images/                   ← ⬅ PON AQUÍ TUS FOTOS
    ├── hero-bg.jpg
    ├── proyecto1.jpg
    ├── proyecto2.jpg
    └── ...
```

---

## 🖼️ Cómo agregar tus fotos

### 1. Imagen del Hero

En `src/components/Hero.astro`, busca la línea:

```astro
<div class="hero-bg" style="background-image: url('https://...')">
```

Reemplaza la URL con:

```astro
<div class="hero-bg" style="background-image: url('/images/hero-bg.jpg')">
```

**Tamaño recomendado:** 1920×1080 px, JPG, ~400KB

---

### 2. Fotos de proyectos (Galería)

En `src/components/Portfolio.astro`, edita el array `projects`:

```astro
const projects = [
  {
    id: 1,
    name: "Nombre del proyecto",
    category: "Residencial",   // o "Comercial" / "Industrial"
    year: "2024",
    image: "/images/proyecto1.jpg",  // ← tu ruta aquí
    size: "large",  // "large" = ocupa 2 columnas | "normal" = 1 columna
  },
  // ... más proyectos
];
```

**Tamaño recomendado por foto:** 800×600 px (4:3), JPG, ~150KB

---

### 3. Foto del equipo (Sección "Sobre Nosotros")

En `src/components/About.astro`, reemplaza:

```astro
src="https://images.unsplash.com/..."
```

Con:

```astro
src="/images/equipo.jpg"
```

**Tamaño recomendado:** 1400×600 px (21:9 panorámica), JPG

---

## 🎨 Paleta de colores

| Variable        | Valor     | Uso                    |
|-----------------|-----------|------------------------|
| `--color-bg`    | `#0d0f11` | Fondo principal        |
| `--color-surface` | `#151719` | Tarjetas, secciones  |
| `--color-accent` | `#c9a96e` | Dorado suave, CTAs    |
| `--color-accent2` | `#3d6b8c` | Azul industrial       |
| `--color-text`  | `#e8e4dd` | Texto principal        |
| `--color-muted` | `#7a7873` | Texto secundario       |

Para cambiar el color de acento, edita `--color-accent` en `src/layouts/Layout.astro`.

---

## 📧 Integrar el formulario de contacto

El formulario actualmente simula el envío. Para conectarlo a un servicio real:

### Opción A — Netlify Forms
Agrega `data-netlify="true"` al `<form>` en `Contact.astro`.

### Opción B — Formspree
```js
// En el script de Contact.astro, reemplaza la línea del setTimeout por:
const response = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
});
```

---

## 📱 Responsive

El diseño es mobile-first. Breakpoints:
- `< 640px` — Móvil
- `640px – 960px` — Tablet
- `> 960px` — Desktop

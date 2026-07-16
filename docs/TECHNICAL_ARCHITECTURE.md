# Arquitectura técnica

## Propósito

Este documento define la arquitectura técnica inicial del recurso web de **Voces que Restauran**.

La arquitectura debe responder a las decisiones pedagógicas, éticas, de privacidad y accesibilidad ya documentadas.

Debe utilizarse junto con:

```text
PROJECT_BRIEF.md
ROADMAP.md
USER_STORIES.md
DESIGN_SYSTEM.md
DESIGN_DECISIONS.md
PRIVACY.md
ACCESSIBILITY.md
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
knowledge/data/unit-content.json
```

---

## Objetivo técnico

Construir un recurso web:

- estático;
- accesible;
- responsive;
- mantenible;
- fácil de publicar;
- compatible con GitHub Pages;
- sin autenticación;
- sin bases de datos;
- sin recopilación de datos;
- sin conexión directa con servicios externos de IA;
- con alternativas imprimibles y desconectadas.

---

## Principios de arquitectura

### Simplicidad

La primera versión debe utilizar tecnologías web estándar y evitar dependencias innecesarias.

### Contenido primero

La arquitectura técnica debe servir al contenido pedagógico y no al contrario.

### Mejora progresiva

El contenido esencial debe ser accesible aunque JavaScript falle.

### Privacidad por diseño

La ausencia de recopilación de datos debe ser una característica estructural, no solo una promesa documental.

### Accesibilidad desde el inicio

La semántica, el teclado, el foco, el contraste y la adaptación móvil deben incorporarse durante el desarrollo.

### Mantenimiento comprensible

La estructura debe poder ser revisada y actualizada por una persona con conocimientos básicos de HTML, CSS, JavaScript y GitHub.

---

## Alcance técnico actual

La primera versión incluye:

- páginas HTML;
- estilos CSS;
- JavaScript local;
- contenido estructurado en JSON;
- imágenes y recursos locales;
- materiales imprimibles;
- publicación mediante GitHub Pages.

No incluye:

- servidor;
- API propia;
- base de datos;
- cuentas;
- autenticación;
- panel administrativo;
- analítica;
- almacenamiento local;
- servicios externos;
- inteligencia artificial integrada;
- gestión de casos.

---

## Tecnologías

### HTML

Se utilizará para:

- estructura;
- navegación;
- contenido;
- formularios locales de búsqueda o filtros sin envío;
- componentes semánticos;
- relaciones de accesibilidad.

### CSS

Se utilizará para:

- diseño visual;
- layout;
- responsive;
- estados de interacción;
- foco;
- impresión;
- movimiento reducido.

### JavaScript

Se utilizará únicamente cuando aporte valor para:

- menú móvil;
- carga de contenido estructurado;
- filtros;
- búsqueda local;
- copiar texto;
- mensajes de estado;
- navegación dinámica cuando se apruebe.

### JSON

Se utilizará como capa de datos estructurados para:

- momentos;
- sesiones;
- expresiones;
- mensajes;
- recursos;
- otros contenidos reutilizables.

### Git y GitHub

Se utilizarán para:

- control de versiones;
- revisión de cambios;
- documentación;
- publicación;
- colaboración.

### GitHub Pages

Se utilizará como opción inicial de despliegue del recurso estático.

---

## Arquitectura general

```text
Repositorio
│
├── Documentación estratégica
│
├── Base de conocimiento
│
├── Datos estructurados
│
└── Recurso web
    ├── HTML
    ├── CSS
    ├── JavaScript
    ├── Datos
    ├── Imágenes
    └── Recursos imprimibles
```

---

## Estructura técnica propuesta

```text
docs/
├── README.md
├── SITEMAP.md
├── PAGE_INVENTORY.md
├── COMPONENT_INVENTORY.md
├── TECHNICAL_ARCHITECTURE.md
├── index.html
├── 404.html
├── about/
│   ├── index.html
│   ├── context.html
│   ├── korea-transfer.html
│   ├── scope.html
│   └── authorship.html
├── language/
│   ├── index.html
│   ├── glossary.html
│   ├── key-expressions.html
│   ├── restorative-questions.html
│   └── peace-messages.html
├── moments/
│   ├── index.html
│   ├── moment-1.html
│   ├── moment-2.html
│   ├── moment-3.html
│   ├── moment-4.html
│   └── sessions/
├── resources/
│   ├── index.html
│   ├── printables.html
│   ├── templates.html
│   ├── prompts.html
│   └── offline-alternatives.html
├── teacher-guide/
│   ├── index.html
│   ├── implementation.html
│   ├── assessment.html
│   ├── privacy.html
│   ├── accessibility.html
│   └── responsible-ai.html
├── assets/
│   ├── icons/
│   ├── images/
│   └── documents/
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── utilities.css
│   └── print.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── data-loader.js
│   ├── filters.js
│   ├── copy.js
│   └── session-page.js
└── data/
    └── unit-content.json
```

Esta estructura puede simplificarse si las pruebas muestran que existen demasiados archivos.

---

## Decisión sobre la ubicación de los datos

La fuente pedagógica estructurada se encuentra en:

```text
knowledge/data/unit-content.json
```

Para evitar problemas de rutas y publicación en GitHub Pages, la implementación puede utilizar una copia en:

```text
docs/data/unit-content.json
```

### Regla

```text
knowledge/data/unit-content.json
        =
fuente estructurada principal
```

```text
docs/data/unit-content.json
        =
copia utilizada por la interfaz
```

### Condición

Ambos archivos deben mantenerse sincronizados.

No deben editarse independientemente.

### Flujo de actualización

```text
Actualizar Markdown
        ↓
Actualizar knowledge/data/unit-content.json
        ↓
Validar JSON
        ↓
Copiar a docs/data/unit-content.json
        ↓
Probar interfaz
        ↓
Registrar cambio
```

---

## Alternativa técnica considerada

Podría intentarse cargar directamente:

```text
../knowledge/data/unit-content.json
```

desde las páginas de `docs/`.

Esta opción no se recomienda inicialmente porque:

- puede complicar rutas relativas;
- puede fallar según la ubicación de la página;
- dificulta el despliegue;
- mezcla documentación con archivos públicos;
- aumenta el riesgo de errores en GitHub Pages.

Por ello, se recomienda una copia sincronizada dentro de `docs/data/`.

Esta decisión debe registrarse en:

```text
DESIGN_DECISIONS.md
```

---

## Estrategia de páginas

La primera versión utilizará páginas HTML independientes para las secciones principales.

Ejemplos:

```text
index.html
moments/index.html
language/index.html
teacher-guide/index.html
```

Para las sesiones existen dos opciones.

### Opción A — Dieciséis archivos HTML

```text
session-01.html
session-02.html
...
session-16.html
```

#### Ventajas

- funcionamiento simple;
- contenido accesible sin JavaScript;
- enlaces directos;
- mejor tolerancia a errores;
- mayor claridad para GitHub Pages.

#### Desventajas

- duplicación;
- mayor mantenimiento;
- riesgo de inconsistencias.

### Opción B — Una plantilla dinámica

```text
session.html?id=01
```

#### Ventajas

- menos archivos;
- contenido centralizado;
- mantenimiento más sencillo;
- reutilización.

#### Desventajas

- mayor dependencia de JavaScript;
- manejo de errores más complejo;
- menor disponibilidad si falla la carga;
- dificultad para previsualización estática.

---

## Decisión inicial sobre sesiones

Se recomienda una estrategia híbrida:

- una página HTML por momento;
- una plantilla dinámica para sesiones;
- contenido principal cargado desde JSON;
- mensaje de error y alternativa visible;
- enlaces directos con parámetros;
- contenido mínimo disponible sin JavaScript.

Ejemplo:

```text
/docs/moments/session.html?id=01
```

Sin embargo, esta decisión debe probarse antes de considerarse definitiva.

Si la carga dinámica afecta accesibilidad o mantenimiento, se deben generar páginas estáticas por sesión.

---

## Estrategia de renderizado

### Contenido estático

Debe escribirse directamente en HTML cuando sea:

- presentación del proyecto;
- privacidad;
- alcance;
- autoría;
- guía general;
- navegación;
- pie de página;
- mensajes esenciales.

### Contenido estructurado

Puede cargarse desde JSON cuando sea:

- repetitivo;
- reutilizable;
- fácil de validar;
- compartido entre páginas.

Ejemplos:

- momentos;
- sesiones;
- expresiones;
- mensajes;
- recursos.

### Regla

La información crítica de privacidad y protección no debe depender únicamente de JavaScript.

---

## Mejora progresiva

La página debe mostrar contenido útil antes de ejecutar JavaScript.

Ejemplo:

```html
<main id="main-content">
  <h1>Sesión</h1>

  <p id="session-status">
    Selecciona una sesión desde el listado de momentos.
  </p>

  <section id="session-content" hidden></section>

  <noscript>
    <p>
      Esta página necesita JavaScript para mostrar la sesión.
      Consulta la versión imprimible o regresa al listado.
    </p>
  </noscript>
</main>
```

Cuando sea posible, se debe evitar que una página completa dependa de JavaScript.

---

## Carga de datos

La carga debe utilizar rutas relativas.

Ejemplo:

```javascript
const DATA_URL = "../data/unit-content.json";
```

La ruta dependerá de la ubicación de la página.

Para evitar errores, puede definirse una función centralizada.

```javascript
async function loadJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Error al cargar ${path}: ${response.status}`);
  }

  return response.json();
}
```

---

## Manejo de errores

Toda carga debe considerar:

- archivo no encontrado;
- JSON inválido;
- campo ausente;
- parámetro incorrecto;
- sesión inexistente;
- red local o servidor no disponible.

Ejemplo:

```javascript
try {
  const data = await loadJson("../data/unit-content.json");
  renderContent(data);
} catch (error) {
  console.error(error);
  showError(
    "No pudimos cargar este contenido. Regresa al listado o consulta la versión imprimible."
  );
}
```

El mensaje visible debe ayudar al usuario y no mostrar detalles técnicos innecesarios.

---

## Validación del JSON

Antes de publicar:

```bash
python -m json.tool knowledge/data/unit-content.json
```

También debe validarse la copia:

```bash
python -m json.tool docs/data/unit-content.json
```

### Validaciones adicionales

- existen 4 momentos;
- existen 16 sesiones;
- la duración total es de 32 horas;
- los identificadores son únicos;
- los campos obligatorios existen;
- las rutas de recursos son válidas.

---

## Sincronización de datos

En la primera fase, la copia puede hacerse manualmente.

Ejemplo:

```bash
cp knowledge/data/unit-content.json docs/data/unit-content.json
```

En Windows PowerShell:

```powershell
Copy-Item knowledge/data/unit-content.json docs/data/unit-content.json
```

Más adelante puede crearse un script de validación y copia.

La automatización no debe añadirse antes de definir claramente el flujo de trabajo.

---

## Organización del CSS

### `base.css`

Debe contener:

- normalización básica;
- tipografía;
- colores;
- enlaces;
- encabezados;
- imágenes;
- foco;
- elementos HTML generales.

### `layout.css`

Debe contener:

- contenedores;
- grids;
- encabezado;
- navegación;
- pie;
- distribución de páginas;
- responsive.

### `components.css`

Debe contener:

- tarjetas;
- avisos;
- botones;
- etiquetas;
- migas;
- acordeones;
- filtros;
- estados;
- recursos.

### `utilities.css`

Debe contener clases pequeñas y controladas como:

```text
.visually-hidden
.skip-link
.no-print
.text-center
.stack
.cluster
```

No debe convertirse en una colección desorganizada de estilos.

### `print.css`

Debe contener:

- ocultación de navegación;
- fondos claros;
- formato de enlaces;
- saltos de página;
- conservación de títulos;
- optimización para impresión.

---

## Variables CSS

Se recomienda utilizar propiedades personalizadas.

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f7f8;
  --color-text: #1f2933;
  --color-text-muted: #52606d;
  --color-primary: #155e75;
  --color-primary-hover: #0e4f63;
  --color-border: #cbd5e1;
  --color-focus: #b45309;
  --color-warning-background: #fff7ed;
  --color-error: #991b1b;

  --font-family-base: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;

  --content-width: 72rem;
  --reading-width: 48rem;

  --radius-small: 0.375rem;
  --radius-medium: 0.75rem;
  --radius-large: 1.25rem;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
}
```

Los valores deben validarse antes de considerarse definitivos.

---

## Organización del JavaScript

### `main.js`

Responsabilidades:

- inicialización general;
- detección de componentes;
- coordinación de módulos;
- mensajes básicos.

### `navigation.js`

Responsabilidades:

- menú móvil;
- `aria-expanded`;
- cierre con `Escape`;
- control de foco cuando sea necesario.

### `data-loader.js`

Responsabilidades:

- cargar JSON;
- validar respuesta;
- manejar errores;
- ofrecer funciones reutilizables.

### `filters.js`

Responsabilidades:

- búsqueda local;
- filtros;
- limpieza;
- actualización del número de resultados.

### `copy.js`

Responsabilidades:

- copiar texto;
- manejar fallos;
- actualizar mensajes de estado.

### `session-page.js`

Responsabilidades:

- leer identificador de sesión;
- localizar datos;
- validar campos;
- renderizar contenido;
- mostrar errores.

---

## Módulos JavaScript

Se recomienda utilizar módulos:

```html
<script type="module" src="../js/session-page.js"></script>
```

Ejemplo:

```javascript
import { loadJson } from "./data-loader.js";
```

### Ventajas

- separación de responsabilidades;
- mejor mantenimiento;
- nombres controlados;
- menor contaminación global.

### Condición

Debe comprobarse que funcionen correctamente mediante un servidor local y GitHub Pages.

---

## Seguridad del contenido

El contenido del JSON debe tratarse como datos.

No debe insertarse mediante:

```javascript
element.innerHTML = data.content;
```

cuando el contenido no esté estrictamente controlado.

Se prefiere:

```javascript
element.textContent = data.content;
```

Cuando sea necesario construir estructura:

```javascript
const heading = document.createElement("h2");
heading.textContent = section.title;
```

---

## Política de dependencias

La primera versión no necesita:

- React;
- Vue;
- Angular;
- jQuery;
- Bootstrap;
- Tailwind;
- gestores de estado;
- backend;
- CMS.

Estas tecnologías no están prohibidas para siempre, pero no se justifican en el alcance actual.

Antes de añadir una dependencia debe evaluarse:

- necesidad;
- tamaño;
- mantenimiento;
- accesibilidad;
- privacidad;
- seguridad;
- licencia;
- compatibilidad;
- aprendizaje requerido.

---

## Recursos gráficos

Los recursos deben almacenarse localmente cuando sea posible.

```text
docs/assets/icons/
docs/assets/images/
```

Se debe evitar depender de:

- imágenes remotas;
- CDNs;
- fuentes externas;
- scripts externos;
- bibliotecas cargadas desde terceros.

### Razones

- privacidad;
- funcionamiento predecible;
- menor dependencia de red;
- mejor control;
- mantenimiento.

---

## Tipografía

Se recomienda utilizar la fuente del sistema para la primera versión.

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  sans-serif;
```

Esto evita:

- descargas externas;
- problemas de privacidad;
- mayor tiempo de carga;
- dependencia de servicios de fuentes.

---

## Imágenes

Las imágenes deben:

- tener propósito;
- incluir texto alternativo;
- estar optimizadas;
- utilizar formatos adecuados;
- evitar información identificable;
- almacenarse localmente;
- respetar permisos de uso.

Formatos recomendados:

```text
SVG para iconos e ilustraciones simples
WebP o JPEG para fotografías
PNG cuando se necesite transparencia
```

---

## Rutas relativas

Todas las rutas deben probarse desde:

- la raíz de `docs/`;
- subcarpetas;
- GitHub Pages;
- servidor local.

Ejemplo desde:

```text
docs/moments/moment-1.html
```

hacia CSS:

```html
<link rel="stylesheet" href="../css/base.css" />
```

Ejemplo desde:

```text
docs/moments/sessions/session-01.html
```

hacia CSS:

```html
<link rel="stylesheet" href="../../css/base.css" />
```

Para reducir errores pueden utilizarse plantillas o una estructura menos profunda.

---

## GitHub Pages

La publicación puede configurarse desde:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ /docs
```

La URL dependerá del nombre del usuario y del repositorio.

No debe escribirse una URL definitiva en la documentación hasta confirmar el despliegue.

---

## Página 404

GitHub Pages puede utilizar:

```text
docs/404.html
```

Debe incluir:

- mensaje claro;
- enlace al inicio;
- enlace a momentos;
- enlace a recursos;
- navegación básica;
- ausencia de lenguaje culpabilizante.

---

## Funcionamiento local

Desde la raíz del repositorio:

```bash
python -m http.server 8000
```

Abrir:

```text
http://localhost:8000/docs/
```

También puede ejecutarse desde `docs/`:

```bash
cd docs
python -m http.server 8000
```

Abrir:

```text
http://localhost:8000/
```

Se recomienda usar un servidor local porque `fetch` puede fallar cuando se abre HTML directamente mediante `file://`.

---

## Privacidad técnica

El código no debe utilizar:

```text
localStorage
sessionStorage
document.cookie
IndexedDB
service workers con seguimiento
analítica
píxeles de rastreo
formularios con envío
APIs externas
identificadores persistentes
```

El portapapeles puede utilizarse únicamente para copiar contenido visible a solicitud del usuario.

---

## Formularios

La primera versión puede utilizar controles para búsqueda local.

Ejemplo:

```html
<form role="search" onsubmit="return false;">
```

Sin embargo:

- no debe existir `action`;
- no debe enviarse información;
- no debe almacenarse;
- debe explicarse que la búsqueda es local cuando sea pertinente.

También puede evitarse el elemento `form` y utilizar un campo con etiqueta y JavaScript local.

---

## Accesibilidad técnica

### Estructura

- idioma declarado;
- un `h1`;
- encabezados ordenados;
- regiones semánticas;
- navegación etiquetada.

### Teclado

- todos los controles operables;
- foco visible;
- orden lógico;
- ausencia de trampas de foco.

### Contenido dinámico

- mensajes de estado;
- errores anunciados;
- cambios comprensibles;
- foco no desplazado sin necesidad.

### Responsive

- diseño desde móvil;
- zoom de 200 %;
- ancho mínimo de 320 px;
- ausencia de desplazamiento horizontal innecesario.

### Movimiento

Debe respetarse:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Impresión

Cada página pedagógica debe poder imprimirse de manera comprensible.

Los estilos de impresión deben:

- ocultar navegación;
- conservar títulos;
- mostrar URL de enlaces cuando sea útil;
- eliminar fondos intensos;
- evitar cortar tarjetas;
- incluir privacidad;
- mantener autoría;
- conservar contenido principal.

Ejemplo:

```css
@media print {
  .site-header,
  .main-navigation,
  .breadcrumbs,
  .no-print {
    display: none !important;
  }

  body {
    color: #000;
    background: #fff;
    font-size: 12pt;
  }

  article,
  section,
  .card {
    break-inside: avoid;
  }
}
```

---

## Rendimiento

La primera versión debe:

- minimizar JavaScript;
- optimizar imágenes;
- evitar dependencias;
- cargar solo lo necesario;
- evitar videos automáticos;
- reducir archivos duplicados;
- mantener CSS organizado.

No se requiere una optimización compleja antes de tener una versión funcional.

---

## Compatibilidad

Debe probarse como mínimo en versiones actuales de:

- Chrome;
- Edge;
- Firefox;
- navegador móvil basado en Chromium.

También debe probarse en:

- teléfono Android;
- Chromebook;
- computador de escritorio.

---

## Pruebas técnicas mínimas

### HTML

- estructura válida;
- enlaces correctos;
- idioma;
- encabezados;
- navegación.

### CSS

- responsive;
- foco;
- contraste;
- impresión;
- movimiento reducido.

### JavaScript

- ausencia de errores críticos;
- manejo de datos ausentes;
- filtros;
- menú;
- copia;
- mensajes.

### Datos

- JSON válido;
- campos obligatorios;
- identificadores únicos;
- coherencia con Markdown.

### Privacidad

- ausencia de almacenamiento;
- ausencia de servicios externos;
- ausencia de formularios con envío;
- ausencia de analítica.

---

## Convenciones de nombres

### Archivos

Utilizar minúsculas y guiones.

```text
key-expressions.html
restorative-questions.html
unit-content.json
session-page.js
```

### Identificadores HTML

Utilizar nombres descriptivos.

```text
main-content
session-content
filter-status
mobile-menu
```

### Clases CSS

Utilizar nombres de función.

```text
.site-header
.moment-card
.privacy-notice
.status-message
```

### Variables JavaScript

Utilizar nombres descriptivos en inglés o español de forma consistente.

Se recomienda usar inglés para código técnico y español para contenido visible.

---

## Comentarios en código

Los comentarios deben explicar:

- decisiones;
- restricciones;
- razones no evidentes.

No deben repetir literalmente lo que el código ya muestra.

Ejemplo útil:

```javascript
// Use textContent to prevent HTML injection from structured content.
title.textContent = session.title;
```

---

## Gestión de errores en consola

Los errores técnicos pueden registrarse con:

```javascript
console.error(error);
```

Pero el usuario debe recibir un mensaje comprensible.

No deben mostrarse en la interfaz:

- trazas;
- rutas internas;
- objetos completos;
- detalles técnicos innecesarios.

---

## Control de versiones

Se recomienda trabajar mediante ramas para cambios amplios.

Ejemplos:

```text
feature/site-navigation
feature/session-template
accessibility/focus-styles
fix/data-loading
```

Cada commit debe representar un cambio coherente.

---

## Criterios para comenzar a programar

El desarrollo puede comenzar cuando estén definidos:

- mapa del sitio;
- inventario de páginas;
- inventario de componentes;
- arquitectura técnica;
- estructura de datos;
- primera entrega;
- decisiones sobre sesiones;
- ubicación de JSON;
- separación de vistas;
- requisitos mínimos de accesibilidad.

---

## Decisiones técnicas iniciales recomendadas

### TA-001

Utilizar HTML, CSS y JavaScript sin framework.

### TA-002

Publicar desde la carpeta `docs/`.

### TA-003

Copiar el JSON validado a `docs/data/`.

### TA-004

Utilizar páginas HTML estáticas para secciones principales.

### TA-005

Probar inicialmente una plantilla dinámica para sesiones.

### TA-006

Mantener contenido esencial de protección directamente en HTML.

### TA-007

No utilizar almacenamiento ni servicios externos.

### TA-008

Utilizar fuentes del sistema y recursos locales.

### TA-009

Aplicar JavaScript como mejora progresiva.

### TA-010

Incluir estilos de impresión desde la primera entrega.

Estas decisiones deben registrarse formalmente en:

```text
DESIGN_DECISIONS.md
```

---

## Riesgos técnicos

| Riesgo | Respuesta |
|---|---|
| Rutas relativas rotas | Probar desde cada nivel |
| JSON desactualizado | Definir flujo de sincronización |
| Dependencia excesiva de JavaScript | Aplicar mejora progresiva |
| Duplicación de contenido | Centralizar datos reutilizables |
| Inconsistencia visual | Utilizar sistema de diseño |
| Errores de accesibilidad | Probar componentes desde el inicio |
| Publicación accidental de datos | Mantener repositorio sin datos personales |
| Complejidad innecesaria | Evitar frameworks y dependencias |
| Fallo de `fetch` en `file://` | Utilizar servidor local |
| Páginas demasiado profundas | Revisar arquitectura después de pruebas |

---

## Criterios de aceptación de la arquitectura

La arquitectura se considera lista para iniciar desarrollo cuando:

- la estructura de `docs/` está aprobada;
- se define la estrategia de datos;
- se define la estrategia de sesiones;
- se establecen convenciones;
- se definen errores;
- se documenta GitHub Pages;
- se incorporan privacidad y accesibilidad;
- no existen dependencias innecesarias;
- el flujo de actualización está claro.

---

## Próximo paso

Después de crear este documento se deben registrar las decisiones técnicas recomendadas en:

```text
DESIGN_DECISIONS.md
```

Luego se debe crear:

```text
docs/IMPLEMENTATION_PLAN.md
```

Ese archivo convertirá la arquitectura en tareas concretas de desarrollo por entregas.

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- cambie la estructura de `docs/`;
- se incorpore una dependencia;
- cambie la estrategia de datos;
- se modifique la estrategia de sesiones;
- cambie el despliegue;
- se identifique un riesgo;
- se adopte una nueva tecnología;
- una prueba técnica requiera rediseño.

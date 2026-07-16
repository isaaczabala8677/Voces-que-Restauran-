# Recurso web de Voces que Restauran

## Propósito de esta carpeta

La carpeta `docs/` contiene:

1. la documentación de diseño y desarrollo del recurso web;
2. la implementación estática que podrá publicarse mediante GitHub Pages.

El recurso web apoya la implementación de la unidad didáctica **Voces que Restauran**.

No constituye:

- una aplicación institucional;
- un canal de denuncias;
- un sistema disciplinario;
- una plataforma de gestión de convivencia;
- una herramienta de diagnóstico;
- un sistema de seguimiento estudiantil.

---

## Alcance técnico

La primera versión utilizará:

```text
HTML
CSS
JavaScript
JSON local
GitHub Pages
```

No incluirá:

- cuentas;
- autenticación;
- bases de datos;
- almacenamiento de respuestas;
- analítica;
- formularios de relatos;
- carga de archivos;
- gestión de casos;
- conexión directa con IA;
- servicios externos innecesarios.

---

## Estado actual

```text
Arquitectura de información: documentada
Inventario de páginas: documentado
Inventario de componentes: documentado
Arquitectura técnica: documentada
Plan de implementación: documentado
Esquema de datos: documentado
Mapeo de contenido: documentado
Plan de pruebas: documentado
Despliegue: documentado
Código del sitio: pendiente
```

Este estado debe actualizarse cuando comience el desarrollo.

---

## Documentación técnica

La carpeta contiene los siguientes documentos:

| Documento | Función |
|---|---|
| `SITEMAP.md` | Define la estructura y navegación del sitio |
| `PAGE_INVENTORY.md` | Registra las páginas previstas |
| `COMPONENT_INVENTORY.md` | Define componentes reutilizables |
| `TECHNICAL_ARCHITECTURE.md` | Establece la arquitectura técnica |
| `IMPLEMENTATION_PLAN.md` | Organiza el desarrollo por entregas |
| `DATA_SCHEMA.md` | Documenta la estructura del JSON |
| `CONTENT_MAPPING.md` | Relaciona fuentes, datos, páginas y componentes |
| `TESTING_PLAN.md` | Define la estrategia de pruebas |
| `DEPLOYMENT.md` | Explica ejecución y publicación |
| `README.md` | Presenta y orienta esta carpeta |

---

## Documentos relacionados en la raíz

Antes de desarrollar, consultar:

```text
PROJECT_BRIEF.md
ROADMAP.md
USER_STORIES.md
PEDAGOGICAL_FRAMEWORK.md
DESIGN_SYSTEM.md
DESIGN_DECISIONS.md
CONTENT_GUIDELINES.md
PRIVACY.md
ACCESSIBILITY.md
CONTRIBUTING.md
CHANGELOG.md
```

---

## Fuentes pedagógicas

La carpeta:

```text
knowledge/
```

contiene la fuente pedagógica detallada.

Incluye:

- contexto;
- población;
- transferencia desde Corea;
- unidad;
- momentos;
- sesiones;
- evaluación;
- lenguaje;
- prompts;
- datos estructurados.

Los documentos de `docs/` no deben modificar el sentido pedagógico definido en `knowledge/`.

---

## Jerarquía de contenido

Para contenido pedagógico:

```text
knowledge/*.md
        ↓
knowledge/data/unit-content.json
        ↓
docs/data/unit-content.json
        ↓
páginas del recurso
```

Para alcance:

```text
PROJECT_BRIEF.md
        ↓
DESIGN_DECISIONS.md
        ↓
README.md
        ↓
sitio web
```

Para privacidad:

```text
PRIVACY.md
        ↓
datos y contenido
        ↓
componentes
        ↓
interfaz
```

Para accesibilidad:

```text
ACCESSIBILITY.md
        ↓
DESIGN_SYSTEM.md
        ↓
COMPONENT_INVENTORY.md
        ↓
código
```

---

## Estructura prevista

```text
docs/
├── README.md
├── SITEMAP.md
├── PAGE_INVENTORY.md
├── COMPONENT_INVENTORY.md
├── TECHNICAL_ARCHITECTURE.md
├── IMPLEMENTATION_PLAN.md
├── DATA_SCHEMA.md
├── CONTENT_MAPPING.md
├── TESTING_PLAN.md
├── DEPLOYMENT.md
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
│   └── session.html
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

La estructura puede ajustarse después de pruebas, siempre que el cambio se documente.

---

## Datos

### Fuente principal

```text
knowledge/data/unit-content.json
```

### Copia para el sitio

```text
docs/data/unit-content.json
```

La copia se utiliza para evitar problemas de rutas y publicación.

No debe editarse independientemente.

---

## Sincronización de datos

Desde la raíz del repositorio:

```bash
mkdir -p docs/data
cp knowledge/data/unit-content.json docs/data/unit-content.json
```

Validar:

```bash
python -m json.tool knowledge/data/unit-content.json
python -m json.tool docs/data/unit-content.json
```

Comparar:

```bash
diff knowledge/data/unit-content.json docs/data/unit-content.json
```

---

## Ejecución local

Desde la raíz:

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

No se recomienda abrir los archivos mediante `file://` cuando se utilice `fetch`.

---

## Desarrollo por entregas

### Entrega 0

Preparación técnica:

- carpetas;
- archivos base;
- JSON;
- servidor local;
- estilos iniciales.

### Entrega 1

Estructura mínima:

- inicio;
- navegación;
- momentos;
- privacidad;
- alcance;
- 404.

### Entrega 2

Contenido pedagógico:

- cuatro momentos;
- sesiones;
- expresiones;
- alternativas desconectadas.

### Entrega 3

Recursos:

- glosario;
- preguntas;
- mensajes;
- prompts;
- evaluación;
- guía docente.

### Entrega 4

Cierre:

- contexto;
- transferencia;
- autoría;
- pruebas;
- publicación.

Consultar:

```text
docs/IMPLEMENTATION_PLAN.md
```

---

## Convenciones

### Archivos

Utilizar:

- minúsculas;
- guiones;
- nombres descriptivos.

Ejemplos:

```text
key-expressions.html
restorative-questions.html
session-page.js
```

### Código

Se recomienda:

- código técnico en inglés;
- contenido visible en español o bilingüe;
- `camelCase` en JavaScript;
- clases CSS descriptivas;
- HTML semántico.

### Identificadores

Ejemplos:

```text
main-content
mobile-menu
filter-status
session-content
```

---

## HTML

Cada página debe incluir:

- `<!doctype html>`;
- idioma;
- codificación;
- viewport;
- título;
- descripción;
- enlace para saltar;
- encabezado;
- navegación;
- `main`;
- pie;
- scripts necesarios.

Ejemplo:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Voces que Restauran</title>
  </head>

  <body>
    <a class="skip-link" href="#main-content">
      Saltar al contenido principal
    </a>

    <header class="site-header">
      <!-- Identidad y navegación -->
    </header>

    <main id="main-content">
      <h1>Voces que Restauran</h1>
    </main>

    <footer class="site-footer">
      <!-- Alcance, privacidad y autoría -->
    </footer>
  </body>
</html>
```

---

## CSS

Los estilos se distribuirán en:

```text
base.css
layout.css
components.css
utilities.css
print.css
```

Debe evitarse:

- estilos en línea sin necesidad;
- nombres basados únicamente en colores;
- eliminación del foco;
- valores inconsistentes;
- duplicación excesiva.

---

## JavaScript

JavaScript puede utilizarse para:

- menú móvil;
- carga local de JSON;
- filtros;
- búsqueda;
- copiar;
- mensajes de estado;
- plantilla de sesión.

No debe utilizarse para:

- seguimiento;
- almacenamiento;
- cuentas;
- envío de datos;
- conexión directa con IA;
- análisis de estudiantes.

---

## Mejora progresiva

El contenido esencial debe seguir siendo comprensible cuando JavaScript falle.

Las advertencias de:

- privacidad;
- alcance;
- protección;
- uso de IA;

no deben depender únicamente de JavaScript.

---

## Privacidad

El sitio no debe utilizar:

```text
localStorage
sessionStorage
cookies
IndexedDB
analítica
píxeles
formularios con envío
carga de archivos
APIs externas
identificadores persistentes
```

Debe utilizar:

- casos ficticios;
- datos generales;
- contenido previamente revisado.

---

## Accesibilidad

Cada página debe:

- declarar idioma;
- utilizar HTML semántico;
- tener un solo `h1`;
- mantener encabezados ordenados;
- funcionar con teclado;
- mostrar foco;
- permitir zoom;
- funcionar en móvil;
- incluir alternativas de imágenes;
- no depender del color;
- respetar movimiento reducido.

Consultar:

```text
ACCESSIBILITY.md
docs/TESTING_PLAN.md
```

---

## Contenido

Todo contenido debe:

- tener una fuente;
- responder a una historia;
- ser apropiado para la edad;
- utilizar lenguaje claro;
- conservar advertencias;
- mantener coherencia bilingüe;
- evitar datos personales.

Consultar:

```text
CONTENT_GUIDELINES.md
docs/CONTENT_MAPPING.md
```

---

## Componentes

Los componentes previstos están documentados en:

```text
docs/COMPONENT_INVENTORY.md
```

No se debe crear un componente nuevo sin revisar:

1. qué necesidad resuelve;
2. dónde se utiliza;
3. cómo funciona con teclado;
4. qué datos utiliza;
5. cómo se adapta a móvil;
6. cómo maneja errores;
7. si ya existe uno equivalente.

---

## Pruebas

Antes de considerar terminada una página, comprobar:

- funcionalidad;
- teclado;
- foco;
- móvil;
- zoom;
- privacidad;
- contenido;
- datos;
- errores;
- impresión cuando corresponda.

Consultar:

```text
docs/TESTING_PLAN.md
```

---

## Despliegue

La publicación inicial utilizará:

```text
GitHub Pages
main
/docs
```

Las instrucciones completas se encuentran en:

```text
docs/DEPLOYMENT.md
```

---

## GitHub Pages

Configuración prevista:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ /docs
```

La URL definitiva debe confirmarse después del primer despliegue.

---

## Flujo recomendado para un cambio

```text
Identificar necesidad
        ↓
Revisar historia de usuario
        ↓
Revisar fuente pedagógica
        ↓
Actualizar contenido
        ↓
Actualizar JSON cuando aplique
        ↓
Actualizar interfaz
        ↓
Probar
        ↓
Actualizar documentación
        ↓
Registrar en changelog
```

---

## Flujo para modificar una sesión

1. actualizar:

```text
knowledge/moments/MOMENT_X.md
```

2. actualizar:

```text
knowledge/data/unit-content.json
```

3. validar el JSON;

4. copiar:

```text
docs/data/unit-content.json
```

5. probar la sesión;

6. actualizar:

```text
CHANGELOG.md
```

cuando el cambio sea significativo.

---

## Flujo para modificar una página

Revisar:

```text
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
docs/CONTENT_MAPPING.md
USER_STORIES.md
```

Después:

- modificar;
- probar;
- actualizar el estado de la página;
- registrar decisiones cuando corresponda.

---

## Flujo para modificar un componente

Revisar:

```text
DESIGN_SYSTEM.md
docs/COMPONENT_INVENTORY.md
ACCESSIBILITY.md
```

Después:

- modificar HTML;
- modificar CSS;
- modificar JavaScript cuando sea necesario;
- probar estados;
- probar teclado;
- probar móvil;
- actualizar el inventario.

---

## Funciones prohibidas

No implementar en esta fase:

- inicio de sesión;
- cuentas;
- perfiles;
- progreso individual;
- registro de emociones;
- envío de casos;
- chat;
- panel administrativo;
- puntuación de conducta;
- rankings;
- recomendaciones disciplinarias;
- análisis facial;
- grabación;
- almacenamiento;
- conexión automática con IA.

---

## Documentación y sitio publicado

Los archivos Markdown dentro de `docs/` pueden ser accesibles públicamente.

Por tanto:

- no incluir datos personales;
- no incluir credenciales;
- no incluir información institucional reservada;
- no utilizar ejemplos reales;
- no añadir rutas privadas.

---

## Definición de terminado

Una página se considera terminada cuando:

- responde a una historia;
- tiene fuente;
- funciona;
- maneja errores;
- funciona con teclado;
- funciona en móvil;
- no recopila datos;
- fue revisada;
- está documentada.

Un componente se considera terminado cuando:

- todos sus estados fueron revisados;
- tiene nombre accesible;
- funciona con teclado;
- se adapta;
- no introduce riesgos;
- fue probado en sus páginas principales.

---

## Próximo paso

Después de completar la documentación técnica, se debe:

1. actualizar `DESIGN_DECISIONS.md`;
2. actualizar `ROADMAP.md`;
3. actualizar `CHANGELOG.md`;
4. crear la estructura técnica de la Entrega 0;
5. comenzar con:

```text
docs/index.html
docs/404.html
docs/css/base.css
docs/css/layout.css
docs/css/components.css
docs/css/utilities.css
docs/css/print.css
docs/js/main.js
docs/js/navigation.js
docs/js/data-loader.js
```

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- cambie la estructura;
- cambie el estado del desarrollo;
- cambie la ejecución local;
- cambie el despliegue;
- se añada una herramienta;
- se adopte una dependencia;
- cambie el flujo de datos;
- se publique una versión.

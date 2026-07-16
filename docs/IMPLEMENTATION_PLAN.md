# Plan de implementación

## Propósito

Este documento convierte la arquitectura pedagógica, informativa y técnica de **Voces que Restauran** en tareas concretas de desarrollo.

El plan organiza:

- entregas;
- prioridades;
- dependencias;
- tareas;
- validaciones;
- criterios de finalización;
- riesgos;
- actualizaciones documentales.

Debe utilizarse junto con:

```text
PROJECT_BRIEF.md
ROADMAP.md
USER_STORIES.md
DESIGN_SYSTEM.md
DESIGN_DECISIONS.md
CONTENT_GUIDELINES.md
PRIVACY.md
ACCESSIBILITY.md
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
docs/TECHNICAL_ARCHITECTURE.md
```

---

## Objetivo de implementación

Construir una primera versión funcional del recurso web que permita:

- comprender el proyecto;
- explorar los cuatro momentos;
- consultar sesiones;
- acceder a recursos bilingües;
- consultar orientaciones docentes;
- revisar privacidad y alcance;
- utilizar el contenido desde dispositivos móviles;
- navegar con teclado;
- imprimir recursos;
- funcionar sin cuentas ni recopilación de datos.

---

## Principios de trabajo

### Construir por entregas

No se desarrollará todo el sitio simultáneamente.

Cada entrega debe producir una versión:

- funcional;
- revisable;
- documentada;
- accesible;
- coherente;
- publicable.

### Priorizar contenido esencial

Primero se implementarán:

- estructura;
- navegación;
- privacidad;
- alcance;
- momentos;
- sesiones;
- contenido lingüístico prioritario.

Después se incorporarán:

- filtros;
- búsquedas;
- recursos descargables;
- mejoras visuales;
- documentación adicional.

### Probar desde el inicio

La accesibilidad, privacidad y adaptación móvil no deben dejarse para la última fase.

### No añadir funciones fuera del alcance

Una función no debe implementarse únicamente porque sea técnicamente posible.

Toda función debe relacionarse con:

- una historia de usuario;
- una página;
- un componente;
- una decisión documentada.

---

## Definición de entregas

La implementación se organiza en cuatro entregas.

```text
Entrega 0
Preparación técnica
        ↓
Entrega 1
Estructura mínima funcional
        ↓
Entrega 2
Contenido pedagógico principal
        ↓
Entrega 3
Recursos, interacción y guía docente
        ↓
Entrega 4
Pruebas, publicación y documentación
```

---

# Entrega 0 — Preparación técnica

## Objetivo

Preparar la estructura mínima del proyecto antes de construir páginas.

## Estado

```text
No iniciada
```

## Dependencias

- arquitectura técnica aprobada;
- estructura de carpetas definida;
- decisiones pendientes resueltas;
- JSON validado.

---

## Tareas de estructura

Crear:

```text
docs/
├── index.html
├── 404.html
├── about/
├── language/
├── moments/
├── resources/
├── teacher-guide/
├── assets/
│   ├── icons/
│   ├── images/
│   └── documents/
├── css/
├── js/
└── data/
```

Crear inicialmente:

```text
docs/css/base.css
docs/css/layout.css
docs/css/components.css
docs/css/utilities.css
docs/css/print.css
docs/js/main.js
docs/js/navigation.js
docs/js/data-loader.js
docs/data/unit-content.json
```

---

## Tareas de datos

1. Validar:

```bash
python -m json.tool knowledge/data/unit-content.json
```

2. Crear la copia:

```bash
cp knowledge/data/unit-content.json docs/data/unit-content.json
```

3. Validar la copia:

```bash
python -m json.tool docs/data/unit-content.json
```

4. Comprobar que:

- existen cuatro momentos;
- existen dieciséis sesiones;
- la duración total es de treinta y dos horas;
- los identificadores son únicos;
- no existen datos personales.

---

## Tareas de HTML inicial

Crear una plantilla mínima con:

- declaración de documento;
- idioma;
- metadatos;
- título;
- enlace para saltar;
- encabezado;
- navegación;
- contenido principal;
- pie de página;
- scripts.

Plantilla de referencia:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Recurso educativo interdisciplinario sobre convivencia, cultura de paz, inglés y tecnología."
    />
    <title>Voces que Restauran</title>

    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/layout.css" />
    <link rel="stylesheet" href="css/components.css" />
    <link rel="stylesheet" href="css/utilities.css" />
    <link rel="stylesheet" href="css/print.css" media="print" />
  </head>

  <body>
    <a class="skip-link" href="#main-content">
      Saltar al contenido principal
    </a>

    <header class="site-header">
      <a href="index.html">Voces que Restauran</a>

      <nav aria-label="Navegación principal">
        <!-- Enlaces principales -->
      </nav>
    </header>

    <main id="main-content">
      <h1>Voces que Restauran</h1>
    </main>

    <footer class="site-footer">
      <p>
        Recurso educativo en fase de prototipo. No recopila datos ni funciona
        como canal de denuncias.
      </p>
    </footer>

    <script type="module" src="js/main.js"></script>
  </body>
</html>
```

---

## Tareas de estilos base

Definir:

- variables;
- tipografía;
- colores iniciales;
- foco;
- enlaces;
- botones;
- contenedores;
- espaciado;
- diseño móvil;
- movimiento reducido.

---

## Validaciones de la entrega 0

- la estructura existe;
- el sitio abre mediante servidor local;
- los archivos CSS cargan;
- JavaScript carga sin errores;
- el JSON es válido;
- el enlace para saltar funciona;
- el idioma está declarado;
- no existen servicios externos.

---

## Criterio de finalización

La entrega está terminada cuando puede abrirse una página inicial mínima desde:

```text
http://localhost:8000/docs/
```

sin errores críticos.

---

# Entrega 1 — Estructura mínima funcional

## Objetivo

Construir las páginas esenciales y la navegación básica.

## Estado

```text
No iniciada
```

## Historias prioritarias

```text
US-001
US-002
US-007
US-014
US-016
US-017
US-018
```

---

## Páginas de la entrega

```text
docs/index.html
docs/moments/index.html
docs/about/index.html
docs/about/scope.html
docs/teacher-guide/privacy.html
docs/404.html
```

---

## Componentes de la entrega

```text
CP-001 Enlace para saltar
CP-002 Encabezado global
CP-003 Navegación principal
CP-004 Menú móvil
CP-005 Migas de navegación
CP-006 Pie de página
CP-007 Aviso de prototipo
CP-008 Aviso de privacidad
CP-009 Encabezado de página
CP-010 Tarjeta de acceso
CP-011 Tarjeta de momento
CP-027 Mensaje de estado
CP-037 Estado vacío
CP-038 Estado de error
```

---

## Tareas de la página de inicio

- presentar nombre;
- presentar descripción;
- mostrar pregunta orientadora;
- incluir aviso de prototipo;
- incluir acceso a momentos;
- incluir acceso al lenguaje;
- incluir acceso a guía docente;
- incluir alcance;
- incluir privacidad;
- incluir autoría breve.

---

## Tareas de navegación

- construir navegación de escritorio;
- construir menú móvil;
- gestionar `aria-expanded`;
- permitir cierre mediante `Escape`;
- mostrar foco;
- indicar página actual;
- probar rutas relativas;
- incluir enlace de salto.

---

## Tareas de la página de momentos

- cargar cuatro momentos;
- mostrar nombre;
- mostrar duración;
- mostrar propósito;
- mostrar número de sesiones;
- enlazar páginas de momento;
- manejar error de datos.

---

## Tareas de alcance

La página debe explicar que el recurso:

- es educativo;
- es un prototipo;
- no recopila datos;
- no gestiona casos;
- no diagnostica;
- no recomienda sanciones;
- no sustituye rutas institucionales.

---

## Tareas de privacidad

- presentar reglas para estudiantes;
- presentar orientaciones docentes;
- explicar casos ficticios;
- explicar participación voluntaria;
- explicar límites de confidencialidad;
- evitar formularios.

---

## Tareas de la página 404

- mostrar mensaje comprensible;
- incluir enlace al inicio;
- incluir enlace a momentos;
- conservar navegación básica;
- no culpar al usuario.

---

## Validaciones de la entrega 1

### Funcionales

- todos los enlaces funcionan;
- el menú móvil abre y cierra;
- las tarjetas enlazan correctamente;
- los errores son comprensibles.

### Accesibilidad

- navegación completa con teclado;
- foco visible;
- encabezados ordenados;
- idioma declarado;
- zoom de 200 %;
- ancho de 320 px;
- no se depende del color.

### Privacidad

- no existen formularios;
- no existe almacenamiento;
- no existe analítica;
- no existen datos estudiantiles.

---

## Criterio de finalización

Un usuario debe poder:

1. abrir el inicio;
2. comprender el propósito;
3. acceder a los momentos;
4. consultar privacidad;
5. consultar alcance;
6. navegar desde móvil y teclado.

---

# Entrega 2 — Contenido pedagógico principal

## Objetivo

Implementar los cuatro momentos y una estructura funcional para las sesiones.

## Estado

```text
No iniciada
```

## Historias prioritarias

```text
US-002
US-003
US-004
US-008
US-009
```

---

## Páginas de la entrega

```text
docs/moments/moment-1.html
docs/moments/moment-2.html
docs/moments/moment-3.html
docs/moments/moment-4.html
docs/moments/session.html
docs/language/index.html
docs/language/key-expressions.html
```

---

## Componentes de la entrega

```text
CP-012 Tarjeta de sesión
CP-013 Resumen de sesión
CP-014 Secuencia de pasos
CP-015 Lista de materiales
CP-016 Producto esperado
CP-017 Evidencia de aprendizaje
CP-018 Alternativa desconectada
CP-020 Tarjeta bilingüe
CP-029 Navegación anterior y siguiente
CP-042 Etiqueta de idioma
CP-043 Etiqueta de duración
CP-044 Etiqueta de público
```

---

## Tareas de páginas de momento

Por cada momento:

- presentar nombre;
- presentar duración;
- presentar pregunta orientadora;
- presentar propósito;
- mostrar sesiones;
- mostrar productos;
- mostrar evidencias;
- incluir privacidad;
- incluir alternativa desconectada;
- incluir navegación anterior y siguiente.

---

## Tareas de la plantilla de sesión

La plantilla debe:

- leer el parámetro `id`;
- validar el parámetro;
- localizar la sesión;
- mostrar información;
- manejar sesión inexistente;
- mostrar alternativa;
- mostrar privacidad;
- mostrar contenido docente y estudiantil de forma diferenciada.

---

## Decisión previa obligatoria

Antes de programar la plantilla debe resolverse:

> ¿La vista docente y la vista estudiantil estarán en la misma página o en páginas diferentes?

La decisión debe registrarse en:

```text
DESIGN_DECISIONS.md
```

---

## Tareas de expresiones clave

- cargar expresiones;
- organizarlas por función;
- mostrar inglés y español;
- marcar idioma;
- permitir consulta sin escribir información;
- funcionar sin filtro cuando JavaScript no esté disponible.

---

## Validaciones de la entrega 2

- existen cuatro páginas de momento;
- las dieciséis sesiones pueden consultarse;
- los identificadores se manejan correctamente;
- una sesión inexistente muestra error;
- el contenido coincide con JSON;
- las expresiones están correctamente marcadas;
- la alternativa desconectada es visible;
- la información docente está diferenciada;
- no se registran visitas o progreso.

---

## Criterio de finalización

Un estudiante debe poder recorrer los cuatro momentos y consultar cualquier sesión.

Un docente debe poder localizar:

- propósito;
- materiales;
- secuencia;
- evidencias;
- evaluación;
- medidas de protección.

---

# Entrega 3 — Lenguaje, recursos y guía docente

## Objetivo

Completar los principales recursos pedagógicos e interacciones locales.

## Estado

```text
No iniciada
```

## Historias relacionadas

```text
US-004
US-005
US-006
US-008
US-010
US-011
US-012
US-013
```

---

## Páginas de lenguaje

```text
docs/language/glossary.html
docs/language/restorative-questions.html
docs/language/peace-messages.html
```

---

## Páginas de recursos

```text
docs/resources/index.html
docs/resources/printables.html
docs/resources/templates.html
docs/resources/prompts.html
docs/resources/offline-alternatives.html
```

---

## Páginas de guía docente

```text
docs/teacher-guide/index.html
docs/teacher-guide/implementation.html
docs/teacher-guide/assessment.html
docs/teacher-guide/accessibility.html
docs/teacher-guide/responsible-ai.html
```

---

## Componentes de la entrega

```text
CP-019 Alerta docente
CP-021 Pregunta restaurativa
CP-022 Mensaje de paz
CP-023 Filtro
CP-024 Búsqueda local
CP-025 Limpiar filtros
CP-026 Copiar texto
CP-028 Acordeón accesible
CP-031 Tabla responsive
CP-032 Lista de recursos
CP-033 Tarjeta de recurso
CP-034 Plantilla de prompt
CP-035 Lista de verificación
CP-036 Rúbrica accesible
CP-041 Enlace de descarga
CP-045 Aviso de IA
CP-046 Aviso de ruta institucional
CP-048 Versión imprimible
```

---

## Tareas del glosario

- presentar términos;
- añadir filtro;
- añadir búsqueda local;
- mostrar número de resultados;
- mostrar estado vacío;
- limpiar filtros;
- no almacenar búsquedas.

---

## Tareas de preguntas restaurativas

- organizar por categorías;
- incluir propósito;
- incluir advertencias;
- impedir la interpretación como interrogatorio;
- no incluir campos de respuesta;
- enlazar rutas docentes.

---

## Tareas de mensajes de paz

- mostrar mensajes bilingües;
- permitir copia local;
- anunciar confirmación;
- manejar error de portapapeles;
- recordar revisión previa a publicación.

---

## Tareas de prompts

- mostrar contexto;
- mostrar plantilla;
- mostrar restricciones;
- incluir ejemplo ficticio;
- permitir copiar;
- advertir sobre datos;
- explicar revisión humana.

---

## Tareas de evaluación

- presentar enfoque formativo;
- mostrar evidencias;
- mostrar rúbricas;
- crear versión responsive;
- crear versión imprimible;
- evitar ejemplos con nombres.

---

## Tareas de recursos imprimibles

- organizar por sesión;
- indicar formato;
- indicar propósito;
- incluir privacidad;
- comprobar impresión;
- evitar fondos intensos.

---

## Validaciones de la entrega 3

- filtros funcionan con teclado;
- búsquedas no se almacenan;
- botones de copia anuncian resultado;
- acordeones comunican estado;
- tablas funcionan en móvil;
- recursos descargables tienen nombres claros;
- avisos de IA son visibles;
- privacidad aparece antes de prompts;
- rúbricas pueden imprimirse.

---

## Criterio de finalización

El recurso debe contar con:

- apoyo lingüístico;
- preguntas restaurativas;
- mensajes;
- prompts;
- evaluación;
- recursos docentes;
- alternativas desconectadas;
- versiones imprimibles.

---

# Entrega 4 — Contexto, pruebas y publicación

## Objetivo

Completar la información institucional, validar el recurso y publicarlo.

## Estado

```text
No iniciada
```

---

## Páginas finales

```text
docs/about/context.html
docs/about/korea-transfer.html
docs/about/authorship.html
```

---

## Tareas de contenido

- presentar contexto institucional;
- presentar población sin datos identificables;
- presentar transferencia desde Corea;
- explicar Vibe Coding;
- presentar autoría;
- reconocer herramientas;
- aclarar estado del proyecto.

---

## Pruebas funcionales

Comprobar:

- enlaces;
- rutas;
- menús;
- filtros;
- copia;
- parámetros;
- carga de JSON;
- errores;
- descargas;
- impresión;
- página 404.

---

## Pruebas de accesibilidad

Comprobar:

- navegación completa con teclado;
- enlace de salto;
- foco visible;
- orden de foco;
- encabezados;
- idioma;
- nombres accesibles;
- textos alternativos;
- contraste;
- zoom;
- lector de pantalla;
- movimiento reducido;
- móvil;
- impresión.

---

## Pruebas de privacidad

Comprobar ausencia de:

```text
localStorage
sessionStorage
cookies
IndexedDB
analítica
formularios con envío
APIs externas
identificadores
datos personales
```

---

## Pruebas de contenido

Comprobar:

- coherencia con Markdown;
- coherencia con JSON;
- ortografía;
- traducciones;
- tono;
- lenguaje restaurativo;
- casos ficticios;
- advertencias;
- consistencia terminológica.

---

## Pruebas en dispositivos

Probar como mínimo en:

- teléfono Android;
- Chromebook;
- computador;
- Chrome;
- Edge;
- Firefox.

---

## Publicación

Configurar GitHub Pages mediante:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ /docs
```

Después:

- confirmar URL;
- probar rutas públicas;
- probar 404;
- comprobar recursos;
- revisar consola;
- revisar móvil;
- actualizar README.

---

## Criterio de finalización

La entrega termina cuando:

- el recurso está publicado;
- no existen errores críticos;
- pasa las comprobaciones básicas;
- el alcance es visible;
- la privacidad es clara;
- la documentación está actualizada;
- la versión se registra en el changelog.

---

# Matriz de dependencias

| Tarea | Depende de |
|---|---|
| Crear inicio | Brief, mapa del sitio y sistema de diseño |
| Crear momentos | JSON y documentos de momentos |
| Crear sesiones | Decisión sobre plantilla y vistas |
| Crear expresiones | Contenido lingüístico estructurado |
| Crear filtros | Componentes y datos |
| Crear guía docente | Marco pedagógico y base de conocimiento |
| Crear rúbricas | Documentación de evaluación |
| Crear imprimibles | Plantillas pedagógicas y estilos de impresión |
| Publicar | Pruebas y estructura completa |
| Implementar con estudiantes | Recurso probado y preparación docente |

---

# Convención de tareas

Las tareas pueden identificarse mediante:

```text
SETUP-001
PAGE-001
COMP-001
DATA-001
A11Y-001
PRIV-001
TEST-001
DOC-001
DEPLOY-001
```

Ejemplo:

```text
PAGE-001 — Crear página de inicio
COMP-001 — Crear encabezado global
A11Y-001 — Implementar enlace para saltar
DATA-001 — Copiar y validar JSON
```

---

# Plantilla de tarea

```text
ID:

Título:

Entrega:

Estado:

Prioridad:

Descripción:

Historia relacionada:

Página relacionada:

Componente relacionado:

Dependencias:

Criterios de aceptación:

Pruebas:

Privacidad:

Accesibilidad:

Documentación que debe actualizarse:
```

---

# Definición de terminado

Una tarea se considera terminada cuando:

- cumple sus criterios;
- funciona con teclado;
- funciona en móvil;
- no recopila datos;
- maneja errores;
- está revisada;
- no contradice documentación;
- actualiza archivos relacionados;
- no produce errores críticos en consola.

Una página se considera terminada cuando:

- tiene propósito;
- tiene contenido;
- tiene navegación;
- tiene foco visible;
- tiene privacidad cuando corresponde;
- funciona con zoom;
- maneja estados;
- puede imprimirse cuando corresponde.

Una entrega se considera terminada cuando:

- todas sus tareas prioritarias están completadas;
- sus historias principales pueden verificarse;
- se realizaron pruebas;
- se actualizó el changelog;
- no existen bloqueos críticos.

---

# Riesgos de implementación

| Riesgo | Respuesta |
|---|---|
| Intentar construir todo simultáneamente | Trabajar por entregas |
| Añadir funciones no documentadas | Relacionar cada función con una historia |
| Copiar contenido manualmente de forma inconsistente | Utilizar datos estructurados |
| Dependencia excesiva de JavaScript | Mantener HTML significativo |
| Olvidar accesibilidad | Probar en cada entrega |
| Desactualizar JSON | Aplicar flujo de sincronización |
| Publicar recursos incompletos | Utilizar estados de no disponibilidad |
| Confundir públicos | Diferenciar contenido docente y estudiantil |
| Exponer información | Utilizar contenido ficticio |
| Diseñar solo para escritorio | Comenzar desde móvil |

---

# Actualización documental por entrega

## Entrega 0

Actualizar:

```text
DESIGN_DECISIONS.md
CHANGELOG.md
docs/TECHNICAL_ARCHITECTURE.md
```

## Entrega 1

Actualizar:

```text
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
CHANGELOG.md
```

## Entrega 2

Actualizar:

```text
USER_STORIES.md
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
CHANGELOG.md
```

## Entrega 3

Actualizar:

```text
CONTENT_GUIDELINES.md
ACCESSIBILITY.md
PRIVACY.md
CHANGELOG.md
```

## Entrega 4

Actualizar:

```text
README.md
ROADMAP.md
CHANGELOG.md
```

---

# Próximo paso inmediato

Antes de crear el primer archivo HTML se debe:

1. documentar el esquema del JSON;
2. mapear las fuentes pedagógicas con las páginas;
3. registrar las decisiones técnicas;
4. definir las pruebas;
5. preparar la estructura de `docs/`.

---

## Criterio de actualización

Este plan debe actualizarse cuando:

- cambia una entrega;
- se completa una tarea;
- aparece un bloqueo;
- cambia una prioridad;
- se modifica una historia;
- se cambia una decisión técnica;
- se publica una versión;
- una prueba requiere rediseño.

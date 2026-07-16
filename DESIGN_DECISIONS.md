# Decisiones de diseño

## Propósito

Este documento registra las decisiones estratégicas, pedagógicas, editoriales, técnicas, éticas y de experiencia de usuario de **Voces que Restauran**.

Su función es:

- mantener coherencia;
- evitar decisiones contradictorias;
- conservar el razonamiento del proyecto;
- orientar el desarrollo;
- facilitar revisiones;
- registrar decisiones reemplazadas;
- impedir que funciones futuras se implementen sin aprobación.

---

## Estados de decisión

Cada decisión puede tener uno de estos estados:

```text
Propuesta
Aceptada
En revisión
Reemplazada
Descartada
Pospuesta
```

---

## Categorías

Las decisiones se identifican mediante estos prefijos:

```text
STR — Estratégica
PED — Pedagógica
CNT — Contenido
UX  — Experiencia de usuario
VIS — Diseño visual
TEC — Técnica
DAT — Datos
ACC — Accesibilidad
PRI — Privacidad
AI  — Inteligencia artificial
DEP — Despliegue
DOC — Documentación
```

---

# Decisiones estratégicas

## STR-001 — El producto actual es una unidad didáctica apoyada por un recurso web

**Estado:** Aceptada

### Decisión

El producto actual de **Voces que Restauran** es:

> una unidad didáctica interdisciplinaria apoyada por un recurso web estático, accesible, responsive y sin recopilación de datos personales.

### Razón

El proyecto busca acompañar un proceso pedagógico de cocreación y no construir de inmediato una plataforma institucional.

### Implicaciones

- la unidad didáctica tiene prioridad;
- el recurso web apoya la implementación;
- el sitio no debe presentarse como una aplicación terminada;
- las decisiones técnicas deben responder a necesidades pedagógicas.

---

## STR-002 — La aplicación futura no se construirá antes de la implementación pedagógica

**Estado:** Aceptada

### Decisión

La posible aplicación futura solo podrá evaluarse después de:

1. implementar la unidad;
2. observar la experiencia;
3. analizar los prototipos estudiantiles;
4. identificar necesidades recurrentes;
5. revisar riesgos;
6. definir responsabilidades institucionales;
7. analizar requisitos jurídicos, técnicos y de sostenibilidad.

### Razón

Construir una aplicación antes de comprender las necesidades reales contradice el enfoque de cocreación.

### Implicaciones

```text
future-app/
```

se utilizará únicamente para:

- conceptos;
- escenarios;
- requisitos;
- recomendaciones;
- riesgos;
- posibilidades futuras.

---

## STR-003 — El recurso web será independiente del proyecto doctoral Caukara

**Estado:** Aceptada

### Decisión

**Voces que Restauran** corresponde al producto de transferencia de la experiencia ICT Korea 2026.

No forma parte de la investigación doctoral sobre Caukara.

### Razón

Ambos proyectos tienen propósitos, poblaciones, marcos y productos distintos.

---

# Decisiones pedagógicas

## PED-001 — La unidad tendrá ocho semanas, dieciséis sesiones y treinta y dos horas

**Estado:** Aceptada

### Estructura

| Momento | Horas | Sesiones |
|---|---:|---:|
| Inspirar y conectar | 4 | 2 |
| Comprender | 8 | 4 |
| Aplicar y crear | 12 | 6 |
| Compartir y transformar | 8 | 4 |

### Implicaciones

La documentación, el JSON y la interfaz deben mantener:

```text
4 momentos
16 sesiones
32 horas
```

---

## PED-002 — Se articularán tres áreas

**Estado:** Aceptada

### Áreas

- Inglés;
- Ética, convivencia y ciencias sociales;
- Tecnología e informática.

### Razón

La unidad debe mantener una integración interdisciplinaria manejable.

---

## PED-003 — La población principal será de 11 a 14 años

**Estado:** Aceptada

### Población

Estudiantes de básica secundaria, especialmente:

- sexto;
- séptimo;
- octavo.

### Nivel de inglés

```text
A1–A2
```

### Implicaciones

El contenido debe incluir:

- lenguaje claro;
- ejemplos;
- apoyos visuales;
- expresiones breves;
- traducciones;
- alternativas de participación.

---

## PED-004 — Las actividades utilizarán casos ficticios

**Estado:** Aceptada

### Decisión

Las actividades relacionadas con convivencia, emociones, reparación e IA utilizarán situaciones ficticias.

### Razón

Permite trabajar pedagógicamente sin exponer experiencias reales.

### Implicaciones

No se solicitarán:

- relatos personales;
- nombres;
- conflictos reales;
- información familiar;
- datos disciplinarios.

---

## PED-005 — La participación personal no será obligatoria

**Estado:** Aceptada

### Decisión

Ningún estudiante estará obligado a compartir experiencias, emociones o conflictos propios.

### Implicaciones

Las actividades deben permitir:

- responder mediante ficción;
- participar en grupo;
- dibujar;
- escribir de forma general;
- observar;
- utilizar ejemplos preparados.

---

## PED-006 — El enfoque será restaurativo y no punitivo

**Estado:** Aceptada

### Decisión

El recurso promoverá:

- escucha;
- reconocimiento de perspectivas;
- identificación de efectos;
- responsabilidad;
- reparación;
- prevención;
- construcción de acuerdos.

### No promoverá

- culpabilización automática;
- etiquetamiento;
- rankings;
- sanciones automáticas;
- reconciliación forzada;
- diagnóstico emocional.

---

# Decisiones de contenido

## CNT-001 — `knowledge/` es la fuente pedagógica principal

**Estado:** Aceptada

### Decisión

Los documentos Markdown de:

```text
knowledge/
```

son la fuente pedagógica principal.

### Jerarquía

```text
knowledge/*.md
        ↓
knowledge/data/unit-content.json
        ↓
docs/data/unit-content.json
        ↓
interfaz
```

### Implicaciones

No se debe corregir únicamente la interfaz cuando existe una fuente anterior.

---

## CNT-002 — Se utilizará una capa estructurada en JSON

**Estado:** Aceptada

### Archivo principal

```text
knowledge/data/unit-content.json
```

### Función

Estructurar contenido reutilizable para:

- momentos;
- sesiones;
- lenguaje;
- evaluación;
- recursos;
- metadatos.

---

## CNT-003 — La interfaz utilizará una copia del JSON dentro de `docs/`

**Estado:** Aceptada

### Archivo público

```text
docs/data/unit-content.json
```

### Razón

Evitar problemas de rutas y publicación mediante GitHub Pages.

### Regla

La copia no debe editarse independientemente.

### Flujo

```text
Actualizar Markdown
        ↓
Actualizar JSON principal
        ↓
Validar
        ↓
Copiar a docs/data/
        ↓
Probar
```

---

## CNT-004 — El contenido esencial de privacidad no dependerá de JavaScript

**Estado:** Aceptada

### Razón

Los avisos de protección deben permanecer visibles aunque falle la carga de datos.

### Implicaciones

Los siguientes contenidos deben escribirse directamente en HTML cuando corresponda:

- aviso de prototipo;
- privacidad;
- alcance;
- uso responsable de IA;
- rutas institucionales;
- participación voluntaria.

---

## CNT-005 — Todo contenido publicado debe tener una fuente identificable

**Estado:** Aceptada

### Documento de referencia

```text
docs/CONTENT_MAPPING.md
```

### Implicaciones

Toda página debe poder relacionarse con:

- una fuente;
- una historia de usuario;
- uno o varios componentes;
- una responsabilidad de actualización.

---

# Decisiones de experiencia de usuario

## UX-001 — La navegación principal tendrá seis entradas

**Estado:** Aceptada

### Navegación

```text
Inicio
Momentos
Lenguaje
Recursos
Guía docente
Acerca del proyecto
```

### Razón

Esta estructura responde a las principales necesidades de estudiantes, docentes y visitantes.

---

## UX-002 — La navegación evitará menús profundos

**Estado:** Aceptada

### Decisión

La primera versión no utilizará menús multinivel complejos.

### Razón

Mejora:

- comprensión;
- uso móvil;
- navegación con teclado;
- mantenimiento.

---

## UX-003 — Se diferenciará contenido estudiantil y docente

**Estado:** Aceptada con implementación por validar

### Decisión inicial

Las páginas de sesión presentarán contenido estudiantil y docente dentro de la misma página, mediante secciones claramente identificadas.

### Razón

Evita:

- duplicación de páginas;
- rutas adicionales;
- mantenimiento paralelo.

### Condiciones

- el contenido docente debe estar claramente marcado;
- no debe confundirse con instrucciones estudiantiles;
- debe poder enlazarse mediante anclas;
- puede utilizar `details` y `summary` para contenido complementario, no para ocultar alertas esenciales.

### Revisión

Esta decisión debe probarse durante la Entrega 2.

Si genera confusión, podrá reemplazarse por páginas separadas.

---

## UX-004 — Las sesiones utilizarán inicialmente una plantilla dinámica

**Estado:** Aceptada para prototipo

### Ruta prevista

```text
docs/moments/session.html?id=01
```

### Razón

Permite:

- evitar dieciséis archivos duplicados;
- centralizar el renderizado;
- reutilizar el JSON;
- simplificar mantenimiento.

### Condiciones

- manejar parámetros inválidos;
- mostrar errores claros;
- mantener contenido alternativo;
- comprobar accesibilidad;
- probar en GitHub Pages.

### Alternativa

Si la plantilla dinámica genera barreras, se crearán páginas estáticas por sesión.

---

## UX-005 — El contenido esencial debe funcionar sin interacciones complejas

**Estado:** Aceptada

### Implicaciones

La primera versión no dependerá de:

- modales;
- gestos;
- drag and drop;
- hover;
- animaciones;
- componentes personalizados complejos.

---

# Decisiones visuales

## VIS-001 — Se utilizará un sistema visual calmado y no punitivo

**Estado:** Aceptada

### Características

- tono acogedor;
- jerarquías claras;
- espacios amplios;
- advertencias informativas;
- colores con suficiente contraste;
- ausencia de iconografía disciplinaria.

---

## VIS-002 — Se utilizarán fuentes del sistema

**Estado:** Aceptada

### Implementación

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  sans-serif;
```

### Razón

- mejor rendimiento;
- menor dependencia;
- ausencia de servicios externos;
- privacidad;
- disponibilidad.

---

## VIS-003 — Los recursos gráficos se almacenarán localmente

**Estado:** Aceptada

### Rutas

```text
docs/assets/icons/
docs/assets/images/
```

### Razón

Evitar dependencias remotas y mantener control sobre accesibilidad, permisos y rendimiento.

---

# Decisiones técnicas

## TEC-001 — El recurso utilizará HTML, CSS y JavaScript sin framework

**Estado:** Aceptada

### Razón

El alcance no justifica:

- React;
- Vue;
- Angular;
- jQuery;
- Bootstrap;
- Tailwind;
- sistemas complejos de construcción.

### Beneficios

- simplicidad;
- mantenimiento;
- rendimiento;
- aprendizaje;
- menor dependencia.

---

## TEC-002 — El sitio se implementará desde `docs/`

**Estado:** Aceptada

### Razón

GitHub Pages puede publicar directamente desde:

```text
main
/docs
```

---

## TEC-003 — Las secciones principales utilizarán páginas HTML estáticas

**Estado:** Aceptada

### Ejemplos

```text
docs/index.html
docs/moments/index.html
docs/language/index.html
docs/resources/index.html
docs/teacher-guide/index.html
docs/about/index.html
```

### Razón

Mantener navegación predecible, enlaces directos y contenido disponible.

---

## TEC-004 — JavaScript se utilizará como mejora progresiva

**Estado:** Aceptada

### Puede utilizarse para

- menú móvil;
- carga de JSON;
- filtros;
- búsqueda local;
- copiar texto;
- mensajes de estado;
- plantilla de sesión.

### No debe utilizarse para

- ocultar toda la estructura;
- recopilar información;
- crear cuentas;
- transmitir respuestas;
- conectar automáticamente con IA.

---

## TEC-005 — El código se implementará mediante Codex conectado al repositorio

**Estado:** Aceptada

### Decisión

La implementación técnica se realizará principalmente en Codex, conectado al repositorio de GitHub.

### Función de esta conversación

Aquí se continuará con:

- decisiones pedagógicas;
- alcance;
- experiencia de usuario;
- revisión de contenido;
- revisión visual;
- criterios de aceptación;
- evaluación de resultados.

### Función de Codex

Codex se utilizará para:

- crear HTML;
- crear CSS;
- crear JavaScript;
- crear carpetas;
- validar JSON;
- ejecutar pruebas;
- revisar rutas;
- corregir errores;
- preparar cambios y commits.

### Flujo

```text
Definir entrega aquí
        ↓
Preparar prompt para Codex
        ↓
Codex implementa
        ↓
Revisar resultado
        ↓
Codex corrige
        ↓
Aprobar y hacer commit
```

---

## TEC-006 — El desarrollo se realizará por entregas

**Estado:** Aceptada

### Entregas

```text
Entrega 0 — Preparación técnica
Entrega 1 — Estructura mínima
Entrega 2 — Contenido pedagógico
Entrega 3 — Recursos e interacción
Entrega 4 — Pruebas y publicación
```

### Razón

Evitar construir todo simultáneamente y facilitar revisión.

---

## TEC-007 — La Entrega 0 no incluirá todo el sitio

**Estado:** Aceptada

### Alcance de la Entrega 0

- estructura de carpetas;
- archivos base;
- página inicial mínima;
- página 404;
- CSS base;
- JavaScript base;
- copia del JSON;
- servidor local;
- validaciones.

### Fuera de esta entrega

- dieciséis sesiones completas;
- filtros;
- rúbricas;
- todos los imprimibles;
- todas las páginas finales;
- aplicación futura.

---

## TEC-008 — El código debe utilizar rutas relativas compatibles con GitHub Pages

**Estado:** Aceptada

### Regla

No utilizar rutas internas que comiencen con `/` salvo que exista una razón comprobada.

### Razón

El sitio se publicará dentro de la subruta del repositorio.

---

## TEC-009 — El contenido del JSON se insertará de forma segura

**Estado:** Aceptada

### Preferir

```javascript
element.textContent = value;
```

### Evitar

```javascript
element.innerHTML = value;
```

cuando los datos provengan del JSON.

---

## TEC-010 — No se añadirán dependencias externas en la primera versión

**Estado:** Aceptada

### Incluye

- sin CDN;
- sin fuentes externas;
- sin scripts externos;
- sin bibliotecas no necesarias;
- sin servicios de terceros.

---

# Decisiones de datos

## DAT-001 — Los identificadores serán estables y predecibles

**Estado:** Aceptada

### Ejemplos

```text
moment-1
session-01
expression-001
message-001
```

### Razón

Facilitar relaciones, enlaces, filtros y mantenimiento.

---

## DAT-002 — Las sesiones utilizarán dos dígitos

**Estado:** Aceptada

### Formato

```text
session-01
...
session-16
```

---

## DAT-003 — El JSON debe validarse antes de copiarse

**Estado:** Aceptada

### Comando

```bash
python -m json.tool knowledge/data/unit-content.json
```

### Validaciones adicionales

- cuatro momentos;
- dieciséis sesiones;
- treinta y dos horas;
- identificadores únicos;
- relaciones válidas;
- ausencia de datos personales.

---

## DAT-004 — No se creará todavía un JSON Schema formal

**Estado:** Pospuesta

### Razón

Debe confirmarse primero la estructura real y estable de `unit-content.json`.

### Posible archivo futuro

```text
docs/data/unit-content.schema.json
```

---

# Decisiones de accesibilidad

## ACC-001 — La accesibilidad se incorporará desde la primera entrega

**Estado:** Aceptada

### Incluye

- enlace para saltar;
- HTML semántico;
- foco visible;
- teclado;
- móvil;
- zoom;
- idioma;
- encabezados;
- movimiento reducido;
- impresión.

---

## ACC-002 — El sitio se diseñará primero para móvil

**Estado:** Aceptada

### Ancho mínimo de referencia

```text
320 px
```

### Pruebas

También se probará en:

- 375 px;
- 768 px;
- 1024 px;
- 1440 px.

---

## ACC-003 — No se dependerá del color

**Estado:** Aceptada

### Implicaciones

El estado, idioma, momento, advertencia o categoría debe comunicarse también mediante:

- texto;
- etiqueta;
- forma;
- título;
- icono acompañado de texto.

---

## ACC-004 — Las tablas complejas tendrán una alternativa responsive

**Estado:** Aceptada

### Opciones

- desplazamiento controlado;
- tarjetas por criterio;
- lista equivalente;
- versión imprimible.

---

## ACC-005 — La interfaz respetará movimiento reducido

**Estado:** Aceptada

### Implicación

No se utilizarán animaciones esenciales para comprender el contenido.

---

# Decisiones de privacidad

## PRI-001 — El sitio no recopilará datos personales

**Estado:** Aceptada

### No utilizar

```text
nombres
correos
teléfonos
fotografías identificables
relatos
conflictos reales
datos emocionales
calificaciones
información disciplinaria
```

---

## PRI-002 — No se utilizará almacenamiento del navegador

**Estado:** Aceptada

### Prohibido en la fase actual

```text
localStorage
sessionStorage
IndexedDB
cookies
```

---

## PRI-003 — No se utilizará analítica

**Estado:** Aceptada

### Decisión

No se añadirán herramientas de:

- seguimiento;
- conteo de visitas;
- píxeles;
- perfiles;
- mapas de calor.

### Razón

No son necesarias para el propósito actual y añadirían riesgos.

---

## PRI-004 — El recurso no funcionará como canal de denuncias

**Estado:** Aceptada

### Implicaciones

No incluir:

- formularios de reporte;
- carga de evidencias;
- envío de testimonios;
- registro de casos;
- seguimiento de situaciones.

---

## PRI-005 — Las rutas institucionales permanecerán fuera de la automatización

**Estado:** Aceptada

### Decisión

El recurso puede recordar que existen rutas institucionales, pero no debe:

- sustituirlas;
- inventarlas;
- automatizarlas;
- diagnosticar cuándo aplican;
- tomar decisiones.

---

# Decisiones sobre inteligencia artificial

## AI-001 — La IA será objeto de aprendizaje crítico

**Estado:** Aceptada

### El contenido debe explicar

- errores;
- invenciones;
- sesgos;
- límites;
- protección de datos;
- revisión humana;
- autoría.

---

## AI-002 — El sitio no se conectará directamente con una IA

**Estado:** Aceptada

### Razón

Una integración requeriría:

- credenciales;
- política de datos;
- control de contenido;
- revisión de edad;
- costos;
- seguridad;
- responsabilidades institucionales.

---

## AI-003 — Los prompts utilizarán situaciones ficticias

**Estado:** Aceptada

### Regla

Los ejemplos no incluirán:

- nombres;
- historias reales;
- cursos;
- datos personales;
- casos identificables.

---

# Decisiones de despliegue

## DEP-001 — El sitio se publicará inicialmente con GitHub Pages

**Estado:** Aceptada

### Configuración prevista

```text
Branch: main
Folder: /docs
```

---

## DEP-002 — El sitio se probará localmente antes de publicar

**Estado:** Aceptada

### Comando

```bash
python -m http.server 8000
```

### URL desde la raíz

```text
http://localhost:8000/docs/
```

---

## DEP-003 — La URL pública no se documentará hasta confirmarla

**Estado:** Aceptada

### Razón

Evitar enlaces incorrectos o temporales.

---

## DEP-004 — Se utilizará `git revert` para revertir publicaciones

**Estado:** Aceptada

### Evitar en la rama principal

```text
git reset --hard
git push --force
```

---

# Decisiones de documentación

## DOC-001 — La documentación previa al desarrollo está completa

**Estado:** Aceptada

### Documentos de `docs/`

```text
SITEMAP.md
PAGE_INVENTORY.md
COMPONENT_INVENTORY.md
TECHNICAL_ARCHITECTURE.md
IMPLEMENTATION_PLAN.md
DATA_SCHEMA.md
CONTENT_MAPPING.md
TESTING_PLAN.md
DEPLOYMENT.md
README.md
```

---

## DOC-002 — Los documentos Markdown dentro de `docs/` se consideran potencialmente públicos

**Estado:** Aceptada

### Implicaciones

No incluir:

- datos personales;
- credenciales;
- información reservada;
- relatos reales;
- rutas privadas.

---

## DOC-003 — Los cambios significativos deben sincronizar documentos relacionados

**Estado:** Aceptada

### Ejemplo

Un cambio de alcance puede requerir actualizar:

```text
PROJECT_BRIEF.md
README.md
ROADMAP.md
USER_STORIES.md
DESIGN_DECISIONS.md
CHANGELOG.md
```

---

# Decisiones pospuestas

## Futuras cuentas de usuario

**Estado:** Pospuesta

Requiere una nueva fase de:

- privacidad;
- seguridad;
- autenticación;
- autorización;
- administración.

---

## Guardado de progreso

**Estado:** Pospuesta

Requeriría identificadores y almacenamiento.

---

## Aplicación institucional

**Estado:** Pospuesta

Depende de resultados de implementación y evaluación.

---

## Panel administrativo

**Estado:** Descartada para el recurso actual

No responde al alcance pedagógico del prototipo.

---

## Análisis de emociones

**Estado:** Descartada

No se utilizará análisis de:

- rostro;
- voz;
- texto;
- comportamiento.

---

## Recomendaciones disciplinarias automáticas

**Estado:** Descartada

Contradice el enfoque humano y restaurativo.

---

# Decisiones pendientes

Las siguientes decisiones deberán resolverse durante el desarrollo:

- estructura real definitiva de `unit-content.json`;
- componentes exactos de la página inicial;
- distribución visual de las páginas de momento;
- comportamiento final del menú móvil;
- formato responsive de las rúbricas;
- necesidad real de búsqueda local;
- formato final de imprimibles;
- generación dinámica o estática de algunos contenidos;
- estrategia de pruebas con usuarios;
- licencia del repositorio y los recursos.

---

## Regla de actualización

Este documento debe actualizarse cuando:

- se toma una decisión nueva;
- una decisión cambia;
- una prueba contradice una decisión;
- se adopta una tecnología;
- cambia el alcance;
- cambia la estrategia de datos;
- se inicia una fase;
- se descarta una función.

Una decisión reemplazada no debe eliminarse. Debe conservarse con el estado:

```text
Reemplazada
```

y enlazar la decisión que la sustituye.

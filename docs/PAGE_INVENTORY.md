# Inventario de páginas

## Propósito

Este documento registra las páginas previstas para el recurso web de **Voces que Restauran**.

El inventario permite identificar:

- propósito de cada página;
- público principal;
- ruta;
- prioridad;
- contenido;
- historias de usuario relacionadas;
- dependencias;
- estado;
- criterios de privacidad;
- criterios de accesibilidad.

Debe utilizarse junto con:

```text
docs/SITEMAP.md
USER_STORIES.md
DESIGN_SYSTEM.md
DESIGN_DECISIONS.md
CONTENT_GUIDELINES.md
PRIVACY.md
ACCESSIBILITY.md
```

---

## Alcance

Este inventario corresponde a la primera versión del recurso web estático.

No incluye páginas para:

- autenticación;
- perfiles;
- cuentas;
- formularios de relatos;
- gestión de casos;
- almacenamiento de respuestas;
- seguimiento individual;
- análisis emocional;
- recomendaciones disciplinarias;
- conexión directa con servicios externos de IA.

---

## Estados posibles

Cada página puede tener uno de estos estados:

```text
Propuesta
Aprobada
En diseño
En desarrollo
En revisión
Completada
Pospuesta
Descartada
```

---

## Prioridades

```text
Alta
Media
Baja
Futura
```

---

## Tipos de página

Las páginas se clasifican como:

- entrada;
- índice;
- contenido;
- recurso;
- guía;
- información;
- sistema;
- documentación.

---

## Resumen general

| ID | Página | Ruta | Público | Prioridad | Estado |
|---|---|---|---|---|---|
| PG-001 | Inicio | `/docs/index.html` | Todos | Alta | Aprobada |
| PG-002 | Momentos | `/docs/moments/index.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-003 | Momento 1 | `/docs/moments/moment-1.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-004 | Momento 2 | `/docs/moments/moment-2.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-005 | Momento 3 | `/docs/moments/moment-3.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-006 | Momento 4 | `/docs/moments/moment-4.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-007 | Plantilla de sesión | Ruta por definir | Estudiantes y docentes | Alta | En diseño |
| PG-008 | Lenguaje | `/docs/language/index.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-009 | Glosario bilingüe | `/docs/language/glossary.html` | Estudiantes | Media | Aprobada |
| PG-010 | Expresiones clave | `/docs/language/key-expressions.html` | Estudiantes | Alta | Aprobada |
| PG-011 | Preguntas restaurativas | `/docs/language/restorative-questions.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-012 | Mensajes de paz | `/docs/language/peace-messages.html` | Estudiantes y docentes | Media | Aprobada |
| PG-013 | Recursos | `/docs/resources/index.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-014 | Materiales imprimibles | `/docs/resources/printables.html` | Docentes | Alta | Aprobada |
| PG-015 | Plantillas | `/docs/resources/templates.html` | Estudiantes y docentes | Alta | Aprobada |
| PG-016 | Prompts | `/docs/resources/prompts.html` | Docentes y estudiantes | Media | Aprobada |
| PG-017 | Alternativas desconectadas | `/docs/resources/offline-alternatives.html` | Docentes y estudiantes | Alta | Aprobada |
| PG-018 | Guía docente | `/docs/teacher-guide/index.html` | Docentes | Alta | Aprobada |
| PG-019 | Implementación | `/docs/teacher-guide/implementation.html` | Docentes | Alta | Aprobada |
| PG-020 | Evaluación | `/docs/teacher-guide/assessment.html` | Docentes | Alta | Aprobada |
| PG-021 | Privacidad y protección | `/docs/teacher-guide/privacy.html` | Docentes | Alta | Aprobada |
| PG-022 | Accesibilidad | `/docs/teacher-guide/accessibility.html` | Docentes | Alta | Aprobada |
| PG-023 | Uso responsable de IA | `/docs/teacher-guide/responsible-ai.html` | Docentes | Alta | Aprobada |
| PG-024 | Acerca del proyecto | `/docs/about/index.html` | Todos | Alta | Aprobada |
| PG-025 | Contexto | `/docs/about/context.html` | Visitantes y evaluadores | Media | Aprobada |
| PG-026 | Transferencia desde Corea | `/docs/about/korea-transfer.html` | Visitantes y evaluadores | Media | Aprobada |
| PG-027 | Alcance y limitaciones | `/docs/about/scope.html` | Todos | Alta | Aprobada |
| PG-028 | Autoría | `/docs/about/authorship.html` | Todos | Media | Aprobada |
| PG-029 | Contenido no encontrado | Ruta técnica | Todos | Media | Propuesta |
| PG-030 | Error de carga | Estado dentro de página | Todos | Alta | Propuesta |
| PG-031 | Recurso no disponible | Estado dentro de página | Todos | Media | Propuesta |
| PG-032 | Documentación del proyecto | Ruta por definir | Colaboradores | Baja | Propuesta |

---

# Páginas principales

## PG-001 — Inicio

**Ruta**

```text
/docs/index.html
```

**Tipo:** Entrada

**Público:** Todos

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar el proyecto, su propósito y sus rutas principales de navegación.

### Contenido mínimo

- nombre del proyecto;
- descripción breve;
- pregunta orientadora;
- aviso de prototipo;
- acceso a los cuatro momentos;
- acceso a expresiones bilingües;
- acceso a la guía docente;
- aviso de privacidad;
- enlace al alcance y limitaciones;
- alternativa desconectada.

### Acciones principales

```text
Explorar momentos
Consultar expresiones
Abrir guía docente
Conocer el proyecto
```

### Historias relacionadas

```text
US-001
US-002
US-007
US-014
```

### Fuente de contenido

```text
README.md
PROJECT_BRIEF.md
knowledge/00_PROJECT_OVERVIEW.md
knowledge/data/unit-content.json
```

### Privacidad

- no solicita información;
- no registra navegación;
- no utiliza analítica;
- no presenta formularios.

### Accesibilidad

- un solo `h1`;
- enlace para saltar al contenido;
- navegación operable con teclado;
- foco visible;
- botones o enlaces con nombres claros;
- diseño responsive.

### Dependencias

- navegación principal;
- tarjetas de momento;
- aviso de prototipo;
- pie de página.

---

## PG-002 — Momentos

**Ruta**

```text
/docs/moments/index.html
```

**Tipo:** Índice

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar la secuencia completa de la unidad y facilitar el acceso a cada momento.

### Contenido mínimo

Por cada momento:

- número;
- nombre;
- duración;
- propósito;
- número de sesiones;
- producto principal;
- enlace.

### Historias relacionadas

```text
US-002
```

### Fuente de contenido

```text
knowledge/moments/
knowledge/data/unit-content.json
```

### Privacidad

No recopila información sobre el recorrido del usuario.

### Accesibilidad

- las tarjetas no dependen del color;
- el orden visual coincide con el orden del documento;
- todos los enlaces son descriptivos;
- la duración se comunica mediante texto.

### Dependencias

- componente de tarjeta de momento;
- migas de navegación;
- navegación anterior y siguiente.

---

# Páginas de momentos

## PG-003 — Momento 1. Inspirar y conectar

**Ruta**

```text
/docs/moments/moment-1.html
```

**Tipo:** Contenido

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar el primer momento de la unidad.

### Contenido mínimo

- duración;
- propósito;
- pregunta orientadora;
- sesiones 1 y 2;
- productos;
- evidencias;
- recursos;
- expresiones;
- privacidad;
- alternativa desconectada.

### Historias relacionadas

```text
US-002
US-003
US-008
US-009
```

### Fuente de contenido

```text
knowledge/moments/MOMENT_1.md
knowledge/data/unit-content.json
```

### Privacidad

Debe recordar que las actividades no requieren compartir experiencias personales.

### Accesibilidad

La secuencia debe presentarse mediante títulos y listas claras.

---

## PG-004 — Momento 2. Comprender

**Ruta**

```text
/docs/moments/moment-2.html
```

**Tipo:** Contenido

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar el momento relacionado con perspectivas, emociones, necesidades, reparación e inteligencia artificial.

### Contenido mínimo

- sesiones 3 a 6;
- conceptos principales;
- productos;
- preguntas restaurativas;
- criterios de uso responsable de IA;
- privacidad;
- alternativas desconectadas.

### Historias relacionadas

```text
US-002
US-003
US-005
US-007
US-012
```

### Fuente de contenido

```text
knowledge/moments/MOMENT_2.md
knowledge/language/RESTORATIVE_LANGUAGE.md
knowledge/prompts/GEMINI.md
knowledge/data/unit-content.json
```

### Privacidad

Debe insistir en:

- casos ficticios;
- no introducir datos en IA;
- no analizar situaciones reales públicamente.

### Accesibilidad

Las diferencias entre hechos, emociones, necesidades e interpretaciones no deben comunicarse solo con colores.

---

## PG-005 — Momento 3. Aplicar y crear

**Ruta**

```text
/docs/moments/moment-3.html
```

**Tipo:** Contenido

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar la fase de definición, ideación, prototipado y Vibe Coding.

### Contenido mínimo

- sesiones 7 a 12;
- definición del problema;
- historias de usuario;
- mapas de navegación;
- prototipo en papel;
- prompt;
- prototipo digital o simulación;
- criterios de prueba;
- restricciones.

### Historias relacionadas

```text
US-002
US-003
US-012
```

### Fuente de contenido

```text
knowledge/moments/MOMENT_3.md
knowledge/prompts/VIBE_CODING.md
knowledge/data/unit-content.json
```

### Privacidad

Los prototipos no deben:

- recopilar información;
- simular denuncias;
- usar datos reales;
- conectarse automáticamente con servicios externos.

### Accesibilidad

Los prototipos deben considerar navegación, foco, contraste y alternativas no digitales.

---

## PG-006 — Momento 4. Compartir y transformar

**Ruta**

```text
/docs/moments/moment-4.html
```

**Tipo:** Contenido

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar la fase de pruebas, mejora, socialización y reflexión.

### Contenido mínimo

- sesiones 13 a 16;
- pruebas de usuario;
- retroalimentación;
- comparación de versiones;
- presentación;
- campaña;
- reflexión;
- recomendaciones futuras.

### Historias relacionadas

```text
US-002
US-003
US-006
US-010
```

### Fuente de contenido

```text
knowledge/moments/MOMENT_4.md
knowledge/data/unit-content.json
```

### Privacidad

La socialización requiere:

- revisión docente;
- anonimización;
- eliminación de información identificable;
- autorización cuando corresponda.

### Accesibilidad

La presentación puede realizarse mediante diferentes formatos.

---

# Plantilla de sesión

## PG-007 — Página de sesión

**Ruta**

Pendiente de decisión.

Opciones:

```text
/docs/moments/sessions/session-01.html
```

o:

```text
/docs/session.html?id=01
```

**Tipo:** Contenido

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** En diseño

### Propósito

Presentar la información completa de una sesión.

### Contenido mínimo estudiantil

- título;
- duración;
- propósito;
- materiales;
- pasos;
- expresiones;
- producto;
- privacidad;
- alternativa desconectada.

### Contenido mínimo docente

- preparación;
- objetivos;
- mediación;
- evidencias;
- evaluación;
- apoyos;
- alertas;
- ruta institucional cuando corresponda.

### Historias relacionadas

```text
US-003
US-009
US-013
```

### Decisión pendiente

Determinar si:

- se generan dieciséis archivos HTML;
- se utiliza una plantilla cargada desde JSON;
- se separan las vistas docente y estudiantil.

### Criterios para decidir

- simplicidad;
- mantenimiento;
- accesibilidad;
- funcionamiento local;
- facilidad de actualización;
- compatibilidad con GitHub Pages.

### Fuente de contenido

```text
knowledge/moments/
knowledge/data/unit-content.json
```

---

# Sección de lenguaje

## PG-008 — Lenguaje

**Ruta**

```text
/docs/language/index.html
```

**Tipo:** Índice

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar los recursos lingüísticos y restaurativos disponibles.

### Contenido mínimo

- glosario;
- expresiones clave;
- preguntas restaurativas;
- mensajes de paz;
- orientación de uso.

### Historias relacionadas

```text
US-004
US-005
US-006
```

### Fuente de contenido

```text
knowledge/language/
```

---

## PG-009 — Glosario bilingüe

**Ruta**

```text
/docs/language/glossary.html
```

**Tipo:** Recurso

**Público:** Estudiantes

**Prioridad:** Media

**Estado:** Aprobada

### Propósito

Facilitar la consulta de vocabulario clave.

### Contenido mínimo

- término en inglés;
- equivalente en español;
- categoría;
- explicación;
- ejemplo.

### Funciones previstas

- filtro local;
- búsqueda local;
- limpieza de filtros;
- mensaje sin resultados.

### Historias relacionadas

```text
US-004
```

### Fuente de contenido

```text
knowledge/language/GLOSSARY.md
knowledge/data/unit-content.json
```

### Privacidad

La búsqueda no se almacena ni se transmite.

### Accesibilidad

- etiquetas visibles;
- resultados anunciados;
- uso con teclado;
- términos en inglés marcados con idioma.

---

## PG-010 — Expresiones clave

**Ruta**

```text
/docs/language/key-expressions.html
```

**Tipo:** Recurso

**Público:** Estudiantes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Apoyar funciones comunicativas en español e inglés.

### Categorías

- expresar emociones;
- comunicar necesidades;
- pedir aclaración;
- escuchar;
- acordar;
- discrepar;
- retroalimentar;
- presentar;
- reflexionar.

### Historias relacionadas

```text
US-004
```

### Fuente de contenido

```text
knowledge/language/KEY_EXPRESSIONS.md
knowledge/data/unit-content.json
```

### Accesibilidad

El inglés y el español deben diferenciarse mediante etiquetas y atributos de idioma, no solo mediante color.

---

## PG-011 — Preguntas restaurativas

**Ruta**

```text
/docs/language/restorative-questions.html
```

**Tipo:** Recurso

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Ofrecer preguntas para comprender, reconocer efectos y pensar en reparación.

### Categorías

- hechos;
- perspectivas;
- emociones;
- necesidades;
- efectos;
- responsabilidad;
- reparación;
- prevención.

### Historias relacionadas

```text
US-005
```

### Fuente de contenido

```text
knowledge/language/RESTORATIVE_LANGUAGE.md
knowledge/data/unit-content.json
```

### Advertencias obligatorias

- no utilizar como interrogatorio;
- no registrar respuestas;
- no aplicar automáticamente;
- no sustituir la intervención adulta;
- utilizar rutas institucionales ante situaciones graves.

---

## PG-012 — Mensajes de paz

**Ruta**

```text
/docs/language/peace-messages.html
```

**Tipo:** Recurso

**Público:** Estudiantes y docentes

**Prioridad:** Media

**Estado:** Aprobada

### Propósito

Ofrecer mensajes bilingües para campañas y productos.

### Funciones previstas

- filtrar por categoría;
- copiar texto localmente;
- mostrar confirmación de copia.

### Historias relacionadas

```text
US-006
```

### Fuente de contenido

```text
knowledge/language/PEACE_MESSAGES.md
knowledge/data/unit-content.json
```

### Privacidad

No se registra qué contenido se copia.

### Accesibilidad

La confirmación debe anunciarse mediante `role="status"` o equivalente.

---

# Recursos

## PG-013 — Recursos

**Ruta**

```text
/docs/resources/index.html
```

**Tipo:** Índice

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Centralizar materiales prácticos y alternativas.

### Contenido mínimo

- materiales imprimibles;
- plantillas;
- prompts;
- alternativas desconectadas.

### Historias relacionadas

```text
US-008
US-011
US-012
```

---

## PG-014 — Materiales imprimibles

**Ruta**

```text
/docs/resources/printables.html
```

**Tipo:** Recurso

**Público:** Docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Facilitar el acceso a materiales para implementación.

### Información por recurso

- nombre;
- propósito;
- sesión;
- formato;
- instrucciones;
- enlace;
- advertencia de privacidad.

### Historias relacionadas

```text
US-008
US-011
```

### Privacidad

Las plantillas no deben solicitar nombres innecesarios.

### Accesibilidad

Los documentos deben:

- tener contraste;
- funcionar en escala de grises;
- utilizar texto seleccionable;
- mantener títulos e instrucciones.

---

## PG-015 — Plantillas

**Ruta**

```text
/docs/resources/templates.html
```

**Tipo:** Recurso

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Plantillas previstas

- mapa de voces;
- análisis de caso ficticio;
- historia de usuario;
- mapa de navegación;
- prototipo en papel;
- registro de prueba;
- retroalimentación;
- reflexión final.

### Fuente de contenido

```text
knowledge/moments/
knowledge/pedagogy/LEARNING_PRODUCTS.md
```

---

## PG-016 — Prompts

**Ruta**

```text
/docs/resources/prompts.html
```

**Tipo:** Recurso

**Público:** Estudiantes y docentes

**Prioridad:** Media

**Estado:** Aprobada

### Propósito

Presentar plantillas de prompts seguros para actividades de IA y Vibe Coding.

### Contenido mínimo

- propósito;
- plantilla;
- ejemplo ficticio;
- restricciones;
- revisión;
- advertencia de privacidad.

### Historias relacionadas

```text
US-012
```

### Fuente de contenido

```text
knowledge/prompts/GEMINI.md
knowledge/prompts/VIBE_CODING.md
```

### Privacidad

Debe incluir de forma visible:

> No escribas nombres, historias reales ni información personal en una herramienta de IA.

---

## PG-017 — Alternativas desconectadas

**Ruta**

```text
/docs/resources/offline-alternatives.html
```

**Tipo:** Recurso

**Público:** Estudiantes y docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Relacionar actividades digitales con opciones sin internet.

### Información mínima

- actividad;
- alternativa;
- materiales;
- tiempo;
- evidencia;
- adaptación.

### Historias relacionadas

```text
US-008
US-011
```

### Fuente de contenido

```text
knowledge/moments/
knowledge/unit/11_RESOURCES.md
```

---

# Guía docente

## PG-018 — Guía docente

**Ruta**

```text
/docs/teacher-guide/index.html
```

**Tipo:** Índice

**Público:** Docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Facilitar la preparación e implementación de la unidad.

### Contenido mínimo

- introducción;
- duración;
- estructura;
- implementación;
- evaluación;
- privacidad;
- accesibilidad;
- IA responsable.

### Historias relacionadas

```text
US-009
US-010
US-011
US-012
US-013
```

---

## PG-019 — Implementación

**Ruta**

```text
/docs/teacher-guide/implementation.html
```

**Tipo:** Guía

**Público:** Docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Orientar la preparación y desarrollo de la unidad.

### Contenido mínimo

- contexto;
- propósito;
- áreas;
- duración;
- momentos;
- rol docente;
- materiales;
- organización;
- contingencias;
- mediación.

### Fuente de contenido

```text
PEDAGOGICAL_FRAMEWORK.md
knowledge/unit/
knowledge/moments/
```

---

## PG-020 — Evaluación

**Ruta**

```text
/docs/teacher-guide/assessment.html
```

**Tipo:** Guía

**Público:** Docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar el sistema de evaluación formativa.

### Contenido mínimo

- enfoque;
- dimensiones;
- evidencias;
- rúbricas;
- productos;
- autoevaluación;
- coevaluación;
- recomendaciones.

### Historias relacionadas

```text
US-010
```

### Fuente de contenido

```text
knowledge/pedagogy/
```

### Privacidad

No deben presentarse ejemplos con nombres o calificaciones reales.

---

## PG-021 — Privacidad y protección

**Ruta**

```text
/docs/teacher-guide/privacy.html
```

**Tipo:** Guía

**Público:** Docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Orientar la protección de estudiantes durante las actividades.

### Contenido mínimo

- minimización de datos;
- casos ficticios;
- participación voluntaria;
- límites de confidencialidad;
- socialización;
- IA;
- incidentes;
- rutas institucionales.

### Historias relacionadas

```text
US-007
US-013
```

### Fuente de contenido

```text
PRIVACY.md
```

---

## PG-022 — Accesibilidad

**Ruta**

```text
/docs/teacher-guide/accessibility.html
```

**Tipo:** Guía

**Público:** Docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Ofrecer adaptaciones y diferentes formas de participación.

### Contenido mínimo

- formas de respuesta;
- apoyos;
- lectura clara;
- alternativas desconectadas;
- movilidad;
- impresión;
- adaptación de tiempo y materiales.

### Historias relacionadas

```text
US-008
US-016
US-017
US-018
```

### Fuente de contenido

```text
ACCESSIBILITY.md
```

---

## PG-023 — Uso responsable de IA

**Ruta**

```text
/docs/teacher-guide/responsible-ai.html
```

**Tipo:** Guía

**Público:** Docentes

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Orientar un uso crítico, seguro y transparente de IA generativa.

### Contenido mínimo

- posibilidades;
- limitaciones;
- errores;
- sesgos;
- datos prohibidos;
- revisión humana;
- autoría;
- ejemplos ficticios.

### Historias relacionadas

```text
US-012
```

### Fuente de contenido

```text
knowledge/prompts/
PEDAGOGICAL_FRAMEWORK.md
PRIVACY.md
```

---

# Acerca del proyecto

## PG-024 — Acerca del proyecto

**Ruta**

```text
/docs/about/index.html
```

**Tipo:** Índice

**Público:** Todos

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Presentar contexto, transferencia, alcance y autoría.

### Historias relacionadas

```text
US-014
US-015
```

---

## PG-025 — Contexto

**Ruta**

```text
/docs/about/context.html
```

**Tipo:** Información

**Público:** Visitantes y evaluadores

**Prioridad:** Media

**Estado:** Aprobada

### Contenido mínimo

- institución;
- municipio;
- población;
- necesidad;
- áreas;
- enfoque.

### Fuente de contenido

```text
knowledge/01_CONTEXT.md
knowledge/03_TARGET_POPULATION.md
```

### Privacidad

No incluye información identificable de estudiantes.

---

## PG-026 — Transferencia desde Corea

**Ruta**

```text
/docs/about/korea-transfer.html
```

**Tipo:** Información

**Público:** Visitantes y evaluadores

**Prioridad:** Media

**Estado:** Aprobada

### Contenido mínimo

- experiencia;
- aprendizajes;
- tecnologías observadas;
- Vibe Coding;
- adaptación;
- límites de la transferencia.

### Fuente de contenido

```text
knowledge/02_TRANSFER_FROM_KOREA.md
```

---

## PG-027 — Alcance y limitaciones

**Ruta**

```text
/docs/about/scope.html
```

**Tipo:** Información

**Público:** Todos

**Prioridad:** Alta

**Estado:** Aprobada

### Propósito

Evitar interpretaciones incorrectas sobre el recurso.

### Contenido obligatorio

El recurso:

- es educativo;
- es estático;
- está en fase de prototipo;
- no recopila datos;
- no registra casos;
- no diagnostica;
- no recomienda sanciones;
- no reemplaza rutas;
- no representa una aplicación institucional aprobada.

### Historias relacionadas

```text
US-014
```

### Fuente de contenido

```text
PROJECT_BRIEF.md
PRIVACY.md
DESIGN_DECISIONS.md
```

---

## PG-028 — Autoría

**Ruta**

```text
/docs/about/authorship.html
```

**Tipo:** Información

**Público:** Todos

**Prioridad:** Media

**Estado:** Aprobada

### Contenido mínimo

- proyecto;
- autor;
- institución;
- transferencia;
- estado;
- reconocimientos;
- licencia cuando se defina.

---

# Estados y páginas del sistema

## PG-029 — Contenido no encontrado

**Ruta**

Por definir según la estrategia de GitHub Pages.

**Tipo:** Sistema

**Público:** Todos

**Prioridad:** Media

**Estado:** Propuesta

### Propósito

Orientar al usuario cuando una ruta no existe.

### Contenido mínimo

- mensaje claro;
- explicación breve;
- enlace al inicio;
- enlace al mapa de momentos;
- ausencia de lenguaje culpabilizante.

### Texto sugerido

> No encontramos este contenido. Puede que la dirección haya cambiado o que el recurso todavía no esté disponible.

---

## PG-030 — Error al cargar datos

**Ruta**

Estado integrado en páginas dinámicas.

**Tipo:** Sistema

**Público:** Todos

**Prioridad:** Alta

**Estado:** Propuesta

### Propósito

Comunicar un error de carga de manera comprensible.

### Contenido mínimo

- qué ocurrió;
- qué puede hacer el usuario;
- opción para intentar nuevamente;
- enlace a contenido alternativo;
- ruta de regreso.

### Texto sugerido

> No pudimos cargar este contenido. Intenta nuevamente o consulta la versión imprimible.

### Accesibilidad

El mensaje debe anunciarse y recibir atención sin mover el foco de forma inesperada.

---

## PG-031 — Recurso no disponible

**Ruta**

Estado integrado en índices de recursos.

**Tipo:** Sistema

**Público:** Todos

**Prioridad:** Media

**Estado:** Propuesta

### Propósito

Explicar que un recurso todavía no ha sido publicado.

### Texto sugerido

> Este recurso todavía está en preparación. Puedes continuar con la alternativa indicada en la actividad.

---

# Documentación para colaboradores

## PG-032 — Documentación del proyecto

**Ruta**

Por definir.

Opciones:

```text
/docs/project-documentation.html
```

o enlace directo al repositorio.

**Tipo:** Documentación

**Público:** Colaboradores y evaluadores

**Prioridad:** Baja

**Estado:** Propuesta

### Propósito

Facilitar el acceso a:

- arquitectura;
- decisiones;
- historias;
- contribución;
- cambios;
- documentación técnica.

### Contenido posible

- enlace a `PROJECT_BRIEF.md`;
- enlace a `ROADMAP.md`;
- enlace a `USER_STORIES.md`;
- enlace a `DESIGN_DECISIONS.md`;
- enlace a `CONTRIBUTING.md`;
- enlace a `CHANGELOG.md`.

### Decisión pendiente

Determinar si esta documentación debe:

- formar parte del sitio publicado;
- permanecer únicamente en GitHub;
- mostrarse solo mediante enlaces externos.

---

# Páginas de sesión previstas

Si se adopta una página independiente por sesión, se crearán:

| ID | Ruta | Momento |
|---|---|---|
| SS-001 | `/docs/moments/sessions/session-01.html` | Momento 1 |
| SS-002 | `/docs/moments/sessions/session-02.html` | Momento 1 |
| SS-003 | `/docs/moments/sessions/session-03.html` | Momento 2 |
| SS-004 | `/docs/moments/sessions/session-04.html` | Momento 2 |
| SS-005 | `/docs/moments/sessions/session-05.html` | Momento 2 |
| SS-006 | `/docs/moments/sessions/session-06.html` | Momento 2 |
| SS-007 | `/docs/moments/sessions/session-07.html` | Momento 3 |
| SS-008 | `/docs/moments/sessions/session-08.html` | Momento 3 |
| SS-009 | `/docs/moments/sessions/session-09.html` | Momento 3 |
| SS-010 | `/docs/moments/sessions/session-10.html` | Momento 3 |
| SS-011 | `/docs/moments/sessions/session-11.html` | Momento 3 |
| SS-012 | `/docs/moments/sessions/session-12.html` | Momento 3 |
| SS-013 | `/docs/moments/sessions/session-13.html` | Momento 4 |
| SS-014 | `/docs/moments/sessions/session-14.html` | Momento 4 |
| SS-015 | `/docs/moments/sessions/session-15.html` | Momento 4 |
| SS-016 | `/docs/moments/sessions/session-16.html` | Momento 4 |

Estas páginas no deben crearse hasta resolver la estrategia de plantillas y datos.

---

# Matriz de contenido y fuente

| Área | Fuente principal |
|---|---|
| Inicio | `PROJECT_BRIEF.md`, `README.md` |
| Momentos | `knowledge/moments/` |
| Sesiones | `knowledge/moments/`, `unit-content.json` |
| Glosario | `knowledge/language/GLOSSARY.md` |
| Expresiones | `knowledge/language/KEY_EXPRESSIONS.md` |
| Preguntas | `knowledge/language/RESTORATIVE_LANGUAGE.md` |
| Mensajes | `knowledge/language/PEACE_MESSAGES.md` |
| Evaluación | `knowledge/pedagogy/` |
| Prompts | `knowledge/prompts/` |
| Privacidad | `PRIVACY.md` |
| Accesibilidad | `ACCESSIBILITY.md` |
| Contexto | `knowledge/01_CONTEXT.md` |
| Transferencia | `knowledge/02_TRANSFER_FROM_KOREA.md` |
| Alcance | `PROJECT_BRIEF.md`, `DESIGN_DECISIONS.md` |

---

# Dependencias globales

Todas las páginas dependerán de:

- encabezado;
- navegación;
- pie de página;
- sistema tipográfico;
- sistema de espaciado;
- estilos de foco;
- estilos responsive;
- avisos;
- migas de navegación cuando correspondan.

Las páginas que carguen contenido estructurado dependerán de:

```text
knowledge/data/unit-content.json
```

o de una copia sincronizada en:

```text
docs/data/
```

La estrategia definitiva debe registrarse antes del desarrollo.

---

# Reglas para añadir una página

Antes de añadir una nueva página debe responderse:

1. ¿Qué necesidad resuelve?
2. ¿Qué historia de usuario la justifica?
3. ¿Puede integrarse en una página existente?
4. ¿Cuál es su público?
5. ¿Cuál es su fuente?
6. ¿Qué datos utiliza?
7. ¿Qué riesgos tiene?
8. ¿Cómo funciona con teclado?
9. ¿Cuál es su alternativa desconectada?
10. ¿Cómo se mantendrá actualizada?

Una página no debe añadirse únicamente porque técnicamente sea posible.

---

# Reglas para eliminar o combinar páginas

Una página puede combinarse con otra cuando:

- repite contenido;
- tiene poco contenido propio;
- aumenta innecesariamente la profundidad;
- confunde a los usuarios;
- genera mantenimiento duplicado.

Una página puede eliminarse cuando:

- no responde a una historia;
- quedó fuera del alcance;
- fue reemplazada;
- las pruebas demuestran que no aporta valor.

Toda eliminación o combinación debe registrarse en:

```text
DESIGN_DECISIONS.md
CHANGELOG.md
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
```

---

# Prioridad de implementación

## Primera entrega

```text
PG-001 Inicio
PG-002 Momentos
PG-003 Momento 1
PG-004 Momento 2
PG-005 Momento 3
PG-006 Momento 4
PG-007 Plantilla de sesión
PG-010 Expresiones clave
PG-021 Privacidad y protección
PG-024 Acerca del proyecto
PG-027 Alcance y limitaciones
PG-030 Estado de error de carga
```

## Segunda entrega

```text
PG-008 Lenguaje
PG-009 Glosario
PG-011 Preguntas restaurativas
PG-012 Mensajes de paz
PG-018 Guía docente
PG-019 Implementación
PG-020 Evaluación
PG-022 Accesibilidad
PG-023 IA responsable
```

## Tercera entrega

```text
PG-013 Recursos
PG-014 Imprimibles
PG-015 Plantillas
PG-016 Prompts
PG-017 Alternativas desconectadas
PG-025 Contexto
PG-026 Transferencia desde Corea
PG-028 Autoría
PG-029 Página no encontrada
PG-031 Recurso no disponible
PG-032 Documentación
```

---

# Decisiones pendientes

Antes de iniciar el desarrollo deben resolverse:

- plantilla única o archivos individuales para sesiones;
- ubicación final de los datos;
- separación de contenido docente y estudiantil;
- documentación pública o solo en GitHub;
- formato de imprimibles;
- estrategia de búsqueda y filtros;
- funcionamiento local sin servidor;
- uso de JavaScript progresivo;
- estrategia para errores;
- estructura definitiva de URLs.

Estas decisiones deben registrarse en:

```text
DESIGN_DECISIONS.md
```

---

## Criterio de actualización

Este inventario debe actualizarse cuando:

- se aprueba una página;
- cambia una ruta;
- cambia una prioridad;
- una página entra en desarrollo;
- se completa una página;
- se combina o elimina contenido;
- cambia una fuente;
- una prueba identifica una barrera;
- se modifica el mapa del sitio.

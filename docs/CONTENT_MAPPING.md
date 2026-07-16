# Mapeo de contenido

## Propósito

Este documento relaciona las fuentes pedagógicas y estratégicas de **Voces que Restauran** con:

- los datos estructurados;
- las páginas del recurso web;
- los componentes de interfaz;
- las historias de usuario;
- las responsabilidades de actualización.

Su objetivo es evitar:

- duplicación sin control;
- contenido contradictorio;
- páginas sin fuente clara;
- datos desactualizados;
- edición aislada de la interfaz;
- pérdida de trazabilidad.

Debe utilizarse junto con:

```text
PROJECT_BRIEF.md
USER_STORIES.md
CONTENT_GUIDELINES.md
DESIGN_DECISIONS.md
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
docs/TECHNICAL_ARCHITECTURE.md
docs/DATA_SCHEMA.md
knowledge/
knowledge/data/unit-content.json
```

---

## Principio general

Todo contenido publicado debe poder responder:

1. ¿De qué documento proviene?
2. ¿Cuál es su versión estructurada?
3. ¿En qué página aparece?
4. ¿Qué componente lo presenta?
5. ¿Qué historia de usuario justifica su presencia?
6. ¿Quién debe actualizarlo?
7. ¿Qué otros archivos se ven afectados?

---

## Capas de contenido

La arquitectura de contenido se organiza en cuatro capas.

```text
Fuente pedagógica o estratégica
        ↓
Dato estructurado
        ↓
Página
        ↓
Componente
```

---

## Fuente pedagógica o estratégica

Contiene:

- propósito;
- fundamentos;
- metodología;
- secuencia;
- evaluación;
- lenguaje;
- restricciones;
- decisiones;
- contexto.

Ejemplos:

```text
PROJECT_BRIEF.md
PEDAGOGICAL_FRAMEWORK.md
PRIVACY.md
ACCESSIBILITY.md
knowledge/moments/MOMENT_1.md
knowledge/language/KEY_EXPRESSIONS.md
```

---

## Dato estructurado

Contiene información preparada para ser consumida por la interfaz.

Ejemplo:

```text
knowledge/data/unit-content.json
```

y su copia:

```text
docs/data/unit-content.json
```

---

## Página

Organiza el contenido para un público y una necesidad concreta.

Ejemplos:

```text
docs/index.html
docs/moments/moment-1.html
docs/language/key-expressions.html
docs/teacher-guide/privacy.html
```

---

## Componente

Presenta una unidad reutilizable de información.

Ejemplos:

```text
Tarjeta de momento
Tarjeta bilingüe
Aviso de privacidad
Lista de recursos
Resumen de sesión
```

---

# Jerarquía de autoridad

Cuando exista una contradicción, debe aplicarse este orden.

## Contenido pedagógico

```text
Documentos Markdown de knowledge/
        ↓
knowledge/data/unit-content.json
        ↓
docs/data/unit-content.json
        ↓
interfaz web
```

## Alcance del proyecto

```text
PROJECT_BRIEF.md
        ↓
DESIGN_DECISIONS.md
        ↓
README.md
        ↓
interfaz
```

## Privacidad

```text
PRIVACY.md
        ↓
DESIGN_DECISIONS.md
        ↓
contenido de knowledge/
        ↓
JSON
        ↓
interfaz
```

## Accesibilidad

```text
ACCESSIBILITY.md
        ↓
DESIGN_SYSTEM.md
        ↓
COMPONENT_INVENTORY.md
        ↓
código
```

## Contenido editorial

```text
CONTENT_GUIDELINES.md
        ↓
documentos de knowledge/
        ↓
JSON
        ↓
interfaz
```

---

# Convenciones de mapeo

## Tipo de relación

Cada mapeo puede marcarse como:

```text
Directo
Resumido
Transformado
Referenciado
Generado
```

### Directo

El contenido se presenta casi sin cambios.

### Resumido

La interfaz muestra una versión más breve.

### Transformado

El contenido se adapta a una estructura, público o formato distinto.

### Referenciado

La página enlaza a otra fuente sin copiarla completamente.

### Generado

La interfaz construye el contenido a partir de varios campos estructurados.

---

## Responsabilidad

Cada contenido debe tener una responsabilidad principal.

Valores sugeridos:

```text
Pedagógica
Editorial
Técnica
Docente
Institucional
Compartida
```

---

# Mapeo de páginas principales

## Página de inicio

**Ruta**

```text
docs/index.html
```

### Fuentes

```text
PROJECT_BRIEF.md
README.md
knowledge/00_PROJECT_OVERVIEW.md
knowledge/data/unit-content.json
```

### Datos relacionados

```text
project
learningMoments
privacy
accessibility
```

### Componentes

```text
CP-002 Encabezado global
CP-003 Navegación principal
CP-006 Pie de página
CP-007 Aviso de prototipo
CP-008 Aviso de privacidad
CP-010 Tarjeta de acceso
CP-011 Tarjeta de momento
```

### Historias

```text
US-001
US-002
US-007
US-014
```

### Tipo de transformación

```text
Resumido
Generado
```

### Responsabilidad

```text
Compartida
```

### Regla de actualización

Cuando cambie:

- el propósito;
- la pregunta orientadora;
- el alcance;
- la duración;
- los momentos;

deben revisarse:

```text
PROJECT_BRIEF.md
README.md
knowledge/00_PROJECT_OVERVIEW.md
knowledge/data/unit-content.json
docs/data/unit-content.json
docs/index.html
```

---

## Página de momentos

**Ruta**

```text
docs/moments/index.html
```

### Fuentes

```text
knowledge/moments/README.md
knowledge/moments/MOMENT_1.md
knowledge/moments/MOMENT_2.md
knowledge/moments/MOMENT_3.md
knowledge/moments/MOMENT_4.md
knowledge/data/unit-content.json
```

### Datos relacionados

```text
learningMoments
```

### Componentes

```text
CP-005 Migas de navegación
CP-009 Encabezado de página
CP-011 Tarjeta de momento
CP-029 Navegación anterior y siguiente
```

### Historias

```text
US-002
```

### Tipo de transformación

```text
Generado
```

### Responsabilidad

```text
Pedagógica y técnica
```

---

# Mapeo de momentos

## Momento 1

**Página**

```text
docs/moments/moment-1.html
```

### Fuente principal

```text
knowledge/moments/MOMENT_1.md
```

### Datos

```text
learningMoments[id="moment-1"]
```

### Componentes

```text
CP-009 Encabezado de página
CP-012 Tarjeta de sesión
CP-016 Producto esperado
CP-017 Evidencia de aprendizaje
CP-018 Alternativa desconectada
CP-029 Navegación anterior y siguiente
```

### Historias

```text
US-002
US-003
US-008
US-009
```

### Responsabilidad

```text
Pedagógica
```

---

## Momento 2

**Página**

```text
docs/moments/moment-2.html
```

### Fuentes

```text
knowledge/moments/MOMENT_2.md
knowledge/language/RESTORATIVE_LANGUAGE.md
knowledge/prompts/GEMINI.md
```

### Datos

```text
learningMoments[id="moment-2"]
languageResources.restorativeQuestions
```

### Componentes

```text
CP-008 Aviso de privacidad
CP-012 Tarjeta de sesión
CP-021 Tarjeta de pregunta restaurativa
CP-045 Aviso de uso responsable de IA
CP-046 Aviso de ruta institucional
```

### Historias

```text
US-002
US-003
US-005
US-007
US-012
```

### Responsabilidad

```text
Pedagógica, editorial y docente
```

---

## Momento 3

**Página**

```text
docs/moments/moment-3.html
```

### Fuentes

```text
knowledge/moments/MOMENT_3.md
knowledge/prompts/VIBE_CODING.md
DESIGN_DECISIONS.md
```

### Datos

```text
learningMoments[id="moment-3"]
```

### Componentes

```text
CP-012 Tarjeta de sesión
CP-034 Plantilla de prompt
CP-045 Aviso de uso responsable de IA
CP-018 Alternativa desconectada
```

### Historias

```text
US-002
US-003
US-012
```

### Responsabilidad

```text
Pedagógica y técnica
```

---

## Momento 4

**Página**

```text
docs/moments/moment-4.html
```

### Fuentes

```text
knowledge/moments/MOMENT_4.md
knowledge/pedagogy/ASSESSMENT.md
knowledge/pedagogy/EVIDENCE.md
knowledge/language/PEACE_MESSAGES.md
```

### Datos

```text
learningMoments[id="moment-4"]
assessment
languageResources.peaceMessages
```

### Componentes

```text
CP-017 Evidencia de aprendizaje
CP-022 Tarjeta de mensaje de paz
CP-035 Lista de verificación
CP-036 Rúbrica accesible
```

### Historias

```text
US-002
US-003
US-006
US-010
```

### Responsabilidad

```text
Pedagógica
```

---

# Mapeo de sesiones

## Fuente

Las sesiones se documentan principalmente dentro de:

```text
knowledge/moments/MOMENT_1.md
knowledge/moments/MOMENT_2.md
knowledge/moments/MOMENT_3.md
knowledge/moments/MOMENT_4.md
```

y estructuralmente en:

```text
learningMoments[].sessions[]
```

---

## Página

```text
docs/moments/session.html?id=01
```

o la ruta que se apruebe finalmente.

---

## Componentes

```text
CP-005 Migas de navegación
CP-013 Resumen de sesión
CP-014 Secuencia de pasos
CP-015 Lista de materiales
CP-016 Producto esperado
CP-017 Evidencia de aprendizaje
CP-018 Alternativa desconectada
CP-019 Alerta docente
CP-020 Tarjeta bilingüe
CP-029 Navegación anterior y siguiente
CP-043 Etiqueta de duración
CP-044 Etiqueta de público
```

---

## Mapeo por campo

| Campo de sesión | Fuente pedagógica | Componente |
|---|---|---|
| `title` | Título de sesión | Encabezado de página |
| `durationHours` | Duración | Etiqueta de duración |
| `purpose` | Propósito | Resumen de sesión |
| `objectives` | Objetivos | Lista de objetivos |
| `materials` | Materiales | Lista de materiales |
| `steps` | Secuencia | Secuencia de pasos |
| `languageSupport` | Lenguaje | Tarjetas bilingües |
| `expectedProduct` | Producto | Producto esperado |
| `evidence` | Evidencias | Evidencia de aprendizaje |
| `assessment` | Evaluación | Lista o rúbrica |
| `offlineAlternative` | Alternativa | Alternativa desconectada |
| `privacy` | Privacidad | Aviso de privacidad |
| `accessibility` | Inclusión | Nota de accesibilidad |
| `teacherGuidance` | Guía docente | Alerta docente |

---

## Responsabilidad de actualización

Cuando cambie una sesión:

1. actualizar el archivo de momento;
2. actualizar el JSON;
3. validar;
4. copiar a `docs/data/`;
5. probar la página;
6. actualizar el changelog si el cambio es significativo.

---

# Mapeo de lenguaje

## Glosario

**Página**

```text
docs/language/glossary.html
```

### Fuente principal

```text
knowledge/language/GLOSSARY.md
```

### Datos

```text
languageResources.glossary
```

### Componentes

```text
CP-020 Tarjeta bilingüe
CP-023 Filtro por categoría
CP-024 Búsqueda local
CP-025 Limpiar filtros
CP-027 Mensaje de estado
CP-037 Estado vacío
```

### Historia

```text
US-004
```

### Tipo de transformación

```text
Generado
```

---

## Expresiones clave

**Página**

```text
docs/language/key-expressions.html
```

### Fuente principal

```text
knowledge/language/KEY_EXPRESSIONS.md
```

### Datos

```text
languageResources.keyExpressions
```

### Componentes

```text
CP-020 Tarjeta bilingüe
CP-023 Filtro por categoría
CP-026 Botón para copiar texto
CP-027 Mensaje de estado
CP-042 Etiqueta de idioma
```

### Historia

```text
US-004
```

### Responsabilidad

```text
Pedagógica y editorial
```

---

## Preguntas restaurativas

**Página**

```text
docs/language/restorative-questions.html
```

### Fuente principal

```text
knowledge/language/RESTORATIVE_LANGUAGE.md
```

### Datos

```text
languageResources.restorativeQuestions
```

### Componentes

```text
CP-008 Aviso de privacidad
CP-021 Tarjeta de pregunta restaurativa
CP-023 Filtro por categoría
CP-028 Acordeón accesible
CP-046 Aviso de ruta institucional
```

### Historia

```text
US-005
```

### Tipo de transformación

```text
Transformado
```

### Regla editorial

Las preguntas deben:

- conservar su intención;
- evitar tono interrogatorio;
- incluir advertencias;
- no mostrar campos de respuesta;
- no presentarse como protocolo automático.

---

## Mensajes de paz

**Página**

```text
docs/language/peace-messages.html
```

### Fuente principal

```text
knowledge/language/PEACE_MESSAGES.md
```

### Datos

```text
languageResources.peaceMessages
```

### Componentes

```text
CP-022 Tarjeta de mensaje de paz
CP-023 Filtro por categoría
CP-026 Botón para copiar texto
CP-027 Mensaje de estado
```

### Historia

```text
US-006
```

---

# Mapeo de recursos

## Índice de recursos

**Página**

```text
docs/resources/index.html
```

### Fuentes

```text
knowledge/unit/11_RESOURCES.md
knowledge/pedagogy/LEARNING_PRODUCTS.md
knowledge/prompts/
```

### Datos

Una colección futura puede ser:

```text
resources[]
```

### Componentes

```text
CP-032 Lista de recursos descargables
CP-033 Tarjeta de recurso
CP-041 Enlace de descarga
```

### Historias

```text
US-008
US-011
US-012
```

---

## Materiales imprimibles

**Página**

```text
docs/resources/printables.html
```

### Fuentes

```text
knowledge/moments/
knowledge/unit/11_RESOURCES.md
knowledge/pedagogy/RUBRICS.md
```

### Componentes

```text
CP-032 Lista de recursos descargables
CP-033 Tarjeta de recurso
CP-041 Enlace de descarga
CP-048 Versión imprimible
```

### Responsabilidad

```text
Pedagógica, editorial y técnica
```

---

## Plantillas

**Página**

```text
docs/resources/templates.html
```

### Fuentes

```text
knowledge/pedagogy/LEARNING_PRODUCTS.md
knowledge/moments/
```

### Productos mapeados

| Plantilla | Fuente |
|---|---|
| Mapa de voces | Momento 1 |
| Caso ficticio | Momento 2 |
| Historia de usuario | Momento 3 |
| Mapa de navegación | Momento 3 |
| Prototipo en papel | Momento 3 |
| Registro de prueba | Momento 4 |
| Retroalimentación | Momento 4 |
| Reflexión final | Momento 4 |

---

## Prompts

**Página**

```text
docs/resources/prompts.html
```

### Fuentes

```text
knowledge/prompts/GEMINI.md
knowledge/prompts/VIBE_CODING.md
```

### Componentes

```text
CP-008 Aviso de privacidad
CP-034 Plantilla de prompt
CP-045 Aviso de uso responsable de IA
CP-026 Botón para copiar texto
```

### Historias

```text
US-012
```

---

## Alternativas desconectadas

**Página**

```text
docs/resources/offline-alternatives.html
```

### Fuentes

```text
knowledge/moments/
knowledge/unit/11_RESOURCES.md
```

### Datos

```text
offlineAlternatives
```

### Componentes

```text
CP-018 Alternativa desconectada
CP-031 Tabla responsive
CP-048 Versión imprimible
```

### Historia

```text
US-008
```

---

# Mapeo de guía docente

## Página principal

```text
docs/teacher-guide/index.html
```

### Fuentes

```text
PEDAGOGICAL_FRAMEWORK.md
knowledge/unit/
knowledge/moments/
knowledge/pedagogy/
```

### Componentes

```text
CP-010 Tarjeta de acceso
CP-019 Alerta docente
CP-028 Acordeón accesible
```

### Historias

```text
US-009
US-010
US-011
US-012
US-013
```

---

## Implementación

**Página**

```text
docs/teacher-guide/implementation.html
```

### Fuentes

```text
PEDAGOGICAL_FRAMEWORK.md
knowledge/unit/10_TIMELINE.md
knowledge/unit/11_RESOURCES.md
knowledge/moments/
```

### Tipo de transformación

```text
Resumido
Referenciado
```

---

## Evaluación

**Página**

```text
docs/teacher-guide/assessment.html
```

### Fuentes

```text
knowledge/pedagogy/ASSESSMENT.md
knowledge/pedagogy/EVIDENCE.md
knowledge/pedagogy/RUBRICS.md
knowledge/pedagogy/LEARNING_PRODUCTS.md
```

### Datos

```text
assessment
```

### Componentes

```text
CP-017 Evidencia de aprendizaje
CP-031 Tabla responsive
CP-035 Lista de verificación
CP-036 Rúbrica accesible
CP-048 Versión imprimible
```

### Historia

```text
US-010
```

---

## Privacidad

**Página**

```text
docs/teacher-guide/privacy.html
```

### Fuente principal

```text
PRIVACY.md
```

### Fuentes complementarias

```text
PEDAGOGICAL_FRAMEWORK.md
CONTENT_GUIDELINES.md
```

### Datos

```text
privacy
```

### Componentes

```text
CP-008 Aviso de privacidad
CP-035 Lista de verificación
CP-046 Aviso de ruta institucional
```

### Historias

```text
US-007
US-013
```

---

## Accesibilidad

**Página**

```text
docs/teacher-guide/accessibility.html
```

### Fuente principal

```text
ACCESSIBILITY.md
```

### Datos

```text
accessibility
```

### Componentes

```text
CP-018 Alternativa desconectada
CP-035 Lista de verificación
CP-048 Versión imprimible
```

### Historias

```text
US-008
US-016
US-017
US-018
```

---

## IA responsable

**Página**

```text
docs/teacher-guide/responsible-ai.html
```

### Fuentes

```text
knowledge/prompts/GEMINI.md
knowledge/prompts/VIBE_CODING.md
PEDAGOGICAL_FRAMEWORK.md
PRIVACY.md
```

### Componentes

```text
CP-008 Aviso de privacidad
CP-034 Plantilla de prompt
CP-045 Aviso de uso responsable de IA
```

### Historia

```text
US-012
```

---

# Mapeo de información institucional

## Acerca del proyecto

**Página**

```text
docs/about/index.html
```

### Fuentes

```text
PROJECT_BRIEF.md
README.md
knowledge/00_PROJECT_OVERVIEW.md
```

### Componentes

```text
CP-007 Aviso de prototipo
CP-010 Tarjeta de acceso
CP-047 Bloque de autoría
```

---

## Contexto

**Página**

```text
docs/about/context.html
```

### Fuentes

```text
knowledge/01_CONTEXT.md
knowledge/03_TARGET_POPULATION.md
```

### Transformación

```text
Resumido
```

### Regla de privacidad

No debe incluir:

- grupos identificables;
- nombres;
- cantidades sensibles;
- casos;
- relatos;
- información disciplinaria.

---

## Transferencia desde Corea

**Página**

```text
docs/about/korea-transfer.html
```

### Fuente principal

```text
knowledge/02_TRANSFER_FROM_KOREA.md
```

### Transformación

```text
Resumido
```

### Contenido esperado

- experiencia;
- tecnologías exploradas;
- Vibe Coding;
- adaptación;
- relación con la unidad.

---

## Alcance y limitaciones

**Página**

```text
docs/about/scope.html
```

### Fuentes

```text
PROJECT_BRIEF.md
DESIGN_DECISIONS.md
PRIVACY.md
```

### Componentes

```text
CP-007 Aviso de prototipo
CP-008 Aviso de privacidad
CP-046 Aviso de ruta institucional
```

### Historia

```text
US-014
```

### Regla

La página debe actualizarse cuando cambie:

- alcance;
- estado;
- arquitectura;
- uso de datos;
- aplicación futura.

---

## Autoría

**Página**

```text
docs/about/authorship.html
```

### Fuentes

```text
README.md
PROJECT_BRIEF.md
CHANGELOG.md
```

### Componentes

```text
CP-047 Bloque de autoría y reconocimiento
```

---

# Mapeo de mensajes del sistema

## Página no encontrada

**Ruta**

```text
docs/404.html
```

### Fuente

```text
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
```

### Componentes

```text
CP-002 Encabezado
CP-003 Navegación
CP-006 Pie
CP-038 Estado de error
```

---

## Error de carga

### Fuente

```text
docs/TECHNICAL_ARCHITECTURE.md
docs/COMPONENT_INVENTORY.md
```

### Componentes

```text
CP-027 Mensaje de estado
CP-038 Estado de error
```

### Regla editorial

El mensaje debe:

- explicar el problema;
- ofrecer una alternativa;
- evitar detalles técnicos;
- no culpar al usuario.

---

## Estado vacío

### Fuente

```text
docs/COMPONENT_INVENTORY.md
```

### Componentes

```text
CP-037 Estado vacío
CP-025 Limpiar filtros
```

---

# Mapeo de historias de usuario

| Historia | Página principal | Componentes |
|---|---|---|
| US-001 | Inicio | Aviso de prototipo, tarjetas |
| US-002 | Momentos | Tarjetas de momento y sesión |
| US-003 | Sesión | Resumen, pasos, producto |
| US-004 | Lenguaje | Tarjetas bilingües, filtros |
| US-005 | Preguntas restaurativas | Tarjetas, advertencias |
| US-006 | Mensajes de paz | Tarjetas, copiar |
| US-007 | Privacidad | Avisos y guía |
| US-008 | Alternativas desconectadas | Tarjetas y versión imprimible |
| US-009 | Guía de sesión | Resumen y alertas docentes |
| US-010 | Evaluación | Evidencias y rúbricas |
| US-011 | Recursos | Listas y descargas |
| US-012 | IA responsable | Prompts y avisos |
| US-013 | Protección | Alertas y rutas |
| US-014 | Alcance | Aviso de prototipo |
| US-015 | Documentación | Enlaces al repositorio |
| US-016 | Todas | Navegación con teclado |
| US-017 | Todas | Responsive y zoom |
| US-018 | Todas | Semántica y estados |
| US-019 | Documentación | Registro de decisiones |
| US-020 | Datos | Validación JSON |
| US-021 | Repositorio | Guía de contribución |

---

# Mapeo de componentes a fuentes

| Componente | Fuente principal |
|---|---|
| Aviso de prototipo | `PROJECT_BRIEF.md` |
| Aviso de privacidad | `PRIVACY.md` |
| Aviso de IA | `knowledge/prompts/` |
| Alerta docente | `PEDAGOGICAL_FRAMEWORK.md`, `PRIVACY.md` |
| Tarjeta de momento | `unit-content.json` |
| Tarjeta de sesión | `unit-content.json` |
| Tarjeta bilingüe | `knowledge/language/` |
| Pregunta restaurativa | `RESTORATIVE_LANGUAGE.md` |
| Mensaje de paz | `PEACE_MESSAGES.md` |
| Rúbrica | `knowledge/pedagogy/RUBRICS.md` |
| Alternativa desconectada | `knowledge/moments/` |
| Plantilla de prompt | `knowledge/prompts/` |
| Autoría | `README.md`, `PROJECT_BRIEF.md` |

---

# Mapeo de cambios

## Cambio en propósito

Actualizar:

```text
PROJECT_BRIEF.md
README.md
knowledge/00_PROJECT_OVERVIEW.md
knowledge/data/unit-content.json
docs/data/unit-content.json
docs/index.html
docs/about/index.html
docs/about/scope.html
CHANGELOG.md
```

---

## Cambio en una sesión

Actualizar:

```text
knowledge/moments/MOMENT_X.md
knowledge/data/unit-content.json
docs/data/unit-content.json
página de sesión
página del momento
docs/CONTENT_MAPPING.md
CHANGELOG.md
```

---

## Cambio en una expresión

Actualizar:

```text
knowledge/language/KEY_EXPRESSIONS.md
knowledge/data/unit-content.json
docs/data/unit-content.json
docs/language/key-expressions.html
```

---

## Cambio en privacidad

Actualizar:

```text
PRIVACY.md
DESIGN_DECISIONS.md
knowledge/
knowledge/data/unit-content.json
docs/data/unit-content.json
páginas con avisos
COMPONENT_INVENTORY.md
CHANGELOG.md
```

---

## Cambio en accesibilidad

Actualizar:

```text
ACCESSIBILITY.md
DESIGN_SYSTEM.md
COMPONENT_INVENTORY.md
TECHNICAL_ARCHITECTURE.md
código relacionado
TESTING_PLAN.md
CHANGELOG.md
```

---

## Cambio en la estructura del JSON

Actualizar:

```text
docs/DATA_SCHEMA.md
knowledge/data/unit-content.json
docs/data/unit-content.json
docs/js/
docs/CONTENT_MAPPING.md
DESIGN_DECISIONS.md
CHANGELOG.md
```

---

# Flujo editorial

## Crear contenido nuevo

```text
Definir necesidad
        ↓
Relacionar con historia
        ↓
Escribir en fuente pedagógica
        ↓
Revisar lenguaje y privacidad
        ↓
Estructurar en JSON
        ↓
Validar
        ↓
Integrar en página
        ↓
Probar componente
        ↓
Registrar cambio
```

---

## Corregir contenido existente

```text
Corregir fuente original
        ↓
Actualizar JSON
        ↓
Copiar datos
        ↓
Revisar interfaz
        ↓
Actualizar documentación relacionada
```

No se debe corregir únicamente el texto visible en HTML cuando existe una fuente anterior.

---

# Reglas contra duplicación

No copiar un bloque completo en múltiples archivos si puede:

- reutilizarse desde JSON;
- enlazarse;
- resumirse;
- transformarse desde una fuente común.

La duplicación puede justificarse cuando:

- mejora la comprensión;
- el contenido debe estar disponible sin JavaScript;
- se trata de una advertencia esencial;
- se necesita una versión imprimible;
- el público requiere una adaptación diferente.

Toda duplicación importante debe documentar cuál versión es la fuente principal.

---

# Reglas de transformación

Una transformación debe conservar:

- intención;
- significado;
- restricciones;
- advertencias;
- nivel lingüístico;
- propósito pedagógico.

No debe:

- simplificar hasta perder sentido;
- eliminar advertencias;
- cambiar el enfoque restaurativo;
- convertir una orientación en una orden punitiva;
- presentar un prototipo como producto final.

---

# Revisión de contenido generado con IA

Cuando se utilice IA para redactar o transformar contenido:

1. comparar con la fuente;
2. revisar exactitud;
3. revisar tono;
4. revisar traducción;
5. revisar privacidad;
6. revisar sesgos;
7. revisar accesibilidad;
8. corregir manualmente;
9. registrar su uso cuando corresponda.

La IA no se considera fuente de verdad.

---

# Lista de verificación por página

Antes de publicar una página:

- [ ] Tiene una fuente identificada.
- [ ] Responde a una historia.
- [ ] Utiliza componentes definidos.
- [ ] El contenido coincide con la fuente.
- [ ] El JSON está sincronizado cuando aplica.
- [ ] No contiene datos personales.
- [ ] Incluye advertencias necesarias.
- [ ] Utiliza lenguaje claro.
- [ ] Funciona con teclado.
- [ ] Funciona en móvil.
- [ ] Tiene manejo de errores.
- [ ] La documentación relacionada fue actualizada.

---

# Lista de verificación por dato

Antes de añadir un campo al JSON:

- [ ] Existe una necesidad de interfaz.
- [ ] Tiene una fuente pedagógica.
- [ ] Está documentado en `DATA_SCHEMA.md`.
- [ ] Tiene un tipo claro.
- [ ] No contiene datos personales.
- [ ] No duplica un campo existente.
- [ ] El código puede manejar su ausencia.
- [ ] Se actualizó la versión cuando corresponde.

---

# Responsables sugeridos

| Área | Responsabilidad principal |
|---|---|
| Propósito y alcance | Liderazgo del proyecto |
| Secuencia pedagógica | Docente responsable |
| Inglés y traducciones | Docente de inglés |
| Convivencia y restauración | Equipo pedagógico |
| Privacidad | Responsable institucional y liderazgo |
| Accesibilidad | Diseño y desarrollo |
| JSON | Desarrollo y revisión pedagógica |
| Interfaz | Desarrollo |
| Publicación | Administración del repositorio |
| Sistematización | Equipo de investigación |

Una misma persona puede cumplir varios roles durante la fase de prototipo.

---

# Decisiones pendientes

Debe confirmarse:

- si todas las colecciones lingüísticas estarán en el JSON;
- si los recursos imprimibles tendrán metadatos estructurados;
- si la guía docente se construirá desde Markdown o HTML manual;
- si las sesiones usarán una plantilla dinámica;
- si existirá una página pública de documentación;
- si se automatizará la copia de datos;
- si se generarán páginas estáticas a partir del JSON.

Estas decisiones deben registrarse en:

```text
DESIGN_DECISIONS.md
```

---

## Criterio de finalización

El mapeo se considera suficiente para iniciar el desarrollo cuando:

- cada página prioritaria tiene una fuente;
- cada página se relaciona con historias;
- los componentes están identificados;
- los datos tienen trazabilidad;
- las responsabilidades están claras;
- los flujos de actualización están definidos;
- no existen páginas prioritarias sin contenido fuente.

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- se añade una página;
- se elimina una página;
- cambia una fuente;
- cambia el JSON;
- se añade un componente;
- cambia una historia de usuario;
- se incorpora un recurso;
- una prueba detecta una contradicción;
- cambia la responsabilidad de mantenimiento.

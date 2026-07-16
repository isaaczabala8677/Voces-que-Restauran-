# Roadmap

## Propósito

Este documento organiza las fases, entregas, prioridades, dependencias y condiciones de avance de **Voces que Restauran**.

La hoja de ruta distingue entre:

- documentación;
- desarrollo técnico;
- pruebas;
- publicación;
- implementación pedagógica;
- sistematización;
- posible aplicación futura.

---

## Principio general

El proyecto sigue esta secuencia:

```text
Comprender
        ↓
Definir
        ↓
Documentar
        ↓
Diseñar
        ↓
Desarrollar
        ↓
Probar
        ↓
Publicar
        ↓
Implementar
        ↓
Sistematizar
        ↓
Evaluar posibilidades futuras
```

La aplicación futura no se construirá antes de la implementación pedagógica.

---

## Estados

```text
No iniciada
En preparación
En curso
En revisión
Completada inicialmente
Completada
Bloqueada
Pospuesta
```

---

# Estado general

```text
Definición estratégica: completada inicialmente
Arquitectura documental: completada
Base de conocimiento: completada inicialmente
Arquitectura de información: completada
Arquitectura técnica: completada
Planificación de desarrollo: completada
Sincronización documental: en curso
Entrega 0: no iniciada
Entrega 1: no iniciada
Entrega 2: no iniciada
Entrega 3: no iniciada
Entrega 4: no iniciada
Implementación pedagógica: no iniciada
Sistematización: no iniciada
Aplicación futura: pospuesta
```

---

# Fase de definición estratégica

**Estado:** Completada inicialmente

## Objetivo

Definir:

- problema;
- propósito;
- población;
- alcance;
- exclusiones;
- entregables;
- usuarios;
- criterios de éxito;
- riesgos.

## Entregables

```text
PROJECT_BRIEF.md
README.md
```

## Resultado

El producto actual quedó definido como:

> una unidad didáctica interdisciplinaria apoyada por un recurso web estático.

---

# Fase de arquitectura documental

**Estado:** Completada

## Objetivo

Organizar el repositorio y definir la función de cada área.

## Estructura

```text
docs/
future-app/
knowledge/
research/
```

## Entregables

```text
README.md
DESIGN_DECISIONS.md
knowledge/KNOWLEDGE_ARCHITECTURE.md
```

---

# Fase de base de conocimiento

**Estado:** Completada inicialmente

## Objetivo

Documentar la unidad pedagógica.

## Contenido

```text
knowledge/
├── contexto
├── transferencia
├── población
├── unidad
├── momentos
├── pedagogía
├── lenguaje
├── prompts
└── datos
```

## Resultado

Se documentaron:

- cuatro momentos;
- dieciséis sesiones;
- treinta y dos horas;
- evaluación;
- evidencias;
- productos;
- recursos lingüísticos;
- prompts;
- alternativas desconectadas;
- criterios de privacidad.

---

# Fase de arquitectura de información

**Estado:** Completada

## Objetivo

Definir páginas, navegación y componentes.

## Entregables

```text
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
```

## Resultado

Se definieron:

- navegación principal;
- estructura de páginas;
- páginas de momentos;
- páginas de lenguaje;
- recursos;
- guía docente;
- páginas institucionales;
- estados del sistema;
- componentes reutilizables.

---

# Fase de arquitectura técnica

**Estado:** Completada

## Objetivo

Definir tecnologías, estructura, datos, renderizado, pruebas y despliegue.

## Entregables

```text
docs/TECHNICAL_ARCHITECTURE.md
docs/IMPLEMENTATION_PLAN.md
docs/DATA_SCHEMA.md
docs/CONTENT_MAPPING.md
docs/TESTING_PLAN.md
docs/DEPLOYMENT.md
docs/README.md
```

## Decisiones principales

- HTML, CSS y JavaScript sin framework;
- publicación desde `docs/`;
- GitHub Pages;
- JSON local;
- recursos locales;
- sin almacenamiento;
- sin analítica;
- sin APIs externas;
- desarrollo por entregas;
- implementación mediante Codex.

---

# Fase de sincronización documental

**Estado:** En curso

## Objetivo

Alinear los documentos existentes con las decisiones técnicas recientes.

## Documentos prioritarios

```text
DESIGN_DECISIONS.md
ROADMAP.md
CHANGELOG.md
```

## Criterios de cierre

- Codex aparece como entorno de implementación;
- las decisiones técnicas están registradas;
- el roadmap incluye las entregas;
- el changelog registra la fase documental;
- no existen contradicciones sobre el producto actual;
- la aplicación futura permanece pospuesta.

---

# Entrega 0 — Preparación técnica

**Estado:** No iniciada

## Objetivo

Crear una base técnica mínima y funcional.

## Implementación

La realizará Codex conectado al repositorio.

## Alcance

```text
docs/index.html
docs/404.html
docs/css/
docs/js/
docs/data/unit-content.json
carpetas previstas
servidor local
validaciones iniciales
```

## Archivos iniciales

```text
docs/css/base.css
docs/css/layout.css
docs/css/components.css
docs/css/utilities.css
docs/css/print.css
docs/js/main.js
docs/js/navigation.js
docs/js/data-loader.js
```

## Tareas

- crear estructura;
- copiar JSON;
- validar JSON;
- construir HTML mínimo;
- definir estilos base;
- implementar enlace para saltar;
- implementar navegación inicial;
- comprobar servidor local;
- revisar ausencia de servicios externos.

## Criterios de cierre

- el sitio abre localmente;
- los archivos cargan;
- el JSON es válido;
- no existen errores críticos;
- existe navegación mínima;
- existe foco visible;
- no se recopilan datos.

---

# Entrega 1 — Estructura mínima funcional

**Estado:** No iniciada

## Objetivo

Construir las páginas esenciales.

## Páginas

```text
docs/index.html
docs/moments/index.html
docs/about/index.html
docs/about/scope.html
docs/teacher-guide/privacy.html
docs/404.html
```

## Funciones

- navegación;
- menú móvil;
- tarjetas;
- avisos;
- alcance;
- privacidad;
- errores.

## Historias

```text
US-001
US-002
US-007
US-014
US-016
US-017
US-018
```

## Criterios de cierre

El usuario puede:

- comprender el proyecto;
- acceder a momentos;
- consultar privacidad;
- consultar alcance;
- navegar con teclado;
- utilizar el sitio desde móvil.

---

# Entrega 2 — Contenido pedagógico principal

**Estado:** No iniciada

## Objetivo

Implementar momentos, sesiones y expresiones prioritarias.

## Páginas

```text
docs/moments/moment-1.html
docs/moments/moment-2.html
docs/moments/moment-3.html
docs/moments/moment-4.html
docs/moments/session.html
docs/language/index.html
docs/language/key-expressions.html
```

## Decisiones

- plantilla dinámica inicial para sesiones;
- vista docente y estudiantil en una misma página;
- contenido diferenciado mediante secciones.

## Criterios de cierre

- cuatro momentos disponibles;
- dieciséis sesiones consultables;
- parámetros manejados correctamente;
- alternativas desconectadas visibles;
- privacidad visible;
- contenido docente diferenciado;
- expresiones bilingües disponibles.

---

# Entrega 3 — Lenguaje, recursos y guía docente

**Estado:** No iniciada

## Objetivo

Completar los recursos pedagógicos e interacciones locales.

## Páginas

```text
docs/language/glossary.html
docs/language/restorative-questions.html
docs/language/peace-messages.html
docs/resources/
docs/teacher-guide/
```

## Funciones

- filtros;
- búsqueda local;
- copiar texto;
- acordeones;
- recursos;
- prompts;
- rúbricas;
- impresión.

## Criterios de cierre

- recursos lingüísticos disponibles;
- preguntas restaurativas visibles;
- mensajes de paz disponibles;
- prompts seguros;
- guía docente completa;
- evaluación accesible;
- recursos imprimibles;
- alternativas desconectadas.

---

# Entrega 4 — Pruebas y publicación

**Estado:** No iniciada

## Objetivo

Validar, corregir y publicar el recurso.

## Actividades

- pruebas funcionales;
- pruebas de accesibilidad;
- revisión de privacidad;
- pruebas responsive;
- pruebas de contenido;
- pruebas de impresión;
- pruebas en GitHub Pages;
- corrección de errores;
- actualización documental.

## Despliegue previsto

```text
GitHub Pages
Branch: main
Folder: /docs
```

## Criterios de cierre

- URL pública confirmada;
- sin hallazgos críticos;
- navegación funcional;
- JSON cargando;
- rutas correctas;
- accesibilidad básica comprobada;
- privacidad revisada;
- documentación actualizada.

---

# Fase de preparación pedagógica

**Estado:** No iniciada

## Objetivo

Preparar la implementación con estudiantes.

## Entregables

- guía docente;
- materiales imprimibles;
- rúbricas;
- protocolos de cuidado;
- alternativas desconectadas;
- plan de contingencia;
- selección de grupos;
- cronograma.

## Dependencia

No debe comenzar antes de completar las pruebas principales del recurso.

---

# Fase de implementación pedagógica

**Estado:** No iniciada

## Objetivo

Implementar la unidad durante:

```text
8 semanas
16 sesiones
32 horas
```

## Evidencias posibles

- productos colectivos;
- prototipos;
- registros docentes;
- rúbricas;
- reflexiones generales;
- observaciones anonimizadas;
- versiones de diseño.

## Restricciones

No registrar en el repositorio:

- nombres;
- relatos;
- calificaciones individuales;
- conflictos;
- información sensible.

---

# Fase de evaluación y sistematización

**Estado:** No iniciada

## Ubicación

```text
research/
```

## Objetivo

Analizar:

- utilidad;
- participación;
- uso del inglés;
- comprensión de convivencia;
- lenguaje restaurativo;
- uso crítico de IA;
- experiencia de usuario;
- barreras;
- prototipos;
- recomendaciones.

## Productos

- informe;
- hallazgos anonimizados;
- recomendaciones;
- mejoras;
- requisitos futuros.

---

# Fase de mejora

**Estado:** No iniciada

## Objetivo

Actualizar el recurso con base en:

- pruebas;
- implementación;
- observaciones;
- accesibilidad;
- retroalimentación;
- hallazgos pedagógicos.

---

# Fase de aplicación futura

**Estado:** Pospuesta

## Ubicación

```text
future-app/
```

## Condiciones mínimas

No podrá comenzar hasta contar con:

1. implementación completada;
2. necesidades validadas;
3. resultados analizados;
4. participación estudiantil;
5. aprobación institucional;
6. revisión jurídica;
7. evaluación de datos;
8. plan de seguridad;
9. responsables definidos;
10. sostenibilidad.

## Posibles conclusiones

La evaluación puede determinar que:

- se necesita una aplicación;
- basta con mejorar el sitio;
- se necesita otro tipo de recurso;
- no es conveniente crear una aplicación.

---

# Herramientas de trabajo

## Esta conversación

Se utilizará para:

- decisiones pedagógicas;
- alcance;
- contenido;
- diseño de experiencia;
- revisión;
- criterios de aceptación;
- evaluación de resultados.

## Codex

Se utilizará para:

- implementación;
- creación de archivos;
- ejecución de comandos;
- validación;
- pruebas;
- corrección;
- preparación de commits.

---

# Dependencias

```text
Documentación
        ↓
Decisiones sincronizadas
        ↓
Prompt para Codex
        ↓
Entrega 0
        ↓
Entrega 1
        ↓
Entrega 2
        ↓
Entrega 3
        ↓
Entrega 4
        ↓
Implementación pedagógica
```

---

# Próximo hito

El próximo hito es:

> preparar el prompt maestro para Codex e iniciar la Entrega 0 sin construir todavía el sitio completo.

---

# Criterios de actualización

Este roadmap debe actualizarse cuando:

- inicia una entrega;
- termina una entrega;
- aparece un bloqueo;
- cambia una decisión;
- se publica una versión;
- se inicia implementación;
- cambia el alcance;
- se evalúa la aplicación futura.

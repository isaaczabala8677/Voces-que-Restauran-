# Roadmap

## Propósito

Este documento organiza las fases, prioridades, hitos y condiciones de avance de **Voces que Restauran**.

La hoja de ruta distingue entre:

- documentación;
- recurso web;
- implementación pedagógica;
- investigación;
- posible aplicación futura.

---

## Principio de desarrollo

El proyecto sigue esta secuencia:

```text
Comprender el problema
        ↓
Definir el alcance
        ↓
Documentar la unidad
        ↓
Diseñar el recurso
        ↓
Construir un prototipo estático
        ↓
Probar
        ↓
Implementar
        ↓
Sistematizar
        ↓
Formular recomendaciones
        ↓
Evaluar una aplicación futura
```

La aplicación futura no se construye antes de la implementación pedagógica y la cocreación con estudiantes.

---

## Estados

Cada fase puede tener uno de estos estados:

```text
No iniciada
En preparación
En curso
En revisión
Completada
Bloqueada
Pospuesta
```

---

## Fase de definición estratégica

**Estado:** Completada inicialmente

### Objetivo

Definir:

- problema;
- propósito;
- población;
- alcance;
- exclusiones;
- entregables;
- criterios de éxito;
- riesgos.

### Entregables

```text
PROJECT_BRIEF.md
README.md
```

### Criterios de cierre

- el producto actual está claramente definido;
- la aplicación futura se distingue de la unidad;
- se identifican usuarios;
- se establecen restricciones;
- se documentan criterios de éxito.

---

## Fase de arquitectura documental

**Estado:** Completada inicialmente

### Objetivo

Definir la organización del repositorio y la función de cada archivo.

### Entregables

```text
README.md
DESIGN_DECISIONS.md
knowledge/KNOWLEDGE_ARCHITECTURE.md
```

### Estructura principal

```text
docs/
future-app/
knowledge/
research/
```

### Criterios de cierre

- cada carpeta tiene una función;
- no existen duplicaciones no justificadas;
- las fuentes de verdad están definidas;
- las decisiones se registran.

---

## Fase de base de conocimiento

**Estado:** Completada inicialmente

### Objetivo

Documentar la unidad didáctica completa.

### Entregables

```text
knowledge/
```

Incluye:

- contexto;
- transferencia desde Corea;
- población;
- unidad;
- momentos;
- sesiones;
- evaluación;
- productos;
- lenguaje;
- prompts;
- datos.

### Criterios de cierre

- existen 4 momentos;
- existen 16 sesiones;
- la duración total es de 32 horas;
- los productos están documentados;
- la evaluación está definida;
- existen medidas de privacidad;
- existen alternativas desconectadas.

---

## Fase de sincronización documental

**Estado:** En curso

### Objetivo

Alinear todos los documentos principales con las decisiones vigentes.

### Archivos a revisar

```text
README.md
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

### Tareas

- revisar alcance;
- eliminar referencias contradictorias;
- incluir la estructura real;
- verificar privacidad;
- verificar accesibilidad;
- actualizar relaciones entre documentos;
- registrar cambios.

### Criterios de cierre

- no se presenta una aplicación como producto inmediato;
- todos los archivos reconocen el recurso web estático;
- `CONTENT_GUIDELINES.md` aparece en la arquitectura;
- las historias de usuario coinciden con el alcance;
- el `CHANGELOG.md` refleja la actualización.

---

## Fase de historias de usuario

**Estado:** En revisión

### Objetivo

Traducir las necesidades del recurso web en historias verificables.

### Entregable

```text
USER_STORIES.md
```

### Tareas

- definir roles;
- identificar necesidades;
- redactar criterios de aceptación;
- establecer prioridades;
- incorporar privacidad;
- incorporar accesibilidad;
- diferenciar historias actuales y futuras.

### Criterios de cierre

- las historias describen el recurso actual;
- no incluyen almacenamiento;
- no incluyen gestión de casos;
- cada historia tiene criterios de aceptación;
- las historias prioritarias pueden convertirse en páginas o componentes.

---

## Fase de arquitectura de información

**Estado:** No iniciada

### Objetivo

Definir cómo se organiza y navega el recurso web.

### Entregables previstos

```text
docs/README.md
Mapa del sitio
Mapa de navegación
Inventario de páginas
Inventario de componentes
```

### Estructura inicial posible

```text
Inicio
Proyecto
Momentos
Sesiones
Lenguaje
Recursos
Guía docente
Privacidad
Accesibilidad
```

### Tareas

- definir navegación principal;
- relacionar historias de usuario con páginas;
- definir jerarquía;
- diseñar navegación móvil;
- establecer rutas;
- identificar contenido imprimible.

### Criterios de cierre

- cada página responde a una necesidad;
- no existen páginas sin propósito;
- la navegación es comprensible;
- el contenido docente y estudiantil está diferenciado.

---

## Fase de diseño visual

**Estado:** No iniciada

### Objetivo

Transformar el sistema de diseño en decisiones visuales aplicables.

### Documento base

```text
DESIGN_SYSTEM.md
```

### Entregables previstos

- paleta validada;
- escala tipográfica;
- espaciado;
- componentes;
- estados;
- diseño responsive;
- plantillas de páginas;
- prototipo de navegación.

### Criterios de cierre

- contraste validado;
- foco visible;
- componentes consistentes;
- diseño móvil;
- lenguaje visual no punitivo;
- movimiento reducido contemplado.

---

## Fase de datos estructurados

**Estado:** Completada inicialmente

### Objetivo

Preparar contenido estructurado para la interfaz.

### Entregable

```text
knowledge/data/unit-content.json
```

### Tareas pendientes

- comprobar coherencia con Markdown;
- validar estructura;
- documentar campos;
- revisar traducciones;
- revisar duración y sesiones;
- definir cómo se copiarán los datos hacia `docs/`.

### Validación

```bash
python -m json.tool knowledge/data/unit-content.json
```

### Criterios de cierre

- JSON válido;
- 4 momentos;
- 16 sesiones;
- 32 horas;
- contenido sincronizado;
- campos documentados.

---

## Fase de desarrollo del recurso web

**Estado:** No iniciada

### Objetivo

Construir la primera versión funcional del recurso.

### Ubicación

```text
docs/
```

### Tecnologías iniciales

- HTML;
- CSS;
- JavaScript;
- JSON local.

### Alcance mínimo

- página de inicio;
- presentación del proyecto;
- navegación por momentos;
- sesiones;
- tarjetas bilingües;
- preguntas restaurativas;
- recursos docentes;
- avisos de privacidad;
- diseño responsive;
- recursos imprimibles.

### Funciones excluidas

- autenticación;
- cuentas;
- bases de datos;
- formularios con envío;
- analítica;
- almacenamiento;
- conexión directa con IA;
- gestión de casos.

### Criterios de cierre

- el recurso funciona localmente;
- no existen errores críticos;
- la navegación es clara;
- el contenido se carga correctamente;
- no se recopilan datos;
- las páginas prioritarias están implementadas.

---

## Fase de pruebas técnicas

**Estado:** No iniciada

### Objetivo

Comprobar funcionamiento, compatibilidad y estabilidad.

### Pruebas

- enlaces;
- navegación;
- carga de datos;
- consola;
- diferentes navegadores;
- dispositivos móviles;
- Chromebook;
- impresión;
- modo sin conexión cuando sea posible.

### Criterios de cierre

- no existen enlaces rotos;
- no existen errores críticos de consola;
- el contenido es legible;
- la navegación funciona;
- las alternativas imprimibles están disponibles.

---

## Fase de pruebas de accesibilidad

**Estado:** No iniciada

### Documento base

```text
ACCESSIBILITY.md
```

### Pruebas

- teclado;
- foco;
- contraste;
- zoom;
- lectores de pantalla;
- orden de encabezados;
- textos alternativos;
- movimiento reducido;
- tamaños táctiles;
- móvil.

### Criterios de cierre

- todo funciona con teclado;
- el foco es visible;
- no se depende solo del color;
- las imágenes tienen alternativa;
- la estructura es semántica;
- el contenido funciona con zoom.

---

## Fase de revisión de privacidad

**Estado:** No iniciada

### Documento base

```text
PRIVACY.md
```

### Comprobaciones

- ausencia de formularios con envío;
- ausencia de almacenamiento;
- ausencia de analítica;
- ausencia de datos personales;
- ausencia de servicios externos;
- contenido ficticio;
- advertencias visibles.

### Criterios de cierre

- el recurso no transmite información;
- no crea identificadores;
- no almacena respuestas;
- no solicita datos;
- no funciona como canal de denuncias.

---

## Fase de preparación docente

**Estado:** No iniciada

### Objetivo

Preparar materiales para la implementación.

### Entregables

- guía de implementación;
- materiales imprimibles;
- listas de cotejo;
- rúbricas;
- protocolos de cuidado;
- plan de contingencia;
- alternativas desconectadas.

### Criterios de cierre

- el docente puede implementar cada sesión;
- los materiales están disponibles;
- las rutas institucionales están claras;
- existen opciones para baja conectividad.

---

## Fase de implementación pedagógica

**Estado:** No iniciada

### Objetivo

Implementar la unidad con estudiantes.

### Condiciones previas

- documentación revisada;
- recurso web probado;
- materiales preparados;
- privacidad revisada;
- accesibilidad básica comprobada;
- aprobación institucional cuando corresponda.

### Evidencias posibles

- productos colectivos;
- observaciones docentes;
- registros anonimizados;
- rúbricas;
- versiones de prototipos;
- reflexiones generales.

### Restricción

No se recopilarán datos personales ni relatos sensibles dentro del repositorio.

---

## Fase de evaluación y sistematización

**Estado:** No iniciada

### Objetivo

Analizar:

- utilidad pedagógica;
- participación;
- comprensión;
- uso del inglés;
- lenguaje restaurativo;
- experiencia del recurso;
- barreras;
- propuestas estudiantiles.

### Ubicación

```text
research/
```

### Entregables previstos

- informe de implementación;
- hallazgos anonimizados;
- recomendaciones;
- barreras identificadas;
- mejoras al recurso;
- necesidades futuras.

---

## Fase de mejora del recurso

**Estado:** No iniciada

### Objetivo

Actualizar el recurso con base en:

- pruebas;
- implementación;
- retroalimentación;
- accesibilidad;
- hallazgos pedagógicos.

### Tareas

- priorizar mejoras;
- actualizar historias;
- actualizar contenido;
- corregir interfaz;
- registrar decisiones;
- publicar nueva versión.

---

## Fase de aplicación futura

**Estado:** No iniciada

### Ubicación conceptual

```text
future-app/
```

### Condiciones para comenzar

No debe iniciarse hasta contar con:

1. resultados de implementación;
2. necesidades validadas;
3. participación estudiantil;
4. revisión institucional;
5. análisis de riesgos;
6. definición de responsables;
7. revisión jurídica;
8. definición de datos;
9. plan de seguridad;
10. criterios de sostenibilidad.

### Posibles resultados

La evaluación puede concluir que:

- se necesita una aplicación;
- se necesita solo mejorar el recurso web;
- se necesita otro tipo de material;
- no es apropiado desarrollar una aplicación.

---

## Prioridades

### Prioridad alta

- sincronizar documentos;
- revisar historias de usuario;
- definir arquitectura de información;
- diseñar navegación;
- construir recurso estático;
- validar privacidad y accesibilidad.

### Prioridad media

- preparar materiales imprimibles;
- realizar pruebas con docentes;
- mejorar lenguaje visual;
- documentar componentes.

### Prioridad futura

- aplicación institucional;
- almacenamiento;
- autenticación;
- integraciones;
- automatización.

Estas funciones futuras no están aprobadas por aparecer en esta lista.

---

## Dependencias principales

```text
PROJECT_BRIEF.md
        ↓
USER_STORIES.md
        ↓
Arquitectura de información
        ↓
Diseño
        ↓
Desarrollo
        ↓
Pruebas
        ↓
Implementación
        ↓
Evaluación
        ↓
Futuro
```

---

## Próximo hito

El siguiente hito del proyecto es:

> definir la arquitectura de información del recurso web y convertir las historias de usuario prioritarias en páginas, componentes y criterios de prueba.

---

## Criterio de actualización

Este roadmap debe actualizarse cuando:

- se completa una fase;
- cambia el alcance;
- aparece un bloqueo;
- se agrega una dependencia;
- se inicia implementación;
- se define una versión;
- cambia la aplicación futura.

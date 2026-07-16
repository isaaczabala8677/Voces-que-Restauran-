# Inventario de componentes

## Propósito

Este documento define los componentes reutilizables previstos para el recurso web de **Voces que Restauran**.

El inventario permite establecer:

- nombre;
- propósito;
- páginas donde se utiliza;
- contenido;
- comportamiento;
- estados;
- requisitos de privacidad;
- requisitos de accesibilidad;
- prioridad;
- estado de desarrollo.

Debe utilizarse junto con:

```text
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
USER_STORIES.md
DESIGN_SYSTEM.md
DESIGN_DECISIONS.md
CONTENT_GUIDELINES.md
PRIVACY.md
ACCESSIBILITY.md
```

---

## Alcance

Los componentes corresponden a un recurso web:

- estático;
- responsive;
- accesible;
- sin autenticación;
- sin cuentas;
- sin almacenamiento de respuestas;
- sin seguimiento;
- sin formularios de envío;
- sin conexión directa con servicios externos de IA.

---

## Principios

Todo componente debe:

- responder a una necesidad documentada;
- utilizar HTML semántico;
- funcionar con teclado;
- mostrar foco visible;
- adaptarse a dispositivos móviles;
- evitar recopilar datos;
- mantener lenguaje claro;
- comunicar sus estados;
- poder utilizarse sin depender únicamente del color;
- degradarse de manera comprensible cuando JavaScript no esté disponible.

---

## Estados posibles

Cada componente puede tener uno de estos estados:

```text
Propuesto
Aprobado
En diseño
En desarrollo
En revisión
Completado
Pospuesto
Descartado
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

## Categorías

Los componentes se organizan en:

- estructura global;
- navegación;
- presentación de contenido;
- interacción;
- lenguaje;
- recursos;
- guía docente;
- mensajes del sistema;
- accesibilidad;
- impresión.

---

## Resumen general

| ID | Componente | Categoría | Prioridad | Estado |
|---|---|---|---|---|
| CP-001 | Enlace para saltar al contenido | Accesibilidad | Alta | Aprobado |
| CP-002 | Encabezado global | Estructura | Alta | Aprobado |
| CP-003 | Navegación principal | Navegación | Alta | Aprobado |
| CP-004 | Menú móvil | Navegación | Alta | En diseño |
| CP-005 | Migas de navegación | Navegación | Alta | Aprobado |
| CP-006 | Pie de página | Estructura | Alta | Aprobado |
| CP-007 | Aviso de prototipo | Mensaje | Alta | Aprobado |
| CP-008 | Aviso de privacidad | Mensaje | Alta | Aprobado |
| CP-009 | Encabezado de página | Presentación | Alta | Aprobado |
| CP-010 | Tarjeta de acceso | Presentación | Alta | Aprobado |
| CP-011 | Tarjeta de momento | Presentación | Alta | Aprobado |
| CP-012 | Tarjeta de sesión | Presentación | Alta | Aprobado |
| CP-013 | Resumen de sesión | Presentación | Alta | Aprobado |
| CP-014 | Secuencia de pasos | Presentación | Alta | Aprobado |
| CP-015 | Lista de materiales | Presentación | Alta | Aprobado |
| CP-016 | Producto esperado | Presentación | Alta | Aprobado |
| CP-017 | Evidencia de aprendizaje | Presentación | Alta | Aprobado |
| CP-018 | Alternativa desconectada | Recursos | Alta | Aprobado |
| CP-019 | Alerta docente | Guía docente | Alta | Aprobado |
| CP-020 | Tarjeta bilingüe | Lenguaje | Alta | Aprobado |
| CP-021 | Tarjeta de pregunta restaurativa | Lenguaje | Alta | Aprobado |
| CP-022 | Tarjeta de mensaje de paz | Lenguaje | Media | Aprobado |
| CP-023 | Filtro por categoría | Interacción | Media | En diseño |
| CP-024 | Búsqueda local | Interacción | Media | En diseño |
| CP-025 | Botón para limpiar filtros | Interacción | Media | En diseño |
| CP-026 | Botón para copiar texto | Interacción | Media | Aprobado |
| CP-027 | Mensaje de estado | Sistema | Alta | Aprobado |
| CP-028 | Acordeón accesible | Interacción | Media | En diseño |
| CP-029 | Navegación anterior y siguiente | Navegación | Alta | Aprobado |
| CP-030 | Selector de vista docente o estudiantil | Navegación | Alta | Pendiente |
| CP-031 | Tabla responsive | Presentación | Media | En diseño |
| CP-032 | Lista de recursos descargables | Recursos | Alta | Aprobado |
| CP-033 | Tarjeta de recurso | Recursos | Alta | Aprobado |
| CP-034 | Plantilla de prompt | Recursos | Media | Aprobado |
| CP-035 | Lista de verificación | Presentación | Alta | Aprobado |
| CP-036 | Rúbrica accesible | Guía docente | Alta | En diseño |
| CP-037 | Estado vacío | Sistema | Alta | Aprobado |
| CP-038 | Estado de error | Sistema | Alta | Aprobado |
| CP-039 | Estado de carga | Sistema | Media | Aprobado |
| CP-040 | Recurso no disponible | Sistema | Media | Aprobado |
| CP-041 | Enlace de descarga | Recursos | Alta | Aprobado |
| CP-042 | Etiqueta de idioma | Lenguaje | Alta | Aprobado |
| CP-043 | Etiqueta de duración | Presentación | Media | Aprobado |
| CP-044 | Etiqueta de público | Presentación | Media | Aprobado |
| CP-045 | Aviso de uso responsable de IA | Mensaje | Alta | Aprobado |
| CP-046 | Aviso de ruta institucional | Mensaje | Alta | Aprobado |
| CP-047 | Bloque de autoría y reconocimiento | Presentación | Media | Aprobado |
| CP-048 | Versión imprimible | Impresión | Alta | En diseño |
| CP-049 | Diálogo modal | Interacción | Baja | Pospuesto |
| CP-050 | Notificación temporal | Sistema | Baja | Pospuesto |

---

# Estructura global

## CP-001 — Enlace para saltar al contenido

**Categoría:** Accesibilidad

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Permitir que usuarios de teclado eviten recorrer repetidamente la navegación y accedan directamente al contenido principal.

### Texto sugerido

```text
Saltar al contenido principal
```

### Implementación esperada

```html
<a class="skip-link" href="#main-content">
  Saltar al contenido principal
</a>
```

El contenido principal debe incluir:

```html
<main id="main-content">
```

### Comportamiento

- permanece visualmente oculto cuando no tiene foco;
- aparece al recibir foco;
- mueve el foco o la navegación al contenido principal;
- debe ser el primer elemento interactivo de la página.

### Privacidad

No recopila información.

### Accesibilidad

Debe ser visible, legible y funcionar con teclado.

---

## CP-002 — Encabezado global

**Categoría:** Estructura

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Mostrar la identidad del proyecto y contener la navegación principal.

### Contenido

- nombre o logotipo textual;
- enlace al inicio;
- navegación;
- control de menú móvil cuando corresponda.

### Páginas

Todas.

### Requisitos

- utilizar `<header>`;
- el nombre del proyecto debe enlazar al inicio;
- no ocupar un espacio excesivo;
- funcionar en móvil;
- mantener foco visible.

### Privacidad

No incluye perfil, nombre de usuario ni inicio de sesión.

---

## CP-003 — Navegación principal

**Categoría:** Navegación

**Prioridad:** Alta

**Estado:** Aprobado

### Elementos

```text
Inicio
Momentos
Lenguaje
Recursos
Guía docente
Acerca del proyecto
```

### Implementación esperada

```html
<nav aria-label="Navegación principal">
```

### Comportamiento

- muestra el enlace activo;
- permite navegación con teclado;
- mantiene orden consistente;
- no depende del estado hover;
- no utiliza menús profundos en la primera versión.

### Accesibilidad

El enlace de la página actual puede utilizar:

```html
aria-current="page"
```

---

## CP-004 — Menú móvil

**Categoría:** Navegación

**Prioridad:** Alta

**Estado:** En diseño

### Propósito

Adaptar la navegación principal a pantallas pequeñas.

### Elementos

- botón de apertura;
- etiqueta visible;
- lista de enlaces;
- estado abierto o cerrado.

### Texto sugerido

```text
Menú
Cerrar menú
```

### Comportamiento

- se abre con `Enter` o barra espaciadora;
- se cierra con el botón;
- debe poder cerrarse con `Escape`;
- actualiza `aria-expanded`;
- no bloquea el acceso al contenido;
- no pierde el foco;
- no requiere gestos complejos.

### Decisión pendiente

Determinar si el menú:

- desplaza contenido;
- aparece como panel;
- se presenta en línea.

Debe evitarse un diálogo modal si no es necesario.

---

## CP-005 — Migas de navegación

**Categoría:** Navegación

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Mostrar la ubicación dentro de la estructura.

### Ejemplo

```text
Inicio > Momentos > Momento 2 > Sesión 4
```

### Implementación esperada

```html
<nav aria-label="Migas de navegación">
  <ol>
    ...
  </ol>
</nav>
```

### Requisitos

- la página actual no necesita ser enlace;
- la ruta debe corresponder a la arquitectura real;
- no debe reemplazar la navegación principal;
- debe adaptarse a pantallas pequeñas.

---

## CP-006 — Pie de página

**Categoría:** Estructura

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- aviso de prototipo;
- enlace a privacidad;
- enlace a accesibilidad;
- enlace a alcance;
- autoría;
- repositorio cuando corresponda.

### Texto sugerido

> Recurso educativo en fase de prototipo. No recopila datos ni funciona como canal de denuncias o sistema de gestión de convivencia.

### Páginas

Todas.

### Accesibilidad

Debe utilizar `<footer>` y enlaces descriptivos.

---

# Avisos y mensajes transversales

## CP-007 — Aviso de prototipo

**Categoría:** Mensaje

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Evitar que el recurso sea interpretado como una aplicación institucional terminada.

### Contenido mínimo

- recurso educativo;
- fase de prototipo;
- ausencia de recopilación de datos;
- ausencia de gestión de casos.

### Ubicación

- página de inicio;
- alcance y limitaciones;
- pie de página;
- páginas de prototipado cuando sea necesario.

### Estilo

Informativo, visible y no alarmista.

---

## CP-008 — Aviso de privacidad

**Categoría:** Mensaje

**Prioridad:** Alta

**Estado:** Aprobado

### Texto base sugerido

> Utiliza personajes y situaciones ficticias. No escribas nombres, cursos, relatos personales ni información privada.

### Ubicación

Antes de actividades relacionadas con:

- emociones;
- convivencia;
- IA;
- preguntas restaurativas;
- prototipos;
- socialización.

### Requisitos

- incluir título;
- utilizar texto visible;
- no depender solo de un ícono;
- enlazar a orientaciones completas cuando corresponda.

---

## CP-045 — Aviso de uso responsable de IA

**Categoría:** Mensaje

**Prioridad:** Alta

**Estado:** Aprobado

### Texto base sugerido

> La IA puede equivocarse o inventar información. Revisa siempre sus respuestas y no introduzcas datos personales.

### Contenido mínimo

- posibilidad de error;
- sesgos;
- revisión humana;
- protección de datos;
- reconocimiento del uso de IA.

### Ubicación

- páginas de prompts;
- sesiones relacionadas con IA;
- guía docente;
- momento 2;
- momento 3.

---

## CP-046 — Aviso de ruta institucional

**Categoría:** Mensaje

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Recordar que el recurso no sustituye procedimientos de protección.

### Texto base sugerido

> Si aparece una situación real de riesgo, violencia o vulneración de derechos, detén la actividad pública y utiliza las rutas institucionales correspondientes.

### Público

Principalmente docentes.

### Requisitos

- estar separado de las instrucciones para estudiantes;
- no incluir procedimientos institucionales inventados;
- no prometer confidencialidad absoluta;
- no recomendar registrar el caso en el recurso.

---

# Presentación de contenido

## CP-009 — Encabezado de página

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido posible

- título;
- descripción breve;
- etiqueta de público;
- duración;
- estado o momento;
- acción principal.

### Requisitos

- utilizar un único `h1`;
- mantener descripción breve;
- no duplicar innecesariamente el contenido;
- evitar textos excesivamente largos antes del contenido principal.

---

## CP-010 — Tarjeta de acceso

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Enlazar a una sección principal.

### Contenido

- título;
- descripción;
- enlace;
- ícono opcional;
- etiqueta opcional.

### Ejemplos

```text
Explorar momentos
Consultar expresiones
Abrir recursos
Ver guía docente
```

### Requisitos

- toda la tarjeta no debe comportarse de forma confusa;
- utilizar un enlace real;
- el título debe describir el destino;
- el foco debe ser visible;
- no depender de animaciones.

---

## CP-011 — Tarjeta de momento

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- número;
- nombre;
- duración;
- propósito;
- número de sesiones;
- producto principal;
- enlace.

### Fuente

```text
knowledge/data/unit-content.json
```

### Requisitos

- mantener orden del 1 al 4;
- no utilizar solo colores para diferenciarlos;
- mostrar claramente que son partes de una secuencia;
- funcionar en lista de una columna en móvil.

---

## CP-012 — Tarjeta de sesión

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- número;
- título;
- duración;
- propósito;
- producto;
- enlace.

### Requisitos

- distinguir la sesión del momento;
- utilizar títulos descriptivos;
- permitir identificar la duración sin abrir la página;
- no mostrar estados de progreso individual.

---

## CP-013 — Resumen de sesión

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- propósito;
- objetivos;
- duración;
- materiales;
- producto;
- evidencia;
- público.

### Ubicación

Al inicio de cada página de sesión.

### Requisitos

- presentar información en formato escaneable;
- no depender exclusivamente de tablas;
- adaptarse a móvil.

---

## CP-014 — Secuencia de pasos

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Mostrar procedimientos y actividades en orden.

### Implementación

Preferir:

```html
<ol>
```

cuando exista un orden obligatorio.

### Cada paso puede incluir

- nombre;
- duración;
- instrucción;
- recurso;
- evidencia;
- nota docente.

### Accesibilidad

No convertir números en imágenes o elementos decorativos inaccesibles.

---

## CP-015 — Lista de materiales

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- materiales obligatorios;
- materiales opcionales;
- alternativa desconectada;
- cantidad cuando corresponda.

### Requisitos

- no incluir productos comerciales como única opción;
- ofrecer equivalentes sencillos;
- diferenciar recursos digitales e impresos.

---

## CP-016 — Producto esperado

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Explicar qué debe producirse al finalizar una actividad o sesión.

### Contenido

- nombre;
- descripción;
- formato posible;
- criterios;
- privacidad;
- forma de socialización.

### Requisitos

Debe reconocer diferentes formatos de respuesta.

---

## CP-017 — Evidencia de aprendizaje

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- evidencia esperada;
- qué permite observar;
- relación con criterios;
- forma de recopilación;
- protección.

### Privacidad

No debe sugerir publicación automática ni recopilación innecesaria.

---

## CP-018 — Alternativa desconectada

**Categoría:** Recursos

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Presentar una opción equivalente cuando no exista conexión o dispositivo.

### Contenido

- actividad original;
- alternativa;
- materiales;
- duración;
- producto;
- evidencia;
- adaptación.

### Requisitos

- conservar el propósito pedagógico;
- no reducirse a una tarea de menor valor;
- poder imprimirse;
- no penalizar a quien la utilice.

---

## CP-019 — Alerta docente

**Categoría:** Guía docente

**Prioridad:** Alta

**Estado:** Aprobado

### Tipos posibles

- privacidad;
- protección;
- mediación;
- accesibilidad;
- IA;
- tiempo;
- contingencia.

### Contenido

- título;
- situación;
- acción recomendada;
- acción que debe evitarse;
- documento relacionado.

### Requisitos

- no aparecer como mensaje dirigido directamente al estudiante;
- utilizar texto e ícono;
- no inventar protocolos institucionales.

---

# Componentes de lenguaje

## CP-020 — Tarjeta bilingüe

**Categoría:** Lenguaje

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- función comunicativa;
- expresión en inglés;
- expresión en español;
- ejemplo;
- nivel o categoría opcional.

### Ejemplo

```text
Pedir aclaración

Can you explain?

¿Puedes explicar?

Use it when you need more information.
```

### Accesibilidad

- marcar el texto inglés con `lang="en"`;
- mantener orden consistente;
- no diferenciar idiomas solo mediante color;
- utilizar texto seleccionable.

---

## CP-021 — Tarjeta de pregunta restaurativa

**Categoría:** Lenguaje

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- categoría;
- pregunta;
- propósito;
- advertencia o recomendación;
- versión bilingüe cuando corresponda.

### Categorías

- hechos;
- perspectivas;
- emociones;
- necesidades;
- efectos;
- responsabilidad;
- reparación;
- prevención.

### Privacidad

No debe incluir campos para responder.

### Advertencia

Las preguntas no deben presentarse como protocolo automático.

---

## CP-022 — Tarjeta de mensaje de paz

**Categoría:** Lenguaje

**Prioridad:** Media

**Estado:** Aprobado

### Contenido

- categoría;
- mensaje en inglés;
- mensaje en español;
- botón para copiar;
- recomendación de revisión.

### Ejemplo

```text
Respect

Every voice deserves respect.

Toda voz merece respeto.
```

### Privacidad

La acción de copiar no se registra.

---

## CP-042 — Etiqueta de idioma

**Categoría:** Lenguaje

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Indicar claramente el idioma de un contenido.

### Textos posibles

```text
English
Español
```

### Requisitos

- acompañar atributos de idioma;
- no depender solo de una bandera;
- evitar abreviaturas poco claras.

---

# Interacción

## CP-023 — Filtro por categoría

**Categoría:** Interacción

**Prioridad:** Media

**Estado:** En diseño

### Uso previsto

- glosario;
- expresiones;
- preguntas;
- mensajes;
- recursos.

### Contenido

- etiqueta visible;
- opciones;
- resultado actual;
- opción de limpiar.

### Requisitos

- funcionar con teclado;
- no almacenar selección;
- actualizar resultados de forma comprensible;
- mantener contenido disponible sin JavaScript cuando sea posible.

### Decisión pendiente

Determinar si utilizar:

- botones;
- casillas;
- elemento `select`.

La opción debe elegirse según el número de categorías y la facilidad de uso.

---

## CP-024 — Búsqueda local

**Categoría:** Interacción

**Prioridad:** Media

**Estado:** En diseño

### Propósito

Filtrar contenido ya cargado en el navegador.

### Uso previsto

- glosario;
- recursos;
- expresiones.

### Requisitos

- no transmitir términos;
- incluir etiqueta;
- no utilizar el marcador como etiqueta;
- comunicar cantidad o ausencia de resultados;
- permitir borrar;
- manejar tildes y mayúsculas cuando sea posible.

### Privacidad

No debe registrar ni almacenar búsquedas.

---

## CP-025 — Botón para limpiar filtros

**Categoría:** Interacción

**Prioridad:** Media

**Estado:** En diseño

### Texto

```text
Limpiar filtros
```

### Comportamiento

- restablece todas las opciones;
- devuelve el foco de manera predecible;
- actualiza el mensaje de resultados;
- no recarga innecesariamente la página.

---

## CP-026 — Botón para copiar texto

**Categoría:** Interacción

**Prioridad:** Media

**Estado:** Aprobado

### Texto

```text
Copiar mensaje
Copiar expresión
Copiar prompt
```

### Comportamiento

- copia únicamente texto visible;
- muestra confirmación;
- maneja errores;
- no registra la acción.

### Mensajes

```text
Texto copiado.
No fue posible copiar el texto. Selecciónalo manualmente.
```

### Accesibilidad

La confirmación debe utilizar un mensaje de estado.

---

## CP-027 — Mensaje de estado

**Categoría:** Sistema

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Comunicar resultados de acciones sin interrumpir innecesariamente.

### Ejemplos

```text
Texto copiado.
Se muestran 12 resultados.
Los filtros fueron eliminados.
```

### Implementación posible

```html
<p role="status" aria-live="polite"></p>
```

### Requisitos

- ser breve;
- no mover el foco;
- no desaparecer antes de poder comprenderse;
- no comunicar información esencial solo temporalmente.

---

## CP-028 — Acordeón accesible

**Categoría:** Interacción

**Prioridad:** Media

**Estado:** En diseño

### Uso previsto

- guía docente;
- preguntas frecuentes;
- categorías extensas;
- información complementaria.

### Requisitos

El encabezado debe contener un botón con:

```html
aria-expanded
aria-controls
```

### Comportamiento

- abrir con teclado;
- cerrar con teclado;
- mostrar estado;
- no ocultar contenido esencial por defecto;
- mantener títulos visibles.

### Restricción

No utilizar acordeones para dividir en exceso una sesión o esconder instrucciones principales.

---

## CP-029 — Navegación anterior y siguiente

**Categoría:** Navegación

**Prioridad:** Alta

**Estado:** Aprobado

### Uso previsto

- momentos;
- sesiones;
- páginas relacionadas.

### Contenido

```text
Anterior: Sesión 3
Siguiente: Sesión 5
```

### Requisitos

- incluir nombre, no solo “Anterior” y “Siguiente”;
- mantener orden lógico;
- no crear ciclos confusos;
- adaptarse a móvil.

---

## CP-030 — Selector de vista docente o estudiantil

**Categoría:** Navegación

**Prioridad:** Alta

**Estado:** Pendiente

### Propósito

Diferenciar contenido dirigido a estudiantes y orientaciones docentes.

### Opciones consideradas

- dos páginas distintas;
- dos secciones en una página;
- pestañas accesibles;
- enlaces ancla;
- acordeones separados.

### Riesgos

- ocultar contenido importante;
- duplicar páginas;
- confundir públicos;
- aumentar mantenimiento.

### Decisión pendiente

Debe resolverse antes de crear las páginas de sesión.

La decisión debe registrarse en:

```text
DESIGN_DECISIONS.md
```

---

# Tablas y evaluación

## CP-031 — Tabla responsive

**Categoría:** Presentación

**Prioridad:** Media

**Estado:** En diseño

### Uso previsto

- cronogramas;
- rúbricas;
- alternativas;
- vocabulario;
- matrices.

### Requisitos

- utilizar `<table>` solo para datos tabulares;
- incluir encabezados;
- permitir desplazamiento cuando sea necesario;
- ofrecer alternativa en formato de lista para tablas complejas;
- mantener legibilidad con zoom.

---

## CP-035 — Lista de verificación

**Categoría:** Presentación

**Prioridad:** Alta

**Estado:** Aprobado

### Uso previsto

- privacidad;
- IA;
- prototipos;
- pruebas;
- accesibilidad;
- evaluación.

### Formato

Puede utilizar:

```text
[ ] Pendiente
[x] Revisado
```

en documentos imprimibles.

En web no debe simular almacenamiento si el estado no se conserva.

### Restricción

Una lista interactiva debe aclarar:

> Las selecciones no se guardan al cerrar o recargar la página.

---

## CP-036 — Rúbrica accesible

**Categoría:** Guía docente

**Prioridad:** Alta

**Estado:** En diseño

### Propósito

Presentar niveles y criterios de evaluación de forma comprensible.

### Contenido

- dimensión;
- criterio;
- niveles;
- descriptores;
- recomendaciones.

### Requisitos

- encabezados claros;
- versión adaptable;
- versión imprimible;
- lenguaje observable;
- no utilizar únicamente números;
- no clasificar emociones o personalidad.

### Decisión pendiente

Determinar si en móvil se presenta como:

- tabla desplazable;
- tarjetas por criterio;
- ambas opciones.

---

# Recursos

## CP-032 — Lista de recursos descargables

**Categoría:** Recursos

**Prioridad:** Alta

**Estado:** Aprobado

### Propósito

Organizar materiales por sesión o tipo.

### Contenido

- nombre;
- descripción;
- sesión;
- formato;
- tamaño cuando se conozca;
- enlace;
- instrucciones.

### Accesibilidad

El enlace debe indicar claramente:

- destino;
- formato;
- si abre o descarga.

---

## CP-033 — Tarjeta de recurso

**Categoría:** Recursos

**Prioridad:** Alta

**Estado:** Aprobado

### Contenido

- nombre;
- propósito;
- público;
- sesión;
- formato;
- acción;
- advertencia.

### Ejemplo

```text
Plantilla de historia de usuario

Para diseñar una solución desde la perspectiva de una persona usuaria.

PDF imprimible

Descargar plantilla
```

---

## CP-034 — Plantilla de prompt

**Categoría:** Recursos

**Prioridad:** Media

**Estado:** Aprobado

### Contenido

- propósito;
- contexto;
- tarea;
- restricciones;
- formato esperado;
- criterios de revisión;
- ejemplo ficticio;
- botón para copiar.

### Privacidad

Debe mostrar de forma visible:

> No introduzcas nombres, relatos reales ni información personal.

---

## CP-041 — Enlace de descarga

**Categoría:** Recursos

**Prioridad:** Alta

**Estado:** Aprobado

### Texto recomendado

```text
Descargar plantilla en PDF
Abrir guía imprimible
Descargar rúbrica
```

### Requisitos

- no utilizar “Haz clic aquí”;
- indicar formato;
- indicar tamaño cuando sea relevante;
- mantener foco visible;
- no iniciar descargas inesperadas.

---

# Mensajes del sistema

## CP-037 — Estado vacío

**Categoría:** Sistema

**Prioridad:** Alta

**Estado:** Aprobado

### Uso

Cuando una búsqueda o filtro no produce resultados.

### Texto sugerido

> No encontramos resultados con estos criterios. Prueba otra palabra o limpia los filtros.

### Acciones

- limpiar filtros;
- regresar;
- consultar todo el contenido.

### Requisitos

No culpar al usuario.

---

## CP-038 — Estado de error

**Categoría:** Sistema

**Prioridad:** Alta

**Estado:** Aprobado

### Uso

Cuando un recurso o archivo de datos no puede cargarse.

### Texto sugerido

> No pudimos cargar este contenido. Intenta nuevamente o consulta la alternativa disponible.

### Acciones

- volver a intentar;
- regresar;
- consultar versión imprimible.

### Accesibilidad

Debe anunciarse mediante una región adecuada.

---

## CP-039 — Estado de carga

**Categoría:** Sistema

**Prioridad:** Media

**Estado:** Aprobado

### Texto sugerido

```text
Cargando contenido...
```

### Requisitos

- utilizar solo cuando exista una espera real;
- no mostrar animaciones rápidas innecesarias;
- respetar movimiento reducido;
- no bloquear toda la página sin necesidad.

---

## CP-040 — Recurso no disponible

**Categoría:** Sistema

**Prioridad:** Media

**Estado:** Aprobado

### Texto sugerido

> Este recurso todavía está en preparación. Puedes continuar con la alternativa indicada.

### Requisitos

- evitar enlaces rotos;
- ofrecer otra opción;
- no prometer una fecha sin confirmar.

---

# Metadatos y etiquetas

## CP-043 — Etiqueta de duración

**Categoría:** Presentación

**Prioridad:** Media

**Estado:** Aprobado

### Ejemplos

```text
2 horas
4 sesiones
Semana 3
```

### Requisitos

- utilizar texto;
- no depender únicamente de un reloj;
- mantener formato consistente.

---

## CP-044 — Etiqueta de público

**Categoría:** Presentación

**Prioridad:** Media

**Estado:** Aprobado

### Valores posibles

```text
Para estudiantes
Para docentes
Para todos
Para colaboradores
```

### Requisitos

- utilizarse únicamente cuando aporte claridad;
- evitar mostrar contenido docente como si fuera instrucción estudiantil;
- no utilizar color como único diferenciador.

---

## CP-047 — Bloque de autoría y reconocimiento

**Categoría:** Presentación

**Prioridad:** Media

**Estado:** Aprobado

### Contenido

- nombre del proyecto;
- autoría;
- institución;
- transferencia;
- colaboradores cuando corresponda;
- herramientas reconocidas;
- versión;
- licencia cuando se defina.

### Ubicación

- página de autoría;
- pie de algunos recursos;
- materiales imprimibles.

---

# Impresión

## CP-048 — Versión imprimible

**Categoría:** Impresión

**Prioridad:** Alta

**Estado:** En diseño

### Propósito

Permitir utilizar contenidos sin conexión o en papel.

### Elementos que deben conservarse

- título;
- propósito;
- instrucciones;
- contenido;
- privacidad;
- autoría;
- número de página cuando sea posible.

### Elementos que pueden ocultarse

- navegación;
- botones;
- menús;
- controles de filtros;
- elementos decorativos.

### CSS inicial posible

```css
@media print {
  nav,
  .skip-link,
  .no-print,
  button {
    display: none !important;
  }

  body {
    background: #fff;
    color: #000;
  }

  a::after {
    content: " (" attr(href) ")";
  }
}
```

Los estilos definitivos deberán revisarse antes de implementarse.

---

# Componentes pospuestos

## CP-049 — Diálogo modal

**Categoría:** Interacción

**Prioridad:** Baja

**Estado:** Pospuesto

### Razón

La primera versión no identifica una necesidad que requiera un diálogo modal.

Los avisos pueden presentarse dentro de la página sin interrumpir al usuario.

Solo debe utilizarse en el futuro cuando exista una necesidad clara y no pueda resolverse mediante otro patrón.

---

## CP-050 — Notificación temporal

**Categoría:** Sistema

**Prioridad:** Baja

**Estado:** Pospuesto

### Razón

Los mensajes temporales pueden desaparecer antes de ser comprendidos.

Se priorizan mensajes de estado persistentes o visibles durante tiempo suficiente.

No deben utilizarse para:

- errores;
- privacidad;
- protección;
- instrucciones esenciales.

---

# Componentes que no deben implementarse

La fase actual no debe incluir:

- formulario de inicio de sesión;
- perfil de estudiante;
- panel de progreso individual;
- carga de archivos;
- formulario para reportar situaciones;
- chat;
- registro de emociones;
- calificación de conducta;
- ranking;
- historial de usuario;
- panel administrativo;
- recomendador disciplinario;
- conexión directa con IA;
- grabación de audio o video;
- análisis facial;
- seguimiento de navegación.

---

# Relaciones entre páginas y componentes

| Página | Componentes principales |
|---|---|
| Inicio | CP-002, CP-003, CP-006, CP-007, CP-008, CP-010, CP-011 |
| Momentos | CP-005, CP-009, CP-011, CP-029 |
| Página de momento | CP-005, CP-009, CP-012, CP-018, CP-029 |
| Página de sesión | CP-005, CP-013, CP-014, CP-015, CP-016, CP-017, CP-018, CP-019 |
| Glosario | CP-020, CP-023, CP-024, CP-025, CP-027, CP-037 |
| Expresiones | CP-020, CP-023, CP-026, CP-027 |
| Preguntas restaurativas | CP-008, CP-021, CP-023, CP-028, CP-046 |
| Mensajes de paz | CP-022, CP-023, CP-026, CP-027 |
| Recursos | CP-032, CP-033, CP-041 |
| Prompts | CP-008, CP-034, CP-045 |
| Guía docente | CP-019, CP-028, CP-031, CP-035, CP-036 |
| Privacidad | CP-008, CP-035, CP-046 |
| Accesibilidad | CP-035, CP-048 |
| Acerca del proyecto | CP-007, CP-047 |
| Estados del sistema | CP-027, CP-037, CP-038, CP-039, CP-040 |

---

# Reglas de implementación

## Semántica

Preferir elementos nativos:

```text
a
button
nav
main
section
article
aside
table
details
summary
```

No recrear con `div` componentes que ya existen en HTML.

---

## JavaScript progresivo

El contenido esencial debe estar disponible aunque JavaScript falle.

JavaScript puede utilizarse para:

- filtros;
- búsquedas;
- copiar;
- menú móvil;
- mensajes de estado;
- carga estructurada cuando exista alternativa.

No debe utilizarse para ocultar toda la información hasta que el script se ejecute.

---

## Privacidad

Ningún componente debe utilizar:

```text
localStorage
sessionStorage
cookies
analítica
identificadores
envío de formularios
servicios externos
```

salvo que una fase futura lo apruebe formalmente.

---

## Accesibilidad

Todo componente interactivo debe probarse mediante:

- teclado;
- foco;
- zoom;
- lector de pantalla cuando corresponda;
- móvil;
- movimiento reducido;
- contraste.

---

## Nombres de clases

Los nombres de clases deben describir función o componente.

Ejemplos:

```text
.site-header
.main-navigation
.moment-card
.privacy-notice
.language-card
.resource-list
.status-message
```

Evitar nombres basados únicamente en apariencia:

```text
.blue-box
.big-text
.left-item
```

---

## Estados visuales

Cada componente interactivo debe contemplar:

```text
normal
hover
focus
active
disabled
error
empty
loading
```

No todos los componentes necesitan todos los estados, pero deben revisarse explícitamente.

---

## Datos

Cuando un componente utilice JSON debe:

- validar la existencia de campos;
- manejar datos incompletos;
- mostrar un error comprensible;
- no insertar HTML no confiable;
- mantener textos alternativos;
- no depender de índices frágiles.

---

# Prioridad de desarrollo

## Primera entrega

```text
CP-001 Enlace para saltar
CP-002 Encabezado
CP-003 Navegación principal
CP-004 Menú móvil
CP-005 Migas de navegación
CP-006 Pie de página
CP-007 Aviso de prototipo
CP-008 Aviso de privacidad
CP-009 Encabezado de página
CP-010 Tarjeta de acceso
CP-011 Tarjeta de momento
CP-012 Tarjeta de sesión
CP-013 Resumen de sesión
CP-014 Secuencia de pasos
CP-018 Alternativa desconectada
CP-020 Tarjeta bilingüe
CP-027 Mensaje de estado
CP-029 Navegación anterior y siguiente
CP-037 Estado vacío
CP-038 Estado de error
```

## Segunda entrega

```text
CP-015 Lista de materiales
CP-016 Producto esperado
CP-017 Evidencia
CP-019 Alerta docente
CP-021 Pregunta restaurativa
CP-022 Mensaje de paz
CP-023 Filtros
CP-024 Búsqueda
CP-025 Limpiar filtros
CP-026 Copiar texto
CP-028 Acordeón
CP-031 Tabla responsive
CP-032 Lista de recursos
CP-033 Tarjeta de recurso
CP-034 Plantilla de prompt
CP-035 Lista de verificación
CP-036 Rúbrica
```

## Tercera entrega

```text
CP-039 Estado de carga
CP-040 Recurso no disponible
CP-041 Enlace de descarga
CP-042 Etiqueta de idioma
CP-043 Etiqueta de duración
CP-044 Etiqueta de público
CP-045 Aviso de IA
CP-046 Aviso institucional
CP-047 Autoría
CP-048 Versión imprimible
```

---

# Decisiones pendientes

Antes de iniciar el desarrollo deben resolverse:

- estrategia del menú móvil;
- vista docente y estudiantil;
- formato responsive de rúbricas;
- filtros mediante botones, casillas o `select`;
- forma de cargar el JSON;
- ubicación de los datos;
- componentes renderizados por JavaScript o HTML estático;
- uso de `details` y `summary`;
- estructura de impresión;
- necesidad real de búsqueda local.

Las decisiones aceptadas deben añadirse a:

```text
DESIGN_DECISIONS.md
```

---

## Criterio de actualización

Este inventario debe actualizarse cuando:

- se aprueba un componente;
- cambia su estado;
- se identifica una nueva necesidad;
- una prueba revela una barrera;
- se combina o elimina un componente;
- cambia una página;
- se implementa una nueva interacción;
- se modifica el sistema de diseño.

# User Stories

## Propósito

Este documento define las historias de usuario del recurso web de **Voces que Restauran**.

Las historias permiten traducir necesidades pedagógicas, funcionales, éticas y de accesibilidad en criterios verificables.

---

## Distinción importante

Las historias de este archivo describen:

> necesidades reales de las personas que utilizarán el recurso web.

No deben confundirse con las historias de usuario que los estudiantes crean durante la unidad como actividad pedagógica de diseño y cocreación.

---

## Formato

Cada historia utiliza esta estructura:

```text
ID
Rol
Historia
Propósito
Prioridad
Estado
Criterios de aceptación
Privacidad
Accesibilidad
Documentos relacionados
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

## Estados

```text
Pendiente
En diseño
En desarrollo
En revisión
Completada
Pospuesta
Descartada
```

---

# Historias de estudiantes

## US-001 — Comprender el propósito del proyecto

**Rol:** Estudiante

**Historia**

Como estudiante, quiero comprender qué es Voces que Restauran para saber por qué voy a participar en sus actividades.

**Propósito**

Presentar el proyecto con lenguaje claro y apropiado para la edad.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Existe una presentación breve.
- La pregunta orientadora es visible.
- Se explican los cuatro momentos.
- Se aclara que se utilizarán casos ficticios.
- Se indica que no es obligatorio compartir experiencias.
- Se explica que el recurso no es un canal de denuncias.
- El contenido funciona en móvil.

### Privacidad

No solicita nombres ni información personal.

### Accesibilidad

La presentación utiliza encabezados, texto claro y navegación con teclado.

### Documentos relacionados

```text
README.md
PROJECT_BRIEF.md
PRIVACY.md
```

---

## US-002 — Explorar los momentos de aprendizaje

**Rol:** Estudiante

**Historia**

Como estudiante, quiero explorar los cuatro momentos para comprender qué aprenderé y qué productos crearé.

**Propósito**

Mostrar la secuencia completa de la unidad.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Se muestran los cuatro momentos.
- Cada momento presenta nombre, duración y propósito.
- Cada momento enlaza sus sesiones.
- Se indican productos principales.
- Se puede regresar a la lista de momentos.
- La navegación funciona con teclado.

### Privacidad

No se registra qué momento consulta el usuario.

### Accesibilidad

Los momentos no se diferencian únicamente por color.

### Documentos relacionados

```text
knowledge/moments/
knowledge/data/unit-content.json
```

---

## US-003 — Consultar una sesión

**Rol:** Estudiante

**Historia**

Como estudiante, quiero consultar las instrucciones de una sesión para comprender qué debo hacer.

**Propósito**

Presentar actividades de manera clara y secuencial.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- La sesión muestra título y duración.
- Presenta propósito.
- Organiza los pasos.
- Indica materiales.
- Muestra el producto esperado.
- Incluye expresiones en inglés cuando corresponda.
- Incluye recordatorio de privacidad.
- Incluye alternativa desconectada.

### Privacidad

Las instrucciones utilizan casos ficticios y no solicitan relatos.

### Accesibilidad

Las instrucciones están divididas en pasos y utilizan lenguaje claro.

### Documentos relacionados

```text
knowledge/moments/
CONTENT_GUIDELINES.md
```

---

## US-004 — Consultar expresiones bilingües

**Rol:** Estudiante

**Historia**

Como estudiante, quiero consultar expresiones en inglés y español para participar en las actividades y presentar mis ideas.

**Propósito**

Apoyar la comunicación en nivel A1–A2.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Las expresiones se organizan por función.
- Cada expresión muestra inglés y español.
- El inglés está marcado correctamente como idioma.
- Se incluyen ejemplos breves.
- El contenido puede consultarse sin conexión.
- No se requiere escribir información personal.

### Privacidad

No se guardan expresiones consultadas o copiadas.

### Accesibilidad

El contenido es legible, filtrable con teclado y no depende de íconos.

### Documentos relacionados

```text
knowledge/language/
CONTENT_GUIDELINES.md
```

---

## US-005 — Explorar preguntas restaurativas

**Rol:** Estudiante

**Historia**

Como estudiante, quiero explorar preguntas restaurativas para comprender una situación ficticia sin culpar automáticamente a una persona.

**Propósito**

Apoyar el análisis, la escucha y la reparación.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Las preguntas están organizadas por categorías.
- Se incluyen preguntas para comprender hechos.
- Se incluyen preguntas sobre emociones y necesidades.
- Se incluyen preguntas sobre efectos y reparación.
- Se aclara que no todas las preguntas sirven para todas las situaciones.
- Se indica que las situaciones graves requieren intervención adulta.

### Privacidad

El recurso no permite registrar respuestas ni casos.

### Accesibilidad

Las categorías tienen texto visible y estructura semántica.

### Documentos relacionados

```text
knowledge/language/RESTORATIVE_LANGUAGE.md
PRIVACY.md
```

---

## US-006 — Consultar mensajes de paz

**Rol:** Estudiante

**Historia**

Como estudiante, quiero consultar mensajes bilingües de paz y convivencia para inspirar una campaña o un producto.

**Propósito**

Facilitar la creación de mensajes colectivos.

**Prioridad:** Media

**Estado:** Pendiente

### Criterios de aceptación

- Los mensajes aparecen en inglés y español.
- Se organizan por tema.
- Se pueden copiar sin guardar datos.
- Se indica que deben revisarse antes de publicarse.
- No se incluyen nombres ni referencias a casos reales.

### Privacidad

La acción de copiar funciona localmente y no envía información.

### Accesibilidad

El resultado de copiar se anuncia mediante una región de estado.

### Documentos relacionados

```text
knowledge/language/PEACE_MESSAGES.md
ACCESSIBILITY.md
```

---

## US-007 — Conocer las reglas de privacidad

**Rol:** Estudiante

**Historia**

Como estudiante, quiero conocer qué información no debo compartir para protegerme durante las actividades.

**Propósito**

Promover participación segura.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Existe un aviso de privacidad comprensible.
- Se indica que no deben utilizarse nombres.
- Se indica que deben utilizarse casos ficticios.
- Se explica que nadie está obligado a compartir.
- Se explica que algunas situaciones deben comunicarse a un adulto.
- El aviso aparece antes de actividades sensibles.

### Privacidad

El contenido aplica minimización de datos.

### Accesibilidad

El aviso utiliza texto, no solo color o íconos.

### Documentos relacionados

```text
PRIVACY.md
CONTENT_GUIDELINES.md
```

---

## US-008 — Utilizar una alternativa desconectada

**Rol:** Estudiante

**Historia**

Como estudiante sin conexión o dispositivo, quiero realizar una alternativa en papel para participar y demostrar aprendizaje.

**Propósito**

Garantizar participación independientemente de la conectividad.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Cada actividad digital indica una alternativa.
- Los materiales pueden imprimirse.
- La alternativa conserva el propósito.
- La evaluación no penaliza la falta de dispositivo.
- Los recursos impresos no dependen del color.

### Privacidad

Los materiales recuerdan no incluir información personal.

### Accesibilidad

Los archivos imprimibles tienen texto legible y estructura sencilla.

### Documentos relacionados

```text
ACCESSIBILITY.md
knowledge/unit/11_RESOURCES.md
```

---

# Historias de docentes

## US-009 — Consultar la guía de una sesión

**Rol:** Docente

**Historia**

Como docente, quiero consultar la planeación completa de cada sesión para prepararla e implementarla de manera segura.

**Propósito**

Facilitar la mediación pedagógica.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Cada sesión muestra propósito.
- Incluye duración.
- Incluye materiales.
- Incluye secuencia.
- Incluye evidencias.
- Incluye evaluación.
- Incluye recursos lingüísticos.
- Incluye alternativa desconectada.
- Incluye alertas de privacidad.

### Privacidad

La guía explica cómo responder si aparece una situación real.

### Accesibilidad

La información está organizada por secciones y encabezados.

### Documentos relacionados

```text
knowledge/moments/
PEDAGOGICAL_FRAMEWORK.md
```

---

## US-010 — Consultar criterios de evaluación

**Rol:** Docente

**Historia**

Como docente, quiero consultar las rúbricas y evidencias para valorar el proceso de aprendizaje y no solo el prototipo final.

**Propósito**

Apoyar evaluación formativa e interdisciplinaria.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Se muestran las dimensiones de evaluación.
- Se incluyen rúbricas.
- Se incluyen evidencias.
- Se explica cómo valorar el proceso.
- Se evita evaluar la cantidad de información personal.
- Los recursos pueden imprimirse.

### Privacidad

Las evidencias públicas no incluyen calificaciones ni nombres.

### Accesibilidad

Las tablas tienen encabezados y alternativa legible en móvil.

### Documentos relacionados

```text
knowledge/pedagogy/
```

---

## US-011 — Acceder a recursos imprimibles

**Rol:** Docente

**Historia**

Como docente, quiero descargar o imprimir materiales para implementar la unidad cuando la conectividad sea limitada.

**Propósito**

Asegurar continuidad pedagógica.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Los materiales están organizados por sesión.
- Los enlaces describen el archivo.
- Se indica el formato.
- Se incluye advertencia de privacidad.
- La impresión utiliza fondos claros.
- El material conserva instrucciones.

### Privacidad

Las plantillas no solicitan datos personales innecesarios.

### Accesibilidad

Los archivos mantienen contraste y no dependen del color.

### Documentos relacionados

```text
knowledge/unit/11_RESOURCES.md
ACCESSIBILITY.md
```

---

## US-012 — Consultar orientaciones sobre IA

**Rol:** Docente

**Historia**

Como docente, quiero consultar criterios para utilizar inteligencia artificial con seguridad durante la unidad.

**Propósito**

Orientar el uso crítico de IA.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Se explican riesgos y limitaciones.
- Se incluyen ejemplos de prompts ficticios.
- Se indica qué datos no deben introducirse.
- Se requiere revisión humana.
- Se diferencia IA de decisión humana.
- Se explica cómo reconocer su uso.

### Privacidad

Los prompts no incluyen información estudiantil.

### Accesibilidad

Los ejemplos están estructurados y son fáciles de copiar o imprimir.

### Documentos relacionados

```text
knowledge/prompts/
PRIVACY.md
```

---

## US-013 — Identificar alertas de protección

**Rol:** Docente

**Historia**

Como docente, quiero identificar alertas de protección para saber cuándo detener una actividad y utilizar una ruta institucional.

**Propósito**

Evitar que la unidad sustituya procedimientos de protección.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Las alertas están diferenciadas de las instrucciones estudiantiles.
- Se indica que no debe profundizarse públicamente.
- Se recomienda trasladar la situación a un espacio protegido.
- Se remite a rutas institucionales.
- No se prometen soluciones automáticas.

### Privacidad

La guía no recomienda registrar datos en el recurso.

### Accesibilidad

Las alertas utilizan título, texto e ícono con significado redundante.

### Documentos relacionados

```text
PRIVACY.md
PEDAGOGICAL_FRAMEWORK.md
```

---

# Historias de visitantes y evaluadores

## US-014 — Comprender el alcance

**Rol:** Visitante

**Historia**

Como visitante, quiero comprender el alcance y las limitaciones para no confundir el recurso con una plataforma institucional.

**Propósito**

Comunicar con transparencia.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Se presenta el producto actual.
- Se indica qué está fuera del alcance.
- Se identifica el recurso como prototipo.
- Se explica que no gestiona casos.
- Se explica que no recopila datos.
- Se describe la aplicación futura como posibilidad no aprobada.

### Privacidad

No se recopilan datos del visitante.

### Accesibilidad

El contenido es visible sin menús complejos.

### Documentos relacionados

```text
PROJECT_BRIEF.md
README.md
```

---

## US-015 — Consultar la arquitectura del proyecto

**Rol:** Evaluador o colaborador

**Historia**

Como evaluador, quiero comprender la organización del repositorio para localizar documentación, contenido, investigación y desarrollo.

**Propósito**

Facilitar revisión y colaboración.

**Prioridad:** Media

**Estado:** Pendiente

### Criterios de aceptación

- Se describen las cuatro carpetas principales.
- Se presentan los documentos estratégicos.
- Se explica la fuente pedagógica.
- Se explica la capa de datos.
- Se explica dónde se implementará el recurso.

### Privacidad

La documentación no expone información estudiantil.

### Accesibilidad

La estructura se presenta también como texto, no solo como diagrama.

### Documentos relacionados

```text
README.md
CONTRIBUTING.md
```

---

# Historias de accesibilidad

## US-016 — Navegar con teclado

**Rol:** Usuario de teclado

**Historia**

Como usuario que no utiliza mouse, quiero recorrer todo el recurso con teclado para acceder a las páginas y controles.

**Propósito**

Garantizar operabilidad.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Todos los enlaces reciben foco.
- Todos los botones reciben foco.
- El foco es visible.
- El orden es lógico.
- No existen controles accesibles únicamente con hover.
- Los componentes pueden cerrarse con teclado.

### Privacidad

No se registra el método de navegación.

### Accesibilidad

Debe comprobarse manualmente con teclado.

### Documentos relacionados

```text
ACCESSIBILITY.md
DESIGN_SYSTEM.md
```

---

## US-017 — Utilizar zoom y móvil

**Rol:** Usuario con baja visión o dispositivo móvil

**Historia**

Como usuario que necesita ampliar el contenido, quiero utilizar zoom o una pantalla pequeña sin perder información ni funcionalidad.

**Propósito**

Garantizar adaptación visual.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- El contenido funciona a 320 px.
- Funciona con zoom de 200 %.
- No aparece desplazamiento horizontal innecesario.
- Los botones mantienen tamaño táctil.
- El texto no queda cortado.
- Las tablas tienen alternativa adaptable.

### Privacidad

No se recopila información del dispositivo.

### Accesibilidad

Debe probarse en móvil y con zoom.

### Documentos relacionados

```text
ACCESSIBILITY.md
DESIGN_SYSTEM.md
```

---

## US-018 — Comprender imágenes y estados

**Rol:** Usuario de lector de pantalla

**Historia**

Como usuario de lector de pantalla, quiero comprender imágenes, controles y cambios de estado mediante nombres y descripciones accesibles.

**Propósito**

Garantizar percepción y comprensión.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Las imágenes informativas tienen texto alternativo.
- Las imágenes decorativas tienen alternativa vacía.
- Los botones tienen nombre accesible.
- Los cambios importantes se anuncian.
- Los encabezados están ordenados.
- El idioma de la página está definido.

### Privacidad

No se utiliza tecnología de seguimiento de accesibilidad.

### Accesibilidad

Debe comprobarse con herramientas y revisión manual.

### Documentos relacionados

```text
ACCESSIBILITY.md
CONTENT_GUIDELINES.md
```

---

# Historias de colaboradores

## US-019 — Consultar decisiones vigentes

**Rol:** Colaborador

**Historia**

Como colaborador, quiero consultar las decisiones vigentes para evitar implementar funciones contradictorias.

**Propósito**

Mantener coherencia.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- Existe un registro de decisiones.
- Cada decisión muestra razón.
- Se indica su estado.
- Las decisiones reemplazadas se conservan como historial.
- Los cambios importantes se registran.

### Privacidad

Las decisiones no incluyen datos de estudiantes.

### Accesibilidad

El documento utiliza encabezados y lenguaje claro.

### Documentos relacionados

```text
DESIGN_DECISIONS.md
CHANGELOG.md
```

---

## US-020 — Validar el contenido estructurado

**Rol:** Colaborador técnico

**Historia**

Como colaborador técnico, quiero validar el archivo JSON para detectar errores antes de utilizarlo en la interfaz.

**Propósito**

Evitar fallos de carga.

**Prioridad:** Alta

**Estado:** Pendiente

### Criterios de aceptación

- El archivo puede validarse con Python.
- La documentación explica el comando.
- Se comprueba que existen 4 momentos.
- Se comprueba que existen 16 sesiones.
- Se comprueba que la duración total es de 32 horas.
- Los errores se documentan antes de publicar.

### Privacidad

El JSON no contiene datos personales.

### Accesibilidad

No aplica directamente a la sintaxis, pero el contenido generado debe cumplir accesibilidad.

### Documentos relacionados

```text
knowledge/data/README.md
knowledge/data/unit-content.json
```

---

## US-021 — Contribuir de forma segura

**Rol:** Colaborador

**Historia**

Como colaborador, quiero conocer las reglas de contribución para realizar cambios seguros, accesibles y coherentes.

**Propósito**

Orientar la colaboración.

**Prioridad:** Media

**Estado:** Pendiente

### Criterios de aceptación

- Existe una guía de contribución.
- Se explican las funciones prohibidas.
- Se explican pruebas mínimas.
- Se explica cómo actualizar documentos relacionados.
- Se explica que no deben subirse datos ni credenciales.
- Se ofrecen ejemplos de commits.

### Privacidad

La guía prohíbe información sensible.

### Accesibilidad

La guía incluye requisitos de pruebas accesibles.

### Documentos relacionados

```text
CONTRIBUTING.md
PRIVACY.md
ACCESSIBILITY.md
```

---

# Historias futuras no aprobadas

Las siguientes historias no forman parte del alcance actual.

Deben mantenerse como ideas futuras y no implementarse sin una nueva decisión.

---

## FUT-001 — Crear cuentas

**Prioridad:** Futura

**Estado:** Pospuesta

Como usuario, quiero crear una cuenta para guardar información.

### Razón de aplazamiento

Requiere:

- tratamiento de datos;
- autenticación;
- seguridad;
- políticas;
- responsabilidades institucionales.

---

## FUT-002 — Registrar situaciones de convivencia

**Prioridad:** Futura

**Estado:** Descartada para el recurso actual

Como estudiante, quiero registrar una situación.

### Razón

El recurso no es un canal de denuncias ni una plataforma de gestión de casos.

---

## FUT-003 — Guardar progreso individual

**Prioridad:** Futura

**Estado:** Pospuesta

Como estudiante, quiero guardar mi progreso.

### Razón

Requeriría identificadores y almacenamiento.

En la fase actual se prioriza una experiencia sin seguimiento.

---

## FUT-004 — Conectar directamente con IA

**Prioridad:** Futura

**Estado:** Pospuesta

Como usuario, quiero enviar prompts desde el recurso.

### Razón

Requeriría:

- servicio externo;
- credenciales;
- política de datos;
- revisión de edad;
- control de contenido;
- costos;
- seguridad.

---

## FUT-005 — Recomendar acciones disciplinarias

**Prioridad:** Futura

**Estado:** Descartada

Como institución, quiero recibir recomendaciones disciplinarias automáticas.

### Razón

Contradice el enfoque pedagógico, restaurativo y humano del proyecto.

---

## FUT-006 — Analizar emociones automáticamente

**Prioridad:** Futura

**Estado:** Descartada

Como usuario, quiero que el sistema interprete emociones mediante texto, rostro o voz.

### Razón

Genera riesgos de:

- error;
- vigilancia;
- clasificación;
- invasión de privacidad;
- falsa autoridad.

---

# Criterios globales de aceptación

Toda historia implementada debe cumplir:

## Pedagogía

- responde a una necesidad;
- tiene propósito educativo;
- utiliza lenguaje claro;
- mantiene coherencia con la unidad.

## Privacidad

- no solicita datos personales;
- no guarda respuestas;
- no transmite información;
- utiliza contenido ficticio;
- no crea perfiles.

## Accesibilidad

- funciona con teclado;
- tiene foco visible;
- utiliza HTML semántico;
- no depende únicamente del color;
- funciona en móvil;
- permite zoom.

## Ética

- no automatiza decisiones;
- no diagnostica emociones;
- no clasifica estudiantes;
- no reemplaza rutas institucionales;
- no promete confidencialidad absoluta.

## Tecnología

- funciona con tecnologías web estándar;
- maneja errores;
- evita dependencias innecesarias;
- mantiene el contenido sincronizado;
- está claramente identificado como prototipo.

---

## Orden sugerido de implementación

### Primera entrega

```text
US-001
US-002
US-003
US-004
US-007
US-009
US-014
US-016
US-017
US-018
```

### Segunda entrega

```text
US-005
US-006
US-008
US-010
US-011
US-012
US-013
```

### Documentación y colaboración

```text
US-015
US-019
US-020
US-021
```

---

## Criterio de actualización

Este archivo debe actualizarse cuando:

- cambia el alcance;
- aparece una nueva necesidad;
- se elimina una función;
- se completa una historia;
- se identifican barreras;
- se realiza una prueba;
- se inicia una nueva fase.

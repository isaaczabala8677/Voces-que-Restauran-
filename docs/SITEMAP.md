# Mapa del sitio

## Propósito

Este documento define la arquitectura de información inicial del recurso web de **Voces que Restauran**.

El mapa del sitio organiza:

- páginas;
- secciones;
- rutas;
- relaciones de navegación;
- públicos;
- contenido prioritario;
- límites funcionales.

La estructura debe responder a las historias de usuario documentadas en:

```text
USER_STORIES.md
```

El mapa no define todavía la apariencia visual ni el código final.

---

## Principios de arquitectura

La navegación debe ser:

- clara;
- breve;
- predecible;
- responsive;
- accesible mediante teclado;
- comprensible para estudiantes de 11 a 14 años;
- útil para docentes;
- compatible con recursos imprimibles;
- funcional sin cuentas ni almacenamiento.

La arquitectura debe evitar:

- rutas innecesariamente profundas;
- menús extensos;
- duplicación de contenido;
- páginas sin propósito pedagógico;
- formularios que recopilen información;
- funciones que simulen gestión de convivencia.

---

## Públicos principales

El recurso reconoce cuatro grupos de usuarios.

### Estudiantes

Necesitan:

- comprender el proyecto;
- explorar los momentos;
- seguir actividades;
- consultar expresiones bilingües;
- utilizar preguntas restaurativas;
- acceder a mensajes de paz;
- conocer reglas de privacidad;
- encontrar alternativas desconectadas.

### Docentes

Necesitan:

- consultar planeaciones;
- preparar sesiones;
- revisar materiales;
- acceder a evaluación;
- conocer alertas de protección;
- utilizar orientaciones sobre IA;
- descargar recursos imprimibles.

### Visitantes y evaluadores

Necesitan:

- comprender el propósito;
- conocer el alcance;
- revisar la estructura;
- identificar limitaciones;
- reconocer el carácter de prototipo.

### Colaboradores

Necesitan:

- entender la arquitectura;
- localizar contenido;
- identificar fuentes;
- revisar historias de usuario;
- contribuir sin contradecir decisiones vigentes.

---

## Navegación principal

La navegación principal propuesta es:

```text
Inicio
Momentos
Lenguaje
Recursos
Guía docente
Acerca del proyecto
```

En pantallas pequeñas puede mostrarse dentro de un menú adaptable.

---

## Estructura general

```text
Inicio
│
├── Momentos
│   ├── Momento 1. Inspirar y conectar
│   │   ├── Sesión 1
│   │   └── Sesión 2
│   │
│   ├── Momento 2. Comprender
│   │   ├── Sesión 3
│   │   ├── Sesión 4
│   │   ├── Sesión 5
│   │   └── Sesión 6
│   │
│   ├── Momento 3. Aplicar y crear
│   │   ├── Sesión 7
│   │   ├── Sesión 8
│   │   ├── Sesión 9
│   │   ├── Sesión 10
│   │   ├── Sesión 11
│   │   └── Sesión 12
│   │
│   └── Momento 4. Compartir y transformar
│       ├── Sesión 13
│       ├── Sesión 14
│       ├── Sesión 15
│       └── Sesión 16
│
├── Lenguaje
│   ├── Glosario bilingüe
│   ├── Expresiones clave
│   ├── Preguntas restaurativas
│   └── Mensajes de paz
│
├── Recursos
│   ├── Materiales imprimibles
│   ├── Plantillas
│   ├── Prompts
│   └── Alternativas desconectadas
│
├── Guía docente
│   ├── Marco pedagógico
│   ├── Implementación
│   ├── Evaluación
│   ├── Privacidad y protección
│   ├── Accesibilidad
│   └── Uso responsable de IA
│
└── Acerca del proyecto
    ├── Propósito
    ├── Contexto
    ├── Transferencia desde Corea
    ├── Alcance y limitaciones
    ├── Autoría
    └── Documentación del repositorio
```

---

## Rutas propuestas

La primera versión puede utilizar archivos HTML independientes.

```text
docs/
├── index.html
├── moments/
│   ├── index.html
│   ├── moment-1.html
│   ├── moment-2.html
│   ├── moment-3.html
│   ├── moment-4.html
│   └── sessions/
│       ├── session-01.html
│       ├── session-02.html
│       ├── session-03.html
│       ├── session-04.html
│       ├── session-05.html
│       ├── session-06.html
│       ├── session-07.html
│       ├── session-08.html
│       ├── session-09.html
│       ├── session-10.html
│       ├── session-11.html
│       ├── session-12.html
│       ├── session-13.html
│       ├── session-14.html
│       ├── session-15.html
│       └── session-16.html
├── language/
│   ├── index.html
│   ├── glossary.html
│   ├── key-expressions.html
│   ├── restorative-questions.html
│   └── peace-messages.html
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
└── about/
    ├── index.html
    ├── context.html
    ├── korea-transfer.html
    ├── scope.html
    └── authorship.html
```

Esta estructura es una propuesta inicial. Puede simplificarse si las pruebas muestran que existen demasiadas páginas.

---

## Página de inicio

Ruta:

```text
docs/index.html
```

### Propósito

Presentar el proyecto y facilitar el acceso a sus secciones principales.

### Contenido mínimo

- nombre del proyecto;
- descripción breve;
- pregunta orientadora;
- aviso de prototipo;
- cuatro momentos;
- acceso a lenguaje;
- acceso a guía docente;
- aviso de privacidad;
- alternativa desconectada;
- enlaces al alcance y limitaciones.

### Acciones principales

```text
Explorar los momentos
Consultar expresiones
Abrir la guía docente
Conocer el proyecto
```

### Historias relacionadas

```text
US-001
US-002
US-007
US-014
```

---

## Página de momentos

Ruta:

```text
docs/moments/index.html
```

### Propósito

Mostrar la secuencia completa de la unidad.

### Contenido mínimo

Por cada momento:

- número;
- nombre;
- duración;
- propósito;
- número de sesiones;
- productos principales;
- enlace de acceso.

### Historias relacionadas

```text
US-002
```

---

## Páginas de momento

Rutas:

```text
docs/moments/moment-1.html
docs/moments/moment-2.html
docs/moments/moment-3.html
docs/moments/moment-4.html
```

### Propósito

Presentar la visión general de cada momento.

### Contenido mínimo

- nombre;
- duración;
- pregunta orientadora;
- propósito;
- aprendizajes;
- sesiones;
- productos;
- evidencias;
- recursos;
- alternativa desconectada;
- advertencias de privacidad;
- navegación al momento anterior y siguiente.

### Historias relacionadas

```text
US-002
US-003
US-008
```

---

## Páginas de sesión

Rutas:

```text
docs/moments/sessions/session-01.html
...
docs/moments/sessions/session-16.html
```

### Propósito

Presentar la planeación de una sesión.

### Vista estudiantil

Debe incluir:

- título;
- duración;
- propósito;
- instrucciones;
- materiales;
- expresiones lingüísticas;
- producto esperado;
- privacidad;
- alternativa desconectada.

### Vista docente

Debe incluir:

- preparación;
- secuencia;
- mediación;
- evidencias;
- evaluación;
- apoyos;
- alertas;
- rutas institucionales cuando corresponda.

### Decisión de implementación

La vista docente y la vista estudiantil pueden:

- coexistir en una misma página mediante secciones claramente diferenciadas; o
- publicarse en páginas separadas.

La decisión deberá registrarse en:

```text
DESIGN_DECISIONS.md
```

### Historias relacionadas

```text
US-003
US-009
US-013
```

---

## Sección de lenguaje

Ruta principal:

```text
docs/language/index.html
```

### Propósito

Centralizar los apoyos comunicativos bilingües y restaurativos.

### Subsecciones

```text
Glosario bilingüe
Expresiones clave
Preguntas restaurativas
Mensajes de paz
```

### Historias relacionadas

```text
US-004
US-005
US-006
```

---

## Glosario bilingüe

Ruta:

```text
docs/language/glossary.html
```

### Contenido mínimo

- término en inglés;
- equivalente en español;
- categoría;
- definición breve;
- ejemplo;
- función.

### Funciones posibles

- filtrar por categoría;
- buscar localmente;
- limpiar filtro.

Las funciones deben operar sin seguimiento ni almacenamiento.

---

## Expresiones clave

Ruta:

```text
docs/language/key-expressions.html
```

### Categorías sugeridas

- expresar emociones;
- comunicar necesidades;
- pedir aclaración;
- escuchar;
- expresar acuerdo;
- discrepar respetuosamente;
- retroalimentar;
- presentar;
- reflexionar.

---

## Preguntas restaurativas

Ruta:

```text
docs/language/restorative-questions.html
```

### Categorías sugeridas

- comprender hechos;
- explorar perspectivas;
- reconocer emociones;
- identificar necesidades;
- reconocer efectos;
- asumir responsabilidad;
- pensar en reparación;
- prevenir.

### Advertencia obligatoria

La página debe explicar que:

- las preguntas no sustituyen intervención adulta;
- no deben utilizarse para interrogar;
- no todas aplican a todas las situaciones;
- las situaciones graves requieren rutas institucionales;
- el recurso no registra respuestas.

---

## Mensajes de paz

Ruta:

```text
docs/language/peace-messages.html
```

### Contenido mínimo

- mensaje en inglés;
- mensaje en español;
- categoría;
- posibilidad de copiar localmente;
- recordatorio de revisión previa a publicación.

---

## Sección de recursos

Ruta principal:

```text
docs/resources/index.html
```

### Propósito

Organizar materiales prácticos para estudiantes y docentes.

### Subsecciones

- imprimibles;
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

## Materiales imprimibles

Ruta:

```text
docs/resources/printables.html
```

### Contenido mínimo

- nombre;
- sesión relacionada;
- propósito;
- formato;
- enlace;
- instrucciones;
- advertencia de privacidad.

---

## Plantillas

Ruta:

```text
docs/resources/templates.html
```

### Ejemplos

- mapa de voces;
- ficha de caso ficticio;
- historia de usuario;
- mapa de navegación;
- prototipo en papel;
- registro de prueba;
- retroalimentación;
- reflexión final.

---

## Prompts

Ruta:

```text
docs/resources/prompts.html
```

### Contenido mínimo

- propósito;
- plantilla;
- ejemplo ficticio;
- restricciones;
- criterios de revisión;
- advertencia de no incluir datos personales.

---

## Alternativas desconectadas

Ruta:

```text
docs/resources/offline-alternatives.html
```

### Propósito

Relacionar cada actividad tecnológica con una alternativa sin internet.

### Organización sugerida

| Actividad digital | Alternativa | Materiales | Evidencia |
|---|---|---|---|

---

## Guía docente

Ruta principal:

```text
docs/teacher-guide/index.html
```

### Propósito

Ofrecer una entrada específica para la preparación e implementación docente.

### Subsecciones

- implementación;
- evaluación;
- privacidad;
- accesibilidad;
- uso responsable de IA.

### Historias relacionadas

```text
US-009
US-010
US-011
US-012
US-013
```

---

## Implementación

Ruta:

```text
docs/teacher-guide/implementation.html
```

### Contenido mínimo

- propósito de la unidad;
- duración;
- secuencia;
- áreas;
- roles;
- preparación;
- materiales;
- recomendaciones de mediación;
- contingencias;
- rutas de consulta.

---

## Evaluación

Ruta:

```text
docs/teacher-guide/assessment.html
```

### Contenido mínimo

- enfoque;
- evidencias;
- rúbricas;
- autoevaluación;
- coevaluación;
- criterios de proceso;
- recursos imprimibles.

---

## Privacidad y protección

Ruta:

```text
docs/teacher-guide/privacy.html
```

### Contenido mínimo

- minimización de datos;
- casos ficticios;
- participación voluntaria;
- límites de confidencialidad;
- contenido que no debe recopilarse;
- recomendaciones para socialización;
- respuesta ante situaciones reales.

---

## Accesibilidad

Ruta:

```text
docs/teacher-guide/accessibility.html
```

### Contenido mínimo

- diferentes formas de participación;
- apoyos lingüísticos;
- recursos imprimibles;
- navegación accesible;
- alternativas desconectadas;
- adaptación de actividades.

---

## Uso responsable de IA

Ruta:

```text
docs/teacher-guide/responsible-ai.html
```

### Contenido mínimo

- qué puede hacer la IA;
- limitaciones;
- errores;
- sesgos;
- privacidad;
- revisión humana;
- prompts ficticios;
- reconocimiento del uso de IA.

---

## Acerca del proyecto

Ruta principal:

```text
docs/about/index.html
```

### Propósito

Presentar la identidad, contexto, alcance y desarrollo del proyecto.

### Subsecciones

- contexto;
- transferencia desde Corea;
- alcance;
- autoría.

### Historias relacionadas

```text
US-014
US-015
```

---

## Contexto

Ruta:

```text
docs/about/context.html
```

### Contenido mínimo

- institución;
- municipio;
- población;
- necesidad pedagógica;
- áreas articuladas.

No debe incluir información identificable de estudiantes.

---

## Transferencia desde Corea

Ruta:

```text
docs/about/korea-transfer.html
```

### Contenido mínimo

- experiencia formativa;
- aprendizajes tecnológicos;
- Vibe Coding;
- adaptación pedagógica;
- diferencia entre transferencia y copia.

---

## Alcance y limitaciones

Ruta:

```text
docs/about/scope.html
```

### Contenido obligatorio

El recurso:

- es educativo;
- es un prototipo;
- no recopila datos;
- no gestiona casos;
- no diagnostica;
- no recomienda sanciones;
- no sustituye rutas institucionales;
- no representa una aplicación futura aprobada.

---

## Autoría

Ruta:

```text
docs/about/authorship.html
```

### Contenido mínimo

- nombre del proyecto;
- autoría;
- institución;
- contexto de transferencia;
- estado del proyecto;
- reconocimiento de herramientas o colaboradores cuando corresponda.

---

## Navegación secundaria

Cada página debe incluir, cuando corresponda:

- enlace al inicio;
- enlace a la sección principal;
- página anterior;
- página siguiente;
- regreso al listado;
- acceso a privacidad;
- acceso a accesibilidad.

---

## Migas de navegación

Ejemplo:

```text
Inicio > Momentos > Momento 2 > Sesión 4
```

Las migas deben:

- utilizar enlaces reales;
- mostrar la página actual;
- ser comprensibles con lector de pantalla;
- evitar rutas excesivamente largas.

---

## Pie de página

El pie de página debe incluir:

- aviso de prototipo;
- privacidad;
- accesibilidad;
- alcance;
- autoría;
- repositorio cuando corresponda.

Texto sugerido:

> Recurso educativo en fase de prototipo. No recopila datos ni funciona como canal de denuncias o sistema de gestión de convivencia.

---

## Navegación móvil

En móvil, la navegación debe:

- ser operable con teclado;
- indicar estado abierto o cerrado;
- permitir cerrar con `Escape`;
- mantener foco controlado;
- no ocultar contenido esencial;
- utilizar etiquetas comprensibles.

---

## Contenido no incluido en la navegación estudiantil

Los siguientes documentos del repositorio no necesitan aparecer como páginas principales para estudiantes:

```text
CONTRIBUTING.md
CHANGELOG.md
DESIGN_DECISIONS.md
DESIGN_SYSTEM.md
ROADMAP.md
USER_STORIES.md
```

Pueden enlazarse desde una sección de documentación para colaboradores.

---

## Páginas de error

La primera versión debe considerar como mínimo una página o estado para:

```text
Contenido no encontrado
Error al cargar los datos
Recurso todavía no disponible
```

Los mensajes deben:

- explicar qué ocurrió;
- ofrecer una acción;
- permitir regresar;
- no culpar al usuario.

---

## Criterios de privacidad

Ninguna página debe incluir:

- campos de nombres;
- formularios de conflictos;
- carga de archivos;
- registro de emociones;
- envío de testimonios;
- cuentas;
- perfiles;
- seguimiento;
- analítica sin autorización.

---

## Criterios de accesibilidad

Todas las páginas deben:

- declarar idioma;
- utilizar HTML semántico;
- tener un `h1`;
- mantener encabezados ordenados;
- funcionar con teclado;
- mostrar foco;
- utilizar enlaces descriptivos;
- incluir textos alternativos;
- adaptarse a móviles;
- permitir zoom;
- no depender del color.

---

## Relación con historias de usuario

| Área del sitio | Historias principales |
|---|---|
| Inicio | US-001, US-007, US-014 |
| Momentos | US-002, US-003 |
| Lenguaje | US-004, US-005, US-006 |
| Recursos | US-008, US-011, US-012 |
| Guía docente | US-009, US-010, US-013 |
| Acerca del proyecto | US-014, US-015 |
| Accesibilidad transversal | US-016, US-017, US-018 |

---

## Prioridad de desarrollo

### Primera entrega

```text
Inicio
Momentos
Páginas generales de los cuatro momentos
Una plantilla de sesión
Expresiones clave
Privacidad
Acerca del proyecto
```

### Segunda entrega

```text
Dieciséis sesiones
Glosario
Preguntas restaurativas
Mensajes de paz
Guía docente
Evaluación
```

### Tercera entrega

```text
Recursos imprimibles
Plantillas
Prompts
Alternativas desconectadas
Documentación para colaboradores
```

---

## Decisiones pendientes

Antes de desarrollar deben resolverse:

- una página por sesión o contenido generado dinámicamente;
- datos copiados a `docs/data/` o consumidos desde `knowledge/data/`;
- separación entre vista docente y estudiantil;
- formato de los imprimibles;
- uso de iconos;
- sistema de búsqueda local;
- profundidad final de la navegación;
- funcionamiento sin conexión;
- estrategia de GitHub Pages.

Estas decisiones deben registrarse en:

```text
DESIGN_DECISIONS.md
```

---

## Criterio de actualización

Este mapa debe actualizarse cuando:

- se agrega una página;
- se elimina una ruta;
- cambia la navegación;
- se modifica una historia de usuario;
- se identifica una barrera;
- cambia la estructura de `docs/`;
- una prueba de usabilidad recomienda simplificación.

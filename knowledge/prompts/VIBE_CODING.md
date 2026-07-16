# Prompts para Vibe Coding

## Propósito

Este documento contiene prompts para apoyar la creación de prototipos mediante Vibe Coding dentro de **Voces que Restauran**.

Vibe Coding se entiende en este proyecto como un proceso iterativo:

```text
Comprender una necesidad
        ↓
Describir una solución
        ↓
Formular requerimientos
        ↓
Solicitar una versión inicial
        ↓
Revisar el código y la interfaz
        ↓
Probar
        ↓
Identificar errores
        ↓
Solicitar cambios
        ↓
Documentar decisiones
```

El propósito educativo no es producir software institucional listo para utilizarse con estudiantes.

Se busca que los participantes aprendan a:

- traducir necesidades en instrucciones;
- analizar resultados;
- detectar errores;
- reconocer riesgos;
- probar;
- mejorar;
- mantener decisiones humanas.

---

## Alcance técnico de la primera fase

Los prototipos generados deben ser preferiblemente:

- estáticos;
- ejecutables localmente;
- responsive;
- accesibles;
- sin autenticación;
- sin bases de datos;
- sin almacenamiento;
- sin formularios funcionales;
- sin conexión con APIs;
- sin analítica;
- sin seguimiento de usuarios.

Tecnologías posibles:

- HTML;
- CSS;
- JavaScript básico;
- archivos JSON locales;
- GitHub Pages.

---

## Funciones prohibidas

Los prompts no deben solicitar:

- cuentas de estudiantes;
- autenticación;
- perfiles;
- nombres;
- registro de conflictos;
- almacenamiento de relatos;
- bases de datos de convivencia;
- clasificación de estudiantes;
- puntuaciones de conducta;
- diagnósticos emocionales;
- reconocimiento facial;
- análisis de voz;
- vigilancia;
- recomendaciones disciplinarias;
- envío automático de reportes;
- conexión directa con una IA.

---

## Restricción técnica general

Puede agregarse esta instrucción:

```text
Crea únicamente un prototipo educativo estático. No incluyas autenticación, cuentas, bases de datos, almacenamiento local o remoto, cookies de seguimiento, analítica, formularios con envío, conexión a APIs, recopilación de datos personales, perfiles, puntuaciones de comportamiento, análisis emocional ni decisiones automatizadas. Utiliza contenido ficticio y deja claramente indicado que se trata de un prototipo pedagógico.
```

---

# Prompt maestro para un prototipo estático

```text
Actúa como desarrollador frontend y diseñador de experiencias educativas.

Proyecto:
Voces que Restauran.

Contexto:
Es un recurso educativo para estudiantes de secundaria entre 11 y 14 años. Integra convivencia, lenguaje restaurativo, inglés, ciudadanía digital, inteligencia artificial y prototipado.

Necesidad:
[DESCRIBIR NECESIDAD]

Usuario:
[DESCRIBIR USUARIO DE MANERA GENERAL]

Propósito:
[DESCRIBIR PROPÓSITO]

Crea un prototipo web estático que incluya:
- [LISTAR SECCIONES];
- navegación clara;
- contenido ficticio;
- lenguaje apropiado para la edad;
- elementos bilingües en español e inglés;
- recordatorios de privacidad;
- una alternativa o instrucción desconectada;
- diseño adaptable a móviles;
- accesibilidad básica.

Requisitos técnicos:
- HTML semántico;
- CSS organizado;
- JavaScript únicamente cuando sea necesario;
- archivos separados;
- sin frameworks, salvo que se solicite expresamente;
- comentarios breves en el código;
- posibilidad de ejecutarse localmente;
- compatibilidad con GitHub Pages.

Restricciones:
- no crear cuentas;
- no solicitar nombres;
- no almacenar información;
- no utilizar localStorage ni sessionStorage;
- no enviar formularios;
- no conectar APIs;
- no incluir analítica;
- no evaluar emociones;
- no asignar puntuaciones de conducta;
- no recomendar sanciones;
- no presentar el prototipo como producto institucional definitivo.

Antes de generar el código:
1. resume la interpretación de la necesidad;
2. enumera las secciones;
3. identifica posibles riesgos;
4. explica cómo cumplirás las restricciones.

Después genera los archivos completos.
```

---

# Prompts previos al código

## Convertir una necesidad en requerimientos

```text
Actúa como analista de requerimientos para un proyecto educativo.

Necesidad:

[DESCRIBIR NECESIDAD]

Usuario general:

[DESCRIBIR USUARIO]

Transforma la información en:

1. declaración del problema;
2. propósito;
3. historias de usuario;
4. funciones esenciales;
5. funciones opcionales;
6. funciones que deben descartarse;
7. requisitos de accesibilidad;
8. requisitos de privacidad;
9. criterios de éxito;
10. preguntas que todavía deben responderse.

No propongas almacenamiento, perfiles, análisis emocional ni decisiones disciplinarias.
```

---

## Revisar el alcance

```text
Analiza el siguiente alcance:

[PEGAR ALCANCE]

Clasifica cada función como:
- esencial para el primer prototipo;
- opcional;
- futura;
- riesgosa;
- fuera del propósito.

Evalúa:
- valor pedagógico;
- privacidad;
- accesibilidad;
- complejidad;
- necesidad real;
- posibilidad de trabajar sin datos.

Recomienda el alcance mínimo viable para un prototipo estático.
```

---

## Crear arquitectura de información

```text
Actúa como arquitecto de información.

A partir de esta necesidad y estas historias de usuario:

[PEGAR INFORMACIÓN]

Propón una arquitectura sencilla para un recurso web educativo.

Incluye:
- menú principal;
- secciones;
- subsecciones;
- recorrido principal;
- nombres comprensibles;
- función de cada sección;
- contenido que debe ser estático;
- recursos imprimibles asociados.

Limita el menú principal a un máximo de seis opciones.

No incluyas cuentas, paneles personales, formularios ni bases de datos.
```

---

## Crear un flujo de usuario

```text
Crea un flujo de usuario para esta tarea:

[DESCRIBIR TAREA]

Presenta:
1. punto de entrada;
2. pasos;
3. decisiones;
4. ayudas;
5. posibles errores;
6. posibilidad de regresar;
7. cierre;
8. alternativa desconectada.

El flujo debe funcionar sin cuentas, datos personales ni almacenamiento.
```

---

# Prompts para interfaz

## Diseñar una pantalla

```text
Actúa como diseñador de interfaces educativas.

Diseña conceptualmente una pantalla para:

[DESCRIBIR FUNCIÓN]

Público:
Estudiantes de 11 a 14 años.

Incluye:
- objetivo de la pantalla;
- título;
- instrucción breve;
- contenido;
- botones;
- mensaje de privacidad cuando corresponda;
- versión bilingüe de expresiones clave;
- comportamiento en móvil;
- consideraciones de accesibilidad;
- estado vacío o mensaje de ayuda.

No incluyas campos para información personal.
```

---

## Crear wireframes textuales

```text
Crea wireframes textuales para las siguientes pantallas:

[LISTAR PANTALLAS]

Para cada una representa:
- encabezado;
- navegación;
- título;
- contenido principal;
- botones;
- ayuda;
- pie de página.

Utiliza diagramas de texto sencillos.

Prioriza claridad, accesibilidad y navegación móvil.
```

---

## Revisar lenguaje de interfaz

```text
Revisa los textos de esta interfaz:

[PEGAR TEXTOS]

Evalúa:
- claridad;
- extensión;
- nivel de lectura;
- tono;
- coherencia;
- lenguaje restaurativo;
- traducción al inglés;
- accesibilidad cognitiva.

Propón una versión más breve y comprensible para estudiantes de 11 a 14 años.
```

---

# Prompts para generar código

## Crear una página inicial

```text
Genera una página inicial estática para “Voces que Restauran”.

Debe incluir:
- nombre del proyecto;
- explicación breve;
- cuatro tarjetas correspondientes a los momentos:
  - Inspirar y conectar;
  - Comprender;
  - Aplicar y crear;
  - Compartir y transformar;
- sección de privacidad;
- acceso a recursos para docentes;
- pie de página.

Requisitos:
- HTML semántico;
- CSS separado;
- diseño responsive;
- navegación mediante teclado;
- foco visible;
- contraste adecuado;
- textos en español con expresiones bilingües puntuales;
- sin formularios;
- sin almacenamiento;
- sin dependencias externas obligatorias.

Entrega:
- index.html;
- styles.css;
- script.js solamente si es necesario.
```

---

## Crear tarjetas interactivas sin almacenar datos

```text
Crea un componente de tarjetas para presentar preguntas restaurativas.

El usuario debe poder:
- seleccionar una categoría;
- leer una pregunta;
- mostrar otra pregunta;
- regresar al menú.

Categorías:
- comprender;
- emociones;
- efectos;
- necesidades;
- responsabilidad;
- reparación;
- prevención.

Requisitos:
- usar contenido local ficticio;
- no pedir respuestas;
- no almacenar interacción;
- permitir navegación con teclado;
- indicar que las preguntas no sustituyen apoyo docente;
- incluir español e inglés en cada tarjeta.

Entrega HTML, CSS y JavaScript separados.
```

---

## Crear un glosario con búsqueda local

```text
Crea un glosario bilingüe estático.

Funciones:
- mostrar palabras en español e inglés;
- filtrar por categoría;
- buscar palabras dentro de una lista local;
- limpiar la búsqueda;
- mostrar una frase de ejemplo.

Requisitos:
- los datos deben encontrarse en un archivo JSON local;
- no registrar búsquedas;
- no usar APIs;
- no usar almacenamiento;
- navegación accesible;
- diseño responsive;
- mensaje cuando no haya resultados.

Entrega:
- página HTML;
- CSS;
- JavaScript;
- ejemplo de glossary.json.
```

---

## Crear una galería de mensajes de paz

```text
Crea una galería web estática de mensajes bilingües de convivencia.

Debe incluir:
- filtros por tema;
- tarjetas con español e inglés;
- opción de copiar el mensaje mediante un botón;
- notificación accesible de copiado;
- opción de imprimir mediante estilos CSS;
- diseño adaptable a móviles.

No incluyas:
- publicación en redes;
- perfiles;
- comentarios;
- almacenamiento;
- seguimiento.

Entrega archivos completos y explica brevemente la estructura.
```

---

# Prompts para revisar código

## Auditoría de privacidad

```text
Revisa el siguiente código:

[PEGAR CÓDIGO]

Identifica cualquier uso de:
- formularios;
- envío de datos;
- localStorage;
- sessionStorage;
- cookies;
- bases de datos;
- APIs;
- analítica;
- seguimiento;
- campos personales;
- identificadores;
- cargas de archivos.

Organiza los hallazgos en:
- seguro;
- requiere revisión;
- debe eliminarse.

Después propone los cambios mínimos para convertirlo en un prototipo completamente estático.
```

---

## Auditoría de accesibilidad

```text
Revisa este código frontend:

[PEGAR CÓDIGO]

Evalúa:
- HTML semántico;
- jerarquía de encabezados;
- etiquetas;
- uso del teclado;
- foco visible;
- contraste;
- textos alternativos;
- botones y enlaces;
- idioma del documento;
- mensajes dinámicos;
- tamaño táctil;
- adaptación móvil;
- información transmitida únicamente por color.

Presenta:
1. problemas prioritarios;
2. razón;
3. corrección recomendada;
4. fragmentos corregidos.
```

---

## Auditoría de lenguaje y seguridad pedagógica

```text
Revisa esta interfaz educativa:

[PEGAR CONTENIDO O CÓDIGO]

Identifica:
- lenguaje punitivo;
- preguntas acusatorias;
- etiquetas sobre personas;
- promesas de confidencialidad absoluta;
- solicitudes de relatos personales;
- funciones que parezcan atender casos reales;
- recomendaciones disciplinarias;
- afirmaciones que presenten la IA como autoridad.

Propón una reformulación restaurativa y segura para cada problema.
```

---

## Revisar calidad del código

```text
Revisa el siguiente código:

[PEGAR CÓDIGO]

Evalúa:
- claridad;
- organización;
- repetición;
- nombres de variables;
- separación de responsabilidades;
- manejo de errores;
- comentarios;
- compatibilidad con GitHub Pages;
- dependencia de servicios externos;
- facilidad de mantenimiento.

No añadas frameworks ni dependencias salvo que sean estrictamente necesarios.

Entrega una lista priorizada de mejoras y después una versión corregida.
```

---

# Prompts para corregir errores

## Diagnosticar un error

```text
Estoy trabajando en un prototipo web educativo estático.

Comportamiento esperado:

[DESCRIBIR]

Comportamiento observado:

[DESCRIBIR]

Mensaje de error:

[PEGAR ERROR]

Código relacionado:

[PEGAR CÓDIGO]

Analiza:
1. causa más probable;
2. otras causas posibles;
3. cómo comprobarlas;
4. corrección mínima;
5. código corregido;
6. prueba que debo realizar.

No introduzcas almacenamiento, APIs ni dependencias nuevas.
```

---

## Solicitar una modificación controlada

```text
Modifica únicamente el siguiente aspecto del prototipo:

[DESCRIBIR CAMBIO]

Mantén sin cambios:
- estructura general;
- contenido;
- navegación;
- estilos no relacionados;
- restricciones de privacidad.

Código actual:

[PEGAR CÓDIGO]

Antes de responder:
1. explica qué archivos deben cambiar;
2. identifica posibles efectos secundarios.

Después entrega únicamente los archivos modificados completos.
```

---

## Eliminar una función riesgosa

```text
Revisa el código y elimina completamente:

[DESCRIBIR FUNCIÓN RIESGOSA]

Ejemplos:
- formulario;
- almacenamiento;
- campo de nombre;
- envío de datos;
- registro de usuario;
- clasificación;
- puntuación.

Sustitúyela por una alternativa estática que mantenga el propósito pedagógico.

Explica:
- qué se eliminó;
- por qué representaba un riesgo;
- cómo funciona la nueva alternativa.
```

---

# Prompts para pruebas

## Crear casos de prueba

```text
Crea casos de prueba para este prototipo:

[DESCRIBIR FUNCIONES]

Incluye:
- navegación principal;
- botones;
- filtros;
- búsqueda;
- regreso al inicio;
- uso con teclado;
- pantalla móvil;
- contenido vacío;
- errores posibles;
- privacidad.

Para cada caso indica:
- acción;
- resultado esperado;
- criterio de aprobación.

No incluyas pruebas con información personal.
```

---

## Simular retroalimentación de usuarios

```text
Actúa como revisor de usabilidad educativa, no como estudiante real.

Analiza esta descripción o captura textual del prototipo:

[PEGAR INFORMACIÓN]

Evalúa:
- comprensión del propósito;
- claridad de instrucciones;
- navegación;
- carga cognitiva;
- lenguaje;
- accesibilidad;
- privacidad;
- relación con la necesidad.

Presenta:
- fortalezas;
- dudas;
- barreras;
- riesgos;
- cambios prioritarios.

No inventes datos de usuarios ni afirmes que se realizaron pruebas reales.
```

---

## Comparar dos versiones

```text
Compara estas dos versiones de un prototipo:

Versión 1:
[DESCRIBIR O PEGAR]

Versión 2:
[DESCRIBIR O PEGAR]

Analiza:
- claridad;
- navegación;
- accesibilidad;
- privacidad;
- relación con la necesidad;
- lenguaje;
- complejidad;
- posibles regresiones.

Indica:
- qué mejoró;
- qué empeoró;
- qué debe conservarse;
- qué requiere otra prueba.
```

---

# Prompt para generar documentación

```text
A partir de este prototipo:

[DESCRIBIR PROTOTIPO Y ARCHIVOS]

Crea documentación en Markdown con:

- propósito;
- usuario;
- funciones;
- estructura de archivos;
- instrucciones para ejecutarlo;
- decisiones de privacidad;
- criterios de accesibilidad;
- limitaciones;
- pruebas realizadas;
- problemas conocidos;
- próximos pasos.

No afirmes que es una aplicación institucional aprobada. Identifícalo claramente como prototipo pedagógico.
```

---

# Prompt para generar un README técnico

```text
Crea un README.md para un prototipo educativo llamado “Voces que Restauran”.

Incluye:
- descripción;
- propósito pedagógico;
- estado del proyecto;
- tecnologías;
- estructura;
- ejecución local;
- despliegue en GitHub Pages;
- accesibilidad;
- privacidad;
- limitaciones;
- contribuciones;
- advertencia sobre menores;
- licencia, solo si ya está definida.

No inventes funciones, resultados de implementación ni licencias.
```

---

# Prompt para integrar contenido desde JSON

```text
Modifica el prototipo para separar el contenido de la interfaz.

Requisitos:
- trasladar textos y listas a un archivo JSON local;
- cargar el JSON mediante JavaScript;
- mostrar mensajes de error comprensibles;
- conservar una estructura semántica;
- no utilizar bases de datos;
- no utilizar APIs externas;
- no almacenar respuestas;
- mantener compatibilidad con GitHub Pages.

Propón primero el esquema del JSON y luego entrega los archivos completos.
```

El archivo previsto para el contenido general del proyecto es:

```text
knowledge/data/unit-content.json
```

La interfaz de producción puede utilizar posteriormente una copia optimizada de los datos si la arquitectura técnica lo requiere.

---

# Prompt para verificar restricciones

```text
Actúa como revisor de seguridad y alcance.

Analiza este prototipo, requerimiento o código:

[PEGAR CONTENIDO]

Responde con una tabla que indique si contiene:

- autenticación;
- cuentas;
- datos personales;
- almacenamiento;
- cookies;
- analítica;
- conexión a APIs;
- formularios con envío;
- clasificación de estudiantes;
- análisis emocional;
- puntuación de conducta;
- recomendaciones disciplinarias;
- publicación automática.

Para cada elemento indica:
- presente o ausente;
- evidencia;
- riesgo;
- corrección.

Finaliza con una conclusión:
- apto como prototipo estático;
- apto con cambios;
- no apto para esta fase.
```

---

# Lista de revisión antes de aceptar código generado

## Propósito

- ¿Responde a una necesidad documentada?
- ¿La función tiene valor pedagógico?
- ¿Coincide con la historia de usuario?

## Privacidad

- ¿Solicita información?
- ¿Utiliza almacenamiento?
- ¿Conecta servicios?
- ¿Puede funcionar sin datos?

## Seguridad pedagógica

- ¿Utiliza casos ficticios?
- ¿Evita lenguaje punitivo?
- ¿Evita diagnósticos?
- ¿Evita decisiones automáticas?

## Accesibilidad

- ¿Funciona con teclado?
- ¿Tiene foco visible?
- ¿Utiliza HTML semántico?
- ¿Funciona en móvil?
- ¿Tiene contraste y textos comprensibles?

## Calidad técnica

- ¿Puede ejecutarse localmente?
- ¿Es compatible con GitHub Pages?
- ¿Los archivos están organizados?
- ¿Existen errores en la consola?
- ¿Se documentaron las dependencias?

## Transparencia

- ¿Se identifica como prototipo?
- ¿Se explican sus limitaciones?
- ¿Se documenta qué produjo la IA?
- ¿Las decisiones finales son humanas?

---

# Registro de iteraciones

```text
Fecha:

Equipo:

Necesidad:

Versión del prompt:

Herramienta utilizada:

Archivos generados:

Resultado esperado:

Resultado observado:

Errores:

Riesgos:

Cambios solicitados:

Decisiones humanas:

Próxima prueba:
```

No deben incluirse nombres de estudiantes.

---

# Límites

La generación de una interfaz funcional no demuestra por sí sola que:

- la necesidad fue comprendida;
- el recurso sea seguro;
- la propuesta sea pedagógicamente pertinente;
- la aplicación esté lista;
- pueda utilizarse institucionalmente;
- cumpla todas las normas;
- haya sido validada con usuarios.

La fase posterior requerirá revisión técnica, pedagógica, ética e institucional.

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- cambie el alcance técnico;
- se adopten otras tecnologías;
- se identifiquen riesgos;
- cambien los criterios de accesibilidad;
- se defina la aplicación futura;
- se realicen pruebas;
- se modifique la arquitectura;
- se incorporen nuevos patrones de prompts.

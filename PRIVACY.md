# Privacidad y protección de estudiantes

## Propósito

Este documento establece los principios de privacidad y protección aplicables a **Voces que Restauran**.

El proyecto involucra estudiantes menores de edad. Por esta razón, debe aplicarse un enfoque preventivo y de minimización de datos.

Este documento orienta el prototipo pedagógico. No sustituye las políticas institucionales ni la normativa aplicable.

---

## Principio general

> El proyecto debe funcionar sin recopilar información personal de los estudiantes.

Antes de incorporar cualquier dato debe preguntarse:

1. ¿Es necesario?
2. ¿Existe una alternativa sin datos?
3. ¿Qué riesgo genera?
4. ¿Quién tendría acceso?
5. ¿Durante cuánto tiempo se conservaría?
6. ¿Existe autorización y fundamento institucional?

En la fase actual, no se identifica una necesidad pedagógica que justifique recopilar datos estudiantiles.

---

## Alcance de la primera fase

La primera versión será un recurso educativo estático.

No debe incluir:

- autenticación;
- cuentas;
- perfiles;
- bases de datos;
- almacenamiento local;
- almacenamiento remoto;
- analítica;
- seguimiento;
- formularios con envío;
- carga de archivos;
- integración directa con IA;
- registro de convivencia.

---

## Datos personales

Se consideran datos que no deben recopilarse:

- nombres completos;
- documentos de identidad;
- fecha de nacimiento completa;
- dirección;
- teléfono;
- correo personal;
- fotografías identificables;
- voz grabada;
- ubicación;
- contraseñas;
- identificadores de dispositivos;
- datos familiares;
- información socioeconómica;
- información disciplinaria;
- diagnósticos;
- información de salud;
- datos emocionales individuales;
- relatos de conflictos.

---

## Datos sensibles

Debe aplicarse protección reforzada a información relacionada con:

- salud;
- orientación sexual;
- identidad de género;
- origen étnico;
- religión;
- discapacidad;
- violencia;
- familia;
- desplazamiento;
- conflicto armado;
- procesos disciplinarios;
- bienestar psicológico.

Esta información no debe recopilarse mediante las actividades o el recurso web.

---

## Casos ficticios

Las actividades deben utilizar:

- personajes ficticios;
- situaciones generales;
- ejemplos creados para aprender;
- información no identificable.

Los casos no deben construirse copiando:

- situaciones conocidas;
- relatos privados;
- conflictos del curso;
- casos disciplinarios;
- rumores;
- información de orientación escolar.

---

## Participación voluntaria

Los estudiantes no deben estar obligados a compartir:

- experiencias;
- emociones personales;
- situaciones familiares;
- conflictos;
- información privada.

Deben existir alternativas como:

- analizar un personaje;
- dibujar;
- escribir de manera general;
- utilizar tarjetas;
- pasar el turno;
- responder de forma privada al docente.

---

## Confidencialidad y sus límites

No debe prometerse confidencialidad absoluta.

El docente debe explicar que, si aparece información relacionada con:

- riesgo;
- violencia;
- abuso;
- vulneración de derechos;
- amenaza;
- daño a sí mismo o a otros;

puede ser necesario activar las rutas institucionales correspondientes.

---

## Evidencias de aprendizaje

Las evidencias deben utilizar la mínima información posible.

Se recomienda:

- asignar códigos de equipo;
- recopilar productos colectivos;
- evitar nombres en fichas;
- almacenar solo evidencias necesarias;
- separar evaluación y socialización;
- eliminar duplicados;
- revisar antes de publicar.

---

## Productos públicos

Pueden compartirse después de revisión:

- mensajes colectivos;
- campañas;
- prototipos anonimizados;
- diagramas;
- glosarios;
- preguntas ficticias;
- recomendaciones generales.

No deben compartirse:

- autoevaluaciones;
- coevaluaciones individuales;
- relatos;
- nombres;
- conflictos;
- fichas emocionales;
- calificaciones;
- observaciones privadas;
- información disciplinaria.

---

## Fotografías y videos

No deben tomarse o publicarse imágenes identificables sin:

- propósito claro;
- autorización;
- revisión institucional;
- información sobre el uso.

Cuando sea posible, preferir:

- fotografías de productos;
- manos trabajando sin identificación;
- planos generales autorizados;
- capturas del prototipo;
- ilustraciones.

---

## Inteligencia artificial

No deben introducirse en herramientas de IA:

- nombres;
- fotografías;
- relatos;
- transcripciones;
- conflictos;
- información familiar;
- datos disciplinarios;
- diagnósticos;
- producciones que permitan identificar a un estudiante.

Los prompts deben utilizar situaciones ficticias.

---

## Recurso web

El recurso no debe:

- pedir nombres;
- pedir cursos;
- pedir correos;
- guardar respuestas;
- crear identificadores;
- utilizar cookies de seguimiento;
- utilizar analítica sin una decisión posterior formal;
- enviar información a terceros;
- solicitar permisos innecesarios.

---

## Código

Debe revisarse que el código no utilice:

```text
localStorage
sessionStorage
document.cookie
fetch hacia servicios externos
formularios con action
servicios de analítica
identificadores persistentes
carga de archivos
```

El uso de `fetch` para cargar un archivo JSON local puede permitirse si no transmite datos.

---

## Servicios externos

Antes de incorporar un servicio externo debe revisarse:

- finalidad;
- datos enviados;
- ubicación del tratamiento;
- términos;
- edad mínima;
- cookies;
- seguimiento;
- conservación;
- acceso institucional;
- posibilidad de no utilizarlo.

En la primera fase se evitarán integraciones externas.

---

## Repositorio

Nunca deben subirse:

- claves;
- tokens;
- credenciales;
- datos estudiantiles;
- respuestas;
- fotografías no autorizadas;
- documentos institucionales reservados;
- bases de datos;
- archivos de configuración secretos.

---

## Git y permanencia

Los cambios eliminados de un archivo pueden permanecer en el historial de Git.

Por esta razón:

> La información sensible nunca debe añadirse al repositorio, ni siquiera temporalmente.

---

## Incidentes

Si se publica o almacena información por error:

1. detener el acceso cuando sea posible;
2. informar al responsable institucional;
3. no redistribuir el contenido;
4. documentar el incidente de forma segura;
5. eliminar el contenido visible;
6. revisar el historial y las copias;
7. evaluar acciones adicionales;
8. modificar el proceso para prevenir repetición.

No debe documentarse el dato sensible dentro de un issue público.

---

## Rutas institucionales

El recurso no sustituye:

- orientación escolar;
- coordinación;
- comité de convivencia;
- protocolos de protección;
- atención de emergencias;
- autoridades competentes.

Ante situaciones reales se deben seguir las rutas institucionales aplicables.

---

## Lista de verificación

Antes de publicar una función:

- ¿Recopila datos?
- ¿Guarda información?
- ¿Envía información?
- ¿Crea un identificador?
- ¿Puede utilizarse sin esa función?
- ¿Un menor puede ser identificado?
- ¿Se utiliza un servicio externo?
- ¿Existe una ruta alternativa?
- ¿Está documentada la decisión?

Si existe duda, la función no debe publicarse hasta ser revisada.

---

## Desarrollo futuro

Una futura aplicación que gestione información requeriría, antes de construirse:

- definición institucional;
- fundamento jurídico;
- evaluación de riesgos;
- responsables;
- permisos;
- políticas;
- medidas de seguridad;
- protocolos de acceso;
- tiempos de conservación;
- atención de derechos;
- pruebas controladas.

La documentación actual no autoriza esa fase.

---

## Criterio de actualización

Este documento debe revisarse cuando:

- cambie la arquitectura;
- se incorpore un servicio;
- se planee almacenar información;
- se publique contenido;
- cambien políticas institucionales;
- se inicie una fase de aplicación real.

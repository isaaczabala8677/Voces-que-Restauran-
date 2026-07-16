# Registro de decisiones de diseño

## Propósito

Este documento registra decisiones pedagógicas, éticas, funcionales y técnicas de **Voces que Restauran**.

Su objetivo es conservar:

- qué se decidió;
- por qué se decidió;
- qué alternativas se consideraron;
- qué consecuencias tiene;
- cuándo debe revisarse.

Las decisiones no deben modificarse silenciosamente.

---

## Formato para nuevas decisiones

```text
ID:

Fecha:

Estado:
Propuesta | Aceptada | Reemplazada | Descartada

Decisión:

Contexto:

Razón:

Alternativas consideradas:

Consecuencias:

Documentos relacionados:

Condición de revisión:
```

---

# Decisiones vigentes

## DD-001 — Construir primero la unidad didáctica

**Estado:** Aceptada

### Decisión

Antes de desarrollar una aplicación institucional, se documentará e implementará una unidad didáctica de cocreación.

### Razón

Construir primero una aplicación implicaría asumir necesidades y funciones sin participación suficiente de los estudiantes.

### Consecuencias

- la base de conocimiento se completa antes del desarrollo;
- los estudiantes participan en la definición de necesidades;
- los prototipos funcionan como insumos;
- la futura aplicación requerirá otra fase.

---

## DD-002 — La aplicación futura no está definida

**Estado:** Aceptada

### Decisión

No se establecerán anticipadamente las funciones definitivas de una aplicación.

### Razón

Las funciones deben responder a:

- resultados de implementación;
- necesidades recurrentes;
- aportes estudiantiles;
- revisión docente;
- criterios institucionales;
- análisis técnico y ético.

### Consecuencias

Los productos actuales se identifican como prototipos.

---

## DD-003 — Recurso web estático

**Estado:** Aceptada

### Decisión

La primera versión del recurso será estática.

### Tecnologías previstas

- HTML;
- CSS;
- JavaScript;
- JSON local;
- GitHub Pages.

### Razón

Una arquitectura estática:

- reduce riesgos;
- facilita mantenimiento;
- evita recopilar información;
- permite despliegue sencillo;
- favorece transparencia.

---

## DD-004 — No almacenar datos estudiantiles

**Estado:** Aceptada

### Decisión

La primera fase no almacenará respuestas, relatos, perfiles ni interacciones de estudiantes.

### Consecuencias

No se utilizarán:

- bases de datos;
- cuentas;
- autenticación;
- almacenamiento local;
- formularios con envío;
- analítica de usuarios.

---

## DD-005 — Utilizar casos ficticios

**Estado:** Aceptada

### Decisión

Las actividades sobre convivencia utilizarán principalmente casos ficticios.

### Razón

Esto permite desarrollar análisis sin convertir el aula en un espacio de exposición de conflictos reales.

### Excepción

Si aparece espontáneamente una situación real que implique riesgo o vulneración, debe atenderse mediante las rutas institucionales y fuera de la dinámica pública.

---

## DD-006 — Máximo tres áreas

**Estado:** Aceptada

### Decisión

La unidad articula:

- inglés;
- ética, convivencia y ciencias sociales;
- tecnología e informática.

### Razón

Limitar el número de áreas favorece:

- coherencia;
- viabilidad;
- claridad en responsabilidades;
- integración real.

---

## DD-007 — Duración de 32 horas

**Estado:** Aceptada

### Decisión

La unidad tendrá:

- 8 semanas;
- 16 sesiones;
- 2 horas por sesión;
- 32 horas.

### Distribución

| Momento | Horas |
|---|---:|
| Inspirar y conectar | 4 |
| Comprender | 8 |
| Aplicar y crear | 12 |
| Compartir y transformar | 8 |

---

## DD-008 — Vibe Coding como transferencia principal

**Estado:** Aceptada

### Decisión

La transferencia pedagógica priorizará el Vibe Coding.

### Razón

Permite integrar:

- lenguaje natural;
- pensamiento computacional;
- diseño;
- IA;
- prueba;
- corrección;
- creatividad.

### Condición

El Vibe Coding debe presentarse como proceso iterativo y no como generación automática de soluciones.

---

## DD-009 — El inglés tendrá función comunicativa

**Estado:** Aceptada

### Decisión

El inglés se utilizará para:

- expresar emociones;
- comunicar necesidades;
- escuchar;
- colaborar;
- dar retroalimentación;
- presentar;
- crear mensajes.

### Razón

La lengua debe relacionarse con acciones comunicativas reales dentro del proyecto.

---

## DD-010 — Nivel lingüístico A1–A2

**Estado:** Aceptada

### Decisión

Los recursos lingüísticos principales se diseñarán para nivel A1–A2.

### Consecuencias

Se utilizarán:

- frases breves;
- modelos;
- traducciones;
- apoyos visuales;
- marcos de oración;
- uso flexible de ambos idiomas.

---

## DD-011 — No forzar relatos personales

**Estado:** Aceptada

### Decisión

Ningún estudiante estará obligado a compartir:

- experiencias;
- emociones personales;
- conflictos;
- información familiar;
- testimonios.

### Consecuencia

La participación puede realizarse mediante casos, personajes, dibujos, escritura o análisis general.

---

## DD-012 — No automatizar empatía ni restauración

**Estado:** Aceptada

### Decisión

La tecnología no debe:

- decidir reparaciones;
- interpretar emociones;
- determinar culpabilidad;
- recomendar sanciones;
- gestionar casos;
- reemplazar mediación.

### Razón

La convivencia requiere contexto, responsabilidad humana, cuidado y protección.

---

## DD-013 — Evaluar procesos y productos

**Estado:** Aceptada

### Decisión

La evaluación no se centrará únicamente en el prototipo final.

### Evidencias

- borradores;
- preguntas;
- diagramas;
- decisiones;
- pruebas;
- errores;
- cambios;
- reflexiones;
- colaboración.

---

## DD-014 — No utilizar rankings

**Estado:** Aceptada

### Decisión

No se crearán rankings públicos de:

- estudiantes;
- equipos;
- prototipos;
- comportamiento;
- participación.

### Razón

Los rankings pueden desplazar el enfoque de colaboración y generar exposición o competencia innecesaria.

---

## DD-015 — Todas las actividades tendrán alternativa desconectada

**Estado:** Aceptada

### Decisión

Cada actividad que utilice tecnología deberá contar con una alternativa en papel o simulada.

### Razón

La conectividad o disponibilidad de dispositivos no debe determinar la participación ni la evaluación.

---

## DD-016 — Markdown como fuente pedagógica principal

**Estado:** Aceptada

### Decisión

Los documentos Markdown de `knowledge/` son la fuente principal para decisiones pedagógicas.

### Capa estructurada

```text
knowledge/data/unit-content.json
```

funciona como fuente de contenido para la interfaz.

### Regla

Ante contradicciones:

1. revisar Markdown;
2. confirmar decisión;
3. actualizar JSON;
4. actualizar interfaz.

---

## DD-017 — Sin conexión directa con IA en la primera versión

**Estado:** Aceptada

### Decisión

El recurso web inicial no enviará prompts automáticamente a servicios externos.

### Razón

Esto evita:

- recopilación no prevista;
- credenciales;
- dependencia de APIs;
- exposición de contenidos;
- costos;
- complejidad adicional.

---

## DD-018 — Diseño accesible y responsive

**Estado:** Aceptada

### Decisión

El recurso debe:

- funcionar con teclado;
- tener foco visible;
- utilizar HTML semántico;
- mantener contraste;
- adaptarse a móviles;
- ofrecer recursos imprimibles;
- no depender únicamente del color.

---

## DD-019 — Separar guía docente y actividad estudiantil

**Estado:** Aceptada

### Decisión

Cuando sea posible, la interfaz diferenciará:

- orientaciones docentes;
- instrucciones estudiantiles.

### Razón

Esto reduce carga cognitiva y evita mostrar instrucciones de protección o mediación fuera de contexto.

---

## DD-020 — No definir todavía una licencia

**Estado:** Aceptada

### Decisión

No se añadirá una licencia hasta revisar:

- autoría;
- propiedad institucional;
- uso de materiales;
- recursos de terceros;
- productos estudiantiles;
- condiciones de publicación.

---

## DD-021 — No prometer confidencialidad absoluta

**Estado:** Aceptada

### Decisión

Los materiales deben explicar que existen límites a la confidencialidad cuando aparece información relacionada con riesgo o vulneración de derechos.

---

## DD-022 — Socialización controlada

**Estado:** Aceptada

### Decisión

La feria de prototipos y la campaña no implican publicación automática en internet.

### Requisitos

- revisión;
- anonimización;
- autorización cuando corresponda;
- eliminación de información identificable.

---

## DD-023 — El recurso web no será un canal de denuncias

**Estado:** Aceptada

### Decisión

La interfaz no incluirá funciones para:

- reportar casos;
- cargar evidencias;
- enviar relatos;
- identificar responsables;
- gestionar convivencia.

### Razón

Estas funciones requerirían una arquitectura, una responsabilidad y unos protocolos diferentes.

---

## DD-024 — Reconocer el uso de IA

**Estado:** Aceptada

### Decisión

Cuando un producto utilice IA, los estudiantes deben poder explicar:

- qué generó la herramienta;
- qué revisó el equipo;
- qué se modificó;
- qué decisiones fueron humanas.

---

## Revisión de decisiones

Este documento debe revisarse cuando:

- cambie la fase del proyecto;
- se implemente la unidad;
- se inicie una aplicación;
- cambie la arquitectura;
- se adopten nuevas herramientas;
- se identifiquen riesgos;
- la institución defina nuevas condiciones.

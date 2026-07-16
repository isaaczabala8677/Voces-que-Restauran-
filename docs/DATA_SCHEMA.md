# Esquema de datos

## Propósito

Este documento describe la estructura, reglas y validaciones del archivo:

```text
knowledge/data/unit-content.json
```

y de su copia utilizada por el recurso web:

```text
docs/data/unit-content.json
```

El objetivo es facilitar:

- comprensión de los datos;
- mantenimiento;
- validación;
- desarrollo de la interfaz;
- detección de inconsistencias;
- sincronización entre documentación, JSON y sitio web.

Este documento debe utilizarse junto con:

```text
knowledge/data/README.md
knowledge/data/unit-content.json
docs/TECHNICAL_ARCHITECTURE.md
docs/CONTENT_MAPPING.md
docs/IMPLEMENTATION_PLAN.md
```

---

## Función del archivo JSON

El archivo JSON funciona como una representación estructurada del contenido pedagógico principal.

Puede utilizarse para generar o completar:

- tarjetas de momentos;
- listados de sesiones;
- páginas de sesión;
- expresiones bilingües;
- mensajes;
- recursos;
- metadatos de la unidad;
- componentes reutilizables.

El JSON no reemplaza la documentación pedagógica en Markdown.

---

## Fuentes de verdad

### Fuente pedagógica principal

```text
knowledge/
```

Los documentos Markdown contienen:

- explicaciones;
- fundamentos;
- metodología;
- orientaciones;
- evaluación;
- contenido detallado;
- decisiones pedagógicas.

### Fuente estructurada principal

```text
knowledge/data/unit-content.json
```

Contiene los datos organizados para uso técnico.

### Copia para la interfaz

```text
docs/data/unit-content.json
```

Debe ser una copia sincronizada del archivo principal.

---

## Regla de sincronización

El flujo correcto es:

```text
Actualizar documentación pedagógica
        ↓
Actualizar knowledge/data/unit-content.json
        ↓
Validar sintaxis y contenido
        ↓
Copiar a docs/data/unit-content.json
        ↓
Validar la copia
        ↓
Probar la interfaz
        ↓
Registrar el cambio
```

No debe editarse primero la copia ubicada en `docs/data/`.

---

## Principios del esquema

Los datos deben ser:

- comprensibles;
- consistentes;
- predecibles;
- reutilizables;
- libres de información personal;
- apropiados para publicación;
- compatibles con una interfaz estática;
- fáciles de validar;
- coherentes con Markdown.

---

## Restricciones de contenido

El JSON no debe contener:

- nombres de estudiantes;
- correos;
- teléfonos;
- fotografías;
- relatos reales;
- conflictos identificables;
- información familiar;
- diagnósticos;
- calificaciones individuales;
- datos disciplinarios;
- datos emocionales individuales;
- credenciales;
- claves;
- tokens;
- secretos;
- URLs privadas.

---

## Codificación

El archivo debe utilizar:

```text
UTF-8
```

Debe permitir correctamente:

- tildes;
- eñes;
- signos de apertura;
- caracteres en español e inglés;
- símbolos de puntuación.

---

## Convenciones generales

### Nombres de propiedades

Se recomienda utilizar:

```text
camelCase
```

Ejemplos:

```json
{
  "schemaVersion": "1.0.0",
  "durationHours": 32,
  "learningMoments": []
}
```

### Identificadores

Los identificadores deben ser:

- únicos;
- estables;
- breves;
- comprensibles;
- escritos en minúsculas;
- sin espacios;
- separados mediante guiones cuando sea necesario.

Ejemplos:

```text
moment-1
session-01
expression-001
resource-001
```

### Números de sesión

Deben conservar dos dígitos:

```text
01
02
03
...
16
```

Esto facilita el orden alfabético y técnico.

---

## Estructura raíz

La estructura general esperada es:

```json
{
  "metadata": {},
  "project": {},
  "targetPopulation": {},
  "interdisciplinaryAreas": [],
  "learningMoments": [],
  "languageResources": {},
  "assessment": {},
  "privacy": {},
  "accessibility": {},
  "offlineAlternatives": []
}
```

Algunos nombres pueden variar según la versión vigente del archivo.

Cualquier cambio estructural debe:

1. documentarse aquí;
2. registrarse en `DESIGN_DECISIONS.md`;
3. actualizar el código que consume los datos;
4. registrarse en `CHANGELOG.md`.

---

# `metadata`

## Propósito

Contener información técnica sobre el esquema y el archivo.

## Estructura sugerida

```json
{
  "metadata": {
    "schemaVersion": "1.0.0",
    "contentVersion": "0.1.0",
    "language": "es",
    "lastUpdated": "YYYY-MM-DD",
    "sourceOfTruth": "knowledge markdown documentation"
  }
}
```

## Campos

| Campo | Tipo | Obligatorio | Descripción |
|---|---|---:|---|
| `schemaVersion` | string | Sí | Versión de la estructura del JSON |
| `contentVersion` | string | Recomendado | Versión del contenido |
| `language` | string | Sí | Idioma principal |
| `lastUpdated` | string | Recomendado | Fecha de actualización |
| `sourceOfTruth` | string | Sí | Identifica la fuente pedagógica |

---

## `schemaVersion`

Ejemplo:

```json
"schemaVersion": "1.0.0"
```

Debe cambiar cuando se modifica la estructura.

### Cambio mayor

```text
2.0.0
```

Cuando se eliminan o reorganizan campos de manera incompatible.

### Cambio menor

```text
1.1.0
```

Cuando se añaden campos compatibles.

### Corrección

```text
1.0.1
```

Cuando se corrige documentación o validación sin alterar la estructura principal.

---

## `contentVersion`

Representa cambios de contenido sin modificar necesariamente el esquema.

Ejemplo:

```json
"contentVersion": "0.2.0"
```

Puede cambiar cuando:

- se actualiza una sesión;
- se añade una expresión;
- se modifica una descripción;
- se corrige una traducción;
- se agrega un recurso.

---

## `language`

Valor recomendado:

```json
"language": "es"
```

El contenido puede incluir fragmentos en inglés, pero el idioma principal del recurso es español.

---

## `lastUpdated`

Formato recomendado:

```text
YYYY-MM-DD
```

Ejemplo:

```json
"lastUpdated": "2026-07-16"
```

No debe utilizarse una fecha que no corresponda con una actualización real.

---

# `project`

## Propósito

Contener la presentación general del proyecto.

## Estructura sugerida

```json
{
  "project": {
    "id": "voces-que-restauran",
    "title": "Voces que Restauran",
    "subtitle": "Unidad didáctica interdisciplinaria",
    "guidingQuestion": "¿Cómo podemos utilizar nuestras voces, el diálogo, el diseño y la tecnología para construir formas más respetuosas y restaurativas de convivencia escolar?",
    "summary": "Descripción breve del proyecto.",
    "durationWeeks": 8,
    "durationHours": 32,
    "totalSessions": 16,
    "status": "prototype"
  }
}
```

## Campos

| Campo | Tipo | Obligatorio | Descripción |
|---|---|---:|---|
| `id` | string | Sí | Identificador del proyecto |
| `title` | string | Sí | Nombre visible |
| `subtitle` | string | No | Descripción breve |
| `guidingQuestion` | string | Sí | Pregunta orientadora |
| `summary` | string | Sí | Resumen |
| `durationWeeks` | number | Sí | Número de semanas |
| `durationHours` | number | Sí | Horas totales |
| `totalSessions` | number | Sí | Número de sesiones |
| `status` | string | Sí | Estado del producto |

---

## Valores válidos para `status`

Valores sugeridos:

```text
planning
prototype
testing
published
archived
```

En la fase actual:

```json
"status": "prototype"
```

No debe utilizarse:

```text
institutional-application
production-system
case-management
```

porque no corresponden al alcance actual.

---

# `targetPopulation`

## Propósito

Describir la población general sin identificar personas.

## Estructura sugerida

```json
{
  "targetPopulation": {
    "ageRange": {
      "minimum": 11,
      "maximum": 14
    },
    "schoolLevels": [
      "sixth-grade",
      "seventh-grade",
      "eighth-grade"
    ],
    "englishLevel": "A1-A2",
    "institution": "Institución Educativa Liceo Caucasia",
    "location": "Caucasia, Antioquia, Colombia"
  }
}
```

## Reglas

- no incluir grupos específicos con nombres de estudiantes;
- no incluir matrículas;
- no incluir datos individuales;
- no incluir información que permita identificar a un menor.

---

# `interdisciplinaryAreas`

## Propósito

Identificar las áreas que participan en la unidad.

## Estructura sugerida

```json
{
  "interdisciplinaryAreas": [
    {
      "id": "english",
      "name": "Inglés",
      "contributions": [
        "Expresión de emociones y necesidades",
        "Comunicación bilingüe",
        "Presentación de prototipos"
      ]
    },
    {
      "id": "ethics-and-social-sciences",
      "name": "Ética, convivencia y ciencias sociales",
      "contributions": [
        "Cultura de paz",
        "Reconocimiento de perspectivas",
        "Reparación"
      ]
    },
    {
      "id": "technology",
      "name": "Tecnología e informática",
      "contributions": [
        "Ciudadanía digital",
        "Prototipado",
        "Vibe Coding"
      ]
    }
  ]
}
```

## Campos por área

| Campo | Tipo | Obligatorio |
|---|---|---:|
| `id` | string | Sí |
| `name` | string | Sí |
| `contributions` | array de string | Sí |

La lista no debe superar las tres áreas acordadas sin una decisión documentada.

---

# `learningMoments`

## Propósito

Contener la secuencia principal de la unidad.

## Reglas globales

Debe haber exactamente:

```text
4 momentos
```

La suma de sus duraciones debe ser:

```text
32 horas
```

La suma de sus sesiones debe ser:

```text
16 sesiones
```

---

## Estructura sugerida

```json
{
  "learningMoments": [
    {
      "id": "moment-1",
      "number": 1,
      "title": "Inspirar y conectar",
      "durationHours": 4,
      "guidingQuestion": "Pregunta del momento",
      "purpose": "Propósito del momento",
      "sessionIds": [
        "session-01",
        "session-02"
      ],
      "mainProducts": [],
      "evidence": [],
      "offlineAlternative": "Descripción",
      "privacyReminder": "Descripción",
      "sessions": []
    }
  ]
}
```

---

## Campos del momento

| Campo | Tipo | Obligatorio | Descripción |
|---|---|---:|---|
| `id` | string | Sí | Identificador único |
| `number` | number | Sí | Número del momento |
| `title` | string | Sí | Nombre |
| `durationHours` | number | Sí | Duración |
| `guidingQuestion` | string | Recomendado | Pregunta orientadora |
| `purpose` | string | Sí | Propósito |
| `sessionIds` | array | Recomendado | Referencias a sesiones |
| `mainProducts` | array | Sí | Productos |
| `evidence` | array | Recomendado | Evidencias |
| `offlineAlternative` | string u object | Sí | Alternativa |
| `privacyReminder` | string | Sí | Recordatorio |
| `sessions` | array | Sí | Sesiones |

---

## Valores esperados

| Momento | ID | Horas | Sesiones |
|---|---|---:|---:|
| Inspirar y conectar | `moment-1` | 4 | 2 |
| Comprender | `moment-2` | 8 | 4 |
| Aplicar y crear | `moment-3` | 12 | 6 |
| Compartir y transformar | `moment-4` | 8 | 4 |

---

# `sessions`

## Propósito

Contener la planeación estructurada de cada sesión.

## Número esperado

```text
16
```

Cada sesión debe pertenecer a un único momento.

---

## Estructura sugerida

```json
{
  "id": "session-01",
  "number": 1,
  "momentId": "moment-1",
  "title": "Título de la sesión",
  "durationHours": 2,
  "purpose": "Propósito",
  "objectives": [],
  "materials": [],
  "steps": [],
  "languageSupport": [],
  "expectedProduct": {},
  "evidence": [],
  "assessment": [],
  "offlineAlternative": {},
  "privacy": {},
  "accessibility": {},
  "teacherGuidance": {}
}
```

---

## Campos obligatorios de sesión

| Campo | Tipo | Obligatorio |
|---|---|---:|
| `id` | string | Sí |
| `number` | number | Sí |
| `momentId` | string | Sí |
| `title` | string | Sí |
| `durationHours` | number | Sí |
| `purpose` | string | Sí |
| `objectives` | array | Sí |
| `materials` | array | Sí |
| `steps` | array | Sí |
| `expectedProduct` | object o string | Sí |
| `evidence` | array | Sí |
| `offlineAlternative` | object o string | Sí |
| `privacy` | object o string | Sí |

---

## `id`

Formato:

```text
session-01
session-02
...
session-16
```

No debe cambiarse sin actualizar:

- enlaces;
- páginas;
- parámetros;
- referencias;
- inventarios;
- pruebas.

---

## `number`

Debe ser un número entero entre:

```text
1 y 16
```

No debe almacenarse como texto salvo que exista una razón técnica documentada.

---

## `momentId`

Debe coincidir con un momento existente.

Valores válidos:

```text
moment-1
moment-2
moment-3
moment-4
```

---

## `durationHours`

Valor esperado por sesión:

```json
2
```

Si una sesión se divide de otra manera, debe mantenerse la suma total de 32 horas.

---

# `objectives`

## Estructura sencilla

```json
"objectives": [
  "Reconocer diferentes formas de participación.",
  "Utilizar expresiones básicas en inglés."
]
```

Cada objetivo debe:

- comenzar con un verbo;
- ser observable;
- relacionarse con la actividad;
- evitar formulaciones excesivamente abstractas.

---

# `materials`

## Estructura sencilla

```json
"materials": [
  "Tarjetas",
  "Marcadores",
  "Hojas de papel"
]
```

## Estructura ampliada opcional

```json
"materials": [
  {
    "name": "Hojas de papel",
    "type": "print",
    "required": true,
    "alternative": "Cuaderno"
  }
]
```

No deben incluirse marcas comerciales como única opción.

---

# `steps`

## Propósito

Representar la secuencia de una sesión.

## Estructura sugerida

```json
"steps": [
  {
    "id": "session-01-step-01",
    "order": 1,
    "title": "Conectar",
    "durationMinutes": 20,
    "instruction": "Descripción de la actividad.",
    "studentAction": "Acción del estudiante.",
    "teacherAction": "Acción docente.",
    "evidence": "Evidencia esperada."
  }
]
```

## Campos

| Campo | Tipo | Obligatorio |
|---|---|---:|
| `id` | string | Recomendado |
| `order` | number | Sí |
| `title` | string | Sí |
| `durationMinutes` | number | Recomendado |
| `instruction` | string | Sí |
| `studentAction` | string | Recomendado |
| `teacherAction` | string | Recomendado |
| `evidence` | string | Recomendado |

La suma de los minutos debe ser razonable respecto a la duración de la sesión.

---

# `languageSupport`

## Propósito

Relacionar la sesión con expresiones en inglés y español.

## Estructura sugerida

```json
"languageSupport": [
  {
    "id": "expression-001",
    "function": "Expressing an opinion",
    "english": "I think...",
    "spanish": "Yo pienso...",
    "example": "I think this idea is respectful."
  }
]
```

## Reglas

- el inglés debe ser apropiado para A1–A2;
- la traducción debe conservar el sentido;
- no deben almacenarse respuestas de estudiantes;
- las expresiones deben reutilizar identificadores cuando aparezcan en varias páginas.

---

# `expectedProduct`

## Estructura sencilla

```json
"expectedProduct": "Mapa colectivo de voces"
```

## Estructura ampliada recomendada

```json
"expectedProduct": {
  "title": "Mapa colectivo de voces",
  "description": "Representación general de espacios y formas de participación.",
  "formats": [
    "poster",
    "drawing",
    "digital-slide"
  ],
  "privacyReminder": "No incluir nombres ni situaciones reales."
}
```

---

# `evidence`

## Estructura

```json
"evidence": [
  "Participación en el análisis",
  "Producto colectivo",
  "Uso de expresiones clave"
]
```

Las evidencias deben describir aprendizajes observables y no rasgos de personalidad.

---

# `assessment`

## Estructura sugerida

```json
"assessment": [
  {
    "criterion": "Reconoce diferentes perspectivas.",
    "method": "Observación y producto colectivo",
    "instrument": "Lista de cotejo"
  }
]
```

No debe utilizarse para:

- calcular puntuaciones de conducta;
- clasificar emociones;
- construir perfiles;
- generar rankings.

---

# `offlineAlternative`

## Estructura recomendada

```json
"offlineAlternative": {
  "title": "Versión en papel",
  "description": "Realizar la actividad mediante tarjetas impresas.",
  "materials": [
    "Tarjetas",
    "Hojas"
  ],
  "evidence": "Producto físico equivalente"
}
```

Toda sesión debe incluir una alternativa.

---

# `privacy`

## Estructura sugerida

```json
"privacy": {
  "usesFictionalCases": true,
  "collectsPersonalData": false,
  "storesResponses": false,
  "reminder": "No utilices nombres ni relatos reales.",
  "teacherAlert": "Detén la actividad pública si surge una situación real de riesgo."
}
```

## Valores obligatorios

```json
"collectsPersonalData": false
```

```json
"storesResponses": false
```

Si cualquiera de estos valores cambia, el cambio no debe implementarse mediante una simple edición del JSON. Requeriría una nueva fase formal.

---

# `accessibility`

## Estructura sugerida

```json
"accessibility": {
  "responseOptions": [
    "oral",
    "written",
    "drawing",
    "collaborative"
  ],
  "supportsPrint": true,
  "requiresColor": false,
  "keyboardRelevant": false,
  "notes": "Ofrecer ejemplos y mayor tiempo cuando sea necesario."
}
```

## Reglas

- no depender únicamente del color;
- permitir diferentes formas de respuesta;
- incluir versión imprimible cuando corresponda;
- evitar instrucciones exclusivamente visuales.

---

# `teacherGuidance`

## Estructura sugerida

```json
"teacherGuidance": {
  "preparation": [],
  "mediation": [],
  "questions": [],
  "alerts": [],
  "assessmentNotes": []
}
```

Este contenido debe diferenciarse claramente del contenido dirigido al estudiante.

---

# `languageResources`

## Propósito

Centralizar contenido bilingüe reutilizable.

## Estructura general sugerida

```json
{
  "languageResources": {
    "glossary": [],
    "keyExpressions": [],
    "restorativeQuestions": [],
    "peaceMessages": []
  }
}
```

---

# `glossary`

## Estructura sugerida

```json
{
  "id": "glossary-001",
  "english": "voice",
  "spanish": "voz",
  "category": "participation",
  "definition": "Capacidad de expresar ideas y ser escuchado.",
  "example": "My voice matters."
}
```

## Campos

| Campo | Tipo | Obligatorio |
|---|---|---:|
| `id` | string | Sí |
| `english` | string | Sí |
| `spanish` | string | Sí |
| `category` | string | Sí |
| `definition` | string | Recomendado |
| `example` | string | Recomendado |

---

# `keyExpressions`

## Estructura sugerida

```json
{
  "id": "expression-001",
  "function": "express-opinion",
  "functionLabel": "Expresar una opinión",
  "english": "I think...",
  "spanish": "Yo pienso...",
  "example": "I think this solution can help."
}
```

## Categorías sugeridas

```text
express-emotion
express-need
ask-for-clarification
listen
agree
disagree-respectfully
give-feedback
present
reflect
```

---

# `restorativeQuestions`

## Estructura sugerida

```json
{
  "id": "question-001",
  "category": "facts",
  "question": "¿Qué ocurrió?",
  "english": "What happened?",
  "purpose": "Comprender hechos sin atribuir culpa automáticamente.",
  "warning": "No utilizar como interrogatorio."
}
```

## Categorías

```text
facts
perspectives
emotions
needs
effects
responsibility
repair
prevention
```

---

# `peaceMessages`

## Estructura sugerida

```json
{
  "id": "message-001",
  "category": "respect",
  "english": "Every voice deserves respect.",
  "spanish": "Toda voz merece respeto.",
  "publicationReminder": "Revisar antes de publicar."
}
```

---

# `assessment`

## Propósito

Contener información general de evaluación.

## Estructura sugerida

```json
{
  "assessment": {
    "approach": [
      "diagnostic",
      "formative",
      "continuous",
      "interdisciplinary"
    ],
    "dimensions": [],
    "evidenceTypes": [],
    "rubrics": []
  }
}
```

## Restricciones

No debe incluir:

- calificaciones reales;
- nombres;
- datos de desempeño individual;
- rankings;
- perfiles.

---

# `privacy`

## Propósito

Contener reglas globales que pueden mostrarse en la interfaz.

## Estructura sugerida

```json
{
  "privacy": {
    "collectsPersonalData": false,
    "usesAnalytics": false,
    "usesCookies": false,
    "storesResponses": false,
    "allowsFileUploads": false,
    "allowsCaseReports": false,
    "studentReminder": "Utiliza casos ficticios.",
    "teacherReminder": "Utiliza rutas institucionales ante situaciones reales."
  }
}
```

Todos los campos booleanos anteriores deben permanecer en `false` durante la fase actual.

---

# `accessibility`

## Propósito

Contener criterios globales de accesibilidad.

## Estructura sugerida

```json
{
  "accessibility": {
    "keyboardNavigation": true,
    "visibleFocus": true,
    "responsive": true,
    "printableAlternatives": true,
    "offlineAlternatives": true,
    "usesColorAsOnlyIndicator": false,
    "supportsReducedMotion": true
  }
}
```

---

# `offlineAlternatives`

## Propósito

Permitir una consulta global de alternativas desconectadas.

## Estructura sugerida

```json
{
  "offlineAlternatives": [
    {
      "id": "offline-001",
      "relatedSessionId": "session-01",
      "digitalActivity": "Mapa digital",
      "alternative": "Mapa colectivo en papel",
      "materials": [
        "Papel",
        "Marcadores"
      ],
      "evidence": "Producto colectivo"
    }
  ]
}
```

---

# Relaciones entre objetos

## Momento y sesiones

```text
learningMoment.id
        ↓
session.momentId
```

Cada `momentId` debe existir.

---

## Sesión y recursos lingüísticos

```text
session.languageSupport[].id
        ↓
languageResources.keyExpressions[].id
```

Puede utilizarse una referencia o una copia parcial.

Se recomienda evitar duplicación innecesaria.

---

## Sesión y alternativa

```text
session.id
        ↓
offlineAlternatives[].relatedSessionId
```

---

## Sesión y recurso

Si se añade una colección de recursos:

```text
session.resourceIds[]
        ↓
resources[].id
```

---

# Campos futuros

Pueden considerarse en versiones posteriores:

```text
resources
printables
templates
promptLibrary
navigation
pageMetadata
relatedContent
```

No deben añadirse sin:

- necesidad comprobada;
- actualización del esquema;
- revisión del código;
- documentación;
- registro de decisión.

---

# Campos prohibidos en la fase actual

No deben añadirse campos como:

```text
studentName
studentId
email
phone
course
password
login
profile
behaviorScore
emotionScore
caseReport
disciplinaryRecommendation
location
deviceId
analyticsId
sessionHistory
savedProgress
```

---

# Validación de sintaxis

Ejecutar:

```bash
python -m json.tool knowledge/data/unit-content.json
```

Y para la copia:

```bash
python -m json.tool docs/data/unit-content.json
```

La ausencia de errores confirma únicamente que la sintaxis JSON es válida.

---

# Validación de contenido

## Comprobar momentos

Ejemplo en Python:

```python
import json
from pathlib import Path

path = Path("knowledge/data/unit-content.json")

with path.open(encoding="utf-8") as file:
    data = json.load(file)

moments = data.get("learningMoments", [])

assert len(moments) == 4, "Deben existir 4 momentos."

print("Momentos:", len(moments))
```

---

## Comprobar horas

```python
total_hours = sum(
    moment.get("durationHours", 0)
    for moment in data.get("learningMoments", [])
)

assert total_hours == 32, "La duración total debe ser de 32 horas."

print("Horas:", total_hours)
```

---

## Comprobar sesiones

El código depende de si las sesiones están anidadas dentro de cada momento.

```python
sessions = [
    session
    for moment in data.get("learningMoments", [])
    for session in moment.get("sessions", [])
]

assert len(sessions) == 16, "Deben existir 16 sesiones."

print("Sesiones:", len(sessions))
```

---

## Comprobar identificadores únicos

```python
session_ids = [session.get("id") for session in sessions]

assert None not in session_ids, "Todas las sesiones deben tener ID."
assert len(session_ids) == len(set(session_ids)), (
    "Los identificadores de sesión deben ser únicos."
)

print("Los identificadores son únicos.")
```

---

## Comprobar relaciones

```python
moment_ids = {
    moment.get("id")
    for moment in data.get("learningMoments", [])
}

for session in sessions:
    assert session.get("momentId") in moment_ids, (
        f"Momento inexistente en {session.get('id')}."
    )

print("Las relaciones entre sesiones y momentos son válidas.")
```

---

# Validación de privacidad

Ejemplo básico para detectar nombres de campos prohibidos:

```python
import json

PROHIBITED_KEYS = {
    "studentName",
    "studentId",
    "email",
    "phone",
    "password",
    "behaviorScore",
    "emotionScore",
    "caseReport",
    "deviceId",
    "analyticsId",
}

def find_prohibited_keys(value, path="root"):
    findings = []

    if isinstance(value, dict):
        for key, child in value.items():
            current_path = f"{path}.{key}"

            if key in PROHIBITED_KEYS:
                findings.append(current_path)

            findings.extend(find_prohibited_keys(child, current_path))

    elif isinstance(value, list):
        for index, child in enumerate(value):
            findings.extend(
                find_prohibited_keys(child, f"{path}[{index}]")
            )

    return findings

with open(
    "knowledge/data/unit-content.json",
    encoding="utf-8"
) as file:
    data = json.load(file)

findings = find_prohibited_keys(data)

assert not findings, (
    "Se encontraron campos prohibidos: " + ", ".join(findings)
)

print("No se encontraron campos prohibidos.")
```

Esta validación no sustituye una revisión humana del contenido.

---

# Reglas de compatibilidad

## Cambios compatibles

Generalmente son compatibles:

- añadir un campo opcional;
- añadir un elemento a una lista;
- corregir texto;
- añadir una traducción;
- incluir metadatos adicionales.

## Cambios incompatibles

Pueden romper la interfaz:

- renombrar propiedades;
- cambiar un array por un object;
- eliminar campos obligatorios;
- cambiar identificadores;
- mover sesiones;
- cambiar tipos;
- alterar rutas.

Los cambios incompatibles requieren una nueva versión mayor del esquema.

---

# Manejo de campos ausentes

El código no debe asumir que todo campo opcional existe.

Ejemplo:

```javascript
const description =
  session.description ?? "Descripción no disponible.";
```

Para arrays:

```javascript
const materials = Array.isArray(session.materials)
  ? session.materials
  : [];
```

---

# Manejo de contenido vacío

No deben mostrarse:

- títulos sin contenido;
- secciones vacías;
- listas vacías sin explicación;
- botones que no funcionan.

Ejemplo:

```javascript
if (materials.length === 0) {
  materialsSection.hidden = true;
}
```

O mostrar:

```text
No se han definido materiales adicionales para esta sesión.
```

---

# Inserción segura en la interfaz

Utilizar:

```javascript
element.textContent = value;
```

Evitar:

```javascript
element.innerHTML = value;
```

cuando el valor proviene del JSON.

Para crear estructura:

```javascript
const item = document.createElement("li");
item.textContent = material;
list.append(item);
```

---

# Validación manual

Antes de publicar, revisar:

## Metadatos

- versión;
- fecha;
- idioma;
- fuente de verdad.

## Proyecto

- duración;
- sesiones;
- pregunta;
- estado.

## Momentos

- orden;
- horas;
- títulos;
- sesiones;
- productos.

## Sesiones

- identificadores;
- duración;
- materiales;
- pasos;
- privacidad;
- alternativa.

## Lenguaje

- traducciones;
- categorías;
- nivel;
- ejemplos.

## Protección

- casos ficticios;
- ausencia de nombres;
- ausencia de relatos;
- ausencia de campos sensibles.

## Accesibilidad

- alternativas;
- formatos;
- instrucciones comprensibles;
- contenido que no dependa del color.

---

# Flujo de actualización

## Cambio pedagógico

Ejemplo: se modifica una actividad.

Actualizar:

```text
knowledge/moments/
knowledge/data/unit-content.json
docs/data/unit-content.json
docs/CONTENT_MAPPING.md
CHANGELOG.md
```

## Cambio de lenguaje

Actualizar:

```text
knowledge/language/
knowledge/data/unit-content.json
docs/data/unit-content.json
```

## Cambio de evaluación

Actualizar:

```text
knowledge/pedagogy/
knowledge/data/unit-content.json
docs/data/unit-content.json
```

## Cambio estructural

Actualizar:

```text
docs/DATA_SCHEMA.md
docs/TECHNICAL_ARCHITECTURE.md
DESIGN_DECISIONS.md
CHANGELOG.md
código JavaScript relacionado
```

---

# Lista de verificación antes de copiar a `docs/data/`

- [ ] El Markdown fue actualizado primero.
- [ ] El JSON tiene sintaxis válida.
- [ ] Existen cuatro momentos.
- [ ] Existen dieciséis sesiones.
- [ ] La duración total es de treinta y dos horas.
- [ ] Los identificadores son únicos.
- [ ] Las relaciones son válidas.
- [ ] No existen datos personales.
- [ ] No existen campos prohibidos.
- [ ] El contenido fue revisado.
- [ ] Se actualizó la versión cuando correspondía.

---

# Lista de verificación después de copiar

- [ ] Ambos archivos son idénticos.
- [ ] La copia tiene sintaxis válida.
- [ ] La interfaz carga los datos.
- [ ] Las páginas muestran el contenido correcto.
- [ ] Los errores se manejan.
- [ ] No existen errores críticos en consola.
- [ ] Las rutas funcionan en GitHub Pages.

---

# Comparación de archivos

En Linux o GitHub Codespaces:

```bash
diff knowledge/data/unit-content.json docs/data/unit-content.json
```

Si no aparece salida, los archivos son iguales.

También puede utilizarse:

```bash
cmp --silent \
  knowledge/data/unit-content.json \
  docs/data/unit-content.json \
  && echo "Los archivos son iguales." \
  || echo "Los archivos son diferentes."
```

---

# Copia mediante Python

Ejemplo multiplataforma:

```python
from pathlib import Path
import shutil

source = Path("knowledge/data/unit-content.json")
destination = Path("docs/data/unit-content.json")

destination.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(source, destination)

print(f"Archivo copiado a: {destination}")
```

---

# Decisiones pendientes

Antes de considerar definitivo el esquema debe confirmarse:

- estructura exacta del JSON vigente;
- si las sesiones permanecen anidadas;
- si los recursos lingüísticos estarán dentro del mismo archivo;
- si los imprimibles tendrán una colección propia;
- si se necesitan metadatos por página;
- si se utilizará validación mediante JSON Schema formal;
- si se creará un script automático de sincronización.

---

# Posible JSON Schema formal

En una fase posterior puede crearse:

```text
docs/data/unit-content.schema.json
```

Ese archivo permitiría validar:

- tipos;
- campos obligatorios;
- valores permitidos;
- patrones de identificadores;
- cantidades mínimas;
- relaciones básicas.

No debe crearse hasta confirmar la estructura real del archivo `unit-content.json`.

---

## Criterio de finalización

La documentación del esquema se considera lista cuando:

- la estructura real está descrita;
- los campos obligatorios están definidos;
- las relaciones están explicadas;
- las validaciones funcionan;
- las restricciones de privacidad son claras;
- el flujo de sincronización está documentado;
- el código puede consumir los datos sin ambigüedad.

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- cambia un nombre de propiedad;
- cambia un tipo;
- se agrega una colección;
- se elimina un campo;
- cambia una relación;
- se incorpora una validación;
- cambia la ubicación de datos;
- se automatiza la sincronización;
- se crea un JSON Schema formal.

# Datos estructurados de la unidad

## Propósito de la carpeta

Esta carpeta contiene representaciones estructuradas de algunos contenidos de la unidad didáctica **Voces que Restauran**.

Su propósito es facilitar:

- la construcción del recurso web;
- la separación entre contenido e interfaz;
- la reutilización de información;
- la generación de menús y tarjetas;
- la organización de momentos y sesiones;
- la presentación de vocabulario y expresiones;
- la actualización futura del sitio;
- la validación de coherencia entre documentos y software.

---

## Archivos de la carpeta

### `unit-content.json`

Contiene una versión estructurada de:

- información general;
- población;
- duración;
- principios pedagógicos;
- áreas articuladas;
- cuatro momentos;
- dieciséis sesiones;
- recursos lingüísticos básicos;
- criterios de privacidad;
- restricciones tecnológicas;
- productos;
- evidencias;
- mensajes de convivencia;
- rutas hacia documentos relacionados.

---

## Relación con los documentos Markdown

Los archivos Markdown de `knowledge/` son la documentación pedagógica principal.

El archivo JSON funciona como una capa de datos para el desarrollo tecnológico.

La relación debe entenderse así:

```text
Documentación pedagógica en Markdown
                 ↓
      Selección y estructuración
                 ↓
       unit-content.json
                 ↓
         Componentes del sitio
```

El JSON no debe contener explicaciones más amplias que contradigan o sustituyan documentos como:

```text
knowledge/unit/
knowledge/moments/
knowledge/pedagogy/
knowledge/language/
knowledge/prompts/
```

---

## Fuente de verdad

Para decisiones pedagógicas, éticas y metodológicas, la fuente principal son los documentos Markdown.

Para la representación de contenido dentro de la interfaz web, `unit-content.json` puede funcionar como fuente estructurada, siempre que permanezca sincronizado con los documentos.

Cuando exista una contradicción:

1. revisar el documento Markdown correspondiente;
2. confirmar la decisión pedagógica;
3. actualizar el JSON;
4. revisar la interfaz;
5. registrar el cambio.

---

## Qué puede almacenarse

El archivo puede contener:

- títulos;
- descripciones;
- propósitos;
- preguntas orientadoras;
- instrucciones generales;
- tiempos;
- categorías;
- expresiones bilingües;
- casos ficticios;
- nombres de productos;
- criterios de evaluación;
- restricciones de seguridad;
- referencias a archivos.

---

## Qué no debe almacenarse

No debe contener:

- nombres de estudiantes;
- correos;
- teléfonos;
- fotografías;
- respuestas estudiantiles;
- relatos personales;
- conflictos reales;
- información disciplinaria;
- diagnósticos;
- datos familiares;
- calificaciones;
- identificadores;
- credenciales;
- claves de API;
- tokens;
- secretos del repositorio;
- registros de navegación;
- resultados individuales.

---

## Características del archivo JSON

El archivo debe ser:

- JSON válido;
- legible;
- consistente;
- independiente de datos personales;
- organizado mediante claves descriptivas;
- compatible con JavaScript;
- fácil de validar;
- reutilizable;
- versionado en Git.

No deben incluirse comentarios dentro del JSON, porque el formato JSON estándar no los admite.

Las explicaciones deben mantenerse en este archivo `README.md` o en los documentos pedagógicos correspondientes.

---

## Convenciones de nombres

Las claves deben utilizar:

- inglés;
- minúsculas;
- formato `camelCase`;
- nombres descriptivos;
- consistencia semántica.

Ejemplos:

```json
{
  "projectTitle": "Voces que Restauran",
  "targetPopulation": {},
  "learningMoments": []
}
```

El contenido pedagógico puede permanecer en español o ser bilingüe.

---

## Identificadores

Los momentos, sesiones, productos y recursos pueden usar identificadores estables.

Ejemplos:

```text
moment-1
moment-2
session-01
session-02
product-context-map
resource-restorative-questions
```

Los identificadores:

- no deben contener nombres personales;
- no deben depender del título completo;
- deben mantenerse cuando cambie ligeramente un texto;
- pueden utilizarse para navegación, filtros y relaciones.

---

## Estructura general

La estructura inicial de `unit-content.json` incluye:

```text
metadata
project
targetPopulation
pedagogicalPrinciples
interdisciplinaryAreas
learningMoments
languageResources
assessment
privacy
technology
learningProducts
peaceMessages
relatedDocuments
```

Esta estructura puede ampliarse cuando el desarrollo del recurso web lo requiera.

---

## Contenido bilingüe

Cuando un elemento tenga versiones en dos idiomas se recomienda utilizar:

```json
{
  "es": "Mi voz importa.",
  "en": "My voice matters."
}
```

Cuando el contenido exista únicamente en español puede utilizarse una cadena simple:

```json
{
  "description": "Descripción del contenido."
}
```

No es obligatorio duplicar en inglés toda la documentación pedagógica.

---

## Recursos descargables

El JSON puede incluir en el futuro referencias relativas a recursos descargables.

Ejemplo:

```json
{
  "downloadableResources": [
    {
      "id": "context-map-template",
      "title": "Plantilla del mapa de convivencia",
      "path": "assets/downloads/context-map.pdf",
      "format": "pdf"
    }
  ]
}
```

Las rutas no deben añadirse hasta que el archivo correspondiente exista.

No deben inventarse archivos ni enlaces.

---

## Consumo desde JavaScript

Ejemplo básico:

```javascript
async function loadUnitContent() {
  const response = await fetch("./knowledge/data/unit-content.json");

  if (!response.ok) {
    throw new Error(`Unable to load unit content: ${response.status}`);
  }

  return response.json();
}
```

Cuando el sitio se publique en GitHub Pages, la ruta deberá comprobarse según la ubicación real del archivo HTML.

---

## Manejo de errores

La interfaz debe contemplar:

- archivo no encontrado;
- JSON inválido;
- propiedades ausentes;
- arrays vacíos;
- contenido incompleto;
- rutas incorrectas.

Ejemplo:

```javascript
async function initializeContent() {
  try {
    const unit = await loadUnitContent();
    renderUnit(unit);
  } catch (error) {
    console.error(error);

    const status = document.querySelector("[data-content-status]");

    if (status) {
      status.textContent =
        "No fue posible cargar el contenido. Utiliza la guía impresa o informa al docente.";
    }
  }
}
```

El error no debe producir una pantalla completamente vacía.

---

## Validación manual

Antes de hacer commit, revisar:

- comillas dobles;
- comas;
- llaves;
- corchetes;
- caracteres especiales;
- identificadores duplicados;
- rutas;
- duración total;
- número de momentos;
- número de sesiones;
- ausencia de información personal.

---

## Validación con herramientas

Puede validarse mediante:

```bash
python -m json.tool knowledge/data/unit-content.json
```

También puede utilizarse:

```bash
jq empty knowledge/data/unit-content.json
```

Si el comando termina sin mostrar errores, la sintaxis básica es válida.

---

## Sincronización requerida

Cuando cambie un momento o una sesión, revisar:

```text
knowledge/moments/
knowledge/unit/10_TIMELINE.md
knowledge/data/unit-content.json
```

Cuando cambie una expresión, revisar:

```text
knowledge/language/
knowledge/data/unit-content.json
```

Cuando cambie un producto o evidencia, revisar:

```text
knowledge/pedagogy/
knowledge/data/unit-content.json
```

Cuando cambien las restricciones tecnológicas, revisar:

```text
knowledge/prompts/VIBE_CODING.md
DESIGN_DECISIONS.md
knowledge/data/unit-content.json
```

---

## Control de versiones

Los cambios significativos en la estructura del JSON deben:

1. documentarse;
2. conservar compatibilidad cuando sea razonable;
3. actualizar los componentes que consumen los datos;
4. probarse localmente;
5. registrarse mediante un commit descriptivo.

Ejemplos:

```text
Add structured learning moment content
```

```text
Update session data and privacy constraints
```

```text
Refactor unit content schema
```

---

## Versionado del esquema

La propiedad:

```json
{
  "schemaVersion": "1.0.0"
}
```

permite identificar cambios en la estructura.

Orientación:

- cambio de parche: correcciones de textos o datos;
- cambio menor: nuevas propiedades compatibles;
- cambio mayor: reorganización que requiere modificar el código consumidor.

---

## JSON y privacidad

Aunque el archivo sea estático, debe aplicarse el principio de minimización de datos.

La pregunta no debe ser únicamente:

> ¿Podemos almacenar esta información?

También debe preguntarse:

> ¿Es realmente necesario incluirla?

En esta fase, la respuesta para cualquier dato estudiantil debe ser negativa.

---

## JSON y accesibilidad

El contenido estructurado puede apoyar la accesibilidad mediante:

- títulos claros;
- instrucciones breves;
- textos alternativos;
- etiquetas;
- orden lógico;
- versiones bilingües;
- recursos imprimibles;
- categorías comprensibles.

La accesibilidad no depende únicamente del JSON. También debe implementarse correctamente en HTML, CSS y JavaScript.

---

## Desarrollo futuro

La estructura puede ampliarse para incluir:

- recursos descargables;
- casos ficticios;
- preguntas restaurativas;
- glosario completo;
- filtros;
- rutas de navegación;
- guías diferenciadas;
- metadatos de accesibilidad;
- versiones imprimibles.

No debe ampliarse para incluir:

- usuarios;
- perfiles;
- respuestas;
- seguimiento;
- analítica;
- datos de convivencia;
- información emocional individual.

---

## Criterio de actualización

Esta carpeta debe actualizarse cuando:

- cambie el contenido de la unidad;
- se modifique la estructura del recurso web;
- se incorporen nuevas secciones;
- cambien los productos;
- se creen recursos descargables;
- se modifiquen restricciones de privacidad;
- se actualice el esquema de datos.

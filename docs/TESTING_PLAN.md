# Plan de pruebas

## Propósito

Este documento define la estrategia de pruebas del recurso web de **Voces que Restauran**.

Las pruebas buscan comprobar que el recurso sea:

- funcional;
- accesible;
- responsive;
- comprensible;
- coherente con la documentación pedagógica;
- respetuoso de la privacidad;
- seguro para estudiantes menores de edad;
- compatible con GitHub Pages;
- mantenible.

Este plan debe utilizarse junto con:

```text
USER_STORIES.md
PRIVACY.md
ACCESSIBILITY.md
CONTENT_GUIDELINES.md
DESIGN_SYSTEM.md
DESIGN_DECISIONS.md
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
docs/TECHNICAL_ARCHITECTURE.md
docs/IMPLEMENTATION_PLAN.md
docs/DATA_SCHEMA.md
docs/CONTENT_MAPPING.md
```

---

## Alcance de las pruebas

El plan cubre:

- documentación;
- contenido;
- estructura HTML;
- estilos;
- componentes;
- navegación;
- carga de datos;
- JavaScript;
- privacidad;
- accesibilidad;
- funcionamiento responsive;
- impresión;
- ejecución local;
- despliegue en GitHub Pages.

No cubre:

- autenticación;
- bases de datos;
- cuentas;
- almacenamiento de usuarios;
- gestión de casos;
- servicios externos de IA;
- sistemas administrativos;

porque esas funciones no pertenecen al alcance actual.

---

## Principios

### Probar desde el inicio

Las pruebas no deben realizarse únicamente al terminar el sitio.

Cada entrega debe incluir:

- revisión;
- ejecución;
- corrección;
- documentación.

### Probar necesidades, no solo código

Una función puede ejecutarse sin errores técnicos y aun así no responder a una necesidad pedagógica.

Las pruebas deben verificar:

- utilidad;
- claridad;
- coherencia;
- protección;
- accesibilidad.

### Priorizar pruebas humanas

Las herramientas automáticas ayudan a encontrar problemas, pero no sustituyen:

- navegación manual;
- lectura crítica;
- pruebas con teclado;
- revisión docente;
- pruebas en dispositivos reales.

### No utilizar datos reales

Todas las pruebas deben emplear:

- contenido ficticio;
- identificadores técnicos;
- ejemplos generales;
- datos simulados.

No deben utilizarse nombres ni experiencias de estudiantes.

---

## Niveles de prueba

La estrategia se organiza en cinco niveles:

```text
Validación documental
        ↓
Validación de datos
        ↓
Pruebas de componentes
        ↓
Pruebas de páginas y recorridos
        ↓
Pruebas del sitio publicado
```

---

# Validación documental

## Objetivo

Comprobar que la implementación corresponda con las decisiones y fuentes vigentes.

## Documentos principales

```text
PROJECT_BRIEF.md
ROADMAP.md
USER_STORIES.md
PEDAGOGICAL_FRAMEWORK.md
DESIGN_SYSTEM.md
DESIGN_DECISIONS.md
CONTENT_GUIDELINES.md
PRIVACY.md
ACCESSIBILITY.md
```

## Comprobaciones

- el producto se presenta como recurso educativo;
- la aplicación futura no se presenta como aprobada;
- no se prometen funciones de almacenamiento;
- no se presenta el recurso como canal de denuncias;
- la población y duración son consistentes;
- se mantienen cuatro momentos;
- se mantienen dieciséis sesiones;
- se mantienen treinta y dos horas;
- la terminología es consistente;
- las historias de usuario coinciden con el alcance.

## Resultado esperado

No existen contradicciones importantes entre:

```text
documentación
datos
interfaz
```

---

# Validación del JSON

## Archivos

```text
knowledge/data/unit-content.json
docs/data/unit-content.json
```

## Sintaxis

Ejecutar desde la raíz:

```bash
python -m json.tool knowledge/data/unit-content.json
```

Después:

```bash
python -m json.tool docs/data/unit-content.json
```

## Comparación

En GitHub Codespaces o Linux:

```bash
diff knowledge/data/unit-content.json docs/data/unit-content.json
```

Si no aparece salida, los archivos son iguales.

## Validaciones semánticas

Comprobar:

- cuatro momentos;
- dieciséis sesiones;
- treinta y dos horas;
- identificadores únicos;
- relaciones válidas;
- campos obligatorios;
- ausencia de datos personales;
- valores booleanos de privacidad.

## Script básico sugerido

```python
import json
from pathlib import Path

DATA_PATH = Path("knowledge/data/unit-content.json")

with DATA_PATH.open(encoding="utf-8") as file:
    data = json.load(file)

moments = data.get("learningMoments", [])

sessions = [
    session
    for moment in moments
    for session in moment.get("sessions", [])
]

total_hours = sum(
    moment.get("durationHours", 0)
    for moment in moments
)

assert len(moments) == 4, "Deben existir 4 momentos."
assert len(sessions) == 16, "Deben existir 16 sesiones."
assert total_hours == 32, "La duración debe ser de 32 horas."

moment_ids = {
    moment.get("id")
    for moment in moments
}

session_ids = [
    session.get("id")
    for session in sessions
]

assert None not in session_ids, "Cada sesión debe tener ID."
assert len(session_ids) == len(set(session_ids)), (
    "Los identificadores deben ser únicos."
)

for session in sessions:
    assert session.get("momentId") in moment_ids, (
        f"Momento inválido en {session.get('id')}."
    )

print("Validación básica completada.")
```

---

# Pruebas funcionales

## Objetivo

Comprobar que las páginas, controles y recorridos funcionen como se espera.

## Elementos que deben probarse

- enlaces;
- navegación principal;
- menú móvil;
- migas de navegación;
- navegación anterior y siguiente;
- tarjetas;
- filtros;
- búsqueda local;
- botón para limpiar;
- copia al portapapeles;
- acordeones;
- carga del JSON;
- parámetros de sesión;
- estados vacíos;
- estados de error;
- descargas;
- impresión;
- página 404.

---

## Navegación principal

### Prueba

1. abrir la página;
2. recorrer todos los enlaces;
3. abrir cada sección;
4. volver al inicio;
5. comprobar la página actual.

### Resultado esperado

- todos los enlaces son válidos;
- la navegación mantiene el mismo orden;
- la página actual se identifica;
- no existen enlaces ambiguos;
- no se abren ventanas inesperadas.

---

## Menú móvil

### Prueba

1. reducir el ancho de pantalla;
2. abrir el menú;
3. recorrer enlaces;
4. cerrar mediante el botón;
5. abrir nuevamente;
6. cerrar con `Escape`.

### Resultado esperado

- `aria-expanded` refleja el estado;
- el botón tiene nombre comprensible;
- no se pierde el foco;
- el menú no bloquea el contenido;
- puede utilizarse sin mouse.

---

## Carga de datos

### Casos

- JSON disponible;
- JSON inexistente;
- JSON inválido;
- colección vacía;
- campo opcional ausente;
- identificador no encontrado.

### Resultado esperado

Cuando la carga funciona:

- el contenido se presenta correctamente;
- no aparecen errores en consola;
- el orden es correcto.

Cuando la carga falla:

- aparece un mensaje comprensible;
- existe una ruta para regresar;
- se ofrece alternativa cuando corresponde;
- no se muestran detalles técnicos al usuario.

---

## Página de sesión

### Casos

```text
session.html?id=01
session.html?id=16
session.html?id=99
session.html
session.html?id=
```

### Resultado esperado

Para una sesión válida:

- se muestra la sesión correcta;
- el título coincide;
- la duración coincide;
- el momento coincide;
- los materiales aparecen;
- la alternativa desconectada aparece;
- se muestran advertencias necesarias.

Para una sesión inválida:

- no se genera una página vacía;
- aparece un error comprensible;
- existe un enlace al listado de momentos.

---

## Filtros

### Prueba

- seleccionar una categoría;
- combinar filtros cuando corresponda;
- cambiar de categoría;
- limpiar;
- utilizar teclado;
- buscar una categoría sin resultados.

### Resultado esperado

- se muestran únicamente elementos relacionados;
- se comunica la cantidad;
- existe estado vacío;
- limpiar restablece todo;
- no se recarga la página;
- no se guarda la selección.

---

## Búsqueda local

### Prueba

Buscar:

- palabra completa;
- palabra parcial;
- término con mayúscula;
- término con minúscula;
- término con tilde;
- texto inexistente;
- campo vacío.

### Resultado esperado

- el resultado es predecible;
- las búsquedas no se transmiten;
- existe etiqueta visible;
- el texto de marcador no sustituye la etiqueta;
- el estado vacío ofrece una acción.

---

## Copiar contenido

### Prueba

- copiar una expresión;
- copiar un mensaje;
- copiar un prompt;
- simular fallo del portapapeles.

### Resultado esperado

- se copia solamente el texto previsto;
- aparece confirmación;
- la confirmación se anuncia;
- no se registra la acción;
- ante error se ofrece selección manual.

---

## Descargas

### Prueba

- abrir cada recurso;
- comprobar formato;
- comprobar nombre;
- comprobar ruta;
- comprobar archivo inexistente.

### Resultado esperado

- el enlace describe el archivo;
- el recurso correcto se abre o descarga;
- no existen archivos rotos;
- no se inicia una descarga inesperada.

---

# Pruebas de historias de usuario

Cada historia prioritaria debe convertirse en uno o varios casos de prueba.

## Plantilla

```text
ID de prueba:

Historia:

Condición inicial:

Pasos:

Resultado esperado:

Resultado obtenido:

Estado:
Aprobada | Fallida | Bloqueada

Evidencia:

Observaciones:
```

---

## Ejemplo

```text
ID de prueba: US001-T01

Historia: US-001

Condición inicial:
El usuario abre la página de inicio.

Pasos:
1. Leer el encabezado.
2. Identificar la descripción.
3. Localizar la pregunta orientadora.
4. Localizar el aviso de prototipo.

Resultado esperado:
El usuario puede comprender qué es el proyecto y reconocer que no es un canal de denuncias.

Estado:
Pendiente
```

---

# Pruebas de accesibilidad

## Objetivo

Comprobar que el contenido sea perceptible, operable, comprensible y robusto.

## Referencia

```text
ACCESSIBILITY.md
```

---

## Navegación con teclado

### Prueba

Utilizar únicamente:

```text
Tab
Shift + Tab
Enter
Barra espaciadora
Escape
Teclas de dirección cuando correspondan
```

### Comprobar

- enlace para saltar;
- navegación;
- menú móvil;
- botones;
- filtros;
- búsqueda;
- acordeones;
- enlaces;
- acciones de copia;
- navegación anterior y siguiente.

### Resultado esperado

- todo es operable;
- el foco siempre es visible;
- el orden es lógico;
- no existen trampas;
- ningún contenido depende solo del mouse.

---

## Foco

Comprobar:

- contraste;
- grosor;
- distancia;
- visibilidad sobre diferentes fondos;
- permanencia;
- ausencia de ocultamiento.

No debe utilizarse:

```css
outline: none;
```

sin reemplazo visible.

---

## Encabezados

Comprobar:

- un único `h1`;
- niveles ordenados;
- títulos descriptivos;
- ausencia de saltos por motivos visuales;
- correspondencia con la estructura.

---

## Regiones semánticas

Comprobar presencia y uso adecuado de:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

No se deben añadir regiones sin necesidad.

---

## Idiomas

Comprobar:

```html
<html lang="es">
```

Para fragmentos en inglés:

```html
<span lang="en">My voice matters.</span>
```

---

## Imágenes

Comprobar:

- texto alternativo en imágenes informativas;
- `alt=""` en imágenes decorativas;
- ausencia de texto esencial dentro de imágenes;
- descripción adecuada;
- no redundancia.

---

## Controles

Comprobar:

- nombre accesible;
- función;
- estado;
- instrucciones;
- tamaño táctil;
- foco;
- ausencia de controles exclusivamente icónicos sin etiqueta.

---

## Contenido dinámico

Comprobar:

- mensajes de copia;
- cantidad de resultados;
- errores;
- estados vacíos;
- carga;
- cambios de acordeones.

Los mensajes deben anunciarse sin interrumpir innecesariamente.

---

## Zoom y adaptación

Probar con:

```text
100 %
200 %
400 % cuando sea viable
```

Comprobar:

- contenido legible;
- ausencia de texto cortado;
- controles visibles;
- ausencia de superposición;
- desplazamiento horizontal solo cuando sea necesario.

---

## Movimiento reducido

Activar la preferencia de movimiento reducido.

Comprobar:

- ausencia de animaciones innecesarias;
- navegación comprensible;
- ningún contenido desaparece;
- no existen parpadeos.

---

## Lectores de pantalla

Cuando sea posible, probar con al menos una combinación:

- NVDA y Firefox o Chrome en Windows;
- Narrator y Edge;
- TalkBack y Chrome en Android.

Comprobar:

- título;
- regiones;
- encabezados;
- enlaces;
- botones;
- estado del menú;
- contenido dinámico;
- nombres de imágenes;
- idioma.

---

## Herramientas automáticas

Pueden utilizarse:

- Lighthouse;
- axe DevTools;
- Accessibility Insights;
- validador de HTML.

Los resultados deben revisarse manualmente.

---

# Pruebas responsive

## Anchos mínimos sugeridos

```text
320 px
375 px
768 px
1024 px
1440 px
```

## Dispositivos prioritarios

- teléfono Android;
- tableta;
- Chromebook;
- computador.

## Comprobar

- navegación;
- tarjetas;
- tablas;
- botones;
- filtros;
- tipografía;
- imágenes;
- pie;
- márgenes;
- impresión.

## Resultado esperado

- no existe desplazamiento horizontal general;
- los componentes se reorganizan;
- los botones pueden tocarse;
- no se pierde contenido;
- las tablas complejas tienen solución adaptada.

---

# Pruebas de privacidad

## Objetivo

Confirmar que el sitio no recopile, almacene ni transmita datos.

## Revisión de código

Buscar:

```text
localStorage
sessionStorage
document.cookie
indexedDB
fetch(
XMLHttpRequest
navigator.sendBeacon
analytics
tracking
pixel
```

El uso de `fetch` debe limitarse a recursos locales.

## Formularios

Comprobar:

- ausencia de `action` con envío;
- ausencia de datos personales;
- búsqueda local sin transmisión;
- ausencia de carga de archivos;
- ausencia de campos de relato.

## Almacenamiento

Comprobar mediante herramientas del navegador:

- Local Storage vacío;
- Session Storage vacío;
- IndexedDB vacío;
- cookies propias ausentes;
- ausencia de identificadores persistentes.

## Red

En la pestaña de red del navegador, comprobar:

- solo recursos del sitio;
- ausencia de APIs externas;
- ausencia de analítica;
- ausencia de fuentes remotas;
- ausencia de píxeles;
- ausencia de datos enviados.

## Contenido

Comprobar que no aparezcan:

- nombres reales;
- relatos;
- cursos identificables;
- fotografías no autorizadas;
- calificaciones;
- información disciplinaria;
- datos emocionales individuales.

---

# Pruebas de contenido

## Exactitud

Comprobar:

- duración;
- número de sesiones;
- nombre de momentos;
- propósitos;
- productos;
- secuencia;
- términos;
- traducciones.

## Tono

Comprobar que el lenguaje sea:

- respetuoso;
- claro;
- no punitivo;
- no clínico;
- no infantilizado;
- apropiado para la edad.

## Lenguaje restaurativo

Evitar:

- culpabilización automática;
- etiquetas personales;
- diagnósticos;
- reconciliación forzada;
- promesas de solución automática.

## Bilingüismo

Comprobar:

- equivalencia de sentido;
- nivel A1–A2;
- naturalidad;
- consistencia;
- atributos de idioma;
- ejemplos apropiados.

## IA

Comprobar que:

- se expliquen errores;
- se expliquen sesgos;
- se prohíban datos personales;
- se requiera revisión humana;
- no se atribuya empatía a la IA;
- no se presenten respuestas como autoridad.

---

# Pruebas de impresión

## Páginas prioritarias

- sesiones;
- expresiones;
- preguntas;
- prompts;
- rúbricas;
- alternativas desconectadas;
- plantillas.

## Comprobar

- navegación oculta;
- contenido completo;
- títulos visibles;
- buen contraste;
- fondos claros;
- privacidad conservada;
- enlaces comprensibles;
- tarjetas no cortadas innecesariamente;
- tamaño legible;
- ausencia de botones sin sentido.

---

# Pruebas de compatibilidad

Probar como mínimo en versiones actuales de:

- Google Chrome;
- Microsoft Edge;
- Mozilla Firefox;
- Chrome para Android.

Comprobar:

- módulos JavaScript;
- `fetch`;
- portapapeles;
- estilos;
- impresión;
- menú móvil;
- foco;
- JSON.

---

# Pruebas de rendimiento

## Objetivo

Mantener una experiencia razonable en conexiones y dispositivos limitados.

## Comprobar

- tamaño de imágenes;
- scripts innecesarios;
- archivos duplicados;
- recursos remotos;
- tiempo de carga;
- contenido visible rápidamente.

## Reglas

- no cargar videos automáticamente;
- no cargar fuentes externas;
- optimizar imágenes;
- evitar dependencias grandes;
- cargar solo datos necesarios cuando sea posible.

---

# Pruebas de seguridad básica

Aunque el sitio sea estático, debe comprobarse:

- ausencia de secretos;
- ausencia de tokens;
- ausencia de credenciales;
- inserción mediante `textContent`;
- rutas controladas;
- parámetros validados;
- ausencia de contenido HTML no confiable;
- ausencia de enlaces peligrosos o desconocidos.

Los parámetros de URL no deben insertarse directamente mediante `innerHTML`.

---

# Pruebas de GitHub Pages

Después del despliegue, comprobar:

- página inicial;
- rutas de subcarpetas;
- CSS;
- JavaScript;
- JSON;
- imágenes;
- imprimibles;
- 404;
- rutas relativas;
- uso de mayúsculas y minúsculas;
- enlaces desde páginas profundas.

GitHub Pages distingue entre:

```text
File.html
file.html
```

Los nombres deben coincidir exactamente.

---

# Entornos de prueba

## Local

```text
http://localhost:8000/docs/
```

## Vista publicada

```text
URL de GitHub Pages por confirmar
```

## Condición

Una función no debe considerarse terminada únicamente porque funciona localmente.

También debe comprobarse en la URL publicada.

---

# Registro de resultados

Se recomienda crear, cuando comiencen las pruebas:

```text
research/testing/
```

Puede incluir:

```text
research/testing/README.md
research/testing/test-results.md
research/testing/accessibility-findings.md
research/testing/usability-findings.md
```

No debe contener información identificable de estudiantes.

---

## Formato de hallazgo

```text
ID:

Fecha:

Página o componente:

Tipo:
Funcional | Accesibilidad | Privacidad | Contenido | Responsive | Despliegue

Descripción:

Pasos para reproducir:

Resultado esperado:

Resultado obtenido:

Impacto:
Crítico | Alto | Medio | Bajo

Corrección propuesta:

Estado:
Abierto | En curso | Corregido | Verificado

Versión:
```

---

# Clasificación de impacto

## Crítico

Impide:

- acceder al sitio;
- navegar;
- proteger información;
- utilizar una ruta esencial.

También incluye una posible exposición de datos.

## Alto

Impide completar una tarea principal o genera una barrera significativa.

## Medio

Dificulta una tarea, pero existe una alternativa.

## Bajo

Problema menor de consistencia, presentación o claridad.

---

# Criterios de salida por entrega

## Entrega 0

- JSON válido;
- archivos cargan;
- servidor local funciona;
- no existen servicios externos.

## Entrega 1

- navegación funcional;
- menú móvil operable;
- privacidad visible;
- alcance visible;
- teclado funcional.

## Entrega 2

- cuatro momentos disponibles;
- dieciséis sesiones consultables;
- datos correctos;
- alternativas visibles;
- vistas diferenciadas.

## Entrega 3

- lenguaje disponible;
- filtros accesibles;
- recursos utilizables;
- evaluación imprimible;
- prompts seguros.

## Entrega 4

- sitio publicado;
- rutas públicas válidas;
- pruebas completadas;
- errores críticos corregidos;
- documentación actualizada.

---

# Lista previa a publicación

## Funcionalidad

- [ ] No hay enlaces rotos.
- [ ] No hay errores críticos en consola.
- [ ] El JSON carga correctamente.
- [ ] La página 404 funciona.
- [ ] Los recursos se abren.
- [ ] Los filtros funcionan.
- [ ] La copia funciona o presenta alternativa.

## Accesibilidad

- [ ] El enlace de salto funciona.
- [ ] Todo puede utilizarse con teclado.
- [ ] El foco es visible.
- [ ] Existe un solo `h1`.
- [ ] Los encabezados están ordenados.
- [ ] Las imágenes tienen alternativa.
- [ ] Los idiomas están marcados.
- [ ] Funciona con zoom.
- [ ] Funciona en móvil.
- [ ] Se respeta movimiento reducido.

## Privacidad

- [ ] No existen formularios con envío.
- [ ] No existe almacenamiento.
- [ ] No existen cookies.
- [ ] No existe analítica.
- [ ] No existen llamadas externas.
- [ ] No hay información personal.
- [ ] Se utilizan casos ficticios.

## Contenido

- [ ] Las fuentes están identificadas.
- [ ] El contenido coincide con Markdown.
- [ ] El JSON está sincronizado.
- [ ] Las traducciones fueron revisadas.
- [ ] Los avisos están presentes.
- [ ] El recurso se identifica como prototipo.

## Despliegue

- [ ] GitHub Pages está configurado.
- [ ] Las rutas públicas funcionan.
- [ ] El sitio se prueba desde la URL final.
- [ ] El README incluye el enlace publicado.
- [ ] El changelog fue actualizado.

---

# Criterio de aprobación

Una versión puede publicarse cuando:

- no existen hallazgos críticos abiertos;
- los hallazgos altos tienen corrección o justificación;
- las historias prioritarias son verificables;
- la navegación funciona con teclado;
- el recurso no recopila datos;
- las páginas prioritarias son legibles en móvil;
- el contenido fue revisado;
- el despliegue fue probado;
- las limitaciones son visibles.

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- se añade una función;
- se añade un componente;
- cambia una historia;
- cambia el despliegue;
- se identifica un riesgo;
- se incorpora una herramienta de prueba;
- se define una prueba automatizada;
- cambia la política de privacidad;
- una implementación requiere nuevos casos.

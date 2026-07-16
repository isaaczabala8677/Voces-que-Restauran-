# Changelog

Todos los cambios importantes de **Voces que Restauran** se documentarán en este archivo.

El formato se inspira en *Keep a Changelog* y utiliza versiones compatibles con versionado semántico cuando corresponda.

---

## Tipos de cambio

```text
Added
Changed
Deprecated
Removed
Fixed
Security
Documentation
```

---

## Unreleased

### Added

- Estructura general del repositorio.
- Carpeta `knowledge/` como base de conocimiento pedagógico.
- Carpeta `docs/` para documentación técnica y futuro recurso web.
- Carpeta `research/` para sistematización anonimizada.
- Carpeta `future-app/` para conceptualización futura.
- Documentación completa de la unidad didáctica.
- Cuatro momentos de aprendizaje.
- Dieciséis sesiones.
- Duración total de treinta y dos horas.
- Recursos de lenguaje bilingüe.
- Lenguaje restaurativo.
- Mensajes de paz.
- Prompts educativos para Gemini y Vibe Coding.
- Evaluación, evidencias, rúbricas y productos.
- Archivo estructurado `knowledge/data/unit-content.json`.
- Documentación de privacidad.
- Documentación de accesibilidad.
- Guía de contribución.
- Sistema de diseño.
- Guías editoriales.
- Registro de decisiones.
- Historias de usuario actualizadas.
- Project brief actualizado.
- Roadmap actualizado.

### Documentation

Se añadieron los siguientes documentos técnicos dentro de `docs/`:

```text
docs/README.md
docs/SITEMAP.md
docs/PAGE_INVENTORY.md
docs/COMPONENT_INVENTORY.md
docs/TECHNICAL_ARCHITECTURE.md
docs/IMPLEMENTATION_PLAN.md
docs/DATA_SCHEMA.md
docs/CONTENT_MAPPING.md
docs/TESTING_PLAN.md
docs/DEPLOYMENT.md
```

Estos documentos definen:

- arquitectura de información;
- inventario de páginas;
- inventario de componentes;
- arquitectura técnica;
- plan de implementación;
- esquema de datos;
- trazabilidad del contenido;
- estrategia de pruebas;
- despliegue mediante GitHub Pages;
- mantenimiento de la carpeta `docs/`.

### Changed

- Se redefinió el producto actual como una unidad didáctica apoyada por un recurso web estático.
- Se separó explícitamente el recurso actual de una posible aplicación futura.
- Se estableció que la aplicación futura no se construirá antes de la implementación y cocreación con estudiantes.
- Se actualizó el alcance para excluir autenticación, cuentas, bases de datos, almacenamiento, analítica y gestión de casos.
- Se definió `knowledge/` como fuente pedagógica principal.
- Se definió `knowledge/data/unit-content.json` como fuente estructurada principal.
- Se decidió utilizar una copia sincronizada en `docs/data/unit-content.json`.
- Se definió una estrategia de desarrollo por entregas.
- Se estableció que las secciones principales usarán páginas HTML estáticas.
- Se aceptó inicialmente una plantilla dinámica para las sesiones.
- Se decidió presentar contenido docente y estudiantil en una misma página mediante secciones diferenciadas.
- Se definió que el contenido esencial de privacidad estará directamente en HTML.
- Se definió GitHub Pages como estrategia inicial de despliegue.
- Se decidió utilizar HTML, CSS y JavaScript sin framework.
- Se decidió no utilizar dependencias externas en la primera versión.
- Se decidió utilizar fuentes del sistema y recursos locales.
- Se incorporó mejora progresiva como principio técnico.
- Se incorporó accesibilidad desde la primera entrega.
- Se actualizó el roadmap para incluir las Entregas 0 a 4.
- Se actualizó `DESIGN_DECISIONS.md` con decisiones pedagógicas, técnicas, de privacidad y de despliegue.

### Security

- Se estableció que el recurso no recopilará datos personales.
- Se prohibió el uso de `localStorage`, `sessionStorage`, cookies e IndexedDB.
- Se prohibió el uso de analítica, seguimiento y píxeles.
- Se prohibieron formularios para reportar situaciones.
- Se prohibió la carga de archivos estudiantiles.
- Se estableció el uso exclusivo de casos ficticios.
- Se definió que el recurso no será un canal de denuncias.
- Se definió que el recurso no sustituirá rutas institucionales.
- Se prohibió la integración directa con servicios externos de IA.
- Se estableció la inserción segura de contenido JSON mediante `textContent`.
- Se definieron validaciones para detectar campos de datos prohibidos.

### Accessibility

- Se definió navegación completa con teclado.
- Se definió foco visible.
- Se incorporó enlace para saltar al contenido.
- Se estableció diseño responsive desde 320 px.
- Se definió compatibilidad con zoom.
- Se incorporaron atributos de idioma.
- Se definió soporte para movimiento reducido.
- Se establecieron alternativas imprimibles y desconectadas.
- Se prohibió depender exclusivamente del color.
- Se definieron pruebas con teclado, móvil y lectores de pantalla cuando sea posible.

### Deployment

- Se definió publicación desde:

```text
Branch: main
Folder: /docs
```

- Se documentó la ejecución local mediante:

```bash
python -m http.server 8000
```

- Se documentaron validaciones del JSON.
- Se documentó el uso de rutas relativas.
- Se definió `docs/404.html`.
- Se documentó la reversión mediante `git revert`.

### Development workflow

- Se decidió realizar la implementación técnica mediante Codex conectado al repositorio.
- Se mantendrá esta conversación para decisiones pedagógicas, editoriales, de experiencia y revisión.
- Se estableció el siguiente flujo:

```text
Definir entrega
        ↓
Preparar prompt para Codex
        ↓
Implementar
        ↓
Revisar
        ↓
Corregir
        ↓
Aprobar
```

- Se definió que Codex no debe construir todo el sitio en una sola intervención.
- Se estableció que el desarrollo comenzará con la Entrega 0.

---

## Próxima versión prevista

```text
0.1.0
```

### Alcance previsto

Primera base técnica funcional:

- estructura inicial de `docs/`;
- página de inicio mínima;
- página 404;
- archivos CSS base;
- JavaScript base;
- copia sincronizada del JSON;
- servidor local;
- validaciones iniciales;
- navegación y foco básicos.

---

## Versionado previsto

```text
0.1.0 — Preparación técnica
0.2.0 — Estructura mínima funcional
0.3.0 — Momentos y sesiones
0.4.0 — Lenguaje, recursos y guía docente
0.5.0 — Pruebas y publicación inicial
1.0.0 — Recurso completo y probado para implementación
```

Las versiones pueden ajustarse según el desarrollo real.

---

## Criterio de actualización

Este archivo debe actualizarse cuando:

- se añade una función;
- cambia el alcance;
- se completa una entrega;
- se corrige un error importante;
- se cambia una decisión;
- se incorpora una medida de seguridad;
- se publica una versión;
- se elimina o pospone una función.

Los cambios aún no publicados deben permanecer en:

```text
Unreleased
```

hasta que se cree una versión formal.

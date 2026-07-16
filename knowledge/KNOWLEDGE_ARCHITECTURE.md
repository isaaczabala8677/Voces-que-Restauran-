# Arquitectura de la base de conocimiento

## Propósito

La carpeta `knowledge/` contiene la versión estructurada y editable de la unidad didáctica Voces que Restauran.

Esta base de conocimiento será la fuente pedagógica principal para:

- el recurso web interactivo;
- las futuras versiones de la unidad;
- el trabajo asistido con Codex;
- la futura app cocreada con estudiantes.

El PDF original se conserva como documento de referencia, pero el contenido organizado en `knowledge/` será la fuente operativa del proyecto.

## Principios

1. La pedagogía orienta el desarrollo técnico.
2. El contenido debe estar separado de la interfaz.
3. La unidad debe poder modificarse sin editar directamente el frontend.
4. Codex debe consultar esta carpeta antes de generar o modificar software.
5. No se almacenarán datos personales ni relatos sensibles.
6. Voces que Restauran se mantiene separado de Caukara.

## Estructura prevista

```text
knowledge/
├── 00_PROJECT_OVERVIEW.md
├── 01_CONTEXT.md
├── 02_TRANSFER_FROM_KOREA.md
├── 03_TARGET_POPULATION.md
│
├── unit/
│   ├── 01_GENERAL_INFORMATION.md
│   ├── 02_JUSTIFICATION.md
│   ├── 03_PURPOSE.md
│   ├── 04_COMPETENCIES.md
│   ├── 05_LEARNING_EVIDENCE.md
│   ├── 06_ASSESSMENT.md
│   ├── 07_RESOURCES.md
│   ├── 08_REFERENCES.md
│   └── 09_TIMELINE.md
│
├── moments/
│   ├── MOMENT_1.md
│   ├── MOMENT_2.md
│   ├── MOMENT_3.md
│   └── MOMENT_4.md
│
├── language/
│   ├── GLOSSARY.md
│   ├── RESTORATIVE_QUESTIONS.md
│   └── PEACE_MESSAGES.md
│
├── prompts/
│   ├── GEMINI.md
│   └── VIBE_CODING.md
│
└── data/
    └── unit-content.json

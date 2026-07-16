# Arquitectura de la base de conocimiento

## 1. Propósito

La carpeta `knowledge/` contiene la versión estructurada, editable y versionada de la unidad didáctica **Voces que Restauran**.

Esta base de conocimiento será la fuente pedagógica principal para:

- el recurso web interactivo;
- la implementación de la unidad didáctica;
- el trabajo asistido con Codex;
- las futuras actualizaciones del proyecto;
- la futura aplicación cocreada con los estudiantes.

El documento original de la unidad se conserva como referencia, pero la información organizada en `knowledge/` constituye la fuente operativa del proyecto.

---

## 2. Principios de organización

1. La pedagogía orienta el desarrollo tecnológico.
2. El contenido debe mantenerse separado de la interfaz.
3. La unidad debe poder actualizarse sin modificar directamente el frontend.
4. Codex debe consultar la base de conocimiento antes de generar o modificar código.
5. Cada archivo debe tener un propósito claramente definido.
6. Deben evitarse contenidos duplicados entre documentos.
7. No se almacenarán nombres, relatos identificables ni datos sensibles de estudiantes.
8. El proyecto debe incorporar criterios de protección para estudiantes entre los 11 y 14 años.
9. La tecnología no debe reemplazar el acompañamiento pedagógico ni las rutas institucionales.
10. **Voces que Restauran** es un proyecto independiente de Caukara y de otros proyectos educativos del autor.

---

## 3. Estructura oficial

```text
knowledge/
├── README.md
├── KNOWLEDGE_ARCHITECTURE.md
│
├── 00_PROJECT_OVERVIEW.md
├── 01_CONTEXT.md
├── 02_TRANSFER_FROM_KOREA.md
├── 03_TARGET_POPULATION.md
│
├── unit/
│   ├── README.md
│   ├── 01_GENERAL_INFORMATION.md
│   ├── 02_JUSTIFICATION.md
│   ├── 03_PROBLEM_STATEMENT.md
│   ├── 04_PURPOSE.md
│   ├── 05_LEARNING_OBJECTIVES.md
│   ├── 06_COMPETENCIES.md
│   ├── 07_EXPECTED_LEARNING.md
│   ├── 08_TRANSVERSAL_APPROACH.md
│   ├── 09_INTERDISCIPLINARITY.md
│   ├── 10_TIMELINE.md
│   ├── 11_RESOURCES.md
│   └── 12_REFERENCES.md
│
├── moments/
│   ├── README.md
│   ├── MOMENT_1.md
│   ├── MOMENT_2.md
│   ├── MOMENT_3.md
│   └── MOMENT_4.md
│
├── pedagogy/
│   ├── README.md
│   ├── ASSESSMENT.md
│   ├── EVIDENCE.md
│   ├── RUBRICS.md
│   └── LEARNING_PRODUCTS.md
│
├── language/
│   ├── README.md
│   ├── GLOSSARY.md
│   ├── KEY_EXPRESSIONS.md
│   ├── RESTORATIVE_LANGUAGE.md
│   └── PEACE_MESSAGES.md
│
├── prompts/
│   ├── README.md
│   ├── GEMINI.md
│   └── VIBE_CODING.md
│
└── data/
    ├── README.md
    └── unit-content.json

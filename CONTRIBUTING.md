# Contribuir a Voces que Restauran

## Propósito

Este documento explica cómo contribuir al repositorio de **Voces que Restauran**.

Las contribuciones pueden incluir:

- documentación;
- contenido pedagógico;
- traducciones;
- accesibilidad;
- diseño;
- código;
- pruebas;
- correcciones;
- recursos imprimibles.

Toda contribución debe mantener el propósito educativo y la protección de estudiantes menores de edad.

---

## Antes de contribuir

Revisa:

```text
README.md
PEDAGOGICAL_FRAMEWORK.md
DESIGN_DECISIONS.md
CONTENT_GUIDELINES.md
PRIVACY.md
ACCESSIBILITY.md
```

También consulta los documentos de `knowledge/` relacionados con el cambio.

---

## Principios obligatorios

Toda contribución debe:

- tener propósito pedagógico;
- evitar datos personales;
- utilizar casos ficticios;
- proteger a menores;
- mantener accesibilidad;
- evitar lenguaje punitivo;
- documentar decisiones;
- funcionar sin almacenamiento;
- respetar el alcance del prototipo.

---

## Cambios que no deben proponerse en esta fase

- autenticación;
- cuentas de estudiantes;
- bases de datos;
- formularios de relatos;
- registro de conflictos;
- puntuaciones de conducta;
- rankings;
- análisis emocional;
- vigilancia;
- recomendaciones disciplinarias;
- integración directa con IA;
- publicación automática;
- seguimiento de estudiantes.

Una propuesta que requiera alguna de estas funciones necesita una revisión formal de alcance antes de escribirse como código.

---

## Protección de información

Nunca incluyas:

- nombres de estudiantes;
- respuestas;
- testimonios;
- fotografías identificables;
- calificaciones;
- información familiar;
- diagnósticos;
- correos;
- teléfonos;
- contraseñas;
- claves;
- tokens;
- archivos secretos.

---

## Tipos de contribución

### Documentación pedagógica

Debe:

- mantener coherencia con la unidad;
- utilizar lenguaje comprensible;
- indicar propósito;
- incluir protección;
- actualizar documentos relacionados.

### Contenido bilingüe

Debe:

- utilizar traducciones naturales;
- corresponder al nivel A1–A2 cuando sea contenido estudiantil;
- mantener la función comunicativa;
- evitar traducciones literales inadecuadas.

### Casos ficticios

Deben:

- ser apropiados para la edad;
- permitir varias perspectivas;
- no parecerse a situaciones identificables;
- evitar contenidos sensibles innecesarios;
- no determinar culpables.

### Código

Debe:

- utilizar HTML semántico;
- funcionar con teclado;
- mantener foco visible;
- ser responsive;
- evitar servicios externos;
- no recopilar datos;
- incluir manejo de errores;
- ser comprensible y mantenible.

### Diseño

Debe:

- respetar el sistema visual;
- evitar estética punitiva;
- mantener contraste;
- incluir estados;
- funcionar en móvil;
- considerar movimiento reducido.

---

## Flujo recomendado

### Crear una rama

```bash
git checkout -b tipo/descripcion-breve
```

Ejemplos:

```text
docs/update-assessment
feature/restorative-cards
fix/mobile-navigation
accessibility/improve-focus
```

### Realizar cambios

Mantén los cambios:

- pequeños;
- relacionados;
- documentados;
- fáciles de revisar.

### Validar

Para el JSON:

```bash
python -m json.tool knowledge/data/unit-content.json
```

Para revisar cambios:

```bash
git diff
```

### Confirmar

```bash
git add .
git commit -m "Descripción clara del cambio"
```

### Publicar la rama

```bash
git push -u origin nombre-de-la-rama
```

Después crea un pull request.

---

## Trabajo directo en GitHub Web

Para cambios pequeños:

1. abre el archivo;
2. selecciona el ícono de edición;
3. realiza el cambio;
4. escribe un mensaje descriptivo;
5. crea una rama o confirma según el flujo acordado;
6. revisa la vista previa.

Para cambios amplios se recomienda GitHub Codespaces.

---

## Mensajes de commit

Utiliza mensajes en modo imperativo o descriptivo.

Ejemplos:

```text
Add bilingual feedback expressions
Fix mobile navigation focus
Update Moment 3 privacy guidance
Document prototype testing process
```

Evita:

```text
changes
update
stuff
final
fix things
```

---

## Pull requests

Un pull request debe explicar:

- qué cambia;
- por qué;
- qué documentos afecta;
- cómo se probó;
- riesgos;
- capturas cuando sean útiles;
- consideraciones de privacidad;
- consideraciones de accesibilidad.

Plantilla:

```text
## Propósito

## Cambios realizados

## Documentos relacionados

## Validaciones

## Privacidad

## Accesibilidad

## Riesgos o limitaciones

## Capturas
```

---

## Sincronización de contenido

Cuando cambies una sesión, revisa:

```text
knowledge/moments/
knowledge/unit/10_TIMELINE.md
knowledge/data/unit-content.json
```

Cuando cambies lenguaje:

```text
knowledge/language/
knowledge/data/unit-content.json
```

Cuando cambies evaluación:

```text
knowledge/pedagogy/
knowledge/moments/
knowledge/data/unit-content.json
```

Cuando cambies arquitectura:

```text
README.md
DESIGN_DECISIONS.md
PRIVACY.md
ACCESSIBILITY.md
```

---

## Pruebas de contenido

Revisa:

- ortografía;
- claridad;
- coherencia;
- edad;
- tono;
- traducción;
- privacidad;
- lenguaje restaurativo;
- ausencia de datos.

---

## Pruebas de código

Comprueba:

- navegación con teclado;
- foco;
- móvil;
- enlaces;
- botones;
- consola;
- carga de JSON;
- errores;
- impresión;
- ausencia de almacenamiento;
- ausencia de servicios externos.

---

## Uso de inteligencia artificial

Puede utilizarse IA como apoyo para:

- idear;
- revisar;
- traducir;
- generar borradores;
- explicar código.

La persona que contribuye debe:

- revisar;
- modificar;
- verificar;
- asumir responsabilidad;
- no incluir información privada;
- documentar cuando sea relevante.

---

## Dependencias

No añadas una dependencia sin justificar:

- necesidad;
- mantenimiento;
- tamaño;
- privacidad;
- accesibilidad;
- compatibilidad;
- licencia.

Se prefiere código web estándar cuando sea suficiente.

---

## Licencias y recursos externos

Antes de añadir:

- imágenes;
- íconos;
- fuentes;
- librerías;
- textos;
- audios;

confirma que exista permiso de uso y registra la fuente cuando corresponda.

No añadas una licencia general al repositorio hasta que sea definida formalmente.

---

## Conducta colaborativa

Las interacciones deben:

- centrarse en ideas;
- utilizar lenguaje respetuoso;
- permitir preguntas;
- reconocer errores;
- evitar ataques;
- documentar desacuerdos técnicos;
- priorizar el propósito pedagógico.

---

## Reporte de seguridad o privacidad

No abras un issue público con información sensible.

Describe el problema sin datos personales y contacta al responsable del repositorio mediante un canal apropiado.

---

## Definición de terminado

Un cambio se considera listo cuando:

- responde a un propósito;
- está documentado;
- no introduce datos;
- cumple accesibilidad básica;
- funciona en móvil;
- fue revisado;
- actualiza archivos relacionados;
- reconoce limitaciones;
- no contradice decisiones vigentes.

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- cambie el flujo de contribución;
- se incorporen pruebas automáticas;
- se defina una licencia;
- se publique una versión;
- se incorporen colaboradores;
- cambie la arquitectura.

# Accesibilidad

## Propósito

Este documento establece los requisitos de accesibilidad de **Voces que Restauran**.

La accesibilidad debe incorporarse desde el diseño, no añadirse únicamente al final.

El objetivo es que los contenidos y actividades puedan ser utilizados por estudiantes con diferentes:

- capacidades;
- formas de comunicación;
- niveles de lectura;
- experiencias tecnológicas;
- dispositivos;
- condiciones de conectividad;
- necesidades de apoyo.

---

## Principios

### Perceptible

La información debe poder percibirse de diferentes maneras.

### Operable

La navegación y los controles deben funcionar mediante distintos métodos.

### Comprensible

El contenido y la interacción deben ser previsibles y claros.

### Robusto

El recurso debe utilizar estructuras compatibles con tecnologías de asistencia.

---

## HTML semántico

Se deben utilizar elementos como:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<button>
<a>
```

Evitar utilizar elementos genéricos con comportamiento interactivo cuando existe un elemento nativo.

---

## Idioma

Cada página debe declarar su idioma:

```html
<html lang="es">
```

Cuando exista una expresión extensa en inglés puede utilizarse:

```html
<span lang="en">My voice matters.</span>
```

---

## Encabezados

Debe existir:

- un solo `h1` principal;
- niveles ordenados;
- títulos descriptivos;
- ausencia de saltos arbitrarios.

---

## Teclado

Todas las funciones deben poder utilizarse mediante:

- `Tab`;
- `Shift + Tab`;
- `Enter`;
- barra espaciadora;
- teclas de dirección cuando corresponda;
- `Escape` para cerrar elementos cuando sea pertinente.

No debe existir contenido accesible únicamente con mouse.

---

## Foco visible

Los elementos interactivos deben mostrar claramente dónde está el foco.

Ejemplo:

```css
:focus-visible {
  outline: 3px solid #b45309;
  outline-offset: 3px;
}
```

No debe eliminarse el foco sin ofrecer una alternativa visible.

---

## Orden del foco

El orden debe seguir la secuencia visual y lógica.

Evitar:

- valores positivos de `tabindex`;
- saltos inesperados;
- elementos ocultos que reciben foco;
- controles duplicados.

---

## Contraste

El texto y los controles deben tener contraste suficiente.

Se debe comprobar:

- texto normal;
- texto grande;
- botones;
- enlaces;
- bordes importantes;
- estados de foco;
- mensajes de error.

El color no debe ser el único indicador.

---

## Tamaño del texto

El contenido debe:

- mantener un tamaño base legible;
- permitir zoom;
- evitar texto dentro de imágenes;
- conservar funcionalidad con aumento;
- utilizar interlineado cómodo.

---

## Enlaces

Los enlaces deben:

- ser descriptivos;
- distinguirse del texto;
- mostrar foco;
- indicar cuando descargan un archivo cuando sea necesario.

---

## Botones

Los botones deben:

- usar texto comprensible;
- tener área táctil suficiente;
- indicar estados;
- evitar acciones ambiguas;
- no depender únicamente de un ícono.

---

## Imágenes

Toda imagen informativa necesita texto alternativo.

Ejemplo:

```html
<img
  src="images/dialogue-circle.svg"
  alt="Estudiantes representados en un círculo de diálogo"
/>
```

Las imágenes decorativas deben utilizar:

```html
alt=""
```

No se debe repetir en el texto alternativo información ya visible al lado.

---

## Íconos

Los íconos deben acompañarse de:

- texto visible; o
- nombre accesible.

Ejemplo:

```html
<button type="button" aria-label="Copiar mensaje">
  <svg aria-hidden="true"></svg>
  <span>Copiar</span>
</button>
```

---

## Formularios

Aunque la primera fase no utiliza formularios con envío, cualquier control debe incluir:

- etiqueta;
- instrucciones;
- mensaje de error;
- propósito;
- relación clara entre etiqueta y campo.

El texto de marcador no sustituye una etiqueta.

---

## Contenido dinámico

Los mensajes como “Texto copiado” pueden utilizar una región de estado:

```html
<p role="status" aria-live="polite"></p>
```

No deben anunciarse cambios innecesarios de manera repetitiva.

---

## Movimiento

Debe respetarse:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Evitar:

- parpadeos;
- desplazamientos constantes;
- animaciones automáticas;
- contenido que se mueve sin control.

---

## Audio y video

Los recursos audiovisuales deben considerar:

- subtítulos;
- transcripción;
- controles;
- ausencia de reproducción automática;
- volumen controlable;
- descripción cuando sea necesaria.

---

## Tablas

Las tablas deben utilizarse únicamente para datos tabulares.

Deben incluir:

- encabezados;
- estructura sencilla;
- títulos o contexto;
- adaptación o desplazamiento en móvil.

---

## Lenguaje claro

El contenido debe:

- explicar términos;
- utilizar instrucciones breves;
- dividir procedimientos;
- mostrar ejemplos;
- evitar metáforas innecesarias;
- permitir traducción o apoyo bilingüe.

---

## Accesibilidad cognitiva

Se debe:

- mantener navegación consistente;
- reducir opciones;
- mostrar progreso;
- evitar sobrecarga;
- agrupar información;
- ofrecer ejemplos;
- utilizar iconos con texto;
- permitir regresar;
- indicar el propósito de cada actividad.

---

## Recursos imprimibles

Los recursos impresos deben:

- utilizar buen contraste;
- evitar fondos intensos;
- incluir títulos;
- mantener instrucciones;
- no depender del color;
- ofrecer espacio suficiente;
- indicar privacidad.

---

## Alternativas desconectadas

Cada actividad debe contar con una forma alternativa mediante:

- tarjetas;
- papel;
- dibujo;
- conversación;
- simulación;
- prototipo físico;
- guía impresa.

---

## Diferentes formas de respuesta

Los estudiantes pueden responder mediante:

- texto;
- voz;
- dibujo;
- selección;
- gesto;
- presentación grabada;
- trabajo colaborativo;
- prototipo;
- organizador visual.

---

## Diseño responsive

Debe probarse en:

- 320 px de ancho;
- teléfono grande;
- tableta;
- Chromebook;
- escritorio;
- zoom de 200 %.

No debe existir desplazamiento horizontal innecesario.

---

## Pruebas recomendadas

### Manuales

- navegar solo con teclado;
- aumentar zoom;
- desactivar imágenes;
- activar movimiento reducido;
- revisar en móvil;
- comprobar impresión;
- leer instrucciones en voz alta.

### Técnicas

Pueden utilizarse:

- Lighthouse;
- axe;
- Accessibility Insights;
- validadores de HTML.

Las herramientas automáticas no sustituyen las pruebas humanas.

---

## Lista de verificación

### Estructura

- [ ] La página tiene idioma.
- [ ] Existe un `h1`.
- [ ] Los encabezados están ordenados.
- [ ] Se utilizan elementos semánticos.

### Navegación

- [ ] Todo funciona con teclado.
- [ ] El foco es visible.
- [ ] El orden es lógico.
- [ ] Existe forma de regresar.

### Contenido

- [ ] Las imágenes tienen alternativa.
- [ ] Los enlaces son descriptivos.
- [ ] El lenguaje es comprensible.
- [ ] El contenido no depende únicamente del color.

### Interacción

- [ ] Los botones tienen nombres claros.
- [ ] Los estados se comunican.
- [ ] Los errores ofrecen solución.
- [ ] El movimiento puede reducirse.

### Adaptación

- [ ] Funciona en móvil.
- [ ] Funciona con zoom.
- [ ] Tiene versión imprimible cuando corresponde.
- [ ] Existe alternativa desconectada.

---

## Reporte de barreras

Cuando se identifique una barrera, documentar:

```text
Página o componente:

Barrera:

Usuario afectado:

Cómo reproducirla:

Impacto:

Corrección propuesta:

Prioridad:

Estado:
```

No incluir datos personales del usuario que reporta.

---

## Criterio de actualización

Este documento debe revisarse cuando:

- cambie el sistema de diseño;
- se incorporen nuevos componentes;
- se realicen pruebas;
- se identifiquen barreras;
- cambien los formatos;
- se publique una nueva versión.

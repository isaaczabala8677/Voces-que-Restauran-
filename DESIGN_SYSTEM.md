# Sistema de diseño

## Propósito

Este documento define las bases visuales, funcionales y de interacción para el recurso web de **Voces que Restauran**.

El sistema debe favorecer:

- claridad;
- confianza;
- participación;
- accesibilidad;
- lectura;
- navegación sencilla;
- uso desde dispositivos móviles;
- coherencia entre secciones;
- representación no punitiva de la convivencia.

---

## Principios de diseño

### Diseñar para comprender

La interfaz debe ayudar a identificar:

- dónde está el usuario;
- qué puede hacer;
- cuál es el propósito;
- qué ocurrirá después;
- cómo regresar;
- dónde encontrar ayuda.

### Diseñar con cuidado

La experiencia no debe parecer:

- un sistema disciplinario;
- una plataforma de denuncias;
- una aplicación de vigilancia;
- una evaluación de conducta;
- un sistema de clasificación.

### Diseñar para diferentes formas de participación

La interfaz debe ofrecer:

- lectura;
- exploración;
- recursos visuales;
- materiales imprimibles;
- navegación por teclado;
- alternativas desconectadas.

### Diseñar con privacidad

No deben presentarse campos para:

- nombres;
- cursos;
- correos;
- relatos;
- conflictos;
- información familiar;
- datos emocionales.

### Diseñar para móviles

La interfaz debe funcionar principalmente en:

- teléfonos;
- tabletas;
- Chromebook;
- computadores.

---

## Personalidad visual

La identidad debe sentirse:

- cercana;
- educativa;
- esperanzadora;
- juvenil;
- reflexiva;
- segura;
- participativa;
- no infantilizada;
- no institucionalmente rígida.

Debe evitar una estética:

- policial;
- judicial;
- clínica;
- punitiva;
- excesivamente corporativa;
- oscura o amenazante.

---

## Conceptos visuales

La identidad puede inspirarse en:

- ondas de voz;
- círculos de diálogo;
- caminos;
- puentes;
- redes;
- palabras;
- manos que construyen;
- piezas que se conectan;
- burbujas de conversación;
- transformación.

---

## Paleta cromática

La paleta definitiva deberá validarse visualmente y comprobar contraste.

### Colores funcionales sugeridos

| Uso | Referencia inicial |
|---|---|
| Fondo principal | Tonalidad clara y neutra |
| Texto principal | Tonalidad oscura de alto contraste |
| Acción primaria | Azul o verde profundo |
| Acción secundaria | Tonalidad complementaria |
| Información | Azul |
| Éxito o avance | Verde |
| Precaución | Ámbar |
| Error | Rojo oscuro |
| Superficie | Blanco o tono claro |

Los colores no deben ser el único mecanismo para comunicar estados.

Ejemplo:

```text
Incorrecto:
Un borde rojo sin texto.

Correcto:
Ícono + título “Revisa este elemento” + explicación.
```

---

## Tipografía

Se priorizarán fuentes:

- legibles;
- disponibles en web;
- de formas claras;
- con buena diferenciación de caracteres;
- compatibles con diferentes dispositivos.

La interfaz debe utilizar pocas familias tipográficas.

Recomendación general:

- una familia para todo el sistema;
- pesos diferentes para jerarquías;
- tamaño base mínimo aproximado de 16 px;
- interlineado cómodo;
- ancho de texto limitado.

---

## Jerarquía tipográfica

| Elemento | Uso |
|---|---|
| `h1` | Título único de la página |
| `h2` | Secciones principales |
| `h3` | Subsecciones |
| Texto base | Explicaciones e instrucciones |
| Texto auxiliar | Aclaraciones y metadatos |
| Etiqueta | Categorías y estados |

No deben omitirse niveles únicamente por razones visuales.

---

## Espaciado

El sistema debe utilizar una escala consistente.

Ejemplo:

```text
4 px
8 px
12 px
16 px
24 px
32 px
48 px
64 px
```

El espacio debe ayudar a:

- agrupar elementos relacionados;
- separar secciones;
- reducir carga cognitiva;
- mejorar interacción táctil.

---

## Contenedores

El ancho del contenido debe evitar líneas excesivamente largas.

Se recomienda:

- contenido centrado;
- márgenes laterales;
- ancho máximo;
- mayor espacio en pantallas grandes;
- adaptación fluida en móviles.

---

## Componentes principales

### Encabezado

Debe incluir:

- identidad del proyecto;
- navegación principal;
- acceso claro al inicio;
- estado visible de foco;
- menú adaptable a móvil.

### Pie de página

Puede incluir:

- aviso de prototipo;
- privacidad;
- accesibilidad;
- autoría;
- enlaces a documentación.

### Tarjetas

Las tarjetas pueden presentar:

- momentos;
- actividades;
- preguntas;
- vocabulario;
- mensajes;
- recursos.

Cada tarjeta debe incluir:

- título;
- propósito o descripción;
- acción clara;
- jerarquía visual;
- estado de foco.

### Botones

Los botones deben:

- describir la acción;
- tener tamaño táctil suficiente;
- mostrar foco;
- diferenciar acción primaria y secundaria;
- evitar textos ambiguos como “Haz clic aquí”.

Ejemplos:

```text
Comenzar actividad
Ver preguntas
Descargar plantilla
Regresar al momento
```

### Enlaces

Los enlaces deben:

- distinguirse visualmente;
- indicar su destino;
- no depender solo del color;
- mantener un foco visible.

### Alertas

Tipos posibles:

- información;
- privacidad;
- precaución;
- error;
- recordatorio docente.

Cada alerta debe incluir:

- ícono o etiqueta;
- título;
- explicación;
- acción cuando corresponda.

### Acordeones

Pueden utilizarse para:

- reducir longitud visual;
- organizar orientaciones;
- separar guía docente y actividad estudiantil.

Deben ser operables con teclado.

### Filtros

Los filtros pueden utilizarse en:

- glosario;
- mensajes;
- preguntas restaurativas;
- recursos.

Deben incluir:

- etiqueta visible;
- opción para limpiar;
- mensaje de resultados;
- funcionamiento sin seguimiento.

### Tarjetas bilingües

Estructura sugerida:

```text
Categoría

English expression

Expresión en español

Ejemplo o función comunicativa
```

El orden de los idiomas debe mantenerse consistente.

### Migas de navegación

Pueden ayudar a mostrar la ubicación:

```text
Inicio > Momento 2 > Preguntas restaurativas
```

### Mensajes de estado

Deben explicar:

- contenido cargando;
- resultado vacío;
- error;
- acción completada;
- copiado de texto.

---

## Navegación principal

La navegación no debe ser excesivamente extensa.

Estructura posible:

```text
Inicio
Momentos
Recursos
Lenguaje
Para docentes
Acerca del proyecto
```

Los cuatro momentos pueden aparecer dentro de una sección o navegación secundaria.

---

## Diseño de momentos

Cada momento debe mostrar:

- número y nombre;
- duración;
- pregunta orientadora;
- propósito;
- sesiones;
- productos;
- evidencias;
- recursos;
- alternativa desconectada;
- criterios de privacidad.

---

## Diseño de sesiones

Cada sesión puede incluir:

```text
Título
Duración
Propósito
Objetivos
Materiales
Secuencia
Expresiones en inglés
Evidencias
Evaluación
Accesibilidad
Alternativa desconectada
Alertas docentes
```

La interfaz puede separar:

- guía docente;
- actividad estudiantil.

---

## Iconografía

Los íconos deben:

- acompañar texto;
- mantener un estilo consistente;
- tener significado comprensible;
- incluir etiqueta accesible;
- no reemplazar instrucciones esenciales.

Categorías posibles:

- escuchar;
- hablar;
- reflexionar;
- diseñar;
- probar;
- mejorar;
- privacidad;
- recurso imprimible.

---

## Ilustraciones

Las ilustraciones deben:

- representar diversidad;
- evitar estereotipos;
- no mostrar situaciones humillantes;
- no representar estudiantes reales sin autorización;
- apoyar la comprensión;
- mantener coherencia visual.

No deben utilizarse rostros o expresiones para afirmar diagnósticos emocionales.

---

## Movimiento y animación

La animación debe:

- tener propósito;
- ser breve;
- no distraer;
- respetar preferencias de movimiento reducido;
- evitar parpadeos;
- no bloquear contenido.

Debe considerarse:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Diseño responsive

Puntos de comprobación:

- teléfono pequeño;
- teléfono grande;
- tableta;
- Chromebook;
- computador;
- zoom del navegador.

No se deben crear diseños que dependan exclusivamente de pasar el cursor.

---

## Formularios

En la primera fase no deben existir formularios con envío.

Cuando se utilicen elementos visualmente similares a formularios para demostraciones, deben:

- indicar que son simulaciones;
- no recopilar información;
- no almacenar;
- no solicitar datos personales.

---

## Impresión

Las actividades descargables o imprimibles deben:

- utilizar fondos claros;
- evitar consumo innecesario de tinta;
- mantener títulos;
- mostrar instrucciones;
- incluir espacio suficiente;
- conservar advertencias de privacidad;
- evitar elementos interactivos sin explicación.

---

## Estados de componentes

Cada componente interactivo debe considerar:

- normal;
- hover;
- foco;
- activo;
- deshabilitado;
- error;
- vacío.

---

## Contenido de ejemplo

Todo contenido utilizado en prototipos debe ser:

- ficticio;
- general;
- apropiado para la edad;
- libre de nombres reales;
- revisado.

---

## Requisitos mínimos de accesibilidad

- idioma de página;
- HTML semántico;
- encabezados ordenados;
- foco visible;
- navegación con teclado;
- contraste suficiente;
- textos alternativos;
- botones con nombres claros;
- regiones dinámicas anunciadas;
- tamaños táctiles adecuados;
- contenido comprensible;
- no depender solo del color.

---

## Implementación técnica inicial

Tecnologías recomendadas:

```text
HTML
CSS
JavaScript
JSON local
```

Debe evitarse añadir dependencias innecesarias.

La complejidad técnica debe responder a una necesidad real.

---

## Tokens futuros

Cuando se implemente el CSS, pueden definirse variables:

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f7f8;
  --color-text: #1f2933;
  --color-text-muted: #52606d;
  --color-primary: #155e75;
  --color-primary-hover: #0e4f63;
  --color-border: #cbd5e1;
  --color-focus: #b45309;

  --radius-small: 0.375rem;
  --radius-medium: 0.75rem;
  --radius-large: 1.25rem;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
}
```

Los valores son referencias iniciales y deben validarse antes de considerarse definitivos.

---

## Criterio de actualización

Este documento debe actualizarse cuando cambien:

- identidad visual;
- componentes;
- navegación;
- estructura de páginas;
- criterios de accesibilidad;
- paleta;
- tipografía;
- tecnologías;
- resultados de pruebas de usabilidad.

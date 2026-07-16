# Despliegue

## Propósito

Este documento explica cómo ejecutar, verificar, publicar y mantener el recurso web de **Voces que Restauran**.

La estrategia inicial utiliza:

- archivos estáticos;
- carpeta `docs/`;
- GitHub;
- GitHub Pages.

Debe utilizarse junto con:

```text
README.md
docs/README.md
docs/TECHNICAL_ARCHITECTURE.md
docs/IMPLEMENTATION_PLAN.md
docs/TESTING_PLAN.md
PRIVACY.md
ACCESSIBILITY.md
CHANGELOG.md
```

---

## Alcance

Este procedimiento corresponde a un recurso estático construido con:

```text
HTML
CSS
JavaScript
JSON
```

No incluye:

- servidor de aplicaciones;
- backend;
- base de datos;
- autenticación;
- variables secretas;
- API externa;
- integración directa con IA.

---

## Estructura de publicación

GitHub Pages publicará el contenido de:

```text
docs/
```

La carpeta contendrá:

```text
docs/
├── index.html
├── 404.html
├── about/
├── language/
├── moments/
├── resources/
├── teacher-guide/
├── assets/
├── css/
├── js/
└── data/
```

Los archivos Markdown de planificación ubicados en `docs/` forman parte del repositorio, pero no necesariamente de la navegación pública.

---

# Preparación local

## Requisitos

Se necesita:

- un navegador;
- acceso al repositorio;
- Python para el servidor local y las validaciones;
- GitHub Codespaces o un entorno local equivalente.

---

## Abrir GitHub Codespaces

Desde el repositorio:

1. seleccionar **Code**;
2. abrir **Codespaces**;
3. seleccionar **Create codespace on main**;
4. esperar la apertura del entorno;
5. abrir la terminal.

La terminal debe mostrar una ruta similar a:

```text
/workspaces/Voces-que-Restauran
```

---

## Verificar la ubicación

Ejecutar:

```bash
pwd
```

Después:

```bash
ls
```

Deben aparecer archivos como:

```text
README.md
PROJECT_BRIEF.md
docs
knowledge
```

---

# Validación previa de datos

## Archivo principal

Ejecutar:

```bash
python -m json.tool knowledge/data/unit-content.json
```

## Copia pública

Cuando exista:

```bash
python -m json.tool docs/data/unit-content.json
```

## Comparación

```bash
diff knowledge/data/unit-content.json docs/data/unit-content.json
```

Si no aparece salida, los archivos son iguales.

---

## Copiar el JSON

Desde la raíz:

```bash
mkdir -p docs/data
cp knowledge/data/unit-content.json docs/data/unit-content.json
```

En PowerShell:

```powershell
New-Item -ItemType Directory -Force docs/data
Copy-Item knowledge/data/unit-content.json docs/data/unit-content.json
```

La copia no debe modificarse de manera independiente.

---

# Ejecución local

## Opción desde la raíz

Ejecutar:

```bash
python -m http.server 8000
```

Abrir:

```text
http://localhost:8000/docs/
```

## Opción desde `docs/`

Ejecutar:

```bash
cd docs
python -m http.server 8000
```

Abrir:

```text
http://localhost:8000/
```

---

## Por qué se necesita un servidor

Abrir directamente:

```text
file:///...
```

puede producir errores al cargar archivos JSON mediante `fetch`.

El servidor local permite simular mejor la publicación web.

---

# Revisión local

Antes de publicar, comprobar:

- inicio;
- navegación;
- momentos;
- sesiones;
- lenguaje;
- recursos;
- guía docente;
- acerca del proyecto;
- privacidad;
- 404;
- carga de JSON;
- rutas relativas;
- impresión;
- móvil;
- teclado.

---

## Consola

Abrir las herramientas de desarrollo del navegador y comprobar que no existan:

- errores de JavaScript;
- archivos no encontrados;
- errores de JSON;
- rutas incorrectas;
- recursos bloqueados.

Las advertencias deben revisarse, aunque no todas sean críticas.

---

## Red

En la pestaña de red, comprobar:

- carga de archivos locales;
- ausencia de servicios externos;
- ausencia de analítica;
- ausencia de fuentes externas;
- ausencia de datos transmitidos.

---

# Preparación del commit

## Revisar cambios

```bash
git status
```

## Revisar diferencias

```bash
git diff
```

## Añadir archivos

```bash
git add docs/
```

También pueden añadirse archivos relacionados:

```bash
git add README.md ROADMAP.md CHANGELOG.md DESIGN_DECISIONS.md
```

## Confirmar

Ejemplo:

```bash
git commit -m "Prepare initial static website deployment"
```

## Publicar cambios

```bash
git push
```

---

# Configuración de GitHub Pages

En GitHub Web:

1. abre el repositorio;
2. selecciona **Settings**;
3. abre **Pages**;
4. en **Build and deployment**, selecciona:

```text
Source: Deploy from a branch
```

5. selecciona:

```text
Branch: main
```

6. selecciona:

```text
Folder: /docs
```

7. pulsa **Save**.

GitHub comenzará el proceso de publicación.

---

## URL del sitio

La URL normalmente tendrá una estructura similar a:

```text
https://USUARIO.github.io/REPOSITORIO/
```

La URL exacta debe confirmarse en la sección **Pages**.

No debe escribirse como definitiva en el README antes de verificarla.

---

# Verificación del despliegue

Después de publicar:

1. abrir la URL;
2. recargar;
3. abrir herramientas del navegador;
4. revisar consola;
5. revisar red;
6. probar enlaces;
7. probar rutas profundas;
8. probar móvil;
9. probar teclado;
10. probar 404.

---

## Rutas relativas

GitHub Pages publica normalmente el repositorio dentro de una subruta.

Ejemplo:

```text
/Voces-que-Restauran/
```

Por eso deben evitarse rutas que comiencen con `/` cuando apunten a archivos internos.

### Evitar

```html
<a href="/moments/index.html">Momentos</a>
```

Esta ruta intentaría abrir el contenido desde la raíz completa del dominio.

### Preferir desde `docs/index.html`

```html
<a href="moments/index.html">Momentos</a>
```

### Preferir desde `docs/moments/moment-1.html`

```html
<a href="../index.html">Inicio</a>
```

---

## Recursos CSS

Desde:

```text
docs/index.html
```

usar:

```html
<link rel="stylesheet" href="css/base.css" />
```

Desde:

```text
docs/moments/moment-1.html
```

usar:

```html
<link rel="stylesheet" href="../css/base.css" />
```

Desde:

```text
docs/moments/sessions/session-01.html
```

usar:

```html
<link rel="stylesheet" href="../../css/base.css" />
```

Todas las rutas deben probarse en la URL publicada.

---

# Rutas del JSON

Desde una página en:

```text
docs/moments/
```

la ruta puede ser:

```javascript
const DATA_URL = "../data/unit-content.json";
```

Desde:

```text
docs/moments/sessions/
```

puede ser:

```javascript
const DATA_URL = "../../data/unit-content.json";
```

La ruta definitiva depende de la estructura aprobada.

---

# Archivos y nombres

GitHub Pages distingue mayúsculas y minúsculas.

Estos archivos son diferentes:

```text
Moment-1.html
moment-1.html
```

Se utilizará:

- minúsculas;
- guiones;
- extensiones explícitas;
- nombres estables.

Ejemplo:

```text
restorative-questions.html
key-expressions.html
unit-content.json
```

---

# Página 404

El archivo debe ubicarse en:

```text
docs/404.html
```

Debe incluir:

- título;
- mensaje;
- enlace al inicio;
- enlace a momentos;
- navegación básica;
- aviso de prototipo.

Debe probarse con una dirección inexistente.

Ejemplo:

```text
https://USUARIO.github.io/REPOSITORIO/no-existe
```

---

# Caché

Después de publicar cambios, el navegador puede mostrar una versión anterior.

Prueba:

- recarga completa;
- ventana privada;
- limpieza de caché;
- otro navegador.

En Windows, una recarga completa puede realizarse con:

```text
Ctrl + F5
```

---

# GitHub Pages y archivos Markdown

Los documentos Markdown dentro de `docs/` pueden quedar accesibles mediante la URL si alguien conoce la ruta.

Por esta razón, nunca deben contener:

- información privada;
- datos de estudiantes;
- secretos;
- credenciales;
- información institucional reservada.

Toda la documentación del repositorio debe considerarse potencialmente pública.

---

# Privacidad antes del despliegue

Comprobar ausencia de:

```text
localStorage
sessionStorage
document.cookie
IndexedDB
analytics
tracking
tokens
passwords
studentName
studentId
caseReport
```

También revisar:

- HTML;
- JavaScript;
- JSON;
- documentos;
- imágenes;
- archivos descargables;
- historial reciente de commits.

---

# Accesibilidad antes del despliegue

Comprobar:

- enlace para saltar;
- foco visible;
- navegación con teclado;
- idioma;
- encabezados;
- nombres accesibles;
- contraste;
- zoom;
- móvil;
- texto alternativo;
- movimiento reducido;
- contenido dinámico;
- impresión.

---

# Contenido antes del despliegue

Comprobar:

- pregunta orientadora;
- duración;
- momentos;
- sesiones;
- traducciones;
- privacidad;
- alcance;
- autoría;
- ausencia de contenido provisional no identificado;
- enlaces a recursos existentes.

Los recursos no disponibles deben mostrar un estado claro, no un enlace roto.

---

# Publicación de una versión

Antes de declarar una versión:

1. completar pruebas;
2. corregir hallazgos críticos;
3. actualizar `CHANGELOG.md`;
4. actualizar `ROADMAP.md`;
5. actualizar `README.md`;
6. confirmar URL;
7. registrar versión;
8. probar nuevamente.

---

## Etiquetas de versión

Cuando el proyecto esté preparado, puede crearse una etiqueta.

Ejemplo:

```bash
git tag -a v0.1.0 -m "Initial static prototype"
git push origin v0.1.0
```

No es necesario crear etiquetas durante cada cambio documental.

---

# Estrategia de versiones

Mientras el recurso esté en desarrollo:

```text
0.x.x
```

Ejemplos:

```text
0.1.0 — estructura inicial
0.2.0 — momentos y sesiones
0.3.0 — lenguaje y recursos
0.4.0 — pruebas y publicación
```

Una versión `1.0.0` debería reservarse para una versión:

- completa respecto al alcance;
- probada;
- documentada;
- preparada para implementación pedagógica.

---

# Reversión

## Reversión mediante GitHub

Si una publicación genera errores:

1. identificar el commit estable anterior;
2. revisar los cambios;
3. revertir el commit problemático;
4. publicar la reversión;
5. comprobar GitHub Pages;
6. documentar el incidente.

Desde la terminal:

```bash
git log --oneline
```

Después:

```bash
git revert IDENTIFICADOR_DEL_COMMIT
```

Finalmente:

```bash
git push
```

Se recomienda `git revert` en lugar de reescribir el historial compartido.

---

## No utilizar sin comprender

Evitar en la rama principal:

```bash
git reset --hard
git push --force
```

Estas operaciones pueden eliminar o sobrescribir historial.

---

# Fallos frecuentes

## La página aparece sin estilos

Posibles causas:

- ruta CSS incorrecta;
- diferencias de mayúsculas;
- archivo no subido;
- ubicación incorrecta.

## El JSON no carga

Posibles causas:

- ruta incorrecta;
- JSON inválido;
- archivo ausente;
- página abierta mediante `file://`;
- propiedad esperada inexistente.

## Funciona localmente, pero no en GitHub Pages

Posibles causas:

- ruta absoluta;
- diferencias entre mayúsculas;
- archivos no incluidos;
- subruta del repositorio;
- caché.

## La página 404 no funciona como se espera

GitHub Pages puede manejar las rutas de manera diferente según la URL. Debe probarse desde la publicación real.

## El menú no funciona

Comprobar:

- script cargado;
- ruta del JavaScript;
- tipo `module`;
- identificadores coincidentes;
- errores de consola.

---

# Revisión posterior al despliegue

Después de cada publicación significativa:

- abrir el inicio;
- recorrer las páginas prioritarias;
- probar sesión 1 y 16;
- probar una ruta inexistente;
- probar recursos;
- revisar móvil;
- revisar teclado;
- revisar consola;
- revisar red;
- comprobar privacidad.

---

# Monitoreo sin analítica

La fase actual no utilizará herramientas de analítica.

La calidad puede revisarse mediante:

- pruebas manuales;
- observaciones docentes;
- retroalimentación general;
- registros anonimizados;
- issues del repositorio sin datos personales.

No debe añadirse analítica únicamente para contar visitas.

---

# Reporte de errores

Los errores técnicos pueden registrarse como issues sin incluir:

- datos de estudiantes;
- capturas con información privada;
- relatos;
- nombres;
- URL con datos;
- documentos sensibles.

Formato sugerido:

```text
Título:

Versión:

Página:

Dispositivo:

Navegador:

Pasos:

Resultado esperado:

Resultado obtenido:

Impacto:

Captura anonimizada:
```

---

# Lista previa al despliegue

## Datos

- [ ] JSON principal válido.
- [ ] JSON público válido.
- [ ] Ambos archivos sincronizados.
- [ ] No existen datos personales.
- [ ] Las relaciones son válidas.

## Sitio

- [ ] El inicio existe.
- [ ] La navegación funciona.
- [ ] Las rutas relativas funcionan.
- [ ] El CSS carga.
- [ ] El JavaScript carga.
- [ ] Los recursos existen.
- [ ] La página 404 existe.

## Accesibilidad

- [ ] Navegación con teclado.
- [ ] Foco visible.
- [ ] Encabezados válidos.
- [ ] Contraste revisado.
- [ ] Zoom revisado.
- [ ] Móvil revisado.
- [ ] Textos alternativos.
- [ ] Movimiento reducido.

## Privacidad

- [ ] Sin cuentas.
- [ ] Sin almacenamiento.
- [ ] Sin cookies.
- [ ] Sin analítica.
- [ ] Sin servicios externos.
- [ ] Sin formularios de relatos.
- [ ] Sin información identificable.

## Documentación

- [ ] README actualizado.
- [ ] ROADMAP actualizado.
- [ ] CHANGELOG actualizado.
- [ ] Decisiones registradas.
- [ ] Pruebas documentadas.

---

# Lista posterior al despliegue

- [ ] La URL pública abre.
- [ ] El inicio carga.
- [ ] Los estilos cargan.
- [ ] Los scripts cargan.
- [ ] El JSON carga.
- [ ] Las rutas profundas funcionan.
- [ ] La página 404 funciona.
- [ ] No hay errores críticos.
- [ ] No hay solicitudes externas inesperadas.
- [ ] Funciona en móvil.
- [ ] Funciona con teclado.
- [ ] La URL está registrada en el README.

---

## Criterio de finalización

El despliegue se considera completado cuando:

- GitHub Pages publica desde `docs/`;
- la URL ha sido confirmada;
- las páginas prioritarias funcionan;
- los datos cargan;
- no existen hallazgos críticos;
- la privacidad fue revisada;
- la accesibilidad básica fue comprobada;
- la documentación está sincronizada.

---

## Criterio de actualización

Este documento debe actualizarse cuando:

- cambia la carpeta publicada;
- cambia la rama;
- cambia la estructura de rutas;
- se adopta otro sistema de despliegue;
- se automatizan validaciones;
- se incorpora una acción de GitHub;
- cambia la política de versiones;
- se identifica un fallo recurrente.

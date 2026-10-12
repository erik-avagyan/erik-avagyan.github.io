# Erik Avagyan Portfolio

Portfolio web creado con Angular 19, componentes standalone y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run watch
```

La aplicación estará disponible en `http://localhost:4200/`. El servidor observa cambios y recarga el navegador automáticamente. También puedes usar `npm start`, que inicia el mismo servidor. Para generar la versión de producción, ejecuta `npm run build`.

## Publicar en GitHub Pages

El proyecto incluye el comando `npm run deploy`. Genera el build optimizado de producción y publica el contenido de `dist/portfolio/browser` en la rama `main`. La web se sirve desde la raíz del dominio personal `https://erik-avagyan.github.io/`, por eso el build usa `--base-href /`.

### Configuración inicial

1. En GitHub, abre **Settings → Pages** del repositorio `erik-avagyan/erik-avagyan.github.io`.
2. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/(root)`.
3. Asegúrate de tener permisos para publicar en el repositorio y de que Git esté autenticado en este equipo.

### En cada publicación

Desde la rama que contiene el código fuente (actualmente `develop`):

```bash
git pull
npm install
npm run build
npm run deploy
```

`npm run build` es una comprobación previa opcional; `npm run deploy` ya ejecuta el build de producción antes de publicar. Al terminar, GitHub Pages sirve la actualización en `https://erik-avagyan.github.io/`; puede tardar unos minutos en estar disponible.

**Importante:** `npm run deploy` publica el resultado compilado en `main`. Mantén el código fuente en `develop` (o en otra rama fuente) y no uses `main` para trabajar en el código de la aplicación, porque esa rama se reserva para los archivos publicados.

## Estructura

- `src/app/components/`: componentes independientes para cada sección, navegación y modales.
- `src/app/data/portfolio.data.ts`: datos de experiencia, formación, proyectos y tecnologías.
- `src/app/models/portfolio.models.ts`: tipos compartidos de esos datos.
- `src/app/components/languages-section/`: sección destacada de idiomas hablados.

Los enlaces de GitHub y LinkedIn, el correo y el teléfono se han actualizado con los datos del CV.

## Foto y CV

Coloca la fotografía en `public/profile.png` y el documento en `public/cv.pdf`. La fotografía se muestra junto a la presentación y el CV se representa dentro de la vista previa (también en móviles), con opciones para abrir el PDF y descargarlo. `public/pdf.worker.min.mjs` es el worker de PDF.js necesario para renderizar las páginas.

## Idioma y tema

Usa los controles de la barra superior para cambiar entre español e inglés y entre los temas oscuro y claro. Ambas preferencias se guardan en el navegador.

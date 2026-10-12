# Erik Avagyan Portfolio

Portfolio web creado con Angular 19, componentes standalone y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run watch
```

La aplicación estará disponible en `http://localhost:4200/`. El servidor observa cambios y recarga el navegador automáticamente. También puedes usar `npm start`, que inicia el mismo servidor. Para generar la versión de producción, ejecuta `npm run build`.

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

# Ray Ng

Personal website at https://rayyngg.github.io/, built with HTML, CSS and a small optional JavaScript helper. No build step or runtime dependencies.

## Preview

Open index.html directly, or serve this directory with python -m http.server 8000 and visit http://localhost:8000.

## Editing

- index.html: introduction, projects, experience, community, education and contact details.
- hall-life.html: hall introduction, nine photos and their original captions.
- hall-life.js: manual slideshow, thumbnail selection, and keyboard navigation.
- assets/hall/: the nine supplied hall photos, in their original order.
- styles.css: layout, colours, typography, mobile and print styles.
- script.js: optional print button.
- assets/favicon.svg: browser icon.

The October 2026 update follows the supplied updated résumé PDF. Copy is shortened and written in the first person for the web. The separate My Hall Life page uses the introduction, photos and captions supplied by Ray. Project repositories and demo links are omitted because none were supplied or verified. The original PDF and phone number are not included in the public site.

The album has previous/next buttons and clickable thumbnails, with no autoplay. When the gallery has keyboard focus, Left/Right browse and Home/End select the first/last photo. With JavaScript disabled, all nine photos and captions are shown in order. Print styles include the full album.

The page remains readable and navigable without JavaScript. It uses system fonts, no trackers and no third-party assets. Browser printing provides a text-focused résumé layout.

## Publishing

This is the existing rayyngg/rayyngg.github.io repository. Commit and push changes to its main branch; GitHub Pages serves the repository root. Keep .nojekyll in place.

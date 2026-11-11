import { defineConfig } from 'astro/config';

// Demo publicado no GitHub Pages como site de projeto:
// https://tchesites.github.io/demo-lume-modas/
// `base` é o nome do repositório; todo link interno passa por
// `src/utils/url.js`.
export default defineConfig({
  site: 'https://tchesites.github.io',
  base: '/demo-lume-modas',
});

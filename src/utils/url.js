// Prefixa caminhos internos com a base do site (`import.meta.env.BASE_URL`).
//
// Demo publicado no GitHub Pages em
// `https://tchesites.github.io/demo-lume-modas/`, então todo link interno
// precisa do prefixo `/demo-lume-modas`. Use sempre `url('/caminho/')` em
// `href` e `src`.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

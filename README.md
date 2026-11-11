# Lume Modas (demo)

- **Cliente:** Lume Modas — *marca fictícia (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** [`tchesites/demo-lume-modas`](https://github.com/tchesites/demo-lume-modas) — `git@github.com-tchesites:tchesites/demo-lume-modas.git`
- **Como rodar:** `npm install` e `npm run dev` (`http://localhost:4321/demo-lume-modas/`)

## Sobre

Demo de loja de moda baseado na estrutura do site da **Briza Elô Modas**, com
identidade, logo, fotos e dados totalmente fictícios. O objetivo é servir como
modelo de portfólio para o serviço de site institucional e base para novos
clientes do segmento de moda.

**Nada aqui é dado real:** nome, endereço, telefone, Instagram, avaliações e
depoimentos são inventados. O rodapé traz o aviso de projeto demonstrativo.

## Dados fictícios

- **Endereço:** Rua Sete de Setembro, 820 — Centro, Canoas/RS — 92010-000
- **Horário:** segunda a sexta, 9h–12h e 13h30–18h30; sábado, 9h–12h e 13h–16h;
  domingo fechado
- **WhatsApp:** (51) 90000-0000
- **Instagram:** [@lume.modas](https://www.instagram.com/lume.modas/)
- **Avaliações:** 4,9 · 187 depoimentos (fictícios)

## Identidade visual

- **Paleta:** preto laca `#0A0908`, ouro `#C2A15F`, creme `#F2EBDC` e terracota
  `#B2542E` como acento.
- **Logo:** monograma **L** com um losango de luz (o “lume”), em ouro sobre preto.
- **Tipografia:** Bodoni Moda (títulos) + Jost (texto), self-hosted.
- **Direção:** laca preta, ouro e creme, com fotos de boutique em luz quente.
- **Fotos:** Unsplash, com recortes editoriais:
  - `interior.jpg` / `fachada.jpg` — `photo-1567401893414-76b7b1e5a7a5`
  - `manequins.jpg` — `photo-1445205170230-053b83016050`
  - `feminino.jpg` — `photo-1558769132-cb1aea458c5e`
  - `masculino.jpg` — `photo-1489987707025-afc232f7ea0f`
  - `provador.jpg` — `photo-1441984904996-e0b6ba687e04`

> `fachada.jpg` é um recorte do interior da boutique; não é uma fachada real.

## Estrutura

```
demo-lume-modas/
├── astro.config.mjs
├── package.json
├── .github/workflows/deploy.yml
├── src/
│   ├── assets/fonts/       # Bodoni Moda + Jost
│   ├── assets/fotos/       # fotos do demo
│   ├── components/         # Header, Footer, Monogram, WhatsAppFloat
│   ├── data/loja.js        # dados, categorias, tendências e depoimentos fictícios
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   ├── styles/             # tokens.css + global.css
│   └── utils/url.js
├── public/
│   ├── logo/               # monograma L
│   ├── favicon.svg / .png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── assets/logo/            # fonte do monograma
└── docs/                   # registro do demo
```

## Deploy

GitHub Pages → `https://tchesites.github.io/demo-lume-modas/`.

- Workflow: `.github/workflows/deploy.yml` (`checkout@v7` →
  `withastro/action@v6` → `deploy-pages@v5`).
- No GitHub: *Settings → Pages → Source = **GitHub Actions***.
- `astro.config.mjs` com `site: 'https://tchesites.github.io'` e
  `base: '/demo-lume-modas'`. Todo link interno passa por `url()`.

## Decisões

1. **Mesma estrutura da Briza, identidade nova.** O layout, a paleta e a
   tipografia foram mantidos; nome, logo, fotos e dados mudaram.
2. **Monograma L + losango.** Uma marca simples, que funciona no header, no
   favicon e no avatar.
3. **Fotos de banco.** Unsplash, com tratamento de recorte; o demo não usa
   imagens de clientes reais.
4. **Depoimentos ilustrativos.** Sem `aggregateRating` no JSON-LD para não
   simular avaliações reais em resultado de busca.
5. **Aviso de demo no rodapé.** Marca, dados, fotos e depoimentos fictícios.

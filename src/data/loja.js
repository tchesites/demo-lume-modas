// Dados fictícios da Lume Modas — projeto demonstrativo da Tchê Sites.
// Nome, endereço, telefone, redes, avaliações e depoimentos são inventados.
// O rodapé e o README deixam claro que é um demo.

export const loja = {
  nome: 'Lume Modas',
  nomeCurto: 'Lume',
  monograma: 'L',
  tagline: 'A elegância que acende o seu estilo.',
  apoio: 'Moda para a vida real.',
  descricao:
    'Moda feminina e masculina, do P ao plus size, no Centro de Canoas/RS.',
  endereco: {
    rua: 'Rua Sete de Setembro, 820',
    bairro: 'Centro',
    cidade: 'Canoas',
    uf: 'RS',
    cep: '92010-000',
    completo: 'Rua Sete de Setembro, 820 — Centro, Canoas/RS',
  },
  telefone: {
    exibicao: '(51) 90000-0000',
    numero: '5551900000000',
  },
  instagram: {
    handle: '@lume.modas',
    url: 'https://www.instagram.com/lume.modas/',
    seguidores: '12 mil',
  },
  facebook: {
    nome: 'Lume Modas',
    url: 'https://www.facebook.com/lume.modas',
  },
  google: {
    nota: 4.9,
    total: 187,
    url: 'https://www.google.com/maps/search/?api=1&query=Rua+Sete+de+Setembro,+820+-+Centro,+Canoas+-+RS',
  },
  geo: {
    latitude: -29.9177,
    longitude: -51.1839,
  },
  horarios: [
    { dia: 'Segunda a sexta', horario: '9h–12h · 13h30–18h30' },
    { dia: 'Sábado', horario: '9h–12h · 13h–16h' },
    { dia: 'Domingo', horario: 'Fechado' },
  ],
};

export const whatsappLink = (mensagem) =>
  `https://wa.me/${loja.telefone.numero}?text=${encodeURIComponent(mensagem)}`;

export const categorias = [
  {
    nome: 'Feminino',
    descricao:
      'Vestidos, conjuntos e alfaiataria leve para o dia a dia e para as ocasiões que pedem mais.',
    mensagem: 'Olá! Vim pelo site da Lume e quero ver as novidades do feminino.',
    variacao: 'foto',
    imagem: 'feminino',
    alt: 'Manequins femininos com blusa de estampa de onça, saia de couro e blusa terracota',
  },
  {
    nome: 'Masculino',
    descricao: 'Camisas, polos e calças com caimento certo, sem exagero.',
    mensagem: 'Olá! Vim pelo site da Lume e quero ver as novidades do masculino.',
    variacao: 'foto',
    imagem: 'masculino',
    alt: 'Manequins masculinos com polo laranja, calça preta e colete terracota',
  },
  {
    nome: 'Plus size',
    descricao:
      'Do P ao plus size, com modelagem que respeita o corpo e valoriza o que você tem de melhor.',
    mensagem: 'Olá! Vim pelo site da Lume e quero ver as opções plus size.',
    variacao: 'terracota',
  },
  {
    nome: 'Acessórios',
    descricao: 'Bolsas, calçados e cintos que fecham o look.',
    mensagem: 'Olá! Vim pelo site da Lume e quero ver os acessórios.',
    variacao: 'creme',
  },
];

export const tendencias = [
  {
    nome: 'Mix de estampas',
    texto:
      'Xadrez, bolinhas e florais na mesma produção. A combinação deixa de ser desafio e vira forma de expressão.',
  },
  {
    nome: 'Estampas maxi',
    texto:
      'Desenhos amplos, formas marcantes e muita personalidade. A peça vira o destaque da produção.',
  },
  {
    nome: 'Bordados',
    texto:
      'Detalhes artesanais que dão charme e acabamento — do discreto ao elaborado, sem perder a leveza.',
  },
];

export const depoimentos = [
  {
    texto:
      'Achei a Lume por acaso e virei cliente. As peças vestem bem de verdade e o atendimento é atencioso.',
    autor: 'Camila R.',
  },
  {
    texto:
      'Tem opção para mim e para o meu marido. Saí com três peças e um presente.',
    autor: 'Fernanda M.',
  },
  {
    texto: 'Loja organizada, provador confortável e peças de qualidade.',
    autor: 'Lucas P.',
  },
];

export const numeros = [
  { valor: '4,9', rotulo: 'nota em avaliações' },
  { valor: '187', rotulo: 'depoimentos de clientes' },
  { valor: '12 mil', rotulo: 'seguidores no Instagram' },
  { valor: 'P–Plus', rotulo: 'tamanhos na arara' },
];

export interface iUser {
  avatar?: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  isLogged?: boolean;
}

export const Users: iUser[] = [
  {
    avatar: 'https://github.com/rickson-lima.png',
    name: 'Rickson Lima',
    cpf: '123.456.789-00',
    email: 'hello@world.com',
    password: '123',
  },
];

export interface iProducts {
  id: number;
  category: 'Tradicional' | 'Gourmet' | 'Sopas';
  urlImage: string;
  title: string;
  description: string;
  price?: number;
  qt: number;
}

export const TradicionalsCollection: iProducts[] = [
  {
    id: 0,
    category: 'Tradicional',
    urlImage: 'https://coca-colafemsa.com/wp-content/uploads/2020/02/2-30.png',
    title: 'Isca de carne',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 4,
    qt: 0
  },
  {
    id: 1,
    category: 'Tradicional',
    urlImage:
      'https://coolicias.ao/wp-content/uploads/2020/02/Receita-de-Suco-de-Maracuj%C3%A1-Com-Laranja.jpg',
    title: 'Carne moída',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 2.5,
    qt: 0
  },
  {
    id: 2,
    category: 'Tradicional',
    urlImage: 'https://miro.medium.com/max/1200/0*Uzt4O_O-wO_PutKH.jpg',
    title: 'Assado de panela',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 0,
    qt: 0
  },
  {
    id: 3,
    category: 'Tradicional',
    urlImage:
      'https://images.tcdn.com.br/img/img_prod/705208/copo_cerveja_caldereta_350ml_37797293_1_20201123151545.jpg',
    title: 'Káfta  ao molho de tomate',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 3,
    qt: 0
  },
  {
    id: 4,
    category: 'Tradicional',
    urlImage:
      'https://s2.glbimg.com/a3kQ_qIqjxZZj18gUo2_U05NiBY=/0x0:500x375/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/17/18/09/811/limonada_suica_10.jpg',
    title: 'Filé de pirarucu',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0
  },
  {
    id: 5,
    category: 'Tradicional',
    urlImage: 'https://saude.abril.com.br/wp-content/uploads/2017/07/iogurte-skyr.jpg',
    title: 'Filé de aruanã',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0
  },
  {
    id: 6,
    category: 'Tradicional',
    urlImage: 'https://saude.abril.com.br/wp-content/uploads/2017/07/iogurte-skyr.jpg',
    title: 'Coxa de frango assada',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0
  },
  {
    id: 7,
    category: 'Tradicional',
    urlImage: 'https://noiteemfoco.campinas.br/wp-content/uploads/2020/08/CARD%C3%81PIO-PRATOS-INDIVIDUAL-FIL%C3%89-DE-FRANGO.jpg',
    title: 'Peito de frango grelhado',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0
  },
  {
    id: 8,
    category: 'Tradicional',
    urlImage: 'https://saude.abril.com.br/wp-content/uploads/2017/07/iogurte-skyr.jpg',
    title: 'Frango desfiado',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
];

export const GourmetsCollection: iProducts[] = [
  {
    id: 0,
    category: 'Gourmet',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Filé mignon ao molho madeira',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    qt: 1
  },
  {
    id: 1,
    category: 'Gourmet',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Medalhão de filé com bacon',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    qt: 0
  },
  {
    id: 2,
    category: 'Gourmet',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Bife a rolê',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    qt: 0
  },
  {
    id: 3,
    category: 'Gourmet',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Frango à parmegiana',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    qt: 0
  },
  {
    id: 4,
    category: 'Gourmet',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Salada de bacalhau',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    qt: 0
  },
  {
    id: 5,
    category: 'Gourmet',
    urlImage:
      'https://taipas.to.gov.br/wp-content/plugins/all-in-one-video-gallery/public/assets/images/placeholder-image.png',
    title: 'Costela de tambaqui com jambu',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    qt: 0
  },
  {
    id: 6,
    category: 'Gourmet',
    urlImage:
      'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/5eb99042-90e4-41e9-a472-2801ac1e08e8/5eb99042-c024-44c9-8414-2801ac1e08e8.jpg',
    title: 'Salada de feijão com carne seca',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 5,
    qt: 0
  },
  {
    id: 7,
    category: 'Gourmet',
    urlImage: 'https://paradisepizzaria.com.br/site/img/produtos/281485_1_g.png',
    title: 'Lasanha de berinjela',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0
  },
  {
    id: 8,
    category: 'Gourmet',
    urlImage: 'https://paradisepizzaria.com.br/site/img/produtos/281485_1_g.png',
    title: 'Lasanha a bolonhesa',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0
  },
  {
    id: 9,
    category: 'Gourmet',
    urlImage: 'https://paradisepizzaria.com.br/site/img/produtos/281485_1_g.png',
    title: 'Yakisoba',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0
  },
  {
    id: 10,
    category: 'Gourmet',
    urlImage: 'https://paradisepizzaria.com.br/site/img/produtos/281485_1_g.png',
    title: 'Costela de tambaqui com arroz de tacacá',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0
  },
  {
    id: 11,
    category: 'Gourmet',
    urlImage: 'https://noiteemfoco.campinas.br/wp-content/uploads/2020/08/CARD%C3%81PIO-PRATOS-INDIVIDUAL-FIL%C3%89-DE-FRANGO.jpg',
    title: 'Filé de peito de frango com creme de cebola e laranja',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0
  },
  {
    id: 12,
    category: 'Gourmet',
    urlImage: 'https://noiteemfoco.campinas.br/wp-content/uploads/2020/08/CARD%C3%81PIO-PRATOS-INDIVIDUAL-FIL%C3%89-DE-FRANGO.jpg',
    title: 'Filé de peito de frango com bacon ao molho barbecue',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
  },
  
];

export const SopasCollection: iProducts[] = [
  {
    id: 0,
    category: 'Sopas',
    urlImage:
      'https://thumb-cdn.soluall.net/prod/shp_products/sp1280fw/5eb99042-90e4-41e9-a472-2801ac1e08e8/5eb99042-c024-44c9-8414-2801ac1e08e8.jpg',
    title: 'Sopa de legumes',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 5,
    qt: 0
  },
  {
    id: 1,
    category: 'Sopas',
    urlImage: 'https://paradisepizzaria.com.br/site/img/produtos/281485_1_g.png',
    title: 'Sopa de abóbora',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0
  },
  {
    id: 2,
    category: 'Sopas',
    urlImage: 'https://nutrimassasesalgados.com/wp-content/uploads/2020/05/MG_6884-copiar.jpg',
    title: 'Sopa de lentilha',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 6,
    qt: 0
  },
  {
    id: 3,
    category: 'Sopas',
    urlImage:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Salgado-Coxinha-PNG-1280x720.png',
    title: 'Sopa de feijão',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 2.5,
    qt: 0
  },
  {
    id: 4,
    category: 'Sopas',
    urlImage: 'https://img.estadao.com.br/resources/jpg/2/1/1487193579312.jpg',
    title: 'Sopa de abóbora com camarão',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
  },
];

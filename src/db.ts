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
  price: number;
  qt: number;
  active: boolean
}

export const Cart: iProducts[] = []

export const TradicionalsCollection: iProducts[] = [
  {
    id: 0,
    category: 'Tradicional',
    urlImage: 'src/assets/iscadecarne.png',
    title: 'Isca de carne',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 17.50,
    qt: 0, 
    active: true
  },
  {
    id: 1,
    category: 'Tradicional',
    urlImage: 'src/assets/carnemoidav2.png',
    title: 'Carne moída',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 20.5,
    qt: 0, 
    active: true
  },
  {
    id: 2,
    category: 'Tradicional',
    urlImage: 'src/assets/assadodepanela.png',
    title: 'Assado de panela',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 20,
    qt: 0, 
    active: true
  },
  {
    id: 3,
    category: 'Tradicional',
    urlImage: 'src/assets/kaftaaomolhodetomate.png',
    title: 'Káfta  ao molho de tomate',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 18,
    qt: 0, 
    active: true
  },
  {
    id: 4,
    category: 'Tradicional',
    urlImage: 'src/assets/filedepirarucu.png',
    title: 'Filé de pirarucu',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 20,
    qt: 0, 
    active: true
  },
  {
    id: 5,
    category: 'Tradicional',
    urlImage: 'src/assets/filedearuana.png',
    title: 'Filé de aruanã',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 6,
    category: 'Tradicional',
    urlImage: 'src/assets/coxadefrango.png',
    title: 'Coxa de frango assada',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 7,
    category: 'Tradicional',
    urlImage: 'src/assets/frangogrelhado.png',
    title: 'Peito de frango grelhado',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 8,
    category: 'Tradicional',
    urlImage: 'src/assets/frangodesfiado.png',
    title: 'Frango desfiado',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
];

export const GourmetsCollection: iProducts[] = [
  {
    id: 100,
    category: 'Gourmet',
    urlImage:
      'src/assets/filemignonaomolhomadeira.jpg',
    title: 'Filé mignon ao molho madeira',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 101,
    category: 'Gourmet',
    urlImage:
      'src/assets/mignon_bacon_ervas.jpg',
    title: 'Medalhão de filé com bacon',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 102,
    category: 'Gourmet',
    urlImage:
      'src/assets/bifearole.jpg',
    title: 'Bife a rolê',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 103,
    category: 'Gourmet',
    urlImage:
      'src/assets/fileaparmegiana.jpg',
    title: 'Frango à parmegiana',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 104,
    category: 'Gourmet',
    urlImage:
      'src/assets/saladadebacalhau.jpg',
    title: 'Salada de bacalhau',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 105,
    category: 'Gourmet',
    urlImage: 'src/assets/costelatambaquicomjambu.png',
    title: 'Costela de tambaqui com jambu',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15.50,
    qt: 0, 
    active: true
  },
  {
    id: 106,
    category: 'Gourmet',
    urlImage:
      'src/assets/saladadefeijaocomcarneseca.jpg',
    title: 'Salada de feijão com carne seca',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15,
    qt: 0, 
    active: true
  },
  {
    id: 107,
    category: 'Gourmet',
    urlImage: 'src/assets/lasanhadeberinjela.png',
    title: 'Lasanha de berinjela',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25.50,
    qt: 0, 
    active: true
  },
  {
    id: 108,
    category: 'Gourmet',
    urlImage: 'src/assets/lasanhabolonhesa.jpg',
    title: 'Lasanha a bolonhesa',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0, 
    active: true
  },
  {
    id: 109,
    category: 'Gourmet',
    urlImage: 'src/assets/yakisoba.jpeg',
    title: 'Yakisoba',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0, 
    active: true
  },
  {
    id: 110,
    category: 'Gourmet',
    urlImage: 'src/assets/costelatambaquicomarrozdetacaca.png',
    title: 'Costela de tambaqui com arroz de tacacá',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 25,
    qt: 0, 
    active: true
  },
  {
    id: 111,
    category: 'Gourmet',
    urlImage: 'src/assets/frangocomcremedecebola.png',
    title: 'Filé de peito de frango com creme de cebola e laranja',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15,
    qt: 0, 
    active: true
  },
  {
    id: 112,
    category: 'Gourmet',
    urlImage: 'src/assets/frangocommolhobarbecue.jpg',
    title: 'Filé de peito de frango com bacon ao molho barbecue',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 15,
    qt: 0, 
    active: true
  },
  
];

export const SopasCollection: iProducts[] = [
  {
    id: 200,
    category: 'Sopas',
    urlImage:
      'src/assets/sopav2.png',
    title: 'Sopa de legumes',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10.70,
    qt: 0, 
    active: true
  },
  {
    id: 201,
    category: 'Sopas',
    urlImage: 'src/assets/sopav2.png',
    title: 'Sopa de abóbora',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 202,
    category: 'Sopas',
    urlImage: 'src/assets/sopav2.png',
    title: 'Sopa de lentilha',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 203,
    category: 'Sopas',
    urlImage:
      'src/assets/sopav2.png',
    title: 'Sopa de feijão',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
  {
    id: 204,
    category: 'Sopas',
    urlImage: 'src/assets/sopav2.png',
    title: 'Sopa de abóbora com camarão',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    price: 10,
    qt: 0, 
    active: true
  },
];

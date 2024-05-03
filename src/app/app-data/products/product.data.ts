import { Product } from './product';

export class ProductData {
  public static products: Array<Product> = [
    {
      id: '1',
      title: 'Zapatos Dama',
      prices: { S: 355, M: 400 },
      photos: [
        'https://picsum.photos/id/21/3008/2008',
        'https://picsum.photos/id/21/3008/2008',
      ],
      description: 'Zapato dama casual',
      offerDiscount: 15,
    },
    {
      id: '2',
      title: 'Laptop MAC',
      prices: { S: 13243, M: 20984 },
      photos: [
        'https://picsum.photos/id/48/5000/3333',
        'https://picsum.photos/id/1/5000/3333',
      ],
      description: 'Laptop Mac 128 GB',
    },
    {
      id: '3',
      title: 'Taza',
      prices: { S: 56, M: 98 },
      photos: ['https://picsum.photos/id/30/1280/901'],
      description: 'Taza Diseño Cuba',
      offerDiscount: 10,
    },
    {
      id: '4',
      title: 'Tazas',
      prices: { S: 25, M: 45 },
      photos: [
        'https://picsum.photos/id/42/3456/2304',
        'https://picsum.photos/id/7/4728/3168',
      ],
      description: 'Tazas Vintage Oficina',
    },
    {
      id: '5',
      title: 'Conjunto Tenedores',
      prices: { S: 11, M: 63 },
      photos: ['https://picsum.photos/id/23/3456/2304'],
      description: 'Tenedores en conjunto 10 piezas.',
      offerDiscount: 10,
    },
    {
      id: '6',
      title: 'Conjunto Accesorios',
      prices: { S: 1200, M: 2300 },
      photos: [
        'https://picsum.photos/id/60/3456/2304',
        'https://picsum.photos/id/26/3456/2304',
      ],
      description: 'Conjunto de accesorios varios, lentes, reloj, audifonos.',
    },
    {
      id: '7',
      title: 'Libro lectura',
      prices: { S: 800 },
      photos: ['https://picsum.photos/id/24/3456/2304'],
      description: 'Libro lectura Finanzas ',
    },
    {
      id: '8',
      title: 'Cámara Fotográfica',
      prices: { S: 9, M: 19 },
      photos: [
        'https://picsum.photos/id/91/3456/2304',
        'https://picsum.photos/id/250/3456/2304',
        'https://picsum.photos/id/454/3456/2304',
      ],
      description: 'Cámara Nikon con lente de largo alcance',
    },
    {
      id: '9',
      title: 'Reloj Pared',
      prices: { S: 50 },
      photos: [
        'https://picsum.photos/id/175/3456/2304',
        'https://picsum.photos/id/357/3456/2304',
      ],
      description: 'Reloj pared vintage',
    },
    {
      id: '10',
      title: 'Tira de Focos Vintage',
      prices: { S: 210, M: 350 },
      photos: ['https://picsum.photos/id/195/3456/2304'],
      description: 'Focos Vintage the 10m o 15m',
    },
    {
      id: '11',
      title: 'Tetera',
      prices: { S: 120, M: 240 },
      photos: ['https://picsum.photos/id/225/3456/2304'],
      description: 'Tetera diferentes tamaños',
    },
    {
      id: '12',
      title: 'Lamparas',
      prices: { S: 13, M: 26 },
      photos: ['https://picsum.photos/id/232/3456/2304'],
      description: 'Lamparas para exteriores',
    },
    {
      id: '13',
      title: 'Mochila Viajera',
      prices: { S: 300 },
      photos: ['https://picsum.photos/id/342/3456/2304'],
      description:
        'Mochila viajera con amplio espacio y diferentes compartimentos',
    },
    {
      id: '14',
      title: 'Guitarra',
      prices: { S: 1500, M: 3000 },
      photos: ['https://picsum.photos/id/334/3456/2304'],
      description: 'Guitarra eléctrica',
    },
    {
      id: '15',
      title: 'Kit Herramientas',
      prices: { S: 16, M: 32 },
      photos: ['https://picsum.photos/id/491/3456/2304'],
      description:
        'Kit de herramientas que incluyen hacha, martillo, guantes y mucho más.',
    },
    {
      id: '16',
      title: 'Playeras Básicas',
      prices: { S: 170, M: 350 },
      photos: ['https://picsum.photos/id/535/3456/2304'],
      description: 'Playeras básicas para hombre diferentes colores y diseños',
    },
    {
      id: '17',
      title: 'Paquete Sillas',
      prices: { S: 1800, M: 2500 },
      photos: ['https://picsum.photos/id/625/3456/2304'],
      description: 'Paquete sillas para comedor',
    },
    {
      id: '18',
      title: 'Bicicleta',
      prices: { S: 1900, M: 4800 },
      photos: [
        'https://picsum.photos/id/839/3456/2304',
        'https://picsum.photos/id/859/3456/2304',
      ],
      description: 'Bicicleta blanca diferentes tamaños',
    },
    {
      id: '19',
      title: 'Bufanda y chamarra para caballero',
      prices: { S: 200, M: 500 },
      photos: [
        'https://picsum.photos/id/1005/3456/2304',
        'https://picsum.photos/id/883/3456/2304',
      ],
      description: 'Bufanda y chamarra para caballero',
    },
    {
      id: '20',
      title: 'Tabla Surf',
      prices: { S: 2000 },
      photos: ['https://picsum.photos/id/845/3456/2304'],
      description: 'Tabla de Surf',
    },
  ];
}

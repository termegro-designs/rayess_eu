export interface Product {
  id: string;
  name: string;
  category: string;
  collection: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
  modelPath?: string; // Für 3D-Modelle
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    depth?: number;
  };
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: string[];
}

export const collections: Collection[] = [
  {
    id: 'color-stones',
    name: 'Color Stones',
    description: 'Entdecken Sie unsere exquisite Auswahl an farbigen Edelsteinen, von leuchtenden Saphiren bis zu strahlenden Rubinen.',
    image: '/images/collections/color-stones.png',
    categories: ['Saphire', 'Rubine', 'Smaragde', 'Fancy Sapphire']
  },
  {
    id: 'rings',
    name: 'Ringe',
    description: 'Zeitlose Eleganz für jeden Anlass. Unsere Ringkollektion vereint traditionelle Handwerkskunst mit modernem Design.',
    image: '/images/collections/rings.jpg',
    categories: ['Verlobungsringe', 'Eheringe', 'Designerringe']
  },
  {
    id: 'necklaces',
    name: 'Halsketten',
    description: 'Ausdrucksstarke Statements und subtile Eleganz. Entdecken Sie unsere vielfältige Kollektion an Halsketten.',
    image: '/images/collections/necklaces.jpg',
    categories: ['Colliers', 'Anhänger', 'Choker']
  },
  {
    id: 'earrings',
    name: 'Ohrringe',
    description: 'Von klassischen Steckern bis zu dramatischen Chandeliers. Finden Sie Ihren perfekten Begleiter.',
    image: '/images/collections/earrings.jpg',
    categories: ['Ohrstecker', 'Creolen', 'Hänger']
  },
  {
    id: 'bracelets',
    name: 'Armbänder',
    description: 'Raffinierte Designs für das gewisse Extra. Unsere Armbänder setzen stilvolle Akzente.',
    image: '/images/collections/bracelets.jpg',
    categories: ['Tennisarmbänder', 'Charms', 'Bangles']
  }
];

export const products: Product[] = [
  {
    id: 'diamond-eternity-ring',
    name: 'Diamant Eternity Ring',
    category: 'rings',
    collection: 'timeless-elegance',
    price: 2999,
    description: 'Ein zeitloser Klassiker mit endloser Brillanz',
    features: [
      '18k Weißgold',
      'Brillantschliff Diamanten',
      'Gesamtgewicht: 1.5 Karat'
    ],
    images: [
      '/images/products/diamond-eternity-ring-1.jpg',
      '/images/products/diamond-eternity-ring-2.jpg',
      '/images/products/diamond-eternity-ring-3.jpg'
    ],
    modelPath: '/models/diamond-eternity-ring.glb',
    materials: ['18k Weißgold', 'Diamanten'],
    dimensions: {
      width: 16.5,
      height: 2.3,
      depth: 2.3
    }
  },
  {
    id: 'sapphire-pendant',
    name: 'Saphir Tropfen Anhänger',
    category: 'necklaces',
    collection: 'royal-heritage',
    price: 3499,
    description: 'Ein majestätischer Saphir-Anhänger mit Diamantbesatz',
    features: [
      '18k Gelbgold',
      'Ceylon Saphir',
      'Brillantschliff Diamanten'
    ],
    images: [
      '/images/products/sapphire-pendant-1.jpg',
      '/images/products/sapphire-pendant-2.jpg',
      '/images/products/sapphire-pendant-3.jpg'
    ],
    modelPath: '/models/sapphire-pendant.glb',
    materials: ['18k Gelbgold', 'Saphir', 'Diamanten'],
    dimensions: {
      width: 15,
      height: 25,
      depth: 5
    }
  },
  {
    id: 'pearl-drop-earrings',
    name: 'Perlen Tropfen Ohrringe',
    category: 'earrings',
    collection: 'modern-grace',
    price: 1999,
    description: 'Moderne Ohrringe mit Südseeperlen und Diamanten',
    features: [
      '18k Roségold',
      'Südseeperlen',
      'Brillantschliff Diamanten'
    ],
    images: [
      '/images/products/pearl-drop-earrings-1.jpg',
      '/images/products/pearl-drop-earrings-2.jpg',
      '/images/products/pearl-drop-earrings-3.jpg'
    ],
    modelPath: '/models/pearl-drop-earrings.glb',
    materials: ['18k Roségold', 'Südseeperlen', 'Diamanten'],
    dimensions: {
      width: 10,
      height: 35,
      depth: 5
    }
  }
];

export const categories = [
  { id: 'rings', name: 'Ringe', icon: '💍' },
  { id: 'necklaces', name: 'Halsketten', icon: '📿' },
  { id: 'earrings', name: 'Ohrringe', icon: '👂' },
  { id: 'bracelets', name: 'Armbänder', icon: '⚜️' }
];

export const colorStones = [
  {
    id: 'emerald',
    name: 'Smaragd',
    image: '/images/collections/color-stones/color-stone-emerald.png',
    description: 'Exquisiter Smaragd von höchster Qualität'
  },
  {
    id: 'ruby',
    name: 'Rubin',
    image: '/images/collections/color-stones/color-stone-ruby.png',
    description: 'Strahlender Rubin in perfekter Färbung'
  },
  {
    id: 'paraiba',
    name: 'Paraiba Turmalin',
    image: '/images/collections/color-stones/color-stone-paraiba.png',
    description: 'Seltener Paraiba Turmalin mit einzigartigem Blau'
  }
]; 
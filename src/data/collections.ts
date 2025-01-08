export interface Product {
  id: string;
  image: string;
  category: 'colorStones' | 'diamonds' | 'roughStones' | 'rings' | 'necklaces';
  title: string;
}

export const products: Product[] = [
  // Color Stones
  {
    id: 'cs1',
    image: '/images/collections/color-stones/emerald-ring.png',
    category: 'colorStones',
    title: 'Emerald Ring'
  },
  {
    id: 'cs2',
    image: '/images/collections/color-stones/ruby.png',
    category: 'colorStones',
    title: 'Ruby'
  },
  {
    id: 'cs3',
    image: '/images/collections/color-stones/aquamarine.png',
    category: 'colorStones',
    title: 'Aquamarine'
  },

  // Rough Stones
  {
    id: 'rs1',
    image: '/images/collections/rough-stones/morganite-rough.png',
    category: 'roughStones',
    title: 'Morganite'
  },

  // Necklaces
  {
    id: 'n1',
    image: '/images/collections/necklaces/green-necklace.png',
    category: 'necklaces',
    title: 'Colorful Stone Necklace'
  }
]; 
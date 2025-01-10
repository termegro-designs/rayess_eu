import React from 'react';
import { Product } from '../types';

// Placeholder for getProducts function
const getProducts = (): Product[] => [
  {
    id: '1',
    name: 'Sample Product',
    description: 'A sample product description.',
    price: 100,
    images: [{ url: '/path/to/image.jpg', alt: 'Sample Image' }],
    category: 'sampleCategory',
    collection: 'sampleCollection',
    materials: ['Gold'],
    dimensions: { width: 1, height: 1, depth: 1 },
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="relative group">
      <img 
        src={product.images[0]?.url} 
        alt={product.images[0]?.alt}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.images[0]?.alt}
        </h3>
      </div>
    </div>
  );
};

const Collections: React.FC = () => {
  const products = getProducts();
  const colorStones = products.filter((p: Product) => p.category === 'colorStones');
  const diamonds = products.filter((p: Product) => p.category === 'diamonds');
  const roughStones = products.filter((p: Product) => p.category === 'roughStones');
  const rings = products.filter((p: Product) => p.category === 'rings');
  const bracelets = products.filter((p: Product) => p.category === 'bracelets');
  const necklaces = products.filter((p: Product) => p.category === 'necklaces');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Color Stones Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Color Stones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colorStones.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Diamonds Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Diamonds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diamonds.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Rough Stones Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Rough Stones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roughStones.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Rings Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Rings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rings.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bracelets Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Bracelets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bracelets.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Necklaces Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Necklaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {necklaces.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections; 
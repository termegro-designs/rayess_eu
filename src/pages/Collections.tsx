import React from 'react';
import { products, Product } from '../data/collections';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="relative group">
      <img 
        src={product.image} 
        alt={product.title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.title}
        </h3>
      </div>
    </div>
  );
};

const Collections: React.FC = () => {
  const colorStones = products.filter(p => p.category === 'colorStones');
  const diamonds = products.filter(p => p.category === 'diamonds');
  const roughStones = products.filter(p => p.category === 'roughStones');
  const rings = products.filter(p => p.category === 'rings');
  const bracelets = products.filter(p => p.category === 'bracelets');
  const necklaces = products.filter(p => p.category === 'necklaces');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Color Stones Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Color Stones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colorStones.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Diamonds Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Diamonds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diamonds.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Rough Stones Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Rough Stones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roughStones.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Rings Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Rings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rings.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bracelets Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Bracelets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bracelets.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Necklaces Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Necklaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {necklaces.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections; 
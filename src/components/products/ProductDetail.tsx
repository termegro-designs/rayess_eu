import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductViewer3D from './ProductViewer3D';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    images: { url: string; alt: string }[];
    price?: string;
    materials: string[];
    gemstones: {
      type: string;
      carat: number;
      color?: string;
      clarity?: string;
    }[];
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    modelUrl: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showViewer3D, setShowViewer3D] = useState(false);

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images/3D Viewer */}
          <div>
            <div className="relative aspect-square mb-4 bg-gray-900 rounded-lg overflow-hidden">
              {showViewer3D ? (
                <ProductViewer3D modelUrl={product.modelUrl} className="w-full h-full" />
              ) : (
                <motion.img
                  key={activeImage}
                  src={product.images[activeImage].url}
                  alt={product.images[activeImage].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === index ? 'border-gold' : 'border-transparent'
                    }`}
                    onClick={() => {
                      setActiveImage(index);
                      setShowViewer3D(false);
                    }}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <button
                className={`px-4 py-2 rounded-lg transition-colors ${
                  showViewer3D ? 'bg-gold text-black' : 'border border-gold text-gold'
                }`}
                onClick={() => setShowViewer3D(!showViewer3D)}
              >
                {showViewer3D ? 'View Images' : 'View in 3D'}
              </button>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-4xl font-serif text-gold mb-4">{product.name}</h1>
            <p className="text-gray-300 mb-8">{product.description}</p>

            {product.price && (
              <div className="mb-8">
                <span className="text-2xl text-gold">{product.price}</span>
              </div>
            )}

            <div className="space-y-6">
              {/* Materials */}
              <div>
                <h2 className="text-xl font-serif text-gold mb-2">Materials</h2>
                <ul className="list-disc list-inside text-gray-300">
                  {product.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>

              {/* Gemstones */}
              <div>
                <h2 className="text-xl font-serif text-gold mb-2">Gemstones</h2>
                <div className="space-y-4">
                  {product.gemstones.map((gemstone, index) => (
                    <div key={index} className="text-gray-300">
                      <h3 className="font-semibold">{gemstone.type}</h3>
                      <ul className="list-disc list-inside pl-4">
                        <li>{gemstone.carat} carat</li>
                        {gemstone.color && <li>Color: {gemstone.color}</li>}
                        {gemstone.clarity && <li>Clarity: {gemstone.clarity}</li>}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div>
                <h2 className="text-xl font-serif text-gold mb-2">Dimensions</h2>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Width: {product.dimensions.width}mm</li>
                  <li>Height: {product.dimensions.height}mm</li>
                  <li>Depth: {product.dimensions.depth}mm</li>
                </ul>
              </div>

              {/* Inquiry Button */}
              <button className="w-full bg-gold text-black py-3 px-8 rounded-lg font-semibold hover:bg-gold/90 transition-colors mt-8">
                Inquire About This Piece
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 
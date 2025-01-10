import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import ImageZoom from '../common/ImageZoom';
import type { Product } from '@/types';

interface ProductGalleryProps {
  product: Product;
}

// Placeholder for ProductViewer3D component
const ProductViewer3D: React.FC<{ modelUrl?: string }> = ({ modelUrl }) => (
  <div>3D Viewer for {modelUrl}</div>
);

// Placeholder for ImageZoom component
const ImageZoom: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => (
  <div>Zoomed Image: {alt}</div>
);

export const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [activeView, setActiveView] = useState<'images' | '3d'>('images');
  const [selectedImage, setSelectedImage] = useState(
    product.images.find(img => img.isMain)?.url || product.images[0]?.url
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Thumbnail Navigation */}
      <div className="lg:col-span-2 order-2 lg:order-1">
        <div className="flex lg:flex-col gap-4">
          {product.images.map((image) => (
            <button
              key={image.url}
              onClick={() => {
                setActiveView('images');
                setSelectedImage(image.url);
              }}
              className={`relative aspect-square overflow-hidden ${
                selectedImage === image.url ? 'ring-2 ring-gold' : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
          {product.model3dUrl && (
            <button
              onClick={() => setActiveView('3d')}
              className={`relative aspect-square bg-dark-gray flex items-center justify-center ${
                activeView === '3d' ? 'ring-2 ring-gold' : ''
              }`}
            >
              <span className="text-2xl">3D</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Display */}
      <div className="lg:col-span-10 order-1 lg:order-2">
        {activeView === 'images' ? (
          <ImageZoom imageUrl={selectedImage} alt={product.name} />
        ) : (
          <ProductViewer3D modelUrl={product.model3dUrl!} />
        )}
      </div>
    </div>
  );
}; 
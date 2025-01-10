// Verified correct module imports
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductViewer3D from './ProductViewer3D';

// Temporäre Produktdaten
const productData = {
  'ring-1': {
    name: 'Diamond Solitaire Ring',
    price: '€5,999',
    description: 'Ein atemberaubender Solitärring mit einem brillantgeschliffenen Diamanten in 18k Weißgold gefasst.',
    details: {
      material: '18k Weißgold',
      diamond: {
        carat: '1.00',
        color: 'F',
        clarity: 'VS1',
        cut: 'Excellent'
      }
    },
    images: [
      '/images/products/ring-1/view1.svg',
      '/images/products/ring-1/view2.svg',
      '/images/products/ring-1/view3.svg'
    ],
    modelUrl: '/models/ring-1.glb',
    features: [
      'GIA zertifizierter Diamant',
      'Handgefertigt in Deutschland',
      'Kostenlose Größenanpassung',
      'Lebenslange Garantie'
    ]
  }
};

const ProductDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showViewer3D, setShowViewer3D] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!productId || !productData[productId as keyof typeof productData]) {
    return (
      <div className="min-h-screen pt-20 bg-black">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif text-gold">Produkt nicht gefunden</h1>
        </div>
      </div>
    );
  }

  const product = productData[productId as keyof typeof productData];

  return (
    <motion.div 
      className="min-h-screen pt-20 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Linke Spalte - Bilder & 3D-Viewer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
              }}
              className="relative aspect-square mb-6 bg-gray-900 rounded-lg overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              {showViewer3D ? (
                <ProductViewer3D modelUrl={product.modelUrl} className="w-full h-full" />
              ) : (
                <motion.img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.div>

            {/* Bildergalerie und 3D-Viewer Toggle */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.6
              }}
            >
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                    setShowViewer3D(false);
                  }}
                  className={`w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index && !showViewer3D ? 'ring-2 ring-gold' : ''
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img 
                    src={image}
                    alt={`${product.name} Ansicht ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  />
                </motion.button>
              ))}
              <motion.button
                onClick={() => setShowViewer3D(true)}
                className={`w-20 h-20 rounded-lg bg-gray-800 flex items-center justify-center ${
                  showViewer3D ? 'ring-2 ring-gold' : ''
                }`}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(212, 175, 55, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span 
                  className="text-gold"
                  animate={{ 
                    rotateY: showViewer3D ? [0, 360] : 0
                  }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                >
                  3D
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Rechte Spalte - Produktinfos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4
            }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h1 
                className="text-4xl font-serif text-gold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.8
                }}
              >
                {product.name}
              </motion.h1>
              <motion.p 
                className="text-2xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {product.price}
              </motion.p>
            </motion.div>

            {/* Rest of the content with enhanced animations */}
            <motion.div 
              className="prose prose-invert"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-gray-300">{product.description}</p>
            </motion.div>

            {/* Produktdetails mit verbesserten Animationen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.h2 
                className="text-xl font-serif text-gold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Produktdetails
              </motion.h2>
              <motion.div 
                className="grid grid-cols-2 gap-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div>
                  <p className="font-medium">Material</p>
                  <p>{product.details.material}</p>
                </div>
                <div>
                  <p className="font-medium">Diamant</p>
                  <p>{product.details.diamond.carat}ct, {product.details.diamond.color}, {product.details.diamond.clarity}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Aktionsbuttons mit verbesserten Hover-Effekten */}
            <motion.div 
              className="space-y-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <motion.button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-gold text-black py-4 px-6 rounded-lg hover:bg-gold/90 transition-colors font-medium relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <span className="relative">Termin vereinbaren</span>
              </motion.button>
              <motion.button
                className="w-full border border-gold text-gold py-4 px-6 rounded-lg hover:bg-gold/10 transition-colors relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gold/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <span className="relative">Kontaktieren Sie uns</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Buchungs-Modal mit verbesserten Animationen */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="bg-gray-900 rounded-xl p-6 max-w-lg w-full relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative">
                <motion.h2 
                  className="text-2xl font-serif text-gold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Termin vereinbaren
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Vereinbaren Sie einen persönlichen Termin, um dieses exquisite Stück zu besichtigen.
                </motion.p>
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    onClick={() => setIsBookingOpen(false)}
                    className="w-full bg-gold text-black py-3 rounded-lg hover:bg-gold/90 transition-colors relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                    <span className="relative">Schließen</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductDetailPage; 
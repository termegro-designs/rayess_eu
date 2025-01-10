import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../layout/Layout';
import { collections, products } from '../../data/products';

const CollectionDetailPage = () => {
  const { id } = useParams();
  const collection = collections.find(c => c.id === id);
  const collectionProducts = products.filter(p => p.category === id);

  if (!collection) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl text-gold">Kollektion nicht gefunden</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Hero Section */}
        <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="relative z-20 text-center px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-light text-white mb-4"
            >
              {collection.name}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-px w-24 bg-gold mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-200 max-w-2xl mx-auto"
            >
              {collection.description}
            </motion.p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {collectionProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <a href={`/product/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden mb-4">
                    <motion.div
                      className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"
                      whileHover={{ opacity: 0.8 }}
                    />
                    <motion.img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  
                  <h3 className="text-xl text-white group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-gold">
                      €{product.price.toLocaleString()}
                    </p>
                    <span className="text-sm text-gray-400">
                      {product.materials.join(' • ')}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionDetailPage; 
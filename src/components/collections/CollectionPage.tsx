import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Product } from '@/types';
import { products, categories, collections } from '../../data/products';

const adjustedProducts = products.map(product => ({
  ...product,
  images: product.images.map(url => ({ url, alt: '', isMain: false })),
  dimensions: {
    ...product.dimensions,
    depth: product.dimensions.depth || 0
  }
}));

const CollectionPage = () => {
  const { t } = useTranslation();
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');

  useEffect(() => {
    let filtered = [...adjustedProducts];
    
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (selectedCollection) {
      filtered = filtered.filter(product => product.collection === selectedCollection);
    }

    // Sortierung
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedCollection, sortBy]);

  const categoryKey = selectedCategory || 'default';
  const collectionKey = selectedCollection || 'default';

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-amber-50 to-white">
      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          {/* Kategorien */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">{t('collections.categories')}</h3>
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                  className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-50 text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Kollektionen */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">{t('collections.collections')}</h3>
            <div className="flex flex-wrap gap-4">
              {collections.map((collection) => (
                <motion.button
                  key={collection.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCollection(collection.id === selectedCollection ? null : collection.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCollection === collection.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-50 text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  {collection.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sortierung */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('collections.sort')}</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name')}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="name">{t('collections.sort_name')}</option>
              <option value="price-asc">{t('collections.sort_price_asc')}</option>
              <option value="price-desc">{t('collections.sort_price_desc')}</option>
            </select>
          </div>
        </motion.div>
      </div>

      {/* Produkt Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={categoryKey + collectionKey + sortBy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">
                        €{product.price.toLocaleString()}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
                      >
                        {t('collections.view_details')}
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CollectionPage; 
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import { collections } from '../../data/products';

const CollectionsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Hero Section */}
        <div className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/10 via-black to-black" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative text-5xl md:text-7xl font-light text-white text-center"
          >
            Exquisite Kollektionen
          </motion.h1>
        </div>

        {/* Collections Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Link to={`/collections/${collection.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden mb-6">
                    <motion.div
                      className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"
                      whileHover={{ opacity: 0.8 }}
                    />
                    <motion.img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h2 className="text-3xl font-light text-white mb-2">
                        {collection.name}
                      </h2>
                      <div className="h-px w-16 bg-gold mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                      <p className="text-gray-200 max-w-md">
                        {collection.description}
                      </p>
                      <div className="flex gap-4 mt-4">
                        {collection.categories.map((category, idx) => (
                          <span
                            key={idx}
                            className="text-xs uppercase tracking-wider text-gold/80"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionsPage; 
import React from 'react';
import { Link } from 'react-router-dom';
import{ useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-serif text-gold mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          {t('error.page_not_found')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/"
            className="inline-block bg-gold text-black px-8 py-3 rounded-lg hover:bg-gold/90 transition-colors"
          >
            {t('error.back_to_home')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage; 
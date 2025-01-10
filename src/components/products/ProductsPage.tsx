import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../layout/Layout';

const ProductsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Premium Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.15,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const collections = [
    {
      title: "Color Stones",
      images: [
        "/images/collections/color-stones/color-stone-emerald.PNG",
        "/images/collections/color-stones/color-stone-paraiba.png",
        "/images/collections/color-stones/color-stone-ruby.png"
      ]
    },
    {
      title: "Diamonds",
      images: [
        "/images/collections/diamonds/diamond-ruby-ring.png",
        "/images/collections/diamonds/diamond-sapphire-ring.png"
      ]
    },
    {
      title: "Rough Stones",
      images: [
        "/images/collections/rough-stones/rough-stone-aquamarine.png",
        "/images/collections/rough-stones/rough-stone-morganite.PNG",
        "/images/collections/rough-stones/rough-stone-pink.png"
      ]
    },
    {
      title: "Rings",
      images: [
        "/images/collections/rings/ring-ruby.png",
        "/images/collections/rings/ring-sapphire.png"
      ]
    },
    {
      title: "Bracelets",
      images: [
        "/images/collections/bracelets/bracelet-tourmaline-1.png",
        "/images/collections/bracelets/bracelet-tourmaline-2.png"
      ]
    },
    {
      title: "Necklaces",
      images: [
        "/images/collections/necklaces/necklace-turquoise.png",
        "/images/collections/necklaces/necklace-multicolor-1.PNG",
        "/images/collections/necklaces/necklace-multicolor-2.PNG"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen overflow-hidden">
        {/* Hero Section mit Premium Animationen */}
        <motion.div 
          className="relative h-[60vh] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_60%)] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-8xl font-serif text-white mb-8"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Our Products
            </motion.h1>
            <motion.div
              className="h-[1px] w-48 bg-gold mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "12rem" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Collections Grid mit Premium Hover-Effekten */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          {collections.map((collection, idx) => (
            <motion.section
              key={collection.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="mb-32"
            >
              <motion.h2
                className="text-6xl font-serif text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {collection.title}
              </motion.h2>

              <div className={`grid ${collection.images.length === 2 ? 'grid-cols-2 max-w-4xl' : 'grid-cols-1 md:grid-cols-3'} gap-8 mx-auto`}>
                {collection.images.map((image, imageIdx) => (
                  <motion.div
                    key={image}
                    className="relative group aspect-square"
                    initial="initial"
                    whileHover="hover"
                    whileTap="hover"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent rounded-lg filter blur-xl"
                      variants={glowVariants}
                    />

                    {/* Reflection Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />

                    {/* Image Container*/}
                    <motion.div
                      className="relative w-full h-full overflow-hidden rounded-lg"
                      variants={imageHoverVariants}
                    >
                      <motion.img
                        src={image}
                        alt={`${collection.title} ${imageIdx + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Overlay with Product Info */}
                      <motion.div
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          <p className="text-white text-lg font-light">View Details</p>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Floating Elements */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gold/50 rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Decorative Line */}
              <motion.div
                className="h-[1px] bg-gold/30 max-w-2xl mx-auto mt-20"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </motion.section>
          ))}
        </div>

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Ambient Light Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent"
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Dynamic Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage; 
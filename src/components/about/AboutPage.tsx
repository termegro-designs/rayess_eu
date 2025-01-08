import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Layout from '../layout/Layout';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Parallax Effect für Bilder
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Elegante Einblend-Animation für Text
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  // Goldene Linie Animation
  const lineAnimation = {
    initial: { width: 0 },
    animate: { width: "200px" },
    transition: { duration: 1.5, ease: "easeInOut" }
  };

  // Floating Animation für Bilder
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Glitter Effect Animation
  const glitterVariants = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout>
      <div className="bg-black min-h-screen overflow-hidden">
        {/* Hero Section mit Premium-Animation */}
        <motion.div 
          style={{ opacity, scale }}
          className="relative h-screen flex items-center justify-center"
        >
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="text-center relative z-10"
              >
                <motion.h1 
                  className="text-8xl md:text-9xl font-serif text-white mb-6"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1.2 }}
                >
                  About Us
                </motion.h1>
                <motion.div
                  className="h-[1px] bg-gold mx-auto"
                  initial={lineAnimation.initial}
                  animate={lineAnimation.animate}
                  transition={lineAnimation.transition}
                />
                
                {/* Glitter Effects */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gold rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`
                    }}
                    variants={glitterVariants}
                    animate="animate"
                    transition={{ delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Sections mit Premium Scroll-Animationen */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* About Us Section */}
          <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-light text-white mb-6"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                A company with over 50 years of experience
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                className="prose prose-lg text-white/80"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <motion.p 
                  className="mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Founded in 1967 in the picturesque town of Idar-Oberstein, Germany, Rayess stands as a beacon 
                  of tradition and excellence in the world of fine jewelry.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  At Rayess, our commitment to excellence extends beyond the creation of exquisite jewelry. 
                  It is a dedication to providing an unparalleled customer experience.
                </motion.p>
              </motion.div>
              
              {/* Image Grid mit Premium Hover-Effekten */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative aspect-square overflow-hidden group"
                  variants={floatingAnimation}
                  animate="animate"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.img
                    src="/images/about/gemstone-display.HEIC"
                    alt="Gemstone Display"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-all duration-500"
                  />
                </motion.div>
                <motion.div
                  className="relative aspect-square overflow-hidden group"
                  variants={floatingAnimation}
                  animate="animate"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.img
                    src="/images/about/showroom-interior..HEIC"
                    alt="Showroom Interior"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-all duration-500"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Our Future Section mit Premium Parallax */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src="/images/collections/rings/ring-sapphire.png"
                  alt="Luxury Ring"
                  className="w-full"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)",
                      "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2) 20%, transparent 70%)",
                      "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <motion.h2
                  className="text-4xl font-light text-white mb-6"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  Our Future
                </motion.h2>
                <motion.div
                  className="prose prose-lg text-white/80"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <p>Looking ahead, we continue to push the boundaries of jewelry craftsmanship...</p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Our History Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl font-light text-white mb-6"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Our History
              </motion.h2>
              <motion.h3
                className="text-2xl text-gold mb-4"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                The making of a Legacy
              </motion.h3>
              <motion.h4
                className="text-xl text-white mb-6"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Our Journey in Gems: 53 Years of Expertise
              </motion.h4>
              
              <motion.div
                className="space-y-6 text-white/80"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <p>Story begins with R. Gul Qazi, a pharmacist turned gemstone entrepreneur in Pakistan</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <p>Pioneer in direct trade with gem mines, focusing on the gemstone town Idar-Oberstein, Germany</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gold flex-shrink-0" />
                  <p>Settled in Idar-Oberstein during the gemstone market boom and became a key player before his passing</p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Floating Particles Effect */}
        <motion.div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100, 0],
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
      </div>
    </Layout>
  );
};

export default AboutPage; 
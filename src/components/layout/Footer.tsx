import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const footerLinks = {
    company: [
      { to: '/about', label: 'Über uns' },
      { to: '/contact', label: 'Kontakt' },
      { to: '/locations', label: 'Standorte' }
    ],
    collections: [
      { to: '/collections/rings', label: 'Ringe' },
      { to: '/collections/necklaces', label: 'Halsketten' },
      { to: '/collections/earrings', label: 'Ohrringe' }
    ],
    legal: [
      { to: '/privacy', label: 'Datenschutz' },
      { to: '/terms', label: 'AGB' },
      { to: '/imprint', label: 'Impressum' }
    ]
  };

  const socialLinks = [
    { icon: 'instagram', url: 'https://instagram.com/rayessgems' },
    { icon: 'facebook', url: 'https://facebook.com/rayessgems' },
    { icon: 'pinterest', url: 'https://pinterest.com/rayessgems' }
  ];

  return (
    <footer className="bg-luxury-black border-t border-gold/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="block">
              <h2 className="text-2xl font-serif text-gold">Rayess Gems</h2>
            </Link>
            <p className="text-gray-400 text-sm">
              Exquisite Schmuckstücke und zeitlose Eleganz seit 1967
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  <span className="sr-only">{social.icon}</span>
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-gold font-display text-lg">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rayess Gems. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              {['de', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`text-sm uppercase ${
                    i18n.language === lang ? 'text-gold' : 'text-gray-400'
                  } hover:text-gold transition-colors`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
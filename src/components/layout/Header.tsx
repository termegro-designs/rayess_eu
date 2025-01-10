import React from 'react';
import { useState } from 'react';
import { Link } from'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../../common/LanguageSelector';
import { motion } from 'framer-motion';

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif text-gold">
            Rayess Gems
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/collections" className="text-white/80 hover:text-gold transition-colors">
                  {t('navigation.collections')}
                </Link>
              </li>
              <li>
                <Link to="/jewelry" className="text-white/80 hover:text-gold transition-colors">
                  {t('navigation.jewelry')}
                </Link>
              </li>
              <li>
                <Link to="/engagement-rings" className="text-white/80 hover:text-gold transition-colors">
                  {t('navigation.engagement_rings')}
                </Link>
              </li>
              <li>
                <Link to="/watches" className="text-white/80 hover:text-gold transition-colors">
                  {t('navigation.watches')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-gold transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-gold transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white/80 hover:text-white"
            >
              <span className="sr-only">Menü</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="py-4 space-y-4">
            <li>
              <Link to="/collections" className="block text-white/80 hover:text-gold">
                {t('navigation.collections')}
              </Link>
            </li>
            <li>
              <Link to="/jewelry" className="block text-white/80 hover:text-gold">
                {t('navigation.jewelry')}
              </Link>
            </li>
            <li>
              <Link to="/engagement-rings" className="block text-white/80 hover:text-gold">
                {t('navigation.engagement_rings')}
              </Link>
            </li>
            <li>
              <Link to="/watches" className="block text-white/80 hover:text-gold">
                {t('navigation.watches')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="block text-white/80 hover:text-gold">
                {t('navigation.about')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block text-white/80 hover:text-gold">
                {t('navigation.contact')}
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}; 
import React from 'react';
import { useState } from 'react';
import { useTranslation }from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export const ShareButton = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const shareOptions = [
    { id: 'whatsapp', icon: 'whatsapp', label: 'WhatsApp' },
    { id: 'facebook', icon: 'facebook', label: 'Facebook' },
    { id: 'email', icon: 'email', label: 'E-Mail' },
    { id: 'copy', icon: 'copy', label: t('share.copy_link') },
  ];

  const handleShare = (option: string) => {
    const url = window.location.href;
    
    switch (option) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'email':
        window.location.href = `mailto:?body=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // Hier könnte eine Erfolgsmeldung angezeigt werden
        break;
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm text-white/60 hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        <span className="hidden md:inline">{t('share.button')}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 py-2 w-48 bg-dark-gray rounded-lg shadow-xl z-50"
          >
            {shareOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleShare(option.id)}
                className="w-full px-4 py-2 text-left hover:bg-black/30 text-sm"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 
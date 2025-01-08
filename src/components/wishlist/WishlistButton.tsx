import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface WishlistButtonProps {
  productId: string;
}

export const WishlistButton = ({ productId }: WishlistButtonProps) => {
  const { t } = useTranslation();
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    // Hier später: Wishlist-Status in Backend/LocalStorage speichern
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleWishlist}
      className="flex items-center space-x-2 text-sm"
      aria-label={t('wishlist.toggle')}
    >
      <svg
        className={`w-6 h-6 transition-colors ${
          isInWishlist ? 'text-gold' : 'text-white/60'
        }`}
        fill={isInWishlist ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className="hidden md:inline">
        {isInWishlist ? t('wishlist.remove') : t('wishlist.add')}
      </span>
    </motion.button>
  );
}; 
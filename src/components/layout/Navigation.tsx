import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Kollektionen',
    path: '/collections',
    children: [
      { label: 'Neuheiten', path: '/collections/new' },
      { label: 'Bestseller', path: '/collections/bestsellers' },
    ]
  },
  {
    label: 'Schmuck',
    path: '/jewelry',
    children: [
      { label: 'Halsketten', path: '/jewelry/necklaces' },
      { label: 'Ohrringe', path: '/jewelry/earrings' },
      { label: 'Armbänder', path: '/jewelry/bracelets' },
    ]
  },
  {
    label: 'Verlobungsringe',
    path: '/engagement-rings',
    children: [
      { label: 'Solitäre', path: '/engagement-rings/solitaire' },
      { label: 'Halo', path: '/engagement-rings/halo' },
      { label: 'Vintage', path: '/engagement-rings/vintage' },
    ]
  },
  // ... weitere Menüpunkte
];

export const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="relative">
      <ul className="flex space-x-8">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.path)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link 
              to={item.path}
              className="text-white hover:text-gold transition-colors py-2"
            >
              {item.label}
            </Link>

            <AnimatePresence>
              {activeDropdown === item.path && item.children && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 bg-dark-gray py-2 min-w-[200px]"
                >
                  <ul>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className="block px-4 py-2 hover:bg-black/30 text-white hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
}; 
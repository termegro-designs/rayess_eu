import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-50">
      {/* Instagram Icon */}
      <div className="bg-black w-full">
        <div className="max-w-7xl mx-auto px-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white py-2 inline-block">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl">
              <Logo />
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              <Link to="/about-us" className="text-white hover:text-gold text-sm uppercase border-b border-transparent hover:border-gold transition-colors">About us</Link>
              <Link to="/products" className="text-white hover:text-gold text-sm uppercase border-b border-transparent hover:border-gold transition-colors">Our products</Link>
              <Link to="/terms" className="text-white hover:text-gold text-sm uppercase border-b border-transparent hover:border-gold transition-colors">Terms and conditions</Link>
              <Link to="/contact" className="text-white hover:text-gold text-sm uppercase border-b border-transparent hover:border-gold transition-colors">Contact Us</Link>
              
              {/* Language Selector */}
              <div className="flex items-center gap-2 ml-8">
                <img src="/images/icons/en.svg" alt="English" className="w-5 h-5" />
                <select className="bg-transparent text-white text-sm uppercase border-none focus:outline-none cursor-pointer">
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                </select>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 
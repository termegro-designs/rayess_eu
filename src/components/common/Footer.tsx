import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-center gap-12 mb-12">
          <Link to="/about-us" className="text-black hover:text-gray-600 text-sm uppercase">About us</Link>
          <Link to="/products" className="text-black hover:text-gray-600 text-sm uppercase">Our products</Link>
          <Link to="/terms" className="text-black hover:text-gray-600 text-sm uppercase">Terms and conditions</Link>
          <Link to="/contact" className="text-black hover:text-gray-600 text-sm uppercase">Contact Us</Link>
        </nav>
        
        <div className="text-center">
          <form className="mb-12">
            <button type="submit" className="border border-black px-12 py-2 text-sm uppercase hover:bg-black hover:text-white transition-all">
              Submit
            </button>
          </form>
          
          <p className="text-sm mb-4">All rights reserved ❤ 2024. Rayess</p>
          <p className="text-xs text-gray-500">
            You can never take too much care over the choice of your sunglasses and jewelry.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
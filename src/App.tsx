import React from 'react';
import { Outlet } from 'react-router-dom';
import{ Helmet } from 'react-helmet-async';
import Navbar from './components/navigation/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Rayess Gems - Exquisite Jewelry & Precious Stones</title>
        <meta name="description" content="Discover our collection of fine jewelry and precious stones. Handcrafted with passion since 1967." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App; 
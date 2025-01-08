import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero/hero-gems.png" 
            alt="Rayess Gems" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-normal mb-6 text-white">RAYESS</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white">A Company with over 50 years of experience</h2>
          <p className="max-w-3xl mx-auto text-lg mb-12 font-light text-white/90">
            Founded in 1967 in the picturesque town of idar-Oberstein, Germany, 
            Rayess Stands as a beacon of tradition and excellence in the world of fine jewelry
          </p>
          <a href="/about-us" className="inline-block border border-white text-white px-12 py-3 text-sm uppercase hover:bg-white hover:text-black transition-all">
            view more
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4">About Us</h2>
          <h3 className="text-xl mb-8 font-light">A company with over 50 years of experience</h3>
          <p className="text-lg font-light">
            Founded in 1967 in the picturesque town of Idar-Oberstein, Germany, Rayess stands as a beacon 
            of tradition and excellence in the world of fine jewelry. Renowned for our commitment to 
            uncompromising quality, Rayess has been a trusted name, crafting timeless pieces that resonate 
            with sophistication and artistry.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4">Our Legacy</h2>
          <h3 className="text-xl mb-8 font-light">The making of a Legacy</h3>
          <p className="text-lg font-light">
            With a rich heritage spanning over five decades, Rayess has evolved as a paragon of precision 
            and passion. Nestled in the heart of Idar-Oberstein, a town famed for its gemstone heritage, 
            we have meticulously curated a collection of the finest precious stones.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-4">Our History</h2>
          <h3 className="text-xl mb-8 font-light">Our Journey in Gems: 53 Years of Expertise</h3>
          <ul className="text-lg font-light space-y-4">
            <li>Story begins with R. Gul Qazi, a pharmacist turned gemstone entrepreneur in Pakistan</li>
            <li>Pioneer in direct trade with gem mines, focusing on the gemstone town Idar-Oberstein, Germany</li>
            <li>Settled in Idar-Oberstein during the gemstone market boom and became a key player before his passing</li>
          </ul>
        </div>
      </section>

      {/* Why Rayess Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16">Why Rayess?</h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl mb-4">Impeccable Quality</h3>
              <p className="font-light">
                We handpick the finest stones and employ meticulous craftsmanship to ensure each piece meets the highest standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Customization</h3>
              <p className="font-light">
                Elevate your style with bespoke creations tailored to your unique preferences.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4">Heritage & Innovation</h3>
              <p className="font-light">
                Drawing from our rich legacy, we seamlessly integrate traditional techniques with modern design sensibilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 
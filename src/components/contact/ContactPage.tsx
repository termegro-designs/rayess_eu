import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white text-black pt-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-6xl mb-8">Contact Us</h1>
          <p className="text-lg font-light max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </section>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-8">
            <div>
              <label className="block text-sm uppercase mb-2">Name</label>
              <input 
                type="text"
                className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm uppercase mb-2">Email</label>
              <input 
                type="email"
                className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-sm uppercase mb-2">Message</label>
              <textarea 
                rows={6}
                className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black"
              />
            </div>

            <div className="text-center">
              <button 
                type="submit"
                className="border border-black px-12 py-3 text-sm uppercase hover:bg-black hover:text-white transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl mb-6">Visit Us</h2>
          <p className="text-lg font-light">Idar-Oberstein, Germany</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 
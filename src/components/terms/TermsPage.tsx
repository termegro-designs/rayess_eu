const TermsPage = () => {
  return (
    <div className="bg-white text-black pt-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-6xl mb-8">Terms and Conditions</h1>
        </section>

        {/* Content */}
        <div className="space-y-12 mb-24">
          <section>
            <h2 className="text-2xl mb-4">1. General Information</h2>
            <div className="space-y-4 text-lg font-light">
              <p>
                These terms and conditions apply to all orders and purchases made through Rayess's website 
                and physical locations. By accessing our website or making a purchase, you agree to be bound 
                by these terms and conditions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4">2. Shipping Information</h2>
            <div className="space-y-4 text-lg font-light">
              <p>Free shipping over $200. International shipping available.</p>
              <p>
                All orders are processed and shipped within 1-3 business days. International orders may 
                require additional processing time due to customs procedures.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4">3. Returns and Exchanges</h2>
            <div className="space-y-4 text-lg font-light">
              <p>
                We want you to be completely satisfied with your purchase. If for any reason you are not 
                satisfied, you may return your item within 30 days of delivery for a full refund or exchange.
              </p>
              <p>
                All returned items must be in their original condition and packaging, with all tags attached.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4">4. Product Information</h2>
            <div className="space-y-4 text-lg font-light">
              <p>
                We make every effort to display our products as accurately as possible. However, the actual 
                colors you see will depend on your monitor, and we cannot guarantee that your display will 
                accurately portray the product colors.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4">5. Privacy Policy</h2>
            <div className="space-y-4 text-lg font-light">
              <p>
                Your privacy is important to us. We collect and store your personal information solely for 
                processing your orders and providing you with the best possible service.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 
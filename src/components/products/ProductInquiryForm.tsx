import React from 'react';
import { useState } from 'react';
import { useTranslation }from 'react-i18next';
import { Product } from '../../types';

interface ProductInquiryFormProps {
  product: Product;
  onClose: () => void;
}

interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredContact: 'email' | 'phone';
  preferredTime?: string;
  newsletter: boolean;
}

export const ProductInquiryForm = ({ product, onClose }: ProductInquiryFormProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    newsletter: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // API-Aufruf zum Backend hier implementieren
    onClose();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-serif text-gold">
          {t('product.inquiry.title')}
        </h3>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors"
        >
          <span className="sr-only">{t('common.close')}</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="mb-6">
        <h4 className="font-serif mb-2">{product.name}</h4>
        <p className="opacity-80 text-sm">{t('product.inquiry.reference')}: {product.id}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-2" htmlFor="inquiry-name">
              {t('common.form.name')}
            </label>
            <input
              type="text"
              id="inquiry-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2" htmlFor="inquiry-email">
              {t('common.form.email')}
            </label>
            <input
              type="email"
              id="inquiry-email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2" htmlFor="inquiry-message">
            {t('product.inquiry.message')}
          </label>
          <textarea
            id="inquiry-message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold h-32"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="inquiry-newsletter"
            checked={formData.newsletter}
            onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
            className="rounded border-gold/30 text-gold focus:ring-gold"
          />
          <label htmlFor="inquiry-newsletter" className="ml-2 text-sm">
            {t('product.inquiry.newsletter_consent')}
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 border border-gold/30 rounded hover:border-gold transition-colors"
          >
            {t('common.cancel')}
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gold text-black rounded hover:bg-gold/90 transition-colors"
          >
            {t('product.inquiry.submit')}
          </button>
        </div>
      </form>
    </div>
  );
}; 
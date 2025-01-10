import React from 'react';
import { useState } from 'react';
import { useTranslation }from 'react-i18next';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
  newsletter: boolean;
}

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    newsletter: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // API-Aufruf zum Backend hier implementieren
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark-gray/30 backdrop-blur-sm p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-serif mb-6 text-gold">
        {t('contact.form.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-2" htmlFor="name">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2" htmlFor="email">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2" htmlFor="phone">
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>

        <div>
          <label className="block text-sm mb-2" htmlFor="subject">
            {t('contact.form.subject')}
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold"
            required
          >
            <option value="">{t('contact.form.select_subject')}</option>
            <option value="appointment">{t('contact.form.subjects.appointment')}</option>
            <option value="product">{t('contact.form.subjects.product')}</option>
            <option value="custom">{t('contact.form.subjects.custom')}</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-2" htmlFor="message">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-black/50 border border-gold/30 rounded px-4 py-2 focus:border-gold focus:ring-1 focus:ring-gold h-32"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 bg-gold text-black px-8 py-3 rounded hover:bg-gold/90 transition-colors"
      >
        {t('contact.form.submit')}
      </button>
    </motion.form>
  );
}; 
import React from 'react';
import { Helmet } from 'react-helmet-async';
import{ useTranslation } from 'react-i18next';
import { ContactForm } from '../components/contact/ContactForm';
import { StoreLocations } from '../components/contact/StoreLocations';
import { PageHeader } from '../components/layout/PageHeader';

const locations = [
  {
    id: '1',
    name: 'Rayess Gems Zürich',
    address: 'Bahnhofstrasse 123',
    city: 'Zürich',
    country: 'Schweiz',
    phone: '+41 44 123 45 67',
    email: 'zuerich@rayessgems.ch',
    coordinates: {
      lat: 47.3769,
      lng: 8.5417,
    },
    openingHours: {
      monday: '10:00 - 18:30',
      tuesday: '10:00 - 18:30',
      wednesday: '10:00 - 18:30',
      thursday: '10:00 - 18:30',
      friday: '10:00 - 18:30',
      saturday: '10:00 - 17:00',
      sunday: 'Geschlossen',
    },
  },
  // Weitere Standorte hier...
];

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('contact.meta.title')} | Rayess Gems</title>
        <meta name="description" content={t('contact.meta.description')} />
      </Helmet>

      <PageHeader
        title={t('contact.title')}
        description={t('contact.description')}
        backgroundImage="/images/contact-header.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif mb-8 text-gold">
              {t('contact.form_section.title')}
            </h2>
            <p className="text-lg opacity-80 mb-8">
              {t('contact.form_section.description')}
            </p>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-8 text-gold">
              {t('contact.locations_section.title')}
            </h2>
            <p className="text-lg opacity-80 mb-8">
              {t('contact.locations_section.description')}
            </p>
            <StoreLocations locations={locations} />
          </div>
        </div>
      </div>
    </>
  );
}; 
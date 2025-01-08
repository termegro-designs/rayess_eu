import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import type { StoreLocation } from '../../types';

interface StoreLocationsProps {
  locations: StoreLocation[];
}

export const StoreLocations = ({ locations }: StoreLocationsProps) => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation | null>(null);
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  const mapCenter = {
    lat: 47.3769, // Schweiz Zentrum
    lng: 8.5417,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Standortliste */}
      <div className="lg:col-span-1 space-y-4">
        <h3 className="text-2xl font-serif text-gold mb-6">
          {t('contact.locations.title')}
        </h3>
        
        {locations.map((location) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-4 rounded cursor-pointer transition-colors ${
              activeLocationId === location.id
                ? 'bg-gold/20 border border-gold'
                : 'bg-dark-gray/30 hover:bg-dark-gray/50'
            }`}
            onClick={() => {
              setSelectedLocation(location);
              setActiveLocationId(location.id);
            }}
          >
            <h4 className="font-serif text-lg mb-2">{location.name}</h4>
            <p className="text-sm opacity-80">{location.address}</p>
            <p className="text-sm opacity-80">{location.city}, {location.country}</p>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <a
                href={`tel:${location.phone}`}
                className="text-gold hover:text-gold/80 text-sm"
              >
                {location.phone}
              </a>
              <a
                href={`mailto:${location.email}`}
                className="text-gold hover:text-gold/80 text-sm"
              >
                {location.email}
              </a>
            </div>

            <div className="mt-4 text-sm">
              <h5 className="font-medium mb-2">{t('contact.locations.opening_hours')}</h5>
              {Object.entries(location.openingHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between opacity-80">
                  <span>{t(`common.days.${day}`)}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Maps Integration */}
      <div className="lg:col-span-2 h-[600px] rounded overflow-hidden">
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={mapCenter}
          zoom={8}
          options={{
            styles: mapStyles, // Dunkles, elegantes Kartenstyling
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={{
                url: '/images/map-marker-gold.svg',
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              onClick={() => {
                setSelectedLocation(location);
                setActiveLocationId(location.id);
              }}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.coordinates}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="bg-dark-gray text-white p-4 max-w-xs">
                <h4 className="font-serif text-lg mb-2">{selectedLocation.name}</h4>
                <p className="text-sm mb-2">{selectedLocation.address}</p>
                <p className="text-sm">{selectedLocation.city}, {selectedLocation.country}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}; 
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: {
    url: string;
    alt: string;
    isMain?: boolean;
  }[];
  model3dUrl?: string;
  category: string;
  collection: string;
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  gemstones?: {
    type: string;
    carat: number;
    color?: string;
    clarity?: string;
  }[];
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
  openingHours: {
    [key: string]: string;
  };
} 
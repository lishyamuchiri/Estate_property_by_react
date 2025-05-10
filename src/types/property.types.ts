export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    neighborhood: string;
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    yearBuilt: number;
    lotSize: number;
  };
  features: string[];
  images: string[];
  virtualTour?: string;
  listed: Date;
  agent: {
    id: string;
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  propertyType: 'House' | 'Apartment' | 'Condo' | 'Villa' | 'Land';
  neighborhoodScore: {
    overall: number;
    safety: number;
    schools: number;
    transportation: number;
    shopping: number;
    recreation: number;
  };
}

export interface PropertyFilter {
  priceRange: [number, number];
  bedrooms?: number;
  bathrooms?: number;
  squareFeetRange?: [number, number];
  propertyType?: Property['propertyType'][];
  features?: string[];
  neighborhood?: string[];
}

export interface SavedSearch {
  id: string;
  name: string;
  filter: PropertyFilter;
  createdAt: Date;
  notificationsEnabled: boolean;
}
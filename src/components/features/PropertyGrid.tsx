import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../../types/property.types';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ 
  properties, 
  title, 
  subtitle 
}) => {
  return (
    <div className="container mx-auto px-4 py-12">
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      )}
      {subtitle && (
        <p className="text-gray-600 mb-8">{subtitle}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {properties.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
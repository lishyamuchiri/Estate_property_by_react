import React from 'react';
import PropertyGrid from './PropertyGrid';
import { Property } from '../../types/property.types';

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ properties }) => {
  // Get a subset of properties for the featured section
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary properties that represent the pinnacle of luxury real estate.
          </p>
        </div>
        
        <PropertyGrid properties={featuredProperties} />
        
        <div className="text-center mt-10">
          <a 
            href="/properties" 
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 bg-white rounded-lg hover:bg-indigo-50 transition duration-300"
          >
            <span className="font-medium">View All Properties</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
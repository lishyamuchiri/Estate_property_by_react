import React, { useState } from 'react';
import { Heart, ArrowRight, BedDouble, Bath, Home, Ruler } from 'lucide-react';
import { Property } from '../../types/property.types';
import { Link } from '../ui/Link';
import { formatCurrency, formatDate } from '../../utils/formatters';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Link href={`/properties/${property.id}`} className="block">
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        {/* Property Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={property.images[currentImageIndex]} 
            alt={property.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          
          {/* Image Navigation */}
          {property.images.length > 1 && (
            <>
              <button 
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-all"
                aria-label="Previous image"
              >
                <ArrowRight size={16} className="rotate-180" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-all"
                aria-label="Next image"
              >
                <ArrowRight size={16} />
              </button>
            </>
          )}
          
          {/* Status Tag */}
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-semibold px-2 py-1 rounded ${
              property.status === 'For Sale' 
                ? 'bg-emerald-100 text-emerald-800' 
                : property.status === 'For Rent'
                ? 'bg-blue-100 text-blue-800'
                : property.status === 'Sold'
                ? 'bg-gray-100 text-gray-800'
                : 'bg-orange-100 text-orange-800'
            }`}>
              {property.status}
            </span>
          </div>
          
          {/* Favorite Button */}
          <button 
            className={`absolute top-3 right-3 p-2 rounded-full ${
              isFavorite 
                ? 'bg-red-100 text-red-500' 
                : 'bg-white bg-opacity-80 text-gray-600 hover:text-red-500'
            } transition-colors`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          
          {/* Price Tag */}
          <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg">
            <span className="font-semibold">{formatCurrency(property.price)}</span>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {property.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-1">
            {property.address.street}, {property.address.city}, {property.address.state}
          </p>
          
          {/* Property Specs */}
          <div className="flex justify-between text-sm text-gray-700 mb-4">
            <div className="flex items-center">
              <BedDouble size={16} className="mr-1" />
              <span>{property.specs.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1" />
              <span>{property.specs.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Ruler size={16} className="mr-1" />
              <span>{property.specs.squareFeet.toLocaleString()} sq ft</span>
            </div>
          </div>
          
          {/* Property Description */}
          <p className="text-gray-700 text-sm line-clamp-2 mb-3">
            {property.description}
          </p>
          
          {/* Neighborhood Score */}
          <div className="mt-auto">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Home size={16} className="mr-1 text-indigo-600" />
                <span className="text-gray-700">{property.propertyType}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 text-gray-700">Neighborhood:</span>
                <span className={`font-semibold ${
                  property.neighborhoodScore.overall >= 9 ? 'text-emerald-600' :
                  property.neighborhoodScore.overall >= 8 ? 'text-blue-600' :
                  property.neighborhoodScore.overall >= 7 ? 'text-yellow-600' :
                  'text-gray-600'
                }`}>
                  {property.neighborhoodScore.overall.toFixed(1)}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
              <span>Listed {formatDate(property.listed)}</span>
              <span className="text-indigo-600 font-medium hover:underline">
                View Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
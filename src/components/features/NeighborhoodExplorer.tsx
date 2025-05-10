import React, { useState } from 'react';
import { MapPin, Star, Shield, School, Train, ShoppingBag, Palmtree } from 'lucide-react';
import { Property } from '../../types/property.types';

interface NeighborhoodExplorerProps {
  properties: Property[];
}

const NeighborhoodExplorer: React.FC<NeighborhoodExplorerProps> = ({ properties }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(
    properties.length > 0 ? properties[0].address.neighborhood : null
  );

  // Get unique neighborhoods from properties
  const neighborhoods = [...new Set(properties.map(p => p.address.neighborhood))];

  // Get property from selected neighborhood
  const selectedProperty = properties.find(
    p => p.address.neighborhood === selectedNeighborhood
  );

  // Get neighborhood scores
  const scores = selectedProperty?.neighborhoodScore || {
    overall: 0,
    safety: 0,
    schools: 0,
    transportation: 0,
    shopping: 0,
    recreation: 0
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'bg-emerald-500';
    if (score >= 8) return 'bg-blue-500';
    if (score >= 7) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Neighborhoods
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the unique character and livability of our featured neighborhoods and find the perfect community for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Neighborhood Selector and Scores */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Select a Neighborhood
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {neighborhoods.map(neighborhood => (
                <button
                  key={neighborhood}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedNeighborhood === neighborhood
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-300'
                  }`}
                  onClick={() => setSelectedNeighborhood(neighborhood)}
                >
                  {neighborhood}
                </button>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="mr-2 text-indigo-600" size={20} />
              {selectedNeighborhood} Overview
            </h3>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Star className="mr-2 text-amber-500" size={18} />
                  <span className="text-gray-700">Overall Score</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold mr-2">{scores.overall.toFixed(1)}</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(scores.overall)}`} 
                      style={{ width: `${scores.overall * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="mr-2 text-blue-500" size={18} />
                  <span className="text-gray-700">Safety</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{scores.safety.toFixed(1)}</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(scores.safety)}`} 
                      style={{ width: `${scores.safety * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <School className="mr-2 text-emerald-500" size={18} />
                  <span className="text-gray-700">Schools</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{scores.schools.toFixed(1)}</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(scores.schools)}`} 
                      style={{ width: `${scores.schools * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Train className="mr-2 text-purple-500" size={18} />
                  <span className="text-gray-700">Transportation</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{scores.transportation.toFixed(1)}</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(scores.transportation)}`} 
                      style={{ width: `${scores.transportation * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ShoppingBag className="mr-2 text-orange-500" size={18} />
                  <span className="text-gray-700">Shopping</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{scores.shopping.toFixed(1)}</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(scores.shopping)}`} 
                      style={{ width: `${scores.shopping * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Palmtree className="mr-2 text-green-500" size={18} />
                  <span className="text-gray-700">Recreation</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{scores.recreation.toFixed(1)}</span>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(scores.recreation)}`} 
                      style={{ width: `${scores.recreation * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Visualization */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
            {/* Placeholder for real map integration */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              {selectedProperty ? (
                <img 
                  src={selectedProperty.images[0]} 
                  alt={`${selectedProperty.address.neighborhood} Neighborhood`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-500">Map loading...</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedNeighborhood}</h3>
                <p className="text-gray-200 mb-4">Explore this extraordinary neighborhood and discover all it has to offer.</p>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition w-max">
                  View Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodExplorer;
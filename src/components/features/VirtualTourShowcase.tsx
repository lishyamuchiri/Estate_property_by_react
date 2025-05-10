import React, { useState } from 'react';
import { Property } from '../../types/property.types';
import { Button } from '../ui/Button';
import { Eye3d, Maximize, Volume2, VolumeX, Ruler, PanelRight, MessageCircle } from 'lucide-react';

interface VirtualTourShowcaseProps {
  properties: Property[];
}

const VirtualTourShowcase: React.FC<VirtualTourShowcaseProps> = ({ properties }) => {
  const propertiesWithTour = properties.filter(property => property.virtualTour);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
    propertiesWithTour.length > 0 ? propertiesWithTour[0].id : null
  );
  const [muted, setMuted] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const selectedProperty = propertiesWithTour.find(p => p.id === selectedPropertyId);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Immersive Virtual Tours
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience our properties in stunning detail without leaving your home. Our interactive 3D tours let you explore every corner at your own pace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Available Virtual Tours</h3>
            
            {propertiesWithTour.map((property) => (
              <button
                key={property.id}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  selectedPropertyId === property.id
                    ? 'bg-indigo-700 ring-2 ring-indigo-400'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedPropertyId(property.id)}
              >
                <div className="flex items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-4">
                    <img 
                      src={property.images[0]} 
                      alt={property.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-200 mb-1">
                      {property.address.city}, {property.address.state}
                    </h4>
                    <h3 className="font-semibold mb-1">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {property.specs.bedrooms} beds • {property.specs.bathrooms} baths • {property.specs.squareFeet.toLocaleString()} sq ft
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Virtual Tour Display */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Virtual Tour Container */}
              <div className="relative aspect-video">
                {selectedProperty ? (
                  <iframe
                    src={selectedProperty.virtualTour}
                    title={`Virtual Tour of ${selectedProperty.title}`}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <p>No virtual tour available</p>
                  </div>
                )}

                {/* Tour Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        icon={muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        onClick={() => setMuted(!muted)}
                        className="text-white hover:bg-white/20"
                      >
                        {muted ? 'Unmute' : 'Mute'}
                      </Button>

                      <Button 
                        variant="ghost" 
                        size="sm"
                        icon={<Maximize size={16} />}
                        className="text-white hover:bg-white/20"
                      >
                        Fullscreen
                      </Button>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant={activeTool === 'measure' ? 'primary' : 'ghost'} 
                        size="sm"
                        icon={<Ruler size={16} />}
                        onClick={() => setActiveTool(activeTool === 'measure' ? null : 'measure')}
                        className={activeTool !== 'measure' ? "text-white hover:bg-white/20" : ""}
                      >
                        Measure
                      </Button>

                      <Button 
                        variant={activeTool === '3d' ? 'primary' : 'ghost'} 
                        size="sm"
                        icon={<Eye3d size={16} />}
                        onClick={() => setActiveTool(activeTool === '3d' ? null : '3d')}
                        className={activeTool !== '3d' ? "text-white hover:bg-white/20" : ""}
                      >
                        3D View
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        icon={<PanelRight size={16} />}
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="text-white hover:bg-white/20"
                      >
                        Info
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sidebar Panel */}
                {showSidebar && selectedProperty && (
                  <div className="absolute top-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm w-72 p-4 overflow-y-auto border-l border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold">Property Details</h3>
                      <button 
                        onClick={() => setShowSidebar(false)}
                        className="text-gray-400 hover:text-white"
                      >
                        &times;
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-400 text-sm">Address</h4>
                        <p>
                          {selectedProperty.address.street}, {selectedProperty.address.city}, {selectedProperty.address.state} {selectedProperty.address.zipCode}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-gray-400 text-sm">Price</h4>
                        <p className="text-lg font-semibold">${selectedProperty.price.toLocaleString()}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-gray-400 text-sm">Features</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {selectedProperty.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          fullWidth
                          variant="primary"
                          icon={<MessageCircle size={16} />}
                        >
                          Schedule a Viewing
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourShowcase;
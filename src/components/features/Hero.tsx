import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-0"></div>
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 z-10">
        <div 
          className="w-64 h-64 rounded-full bg-indigo-600/20 absolute -top-20 -left-20 blur-3xl"
          style={{ 
            transform: 'translateY(calc(var(--scrollY, 0) * 0.2px))',
          }}
        ></div>
        <div 
          className="w-64 h-64 rounded-full bg-blue-600/20 absolute top-40 right-20 blur-3xl"
          style={{ 
            transform: 'translateY(calc(var(--scrollY, 0) * 0.3px))',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-20">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ 
              transform: 'translateY(calc(var(--scrollY, 0) * -0.2px))',
            }}
          >
            Discover Extraordinary <span className="text-indigo-400">Luxury</span> Properties
          </h1>
          
          <p 
            className="text-xl text-gray-200 mb-8 max-w-2xl"
            style={{ 
              transform: 'translateY(calc(var(--scrollY, 0) * -0.1px))',
            }}
          >
            Experience unparalleled service and gain exclusive access to the world's most remarkable properties.
          </p>

          {/* Search Box */}
          <div 
            className="bg-white p-4 rounded-xl shadow-lg mb-8 transition-transform duration-300 hover:shadow-2xl max-w-2xl"
            style={{ 
              transform: 'translateY(calc(var(--scrollY, 0) * -0.05px))',
            }}
          >
            <div className="flex items-center">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="City, address, or ZIP code"
                  className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="ml-3">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<Search size={18} />}
                >
                  Search
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap mt-4 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Buy</span>
                <input type="radio" name="property-type" defaultChecked className="accent-indigo-600" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Rent</span>
                <input type="radio" name="property-type" className="accent-indigo-600" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">New developments</span>
                <input type="radio" name="property-type" className="accent-indigo-600" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div 
            className="flex flex-wrap gap-8 text-white"
            style={{ 
              transform: 'translateY(calc(var(--scrollY, 0) * -0.1px))',
            }}
          >
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-gray-300">Luxury Properties</p>
            </div>
            <div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-gray-300">Expert Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <div className="w-1 h-10 bg-white/30 rounded-full mb-2">
          <div className="w-1 h-5 bg-white rounded-full animate-[scrollDown_2s_infinite]"></div>
        </div>
        <span className="text-sm">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;
import React, { useEffect } from 'react';
import Hero from '../components/features/Hero';
import FeaturedProperties from '../components/features/FeaturedProperties';
import NeighborhoodExplorer from '../components/features/NeighborhoodExplorer';
import VirtualTourShowcase from '../components/features/VirtualTourShowcase';
import MarketInsights from '../components/features/MarketInsights';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { mockProperties } from '../data/mockProperties';

const Home: React.FC = () => {
  // Add parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scrollY', `${window.scrollY}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties properties={mockProperties} />
        <VirtualTourShowcase properties={mockProperties} />
        <NeighborhoodExplorer properties={mockProperties} />
        <MarketInsights />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Client Experiences
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear what our clients have to say about their extraordinary real estate journey with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "Working with Prestige Estates was an absolute pleasure. Their attention to detail and understanding of our needs led us to find our dream home. The virtual tour technology saved us so much time!"
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                    <p className="text-gray-500 text-sm">Homeowner in Malibu</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "The neighborhood insights tool was incredibly helpful in our decision-making process. We felt confident about our investment with the transparent market data Prestige Estates provided."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sophia Rodriguez</h4>
                    <p className="text-gray-500 text-sm">Investor in San Francisco</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "As a first-time luxury property buyer, I was nervous about the process. The team at Prestige Estates guided me every step of the way with professionalism and patience."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">James Wilson</h4>
                    <p className="text-gray-500 text-sm">New Homeowner in Aspen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
              Our team of expert agents is ready to guide you through every step of your real estate journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/properties" 
                className="px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Browse Properties
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Contact an Agent
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
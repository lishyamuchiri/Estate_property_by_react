import React from 'react';
import { Link } from '../ui/Link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Prestige Estates</h3>
            <p className="text-gray-400 mb-6">
              Exceptional properties and unparalleled service for the most discerning clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-gray-400 hover:text-white transition-colors">
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-gray-400 hover:text-white transition-colors">
                  Our Agents
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/buying-guide" className="text-gray-400 hover:text-white transition-colors">
                  Buying Guide
                </Link>
              </li>
              <li>
                <Link href="/selling-guide" className="text-gray-400 hover:text-white transition-colors">
                  Selling Guide
                </Link>
              </li>
              <li>
                <Link href="/mortgage-calculator" className="text-gray-400 hover:text-white transition-colors">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/investment-insights" className="text-gray-400 hover:text-white transition-colors">
                  Investment Insights
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-indigo-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  1234 Luxury Lane, Suite 500<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-indigo-400 mr-2" />
                <a 
                  href="tel:+1-800-555-0123"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (800) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-indigo-400 mr-2" />
                <a 
                  href="mailto:info@prestigeestates.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@prestigeestates.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                Contact an Agent
              </button>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Prestige Estates. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-gray-300 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
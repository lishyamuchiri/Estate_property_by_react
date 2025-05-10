import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, User, Home, Bell } from 'lucide-react';
import { Link } from '../ui/Link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Home 
              className={`mr-2 ${isScrolled ? 'text-indigo-900' : 'text-white'}`} 
              size={28} 
              strokeWidth={2.5} 
            />
            <span 
              className={`font-semibold text-xl ${
                isScrolled ? 'text-indigo-900' : 'text-white'
              }`}
            >
              Prestige Estates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/properties" 
              className={`font-medium hover:text-indigo-500 transition ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Properties
            </Link>
            <Link 
              href="/neighborhoods" 
              className={`font-medium hover:text-indigo-500 transition ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Neighborhoods
            </Link>
            <Link 
              href="/agents" 
              className={`font-medium hover:text-indigo-500 transition ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Agents
            </Link>
            <Link 
              href="/insights" 
              className={`font-medium hover:text-indigo-500 transition ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Market Insights
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className={`p-2 rounded-full hover:bg-gray-100 transition ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className={`p-2 rounded-full hover:bg-gray-100 transition ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Favorites"
            >
              <Heart size={20} />
            </button>
            <button 
              className={`p-2 rounded-full hover:bg-gray-100 transition ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>
            <Link 
              href="/account" 
              className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <User size={20} />
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 shadow-md`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
                size={24} 
              />
            ) : (
              <Menu 
                className={isScrolled ? 'text-gray-800' : 'text-white'} 
                size={24} 
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4">
          <Link 
            href="/properties" 
            className="font-medium text-gray-800 hover:text-indigo-600 py-2 transition"
          >
            Properties
          </Link>
          <Link 
            href="/neighborhoods" 
            className="font-medium text-gray-800 hover:text-indigo-600 py-2 transition"
          >
            Neighborhoods
          </Link>
          <Link 
            href="/agents" 
            className="font-medium text-gray-800 hover:text-indigo-600 py-2 transition"
          >
            Agents
          </Link>
          <Link 
            href="/insights" 
            className="font-medium text-gray-800 hover:text-indigo-600 py-2 transition"
          >
            Market Insights
          </Link>
          <div className="flex items-center space-x-4 pt-2">
            <button className="p-2 text-gray-700 rounded-full hover:bg-gray-100 transition">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 rounded-full hover:bg-gray-100 transition">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-700 rounded-full hover:bg-gray-100 transition">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-700 rounded-full hover:bg-gray-100 transition">
              <User size={20} />
            </button>
          </div>
          <Link 
            href="/contact" 
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-center hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
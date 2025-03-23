
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-arcade-dark border-t border-white/10 pt-16 pb-8 animate-fade-in">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="mb-4 inline-block">
              <h3 className="text-2xl font-bold">
                <span className="text-neon-blue">C&C</span> Arcade Games
              </h3>
            </Link>
            <p className="text-gray-300 mb-4">
              Lebanon's premier supplier of arcade machines, providing high-quality gaming solutions for businesses and enthusiasts.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-arcade-muted flex items-center justify-center text-white hover:bg-neon-blue transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-arcade-muted flex items-center justify-center text-white hover:bg-neon-pink transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-arcade-muted flex items-center justify-center text-white hover:bg-neon-green transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-blue transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-neon-blue transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-neon-blue transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-neon-blue transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-neon-blue transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-neon-pink transition-colors duration-200">
                  Classic Arcade Cabinets
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-neon-pink transition-colors duration-200">
                  Modern Machines
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-neon-pink transition-colors duration-200">
                  Redemption Games
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-neon-pink transition-colors duration-200">
                  Parts & Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-neon-blue shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  Beirut, Lebanon
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-neon-green shrink-0" size={18} />
                <a href="tel:+9611234567" className="text-gray-300 hover:text-neon-green transition-colors duration-200">
                  +961 1 234 567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-neon-pink shrink-0" size={18} />
                <a href="mailto:info@ccarcadegames.com" className="text-gray-300 hover:text-neon-pink transition-colors duration-200">
                  info@ccarcadegames.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 text-neon-blue shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  Mon - Fri: 9:00 AM - 6:00 PM <br />
                  Sat: 10:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} C&C Arcade Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import NeonButton from '../ui/NeonButton';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the menu when navigating
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8",
        isScrolled 
          ? "py-3 bg-arcade-dark/90 backdrop-blur-lg border-b border-white/10 shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="text-2xl font-bold relative group">
            <span className="text-neon-blue">C&C</span> Arcade Games
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-white relative px-1 py-2 group transition-colors duration-200 hover:text-neon-blue",
                location.pathname === link.path && "text-neon-blue"
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300",
                  location.pathname === link.path && "w-full"
                )}
              ></span>
            </Link>
          ))}
          <NeonButton href="/contact" size="sm">
            Get a Quote
          </NeonButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-arcade-dark/95 backdrop-blur-lg z-40 transition-transform duration-300 transform md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center min-h-screen -mt-16 space-y-8 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xl text-white hover:text-neon-blue transition-colors duration-200",
                location.pathname === link.path && "text-neon-blue"
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <NeonButton href="/contact" onClick={closeMenu}>
            Get a Quote
          </NeonButton>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

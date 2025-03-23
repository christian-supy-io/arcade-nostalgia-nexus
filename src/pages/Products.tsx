
import React, { useState, useEffect } from 'react';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';
import ProductCard from '@/components/ui/ProductCard';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'classic', name: 'Classic Arcade Cabinets' },
    { id: 'modern', name: 'Modern Machines' },
    { id: 'redemption', name: 'Redemption Games' },
    { id: 'parts', name: 'Parts & Accessories' }
  ];
  
  const products = [
    {
      title: 'Classic Multi-Game Arcade',
      description: 'Authentic arcade cabinet with 800+ classic games from the 80s and 90s.',
      imageSrc: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?q=80&w=1000&auto=format&fit=crop',
      features: ['800+ classic games', 'Authentic joysticks and buttons', 'CRT-style display option', 'Custom artwork available'],
      category: 'classic',
      color: 'blue' as const
    },
    {
      title: 'Retro Cocktail Arcade Table',
      description: 'Classic cocktail-style table arcade with dual controls and multiple game options.',
      imageSrc: 'https://images.unsplash.com/photo-1513073945253-e2d4a8b0b791?q=80&w=1000&auto=format&fit=crop',
      features: ['Dual player controls', '400+ games', 'Tempered glass surface', 'LED lighting effects'],
      category: 'classic',
      color: 'pink' as const
    },
    {
      title: 'Virtual Reality Racing Simulator',
      description: 'State-of-the-art VR racing experience with motion platform and force feedback.',
      imageSrc: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop',
      features: ['VR headset integration', 'Motion platform', 'Force feedback steering', 'Multiple racing titles'],
      category: 'modern',
      color: 'green' as const
    },
    {
      title: 'Premium Dance Machine',
      description: 'Commercial-grade dance arcade with HD display, premium sound, and thousands of songs.',
      imageSrc: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1000&auto=format&fit=crop',
      features: ['HD display', 'Premium sound system', '2000+ songs', 'Online leaderboards'],
      category: 'modern',
      color: 'blue' as const
    },
    {
      title: 'Basketball Pro Arcade',
      description: 'Commercial basketball arcade game with electronic scoring and authentic feel.',
      imageSrc: 'https://images.unsplash.com/photo-1571536444459-ce2f6c0e9b5f?q=80&w=1000&auto=format&fit=crop',
      features: ['Electronic scoring', 'Sound effects', 'Durable construction', 'Multiplayer modes'],
      category: 'redemption',
      color: 'pink' as const
    },
    {
      title: 'Ticket Redemption Package',
      description: 'Complete ticket redemption system including dispenser, games, and prize management.',
      imageSrc: 'https://images.unsplash.com/photo-1503852460961-aa7ffdd3d64d?q=80&w=1000&auto=format&fit=crop',
      features: ['Ticket dispenser', 'Prize management system', 'Multiple game options', 'Easy maintenance'],
      category: 'redemption',
      color: 'green' as const
    },
    {
      title: 'Arcade Control Kit',
      description: 'DIY arcade control kit with premium joysticks, buttons, and controller board.',
      imageSrc: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1000&auto=format&fit=crop',
      features: ['Premium joysticks', 'LED buttons', 'Pre-wired harness', 'USB interface'],
      category: 'parts',
      color: 'blue' as const
    },
    {
      title: 'Replacement Screen Kit',
      description: 'LCD screen replacement kit for various arcade machine models with mounting hardware.',
      imageSrc: 'https://images.unsplash.com/photo-1642878686837-6a458481c990?q=80&w=1000&auto=format&fit=crop',
      features: ['Multiple size options', 'High resolution', 'Low latency', 'Installation hardware included'],
      category: 'parts',
      color: 'pink' as const
    }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-arcade-dark pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10 text-center">
          <h1 className="mb-6 animate-fade-in-up">
            Our <AnimatedGradientText>Products</AnimatedGradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our extensive collection of arcade machines, games, and accessories for your business or collection.
          </p>
        </div>
      </section>
      
      {/* Category Filters */}
      <section className="py-8 bg-arcade-dark">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-neon-blue text-white shadow-neon-blue'
                    : 'bg-arcade-muted hover:bg-arcade-muted/80 text-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="page-section bg-arcade-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                features={product.features}
                color={product.color}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section className="page-section bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Custom <span className="text-neon-green">Solutions</span></h2>
                <p className="text-gray-300 mb-6">
                  Can't find exactly what you're looking for? We specialize in creating custom arcade solutions 
                  tailored to your specific requirements, space limitations, and budget.
                </p>
                <p className="text-gray-300 mb-6">
                  From custom cabinet designs and branding to specialized gaming packages, our team can build 
                  the perfect arcade experience for your business or personal collection.
                </p>
                <p className="text-gray-300">
                  Contact us to discuss your custom arcade machine needs.
                </p>
              </div>
              
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?q=80&w=1000&auto=format&fit=crop" 
                  alt="Custom arcade solution" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

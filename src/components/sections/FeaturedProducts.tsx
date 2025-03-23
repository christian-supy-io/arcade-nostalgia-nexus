
import React from 'react';
import ProductCard from '../ui/ProductCard';
import NeonButton from '../ui/NeonButton';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      title: 'Classic Arcade Cabinet',
      description: 'Multi-game arcade cabinet featuring 800+ classic games in an authentic vintage design.',
      imageSrc: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?q=80&w=1000&auto=format&fit=crop',
      features: ['800+ games', 'Authentic joysticks', 'LED lighting', 'Customizable artwork'],
      color: 'blue' as const
    },
    {
      title: 'Racing Simulator',
      description: 'Professional-grade racing simulator with motion feedback and ultra-HD displays.',
      imageSrc: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop',
      features: ['Motion feedback', 'Ultra-HD displays', 'Professional controls', 'Multi-player support'],
      color: 'pink' as const
    },
    {
      title: 'Basketball Arcade Game',
      description: 'Commercial-grade basketball arcade game with electronic scoring and sound effects.',
      imageSrc: 'https://images.unsplash.com/photo-1571536444459-ce2f6c0e9b5f?q=80&w=1000&auto=format&fit=crop',
      features: ['Electronic scoring', 'Sound effects', 'Durable construction', 'Timer features'],
      color: 'green' as const
    },
    {
      title: 'Dance Machine Pro',
      description: 'Professional dance arcade machine with LED platform, HD screen, and thousands of songs.',
      imageSrc: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1000&auto=format&fit=crop',
      features: ['LED platform', 'HD screen', '1000+ songs', 'Online updates'],
      color: 'blue' as const
    }
  ];

  return (
    <section className="page-section bg-arcade-dark">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured <span className="text-neon-blue">Products</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular arcade machines and games, perfect for entertainment venues, 
            restaurants, and private collections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
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
        
        <div className="mt-12 text-center">
          <NeonButton href="/products" size="lg" color="blue">
            View All Products
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

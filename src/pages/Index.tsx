
import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import NeonButton from '@/components/ui/NeonButton';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-arcade-dark">
      <HeroSection />
      
      {/* About Brief */}
      <section className="page-section bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 glass-card p-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1523843268911-45a882919fec?q=80&w=1000&auto=format&fit=crop" 
              alt="C&C Arcade Games Showroom" 
              className="w-full h-full object-cover rounded"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2>About <span className="text-neon-green">C&C Arcade Games</span></h2>
            <p className="text-gray-300">
              As Lebanon's premier arcade machine supplier, C&C Arcade Games brings the magic of interactive entertainment to businesses across the country. 
              With years of industry experience, we pride ourselves on delivering exceptional quality, reliable service, and cutting-edge technology.
            </p>
            <p className="text-gray-300">
              Our extensive inventory includes everything from classic arcade cabinets to modern redemption games, all maintained to the highest standards.
            </p>
            <div className="pt-2">
              <NeonButton href="/about" color="green">
                Learn More About Us
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      <TestimonialsSection />
      
      <ServicesOverview />
      
      {/* CTA Section */}
      <section className="py-20 bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.2),_transparent_70%)] opacity-60"></div>
        
        <div className="container-tight relative z-10">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="mb-4">Ready to <span className="text-neon-blue">Level Up</span> Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss your arcade gaming needs. Whether you're looking to purchase, repair, 
              or create custom machines, our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NeonButton href="/contact" color="blue" size="lg">
                Contact Us
              </NeonButton>
              <NeonButton href="/products" color="pink" variant="outline" size="lg">
                Browse Products
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

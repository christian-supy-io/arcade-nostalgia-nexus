
import React, { useEffect } from 'react';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';
import { Check, Award, Users, Clock } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Check className="text-neon-blue" size={24} />,
      title: 'Quality',
      description: 'We source and maintain only the highest quality arcade machines and components.'
    },
    {
      icon: <Award className="text-neon-pink" size={24} />,
      title: 'Expertise',
      description: 'Our team brings years of specialized knowledge in arcade technology and maintenance.'
    },
    {
      icon: <Users className="text-neon-green" size={24} />,
      title: 'Service',
      description: 'We\'re committed to exceptional customer service and satisfaction.'
    },
    {
      icon: <Clock className="text-neon-blue" size={24} />,
      title: 'Reliability',
      description: 'Fast response times and dependable support you can count on.'
    }
  ];

  return (
    <div className="min-h-screen bg-arcade-dark pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10 text-center">
          <h1 className="mb-6 animate-fade-in-up">
            About <AnimatedGradientText>C&C Arcade Games</AnimatedGradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Lebanon's premier arcade machine supplier, bringing joy and entertainment to businesses across the country.
          </p>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="page-section bg-arcade-dark">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2>Our <span className="text-neon-blue">Story</span></h2>
              <p className="text-gray-300">
                C&C Arcade Games was founded with a vision to bring high-quality arcade entertainment
                to businesses throughout Lebanon. What began as a passion for arcade gaming quickly
                evolved into a professional venture when we identified the need for reliable arcade
                machine suppliers in the local market.
              </p>
              <p className="text-gray-300">
                Over the years, we've built a reputation for excellence in both our products and
                services. Our team combines technical expertise with a genuine love for arcade
                culture, ensuring that we deliver not just machines, but experiences that captivate
                and delight.
              </p>
              <p className="text-gray-300">
                Today, we're proud to serve a diverse clientele ranging from mall entertainment
                centers and restaurants to private collectors, all while maintaining our commitment
                to quality, innovation, and exceptional service.
              </p>
            </div>
            
            <div className="glass-card p-4 order-1 md:order-2 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1000&auto=format&fit=crop" 
                alt="Arcade machine workshop" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="page-section bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(236,72,153,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our <span className="text-neon-pink">Values</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At C&C Arcade Games, we believe in delivering more than just products. 
              Our core values drive everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Showroom/Team */}
      <section className="page-section bg-arcade-dark">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our <span className="text-neon-green">Showroom</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit our showroom to experience our arcade machines firsthand and speak with our expert team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-4 overflow-hidden row-span-2 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1577526093184-917a56c466b0?q=80&w=1000&auto=format&fit=crop" 
                alt="Arcade showroom" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="glass-card p-4 overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop" 
                alt="Classic arcade machines" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="glass-card p-4 overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1464495973137-65ce96f03f67?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern arcade setup" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="glass-card p-4 overflow-hidden col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1513073945253-e2d4a8b0b791?q=80&w=1000&auto=format&fit=crop" 
                alt="Team working on arcade machine" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

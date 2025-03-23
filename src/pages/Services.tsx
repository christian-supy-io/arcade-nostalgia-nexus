
import React, { useEffect } from 'react';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';
import { ShoppingBag, Tool, PenTool, Clock, Package, Settings, Truck, Zap } from 'lucide-react';
import NeonButton from '@/components/ui/NeonButton';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      title: 'Sales & Distribution',
      description: 'Comprehensive selection of arcade machines for purchase or lease',
      icon: <ShoppingBag size={40} />,
      color: 'blue' as const,
      services: [
        {
          title: 'New Machines',
          description: 'Latest arcade machines from top manufacturers, fully tested and warranted',
        },
        {
          title: 'Refurbished Classics',
          description: 'Professionally restored vintage arcade cabinets with modern upgrades',
        },
        {
          title: 'Bulk Orders',
          description: 'Special pricing and support for entertainment centers and large venues',
        }
      ]
    },
    {
      title: 'Maintenance & Support',
      description: 'Professional service to keep your arcade machines in peak condition',
      icon: <Tool size={40} />,
      color: 'pink' as const,
      services: [
        {
          title: 'Regular Maintenance',
          description: 'Scheduled service visits to prevent issues and extend machine life',
        },
        {
          title: 'Emergency Repairs',
          description: 'Rapid response technical support when machines malfunction',
        },
        {
          title: 'Service Contracts',
          description: 'Ongoing maintenance plans with priority support and discounted parts',
        }
      ]
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored arcade machines and systems for specific needs',
      icon: <PenTool size={40} />,
      color: 'green' as const,
      services: [
        {
          title: 'Custom Cabinets',
          description: 'Unique arcade cabinet designs matched to your brand and space',
        },
        {
          title: 'Game Customization',
          description: 'Specialized game content and configurations for your target audience',
        },
        {
          title: 'Branded Machines',
          description: 'Incorporate your business branding into arcade machines',
        }
      ]
    },
    {
      title: 'Rental Services',
      description: 'Short-term arcade machine rentals for events and promotions',
      icon: <Clock size={40} />,
      color: 'blue' as const,
      services: [
        {
          title: 'Event Packages',
          description: 'Multiple machine packages for corporate events and large parties',
        },
        {
          title: 'Weekend Rentals',
          description: 'Short-term rentals for special occasions and small gatherings',
        },
        {
          title: 'Long-term Leasing',
          description: 'Flexible leasing options for seasonal businesses and venues',
        }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Package size={24} />,
      title: 'Spare Parts Supply',
      description: 'Extensive inventory of arcade machine components and accessories'
    },
    {
      icon: <Settings size={24} />,
      title: 'Game Updates',
      description: 'Software updates and new game installations for modern machines'
    },
    {
      icon: <Truck size={24} />,
      title: 'Delivery & Installation',
      description: 'Professional delivery, setup, and installation services'
    },
    {
      icon: <Zap size={24} />,
      title: 'Technical Training',
      description: 'Staff training for basic machine operation and maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-arcade-dark pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10 text-center">
          <h1 className="mb-6 animate-fade-in-up">
            Our <AnimatedGradientText>Services</AnimatedGradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive arcade gaming solutions to meet the needs of any entertainment venue or collector.
          </p>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="page-section bg-arcade-dark">
        <div className="container-wide">
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${
                  category.color === 'blue' ? 'bg-neon-blue/20 text-neon-blue' : 
                  category.color === 'pink' ? 'bg-neon-pink/20 text-neon-pink' : 
                  'bg-neon-green/20 text-neon-green'
                }`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium">{category.title}</h2>
                  <p className="text-gray-300 text-lg">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex} 
                    className={`glass-card p-6 border border-white/5 transition-all duration-300 animate-fade-in-up hover:shadow-lg ${
                      category.color === 'blue' ? 'hover:shadow-neon-blue' : 
                      category.color === 'pink' ? 'hover:shadow-neon-pink' : 
                      'hover:shadow-neon-green'
                    }`}
                    style={{ animationDelay: `${0.1 * serviceIndex}s` }}
                  >
                    <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="page-section bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4">Additional <span className="text-neon-blue">Services</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond our core offerings, we provide these specialized services to meet all your arcade needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="page-section bg-arcade-dark">
        <div className="container-tight">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="mb-4">Need a <span className="text-neon-pink">Custom Service</span>?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Don't see exactly what you're looking for? Contact us to discuss your specific arcade service needs.
              We're flexible and ready to create custom solutions for unique requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NeonButton href="/contact" color="pink" size="lg">
                Contact Us
              </NeonButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

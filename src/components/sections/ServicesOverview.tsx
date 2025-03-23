
import React from 'react';
import { ShoppingBag, Tool, PenTool, Clock, Package } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import NeonButton from '../ui/NeonButton';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'New & Refurbished Sales',
      description: 'Browse our extensive collection of new and professionally refurbished arcade machines for your business or collection.',
      icon: <ShoppingBag size={24} />,
      color: 'blue' as const
    },
    {
      title: 'Maintenance & Repair',
      description: 'Expert maintenance and repair services to keep your machines running perfectly, with fast response times.',
      icon: <Tool size={24} />,
      color: 'pink' as const
    },
    {
      title: 'Custom Cabinet Design',
      description: 'Work with our design team to create custom arcade cabinets that match your brand and space requirements.',
      icon: <PenTool size={24} />,
      color: 'green' as const
    },
    {
      title: 'Event Rentals',
      description: 'Short-term arcade machine rentals for corporate events, parties, and special occasions.',
      icon: <Clock size={24} />,
      color: 'blue' as const
    },
    {
      title: 'Spare Parts Supply',
      description: 'High-quality replacement parts for a wide range of arcade machines, from classic to modern.',
      icon: <Package size={24} />,
      color: 'pink' as const
    }
  ];
  
  return (
    <section className="page-section bg-arcade-dark">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our <span className="text-neon-green">Services</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive arcade gaming solutions, from sales and maintenance to 
            custom installations and event rentals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <NeonButton href="/services" size="lg" color="green">
            View All Services
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

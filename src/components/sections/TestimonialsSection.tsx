
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "C&C Arcade Games transformed our restaurant's entertainment area. The machines are high quality and the service has been exceptional.",
      author: "Ahmad Khalil",
      role: "Owner",
      company: "Beirut Family Restaurant",
      color: 'blue' as const
    },
    {
      quote: "As a collector, I appreciate their attention to detail and knowledge. They helped me find rare parts for my vintage arcade machines.",
      author: "Sarah Haddad",
      role: "Arcade Collector",
      color: 'pink' as const
    },
    {
      quote: "Our mall's arcade section has seen a 40% increase in revenue since installing C&C's machines. Reliable products and great ongoing support.",
      author: "Mohammad Ibrahim",
      role: "General Manager",
      company: "City Center Mall",
      color: 'green' as const
    }
  ];
  
  return (
    <section className="page-section bg-arcade-dark relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15),_transparent_50%)] opacity-60"></div>
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Our <span className="text-neon-pink">Clients</span> Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners and arcade enthusiasts 
            have to say about our products and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              color={testimonial.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

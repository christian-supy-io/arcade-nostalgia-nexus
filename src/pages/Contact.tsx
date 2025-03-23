
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';
import ContactForm from '@/components/ui/ContactForm';
import NeonButton from '@/components/ui/NeonButton';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const contactInfo = [
    {
      icon: <MapPin className="text-neon-blue" size={24} />,
      title: 'Location',
      details: ['123 Arcade Street', 'Beirut, Lebanon']
    },
    {
      icon: <Phone className="text-neon-pink" size={24} />,
      title: 'Phone',
      details: ['+961 71 123 456', '+961 1 987 654']
    },
    {
      icon: <Mail className="text-neon-green" size={24} />,
      title: 'Email',
      details: ['info@ccarcade.com', 'support@ccarcade.com']
    },
    {
      icon: <Clock className="text-neon-blue" size={24} />,
      title: 'Business Hours',
      details: ['Monday-Friday: 9am-6pm', 'Saturday: 10am-4pm', 'Sunday: Closed']
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-arcade-dark pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10 text-center">
          <h1 className="mb-6 animate-fade-in-up">
            Contact <AnimatedGradientText>Us</AnimatedGradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Get in touch with our team to discuss your arcade gaming needs or schedule a showroom visit.
          </p>
        </div>
      </section>
      
      {/* Contact Details and Form */}
      <section className="page-section bg-arcade-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-6 md:p-8 order-2 lg:order-1">
              <h2 className="mb-6">Send us a <span className="text-neon-green">Message</span></h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2>Contact <span className="text-neon-pink">Information</span></h2>
              <p className="text-gray-300">
                Have questions or want to schedule a visit to our showroom?
                Contact us using any of the methods below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="glass-card p-6 flex items-start space-x-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                    onClick={() => item.title === 'Email' && copyToClipboard(item.details[0])}
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">
                          {detail}
                          {item.title === 'Email' && detailIndex === 0 && (
                            <span className="ml-2 text-xs text-neon-blue">
                              {isCopied ? '(Copied!)' : '(Click to copy)'}
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Media */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                <p className="text-gray-300 mb-4">
                  Stay updated with our latest arcade machines and promotions.
                </p>
                <div className="flex space-x-4">
                  <NeonButton 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    color="green"
                  >
                    Facebook
                  </NeonButton>
                  <NeonButton 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    color="pink"
                  >
                    Instagram
                  </NeonButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="page-section bg-arcade-dark">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2>Our <span className="text-neon-blue">Location</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Visit our showroom to experience our arcade machines in person.
            </p>
          </div>
          
          <div className="glass-card p-4 h-[400px] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13249.265804456327!2d35.47785915!3d33.89291255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17c1d29c4007%3A0x7d8a698d3d9ef98e!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1668974200000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="C&C Arcade Games Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

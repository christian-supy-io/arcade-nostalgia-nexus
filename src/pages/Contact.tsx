
import React, { useEffect } from 'react';
import AnimatedGradientText from '@/components/ui/AnimatedGradientText';
import ContactForm from '@/components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import NeonButton from '@/components/ui/NeonButton';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'Beirut, Lebanon',
      color: 'blue' as const
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+961 1 234 567',
      link: 'tel:+9611234567',
      color: 'pink' as const
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'info@ccarcadegames.com',
      link: 'mailto:info@ccarcadegames.com',
      color: 'green' as const
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM | Sat: 10AM-2PM',
      color: 'blue' as const
    }
  ];

  return (
    <div className="min-h-screen bg-arcade-dark pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10 text-center">
          <h1 className="mb-6 animate-fade-in-up">
            Contact <AnimatedGradientText>Us</AnimatedGradientText>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Have questions or want to discuss your arcade gaming needs? We're here to help.
          </p>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-8 bg-arcade-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ 
                  animationDelay: `${0.1 * index}s`,
                  boxShadow: `0 0 0 transparent`,
                  [`&:hover`]: {
                    boxShadow: info.color === 'blue' ? '0 0 15px rgba(14,165,233,0.5)' : 
                               info.color === 'pink' ? '0 0 15px rgba(236,72,153,0.5)' : 
                               '0 0 15px rgba(16,185,129,0.5)'
                  }
                }}
              >
                <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4 ${
                  info.color === 'blue' ? 'bg-neon-blue/20 text-neon-blue' : 
                  info.color === 'pink' ? 'bg-neon-pink/20 text-neon-pink' : 
                  'bg-neon-green/20 text-neon-green'
                }`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className={`hover:${info.color === 'blue' ? 'text-neon-blue' : 
                                         info.color === 'pink' ? 'text-neon-pink' : 
                                         'text-neon-green'} transition-colors duration-200`}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="page-section bg-arcade-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Send Us a <span className="text-neon-blue">Message</span></h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
                We're here to answer any questions about our products, services, or how we can
                help with your arcade gaming needs.
              </p>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="mb-6">Find <span className="text-neon-pink">Us</span></h2>
              <div className="glass-card p-4 h-[400px] overflow-hidden mb-6">
                {/* Replace with actual map embed code */}
                <div className="bg-arcade-muted h-full flex items-center justify-center">
                  <p className="text-gray-300">Map Placeholder - Will be replaced with actual Google Maps embed</p>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neon-green/20 text-neon-green mr-4 shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">WhatsApp Support</h3>
                    <p className="text-gray-300 mb-4">
                      For quick responses, you can also reach us on WhatsApp during business hours.
                    </p>
                    <NeonButton 
                      href="https://wa.me/9611234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      color="green"
                    >
                      Chat on WhatsApp
                    </NeonButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="page-section bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.15),_transparent_50%)] opacity-60"></div>
        
        <div className="container-tight relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked <span className="text-neon-pink">Questions</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to our most commonly asked questions.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Do you offer maintenance contracts?',
                answer: 'Yes, we offer flexible maintenance contracts tailored to your specific needs and the number of machines you have. Our contracts include regular check-ups, emergency repairs, and discounted parts.'
              },
              {
                question: 'Can you customize arcade machines with our branding?',
                answer: 'Absolutely! We specialize in custom branding for arcade machines, including custom cabinet designs, themed graphics, and custom game screens featuring your logo or brand elements.'
              },
              {
                question: 'What areas in Lebanon do you service?',
                answer: 'We provide sales and service throughout Lebanon, including Beirut, Tripoli, Sidon, Tyre, Jounieh, and surrounding areas. For remote locations, additional travel fees may apply.'
              },
              {
                question: 'Do you offer installation services?',
                answer: 'Yes, we provide professional installation services for all machines purchased from us. This includes delivery, setup, testing, and basic training for your staff on machine operation.'
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

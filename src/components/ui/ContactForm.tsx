
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import NeonButton from './NeonButton';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-arcade-muted border border-white/10 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-arcade-muted border border-white/10 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-arcade-muted border border-white/10 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-arcade-muted border border-white/10 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition"
          >
            <option value="">Select a subject</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Service Request">Service Request</option>
            <option value="Price Quote">Price Quote</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-arcade-muted border border-white/10 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent transition resize-none"
        />
      </div>
      
      <div className="mt-6">
        <NeonButton
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </NeonButton>
      </div>
    </form>
  );
};

export default ContactForm;

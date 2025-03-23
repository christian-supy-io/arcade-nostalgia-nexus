
import React, { useEffect, useRef } from 'react';
import NeonButton from '../ui/NeonButton';
import AnimatedGradientText from '../ui/AnimatedGradientText';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 bg-arcade-dark overflow-hidden"
      style={{
        background: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(14, 165, 233, 0.15), transparent 25%), radial-gradient(circle at calc((1 - var(--mouse-x, 0.5)) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(236, 72, 153, 0.1), transparent 25%), #080808'
      }}
    >
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 bg-arcade-grid bg-[length:40px_40px] opacity-20"
        style={{
          backgroundSize: '40px 40px',
          backgroundPosition: `calc(var(--mouse-x, 0.5) * 20px) calc(var(--mouse-y, 0.5) * 20px)`
        }}
      ></div>
      
      {/* Floating arcade machine illustrations */}
      <div className="absolute left-1/4 top-1/3 animate-float opacity-20 hidden md:block">
        <div className="w-32 h-32 bg-neon-blue/20 rounded-lg backdrop-blur-md"></div>
      </div>
      <div className="absolute right-1/4 bottom-1/3 animate-float opacity-20 hidden md:block" style={{ animationDelay: '1s' }}>
        <div className="w-40 h-40 bg-neon-pink/20 rounded-lg backdrop-blur-md"></div>
      </div>
      
      <div className="container-tight text-center relative z-10">
        <h1 className="font-bold animate-fade-in-up mb-6">
          <AnimatedGradientText>
            Premium Arcade Machines
          </AnimatedGradientText>
          <br />
          <span className="leading-tight">For Your Business</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Lebanon's leading supplier of high-quality arcade games, machines, and accessories for businesses and collectors.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <NeonButton href="/products" color="blue" size="lg">
            Explore Products
          </NeonButton>
          <NeonButton href="/contact" color="pink" variant="outline" size="lg">
            Get a Quote
          </NeonButton>
        </div>
      </div>
      
      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-arcade-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;

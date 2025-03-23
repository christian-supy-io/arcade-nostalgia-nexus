
import React from 'react';
import { cn } from "@/lib/utils";
import NeonButton from './NeonButton';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  features?: string[];
  className?: string;
  color?: 'blue' | 'pink' | 'green';
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  features = [],
  className,
  color = 'blue'
}) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden transition-all duration-300 hover:shadow-lg group animate-fade-in",
        `hover:shadow-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : 'neon-green'}`,
        className
      )}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        {features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-start">
                <span className={`text-neon-${color} mr-2`}>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-4">
          <NeonButton color={color} size="sm" href="#contact">
            Request Quote
          </NeonButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

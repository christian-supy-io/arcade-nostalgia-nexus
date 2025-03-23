
import React from 'react';
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  color?: 'blue' | 'pink' | 'green';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
  color = 'blue'
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 hover:shadow-lg group animate-fade-in-up",
        `hover:shadow-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : 'neon-green'}`,
        className
      )}
    >
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-full mb-4 transition-all duration-300 group-hover:scale-110",
        {
          "bg-neon-blue/20 text-neon-blue": color === 'blue',
          "bg-neon-pink/20 text-neon-pink": color === 'pink',
          "bg-neon-green/20 text-neon-green": color === 'green',
        }
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;

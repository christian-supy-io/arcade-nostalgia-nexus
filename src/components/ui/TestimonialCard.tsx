
import React from 'react';
import { cn } from "@/lib/utils";
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
  color?: 'blue' | 'pink' | 'green';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  className,
  color = 'blue'
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 hover:shadow-lg relative animate-fade-in",
        `hover:shadow-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : 'neon-green'}`,
        className
      )}
    >
      <div className={cn(
        "absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center rounded-full",
        {
          "bg-neon-blue/80 text-white": color === 'blue',
          "bg-neon-pink/80 text-white": color === 'pink',
          "bg-neon-green/80 text-white": color === 'green',
        }
      )}>
        <Quote size={16} />
      </div>
      
      <p className="text-gray-300 mb-4 italic">{quote}</p>
      
      <div>
        <p className="font-medium">{author}</p>
        {(role || company) && (
          <p className="text-sm text-gray-400">
            {role}{role && company ? ', ' : ''}{company}
          </p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;


import React from 'react';
import { cn } from "@/lib/utils";

type NeonButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'pink' | 'green';
  onClick?: () => void;
  href?: string;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
};

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  className,
  color = 'blue',
  onClick,
  href,
  animated = true,
  size = 'md',
  variant = 'solid',
  ...props
}) => {
  const buttonClasses = cn(
    "relative group inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      'px-4 py-2 text-sm': size === 'sm',
      'px-5 py-2.5 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
      
      // Solid variants
      'bg-neon-blue text-white hover:bg-neon-blue/90 focus:ring-neon-blue': variant === 'solid' && color === 'blue',
      'bg-neon-pink text-white hover:bg-neon-pink/90 focus:ring-neon-pink': variant === 'solid' && color === 'pink',
      'bg-neon-green text-white hover:bg-neon-green/90 focus:ring-neon-green': variant === 'solid' && color === 'green',
      
      // Outline variants
      'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 focus:ring-neon-blue': variant === 'outline' && color === 'blue',
      'border-2 border-neon-pink text-neon-pink hover:bg-neon-pink/10 focus:ring-neon-pink': variant === 'outline' && color === 'pink',
      'border-2 border-neon-green text-neon-green hover:bg-neon-green/10 focus:ring-neon-green': variant === 'outline' && color === 'green',
      
      // Shadow effects based on color
      'shadow-[0_0_15px_rgba(14,165,233,0.5)]': color === 'blue',
      'shadow-[0_0_15px_rgba(236,72,153,0.5)]': color === 'pink',
      'shadow-[0_0_15px_rgba(16,185,129,0.5)]': color === 'green',
    },
    animated && 'hover:scale-[1.02] active:scale-[0.98] duration-200',
    className
  );

  const Component = href ? 'a' : 'button';
  const htmlProps = href ? { href } : { onClick };

  return (
    <Component className={buttonClasses} {...htmlProps} {...props}>
      <span className="relative z-10">{children}</span>
      <span 
        className={cn(
          "absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          {
            "bg-neon-blue/10": color === 'blue',
            "bg-neon-pink/10": color === 'pink',
            "bg-neon-green/10": color === 'green',
          }
        )}
      />
    </Component>
  );
};

export default NeonButton;

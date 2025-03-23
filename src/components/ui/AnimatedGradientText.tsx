
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ 
  children, 
  className 
}) => {
  return (
    <span 
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green animate-text-shimmer bg-[length:200%_auto]",
        className
      )}
    >
      {children}
    </span>
  );
};

export default AnimatedGradientText;

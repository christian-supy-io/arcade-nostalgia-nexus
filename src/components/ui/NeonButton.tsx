
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all rounded-lg group",
  {
    variants: {
      color: {
        blue: [
          "text-white",
          "bg-neon-blue/80 hover:bg-neon-blue",
          "shadow-[0_0_15px_rgba(14,165,233,0.5)]",
          "hover:shadow-[0_0_25px_rgba(14,165,233,0.7)]",
        ],
        pink: [
          "text-white",
          "bg-neon-pink/80 hover:bg-neon-pink",
          "shadow-[0_0_15px_rgba(236,72,153,0.5)]",
          "hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]",
        ],
        green: [
          "text-white",
          "bg-neon-green/80 hover:bg-neon-green",
          "shadow-[0_0_15px_rgba(16,185,129,0.5)]",
          "hover:shadow-[0_0_25px_rgba(16,185,129,0.7)]",
        ],
      },
      size: {
        sm: "text-sm h-9 px-3",
        md: "text-base h-10 px-4",
        lg: "text-lg h-11 px-8",
      },
      variant: {
        default: "",
        outline: [
          "bg-transparent border-2",
          "hover:bg-transparent",
          "border-current",
        ],
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
      variant: "default",
    },
  }
);

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const NeonButton = ({
  href,
  children,
  className,
  color,
  size,
  variant,
  type,
  target,
  rel,
  ...props
}: NeonButtonProps) => {
  const classes = cn(
    buttonVariants({ color, size, variant, className })
  );
  
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} type={type as "button" | "submit" | "reset" | undefined} {...props}>
      {children}
    </button>
  );
};

export default NeonButton;

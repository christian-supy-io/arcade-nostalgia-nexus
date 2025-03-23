
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

// Define the color type more explicitly to solve the color conflict
type NeonButtonColor = "blue" | "pink" | "green";
type NeonButtonVariant = "default" | "outline";
type NeonButtonSize = "sm" | "md" | "lg";

// Extract the component props and omit the native HTML color attribute
type ButtonVariantProps = Omit<VariantProps<typeof buttonVariants>, 'color'> & {
  color?: NeonButtonColor;
};

// Define types for button props
export interface NeonButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariantProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  variant?: NeonButtonVariant;
  size?: NeonButtonSize;
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
    // For anchor elements, only pass anchor-compatible props
    // Create a new object with only the props that are valid for anchors
    const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {};
    
    // Copy over props that are generally common between anchors and buttons
    if (props.onClick) anchorProps.onClick = props.onClick;
    if (props.id) anchorProps.id = props.id;
    if (props.style) anchorProps.style = props.style;
    if (props.tabIndex) anchorProps.tabIndex = props.tabIndex;
    if (props.title) anchorProps.title = props.title;
    if (props.role) anchorProps.role = props.role;
    if (props.onMouseEnter) anchorProps.onMouseEnter = props.onMouseEnter;
    if (props.onMouseLeave) anchorProps.onMouseLeave = props.onMouseLeave;
    if (props.onFocus) anchorProps.onFocus = props.onFocus;
    if (props.onBlur) anchorProps.onBlur = props.onBlur;
    
    return (
      <a 
        href={href} 
        className={classes}
        target={target}
        rel={rel}
        {...anchorProps}
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

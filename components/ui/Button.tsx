import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outlined' | 'ghost' | 'outlined-white';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-[var(--color-header-blue)] text-white hover:bg-[var(--color-button-hover-blue)]',
    outlined: 'border border-[var(--color-header-blue)] text-[var(--color-header-blue)] bg-transparent hover:bg-[#F0F7FF]',
    ghost: 'text-[var(--color-header-blue)] hover:bg-[#F0F7FF]',
    'outlined-white': 'border border-white text-white bg-transparent hover:bg-white/10',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'discount' | 'shipping' | 'stock';
  className?: string;
}

export function Badge({ children, variant = 'discount', className }: BadgeProps) {
  const variants = {
    discount: 'bg-[var(--color-red)] text-white',
    shipping: 'bg-[var(--color-success-green)] text-white',
    stock: 'bg-[var(--color-orange-promo)] text-white',
  };

  return (
    <span className={cn('inline-block px-2 py-1 text-xs font-semibold rounded', variants[variant], className)}>
      {children}
    </span>
  );
}

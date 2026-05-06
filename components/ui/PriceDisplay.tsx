import { formatPrice } from '@/lib/utils';

interface PriceDisplayProps {
  price: number;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function PriceDisplay({ price, size = 'medium', className = '' }: PriceDisplayProps) {
  const sizes = {
    small: 'text-base',
    medium: 'text-[22px]',
    large: 'text-4xl',
  };

  return (
    <span className={`${sizes[size]} font-light text-[var(--color-text-primary)] ${className}`}>
      {formatPrice(price)}
    </span>
  );
}

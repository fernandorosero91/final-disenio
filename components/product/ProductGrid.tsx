import { ProductCard } from './ProductCard';
import { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-5 max-w-[1350px] mx-auto">
      {products.map((product) => (
        <div key={product.id} className="w-[245px]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

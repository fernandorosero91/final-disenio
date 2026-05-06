import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/lib/types';

interface ProductRowProps {
  title: string;
  products: Product[];
}

export function ProductRow({ title, products }: ProductRowProps) {
  return (
    <div className="bg-white rounded-md p-6 mb-8">
      <h2 className="text-[24px] font-normal text-[#333] mb-6">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

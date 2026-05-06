import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/lib/types';

interface ProductRowProps {
  title: string;
  products: Product[];
}

export function ProductRow({ title, products }: ProductRowProps) {
  return (
    <div className="w-full mb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-[#333] mb-6">{title}</h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-[1300px] mx-auto">
          {products.map((product) => (
            <div key={product.id} className="w-[230px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/lib/types';

interface ProductRowProps {
  title: string;
  products: Product[];
}

export function ProductRow({ title, products }: ProductRowProps) {
  return (
    <div className="w-full mb-8">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#333] mb-8">{title}</h2>

        <div className="flex flex-wrap justify-center gap-5 max-w-[1350px] mx-auto">
          {products.map((product) => (
            <div key={product.id} className="w-[245px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

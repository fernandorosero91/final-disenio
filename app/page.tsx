import { HeroBanner } from "@/components/home/HeroBanner";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductRow } from "@/components/home/ProductRow";
import { mockProducts } from "@/lib/data/products";

export default function HomePage() {
  return (
    <div className="w-full bg-[#ededed] min-h-screen">
      <div className="w-full max-w-[1400px] mx-auto px-8 py-8">
        <HeroBanner />
        <CategoryGrid />
        <ProductRow title="Ofertas del día" products={mockProducts.slice(0, 5)} />
        <ProductRow title="Basado en tu última visita" products={mockProducts.slice(2, 7)} />
        <ProductRow title="Lo más vendido en electrónica" products={mockProducts} />
      </div>
    </div>
  );
}

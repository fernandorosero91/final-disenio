import Link from 'next/link';
import { ProductGrid } from '@/components/product/ProductGrid';
import { mockProducts } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug);
  return {
    title: `${category?.name || 'Categoría'} - Mercado Libre`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug) || categories[0];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-xs text-[#999] mb-4">
        <Link href="/" className="text-[#3483fa] hover:underline">
          Inicio
        </Link>
        {' › '}
        <span>{category.name}</span>
      </div>

      {/* Category Header */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-3xl">
          {category.icon}
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">{category.name}</h1>
          <p className="text-sm text-[#999]">
            {mockProducts.length * 42} productos
          </p>
        </div>
      </div>

      {/* Sort Bar */}
      <div className="flex items-center justify-center mb-6 pb-4 border-b border-gray-200">
        <select className="px-3 py-2 text-sm border border-gray-200 rounded cursor-pointer">
          <option>Más relevantes</option>
          <option>Más vendidos</option>
          <option>Precio menor</option>
          <option>Precio mayor</option>
          <option>Mejor calificados</option>
        </select>
      </div>

      {/* Products */}
      <ProductGrid products={mockProducts} />
    </div>
  );
}

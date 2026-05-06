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
      <div className="text-xs text-[var(--color-text-secondary)] mb-4">
        <Link href="/" className="text-[var(--color-header-blue)] hover:underline">
          Inicio
        </Link>
        {' › '}
        <span>{category.name}</span>
      </div>

      {/* Category Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
          {category.icon}
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{category.name}</h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {mockProducts.length * 42} productos
          </p>
        </div>
      </div>

      {/* Sort Bar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-border)]">
        <select className="px-3 py-2 text-sm border border-[var(--color-border)] rounded cursor-pointer">
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

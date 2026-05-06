import { Suspense } from 'react';
import Link from 'next/link';
import { ProductGrid } from '@/components/product/ProductGrid';
import { mockProducts } from '@/lib/data/products';

export const metadata = {
  title: 'Resultados de búsqueda - Mercado Libre',
};

function FilterSidebar() {
  return (
    <aside className="w-[260px] bg-white rounded-lg p-4 h-fit sticky top-20">
      <h3 className="text-lg font-bold mb-4 pb-4 border-b border-[var(--color-border)]">
        Filtros
      </h3>

      {/* Location */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3">Ubicación</h4>
        <div className="space-y-2">
          {['Buenos Aires', 'CABA', 'Córdoba', 'Rosario'].map((location) => (
            <label key={location} className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span>{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3">Condición</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="radio" name="condition" className="w-4 h-4" />
            <span>Nuevo</span>
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="radio" name="condition" className="w-4 h-4" />
            <span>Usado</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3">Precio</h4>
        <div className="flex gap-2 mb-2">
          <input
            type="number"
            placeholder="Mínimo"
            className="w-full px-2 py-1 text-sm border border-[var(--color-border)] rounded"
          />
          <input
            type="number"
            placeholder="Máximo"
            className="w-full px-2 py-1 text-sm border border-[var(--color-border)] rounded"
          />
        </div>
        <button className="w-full py-2 text-sm text-white bg-[var(--color-header-blue)] rounded hover:bg-[var(--color-button-hover-blue)] transition-colors">
          Ver resultados
        </button>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-3">Marca</h4>
        <div className="space-y-2">
          {[
            { name: 'Samsung', count: 234 },
            { name: 'Apple', count: 189 },
            { name: 'LG', count: 145 },
          ].map((brand) => (
            <label key={brand.name} className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span>{brand.name}</span>
              <span className="text-[var(--color-text-muted)] ml-auto">({brand.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Free Shipping */}
      <div className="mb-6">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm font-semibold">Envío gratis</span>
          <input type="checkbox" className="w-10 h-5 appearance-none bg-gray-300 rounded-full relative cursor-pointer transition-colors checked:bg-[var(--color-success-green)] before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:before:translate-x-5" />
        </label>
      </div>

      {/* Installments */}
      <div className="mb-6">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-sm font-semibold">Cuotas sin interés</span>
          <input type="checkbox" className="w-10 h-5 appearance-none bg-gray-300 rounded-full relative cursor-pointer transition-colors checked:bg-[var(--color-success-green)] before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:before:translate-x-5" />
        </label>
      </div>
    </aside>
  );
}

function SearchResults({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  const resultCount = mockProducts.length * 154; // Mock count

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <div className="flex gap-4">
        <FilterSidebar />

        <div className="flex-1">
          {/* Breadcrumb */}
          <div className="text-xs text-[var(--color-text-secondary)] mb-4">
            <Link href="/" className="text-[var(--color-header-blue)] hover:underline">
              Inicio
            </Link>
            {' > '}
            <span>Resultados de búsqueda</span>
          </div>

          {/* Results Header */}
          <h1 className="text-2xl mb-4 text-center">
            {resultCount.toLocaleString('es-AR')} resultados para{' '}
            <span className="font-semibold">'{query}'</span>
          </h1>

          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--color-border)]">
            <select className="px-3 py-2 text-sm border border-[var(--color-border)] rounded cursor-pointer">
              <option>Más relevantes</option>
              <option>Más vendidos</option>
              <option>Precio menor</option>
              <option>Precio mayor</option>
              <option>Mejor calificados</option>
            </select>

            <div className="flex gap-2">
              <button className="p-2 border border-[var(--color-border)] rounded hover:bg-gray-50" title="Vista en grilla">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button className="p-2 border border-[var(--color-border)] rounded hover:bg-gray-50" title="Vista en lista">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <ProductGrid products={mockProducts} />

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-header-blue)]">
              ←
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Link
                key={page}
                href={`/search?q=${query}&page=${page}`}
                className={`px-3 py-2 text-sm rounded ${
                  page === 1
                    ? 'bg-[var(--color-header-blue)] text-white'
                    : 'text-[var(--color-text-primary)] hover:bg-gray-100'
                }`}
              >
                {page}
              </Link>
            ))}
            <span className="px-2 text-sm text-[var(--color-text-secondary)]">...</span>
            <Link
              href={`/search?q=${query}&page=24`}
              className="px-3 py-2 text-sm text-[var(--color-text-primary)] hover:bg-gray-100 rounded"
            >
              24
            </Link>
            <button className="px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-header-blue)]">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <Suspense fallback={<div className="text-center py-20">Cargando...</div>}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}

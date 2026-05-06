import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function CategoryGrid() {
  return (
    <div className="w-full mb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-[#333] mb-6 text-center">Categorías destacadas</h2>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-[1000px] mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="flex flex-col items-center justify-center group w-[140px]"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                {category.icon}
              </div>
              <span className="text-xs text-center text-[#666] group-hover:text-[#3483fa] transition-colors font-medium leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

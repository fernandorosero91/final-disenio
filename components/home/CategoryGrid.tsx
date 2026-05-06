import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function CategoryGrid() {
  return (
    <div className="w-full mb-8">
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#333] mb-8 text-center">Categorías destacadas</h2>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-[1100px] mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="flex flex-col items-center justify-center group w-[150px]"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-5xl mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                {category.icon}
              </div>
              <span className="text-sm text-center text-[#666] group-hover:text-[#3483fa] transition-colors font-medium leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

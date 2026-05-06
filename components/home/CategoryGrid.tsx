import Link from 'next/link';
import { categories } from '@/lib/data/categories';

export function CategoryGrid() {
  return (
    <div className="bg-white rounded-md p-6 mb-8">
      <h2 className="text-[24px] font-normal text-[#333] mb-6">Categorías destacadas</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="flex flex-col items-center group"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-4xl mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
              {category.icon}
            </div>
            <span className="text-[13px] text-center text-[#666] group-hover:text-[#3483fa] transition-colors">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

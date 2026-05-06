'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link href={`/product/${product.id}`} className="block w-full h-full">
      <div className="bg-white rounded-md p-4 hover:shadow-xl transition-all duration-200 cursor-pointer relative group h-full flex flex-col w-full border border-transparent hover:border-gray-200">
        {/* Favorite */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? '#f43f5e' : 'none'} stroke={isFavorite ? '#f43f5e' : '#666'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-[#00a650] text-white text-[11px] font-bold px-2 py-1 rounded-sm">
            {product.discount}% OFF
          </div>
        )}

        {/* Image */}
        <div className="relative w-full aspect-square mb-4 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="245px"
            className="object-contain p-2"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-[14px] text-[#333] line-clamp-2 mb-3 leading-[1.3] min-h-[36px]">
            {product.title}
          </h3>

          {/* Price section */}
          <div className="mt-auto">
            {product.originalPrice && (
              <div className="text-[13px] text-[#999] line-through mb-1">
                {formatPrice(product.originalPrice)}
              </div>
            )}
            
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-[26px] font-light text-[#333]">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Installments */}
            {product.installments && (
              <div className="text-[13px] text-[#00a650] mb-2">
                en {product.installments.count}x {formatPrice(product.installments.amount)}
                {product.installments.noInterest && ' sin interés'}
              </div>
            )}

            {/* Free shipping */}
            {product.freeShipping && (
              <div className="flex items-center gap-1 text-[13px] text-[#00a650] font-semibold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                Envío gratis
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

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
      <div className="bg-white rounded-md p-3 hover:shadow-lg transition-all duration-200 cursor-pointer relative group h-full flex flex-col w-full">
        {/* Favorite */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? '#f43f5e' : 'none'} stroke={isFavorite ? '#f43f5e' : '#666'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Discount badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-[#00a650] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            {product.discount}% OFF
          </div>
        )}

        {/* Image */}
        <div className="relative w-full aspect-square mb-3 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="230px"
            className="object-contain p-2"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-[13px] text-[#333] line-clamp-2 mb-2 leading-[1.3] min-h-[33px]">
            {product.title}
          </h3>

          {/* Price section */}
          <div className="mt-auto">
            {product.originalPrice && (
              <div className="text-[12px] text-[#999] line-through mb-1">
                {formatPrice(product.originalPrice)}
              </div>
            )}
            
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-[24px] font-light text-[#333]">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Installments */}
            {product.installments && (
              <div className="text-[12px] text-[#00a650] mb-1">
                en {product.installments.count}x {formatPrice(product.installments.amount)}
                {product.installments.noInterest && ' sin interés'}
              </div>
            )}

            {/* Free shipping */}
            {product.freeShipping && (
              <div className="flex items-center gap-1 text-[12px] text-[#00a650] font-semibold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

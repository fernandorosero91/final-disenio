'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ImageGallery } from '@/components/product/ImageGallery';
import { ShippingWidget } from '@/components/product/ShippingWidget';
import { StarRating } from '@/components/ui/StarRating';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { mockProducts } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  
  // Find product or use first one as fallback
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0];
  
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // Generate multiple images for gallery
  const images = [
    product.image,
    product.image.replace('/400/', '/401/'),
    product.image.replace('/400/', '/402/'),
    product.image.replace('/400/', '/403/'),
    product.image.replace('/400/', '/404/'),
  ];

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, Math.min(10, quantity + delta)));
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  const stock = 3;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-xs text-[var(--color-text-secondary)] mb-4">
        <Link href="/" className="text-[var(--color-header-blue)] hover:underline">
          Inicio
        </Link>
        {' › '}
        <Link href="/category/electronica" className="text-[var(--color-header-blue)] hover:underline">
          Electrónica
        </Link>
        {' › '}
        <Link href="/category/celulares" className="text-[var(--color-header-blue)] hover:underline">
          Celulares
        </Link>
        {' › '}
        <span>iPhone</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Column 1 - Image Gallery */}
        <div className="lg:w-[500px]">
          <ImageGallery images={images} title={product.title} />
        </div>

        {/* Column 2 - Product Info */}
        <div className="flex-1">
          {/* Condition & Sold */}
          <div className="text-xs text-[var(--color-text-muted)] mb-2">
            {product.condition === 'new' ? 'Nuevo' : 'Usado'} | +{product.soldCount?.toLocaleString('es-AR')} vendidos
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={product.rating} size={14} />
            <span className="text-sm text-[var(--color-text-primary)]">{product.rating}</span>
            <Link href="#reviews" className="text-sm text-[var(--color-header-blue)] hover:underline">
              ({product.reviewCount.toLocaleString('es-AR')} opiniones)
            </Link>
          </div>

          {/* Stock Warning */}
          {stock < 5 && (
            <div className="text-xs text-[var(--color-orange-promo)] mb-4">
              ¡Últimas {stock} unidades!
            </div>
          )}

          {/* Price Block */}
          <div className="mb-6">
            {product.originalPrice && (
              <div className="text-sm text-[var(--color-text-muted)] line-through mb-1">
                {formatPrice(product.originalPrice)}
              </div>
            )}
            
            <div className="flex items-baseline gap-3 mb-2">
              <PriceDisplay price={product.price} size="large" />
              {product.discount && (
                <span className="text-sm text-[var(--color-success-green)] font-semibold">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {product.installments && (
              <div className="text-base text-[var(--color-header-blue)] mb-2">
                en {product.installments.count}x {formatPrice(product.installments.amount)}
                {product.installments.noInterest && ' sin interés'}
              </div>
            )}

            <Link href="#payment-methods" className="text-xs text-[var(--color-header-blue)] hover:underline">
              Ver los medios de pago
            </Link>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="text-sm font-semibold mb-2 block">Cantidad:</label>
            <div className="flex items-center border border-[var(--color-border)] rounded w-fit">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors"
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="w-12 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 transition-colors"
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] mt-1 block">
              ({stock} disponibles)
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2 mb-6">
            <button className="w-full h-12 bg-[var(--color-header-blue)] text-white rounded-md text-base font-semibold hover:bg-[var(--color-button-hover-blue)] transition-colors">
              Comprar ahora
            </button>
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="w-full h-12 border border-[var(--color-header-blue)] text-[var(--color-header-blue)] bg-white rounded-md text-base font-semibold hover:bg-[#F0F7FF] transition-colors disabled:opacity-50"
            >
              {isAddingToCart ? 'Agregando...' : 'Agregar al carrito'}
            </button>
          </div>

          {/* Seller Info */}
          <div className="border border-[var(--color-border)] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                V
              </div>
              <div>
                <Link href="#seller" className="text-sm text-[var(--color-header-blue)] hover:underline font-medium">
                  Vendido por VendedorOficial
                </Link>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-[var(--color-success-green)] rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs text-[var(--color-text-secondary)]">
              +5000 ventas | MercadoLíder Gold
            </div>
          </div>
        </div>

        {/* Column 3 - Shipping Widget */}
        <div className="lg:w-[280px]">
          <ShippingWidget />
        </div>
      </div>
    </div>
  );
}

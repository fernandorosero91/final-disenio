import Link from 'next/link';
import Image from 'next/image';
import { mockProducts } from '@/lib/data/products';
import { formatPrice } from '@/lib/utils';

export const metadata = {
  title: 'Carrito de compras - Mercado Libre',
};

export default function CartPage() {
  const cartItems = [
    { product: mockProducts[0], quantity: 1 },
    { product: mockProducts[4], quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6">Carrito de compras</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 mb-4 flex gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex-1">
                <Link href={`/product/${item.product.id}`} className="text-sm hover:text-[var(--color-header-blue)]">
                  {item.product.title}
                </Link>
                <div className="text-lg font-light mt-2">
                  {formatPrice(item.product.price)}
                </div>
                {item.product.freeShipping && (
                  <div className="text-xs text-[var(--color-success-green)] mt-1">
                    Envío gratis
                  </div>
                )}
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center border border-[var(--color-border)] rounded">
                  <button className="w-8 h-8 hover:bg-gray-50">−</button>
                  <span className="w-10 text-center text-sm">{item.quantity}</span>
                  <button className="w-8 h-8 hover:bg-gray-50">+</button>
                </div>
                <button className="text-xs text-[var(--color-header-blue)] hover:underline">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:w-[320px]">
          <div className="bg-white rounded-lg p-6 sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Resumen de compra</h2>
            
            <div className="space-y-3 mb-4 pb-4 border-b border-[var(--color-border)]">
              <div className="flex justify-between text-sm">
                <span>Productos ({cartItems.length})</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Envío</span>
                <span className="text-[var(--color-success-green)]">Gratis</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-semibold mb-6">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <button className="w-full py-3 bg-[var(--color-header-blue)] text-white rounded-md font-semibold hover:bg-[var(--color-button-hover-blue)] transition-colors">
              Continuar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

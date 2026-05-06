'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-[#fff159]">
      {/* Main header */}
      <div className="w-full">
        <div className="container mx-auto max-w-[1200px] px-4 h-14 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-[#333] font-semibold text-xl">mercado libre</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-[600px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos, marcas y más..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-12 text-sm bg-white rounded border-0 shadow-sm focus:outline-none focus:shadow-md"
              />
              <button className="absolute right-0 top-0 h-10 w-12 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Promo */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-[#333]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <span>Envío gratis desde $ 90.000</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-[1200px] px-4 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1.5 text-[#666] hover:text-[#3483fa] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              Categorías
            </button>
            <Link href="/deals" className="text-[#666] hover:text-[#3483fa] transition-colors">Ofertas</Link>
            <Link href="/history" className="text-[#666] hover:text-[#3483fa] transition-colors">Historial</Link>
            <Link href="/supermarket" className="text-[#666] hover:text-[#3483fa] transition-colors">Supermercado</Link>
            <Link href="/fashion" className="text-[#666] hover:text-[#3483fa] transition-colors">Moda</Link>
            <Link href="/sell" className="text-[#666] hover:text-[#3483fa] transition-colors">Vender</Link>
            <Link href="/help" className="text-[#666] hover:text-[#3483fa] transition-colors">Ayuda</Link>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/register" className="text-[#666] hover:text-[#3483fa] transition-colors">Crea tu cuenta</Link>
            <Link href="/login" className="text-[#666] hover:text-[#3483fa] transition-colors">Ingresa</Link>
            <Link href="/purchases" className="text-[#666] hover:text-[#3483fa] transition-colors">Mis compras</Link>
            <Link href="/cart" className="relative">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" className="hover:stroke-[#3483fa] transition-colors">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#3483fa] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

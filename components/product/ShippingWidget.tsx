'use client';

import { useState } from 'react';

export function ShippingWidget() {
  const [zipCode, setZipCode] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState<string | null>(null);

  const handleCalculate = () => {
    if (zipCode) {
      setDeliveryInfo('Llega gratis el lunes 12 de mayo');
    }
  };

  return (
    <div className="w-full max-w-[280px] bg-white border border-[var(--color-border)] rounded-lg p-4">
      {/* Free Shipping */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-success-green)" strokeWidth="2">
            <path d="M16 3h5v13h-5zM3 8h13v13H3z" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          <span className="text-base font-bold text-[var(--color-success-green)]">
            Llega gratis el lunes
          </span>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Envío gratis a todo el país
        </p>
      </div>

      {/* Zip Code Calculator */}
      <div className="mb-4 pb-4 border-b border-[var(--color-border)]">
        <label className="text-xs text-[var(--color-header-blue)] mb-2 block">
          Calcular cuándo llega
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Código postal"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="flex-1 text-sm border-b border-[var(--color-header-blue)] outline-none pb-1"
            maxLength={8}
          />
          <button
            onClick={handleCalculate}
            className="text-sm text-[var(--color-header-blue)] font-medium hover:underline"
          >
            Calcular
          </button>
        </div>
        {deliveryInfo && (
          <p className="text-xs text-[var(--color-success-green)] mt-2">
            {deliveryInfo}
          </p>
        )}
      </div>

      {/* Return Policy */}
      <div className="mb-4 pb-4 border-b border-[var(--color-border)]">
        <div className="flex items-start gap-2 mb-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M3 21v-5h5" />
          </svg>
          <div>
            <p className="text-sm font-bold text-[var(--color-text-primary)]">
              Devolución gratis
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Tenés 30 días desde que lo recibís.
            </p>
          </div>
        </div>
      </div>

      {/* Security Badge */}
      <div>
        <div className="flex items-start gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <div>
            <p className="text-xs font-bold text-[var(--color-text-primary)] mb-1">
              Comprá con seguridad
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Tu pago está protegido desde el momento de la compra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Mis compras - Mercado Libre',
};

export default function PurchasesPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#ededed] flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-12 text-center">
        <svg
          className="mx-auto mb-6 text-gray-300"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <h1 className="text-2xl font-semibold mb-3">Aún no realizaste compras</h1>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Cuando compres algo, lo verás acá
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[#3483fa] text-white rounded-md font-semibold hover:bg-[#2968c8] transition-colors"
        >
          Descubrir productos
        </a>
        </div>
      </div>
    </div>
  );
}

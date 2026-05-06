export const metadata = {
  title: 'Vender - Mercado Libre',
};

export default function SellPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#ededed] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-white rounded-lg p-12">
          <h1 className="text-3xl font-semibold mb-6 text-center">Vende en Mercado Libre</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#F0F7FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-header-blue)" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Publica gratis</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Miles de personas verán tu producto
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#F0F7FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-header-blue)" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Vende seguro</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Recibís el dinero cuando el comprador confirma
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#F0F7FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-header-blue)" strokeWidth="2">
                <path d="M16 3h5v13h-5zM3 8h13v13H3z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Envío fácil</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Nosotros nos encargamos de la logística
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-[#3483fa] text-white rounded-md font-semibold hover:bg-[#2968c8] transition-colors">
            Comenzar a vender
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export function HeroBanner() {
  return (
    <div className="relative w-full h-[340px] rounded-md overflow-hidden bg-gradient-to-r from-[#4158d0] via-[#c850c0] to-[#ffcc70] mb-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[1140px] px-8 flex items-center justify-between">
          <div className="max-w-md text-white">
            <h1 className="text-[42px] font-semibold leading-tight mb-4">
              Ofertas increíbles
            </h1>
            <p className="text-[18px] mb-6 opacity-95">
              Hasta 50% de descuento en productos seleccionados
            </p>
            <button className="bg-white text-[#4158d0] px-8 py-3 rounded-md text-[15px] font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Ver ofertas
            </button>
          </div>
          
          {/* Decorative circle */}
          <div className="w-[300px] h-[300px] rounded-full bg-white/10 backdrop-blur-sm"></div>
        </div>
      </div>
    </div>
  );
}

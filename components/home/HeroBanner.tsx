export function HeroBanner() {
  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-[280px] rounded-lg overflow-hidden bg-gradient-to-r from-[#4158d0] via-[#c850c0] to-[#ffcc70]">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-2xl text-center text-white z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Ofertas increíbles
            </h1>
            <p className="text-base md:text-lg mb-6 opacity-95">
              Hasta 50% de descuento en productos seleccionados
            </p>
            <button className="bg-white text-[#4158d0] px-8 py-3 rounded-md text-base font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Ver ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroBanner() {
  return (
    <div className="w-full mb-6">
      <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gradient-to-r from-[#4158d0] via-[#c850c0] to-[#ffcc70]">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-2xl text-center text-white z-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
              Ofertas increíbles
            </h1>
            <p className="text-sm md:text-base mb-5 opacity-95">
              Hasta 50% de descuento en productos seleccionados
            </p>
            <button className="bg-white text-[#4158d0] px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Ver ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

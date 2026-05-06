import Link from 'next/link';

export const metadata = {
  title: 'Ingresa a tu cuenta - Mercado Libre',
};

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#ededed] py-16 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-md p-12 shadow-sm">
          <h1 className="text-[28px] font-normal text-[#333] mb-8 text-center">
            Ingresa a tu cuenta
          </h1>
          
          <form className="space-y-6">
            <div>
              <label className="block text-[14px] text-[#666] mb-2 font-medium">
                E-mail o usuario
              </label>
              <input
                type="text"
                className="w-full h-[48px] px-4 text-[15px] border border-gray-300 rounded-md focus:outline-none focus:border-[#3483fa] focus:ring-2 focus:ring-[#3483fa]/20 transition-all"
                placeholder="ejemplo@email.com"
              />
            </div>
            
            <div>
              <label className="block text-[14px] text-[#666] mb-2 font-medium">
                Contraseña
              </label>
              <input
                type="password"
                className="w-full h-[48px] px-4 text-[15px] border border-gray-300 rounded-md focus:outline-none focus:border-[#3483fa] focus:ring-2 focus:ring-[#3483fa]/20 transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="w-full h-[48px] bg-[#3483fa] text-white text-[16px] font-semibold rounded-md hover:bg-[#2968c8] transition-colors shadow-sm"
            >
              Continuar
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href="/forgot-password" className="text-[14px] text-[#3483fa] hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <span className="text-[14px] text-[#666]">¿No tenés cuenta? </span>
          <Link href="/register" className="text-[14px] text-[#3483fa] hover:underline font-medium">
            Crear cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}

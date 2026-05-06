import Link from 'next/link';

export const metadata = {
  title: 'Crea tu cuenta - Mercado Libre',
};

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#ededed] py-12 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-semibold mb-6 text-center">Crea tu cuenta</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre completo</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-header-blue)]"
              placeholder="Juan Pérez"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-header-blue)]"
              placeholder="ejemplo@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-header-blue)]"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-[var(--color-header-blue)] text-white rounded font-semibold hover:bg-[var(--color-button-hover-blue)] transition-colors"
          >
            Crear cuenta
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link href="/login" className="text-sm text-[#3483fa] hover:underline">
            ¿Ya tenés cuenta? Ingresá
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

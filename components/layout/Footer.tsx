import Link from 'next/link';

export function Footer() {
  const column1Links = [
    'Trabaja con nosotros',
    'Términos y condiciones',
    'Privacidad',
    'Accesibilidad',
    'Defensa del consumidor',
    'Ayuda',
  ];

  const column2Links = [
    'Blog de Noticias',
    'Sustentabilidad',
    'Acerca de Mercadolibre.com',
    'Inversores',
    'Desarrolladores',
  ];

  return (
    <footer className="bg-[var(--color-text-primary)] text-white mt-12">
      <div className="max-w-[1200px] mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Sobre Mercado Libre</h3>
            <ul className="space-y-2">
              {column1Links.map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-xs text-gray-300 hover:text-[var(--color-primary-yellow)] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Más información</h3>
            <ul className="space-y-2">
              {column2Links.map((link, i) => (
                <li key={i}>
                  <Link href="#" className="text-xs text-gray-300 hover:text-[var(--color-primary-yellow)] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Redes sociales</h3>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube', 'LinkedIn'].map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-primary-yellow)] transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs">{social[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              Copyright © 1999-2025 MercadoLibre S.R.L.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-white">Seguridad</Link>
              <Link href="#" className="hover:text-white">Privacidad</Link>
              <Link href="#" className="hover:text-white">Empresas del grupo</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

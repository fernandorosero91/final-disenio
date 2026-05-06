import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mercado Libre Colombia - Envíos Gratis en el día",
  description: "Comprá productos con Envío Gratis en el día en Mercado Libre Colombia. Encontrá miles de marcas y productos a precios increíbles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="m-0 p-0 overflow-x-hidden">
        <Header />
        <NavigationBar />
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

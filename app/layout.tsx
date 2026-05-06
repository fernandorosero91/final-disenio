import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mercado Libre Colombia - Envíos Gratis en el día",
  description: "Comprá productos con Envío Gratis en el día en Mercado Libre Colombia. Encontrá miles de marcas y productos a precios increíbles.",
  openGraph: {
    title: "Mercado Libre Colombia",
    description: "Envíos Gratis en el día",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <NavigationBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

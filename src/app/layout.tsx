import type { Metadata } from "next";
import Link from "next/link";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

import { CartCounter } from "@/components/ui/CartCounter";

export const metadata: Metadata = {
  title: "Wamazon",
  description: "A partially retro styled product ui template app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen pb-20">
        <CartProvider>
          <header className="bg-gray-300 border-b-2  sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <Link
                href="/"
                className="text-2xl font-black tracking-tighter uppercase transform "
              >
                Wamazon
              </Link>

              <div className="flex gap-4 items-center">
                <CartCounter />
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

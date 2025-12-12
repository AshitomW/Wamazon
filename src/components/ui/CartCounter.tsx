'use client';

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import Link from 'next/link';

export function CartCounter() {
  const { totalItems } = useCart();
  
  return (
    <Link href="/cart">
      <Button variant="secondary" className="relative">
        Cart 
        {totalItems > 0 && (
          <span className="ml-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
}

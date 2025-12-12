'use client';

import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Button 
      onClick={() => addToCart(product)}
      className="w-full md:w-auto text-xl py-4 px-8"
      variant="primary"
    >
      Add to Cart
    </Button>
  );
}

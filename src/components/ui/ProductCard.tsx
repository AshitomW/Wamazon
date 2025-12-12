'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { RetroContainer } from '@/components/retro/RetroContainer';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <RetroContainer className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-200">
      <Link href={`/products/${product.id}`} className="block relative aspect-square mb-4 bg-gray-100 border-2 border-black overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover"
        />
      </Link>
      <div className="flex-1 flex flex-col">
        <div className="text-xs font-bold bg-pink-200 inline-block self-start px-2 py-1 mb-2 border border-black">
          {product.brand}
        </div>
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-bold text-lg mb-1 truncate" title={product.title}>{product.title}</h3>
        </Link>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-black">${product.price}</span>
          <Button 
            onClick={() => addToCart(product)}
            className="text-sm py-1 px-3"
          >
            Add
          </Button>
        </div>
      </div>
    </RetroContainer>
  );
}

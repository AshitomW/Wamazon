"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { RetroContainer } from "@/components/retro/RetroContainer";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

interface ProductListItemProps {
  product: Product;
}

export function ProductListItem({ product }: ProductListItemProps) {
  const { addToCart } = useCart();

  return (
    <RetroContainer className="flex items-center gap-4 p-4 hover:-translate-y-1 transition-transform duration-200">
      <Link
        href={`/products/${product.id}`}
        className="relative w-24 h-24 bg-gray-100 border-2 border-black shrink-0 overflow-hidden"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-bold text-lg truncate">{product.title}</h3>
        </Link>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <div className="text-xs font-bold bg-pink-200 inline-block px-1 mt-1 border border-black">
          {product.brand}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="text-xl font-black">${product.price}</span>
        <Button
          onClick={() => addToCart(product)}
          className="text-sm py-1 px-3"
        >
          Add
        </Button>
      </div>
    </RetroContainer>
  );
}

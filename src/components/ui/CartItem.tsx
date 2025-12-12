"use client";

import Image from "next/image";
import { RetroContainer } from "@/components/retro/RetroContainer";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

interface CartItemData extends Product {
  quantity: number;
}

export function CartItem({ item }: { item: CartItemData }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <RetroContainer className="flex items-center gap-4 p-4 mb-4">
      <div className="relative w-20 h-20 bg-gray-100 border-2 border-black shrink-0">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg truncate">{item.title}</h3>
        <p className="text-gray-600 font-bold">
          ${item.price} x {item.quantity}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 text-sm bg-white"
        >
          -
        </Button>
        <span className="w-8 text-center font-bold bg-white border-2 border-black py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {item.quantity}
        </span>
        <Button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 text-sm bg-white"
        >
          +
        </Button>

        <Button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 bg-red-400 hover:bg-red-300 text-sm px-2 py-1"
        >
          X
        </Button>
      </div>
    </RetroContainer>
  );
}

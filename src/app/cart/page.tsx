'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/ui/CartItem';
import { RetroContainer } from '@/components/retro/RetroContainer';
import { Button } from '@/components/ui/Button';

export default function CartPage() {
  const { items } = useCart();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-8">
            <h1 className="text-4xl font-black italic uppercase">Your Cart</h1>
            <span className="font-bold border-2 border-black bg-white px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {items.length} Items
            </span>
        </div>

      {items.length === 0 ? (
        <RetroContainer className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
            <p className="mb-6">Details of retro items await you.</p>
            <Link href="/">
                <Button>Go Shopping</Button>
            </Link>
        </RetroContainer>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="lg:col-span-1">
                <RetroContainer className="sticky top-24 bg-white">
                    <h2 className="text-2xl font-black mb-6 uppercase border-b-2 border-black pb-2">Summary</h2>
                    
                    <div className="flex justify-between text-lg font-bold mb-4">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <Button className="w-full py-3 text-lg bg-green-400 hover:bg-green-300">
                        Checkout
                    </Button>
                </RetroContainer>
            </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductListItem } from "@/components/ui/ProductListItem";
import { Grid2X2, Menu } from "lucide-react";

interface ProductViewProps {
  products: Product[];
}

export function ProductView({ products }: ProductViewProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-xl font-bold text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-6">
        <div className="flex gap-2 bg-white p-1 border-2 border-black">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${
              viewMode === "grid" ? "bg-yellow-300" : "hover:bg-gray-100"
            }`}
            aria-label="Grid View"
          >
            <Grid2X2 />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ${
              viewMode === "list" ? "bg-yellow-300" : "hover:bg-gray-100"
            }`}
            aria-label="List View"
          >
            <Menu />
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

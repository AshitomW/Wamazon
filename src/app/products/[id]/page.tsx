import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/apiClient";
import { RetroContainer } from "@/components/retro/RetroContainer";
import { AddToCartButton } from "@/components/ui/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) return notFound();

  let product;
  try {
    product = await getProduct(id);
  } catch {
    return notFound();
  }

  const originalPrice =
    product.discountPercentage > 0
      ? Math.round(product.price * (100 / (100 - product.discountPercentage)))
      : null;

  return (
    <div className="max-w-6xl mx-auto">
      <Link href="/" className="inline-block mb-6 font-bold hover:underline">
        &larr; Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <RetroContainer className="relative h-100 md:h-125 bg-white p-0 overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </RetroContainer>

          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="relative h-24 border-2 border-black bg-white"
              >
                <Image
                  src={img}
                  alt={`${product.title} ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black italic uppercase mb-2 leading-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-pink-300 border-2 border-black px-3 py-1 font-bold text-sm">
              {product.category}
            </span>
            <span className="font-bold">⭐ {product.rating} / 5</span>
            <span className="text-gray-500 font-bold">{product.brand}</span>
          </div>

          <RetroContainer className="mb-8 bg-blue-50">
            <p className="text-lg leading-relaxed font-medium">
              {product.description}
            </p>
          </RetroContainer>

          <div className="mt-auto">
            <div className="flex items-end gap-4 mb-8">
              <span className="text-5xl font-black">${product.price}</span>
              {originalPrice && (
                <span className="text-red-500 font-bold mb-2 line-through decoration-2">
                  ${originalPrice}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              <AddToCartButton product={product} />
            </div>

            <div className="mt-8 pt-8 border-t-2 border-black border-dashed">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                Stock Available: {product.stock}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

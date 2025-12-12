import { Suspense } from "react";
import { getProducts, searchProducts } from "@/lib/apiClient";
import { ProductView } from "@/components/ui/ProductView";
import { SearchFilter, SortFilter } from "@/components/ui/Filters";
import { RetroContainer } from "@/components/retro/RetroContainer";
import { Skeleton } from "@/components/ui/Skeleton";
import { Pagination } from "@/components/ui/Pagination";
import { Product, PageProps } from "@/lib/types";

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const LIMIT = 30;

  const q = params?.q as string | undefined;
  const sortBy = params?.sortBy as keyof Product | undefined;
  const order = (params?.order as "asc" | "desc" | undefined) ?? "asc";
  const skip = parseInt((params?.skip as string) || "0", 10);

  const data = q
    ? await searchProducts(q, LIMIT, skip)
    : await getProducts({ limit: LIMIT, skip, sortBy, order });

  if (sortBy && data?.products) {
    data.products.sort((a: Product, b: Product) => {
      const A = a[sortBy];
      const B = b[sortBy];
      return order === "desc" ? (A < B ? 1 : -1) : A > B ? 1 : -1;
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <aside className="col-span-1">
        <RetroContainer className="sticky top-24 bg-pink-100/50 backdrop-blur-sm">
          <h2 className="font-black text-xl mb-6 uppercase border-b-2 border-black pb-2">
            Filters
          </h2>
          <SearchFilter />
          <SortFilter />
        </RetroContainer>
      </aside>

      <div className="col-span-3">
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductView products={data.products} />
        </Suspense>

        <Pagination total={data.total} limit={data.limit} skip={data.skip} />
      </div>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <RetroContainer key={i} className="h-96">
          <Skeleton className="h-100" />
        </RetroContainer>
      ))}
    </div>
  );
}

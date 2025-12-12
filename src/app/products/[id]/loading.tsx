import { RetroContainer } from "@/components/retro/RetroContainer";
import { Skeleton } from "@/components/ui/Skeleton";

function ProductPageSkeleton() {
  return (
    <div className="max-w-6xl mx-auto">
      <Skeleton className="h-6 w-40 mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <RetroContainer className="h-100 md:h-125">
            <Skeleton className="h-full w-full" />
          </RetroContainer>

          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <RetroContainer key={i} className="h-24">
                <Skeleton className="h-full w-full" />
              </RetroContainer>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <Skeleton className="h-12 w-3/4" />

          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-28" />
          </div>

          <RetroContainer className="bg-blue-50">
            <Skeleton className="h-24 w-full" />
          </RetroContainer>

          <div className="mt-auto space-y-6">
            <div className="flex items-end gap-4">
              <Skeleton className="h-14 w-32" />
              <Skeleton className="h-8 w-24" />
            </div>

            <Skeleton className="h-12 w-full" />

            <div className="pt-8 border-t-2 border-black border-dashed">
              <Skeleton className="h-6 w-48" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return <ProductPageSkeleton />;
}

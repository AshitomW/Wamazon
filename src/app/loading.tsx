import { Skeleton } from "@/components/ui/Skeleton";
import { RetroContainer } from "@/components/retro/RetroContainer";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 space-y-4">
        <Skeleton className="h-64 w-full" />
      </div>
      <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <RetroContainer key={i} className="h-96">
            <Skeleton className="h-48 w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-10 w-full mt-auto" />
          </RetroContainer>
        ))}
      </div>
    </div>
  );
}

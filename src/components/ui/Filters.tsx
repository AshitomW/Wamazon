"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./Input";
import { RetroContainer } from "@/components/retro/RetroContainer";

export function SearchFilter() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    params.set("skip", "0");
    replace(`/?${params.toString()}`);
  }, 300);

  return (
    <div className="mb-6">
      <label className="block text-sm font-bold mb-2 uppercase">Search</label>
      <Input
        placeholder="Search products..."
        className="w-full"
        defaultValue={searchParams.get("q")?.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
      />
    </div>
  );
}

export function SortFilter() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      const [sortBy, order] = value.split("-");
      params.set("sortBy", sortBy);
      params.set("order", order);
    } else {
      params.delete("sortBy");
      params.delete("order");
    }
    replace(`/?${params.toString()}`);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-bold mb-2 uppercase">Sort By</label>
      <RetroContainer
        as="select"
        className="w-full cursor-pointer appearance-none bg-white"
        onChange={(e) => handleSort((e.target as HTMLSelectElement).value)}
        defaultValue={
          `${searchParams.get("sortBy")}-${searchParams.get("order")}` || ""
        }
      >
        <option value="">Default</option>
        <option value="title-asc">Name (A-Z)</option>
        <option value="title-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low-High)</option>
        <option value="price-desc">Price (High-Low)</option>
      </RetroContainer>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { RetroContainer } from "@/components/retro/RetroContainer";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <RetroContainer className="max-w-md w-full text-center border-red-500 bg-red-50">
        <h2 className="text-2xl font-black mb-4 uppercase">
          Something went wrong!
        </h2>
        <p className="mb-6">{error.message}</p>
        <Button onClick={() => reset()} className="w-full">
          Try again
        </Button>
      </RetroContainer>
    </div>
  );
}

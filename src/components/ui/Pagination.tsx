'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './Button';
import { RetroContainer } from '@/components/retro/RetroContainer';

interface PaginationProps {
  total: number;
  limit: number;
  skip: number;
}

export function Pagination({ total, limit, skip }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newSkip: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('skip', newSkip.toString());
    router.push(`/?${params.toString()}`);
  };

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);
  const showingStart = skip + 1;
  const showingEnd = Math.min(skip + limit, total);

  if (total === 0) return null;

  return (
    <RetroContainer className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 bg-white">
      <div className="font-bold">
        Showing <span className="text-pink-600">{showingStart}</span> - <span className="text-pink-600">{showingEnd}</span> of {total} items
      </div>
      
      <div className="flex gap-4">
        <Button
          onClick={() => handlePageChange(Math.max(0, skip - limit))}
          disabled={skip === 0}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          variant="secondary"
        >
          &larr; Previous
        </Button>
        
        <span className="flex items-center font-bold px-2 pointer-events-none">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          onClick={() => handlePageChange(skip + limit)}
          disabled={skip + limit >= total}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          variant="secondary"
        >
          Next &rarr;
        </Button>
      </div>
    </RetroContainer>
  );
}

'use client';

import { useRouter } from 'next/navigation';

interface PaginationProps {
  page: number;
  hasPrev: any;
  hasNext: any;
}

// .button:disabled{
//   background-color: rgba(220, 20, 60, 0.473);
//   cursor: not-allowed;
// }

export const Pagination = () => {
  const router = useRouter();

  return (
    <div className={'mt-28 flex justify-between'}>
      <button
        className={
          'w-[100px] cursor-pointer border-none bg-red-700 p-4 text-white'
        }
        // disabled={!hasPrev}
        // onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={
          'w-[100px] cursor-pointer border-none bg-red-700 p-4 text-white'
        }
        // disabled={!hasNext}
        // onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

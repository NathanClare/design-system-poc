import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

  

interface PaginationProps {
  totalPages: number;
  pageSize: number;
  newPage: any
}

const PaginationComp = ({ totalPages = 10, pageSize }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button className='text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white'
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        <ChevronLeftIcon/>
      </button>
      <button className='text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white'
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
      <ChevronRightIcon/>
      </button>
    </div>
  );
};

export default PaginationComp

  





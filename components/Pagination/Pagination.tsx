import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

interface PaginationProps {
  totalPages: number
  newPage: number
}

const PaginationComp = ({ totalPages = 10 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleClick = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  const getPages = (): Array<number | '...'> => {
    const pages: Array<number | '...'> = []

    pages.push(1)
    if (currentPage > 3) {
      pages.push('...')
    }
    let startPage = currentPage - 1
    if (startPage < 2) startPage = 2
    let endPage = currentPage + 1
    if (endPage > totalPages - 1) endPage = totalPages - 1
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    if (currentPage < totalPages - 2) {
      pages.push('...')
    }
    pages.push(totalPages)

    return pages
  }

  return (
    <div>
      <button
        className="text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white disabled:bg-neutral-200 disabled:text-neutral-600"
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </button>
      {getPages().map(page => (
        <button
          key={page}
          disabled={page === '...'}
          className={`p-1 mx-1 rounded h-10 w-10 ${page === currentPage ? 'bg-primary-500 text-primary-base' : ''}`}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => (page !== '...' ? handleClick(page) : () => {})}
        >
          {page}
        </button>
      ))}
      <button
        className="text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white disabled:bg-neutral-200 disabled:text-neutral-600"
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}

export default PaginationComp

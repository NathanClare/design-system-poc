import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

interface PaginationProps {
  totalPages: number
  newPage: number
}

const PaginationComp = ({ totalPages = 10 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const getPagesasAnArray = Array.from(Array(totalPages).keys())

  const handleClick = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  const generatePageLinks = () => {
    let minPageOffset = -1
    let maxPageOffset = 2

    switch (true) {
      case currentPage === totalPages - 1:
        minPageOffset = -2
        break
      case currentPage === 0:
        minPageOffset = 0
        maxPageOffset = 3
        break
    }

    return getPagesasAnArray.slice(currentPage + minPageOffset, currentPage + maxPageOffset)
  }

  return (
    <div>
      <button
        className="text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white disabled:bg-neutral-200 disabled:text-neutral-600"
        disabled={currentPage === 0}
        onClick={() => handleClick(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </button>
      {currentPage > 1 && '...'}
      {generatePageLinks().map(page => (
        <button
          key={page}
          className={`p-1 mx-1 rounded h-10 w-10 ${page === currentPage ? 'bg-primary-500 text-primary-white' : ''}`}
          onClick={() => handleClick(page)}
        >
          {page + 1}
        </button>
      ))}
      {currentPage + 1 < totalPages && '...'}
      <button
        className="text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white disabled:bg-neutral-200 disabled:text-neutral-600"
        disabled={currentPage + 1 === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}

export default PaginationComp

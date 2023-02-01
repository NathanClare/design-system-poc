import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import React, { useState } from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

interface PaginationProps {
  totalPages: number
  currentIndex?: number
}

const Pagination = ({ totalPages = 10, currentIndex = 1 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(currentIndex)
  const pages = Array.from({ length: totalPages }, (_, index) => 1 + index)

  const handleClick = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  const generatePageNumbers = () => {
    const startPage = currentPage < totalPages ? currentPage : currentPage - 1
    const lastPage = pages.at(-1) || 0

    return totalPages > 1
      ? [
          ...(currentPage > 1 && startPage !== 1 && lastPage - startPage === 1 ? ['...'] : []),
          startPage,
          ...(lastPage - startPage > 1 ? ['...'] : []),
          lastPage
        ]
      : [currentPage]
  }

  return (
    <nav role="navigation" aria-label="Pagination" className={`flex flex-wrap justify-between`}>
      <span className={classNames(`flex items-center justify-center`, { 'text-neutral-200': currentPage === 1 })}>
        <ChevronLeftIcon className="w-5 h-5" />
        <ConditionalLink {...(currentPage > 1 && { onClick: () => handleClick(currentPage - 1) })} disabled={currentPage === 1}>
          Previous
        </ConditionalLink>
      </span>
      <ul className={`flex flex-wrap`}>
        {generatePageNumbers().map((pageNumber, index) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={classNames(`w-8 h-8 flex items-center justify-center transition-colors`, {
              'bg-neutral-200': pageNumber === currentPage,
              'hover:bg-neutral-200 cursor-pointer': typeof pageNumber !== 'string'
            })}
          >
            <ConditionalLink
              {...(typeof pageNumber !== 'string' && { onClick: () => handleClick(pageNumber) })}
              aria-label={pageNumber === currentPage ? `Current page, page ${currentPage}` : `Go to page ${pageNumber}`}
            >
              {pageNumber}
            </ConditionalLink>
          </li>
        ))}
      </ul>
      <span className={classNames(`flex items-center justify-center`, { 'text-neutral-200': currentPage === totalPages })}>
        <ConditionalLink {...(currentPage < totalPages && { onClick: () => handleClick(currentPage + 1) })} disabled={currentPage === totalPages}>
          Next
        </ConditionalLink>
        <ChevronRightIcon className="w-5 h-5" />
      </span>
    </nav>
  )
}

export default Pagination

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import React, { useState } from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

interface PaginationProps {
  totalPages: number
  currentIndex?: number
  pageNumbersToShow?: number
}

const Pagination = ({ totalPages = 10, currentIndex = 1, pageNumbersToShow = 3 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(currentIndex)

  const handleClick = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  const generatePageNumbers = () => {
    const lastPageNumber = totalPages
    const currentPageNumber = currentIndex <= lastPageNumber ? currentPage : lastPageNumber
    const maxPagesBeforeCurrentPage = Math.floor(pageNumbersToShow / 2)
    const maxPagesAfterCurrentPage = Math.ceil(pageNumbersToShow / 2) - 1
    let startPage = 1
    let endPage = lastPageNumber

    if (lastPageNumber <= 1) {
      return [currentPageNumber]
    }

    if (currentPageNumber <= maxPagesBeforeCurrentPage) {
      startPage = 1
      endPage = pageNumbersToShow
    } else if (currentPageNumber + maxPagesAfterCurrentPage >= lastPageNumber) {
      startPage = lastPageNumber - pageNumbersToShow + 1
    } else {
      startPage = currentPageNumber - maxPagesBeforeCurrentPage
      endPage = currentPageNumber + maxPagesAfterCurrentPage
    }

    let pageNumbers: Array<string | number> = Array.from(Array(endPage + 1 - startPage).keys())
      .map(pageNumber => startPage + pageNumber)
      .filter(pageNumber => pageNumber <= lastPageNumber && pageNumber > 0)

    if (pageNumbers[0] > 1) {
      if (pageNumbers[0] <= 2) {
        pageNumbers = [1, ...pageNumbers]
      } else {
        const ellipsis = pageNumbers[0] > 3 ? '...' : 2
        pageNumbers = [1, ellipsis, ...pageNumbers]
      }
    }

    if (pageNumbers[pageNumbers.length - 1] !== lastPageNumber) {
      if (pageNumbers[pageNumbers.length - 1] === lastPageNumber - 1) {
        pageNumbers = [...pageNumbers, lastPageNumber]
      } else {
        const ellipsis = pageNumbers[pageNumbers.length - 1] < lastPageNumber - 2 ? '...' : lastPageNumber - 1
        pageNumbers = [...pageNumbers, ellipsis, lastPageNumber]
      }
    }

    return pageNumbers
  }

  return (
    <nav role="navigation" aria-label="Pagination" className={`flex flex-wrap justify-between`}>
      <span className={classNames(`flex items-center justify-center`, { 'text-neutral-200': currentPage === 1 })}>
        <ChevronLeftIcon className="w-5 h-5" />
        <ConditionalLink {...(currentPage > 1 && { onClick: () => handleClick(currentPage - 1) })} disabled={currentPage === 1}>
          Previous
        </ConditionalLink>
      </span>
      <ul className={`flex flex-wrap [&>li]:w-8 [&>li]:h-8 [&>li]:items-center [&>li]:flex [&>li]:justify-center`}>
        {generatePageNumbers().map((pageNumber, index) =>
          pageNumber === '...' ? (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>{pageNumber}</li>
          ) : (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={classNames(`transition-colors hover:bg-neutral-200 cursor-pointer`, {
                'bg-neutral-200': pageNumber === currentPage
              })}
            >
              <ConditionalLink
                {...(typeof pageNumber !== 'string' && { onClick: () => handleClick(pageNumber) })}
                aria-label={pageNumber === currentPage ? `Current page, page ${currentPage}` : `Go to page ${pageNumber}`}
              >
                {pageNumber}
              </ConditionalLink>
            </li>
          )
        )}
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

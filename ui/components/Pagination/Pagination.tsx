import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'
import React, { useState } from 'react'

interface PaginationProps {
  totalPages: number
  newPage: number
}

const NUMBER_OF_LINKS = 3

const Pagination = ({ totalPages = 10 }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pages = Array.from({ length: totalPages }, (_, index) => 1 + index)
  const showShort = false

  const handleClick = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  const generatePageNumbers = () => {
    /*let minPageOffset = -NUMBER_OF_LINKS
    let maxPageOffset = NUMBER_OF_LINKS - 2 */

    /*console.log(`minPageOffset`, minPageOffset)*/
    const min = currentPage - NUMBER_OF_LINKS > 2 ? currentPage - NUMBER_OF_LINKS - 1 : 1
    const max = currentPage + NUMBER_OF_LINKS < totalPages ? currentPage + NUMBER_OF_LINKS : totalPages - 1

    console.log('min', min)
    console.log('max', max)

    return [1, pages.at(-1) || 0]
  }

  /* <button
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
      </button> */

  // aria-label="Current Page, Page 3"

  /* <a href={`/page-${pageNumber}`} aria-label={`Go to page ${pageNumber}`}>
              {pageNumber}
            </a> */

  console.log('totalPages', totalPages)
  console.log('currentPage', currentPage)

  return (
    <nav role="navigation" aria-label="Pagination" className={`flex flex-wrap justify-between`}>
      <span {...(currentPage > 1 && { onClick: () => handleClick(currentPage - 1) })} className={classNames(`flex`, { 'text-neutral-200': currentPage === 1 })}>
        <ChevronLeftIcon />
        Previous
      </span>
      <ul className={`flex flex-wrap`}>
        {generatePageNumbers().map(pageNumber => (
          <li
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={classNames(`w-8 h-8 flex hover:bg-primary-base items-center justify-center cursor-pointer transition-colors`, {
              'bg-primary-base': pageNumber === currentPage
            })}
            aria-label={pageNumber === currentPage ? `Current page, page ${currentPage}` : `Go to page ${pageNumber}`}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
      <span
        {...(currentPage < totalPages && { onClick: () => handleClick(currentPage + 1) })}
        className={classNames(`flex`, { 'text-neutral-200': currentPage === totalPages })}
      >
        Next
      </span>
    </nav>
  )
}

export default Pagination

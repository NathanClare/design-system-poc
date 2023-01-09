import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

  



const PaginationComp = () => {

    const [currentPage, setCurrentPage] = React.useState(4);
    let maxPages = 10;
    let items = [];
    let leftSide = currentPage - 1;
    if(leftSide <= 0 ) leftSide=1;
    let rightSide = currentPage + 1;
    if(rightSide>maxPages) rightSide = maxPages;
    for (let number = leftSide ; number <= rightSide; number++) {
      items.push(
        <div key={number} className={(number === currentPage ? 'round-effect text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white"' : 'round-effect text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white"')} onClick={()=>{ setCurrentPage(number)}}>
          {number}
        </div>,
      );
    }
  const nextPage = () => {
    if(currentPage<maxPages){
      setCurrentPage(currentPage+1)
    }
  }
  
  const prevPage = () => {
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
    return (
        <>
    <div className="flex flex-col justify-center items-center">
      <div className="pt-2.5"> currentPage : { currentPage } </div>
        
        <div className="pt-2.5 flex">
          <div className="text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white" onClick={prevPage}> &lsaquo; </div>
          {items}
          <div className="text-primary-base text-base text-center rounded p-2.5 h-10 w-10 m-1 shadow hover:no-underline hover:bg-primary-base hover:text-primary-white active:hover:bg-primary-base hover:text-primary-white" onClick={nextPage}> &rsaquo; </div>
        </div>
      </div>
    </>
    )

}

export default PaginationComp

  

  
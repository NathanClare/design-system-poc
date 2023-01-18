import React from 'react'

const Framer = ({}) => {
  return (
    <div className={`fixed flex justify-center items-center w-full h-full top-0 `}>
      <div className={`transition hover:animate-wiggle relative rounded p-6 max-w-[60px] w-[40%] focus:outline-none bg-primary-50 text-neutral-800 z-50`}></div>
    </div>
  )
}

export default Framer

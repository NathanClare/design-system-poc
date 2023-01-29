import React from 'react'

interface FramerProps {
  variant: 'rotate' | 'wiggle'
}

interface IFramerFamilyClasses {
  variant: Record<string, string>
}

const framerFamilyClasses: IFramerFamilyClasses = {
  variant: {
    wiggle: 'hover:animate-wiggle ',
    rotate: 'hover:animate-rotate ',
    jump: 'hover:animate-jump ',
    drop: 'hover:animate-drop ',
    shake: 'hover:animate-shake '
  }
}

const Framer = ({ variant = 'rotate' }: FramerProps) => {
  return (
    <div className={`fixed flex justify-center items-center w-full h-full top-0 `}>
      <div
        className={`transition relative rounded p-6 max-w-[60px] w-[40%] focus:outline-none bg-primary-50 text-surface-800 z-50 ${framerFamilyClasses['variant'][variant]}`}
      ></div>
    </div>
  )
}

export default Framer

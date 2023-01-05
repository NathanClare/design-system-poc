import * as RadixSlider from '@radix-ui/react-slider'
import React from 'react'

interface SliderProps {
  variant?: 'filled' | 'grey'
}

const Slider = ({}: SliderProps) => {
  return (
    <form>
      <RadixSlider.Root
        className="relative flex items-center select-none touch-none w-52 data-[orientation=horizontal]:h-5 data-[orientation=vertical]:w-5 data-[orientation=vertical]:h-24 data-[orientation=vertical]:flex-col"
        defaultValue={[50]}
        max={100}
        step={1}
        aria-label="Volume"
      >
        <RadixSlider.Track className="bg-neutral-300 relative grow rounded-full data-[orientation=vertical]:w-1 data-[orientation=horizontal]:h-1">
          <RadixSlider.Range className="absolute bg-primary-400 rounded-full h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block w-5 h-5 bg-primary-400 shadow rounded-xl focus:bg-primary-600 focus:outline-none focus:shadow-xl" />
      </RadixSlider.Root>
    </form>
  )
}

export default Slider

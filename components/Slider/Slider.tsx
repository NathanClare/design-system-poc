import React from 'react';
import classNames from 'classnames'
import * as Slider from '@radix-ui/react-slider';


interface SliderProps {
    variant?: 'filled' | 'grey'
  }
  
  const sliderClasses: Record<string, Record<string, string>> = {
      variant: {
          'filled': 'bg-primary-60',
          'grey': 'bg-neutral-80'
      }
  }
  
const SliderComp = ({variant = 'filled' }: SliderProps) => {
    const classesStatic = classNames('flex items-center')
    const classesVariant = classNames(sliderClasses['variant'][variant])
  
    return (
        <form>
            <Slider.Root className="relative flex items-center select-none touch-none w-52 data-[orientation=horizontal]:h-5 data-[orientation=vertical]:w-5 data-[orientation=vertical]:h-24 data-[orientation=vertical]:flex-col" defaultValue={[50]} max={100} step={1} aria-label="Volume">
                <Slider.Track className="bg-neutral-70 relative grow rounded-full data-[orientation=vertical]:w-1 data-[orientation=horizontal]:h-1">
                    <Slider.Range className="absolute bg-primary-60 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-primary-60 shadow rounded-xl focus:bg-primary-40 focus:outline-none focus:shadow-xl"/>
            </Slider.Root>
        </form>
    );
}

export default SliderComp;
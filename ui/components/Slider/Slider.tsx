import * as RadixSlider from '@radix-ui/react-slider'
import React, { useState } from 'react'

import Input from '../Input/Input'

interface SliderProps {
  defaultValue: Array<number>
  disabled?: boolean
  label: string
  maxValue: number
  minValue: number
  name: string
  onChange?: () => void
  step?: number
  showInputControls?: boolean
}

const Slider = ({ maxValue, minValue, step = 1, defaultValue, label, disabled = false, showInputControls }: SliderProps) => {
  const [values, setValues] = useState(defaultValue)

  const handleSliderChange = (value: Array<number>) => {
    setValues(value)
  }

  return (
    <>
      <RadixSlider.Root
        className="relative flex touch-none select-none items-center data-[orientation=horizontal]:h-5 data-[orientation=vertical]:h-24 data-[orientation=vertical]:w-5 data-[orientation=vertical]:flex-col"
        defaultValue={values}
        value={values}
        min={minValue}
        max={maxValue}
        step={step}
        aria-label={label}
        disabled={disabled}
        onValueChange={values => handleSliderChange(values)}
        minStepsBetweenThumbs={1}
      >
        <RadixSlider.Track className="relative grow rounded-full bg-neutral-200 data-[orientation=horizontal]:h-xs data-[orientation=vertical]:w-xs">
          <RadixSlider.Range className="absolute h-full rounded-full bg-primary-base opacity-25" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className={ThumbStyles()} />
        <RadixSlider.Thumb className={ThumbStyles()} />
      </RadixSlider.Root>
      {showInputControls && (
        <div className={`mt-md flex items-center justify-between [&_input]:rounded-[4px] [&_input]:py-1.5`}>
          <Input
            type={`number`}
            step={step}
            id={`price-minimum`}
            value={values[0]}
            max={values[1]}
            min={minValue}
            onChange={event => handleSliderChange([Number(event.target.value), values[1]])}
            disabled={disabled}
          />
          <span className="text-neutral-300">-</span>
          <Input
            type={`number`}
            step={step}
            id={`price-maximum`}
            value={values[1]}
            max={maxValue}
            min={values[0]}
            onChange={event => handleSliderChange([values[0], Number(event.target.value)])}
            disabled={disabled}
          />
        </div>
      )}
    </>
  )
}

const ThumbStyles = () =>
  `before:content-[" "] relative block h-md w-md rounded-full bg-primary-400 before:absolute before:left-1/2 before:top-1/2 before:h-lg before:w-lg before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary-base before:opacity-10 hover:cursor-grab focus:shadow-xl hover:scale-110 transition-all focus:outline-none active:cursor-grabbing`

export default Slider

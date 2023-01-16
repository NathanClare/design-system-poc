import * as RadixSwitch from '@radix-ui/react-switch'
import React, { useState } from 'react'

import { CheckIcon } from '@heroicons/react/24/solid'

interface SwitchProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'grey'
  disabled?: boolean
}

interface ISwitchFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const switchFamilyClasses: ISwitchFamilyClasses = {
  size: {
    sm: 'w-8 h-4',
    md: 'w-12 h-6',
    lg: 'w-14 h-7'
  },
  variant: {
    filled: 'data-[state=checked]:bg-primary-900 data-[state=unchecked]:bg-primary-500 [&_svg]:stroke-primary-900',
    grey: 'data-[state=checked]:bg-neutral-700 data-[state=unchecked]:bg-neutral-400 [&_svg]:stroke-neutral-400'
  }
}

const Switch = ({ variant = 'filled', size = 'md', disabled }: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div className={`flex items-center`}>
      <RadixSwitch.Root
        className={`rounded-full relative focus:drop-shadow-lg focus:outline-primary-base focus:border-primary-800 ${switchFamilyClasses['variant'][variant]} ${switchFamilyClasses['size'][size]} disabled:!bg-neutral-300`}
        disabled={disabled}
        onCheckedChange={checked => setChecked(checked)}
      >
        <RadixSwitch.Thumb
          className={
            'block pl-[calc(50%-4px)] h-[calc(100%-4px)] bg-primary-white rounded-full duration-100 absolute top-1/2 -translate-y-1/2 left-0.5 data-[state=checked]:left-full data-[state=checked]:-translate-x-[calc(100%+2px)] transition-all data-[state=checked]:text-slate-50'
          }
        >
          {checked && (
            <span className="absolute left-1/2 top-1/2 width-[90%] -translate-y-1/2 -translate-x-1/2 height-[90%]">
              <CheckIcon className="w-[90%] h-[90%] stroke-2" />
            </span>
          )}
        </RadixSwitch.Thumb>
      </RadixSwitch.Root>
    </div>
  )
}

export default Switch

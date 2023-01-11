import * as RadixSwitch from '@radix-ui/react-switch'
import React from 'react'

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
    filled: 'data-[state=checked]:bg-primary-900 data-[state=unchecked]:bg-primary-500',
    grey: 'data-[state=checked]:bg-neutral-700 data-[state=unchecked]:bg-neutral-400'
  }
}

const Switch = ({ variant = 'filled', size = 'md', disabled }: SwitchProps) => {
  return (
    <>
      <div className={`flex items-center`}>
        <RadixSwitch.Root
          className={`rounded-full relative focus:drop-shadow-lg focus:outline-primary-base focus:border-primary-800 disabled:p-6 ${switchFamilyClasses['variant'][variant]} ${switchFamilyClasses['size'][size]}`}
          disabled={disabled}
        >
          <RadixSwitch.Thumb
            className={
              'block pl-[calc(50%-4px)] h-[calc(100%-4px)] bg-primary-white rounded-full duration-100 absolute top-1/2 -translate-y-1/2 left-0.5 data-[state=checked]:left-full data-[state=checked]:-translate-x-[calc(100%+2px)] transition-all'
            }
          />
        </RadixSwitch.Root>
      </div>
    </>
  )
}

export default Switch

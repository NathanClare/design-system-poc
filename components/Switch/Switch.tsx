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
    sm: 'text-sm px-8 py-3',
    md: 'text-md px-8 py-3',
    lg: 'text-lg px-8 py-3'
  },
  variant: {
    filled: 'data-[state=checked]:bg-primary-900 data-[state=unchecked]:bg-primary-500',
    grey: 'data-[state=checked]:bg-neutral-700 data-[state=unchecked]:bg-neutral-400'
  }
}

const Switch = ({ variant = 'filled', disabled }: SwitchProps) => {
  return (
    <>
      <div className={`flex items-center`}>
        <RadixSwitch.Root
          className={`w-10 h-6 rounded-full relative focus:drop-shadow-lg focus:outline-primary-base focus:border-primary-20 disabled:p-6 ${switchFamilyClasses['variant'][variant]}`}
          disabled={disabled}
        >
          <RadixSwitch.Thumb className={'block w-5 h-5 bg-primary-white rounded-full duration-100 translate-x-1 data-[state=checked]:translate-x-4'} />
        </RadixSwitch.Root>
      </div>
    </>
  )
}

export default Switch

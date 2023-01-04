import * as RadixSwitch from '@radix-ui/react-switch'
import React from 'react'

interface SwitchProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'grey'
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
    filled: 'data-[state=checked]:bg-primary-10 data-[state=unchecked]:bg-primary-50',
    grey: 'data-[state=checked]:bg-neutral-30 data-[state=unchecked]:bg-neutral-60'
  }
}

const Switch = ({ variant = 'filled' }: SwitchProps) => {
  return (
    <form>
      <div className={`flex items-center`}>
        <RadixSwitch.Root
          className={`w-10 h-6 rounded-full relative focus:drop-shadow-lg focus:outline-primary-base focus:border-primary-20 ${switchFamilyClasses['variant'][variant]}`}
        >
          <RadixSwitch.Thumb className={'block w-5 h-5 bg-primary-100 rounded-full duration-100 translate-x-1 data-[state=checked]:translate-x-4'} />
        </RadixSwitch.Root>
      </div>
    </form>
  )
}

export default Switch

import * as RadixSwitch from '@radix-ui/react-switch'
import React, { useState } from 'react'

interface SwitchProps {
  size?: 'lg' | 'md' | 'sm'
  disabled?: boolean
}

const Switch = ({ disabled }: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div className={`flex items-center`}>
      <RadixSwitch.Root
        className={`rounded-full relative focus:drop-shadow-lg focus:outline-surface-200 focus:border-primary-800 data-[state=checked]:bg-primary-base data-[state=unchecked]:bg-surface-200 [&_svg]:stroke-primary-900 w-10 h-5 disabled:!bg-surface-300`}
        disabled={disabled}
        onCheckedChange={checked => setChecked(checked)}
      >
        <RadixSwitch.Thumb
          className={
            'block pl-[calc(50%-4px)] h-[calc(100%-4px)] bg-white rounded-full duration-100 absolute top-1/2 -translate-y-1/2 left-0.5 data-[state=checked]:left-full data-[state=checked]:-translate-x-[calc(100%+2px)] transition-all data-[state=checked]:text-slate-50'
          }
        >
          {checked && <span className="absolute left-1/2 top-1/2 width-[90%] -translate-y-1/2 -translate-x-1/2 height-[90%]"></span>}
        </RadixSwitch.Thumb>
      </RadixSwitch.Root>
    </div>
  )
}

export default Switch

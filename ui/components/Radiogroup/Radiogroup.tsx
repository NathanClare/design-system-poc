import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import React from 'react'

interface IRadioGroupOptions {
  id: string
  label: string
  value: string
}

interface RadioGroupProps {
  options: Array<IRadioGroupOptions>
  disabled: boolean
}

const RadioGroup = ({ options, disabled }: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root className="flex flex-col gap-2.5 transition-colors" defaultValue="default">
      {options?.map(({ id, value, label }) => (
        <div className={`flex items-center`} key={id}>
          <RadixRadioGroup.Item
            className="bg-surface-white w-6 h-6 rounded-full transition duration-300 hover:bg-primary-100 focus:shadow-xl data-[state=checked]:bg-primary-base border border-2 border-surface-300 data-[state=checked]:border-primary-base disabled:border-surface-200 disabled:bg-surface-50 group"
            value={value}
            id={id}
            disabled={disabled}
          >
            <RadixRadioGroup.Indicator
              className={`flex items-center justify-center w-full h-full relative after:block after:h-3 after:w-3 after:rounded-full after:bg-surface-white`}
            />
          </RadixRadioGroup.Item>
          <label className="pl-3.5 text-md select-none text-surface-black group:data-[state=disabled]:text-surface-400" htmlFor={id}>
            {label}
          </label>
        </div>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default RadioGroup

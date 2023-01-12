import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import React from 'react'

interface IRadioGroupOptions {
  id: string
  label: string
  value: string
}

interface RadioGroupProps {
  variant?: 'filled' | 'grey'
  options: Array<IRadioGroupOptions>
}

interface IRadioGroupFamilyClasses {
  variant: Record<string, string>
}

const radioGroupFamilyClasses: IRadioGroupFamilyClasses = {
  variant: {
    filled: 'after:bg-primary-300',
    grey: 'after:bg-neutral-300'
  }
}

const RadioGroup = ({ variant = 'filled', options }: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root className="flex flex-col gap-2.5" defaultValue="default">
      {options?.map(({ id, value, label }) => (
        <div className={`flex items-center`} key={id}>
          <RadixRadioGroup.Item
            className="bg-neutral-white w-6 h-6 rounded-full transition duration-300 shadow hover:bg-neutral-50 focus:shadow-xl"
            value={value}
            id={id}
          >
            <RadixRadioGroup.Indicator
              className={`flex items-center justify-center w-full h-full relative after:block after:h-3 after:w-3 after:rounded-full ${radioGroupFamilyClasses['variant'][variant]}`}
            />
          </RadixRadioGroup.Item>
          <label className="pl-3.5 text-md select-none text-neutral-40" htmlFor={id}>
            {label}
          </label>
        </div>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default RadioGroup

import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import React from 'react'

interface RadioGroupProps {
  variant?: 'filled' | 'grey'
  options: Array<any>
}

interface IRadioGroupFamilyClasses {
  variant: Record<string, string>
}

const radioGroupFamilyClasses: IRadioGroupFamilyClasses = {
  variant: {
    filled: 'after:bg-primary-70',
    grey: 'after:bg-neutral-70'
  }
}

const RadioGroup = ({ variant = 'filled', options }: RadioGroupProps) => {
  return (
    <>
      <RadixRadioGroup.Root className="flex flex-col gap-2.5" defaultValue="default" aria-label="View density">
        {
          options?.map(option => (
            <div className={`flex items-center`}>
            <RadixRadioGroup.Item className="bg-neutral-100 w-6 h-6 rounded-full shadow hover:bg-neutral-90 focus:shadow-xl" value={option.value} id={option.id}>
              <RadixRadioGroup.Indicator
                className={`flex items-center justify-center w-full h-full relative after:block after:h-3 after:w-3 after:rounded-full ${radioGroupFamilyClasses['variant'][variant]}`}
              />
            </RadixRadioGroup.Item>
            <label className="pl-3.5 text-base select-none text-neutral-40" htmlFor={option.id}>
              {option.label}
            </label>
            </div>
          ))
        }

      </RadixRadioGroup.Root>
    </>
  )
}

export default RadioGroup

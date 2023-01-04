import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import React from 'react'

interface RadioGroupProps {
  variant?: 'filled' | 'grey'
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

const RadioGroup = ({ variant = 'filled' }: RadioGroupProps) => {
  return (
    <form>
      <RadixRadioGroup.Root className="flex flex-col gap-2.5" defaultValue="default" aria-label="View density">
        <div className={`flex items-center`}>
          <RadixRadioGroup.Item className="bg-neutral-100 w-6 h-6 rounded-full shadow hover:bg-neutral-90 focus:shadow-xl" value="default" id="r1">
            <RadixRadioGroup.Indicator
              className={`flex items-center justify-center w-full h-full relative after:block after:h-3 after:w-3 after:rounded-full ${radioGroupFamilyClasses['variant'][variant]}`}
            />
          </RadixRadioGroup.Item>
          <label className="pl-3.5 text-base select-none text-neutral-40" htmlFor="r1">
            Default
          </label>
        </div>
      </RadixRadioGroup.Root>
    </form>
  )
}

export default RadioGroup

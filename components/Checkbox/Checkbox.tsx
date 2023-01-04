import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'

interface CheckboxProps {
  children: React.ReactNode
  variant?: 'filled' | 'grey'
}

interface ICheckboxFamilyClasses {
  variant: Record<string, string>
}

const checkboxFamilyClasses: ICheckboxFamilyClasses = {
  variant: {
    filled: 'text-primary-50',
    grey: 'text-neutral-50'
  }
}

const Checkbox = ({ children, variant = 'filled' }: CheckboxProps) => {
  return (
    <form>
      <div className={`flex items-center`}>
        <RadixCheckbox.Root
          className="bg-primary-100 h-6 w-6 p-1 rounded flex items-center shadow focus:shadow-lg hover:text-primary-60"
          defaultChecked
          id="c1"
        >
          <RadixCheckbox.Indicator className={`${checkboxFamilyClasses['variant'][variant]}`}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label className="text-neutral-30 text-base pl-3.5" htmlFor="c1">
          {children}
        </label>
      </div>
    </form>
  )
}

export default Checkbox

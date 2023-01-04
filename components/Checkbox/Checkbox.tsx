import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { DividerHorizontalIcon, CheckIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

interface CheckboxProps {
  label: string
  id: string
  variant?: 'filled'
  checked?: boolean | 'indeterminate'
  disabled?: boolean
}

interface ICheckboxFamilyClasses {
  variant: Record<string, string>
  disabled: string
  unchecked: string
}

const checkboxFamilyClasses: ICheckboxFamilyClasses = {
  variant: {
    filled: 'text-white'
  },
  disabled: 'bg-neutral-80',
  unchecked: 'border-2 border-neutral-40 bg-neutral-100'
}

const Checkbox = ({ label, id, variant = 'filled', checked: state = false, disabled }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(state)

  return (
    <div className={`flex items-center`}>
      <RadixCheckbox.Root
        className={`bg-primary-base transition-colors h-6 w-6 p-1 rounded flex items-center hover:text-primary-60 ${
          !checked ? checkboxFamilyClasses['unchecked'] : ''
        } ${disabled === true ? checkboxFamilyClasses['disabled'] : ''}`}
        defaultChecked
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
        disabled={disabled}
      >
        <RadixCheckbox.Indicator className={`${checkboxFamilyClasses['variant'][variant]}`}>
          {checked === 'indeterminate' && <DividerHorizontalIcon />}
          {checked === true && <CheckIcon />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label className="text-neutral-30 text-base pl-3.5" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox

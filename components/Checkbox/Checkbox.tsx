import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { DividerHorizontalIcon, CheckIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

interface CheckboxProps {
  label: string
  id: string
  checked?: boolean | 'indeterminate'
  disabled?: boolean
  error?: boolean
}

interface ICheckboxFamilyClasses {
  valid: Record<string, string>
  error: Record<string, string>
}

const checkboxFamilyClasses: ICheckboxFamilyClasses = {
  valid: {
    disabled: 'bg-neutral-800',
    unchecked: 'border-200 border-neutral-400 bg-neutral-black',
    base: 'bg-primary-base'
  },
  error: {
    disabled: 'bg-neutral-800',
    unchecked: 'border-200 border-error-400 bg-neutral-black',
    base: 'bg-error-base'
  }
}

const Checkbox = ({ label, id, checked: state = false, disabled, error = false }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(state)

  const getState = () => {
    if (disabled) return 'disabled'

    if (!checked) return 'unchecked'

    return 'base'
  }

  return (
    <div className={`flex items-center`}>
      <RadixCheckbox.Root
        className={`text-white transition-colors h-6 w-6 p-1 rounded flex items-center ${checkboxFamilyClasses[error ? 'error' : 'valid'][getState()]}`}
        defaultChecked
        id={id}
        checked={checked}
        onCheckedChange={setChecked}
        disabled={disabled}
      >
        <RadixCheckbox.Indicator>
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

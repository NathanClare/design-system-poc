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
    disabled: 'bg-surface-200',
    unchecked: 'peer border-2 border-primary-400 bg-surface-white hover:bg-primary-base hover:opacity-40 transition-colors',
    base: 'bg-primary-base'
  },
  error: {
    disabled: 'bg-surface-200',
    unchecked: 'border-2 border-error-500 bg-surface-white hover:bg-error-500 hover:opacity-40 transition-colors',
    base: 'bg-error-500'
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
        className={`text-surface-white transition-colors h-6 w-6 p-1 rounded flex items-center ${checkboxFamilyClasses[error ? 'error' : 'valid'][getState()]}`}
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
      <label className="text-surface-30 text-base pl-3.5 peer-[&[disabled=true]]:text-surface-400" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox

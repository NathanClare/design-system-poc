import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

export interface CheckboxProps {
  id: string
  checked?: boolean | 'indeterminate'
  disabled?: boolean
  error?: boolean
  className?: string
  value: string
  name: string
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void
  swatch?: string
  overrideClasses?: boolean
}

interface ICheckboxFamilyClasses {
  state: Record<string, string>
}

const checkboxFamilyClasses: ICheckboxFamilyClasses = {
  state: {
    disabled: 'bg-surface-30 border-surface-20 [&_svg]:text-surface-0 [&_svg]:bg-surface-100',
    error: 'bg-error-50 border-error-500 [&_svg]:text-surface-0 [&_svg]:bg-error-500',
    active:
      'bg-surface-white border-surface-200 [&_svg]:text-surface-0 [&_svg]:bg-surface-100 disabled:bg-surface-30 [&_svg]:disabled:text-surface-30 [&_svg]:disabled:bg-surface-50 disabled:border-surface-50'
  }
}

const Checkbox = ({ id, checked = false, disabled, error = false, className, name, value, overrideClasses = false, onChange, ...props }: CheckboxProps) => {
  const getState = () => {
    if (overrideClasses) return 'swatch'

    if (error) return 'error'

    return 'active'
  }

  return (
    <div className={`inline-flex items-center`}>
      <RadixCheckbox.Root
        className={`flex items-center rounded border-2 transition-colors h-[20px] w-[20px] [&_svg]:w-4 [&_svg]:h-4 
        } ${checkboxFamilyClasses['state'][getState()]}  ${className || ''}`}
        defaultChecked={checked}
        id={id}
        name={name}
        value={value}
        onCheckedChange={onChange}
        disabled={disabled}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <CheckIcon className="bg-white" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  )
}

export default Checkbox

import * as RadixRadioGroup from '@radix-ui/react-radio-group'

interface IRadioGroupOptions {
  id: string
  label: string
  value: string
}

interface RadioGroupProps {
  options: Array<IRadioGroupOptions>
  disabled: boolean
  size?: 'lg' | 'md'
}

interface IRadioGroupFamilyClasses {
  size: Record<string, Record<string, string>>
}

const radioGrouFamilyClasses: IRadioGroupFamilyClasses = {
  size: {
    md: {
      outer: 'w-[18px] h-[18px]',
      inner: 'after:h-2 after:w-2'
    },
    lg: {
      outer: 'w-6 h-6',
      inner: 'after:h-2.5 after:w-2.5'
    }
  }
}

const RadioGroup = ({ options, disabled, size = 'md' }: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root className="flex flex-col gap-2.5 transition-colors" defaultValue="default">
      {options?.map(({ id, value, label }) => (
        <div className={`flex items-center`} key={id}>
          <RadixRadioGroup.Item
            className={`${radioGrouFamilyClasses['size'][size]['outer']}  group rounded-full border border-2 border-neutral-300 bg-neutral-white transition duration-300 hover:bg-primary-100 focus:shadow-xl disabled:border-neutral-200 disabled:bg-neutral-50 data-[state=checked]:border-primary-base data-[state=checked]:bg-primary-base disabled:data-[state=checked]:border-neutral-200 disabled:data-[state=checked]:bg-neutral-700`}
            value={value}
            id={id}
            disabled={disabled}
          >
            <RadixRadioGroup.Indicator
              className={`${radioGrouFamilyClasses['size'][size]['inner']} relative flex h-full w-full items-center justify-center after:block after:rounded-full after:bg-neutral-white `}
            />
          </RadixRadioGroup.Item>
          <label className="group:data-[state=disabled]:text-neutral-400 select-none pl-3.5 text-base text-neutral-black" htmlFor={id}>
            {label}
          </label>
        </div>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default RadioGroup

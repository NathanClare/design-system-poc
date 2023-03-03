import * as RadixRadioGroup from '@radix-ui/react-radio-group'

interface IRadioGroupOptions {
  id: string
  label: string
  value: string
}

interface RadioButtonProps {
  options: Array<IRadioGroupOptions>
  disabled: boolean
}

const RadioButton = ({ options, disabled }: RadioButtonProps) => {
  return (
    <RadixRadioGroup.Root className="flex flex-col gap-2.5 transition-colors" defaultValue="default">
      {options?.map(({ id, value, label }) => (
        <div className={`flex items-center`} key={id}>
          <RadixRadioGroup.Item
            className={` w-[18px] h-[18px]  group rounded-full border border-2 border-surface-70 bg-surface-0 transition duration-300 focus:shadow-md disabled:border-surface-50 data-[state=checked]:border-primary-base data-[state=checked]:bg-primary-base disabled:data-[state=checked]:border-surface-200 disabled:data-[state=checked]:bg-surface-700`}
            value={value}
            id={id}
            disabled={disabled}
          >
            <RadixRadioGroup.Indicator
              className={`after:h-2.5 after:w-2.5 relative flex h-full w-full items-center justify-center after:block after:rounded-full after:bg-surface-100 !disabled:after:bg-surface-60 `}
            />
          </RadixRadioGroup.Item>
          <label className="group:data-[state=disabled]:text-surface-40 select-none pl-3.5 text-base text-surface-100" htmlFor={id}>
            {label}
          </label>
        </div>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default RadioButton

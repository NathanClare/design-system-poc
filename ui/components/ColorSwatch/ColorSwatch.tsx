import * as RadixRadioGroup from '@radix-ui/react-radio-group'

interface IColorSwatchOptions {
  id: string
  label: string
  value: string
}

interface ColorSwatchProps {
  options: Array<IColorSwatchOptions>
  disabled: boolean
}

const ColorSwatch = ({ options, disabled }: ColorSwatchProps) => {
  return (
    <RadixRadioGroup.Root className="flex gap-2.5 transition-colors" defaultValue="default">
      {options?.map(({ id, value }) => (
        <RadixRadioGroup.Item
          key={id}
          className={` w-[16px] h-[16px] flex rounded border border-2 border-surface-70 bg-surface-0 data-[state=checked]:border-primary-base data-[state=checked]:bg-primary-base`}
          value={value}
          id={id}
          disabled={disabled}
        >
          <RadixRadioGroup.Indicator className={`relative flex h-full w-full items-center justify-center border border-2 border-surface-40 rounded `} />
        </RadixRadioGroup.Item>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default ColorSwatch

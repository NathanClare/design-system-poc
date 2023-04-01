import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import type { StaticImageData } from 'next/image'

interface IColorSwatchOptions {
  id: string
  value: string
  image: StaticImageData
}

interface ColorSwatchProps {
  options: Array<IColorSwatchOptions>
  size?: 'lg' | 'md' | 'sm' | 'xs'
}

interface IColorSwatchFamilyClasses {
  size: Record<string, Record<string, string>>
}

const colorSwatchFamilyClasses: IColorSwatchFamilyClasses = {
  size: {
    xs: {
      base: 'w-[12px] h-[12px]',
      border: 'before:w-[12px] before:h-[12px] before:rounded-full'
    },
    sm: {
      base: 'w-md h-md',
      border: 'before:w-full before:h-full before:rounded-full'
    },
    md: {
      base: 'w-lg h-lg',
      border: 'before:w-full before:h-full before:rounded-full'
    },
    lg: {
      base: 'w-[48px] h-[48px]',
      border: 'before:w-full before:h-full before:rounded-full'
    }
  }
}

const ColorSwatch = ({ options, size = 'md' }: ColorSwatchProps) => {
  return (
    <RadixRadioGroup.Root className="flex gap-2.5 transition-colors" defaultValue="default">
      {options?.map(({ id, value, image }) => (
        <RadixRadioGroup.Item
          key={id}
          className={` ${colorSwatchFamilyClasses['size'][size]['base']} flex rounded`}
          value={value}
          id={id}
          // eslint-disable-next-line react/forbid-component-props, @typescript-eslint/restrict-template-expressions
          style={{ backgroundImage: `url(${image})` }}
        >
          <RadixRadioGroup.Indicator
            className={`relative flex !rounded h-full w-full items-center justify-center ${colorSwatchFamilyClasses['size'][size]['border']} before:outline-rounded before:outline before:outline-offset-0 !before:rounded !rounded before:outline-2 before:outline-brand-black`}
            // eslint-disable-next-line react/forbid-component-props
          />
        </RadixRadioGroup.Item>
      ))}
    </RadixRadioGroup.Root>
  )
}

export default ColorSwatch

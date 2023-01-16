import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import React from 'react'

import { SelectItem } from './SelectlistItem'

interface SelectOption {
  id: string
  label: string
  values: Array<string>
}

interface SelectlistProps {
  variant?: 'filled' | 'grey'
  placeholder?: string
  ariaholder?: string
  options: Array<SelectOption>
  disabled?: boolean
}

interface ISelectlistFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const selectlistFamilyClasses: ISelectlistFamilyClasses = {
  variant: {
    filled: {
      trigger: 'hover:bg-primary-100 data-[placeholder]:text-primary-400',
      content: 'bg-neutral-white',
      label: 'text-neutral-400',
      separator: 'bg-primary-600'
    },
    grey: {
      trigger: 'hover:bg-neutral-100 data-[placeholder]:text-neutral-400',
      content: 'bg-neutral-200',
      label: 'text-primary-400',
      separator: 'bg-neutral-600'
    }
  }
}

const SelectlistComp = ({ variant = 'filled', options, placeholder, ariaholder, disabled }: SelectlistProps) => {
  return (
    <Select.Root>
      <Select.Trigger
        className={`inline-flex items-center justify-center rounded px-4 text-base h-9 gap-1 bg-neutral-white text-primary-base shadow focus:shadow-xl disabled:bg-neutral-100 ${selectlistFamilyClasses['variant'][variant]['trigger']}`}
        aria-label={ariaholder}
        disabled={disabled}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="text-primary-base">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={`overflow-hidden rounded-lg shadow-lg ${selectlistFamilyClasses['variant'][variant]['content']}`}>
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            {options.map(option => (
              <>
                <Select.Group>
                  <Select.Label className={`px-6 text-xs ${selectlistFamilyClasses['variant'][variant]['label']}`}>{option.label}</Select.Label>
                  {option.values.map(value => (
                    <SelectItem value={value} key={value}>
                      {value}
                    </SelectItem>
                  ))}
                </Select.Group>

                <Select.Separator className={`m-1 h-px ${selectlistFamilyClasses['variant'][variant]['separator']}`} />
              </>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-neutral-white text-primary-base cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default SelectlistComp

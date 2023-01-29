import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'
import React from 'react'

import SelectItem from './SelectlistItem/SelectlistItem'

interface SelectOption {
  id: string
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
      trigger: 'bg-primary-100 hover:bg-primary-200 data-[placeholder]:text-surface-600 active:border-2 active:border-2 active:border-primary-600',
      content: 'bg-primary-100',
      label: 'text-surface-400',
      chevron: 'bg-primary-100 text-primary-base',
      select: 'text-primary-base'
    },
    grey: {
      trigger: 'bg-surface-100 hover:bg-surface-200 data-[placeholder]:text-surface-400 active:border-2 active:border-2 active:border-surface-600',
      content: 'bg-surface-100',
      label: 'text-surface-400',
      chevron: 'bg-surface-100 text-surface-base',
      select: 'text-surface-base'
    }
  }
}

const Selectlist = ({ variant = 'filled', options, placeholder, ariaholder, disabled }: SelectlistProps) => {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger
        className={`inline-flex items-center justify-center rounded px-4 text-base h-11 gap-1 bg-surface-white shadow focus:shadow-xl disabled:bg-surface-100 disabled:border-0 ${selectlistFamilyClasses['variant'][variant]['trigger']}`}
        aria-label={ariaholder}
        disabled={disabled}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className={`flex items-center justify-center h-6 cursor-default ${selectlistFamilyClasses['variant'][variant]['select']}`}>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={`animate-fadein overflow-hidden rounded shadow-lg w-full ${selectlistFamilyClasses['variant'][variant]['content']}`}>
          <RadixSelect.ScrollUpButton
            className={`flex items-center justify-center h-6 text-primary-base cursor-default ${selectlistFamilyClasses['variant'][variant]['chevron']}`}
          >
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-1">
            {options.map(option => (
              <>
                <RadixSelect.Group>
                  {option.values.map(value => (
                    <SelectItem value={value} key={value}>
                      {value}
                    </SelectItem>
                  ))}
                </RadixSelect.Group>
              </>
            ))}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton
            className={`flex items-center justify-center h-6 cursor-default ${selectlistFamilyClasses['variant'][variant]['chevron']}`}
          >
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export default Selectlist

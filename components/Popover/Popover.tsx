import { XMarkIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import * as RadixPopover from '@radix-ui/react-popover'
import React from 'react'

import { Icon } from '../../components'

interface IPopoverOptions {
  id: string
  label: string
}

interface PopoverProps {
  ariaLabel?: string
  title?: string
  disabled?: boolean
  variant?: 'filled' | 'grey'
  options: Array<IPopoverOptions>
}

interface IPopoverFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const popoverFamilyClasses: IPopoverFamilyClasses = {
  variant: {
    filled: {
      button: 'text-primary-500 bg-primary-white shadow shadow-primary-100 hover:bg-primary-100 data-[state=open]:bg-primary-100',
      content: 'bg-primary-white',
      title: 'text-primary-black',
      label: 'text-primary-600',
      input: 'text-primary-600',
      close: 'text-primary-400 hover:bg-primary-100',
      arrow: 'fill-white'
    },
    grey: {
      button: 'text-neutral-500 bg-neutral-100 shadow shadow-neutral-100 hover:bg-neutral-200 data-[state=open]:bg-neutral-200',
      content: 'bg-neutral-100',
      title: 'text-primary-black',
      label: 'text-neutral-600',
      input: 'text-neutral-600',
      close: 'text-neutral-400 hover:bg-neutral-200',
      arrow: 'fill-neutral-100'
    }
  }
}

const Popover = ({ variant = 'filled', ariaLabel, title, options, disabled }: PopoverProps) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <button
          className={`transition-colors rounded-full h-9 w-9 inline-flex items-center justify-center focus:shadow-xl disabled:bg-neutral-200 disabled:text-neutral-700 ${popoverFamilyClasses['variant'][variant]['button']}`}
          aria-label={ariaLabel}
          disabled={disabled}
        >
          <Icon variant={'standard'} disabled={true}>
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
          </Icon>
        </button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          className={`transition-colors rounded p-5 max-w-[300px] w-[90%] animate-fadein shadow will-change-transform focus:shadow-lg focus:shadow-primary-500 ${popoverFamilyClasses['variant'][variant]['content']}`}
          sideOffset={5}
        >
          <div className="flex flex-col gap-2.5">
            <p className={`m-0 text-base font-medium mt-2.5 ${popoverFamilyClasses['variant'][variant]['title']}`}>{title}</p>

            {options?.map(option => (
              <fieldset className="flex gap-5 items-center" key={option.id}>
                <label className={`text-base w-[95px] ${popoverFamilyClasses['variant'][variant]['label']}`} htmlFor={option.id}>
                  {option.label}
                </label>
                <input
                  className={`w-full inline-flex justify-center flex-1 rounded px-2.5 text-base text-primary-600 shadow h-6 focus:shadow-lg ${popoverFamilyClasses['variant'][variant]['input']}`}
                  id={option.id}
                />
              </fieldset>
            ))}
          </div>
          <RadixPopover.Close
            className={`transition-colors rounded-full h-6 w-6 items-center justify-center absolute top-2 right-2 focus:shadow-xl ${popoverFamilyClasses['variant'][variant]['close']}`}
            aria-label="Close"
          >
            <Icon variant={'standard'} disabled={true}>
              <XMarkIcon className="h-6 w-6 absolute top-0 right-0 p-1" />
            </Icon>
          </RadixPopover.Close>
          <RadixPopover.Arrow className={`fill-white ${popoverFamilyClasses['variant'][variant]['arrow']}`} />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

export default Popover

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'
import React, { type ReactNode } from 'react'

interface SelectProps {
  children: ReactNode
  placeholder?: string
  disabled?: boolean
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(({ children, disabled, placeholder, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        ref={forwardedRef}
        disabled={disabled}
        className='inline-flex items-center justify-between rounded-[2px] border border-neutral-200 bg-neutral-white px-[12px] py-[7px] text-md outline-none transition-colors disabled:border-neutral-200 disabled:bg-neutral-200 data-[state="open"]:border-0 data-[placeholder]:text-neutral-black'
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className={`pointer-events-none ml-md flex h-6 cursor-default items-center justify-center`}>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="w-full animate-fadein overflow-hidden rounded bg-neutral-white shadow-lg">
          <RadixSelect.ScrollUpButton className={`flex h-6 cursor-default items-center justify-center text-primary-base`}>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className={`flex h-6 cursor-default items-center justify-center`}>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
})

Select.displayName = 'Select'

export default Select

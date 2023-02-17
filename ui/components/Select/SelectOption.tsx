import { CheckIcon } from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'
import React, { type ReactNode } from 'react'

interface SelectOptionProps {
  children: ReactNode
  value: string
}

const SelectOption = React.forwardRef<HTMLDivElement, SelectOptionProps>(({ value, children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      value={value}
      {...props}
      ref={forwardedRef}
      className="text-neutral-base data-[highlighted]:bg-primary-200 data-[highlighted]:text-neutral-base relative flex w-full select-none justify-between rounded-sm px-[12px] py-sm text-md hover:bg-neutral-50 data-[disabled]:pointer-events-none data-[disabled]:text-neutral-400 data-[highlighted]:outline-none"
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="mr-sm">
        <CheckIcon className="h-4 w-4" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
})

SelectOption.displayName = 'SelectOption'

export default SelectOption

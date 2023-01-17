import { CheckIcon } from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'
import classnames from 'classnames'
import React from 'react'

interface SelectItemProps {
  className?: string
  value: string
  children: React.ReactNode
}

const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <RadixSelect.Item
      className={classnames(
        ' text-md  text-neutral-base rounded-sm flex items-center my-2 h-6 py-5 pr-9 pl-6 relative select-none data-[disabled]:text-neutral-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary-200 data-[highlighted]:text-neutral-base data-[highlighted]:outline-none',
        className
      )}
      {...props}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}

export default SelectItem

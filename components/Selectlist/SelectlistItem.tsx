import { CheckIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'
import React from 'react'

interface SelectItemProps {
  className?: string
  value: string
  children: React.ReactNode
  disabled?: boolean
}

export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <Select.Item
      className={classnames(
        ' text-md  text-neutral-base rounded-sm flex items-center my-2 h-6 py-5 pr-9 pl-6 relative select-none data-[disabled]:text-neutral-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary-200 data-[highlighted]:text-neutral-base data-[highlighted]:outline-none',
        className
      )}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
